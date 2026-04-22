'use client'

import Link from 'next/link'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SiteNav } from '@/components/site-nav'
import { getQuestionsForCourse, normalizeCourseKey, type Question } from '@/lib/college-bored-data'

const COURSE_LABELS: Record<string, string> = {
  apes: 'AP Environmental Science',
  apush: 'AP United States History',
  csp: 'AP Computer Science Principles',
  lang: 'AP English Language & Composition',
}

type ModeKey = 'flashcard-frenzy' | 'distractor-hunter' | 'explain-to-win' | 'frq-forge' | 'unit-boss-battles'
type RoundPhase = 'setup' | 'play' | 'done'
type Confidence = 'low' | 'medium' | 'high'

type GameCard = {
  key: ModeKey
  title: string
  detail: string
  accent: string
}

interface QuestionMemory {
  seen: number
  correct: number
  streak: number
  ease: number
  dueAt: number
  lastOutcome: 'correct' | 'incorrect'
  lastConfidence: Confidence
}

interface CourseProgress {
  xp: number
  totalAnswered: number
  totalCorrect: number
  combo: number
  bestCombo: number
  questionMemory: Record<string, QuestionMemory>
  updatedAt: number
}

const DAY_MS = 24 * 60 * 60 * 1000

function nowMs() {
  return Date.now()
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function panelStyle() {
  return {
    background: 'linear-gradient(155deg, #0b1a2c 0%, #0e233d 65%, #102a47 100%)',
    borderColor: '#1e3a5f',
  } as const
}

function glowyBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute -top-24 -left-20 w-[460px] h-[460px] rounded-full blur-3xl opacity-50" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(187,247,208,0.45), rgba(187,247,208,0))' }} />
      <div className="pointer-events-none absolute top-32 right-[-140px] w-[520px] h-[520px] rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(196,181,253,0.55), rgba(196,181,253,0))' }} />
      <div className="pointer-events-none absolute bottom-[-180px] left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-35" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.35), rgba(34,211,238,0))' }} />
    </>
  )
}

function GameShell({ title, subtitle, children, onExit }: { title: string; subtitle: string; children: React.ReactNode; onExit: () => void }) {
  return (
    <div className="border relative overflow-hidden" style={{ ...panelStyle(), boxShadow: '0 22px 46px rgba(0,0,0,0.32)' }}>
      <div className="px-5 py-4 border-b flex items-center gap-3 flex-wrap" style={{ borderColor: '#1e3a5f' }}>
        <button
          type="button"
          onClick={onExit}
          className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border"
          style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
        >
          game hub
        </button>
        <p className="text-sm font-bold" style={{ color: '#d1fae5' }}>{title}</p>
        <p className="text-xs" style={{ color: '#a7f3d0' }}>{subtitle}</p>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function emptyProgress(): CourseProgress {
  return {
    xp: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    combo: 0,
    bestCombo: 0,
    questionMemory: {},
    updatedAt: nowMs(),
  }
}

function useCourseProgress(courseKey: string) {
  const storageKey = `ezo-progress-${courseKey}`
  const [progress, setProgress] = useState<CourseProgress>(emptyProgress())

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey)
      if (!raw) {
        setProgress(emptyProgress())
        return
      }
      const parsed = JSON.parse(raw) as CourseProgress
      setProgress({ ...emptyProgress(), ...parsed, questionMemory: parsed.questionMemory ?? {} })
    } catch {
      setProgress(emptyProgress())
    }
  }, [storageKey])

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(progress))
  }, [storageKey, progress])

  const recordAttempt = (questionId: string, correct: boolean, confidence: Confidence) => {
    setProgress((prev) => {
      const old = prev.questionMemory[questionId] ?? {
        seen: 0,
        correct: 0,
        streak: 0,
        ease: 2.3,
        dueAt: nowMs(),
        lastOutcome: 'incorrect' as const,
        lastConfidence: 'medium' as const,
      }

      const newSeen = old.seen + 1
      const newCorrect = old.correct + (correct ? 1 : 0)
      const newStreak = correct ? old.streak + 1 : 0
      const confidenceDelta = confidence === 'high' ? 0.06 : confidence === 'medium' ? 0.02 : -0.02
      const ease = clamp(old.ease + (correct ? 0.08 : -0.2) + confidenceDelta, 1.3, 2.8)

      let intervalDays = 0
      if (correct) {
        if (newStreak <= 1) intervalDays = 1
        else if (newStreak === 2) intervalDays = 3
        else if (newStreak === 3) intervalDays = 7
        else if (newStreak === 4) intervalDays = 14
        else intervalDays = 21
      }

      const dueAt = correct
        ? nowMs() + Math.max(1, Math.round(intervalDays * (ease / 2))) * DAY_MS
        : nowMs() + 15 * 60 * 1000

      const combo = correct ? prev.combo + 1 : 0
      const bestCombo = Math.max(prev.bestCombo, combo)
      const xpGain = correct
        ? 10 + (confidence === 'high' ? 3 : confidence === 'medium' ? 1 : 0) + Math.min(prev.combo, 6)
        : 2

      return {
        ...prev,
        xp: prev.xp + xpGain,
        totalAnswered: prev.totalAnswered + 1,
        totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
        combo,
        bestCombo,
        updatedAt: nowMs(),
        questionMemory: {
          ...prev.questionMemory,
          [questionId]: {
            seen: newSeen,
            correct: newCorrect,
            streak: newStreak,
            ease,
            dueAt,
            lastOutcome: correct ? 'correct' : 'incorrect',
            lastConfidence: confidence,
          },
        },
      }
    })
  }

  const resetCourseProgress = () => setProgress(emptyProgress())

  return { progress, recordAttempt, resetCourseProgress }
}

function accuracyPct(correct: number, total: number) {
  if (total <= 0) return 0
  return (correct / total) * 100
}

function levelFromXp(xp: number) {
  return Math.floor(xp / 300) + 1
}

function xpIntoLevel(xp: number) {
  return xp % 300
}

function termsFromCorrectOption(question: Question): string[] {
  const correctText = question.options?.find((o) => o.letter === question.correctAnswer)?.text ?? ''
  return correctText
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 5)
    .slice(0, 8)
}

function buildAdaptiveRound(mcqs: Question[], memory: Record<string, QuestionMemory>, focus: 'adaptive' | 'new' | 'due' | 'mixed', size: number) {
  const now = nowMs()
  const newCards = mcqs.filter((q) => !memory[q.id])
  const dueCards = mcqs.filter((q) => (memory[q.id]?.dueAt ?? 0) <= now)
  const weakCards = mcqs.filter((q) => {
    const m = memory[q.id]
    if (!m || m.seen < 2) return false
    const acc = m.correct / Math.max(1, m.seen)
    return acc < 0.65
  })

  const pickUnique = (arr: Question[], target: number, used: Set<string>) => {
    const picks: Question[] = []
    for (const q of shuffle(arr)) {
      if (used.has(q.id)) continue
      used.add(q.id)
      picks.push(q)
      if (picks.length >= target) break
    }
    return picks
  }

  const used = new Set<string>()
  const result: Question[] = []

  if (focus === 'new') {
    result.push(...pickUnique(newCards, size, used))
  } else if (focus === 'due') {
    result.push(...pickUnique(dueCards, size, used))
  } else if (focus === 'mixed') {
    result.push(...pickUnique(dueCards, Math.ceil(size * 0.35), used))
    result.push(...pickUnique(weakCards, Math.ceil(size * 0.25), used))
    result.push(...pickUnique(newCards, Math.ceil(size * 0.2), used))
  } else {
    result.push(...pickUnique(dueCards, Math.ceil(size * 0.45), used))
    result.push(...pickUnique(weakCards, Math.ceil(size * 0.3), used))
    result.push(...pickUnique(newCards, Math.ceil(size * 0.15), used))
  }

  if (result.length < size) {
    result.push(...pickUnique(mcqs, size - result.length, used))
  }

  return result.slice(0, size)
}

function FlashcardFrenzyGame({
  courseKey,
  progress,
  recordAttempt,
  onExit,
}: {
  courseKey: string
  progress: CourseProgress
  recordAttempt: (questionId: string, correct: boolean, confidence: Confidence) => void
  onExit: () => void
}) {
  const mcqs = useMemo(
    () => getQuestionsForCourse(courseKey).filter((q) => q.type === 'mcq' && q.options && q.correctAnswer),
    [courseKey],
  )
  const units = useMemo(() => Array.from(new Set(mcqs.map((q) => q.unit))).sort((a, b) => a - b), [mcqs])

  const [phase, setPhase] = useState<RoundPhase>('setup')
  const [unitFilter, setUnitFilter] = useState<number | 'all'>('all')
  const [focus, setFocus] = useState<'adaptive' | 'new' | 'due' | 'mixed'>('adaptive')
  const [roundLength, setRoundLength] = useState(12)

  const [round, setRound] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [confidence, setConfidence] = useState<Confidence>('medium')
  const [correctCount, setCorrectCount] = useState(0)
  const [results, setResults] = useState<Record<string, { correct: boolean; confidence: Confidence }>>({})
  const [isRetryRound, setIsRetryRound] = useState(false)

  const pool = unitFilter === 'all' ? mcqs : mcqs.filter((q) => q.unit === unitFilter)
  const dueCount = pool.filter((q) => (progress.questionMemory[q.id]?.dueAt ?? 0) <= nowMs()).length
  const newCount = pool.filter((q) => !progress.questionMemory[q.id]).length

  const startRound = () => {
    const picked = buildAdaptiveRound(pool, progress.questionMemory, focus, Math.min(roundLength, pool.length))
    setRound(picked)
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setConfidence('medium')
    setCorrectCount(0)
    setResults({})
    setIsRetryRound(false)
    setPhase('play')
  }

  const q = round[index]
  const missed = round.filter((item) => results[item.id] && !results[item.id].correct)
  const weakTopics = Array.from(new Set(missed.map((m) => m.topic?.trim() || `Unit ${m.unit}`))).slice(0, 5)
  const overconfidentMisses = Object.values(results).filter((r) => !r.correct && r.confidence === 'high').length

  if (phase === 'setup') {
    return (
      <GameShell title="Flashcard Frenzy" subtitle="Adaptive retrieval with spaced repetition" onExit={onExit}>
        {pool.length === 0 ? (
          <div className="border p-4 text-sm" style={{ ...panelStyle(), color: '#d1fae5' }}>
            no MCQs available for this filter.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
              <div className="border p-3" style={panelStyle()}>
                <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>unit</p>
                <select value={unitFilter} onChange={(e) => setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}>
                  <option value="all">all units</option>
                  {units.map((u) => <option key={u} value={u}>unit {u}</option>)}
                </select>
              </div>
              <div className="border p-3" style={panelStyle()}>
                <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>focus</p>
                <select value={focus} onChange={(e) => setFocus(e.target.value as typeof focus)} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}>
                  <option value="adaptive">adaptive</option>
                  <option value="due">due now</option>
                  <option value="new">new cards</option>
                  <option value="mixed">mixed</option>
                </select>
              </div>
              <div className="border p-3" style={panelStyle()}>
                <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>round size</p>
                <select value={roundLength} onChange={(e) => setRoundLength(Number(e.target.value))} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}>
                  {[8, 10, 12, 15, 20].map((n) => <option key={n} value={n}>{n} questions</option>)}
                </select>
              </div>
              <div className="border p-3" style={panelStyle()}>
                <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>readiness</p>
                <p className="text-sm" style={{ color: '#a7f3d0' }}>due {dueCount} · new {newCount} · pool {pool.length}</p>
              </div>
            </div>
            <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase tracking-wider border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>
              start round
            </button>
          </>
        )}
      </GameShell>
    )
  }

  if (phase === 'done') {
    const pct = round.length > 0 ? (correctCount / round.length) * 100 : 0
    return (
      <GameShell title="Flashcard Frenzy" subtitle="Round complete" onExit={onExit}>
        <div className="border p-4" style={panelStyle()}>
          <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>score {correctCount}/{round.length}</p>
          <p className="text-sm" style={{ color: '#a7f3d0' }}>accuracy {pct.toFixed(0)}%</p>
          <p className="text-xs mt-2" style={{ color: '#c4b5fd' }}>
            high-confidence misses: {overconfidentMisses} · weak topics: {weakTopics.length > 0 ? weakTopics.join(' · ') : 'none'}
          </p>
        </div>
        <div className="mt-3 flex gap-2 flex-wrap">
          <button type="button" onClick={() => setPhase('setup')} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>new setup</button>
          <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>play again</button>
          {missed.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setRound(shuffle(missed))
                setIndex(0)
                setSelected(null)
                setRevealed(false)
                setConfidence('medium')
                setCorrectCount(0)
                setResults({})
                setIsRetryRound(true)
                setPhase('play')
              }}
              className="px-4 py-2 text-xs font-bold uppercase border"
              style={{ background: '#fef3c7', color: '#92400e', borderColor: '#fcd34d' }}
            >
              retry missed only
            </button>
          )}
        </div>
      </GameShell>
    )
  }

  if (!q) {
    return (
      <GameShell title="Flashcard Frenzy" subtitle="No questions in this round" onExit={onExit}>
        <p className="text-sm" style={{ color: '#d1fae5' }}>No items were selected. Go back and adjust setup filters.</p>
        <button type="button" onClick={() => setPhase('setup')} className="mt-3 px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>back to setup</button>
      </GameShell>
    )
  }

  return (
    <GameShell title="Flashcard Frenzy" subtitle={isRetryRound ? 'retry loop: reinforce misses' : 'answer, calibrate confidence, then review'} onExit={onExit}>
      <div className="flex items-center gap-2 mb-3">
        <p className="text-xs font-mono" style={{ color: '#c4b5fd' }}>question {index + 1}/{round.length}</p>
        <div className="flex-1 h-1.5" style={{ background: '#102238' }}>
          <div className="h-full" style={{ width: `${((index + 1) / round.length) * 100}%`, background: 'linear-gradient(90deg, #86efac, #c4b5fd)' }} />
        </div>
      </div>

      <div className="border p-4" style={panelStyle()}>
        <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
        <div className="space-y-2">
          {(q.options ?? []).map((opt) => {
            const isCorrect = opt.letter === q.correctAnswer
            const isSelected = selected === opt.letter
            const bg = !revealed ? (isSelected ? '#e0f2fe' : '#0f1f33') : (isCorrect ? '#dcfce7' : isSelected ? '#fee2e2' : '#0f1f33')
            const color = !revealed ? (isSelected ? '#0f172a' : '#d1fae5') : (isCorrect ? '#166534' : isSelected ? '#991b1b' : '#d1fae5')
            const border = !revealed ? (isSelected ? '#7dd3fc' : '#1e3a5f') : (isCorrect ? '#86efac' : isSelected ? '#fecaca' : '#1e3a5f')
            return (
              <button key={opt.letter} type="button" onClick={() => !revealed && setSelected(opt.letter)} className="w-full text-left p-3 border text-sm" style={{ background: bg, color, borderColor: border }}>
                <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
              </button>
            )
          })}
        </div>
      </div>

      {revealed && (
        <div className="mt-3 border p-3" style={{ ...panelStyle(), color: '#a7f3d0' }}>
          <p className="text-xs font-bold mb-1">incorrect choices review</p>
          <ul className="space-y-1 text-xs">
            {(q.options ?? []).filter((o) => o.letter !== q.correctAnswer).map((o) => (
              <li key={o.letter}><span className="font-mono mr-1">{o.letter}.</span>{o.text}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs"><span className="font-bold">why correct:</span> {q.explanation}</p>
        </div>
      )}

      <div className="mt-3 flex gap-2 flex-wrap items-center">
        {!revealed ? (
          <>
            <div className="flex items-center gap-1.5">
              {(['low', 'medium', 'high'] as const).map((c) => (
                <button key={c} type="button" onClick={() => setConfidence(c)} className="px-2.5 py-2 text-[11px] font-bold uppercase border" style={{ background: confidence === c ? '#e9d5ff' : '#102238', color: confidence === c ? '#6b21a8' : '#c4b5fd', borderColor: '#7c3aed55' }}>
                  {c}
                </button>
              ))}
            </div>
            <button
              type="button"
              disabled={!selected}
              onClick={() => {
                const isCorrect = selected === q.correctAnswer
                if (isCorrect) setCorrectCount((c) => c + 1)
                setResults((prev) => ({ ...prev, [q.id]: { correct: isCorrect, confidence } }))
                recordAttempt(q.id, isCorrect, confidence)
                setRevealed(true)
              }}
              className="px-4 py-2 text-xs font-bold uppercase border disabled:opacity-50"
              style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
            >
              check answer
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (index >= round.length - 1) setPhase('done')
              else {
                setIndex((i) => i + 1)
                setSelected(null)
                setRevealed(false)
                setConfidence('medium')
              }
            }}
            className="px-4 py-2 text-xs font-bold uppercase border"
            style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
          >
            {index >= round.length - 1 ? 'finish round' : 'next question'}
          </button>
        )}
      </div>
    </GameShell>
  )
}

function DistractorHunterGame({
  courseKey,
  recordAttempt,
  onExit,
}: {
  courseKey: string
  recordAttempt: (questionId: string, correct: boolean, confidence: Confidence) => void
  onExit: () => void
}) {
  const mcqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'mcq' && q.options && q.correctAnswer), [courseKey])
  const [phase, setPhase] = useState<RoundPhase>('setup')
  const [round, setRound] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [note, setNote] = useState('')
  const [score, setScore] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [confidence, setConfidence] = useState<Confidence>('medium')
  const [highConfMisses, setHighConfMisses] = useState(0)

  const startRound = () => {
    setRound(shuffle(mcqs).slice(0, Math.min(8, mcqs.length)))
    setIndex(0)
    setSelected('')
    setNote('')
    setScore(0)
    setRevealed(false)
    setConfidence('medium')
    setHighConfMisses(0)
    setPhase('play')
  }

  const q = round[index]
  if (phase === 'setup') {
    return (
      <GameShell title="Distractor Hunter" subtitle="Learn why wrong answers look tempting" onExit={onExit}>
        <p className="text-sm mb-3" style={{ color: '#a7f3d0' }}>Pick your answer, then explain a trap. Strong trap analysis builds transfer to harder MCQs.</p>
        <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>start round</button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    return (
      <GameShell title="Distractor Hunter" subtitle="Round complete" onExit={onExit}>
        <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>score {score}/{round.length * 3}</p>
        <p className="text-sm" style={{ color: '#a7f3d0' }}>high-confidence misses: {highConfMisses}</p>
        <button type="button" onClick={startRound} className="mt-3 px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>play again</button>
      </GameShell>
    )
  }

  if (!q) {
    return (
      <GameShell title="Distractor Hunter" subtitle="No questions available" onExit={onExit}>
        <p className="text-sm" style={{ color: '#d1fae5' }}>No MCQs found for this game. Return to game hub.</p>
      </GameShell>
    )
  }

  const strongReasoning = note.trim().length >= 45 && /because|however|although|therefore|whereas|instead/i.test(note)

  return (
    <GameShell title="Distractor Hunter" subtitle={`question ${index + 1}/${round.length}`} onExit={onExit}>
      <div className="border p-4" style={panelStyle()}>
        <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
        <div className="space-y-2 mb-3">
          {(q.options ?? []).map((opt) => (
            <button key={opt.letter} type="button" onClick={() => !revealed && setSelected(opt.letter)} className="w-full text-left p-2.5 border text-sm" style={{ background: selected === opt.letter ? '#e0f2fe' : '#0f1f33', color: selected === opt.letter ? '#0f172a' : '#d1fae5', borderColor: selected === opt.letter ? '#7dd3fc' : '#1e3a5f' }}>
              <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
            </button>
          ))}
        </div>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }} placeholder="Explain one tempting wrong option and why it fails." />
      </div>

      {!revealed ? (
        <div className="mt-3 flex gap-2 flex-wrap items-center">
          <div className="flex items-center gap-1.5">
            {(['low', 'medium', 'high'] as const).map((c) => (
              <button key={c} type="button" onClick={() => setConfidence(c)} className="px-2.5 py-2 text-[11px] font-bold uppercase border" style={{ background: confidence === c ? '#e9d5ff' : '#102238', color: confidence === c ? '#6b21a8' : '#c4b5fd', borderColor: '#7c3aed55' }}>
                {c}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={!selected}
            onClick={() => {
              let earned = 0
              const correctPick = selected === q.correctAnswer
              if (correctPick) earned += 1
              if (strongReasoning) earned += 2
              if (!correctPick && confidence === 'high') setHighConfMisses((v) => v + 1)
              setScore((s) => s + earned)
              recordAttempt(q.id, correctPick, confidence)
              setRevealed(true)
            }}
            className="px-4 py-2 text-xs font-bold uppercase border disabled:opacity-50"
            style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
          >
            reveal coaching
          </button>
        </div>
      ) : (
        <div className="mt-3 space-y-2">
          <div className="border p-3 text-xs" style={{ ...panelStyle(), color: '#a7f3d0' }}>
            <p><span className="font-bold">correct answer:</span> {q.correctAnswer}</p>
            <p className="mt-1"><span className="font-bold">coaching:</span> {q.explanation}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              if (index >= round.length - 1) setPhase('done')
              else {
                setIndex((i) => i + 1)
                setSelected('')
                setNote('')
                setRevealed(false)
                setConfidence('medium')
              }
            }}
            className="px-4 py-2 text-xs font-bold uppercase border"
            style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
          >
            {index >= round.length - 1 ? 'finish round' : 'next question'}
          </button>
        </div>
      )}
    </GameShell>
  )
}

function ExplainToWinGame({
  courseKey,
  recordAttempt,
  onExit,
}: {
  courseKey: string
  recordAttempt: (questionId: string, correct: boolean, confidence: Confidence) => void
  onExit: () => void
}) {
  const mcqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'mcq' && q.options && q.correctAnswer), [courseKey])
  const [phase, setPhase] = useState<RoundPhase>('setup')
  const [round, setRound] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [explain, setExplain] = useState('')
  const [score, setScore] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [confidence, setConfidence] = useState<Confidence>('medium')

  const startRound = () => {
    setRound(shuffle(mcqs).slice(0, Math.min(8, mcqs.length)))
    setIndex(0)
    setSelected('')
    setExplain('')
    setScore(0)
    setRevealed(false)
    setConfidence('medium')
    setPhase('play')
  }

  const q = round[index]
  if (phase === 'setup') {
    return (
      <GameShell title="Explain-to-Win" subtitle="Generate explanations to lock memory" onExit={onExit}>
        <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>start round</button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    return (
      <GameShell title="Explain-to-Win" subtitle="Round complete" onExit={onExit}>
        <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>score {score}/{round.length * 4}</p>
        <button type="button" onClick={startRound} className="mt-3 px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>play again</button>
      </GameShell>
    )
  }

  if (!q) {
    return (
      <GameShell title="Explain-to-Win" subtitle="No questions available" onExit={onExit}>
        <p className="text-sm" style={{ color: '#d1fae5' }}>No MCQs found for this game.</p>
      </GameShell>
    )
  }

  const termOverlap = termsFromCorrectOption(q).filter((term) => explain.toLowerCase().includes(term)).length
  const hasReasoningLanguage = /because|therefore|thus|which means|so that|as a result/i.test(explain)
  const deepEnough = explain.trim().length >= 70

  return (
    <GameShell title="Explain-to-Win" subtitle={`question ${index + 1}/${round.length}`} onExit={onExit}>
      <div className="border p-4" style={panelStyle()}>
        <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
        <div className="space-y-2 mb-3">
          {(q.options ?? []).map((opt) => (
            <button key={opt.letter} type="button" onClick={() => !revealed && setSelected(opt.letter)} className="w-full text-left p-2.5 border text-sm" style={{ background: selected === opt.letter ? '#e0f2fe' : '#0f1f33', color: selected === opt.letter ? '#0f172a' : '#d1fae5', borderColor: selected === opt.letter ? '#7dd3fc' : '#1e3a5f' }}>
              <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
            </button>
          ))}
        </div>
        <textarea value={explain} onChange={(e) => setExplain(e.target.value)} rows={4} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }} placeholder="Teach why the correct answer works and why alternatives fail." />
      </div>

      {!revealed ? (
        <div className="mt-3 flex gap-2 flex-wrap items-center">
          <div className="flex items-center gap-1.5">
            {(['low', 'medium', 'high'] as const).map((c) => (
              <button key={c} type="button" onClick={() => setConfidence(c)} className="px-2.5 py-2 text-[11px] font-bold uppercase border" style={{ background: confidence === c ? '#e9d5ff' : '#102238', color: confidence === c ? '#6b21a8' : '#c4b5fd', borderColor: '#7c3aed55' }}>
                {c}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={!selected}
            onClick={() => {
              const correctPick = selected === q.correctAnswer
              const earned =
                (correctPick ? 1 : 0) +
                (deepEnough ? 1 : 0) +
                (hasReasoningLanguage ? 1 : 0) +
                (termOverlap >= 2 ? 1 : 0)
              setScore((s) => s + earned)
              recordAttempt(q.id, correctPick, confidence)
              setRevealed(true)
            }}
            className="px-4 py-2 text-xs font-bold uppercase border disabled:opacity-50"
            style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
          >
            reveal coaching
          </button>
        </div>
      ) : (
        <div className="mt-3 space-y-2">
          <div className="border p-3 text-xs" style={{ ...panelStyle(), color: '#a7f3d0' }}>
            <p><span className="font-bold">correct:</span> {q.correctAnswer}</p>
            <p className="mt-1"><span className="font-bold">coach feedback:</span> {q.explanation}</p>
            <p className="mt-1"><span className="font-bold">explanation quality:</span> depth {deepEnough ? 'ok' : 'needs more detail'} · reasoning words {hasReasoningLanguage ? 'yes' : 'missing'} · key-term overlap {termOverlap}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              if (index >= round.length - 1) setPhase('done')
              else {
                setIndex((i) => i + 1)
                setSelected('')
                setExplain('')
                setRevealed(false)
                setConfidence('medium')
              }
            }}
            className="px-4 py-2 text-xs font-bold uppercase border"
            style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
          >
            {index >= round.length - 1 ? 'finish round' : 'next question'}
          </button>
        </div>
      )}
    </GameShell>
  )
}

function FRQForgeGame({
  courseKey,
  recordAttempt,
  onExit,
}: {
  courseKey: string
  recordAttempt: (questionId: string, correct: boolean, confidence: Confidence) => void
  onExit: () => void
}) {
  const frqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'frq' && q.frqParts?.length), [courseKey])
  const [phase, setPhase] = useState<RoundPhase>('setup')
  const [round, setRound] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [score, setScore] = useState(0)

  const startRound = () => {
    setRound(shuffle(frqs).slice(0, Math.min(3, frqs.length)))
    setIndex(0)
    setResponses({})
    setScore(0)
    setPhase('play')
  }

  const q = round[index]
  if (phase === 'setup') {
    return (
      <GameShell title="FRQ Forge" subtitle="Part-by-part rubric practice" onExit={onExit}>
        <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>start round</button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    return (
      <GameShell title="FRQ Forge" subtitle="Round complete" onExit={onExit}>
        <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>completion score {score}</p>
        <button type="button" onClick={startRound} className="mt-3 px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>play again</button>
      </GameShell>
    )
  }

  if (!q) {
    return (
      <GameShell title="FRQ Forge" subtitle="No FRQs available" onExit={onExit}>
        <p className="text-sm" style={{ color: '#d1fae5' }}>No FRQ items found for this course.</p>
      </GameShell>
    )
  }

  return (
    <GameShell title="FRQ Forge" subtitle={`frq ${index + 1}/${round.length}`} onExit={onExit}>
      <div className="border p-4" style={panelStyle()}>
        <p className="text-sm mb-2" style={{ color: '#d1fae5' }}>{q.question}</p>
        {q.stimulus && <p className="text-xs mb-3 whitespace-pre-line" style={{ color: '#a7f3d0' }}>{q.stimulus}</p>}
        {(q.frqParts ?? []).map((part) => (
          <div key={part.part} className="mb-3">
            <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>({part.part}) {part.prompt}</p>
            <textarea value={responses[part.part] ?? ''} onChange={(e) => setResponses((prev) => ({ ...prev, [part.part]: e.target.value }))} rows={3} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }} placeholder="Use claim + evidence + explanation." />
          </div>
        ))}
        <p className="text-xs" style={{ color: '#86efac' }}>rubric key focus: {q.correctAnswer}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          const filled = (q.frqParts ?? []).filter((p) => {
            const text = (responses[p.part] ?? '').trim()
            return text.length >= 60 && /because|therefore|this shows|as a result|for example/i.test(text)
          }).length
          const correctEnough = filled >= Math.ceil((q.frqParts?.length ?? 1) * 0.7)
          setScore((s) => s + filled)
          recordAttempt(q.id, correctEnough, 'medium')
          if (index >= round.length - 1) setPhase('done')
          else {
            setIndex((i) => i + 1)
            setResponses({})
          }
        }}
        className="mt-3 px-4 py-2 text-xs font-bold uppercase border"
        style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
      >
        submit and continue
      </button>
    </GameShell>
  )
}

function UnitBossBattlesGame({
  courseKey,
  recordAttempt,
  onExit,
}: {
  courseKey: string
  recordAttempt: (questionId: string, correct: boolean, confidence: Confidence) => void
  onExit: () => void
}) {
  const all = useMemo(() => getQuestionsForCourse(courseKey), [courseKey])
  const units = useMemo(() => Array.from(new Set(all.map((q) => q.unit))).sort((a, b) => a - b), [all])
  const [phase, setPhase] = useState<RoundPhase>('setup')
  const [unit, setUnit] = useState<number>(units[0] ?? 1)
  const [battle, setBattle] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [frqResponses, setFrqResponses] = useState<Record<string, string>>({})
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [confidence, setConfidence] = useState<Confidence>('medium')

  const startBattle = () => {
    const pool = all.filter((q) => q.unit === unit)
    const mcq = shuffle(pool.filter((q) => q.type === 'mcq')).slice(0, 6)
    const frq = shuffle(pool.filter((q) => q.type === 'frq')).slice(0, 2)
    setBattle(shuffle([...mcq, ...frq]))
    setIndex(0)
    setSelected('')
    setFrqResponses({})
    setRevealed(false)
    setScore(0)
    setResults({})
    setConfidence('medium')
    setPhase('play')
  }

  const q = battle[index]
  const missed = battle.filter((item) => results[item.id] === false)

  if (phase === 'setup') {
    const unitMcq = all.filter((x) => x.unit === unit && x.type === 'mcq').length
    const unitFrq = all.filter((x) => x.unit === unit && x.type === 'frq').length
    return (
      <GameShell title="Unit Boss Battles" subtitle="Choose a unit and launch a challenge run" onExit={onExit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>unit</p>
            <select value={unit} onChange={(e) => setUnit(Number(e.target.value))} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}>
              {units.map((u) => <option key={u} value={u}>unit {u}</option>)}
            </select>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>question availability</p>
            <p className="text-sm" style={{ color: '#a7f3d0' }}>{unitMcq} MCQ · {unitFrq} FRQ</p>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>battle format</p>
            <p className="text-sm" style={{ color: '#a7f3d0' }}>up to 6 MCQ + 2 FRQ</p>
          </div>
        </div>
        <button type="button" onClick={startBattle} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>start battle</button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    const pct = battle.length > 0 ? (score / battle.length) * 100 : 0
    const rank = pct >= 90 ? 'S' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : 'C'
    return (
      <GameShell title="Unit Boss Battles" subtitle="Battle complete" onExit={onExit}>
        <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>rank {rank}</p>
        <p className="text-sm" style={{ color: '#a7f3d0' }}>score {score}/{battle.length} · {pct.toFixed(0)}%</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          <button type="button" onClick={() => setPhase('setup')} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>new setup</button>
          <button type="button" onClick={startBattle} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>replay battle</button>
          {missed.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setBattle(shuffle(missed))
                setIndex(0)
                setSelected('')
                setFrqResponses({})
                setRevealed(false)
                setScore(0)
                setResults({})
                setConfidence('medium')
                setPhase('play')
              }}
              className="px-4 py-2 text-xs font-bold uppercase border"
              style={{ background: '#fef3c7', color: '#92400e', borderColor: '#fcd34d' }}
            >
              retry missed fights
            </button>
          )}
        </div>
      </GameShell>
    )
  }

  if (!q) {
    return (
      <GameShell title="Unit Boss Battles" subtitle="No battle questions available" onExit={onExit}>
        <p className="text-sm" style={{ color: '#d1fae5' }}>No items in this unit. Choose another unit in setup.</p>
        <button type="button" onClick={() => setPhase('setup')} className="mt-3 px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>back to setup</button>
      </GameShell>
    )
  }

  const canSubmitFrq = q.type !== 'frq' ||
    (
      q.frqParts?.every((p) => {
        const txt = (frqResponses[p.part] ?? '').trim()
        return txt.length >= 35
      }) ?? (frqResponses.general ?? '').trim().length >= 50
    )

  return (
    <GameShell title="Unit Boss Battles" subtitle={`fight ${index + 1}/${battle.length}`} onExit={onExit}>
      <div className="border p-4" style={panelStyle()}>
        <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>unit {q.unit} · {q.type.toUpperCase()}</p>
        <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>

        {q.stimulus && (
          <div className="border p-3 mb-3" style={{ background: '#102238', borderColor: '#1e3a5f' }}>
            <p className="text-xs whitespace-pre-line" style={{ color: '#a7f3d0' }}>{q.stimulus}</p>
          </div>
        )}

        {q.type === 'mcq' && (
          <div className="space-y-2">
            {(q.options ?? []).map((opt) => {
              const isCorrect = opt.letter === q.correctAnswer
              const isSelected = selected === opt.letter
              const bg = !revealed ? (isSelected ? '#e0f2fe' : '#0f1f33') : (isCorrect ? '#dcfce7' : isSelected ? '#fee2e2' : '#0f1f33')
              const color = !revealed ? (isSelected ? '#0f172a' : '#d1fae5') : (isCorrect ? '#166534' : isSelected ? '#991b1b' : '#d1fae5')
              return (
                <button key={opt.letter} type="button" onClick={() => !revealed && setSelected(opt.letter)} className="w-full text-left p-2.5 border text-sm" style={{ background: bg, color, borderColor: '#1e3a5f' }}>
                  <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
                </button>
              )
            })}
          </div>
        )}

        {q.type === 'mcq' && revealed && (
          <div className="mt-3 border p-3" style={{ ...panelStyle(), color: '#a7f3d0' }}>
            <p className="text-xs font-bold mb-1">incorrect options review</p>
            <ul className="space-y-1 text-xs">
              {(q.options ?? []).filter((o) => o.letter !== q.correctAnswer).map((o) => (
                <li key={o.letter}><span className="font-mono mr-1">{o.letter}.</span>{o.text}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs"><span className="font-bold">why correct:</span> {q.explanation}</p>
          </div>
        )}

        {q.type === 'frq' && (
          <div className="space-y-3">
            {(q.frqParts && q.frqParts.length > 0)
              ? q.frqParts.map((part) => (
                  <div key={part.part}>
                    <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>({part.part}) {part.prompt}</p>
                    <textarea
                      value={frqResponses[part.part] ?? ''}
                      onChange={(e) => setFrqResponses((prev) => ({ ...prev, [part.part]: e.target.value }))}
                      rows={3}
                      className="w-full p-2 text-sm border"
                      style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}
                      placeholder="write your response for this part..."
                    />
                  </div>
                ))
              : (
                  <textarea
                    value={frqResponses.general ?? ''}
                    onChange={(e) => setFrqResponses((prev) => ({ ...prev, general: e.target.value }))}
                    rows={5}
                    className="w-full p-2 text-sm border"
                    style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}
                    placeholder="write your FRQ response..."
                  />
                )}
            {revealed && <p className="text-xs" style={{ color: '#86efac' }}>rubric key: {q.correctAnswer}</p>}
          </div>
        )}
      </div>

      <div className="mt-3 flex gap-2 flex-wrap items-center">
        {!revealed ? (
          <>
            {q.type === 'mcq' && (
              <div className="flex items-center gap-1.5">
                {(['low', 'medium', 'high'] as const).map((c) => (
                  <button key={c} type="button" onClick={() => setConfidence(c)} className="px-2.5 py-2 text-[11px] font-bold uppercase border" style={{ background: confidence === c ? '#e9d5ff' : '#102238', color: confidence === c ? '#6b21a8' : '#c4b5fd', borderColor: '#7c3aed55' }}>
                    {c}
                  </button>
                ))}
              </div>
            )}
            <button
              type="button"
              disabled={(q.type === 'mcq' && !selected) || (q.type === 'frq' && !canSubmitFrq)}
              onClick={() => {
                if (q.type === 'mcq') {
                  const ok = selected === q.correctAnswer
                  if (ok) setScore((s) => s + 1)
                  setResults((prev) => ({ ...prev, [q.id]: ok }))
                  recordAttempt(q.id, ok, confidence)
                } else {
                  const fullParts = q.frqParts?.length ?? 1
                  const strongParts = (q.frqParts ?? [{ part: 'general', prompt: '', points: 0 }]).filter((p) => {
                    const txt = ((p.part === 'general' ? frqResponses.general : frqResponses[p.part]) ?? '').trim()
                    return txt.length >= 60 && /because|therefore|for example|this shows|as a result/i.test(txt)
                  }).length
                  const ok = strongParts >= Math.ceil(fullParts * 0.7)
                  if (ok) setScore((s) => s + 1)
                  setResults((prev) => ({ ...prev, [q.id]: ok }))
                  recordAttempt(q.id, ok, 'medium')
                }
                setRevealed(true)
              }}
              className="px-4 py-2 text-xs font-bold uppercase border disabled:opacity-50"
              style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
            >
              submit fight
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (index >= battle.length - 1) setPhase('done')
              else {
                setIndex((i) => i + 1)
                setSelected('')
                setFrqResponses({})
                setRevealed(false)
                setConfidence('medium')
              }
            }}
            className="px-4 py-2 text-xs font-bold uppercase border"
            style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
          >
            {index >= battle.length - 1 ? 'finish battle' : 'next fight'}
          </button>
        )}
      </div>
    </GameShell>
  )
}

function EzoLearnCenterContent() {
  const searchParams = useSearchParams()
  const activeCourse = useMemo(() => normalizeCourseKey(searchParams.get('course') ?? 'apes'), [searchParams])
  const [activeGame, setActiveGame] = useState<ModeKey | null>(null)

  const gameCards: GameCard[] = [
    { key: 'flashcard-frenzy', title: 'Flashcard Frenzy', detail: 'Adaptive spaced-repetition rounds with confidence calibration and miss retries.', accent: '#86efac' },
    { key: 'unit-boss-battles', title: 'Unit Boss Battles', detail: 'Unit-based mixed challenge with scoring, reflection, and retry loops.', accent: '#c4b5fd' },
    { key: 'distractor-hunter', title: 'Distractor Hunter', detail: 'Train trap detection so tough wrong answers stop tricking you.', accent: '#7dd3fc' },
    { key: 'explain-to-win', title: 'Explain-to-Win', detail: 'Generate explanations with coaching to build durable memory traces.', accent: '#f9a8d4' },
    { key: 'frq-forge', title: 'FRQ Forge', detail: 'Part-by-part FRQ construction using rubric-aligned writing checks.', accent: '#fcd34d' },
  ]

  const { progress, recordAttempt, resetCourseProgress } = useCourseProgress(activeCourse)

  useEffect(() => {
    if (!activeGame) return
    window.localStorage.setItem(`ezo-last-game-${activeCourse}`, activeGame)
  }, [activeGame, activeCourse])

  useEffect(() => {
    const saved = window.localStorage.getItem(`ezo-last-game-${activeCourse}`) as ModeKey | null
    if (saved && gameCards.some((g) => g.key === saved)) setActiveGame(saved)
    else setActiveGame(null)
  }, [activeCourse])

  const level = levelFromXp(progress.xp)
  const xpCurrent = xpIntoLevel(progress.xp)
  const totalQuestions = getQuestionsForCourse(activeCourse).length
  const dueNow = Object.values(progress.questionMemory).filter((m) => m.dueAt <= nowMs()).length
  const acc = accuracyPct(progress.totalCorrect, progress.totalAnswered)

  return (
    <div className="min-h-[calc(100vh-64px)] relative overflow-hidden" style={{ background: '#050d1a' }}>
      {glowyBackdrop()}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <div className="mb-6 p-5 md:p-6 border relative overflow-hidden" style={{ background: 'linear-gradient(120deg, rgba(220,252,231,0.95) 0%, rgba(243,232,255,0.9) 45%, rgba(236,253,245,0.95) 100%)', borderColor: '#c4b5fd', boxShadow: '0 24px 50px rgba(17,24,39,0.3)' }}>
          <div className="absolute inset-0 opacity-60 pointer-events-none animate-gradient-shift" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))' }} />
          <p className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: '#6d28d9' }}>ezo learn center</p>
          <h1 className="text-3xl md:text-4xl font-black lowercase tracking-tight mt-1" style={{ color: '#14532d' }}>high-retention game hub</h1>
          <p className="mt-2 text-sm md:text-base" style={{ color: '#166534' }}>
            Course: <span className="font-bold">{COURSE_LABELS[activeCourse] ?? activeCourse.toUpperCase()}</span>. Built on retrieval practice, spaced repetition, interleaving, and feedback loops.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href={`/collegebored?course=${encodeURIComponent(activeCourse)}`} className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border" style={{ color: '#6d28d9', borderColor: '#c4b5fd', background: '#ffffffaa' }}>back to collegebored</Link>
            <button type="button" onClick={() => setActiveGame(null)} className="px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border" style={{ color: '#166534', borderColor: '#86efac', background: '#dcfce7' }}>open game center</button>
            <button type="button" onClick={resetCourseProgress} className="px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border" style={{ color: '#991b1b', borderColor: '#fecaca', background: '#fee2e2' }}>reset progress</button>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 md:grid-cols-5 gap-2">
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>level</p>
            <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>{level}</p>
            <p className="text-[11px]" style={{ color: '#a7f3d0' }}>{xpCurrent}/300 xp</p>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>accuracy</p>
            <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>{acc.toFixed(0)}%</p>
            <p className="text-[11px]" style={{ color: '#a7f3d0' }}>{progress.totalCorrect}/{progress.totalAnswered}</p>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>due now</p>
            <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>{dueNow}</p>
            <p className="text-[11px]" style={{ color: '#a7f3d0' }}>review items</p>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>combo</p>
            <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>{progress.combo}</p>
            <p className="text-[11px]" style={{ color: '#a7f3d0' }}>best {progress.bestCombo}</p>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>question bank</p>
            <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>{totalQuestions}</p>
            <p className="text-[11px]" style={{ color: '#a7f3d0' }}>items loaded</p>
          </div>
        </div>

        {!activeGame && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {gameCards.map((card) => (
              <button
                key={card.key}
                type="button"
                onClick={() => setActiveGame(card.key)}
                className="text-left p-4 border transition-all duration-300 hover:-translate-y-1"
                style={{ ...panelStyle(), boxShadow: '0 14px 28px rgba(0,0,0,0.26)' }}
              >
                <p className="text-xs font-mono uppercase tracking-wider" style={{ color: card.accent }}>start game</p>
                <p className="text-base font-bold mt-1" style={{ color: '#d1fae5' }}>{card.title}</p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: '#a7f3d0' }}>{card.detail}</p>
              </button>
            ))}
          </div>
        )}

        {activeGame === 'flashcard-frenzy' && <FlashcardFrenzyGame courseKey={activeCourse} progress={progress} recordAttempt={recordAttempt} onExit={() => setActiveGame(null)} />}
        {activeGame === 'distractor-hunter' && <DistractorHunterGame courseKey={activeCourse} recordAttempt={recordAttempt} onExit={() => setActiveGame(null)} />}
        {activeGame === 'explain-to-win' && <ExplainToWinGame courseKey={activeCourse} recordAttempt={recordAttempt} onExit={() => setActiveGame(null)} />}
        {activeGame === 'frq-forge' && <FRQForgeGame courseKey={activeCourse} recordAttempt={recordAttempt} onExit={() => setActiveGame(null)} />}
        {activeGame === 'unit-boss-battles' && <UnitBossBattlesGame courseKey={activeCourse} recordAttempt={recordAttempt} onExit={() => setActiveGame(null)} />}
      </div>
    </div>
  )
}

export default function EzoLearnCenterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ background: '#050d1a' }}><SiteNav /><div className="max-w-7xl mx-auto px-6 py-8" style={{ color: '#a7f3d0' }}>loading ezo learn center...</div></div>}>
      <div className="min-h-screen" style={{ background: '#050d1a' }}>
        <SiteNav />
        <EzoLearnCenterContent />
      </div>
    </Suspense>
  )
}
