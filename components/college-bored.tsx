'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import type { DiagnosticSet, Question } from '@/lib/college-bored-data'
import {
  examFormats,
  getCoverageReport,
  getDiagnosticExamSet,
  getFullExamRun,
  getQuestionDifficulty,
  getQuestionQualityReport,
  getQuestionsForCourse,
  getRandomExamSet,
  getResourcesForCourse,
  normalizeCourseKey,
} from '@/lib/college-bored-data'

interface CollegeBoredProps {
  courseShort: string  // e.g. "apes"
}

function shuffleMcqOptions(q: Question): Question {
  if (q.type !== 'mcq' || !q.options || q.options.length === 0) return q
  const correctOption = q.options.find((opt) => opt.letter === q.correctAnswer)
  if (!correctOption) return q

  const shuffled = [...q.options].sort(() => Math.random() - 0.5)
  const relabel = ['A', 'B', 'C', 'D']
  const remapped = shuffled.map((opt, idx) => ({
    ...opt,
    letter: relabel[idx] ?? opt.letter,
  }))
  const newCorrect = remapped.find((opt) => opt.text === correctOption.text)?.letter ?? q.correctAnswer

  return {
    ...q,
    options: remapped,
    correctAnswer: newCorrect,
  }
}

const COURSE_OPTIONS = [
  { key: 'apes', label: 'AP Environmental Science', path: '/apes' },
  { key: 'apush', label: 'AP United States History', path: '/apush' },
  { key: 'csp', label: 'AP Computer Science Principles', path: '/csp' },
  { key: 'lang', label: 'AP English Language & Composition', path: '/lang' },
]

type RunMode = 'standard' | 'diagnostic'

interface ActiveRunMeta {
  runMode: RunMode
  label: string
  diagnostic?: DiagnosticSet
  targetQuestions?: number
  sourceLabel?: string
  usedQuestionLoop?: boolean
  sectionLabel?: string
}

// ─── TIMER ───────────────────────────────────────────────────────────────────
function useTimer(initialSeconds: number, running: boolean) {
  const [seconds, setSeconds] = useState(initialSeconds)
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000)
    return () => clearInterval(id)
  }, [running])
  const reset = (s: number) => setSeconds(s)
  const fmt = (s: number) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  }
  return { seconds, fmt, reset }
}

// ─── EXAM FORMAT TAB ─────────────────────────────────────────────────────────
function ExamFormatTab({ courseShort }: { courseShort: string }) {
  const normalizedCourse = normalizeCourseKey(courseShort)
  const fallbackCourse = Object.keys(examFormats)[0]
  const selected = examFormats[normalizedCourse] ? normalizedCourse : fallbackCourse
  const info = examFormats[selected]

  return (
    <div className="flex flex-col h-full overflow-auto p-8" style={{ color: '#1a1a2e' }}>
      {info && (
        <>
          <div className="mb-6 p-4 rounded-lg" style={{ background: '#f0f4ff', border: '1px solid #c7d2fe' }}>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold text-gray-900">{info.courseLabel}</h2>
              <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#3730a3', color: '#fff' }}>
                {info.courseShort}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{info.overview}</p>
            <p className="text-xs font-semibold text-gray-500">Total Time: {info.totalTime}</p>
          </div>

          <div className="space-y-5">
            {info.sections.map((section, i) => (
              <div key={i} className="rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-5 py-3" style={{ background: '#1e1b4b', color: '#fff' }}>
                  <h3 className="font-bold text-base">{section.sectionName}</h3>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-sm text-gray-700 mb-3">{section.description}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="text-xs">
                      <span className="font-semibold text-gray-500 uppercase tracking-wide">Time</span>
                      <p className="font-bold text-gray-800 mt-0.5">{section.time}</p>
                    </div>
                    <div className="text-xs">
                      <span className="font-semibold text-gray-500 uppercase tracking-wide">Questions</span>
                      <p className="font-bold text-gray-800 mt-0.5">{section.questions}</p>
                    </div>
                    <div className="text-xs">
                      <span className="font-semibold text-gray-500 uppercase tracking-wide">Exam Weight</span>
                      <p className="font-bold text-gray-800 mt-0.5">{section.weight}</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Strategy Tips</p>
                    {section.tips.map((tip, ti) => (
                      <div key={ti} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="shrink-0 mt-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: '#3730a3' }}>
                          {ti + 1}
                        </span>
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── RESOURCES TAB ──────────────────────────────────────────────────────────
function ResourcesTab({ courseShort }: { courseShort: string }) {
  const resources = getResourcesForCourse(courseShort)
  const coverage = getCoverageReport(courseShort)
  const quality = getQuestionQualityReport(courseShort)

  return (
    <div className="flex flex-col h-full overflow-auto p-8 bg-white text-gray-800">
      <div className="mb-6 p-4 rounded-lg border border-indigo-200" style={{ background: '#f5f7ff' }}>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Official Resources</h2>
        <p className="text-sm text-gray-600">
          Curated links from College Board + a built-in coverage validator for this course.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
        {resources.links.map((link, i) => (
          <a
            key={`${link.url}-${i}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded border border-gray-200 hover:border-indigo-400 transition-colors"
            style={{ background: '#fff' }}
          >
            <p className="font-semibold text-sm text-indigo-900">{link.label}</p>
            <p className="text-xs text-gray-500 mt-1">{link.detail}</p>
          </a>
        ))}
      </div>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200" style={{ background: '#fafafa' }}>
          <h3 className="font-bold text-sm text-gray-900">Coverage Validation (Ordered by Unit)</h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Questions: {coverage.totalQuestions}/{coverage.targetQuestions} · Topics covered: {coverage.coveredTopics}/{coverage.topicCount} · Units in order: {coverage.unitsInOrder ? 'yes' : 'no'}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Data checks: duplicate IDs {quality.duplicateIdCount} · invalid MCQ keys {quality.invalidMcqAnswerKeyCount} · MCQ option issues {quality.mcqOptionCountIssues} · FRQ structure issues {quality.frqStructureIssues} · topic mapping issues {quality.topicTagIssues}
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {coverage.units.map((unit) => (
            <div key={unit.unit} className="p-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-900">
                  unit {unit.unit}
                </span>
                <span className="text-sm font-semibold text-gray-900">{unit.title}</span>
                <span className="ml-auto text-xs text-gray-500">
                  {unit.questionCount} Q · {unit.mcqCount} MCQ · {unit.frqCount} FRQ
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {unit.topics.map((topic, i) => (
                  <span
                    key={`${unit.unit}-${i}-${topic.topic}`}
                    className="text-[11px] px-2 py-0.5 rounded border"
                    style={{
                      borderColor: topic.covered ? '#86efac' : '#fecaca',
                      background: topic.covered ? '#f0fdf4' : '#fef2f2',
                      color: topic.covered ? '#166534' : '#991b1b',
                    }}
                    title={`${topic.questionCount} question(s) mapped`}
                  >
                    {topic.covered ? 'covered' : 'review'} · {topic.topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── MCQ QUESTION PANEL ───────────────────────────────────────────────────────
function MCQPanel({
  q,
  selected,
  onSelect,
  struck,
  onToggleStrike,
  revealed,
}: {
  q: Question
  selected: string | null
  onSelect: (l: string) => void
  struck: Set<string>
  onToggleStrike: (l: string) => void
  revealed: boolean
}) {
  return (
    <div className="flex h-full">
      {/* Left: stimulus */}
      <div
        className="w-[45%] shrink-0 h-full overflow-y-auto border-r border-gray-200 p-6 text-sm text-gray-800 leading-relaxed"
        style={{ background: '#fff' }}
      >
        {q.stimulus ? (
          <>
            <p className="whitespace-pre-line">{q.stimulus}</p>
            {q.stimulusLabel && (
              <p className="mt-4 text-right text-xs text-gray-500 italic">{q.stimulusLabel}</p>
            )}
          </>
        ) : (
          <p className="text-gray-400 italic">This is a stand-alone question with no attached stimulus.</p>
        )}
      </div>

      {/* Vertical divider handle */}
      <div className="w-px bg-gray-300 shrink-0" />

      {/* Right: question + options */}
      <div className="flex-1 h-full overflow-y-auto p-6 bg-white">
        <p className="text-sm font-semibold text-gray-800 mb-5 leading-relaxed">{q.question}</p>
        <div className="space-y-2">
          {q.options?.map(opt => {
            const isSelected = selected === opt.letter
            const isCorrect = opt.letter === q.correctAnswer
            const isStruck = struck.has(opt.letter)
            let bg = '#fff'
            let borderColor = '#d1d5db'
            let textColor = '#374151'
            if (revealed) {
              if (isCorrect) { bg = '#f0fdf4'; borderColor = '#22c55e'; textColor = '#166534' }
              else if (isSelected && !isCorrect) { bg = '#fef2f2'; borderColor = '#ef4444'; textColor = '#991b1b' }
            } else if (isSelected) {
              bg = '#eff6ff'; borderColor = '#3b82f6'; textColor = '#1d4ed8'
            }
            return (
              <button
                key={opt.letter}
                type="button"
                onClick={() => !revealed && onSelect(opt.letter)}
                className="w-full flex items-start gap-3 px-4 py-3 rounded text-left text-sm transition-all"
                style={{
                  background: bg,
                  border: `1.5px solid ${borderColor}`,
                  color: textColor,
                  cursor: revealed ? 'default' : 'pointer',
                }}
              >
                <span
                  className="shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center font-bold text-xs"
                  style={{
                    borderColor,
                    color: textColor,
                    background: isSelected || (revealed && isCorrect) ? borderColor : 'transparent',
                    color: isSelected || (revealed && isCorrect) ? '#fff' : textColor,
                  }}
                >
                  {opt.letter}
                </span>
                <span
                  className="leading-relaxed flex-1"
                  style={{
                    textDecoration: isStruck ? 'line-through' : 'none',
                    opacity: isStruck ? 0.55 : 1,
                  }}
                >
                  {opt.text}
                </span>
                {!revealed && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      onToggleStrike(opt.letter)
                    }}
                    className="shrink-0 px-2 py-1 rounded border text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      borderColor: isStruck ? '#ef4444' : '#cbd5e1',
                      color: isStruck ? '#b91c1c' : '#64748b',
                      background: isStruck ? '#fef2f2' : '#f8fafc',
                    }}
                    title={isStruck ? 'Remove strikeout' : 'Strike out option'}
                  >
                    {isStruck ? 'Undo' : 'Strike'}
                  </button>
                )}
              </button>
            )
          })}
        </div>

        {revealed && (
          <div className="mt-5 p-4 rounded-lg text-sm" style={{ background: '#f0f4ff', border: '1px solid #c7d2fe' }}>
            <p className="font-bold text-indigo-800 mb-1">Explanation</p>
            <p className="text-gray-700 leading-relaxed">{q.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── FRQ PANEL ────────────────────────────────────────────────────────────────
function FRQPanel({ q, revealed }: { q: Question; revealed: boolean }) {
  const [responses, setResponses] = useState<Record<string, string>>({})

  return (
    <div className="flex h-full">
      {/* Left: stimulus */}
      <div
        className="w-[40%] shrink-0 h-full overflow-y-auto border-r border-gray-200 p-6 text-sm text-gray-800 leading-relaxed"
        style={{ background: '#fff' }}
      >
        {q.stimulus ? (
          <p className="whitespace-pre-line">{q.stimulus}</p>
        ) : (
          <p className="text-gray-400 italic">This FRQ is stand-alone and does not include a stimulus.</p>
        )}
      </div>

      <div className="w-px bg-gray-300 shrink-0" />

      {/* Right: FRQ parts */}
      <div className="flex-1 h-full overflow-y-auto p-6 bg-white">
        <p className="text-sm font-semibold text-gray-800 mb-5 leading-relaxed">{q.question}</p>
        {q.frqParts?.map((part) => (
          <div key={part.part} className="mb-5">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-bold text-gray-800 text-sm">({part.part})</span>
              <span className="text-sm text-gray-700">{part.prompt}</span>
              <span className="ml-auto shrink-0 text-xs font-semibold text-gray-400">[{part.points} pt{part.points > 1 ? 's' : ''}]</span>
            </div>
            <textarea
              disabled={revealed}
              value={responses[part.part] || ''}
              onChange={e => setResponses(r => ({ ...r, [part.part]: e.target.value }))}
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-50"
              placeholder="Type your response..."
            />
          </div>
        ))}

        {revealed && (
          <div className="mt-2 p-4 rounded-lg text-sm" style={{ background: '#f0f4ff', border: '1px solid #c7d2fe' }}>
            <p className="font-bold text-indigo-800 mb-1">Rubric Key Points</p>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{q.correctAnswer}</p>
            <div className="mt-3 pt-3 border-t border-indigo-200">
              <p className="font-bold text-indigo-800 mb-1">Why This Is Tested</p>
              <p className="text-gray-700 leading-relaxed">{q.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── PRACTICE TAB ─────────────────────────────────────────────────────────────
function PracticeTab({ courseShort }: { courseShort: string }) {
  const allQs = getQuestionsForCourse(courseShort)
  const normalizedCourse = normalizeCourseKey(courseShort)
  const isApushCourse = normalizedCourse === 'apush'
  const [mode, setMode] = useState<'browse' | 'exam' | 'review'>('browse')
  const [examQs, setExamQs] = useState<Question[]>([])
  const [runMeta, setRunMeta] = useState<ActiveRunMeta>({ runMode: 'standard', label: 'practice set' })
  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [markedReview, setMarkedReview] = useState<Set<string>>(new Set())
  const [struckOptions, setStruckOptions] = useState<Record<string, string[]>>({})
  const [questionMapOpen, setQuestionMapOpen] = useState(true)
  const [timerRunning, setTimerRunning] = useState(false)
  // 90 minutes default for practice
  const { seconds, fmt, reset } = useTimer(90 * 60, timerRunning)

  const cloneQuestionForRun = (q: Question, idx: number): Question => ({
    ...q,
    id: `${q.id}__run_${idx + 1}`,
  })

  const sourceWeighted = (pool: Question[]) =>
    [...pool].sort((a, b) => {
      const sourceScore = (q: Question) => (q.source === 'Released' ? 2 : 1)
      const difficultyScore = (q: Question) =>
        getQuestionDifficulty(q) === 'hard' ? 2 : getQuestionDifficulty(q) === 'medium' ? 1 : 0
      const sourceDiff = sourceScore(b) - sourceScore(a)
      if (sourceDiff !== 0) return sourceDiff
      const diff = difficultyScore(b) - difficultyScore(a)
      if (diff !== 0) return diff
      return a.id.localeCompare(b.id)
    })

  const buildRunFromPool = (pool: Question[], targetCount: number): { run: Question[]; usedLoop: boolean } => {
    if (pool.length === 0) return { run: [], usedLoop: false }
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    if (shuffled.length >= targetCount) {
      return { run: shuffled.slice(0, targetCount), usedLoop: false }
    }

    const run: Question[] = []
    let idx = 0
    while (run.length < targetCount) {
      const base = shuffled[idx % shuffled.length]
      run.push(cloneQuestionForRun(base, run.length))
      idx += 1
    }
    return { run, usedLoop: true }
  }

  const getApushSectionRun = (sectionId: 'mcq' | 'saq' | 'dbq' | 'leq' | 'full'): { questions: Question[]; target: number; seconds: number; label: string; sourceLabel: string; usedLoop: boolean } => {
    const mcqPool = sourceWeighted(allQs.filter((q) => q.type === 'mcq'))
    const frqPool = sourceWeighted(allQs.filter((q) => q.type === 'frq'))

    if (sectionId === 'mcq') {
      const target = 55
      const built = buildRunFromPool(mcqPool, target)
      return {
        questions: built.run,
        target,
        seconds: 95 * 60,
        label: 'section i part a — mcq simulation',
        sourceLabel: '55 MCQ target',
        usedLoop: built.usedLoop,
      }
    }

    if (sectionId === 'saq') {
      const target = 3
      const built = buildRunFromPool(frqPool, target)
      return {
        questions: built.run,
        target,
        seconds: 40 * 60,
        label: 'section i part b — saq simulation',
        sourceLabel: '3 short-response target',
        usedLoop: built.usedLoop,
      }
    }

    if (sectionId === 'dbq') {
      const dbqSeed = [...frqPool].sort((a, b) => (b.stimulus?.length || 0) - (a.stimulus?.length || 0))[0]
      const picked = dbqSeed ? [cloneQuestionForRun(dbqSeed, 0)] : []
      return {
        questions: picked,
        target: 1,
        seconds: 60 * 60,
        label: 'section ii — dbq simulation',
        sourceLabel: '1 DBQ-style prompt',
        usedLoop: false,
      }
    }

    if (sectionId === 'leq') {
      const leqSeed = [...frqPool].sort((a, b) => (a.stimulus ? 1 : 0) - (b.stimulus ? 1 : 0))[0]
      const picked = leqSeed ? [cloneQuestionForRun(leqSeed, 0)] : []
      return {
        questions: picked,
        target: 1,
        seconds: 40 * 60,
        label: 'section ii — leq simulation',
        sourceLabel: '1 LEQ-style prompt',
        usedLoop: false,
      }
    }

    const mcqBuilt = buildRunFromPool(mcqPool, 55)
    const frqBuilt = buildRunFromPool(frqPool, 4)
    return {
      questions: [...mcqBuilt.run, ...frqBuilt.run],
      target: 59,
      seconds: 3 * 60 * 60 + 15 * 60,
      label: 'full apush simulation',
      sourceLabel: 'section i + section ii style run',
      usedLoop: mcqBuilt.usedLoop || frqBuilt.usedLoop,
    }
  }

  const buildMcqSet = (seed?: Question) => {
    const mcqs = allQs
      .filter((q) => q.type === 'mcq')
      .sort((a, b) => {
        const diff = (getQuestionDifficulty(b) === 'hard' ? 2 : getQuestionDifficulty(b) === 'medium' ? 1 : 0)
          - (getQuestionDifficulty(a) === 'hard' ? 2 : getQuestionDifficulty(a) === 'medium' ? 1 : 0)
        if (diff !== 0) return diff
        return a.id.localeCompare(b.id)
      })
    if (mcqs.length === 0) return []

    const targetCount = Math.min(10, mcqs.length)
    const shuffle = (pool: Question[]) => [...pool].sort(() => Math.random() - 0.5)

    if (!seed) {
      return shuffle(mcqs).slice(0, targetCount)
    }

    const sameUnit = shuffle(mcqs.filter(q => q.id !== seed.id && q.unit === seed.unit))
    const otherUnits = shuffle(mcqs.filter(q => q.id !== seed.id && q.unit !== seed.unit))
    return [seed, ...sameUnit, ...otherUnits].slice(0, targetCount)
  }

  const startExam = (qs: Question[], timeSeconds: number, nextMeta?: ActiveRunMeta) => {
    setExamQs(qs.map(shuffleMcqOptions))
    setQIndex(0)
    setAnswers({})
    setMarkedReview(new Set())
    setStruckOptions({})
    setQuestionMapOpen(true)
    if (nextMeta) setRunMeta(nextMeta)
    reset(timeSeconds)
    setTimerRunning(true)
    setMode('exam')
  }

  const submitExam = () => {
    setTimerRunning(false)
    setMode('review')
  }

  const reviewData = useMemo(() => {
    const mcqs = examQs.filter((q) => q.type === 'mcq')
    const total = mcqs.length
    const correct = mcqs.filter((q) => answers[q.id] && answers[q.id] === q.correctAnswer).length
    const attempted = mcqs.filter((q) => !!answers[q.id]).length

    const unitPerf = new Map<number, { attempted: number; correct: number; total: number }>()
    const topicPerf = new Map<string, { attempted: number; correct: number; total: number }>()

    mcqs.forEach((q) => {
      const unit = unitPerf.get(q.unit) ?? { attempted: 0, correct: 0, total: 0 }
      unit.total += 1
      if (answers[q.id]) {
        unit.attempted += 1
        if (answers[q.id] === q.correctAnswer) unit.correct += 1
      }
      unitPerf.set(q.unit, unit)

      const topicKey = q.diagnosticTopic?.trim() || q.topic?.trim() || `Unit ${q.unit}`
      const topic = topicPerf.get(topicKey) ?? { attempted: 0, correct: 0, total: 0 }
      topic.total += 1
      if (answers[q.id]) {
        topic.attempted += 1
        if (answers[q.id] === q.correctAnswer) topic.correct += 1
      }
      topicPerf.set(topicKey, topic)
    })

    const unitRows = Array.from(unitPerf.entries())
      .map(([unit, stats]) => ({
        label: `Unit ${unit}`,
        ...stats,
        accuracy: stats.attempted > 0 ? stats.correct / stats.attempted : 0,
      }))
      .sort((a, b) => b.accuracy - a.accuracy)

    const topicRows = Array.from(topicPerf.entries())
      .map(([label, stats]) => ({
        label,
        ...stats,
        accuracy: stats.attempted > 0 ? stats.correct / stats.attempted : 0,
      }))
      .sort((a, b) => b.accuracy - a.accuracy)

    const strengths = topicRows.filter((x) => x.attempted >= 1 && x.accuracy >= 0.75).slice(0, 5)
    const needsHelp = topicRows.filter((x) => x.attempted >= 1 && x.accuracy < 0.6).slice(0, 8)
    const missed = mcqs.filter((q) => !!answers[q.id] && answers[q.id] !== q.correctAnswer)
    const skipped = mcqs.filter((q) => !answers[q.id])

    const diagnosticQuestions = mcqs.filter((q) => !!q.diagnosticTopic)
    const exactMatches = diagnosticQuestions.filter((q) => q.diagnosticMatch === 'exact').length
    const assessedTopics = new Set(
      diagnosticQuestions
        .filter((q) => !!answers[q.id])
        .map((q) => q.diagnosticTopic as string),
    ).size
    const totalTopics = runMeta.diagnostic?.totalTopics ?? diagnosticQuestions.length
    const coverageRatio = totalTopics > 0 ? assessedTopics / totalTopics : 0
    const responseRatio = total > 0 ? attempted / total : 0
    const exactRatio = diagnosticQuestions.length > 0 ? exactMatches / diagnosticQuestions.length : 0
    const confidenceScore = Math.max(0, Math.min(1, coverageRatio * 0.5 + responseRatio * 0.25 + exactRatio * 0.25))
    const confidenceBand = confidenceScore >= 0.8 ? 'High' : confidenceScore >= 0.6 ? 'Moderate' : 'Low'

    return {
      total,
      correct,
      attempted,
      scorePct: total > 0 ? (correct / total) * 100 : 0,
      unitRows,
      strengths,
      needsHelp,
      topicRows,
      missed,
      skipped,
      confidenceScore,
      confidenceBand,
      assessedTopics,
      totalTopics,
      exactMatches,
      diagnosticCount: diagnosticQuestions.length,
    }
  }, [examQs, answers, runMeta])

  const currentQ = examQs[qIndex]
  const timeWarn = seconds < 300 // < 5 min warning
  const questionStatus = examQs.map((q) => {
    const answered = !!answers[q.id]
    const marked = markedReview.has(q.id)
    return { id: q.id, answered, marked }
  })

  const toggleStrikeOption = (questionId: string, letter: string) => {
    setStruckOptions((prev) => {
      const existing = new Set(prev[questionId] ?? [])
      if (existing.has(letter)) existing.delete(letter)
      else existing.add(letter)
      return { ...prev, [questionId]: Array.from(existing) }
    })
  }

  if (mode === 'browse') {
    const mcqs = allQs.filter(q => q.type === 'mcq')
    const frqs = allQs.filter(q => q.type === 'frq')

    return (
      <div className="flex flex-col h-full overflow-auto p-8 bg-white">
        {/* Random exam button */}
        <div
          className="mb-8 p-5 rounded-lg animate-gradient-shift"
          style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #0f172a 100%)' }}
        >
          <h3 className="text-white font-bold text-base mb-1">Diagnostic + Practice Sets</h3>
          <p className="text-indigo-200 text-sm mb-3">Run a topic-balanced diagnostic for reliable placement, or launch standard mixed/exam-style drills.</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                const diagnostic = getDiagnosticExamSet(courseShort)
                const timeSeconds = Math.max(20 * 60, diagnostic.questions.length * 85)
                startExam(
                  diagnostic.questions,
                  timeSeconds,
                  { runMode: 'diagnostic', label: 'topic-balanced diagnostic', diagnostic },
                )
              }}
              className="flex items-center gap-2 px-4 py-2 rounded font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: '#16a34a', color: '#fff' }}
            >
              Start Diagnostic Run
            </button>
            <button
              type="button"
              onClick={() => startExam(getFullExamRun(courseShort), 90 * 60, { runMode: 'standard', label: 'full run' })}
              className="flex items-center gap-2 px-4 py-2 rounded font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: '#0f172a', color: '#fff' }}
            >
              Start Full 30Q Run
            </button>
            <button
              type="button"
              onClick={() => startExam(getRandomExamSet(courseShort), 90 * 60, { runMode: 'standard', label: 'mixed set' })}
              className="flex items-center gap-2 px-4 py-2 rounded font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: '#fff', color: '#1e1b4b' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/>
              </svg>
              Start Mixed Set
            </button>
            <button
              type="button"
              onClick={() => {
                const mcqSet = buildMcqSet()
                const timeSeconds = Math.max(10 * 60, mcqSet.length * 75)
                startExam(mcqSet, timeSeconds, { runMode: 'standard', label: 'mcq drill' })
              }}
              className="flex items-center gap-2 px-4 py-2 rounded font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: '#312e81', color: '#fff' }}
            >
              Start MCQ Drill
            </button>
          </div>
        </div>

        {isApushCourse && (
          <div className="mb-8 rounded-xl border border-indigo-200 overflow-hidden">
            <div className="px-5 py-3 border-b border-indigo-200 bg-indigo-50">
              <h3 className="text-base font-black text-indigo-950">APUSH Exam Sections</h3>
              <p className="text-xs text-indigo-800 mt-1">CollegeBoard-style section flow with official timing windows and full-length simulation options.</p>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 bg-white">
              {[
                { id: 'mcq', label: 'Section I Part A', detail: '55 MCQ · 95 min' },
                { id: 'saq', label: 'Section I Part B', detail: '3 SAQ-style prompts · 40 min' },
                { id: 'dbq', label: 'Section II DBQ', detail: '1 DBQ-style prompt · 60 min' },
                { id: 'leq', label: 'Section II LEQ', detail: '1 LEQ-style prompt · 40 min' },
                { id: 'full', label: 'Full APUSH Run', detail: 'Section I + II flow · 3h15m' },
              ].map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => {
                    const section = getApushSectionRun(preset.id as 'mcq' | 'saq' | 'dbq' | 'leq' | 'full')
                    startExam(
                      section.questions,
                      section.seconds,
                      {
                        runMode: 'standard',
                        label: section.label,
                        targetQuestions: section.target,
                        sourceLabel: section.sourceLabel,
                        usedQuestionLoop: section.usedLoop,
                        sectionLabel: preset.label,
                      },
                    )
                  }}
                  className="text-left p-4 rounded-lg border border-slate-200 hover:border-indigo-400 hover:-translate-y-0.5 transition-all"
                  style={{ background: '#fcfcff' }}
                >
                  <p className="text-sm font-bold text-slate-900">{preset.label}</p>
                  <p className="text-xs text-slate-600 mt-1">{preset.detail}</p>
                  <p className="text-[11px] text-indigo-700 mt-2 font-semibold">Start section</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MCQs */}
        {mcqs.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              Multiple Choice
              <span className="text-xs font-normal text-gray-400">({mcqs.length} questions)</span>
            </h3>
            <div className="space-y-2">
              {mcqs.map((q, i) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    const mcqSet = buildMcqSet(q)
                    const timeSeconds = Math.max(10 * 60, mcqSet.length * 75)
                    startExam(mcqSet, timeSeconds, { runMode: 'standard', label: 'seeded mcq drill' })
                  }}
                  className="w-full flex items-start gap-3 p-4 rounded text-left transition-all hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
                >
                  <span
                    className="shrink-0 w-7 h-7 flex items-center justify-center rounded font-mono text-xs font-bold text-white"
                    style={{ background: '#1e1b4b' }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      Unit {q.unit}{q.topic ? ` — ${q.topic}` : ''}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{q.question}</p>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded font-medium"
                      style={{
                        background: q.source === 'Released' ? '#dcfce7' : '#fef9c3',
                        color: q.source === 'Released' ? '#166534' : '#854d0e',
                      }}
                    >
                      {q.source}
                    </span>
                    <span className="text-xs text-gray-400">{q.sourceDetail}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FRQs */}
        {frqs.length > 0 && (
          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              Free Response
              <span className="text-xs font-normal text-gray-400">({frqs.length} questions)</span>
            </h3>
            <div className="space-y-2">
              {frqs.map((q, i) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => startExam([q], 25 * 60, { runMode: 'standard', label: 'single frq' })}
                  className="w-full flex items-start gap-3 p-4 rounded text-left transition-all hover:bg-gray-50 border border-gray-200 hover:border-indigo-300"
                >
                  <span
                    className="shrink-0 w-7 h-7 flex items-center justify-center rounded font-mono text-xs font-bold text-white"
                    style={{ background: '#4338ca' }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800">
                      Unit {q.unit} FRQ{q.topic ? ` — ${q.topic}` : ''}{' '}
                      <span className="font-normal text-gray-500">({q.totalPoints} pts)</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{q.question}</p>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded font-medium"
                      style={{
                        background: q.source === 'Released' ? '#dcfce7' : '#fef9c3',
                        color: q.source === 'Released' ? '#166534' : '#854d0e',
                      }}
                    >
                      {q.source}
                    </span>
                    <span className="text-xs text-gray-400">{q.sourceDetail}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {allQs.length === 0 && (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-sm">Question bank unavailable for this course.</p>
          </div>
        )}
      </div>
    )
  }

  // ── Exam mode ────────────────────────────────────────────────────────────
  if (!currentQ) return null
  const isMarked = markedReview.has(currentQ.id)

  const toggleMark = () => {
    setMarkedReview(prev => {
      const next = new Set(prev)
      next.has(currentQ.id) ? next.delete(currentQ.id) : next.add(currentQ.id)
      return next
    })
  }

  if (mode === 'review') {
    return (
      <div className="h-full overflow-auto p-8 bg-white">
        <div className="mb-6 p-5 rounded-lg border border-indigo-200" style={{ background: '#eef2ff' }}>
          <h3 className="text-xl font-black text-slate-900 mb-1">Performance Review</h3>
          <p className="text-sm text-slate-700">
            Score: <span className="font-bold">{reviewData.correct}/{reviewData.total}</span> ({reviewData.scorePct.toFixed(1)}%) · Attempted {reviewData.attempted}/{reviewData.total}
          </p>
          <p className="text-xs text-slate-600 mt-1">Run type: {runMeta.label}</p>
        </div>

        {runMeta.runMode === 'diagnostic' && (
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-lg border border-indigo-200 p-4 bg-indigo-50">
              <p className="text-xs uppercase tracking-wide font-bold text-indigo-800">Diagnostic Confidence</p>
              <p className="text-2xl font-black text-indigo-950 mt-1">{reviewData.confidenceBand}</p>
              <p className="text-xs text-indigo-900 mt-1">{(reviewData.confidenceScore * 100).toFixed(0)}% reliability score</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
              <p className="text-xs uppercase tracking-wide font-bold text-slate-700">Topics Assessed</p>
              <p className="text-2xl font-black text-slate-900 mt-1">{reviewData.assessedTopics}/{reviewData.totalTopics}</p>
              <p className="text-xs text-slate-600 mt-1">Based on answered questions</p>
            </div>
            <div className="rounded-lg border border-emerald-200 p-4 bg-emerald-50">
              <p className="text-xs uppercase tracking-wide font-bold text-emerald-700">Exact Topic Matches</p>
              <p className="text-2xl font-black text-emerald-900 mt-1">{reviewData.exactMatches}/{reviewData.diagnosticCount}</p>
              <p className="text-xs text-emerald-700 mt-1">Higher is better diagnostic precision</p>
            </div>
          </div>
        )}

        {runMeta.runMode === 'diagnostic' && (
          <div className="mb-6 rounded-lg border border-slate-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
              <p className="text-sm font-bold text-slate-900">Topic Mastery Snapshot</p>
            </div>
            <div className="divide-y divide-slate-200">
              {reviewData.topicRows.map((topic) => {
                const masteryLabel = topic.accuracy >= 0.8 ? 'Strong' : topic.accuracy >= 0.6 ? 'Developing' : 'Needs work'
                const masteryColor = topic.accuracy >= 0.8 ? '#166534' : topic.accuracy >= 0.6 ? '#92400e' : '#991b1b'
                return (
                  <div key={topic.label} className="px-4 py-3 text-xs text-slate-700 flex items-center gap-2">
                    <span className="font-semibold text-slate-900 min-w-[180px] truncate">{topic.label}</span>
                    <div className="flex-1 h-2 rounded bg-slate-200 overflow-hidden">
                      <div className="h-full" style={{ width: `${Math.max(2, topic.accuracy * 100)}%`, background: '#334155' }} />
                    </div>
                    <span className="font-semibold" style={{ color: masteryColor }}>{masteryLabel}</span>
                    <span className="text-slate-500">({topic.correct}/{topic.attempted})</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-lg border border-emerald-200 p-4" style={{ background: '#f0fdf4' }}>
            <p className="text-sm font-bold text-emerald-900 mb-2">You Are Strong In</p>
            {reviewData.strengths.length === 0 ? (
              <p className="text-xs text-emerald-800">No strong areas yet. Keep building reps.</p>
            ) : (
              <div className="space-y-1">
                {reviewData.strengths.map((s) => (
                  <p key={s.label} className="text-xs text-emerald-900">
                    {s.label} · {(s.accuracy * 100).toFixed(0)}% ({s.correct}/{s.attempted})
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-lg border border-rose-200 p-4" style={{ background: '#fff1f2' }}>
            <p className="text-sm font-bold text-rose-900 mb-2">Needs More Work</p>
            {reviewData.needsHelp.length === 0 ? (
              <p className="text-xs text-rose-800">No weak areas flagged in this run.</p>
            ) : (
              <div className="space-y-1">
                {reviewData.needsHelp.map((w) => (
                  <p key={w.label} className="text-xs text-rose-900">
                    {w.label} · {(w.accuracy * 100).toFixed(0)}% ({w.correct}/{w.attempted})
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6 rounded-lg border border-slate-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-bold text-slate-900">Unit Accuracy Breakdown</p>
          </div>
          <div className="divide-y divide-slate-200">
            {reviewData.unitRows.map((u) => (
              <div key={u.label} className="px-4 py-3 text-xs text-slate-700 flex items-center gap-2">
                <span className="font-semibold text-slate-900 min-w-16">{u.label}</span>
                <div className="flex-1 h-2 rounded bg-slate-200 overflow-hidden">
                  <div className="h-full" style={{ width: `${Math.max(2, u.accuracy * 100)}%`, background: '#1e1b4b' }} />
                </div>
                <span>{(u.accuracy * 100).toFixed(0)}%</span>
                <span className="text-slate-500">({u.correct}/{u.attempted})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-bold text-slate-900">Missed Question Review</p>
          </div>
          <div className="divide-y divide-slate-200">
            {reviewData.missed.length === 0 && reviewData.skipped.length === 0 ? (
              <p className="p-4 text-sm text-slate-600">No missed MCQs in this run.</p>
            ) : (
              [...reviewData.missed, ...reviewData.skipped].map((q) => (
                <div key={q.id} className="p-4">
                  <p className="text-xs text-slate-500 mb-1">Unit {q.unit}{q.topic ? ` · ${q.topic}` : ''}</p>
                  <p className="text-sm font-semibold text-slate-900 mb-2">{q.question}</p>
                  <p className="text-xs text-slate-700 mb-1">Your answer: {answers[q.id] || 'No response'}</p>
                  <p className="text-xs text-emerald-800 mb-2">Correct answer: {q.correctAnswer}</p>
                  <p className="text-xs text-slate-700 leading-relaxed">{q.explanation}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => { setMode('browse'); setTimerRunning(false) }}
            className="px-4 py-2 rounded text-sm font-bold text-white"
            style={{ background: '#1e1b4b' }}
          >
            Back to Question Bank
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      {/* Exam top bar */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-gray-200 bg-white shrink-0">
        <div className="flex items-center gap-3">
          {/* Question number + mark for review */}
          <div className="flex items-center gap-1">
            <div
              className="w-7 h-7 flex items-center justify-center font-bold text-sm text-white rounded"
              style={{ background: isMarked ? '#f59e0b' : '#1e1b4b' }}
            >
              {qIndex + 1}
            </div>
            <button
              type="button"
              onClick={toggleMark}
              className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all border"
              style={{
                background: isMarked ? '#fffbeb' : '#f9fafb',
                borderColor: isMarked ? '#f59e0b' : '#e5e7eb',
                color: isMarked ? '#b45309' : '#6b7280',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill={isMarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              Mark for Review
            </button>
          </div>
          <span className="text-xs px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-700">
            {runMeta.runMode === 'diagnostic' ? 'diagnostic mode' : 'exam mode'}
          </span>
          {runMeta.sectionLabel && (
            <span className="text-xs px-2 py-0.5 rounded font-medium bg-indigo-100 text-indigo-800">
              {runMeta.sectionLabel}
            </span>
          )}
          <span className="text-xs px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-700">
            {examQs.length}/{runMeta.targetQuestions ?? examQs.length} loaded
          </span>
          {runMeta.usedQuestionLoop && (
            <span className="text-xs px-2 py-0.5 rounded font-medium bg-amber-100 text-amber-800">
              repeated bank items used
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Timer */}
          <div
            className="flex items-center gap-1.5 font-mono text-sm font-bold px-3 py-1 rounded"
            style={{
              background: timeWarn ? '#fef2f2' : '#f9fafb',
              color: timeWarn ? '#dc2626' : '#374151',
              border: `1px solid ${timeWarn ? '#fecaca' : '#e5e7eb'}`,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {fmt(seconds)}
          </div>

          <button
            type="button"
            onClick={() => { setTimerRunning(r => !r) }}
            className="text-xs px-2 py-1 rounded border text-gray-500 border-gray-300 hover:bg-gray-50"
          >
            {timerRunning ? 'Pause' : 'Resume'}
          </button>
          <button
            type="button"
            onClick={() => { setTimerRunning(false); setMode('browse') }}
            className="text-xs px-2 py-1 rounded border font-semibold text-slate-600 border-slate-300 hover:bg-slate-50"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Question content */}
      <div className="flex-1 min-h-0">
        {currentQ.type === 'mcq' ? (
          <MCQPanel
            q={currentQ}
            selected={answers[currentQ.id] || null}
            onSelect={l => setAnswers(a => ({ ...a, [currentQ.id]: l }))}
            struck={new Set(struckOptions[currentQ.id] ?? [])}
            onToggleStrike={(letter) => toggleStrikeOption(currentQ.id, letter)}
            revealed={false}
          />
        ) : (
          <FRQPanel q={currentQ} revealed={false} />
        )}
      </div>

      {/* Bottom bar (AP Classroom style) */}
      <div className="shrink-0 flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-white">
        {/* Left: APGrounds branding */}
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1b4b" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
          <span className="font-semibold text-xs text-gray-700">apgrounds.ezo.lol</span>
        </div>

        {/* Center: Question nav */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-1.5 rounded font-semibold text-sm border border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-700"
          onClick={() => setQuestionMapOpen((v) => !v)}
        >
          Question {qIndex + 1} of {examQs.length}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points={questionMapOpen ? '6 15 12 9 18 15' : '18 9 12 15 6 9'} />
          </svg>
        </button>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {qIndex > 0 && (
            <button
              type="button"
              onClick={() => setQIndex(i => i - 1)}
              className="px-3 py-1.5 rounded text-sm font-semibold border border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              Back
            </button>
          )}
          {qIndex < examQs.length - 1 ? (
            <button
              type="button"
              onClick={() => setQIndex(i => i + 1)}
              className="px-4 py-1.5 rounded text-sm font-bold text-white transition-all"
              style={{ background: '#1e1b4b' }}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={submitExam}
              className="px-4 py-1.5 rounded text-sm font-bold text-white"
              style={{ background: '#4338ca' }}
            >
              Submit & Review
            </button>
          )}
        </div>
      </div>
      {questionMapOpen && (
        <div className="shrink-0 px-5 py-3 border-t border-gray-200 bg-slate-50">
          <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
            {questionStatus.map((status, idx) => {
              const isCurrent = idx === qIndex
              const baseBg = isCurrent ? '#1e1b4b' : status.answered ? '#dbeafe' : '#fff'
              const baseColor = isCurrent ? '#fff' : status.answered ? '#1d4ed8' : '#475569'
              const borderColor = status.marked ? '#f59e0b' : isCurrent ? '#1e1b4b' : '#cbd5e1'
              return (
                <button
                  key={status.id}
                  type="button"
                  onClick={() => setQIndex(idx)}
                  className="w-8 h-8 rounded text-xs font-bold border transition-all"
                  style={{ background: baseBg, color: baseColor, borderColor }}
                  title={status.marked ? `Q${idx + 1} marked for review` : `Go to Q${idx + 1}`}
                >
                  {idx + 1}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── MAIN PANEL ───────────────────────────────────────────────────────────────
export function CollegeBored({ courseShort }: CollegeBoredProps) {
  const [tab, setTab] = useState<'format' | 'practice' | 'resources'>('practice')
  const router = useRouter()
  const pathname = usePathname()
  const normalizedPropCourse = normalizeCourseKey(courseShort)
  const [activeCourse, setActiveCourse] = useState(normalizedPropCourse)

  useEffect(() => {
    setActiveCourse(normalizedPropCourse)
  }, [normalizedPropCourse])

  const selectedMeta = useMemo(
    () => COURSE_OPTIONS.find((course) => course.key === activeCourse) ?? COURSE_OPTIONS[0],
    [activeCourse]
  )

  const tabButtonStyle = (key: 'practice' | 'format' | 'resources') => ({
    background: tab === key ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' : 'transparent',
    color: tab === key ? '#fff' : '#334155',
    boxShadow: tab === key ? '0 10px 24px rgba(49,46,129,0.28)' : 'none',
    transform: tab === key ? 'translateY(-1px)' : 'translateY(0)',
  })

  return (
    <div
      className="relative flex flex-col w-full h-full min-h-[calc(100vh-64px)] overflow-hidden animate-fade-in"
      style={{ background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 40%, #f8fbff 100%)' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.16), rgba(59,130,246,0))' }}
      />

      {/* Header — CollegeBoard style */}
      <div
        className="relative z-10 shrink-0 flex items-center justify-between px-6 py-3 border-b border-indigo-100 gap-3 flex-wrap"
        style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}
      >
        {/* Left: logo + name */}
        <div className="flex items-center gap-3 flex-wrap">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded font-bold text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            CollegeBored
          </div>
          <span className="text-xs font-mono text-indigo-600 border-l border-indigo-200 pl-3">
            {activeCourse.toUpperCase()} Practice
          </span>
          <select
            aria-label="Select course"
            value={activeCourse}
            onChange={(e) => {
              const next = normalizeCourseKey(e.target.value)
              setActiveCourse(next)
              router.replace(`${pathname}?course=${encodeURIComponent(next)}`, { scroll: false })
            }}
            className="border border-indigo-200 rounded px-2.5 py-1.5 text-xs font-semibold bg-white text-slate-800 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400"
          >
            {COURSE_OPTIONS.map((course) => (
              <option key={course.key} value={course.key}>
                {course.label}
              </option>
            ))}
          </select>
        </div>

        {/* Center: tabs */}
        <div className="flex items-center gap-1 rounded-xl p-1 border border-indigo-100" style={{ background: '#f8fafc' }}>
          <button
            type="button"
            onClick={() => setTab('practice')}
            className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300"
            style={tabButtonStyle('practice')}
          >
            Practice Questions
          </button>
          <button
            type="button"
            onClick={() => setTab('format')}
            className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300"
            style={tabButtonStyle('format')}
          >
            Exam Format & Timing
          </button>
          <button
            type="button"
            onClick={() => setTab('resources')}
            className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300"
            style={tabButtonStyle('resources')}
          >
            Resources & Coverage
          </button>
        </div>

        <Link
          href={selectedMeta.path}
          className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider border transition-all duration-300 hover:-translate-y-0.5"
          style={{ color: '#4338ca', borderColor: '#c7d2fe', background: '#eef2ff' }}
        >
          back to {selectedMeta.key}
        </Link>
      </div>

      {/* Body */}
      <div key={`${activeCourse}-${tab}`} className="flex-1 min-h-0 overflow-hidden animate-fade-up">
        {tab === 'format' && <ExamFormatTab courseShort={activeCourse} />}
        {tab === 'practice' && <PracticeTab courseShort={activeCourse} />}
        {tab === 'resources' && <ResourcesTab courseShort={activeCourse} />}
      </div>
    </div>
  )
}
