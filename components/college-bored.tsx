'use client'

import { useEffect, useRef, useState } from 'react'
import type { Question, ExamFormat } from '@/lib/college-bored-data'
import { examFormats, getQuestionsForCourse, getRandomExamSet } from '@/lib/college-bored-data'

interface CollegeBoredProps {
  courseShort: string  // e.g. "apes"
  onClose: () => void
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
  const [selected, setSelected] = useState(courseShort.toLowerCase())
  const info = examFormats[selected]

  return (
    <div className="flex flex-col h-full overflow-auto p-8" style={{ color: '#1a1a2e' }}>
      {/* Course selector */}
      <div className="flex items-center gap-3 mb-6">
        <label className="text-sm font-semibold text-gray-600">Course:</label>
        <select
          value={selected}
          onChange={e => setSelected(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1.5 text-sm font-medium bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(examFormats).map(k => (
            <option key={k} value={k}>{examFormats[k].courseShort} — {examFormats[k].courseLabel}</option>
          ))}
        </select>
      </div>

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

// ─── MCQ QUESTION PANEL ───────────────────────────────────────────────────────
function MCQPanel({
  q,
  selected,
  onSelect,
  revealed,
}: {
  q: Question
  selected: string | null
  onSelect: (l: string) => void
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
          <p className="text-gray-400 italic">No stimulus for this question.</p>
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
                <span className="leading-relaxed">{opt.text}</span>
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
          <p className="text-gray-400 italic">No stimulus for this question.</p>
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
              placeholder="Write your response here..."
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
  const [mode, setMode] = useState<'browse' | 'exam'>('browse')
  const [examQs, setExamQs] = useState<Question[]>([])
  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})
  const [markedReview, setMarkedReview] = useState<Set<string>>(new Set())
  const [timerRunning, setTimerRunning] = useState(false)
  // 90 minutes default for practice
  const { seconds, fmt, reset } = useTimer(90 * 60, timerRunning)

  const startExam = (qs: Question[], timeSeconds: number) => {
    setExamQs(qs)
    setQIndex(0)
    setAnswers({})
    setRevealed({})
    setMarkedReview(new Set())
    reset(timeSeconds)
    setTimerRunning(true)
    setMode('exam')
  }

  const currentQ = examQs[qIndex]
  const timeWarn = seconds < 300 // < 5 min warning

  if (mode === 'browse') {
    const mcqs = allQs.filter(q => q.type === 'mcq')
    const frqs = allQs.filter(q => q.type === 'frq')

    return (
      <div className="flex flex-col h-full overflow-auto p-8 bg-white">
        {/* Random exam button */}
        <div className="mb-8 p-5 rounded-lg" style={{ background: '#1e1b4b' }}>
          <h3 className="text-white font-bold text-base mb-1">Random Practice Set</h3>
          <p className="text-indigo-200 text-sm mb-3">Randomly selected MCQs + FRQs in real exam format. Timer included.</p>
          <button
            type="button"
            onClick={() => startExam(getRandomExamSet(courseShort), 90 * 60)}
            className="flex items-center gap-2 px-4 py-2 rounded font-semibold text-sm transition-all"
            style={{ background: '#fff', color: '#1e1b4b' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
            Start Random Exam
          </button>
        </div>

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
                  onClick={() => startExam([q], 90 * 60)}
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
                  onClick={() => startExam([q], 25 * 60)}
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
            <p className="text-gray-400 text-sm">No questions available for this course yet.</p>
          </div>
        )}
      </div>
    )
  }

  // ── Exam mode ────────────────────────────────────────────────────────────
  if (!currentQ) return null
  const isRevealed = revealed[currentQ.id] || false
  const isMarked = markedReview.has(currentQ.id)

  const toggleMark = () => {
    setMarkedReview(prev => {
      const next = new Set(prev)
      next.has(currentQ.id) ? next.delete(currentQ.id) : next.add(currentQ.id)
      return next
    })
  }

  const handleReveal = () => {
    setTimerRunning(false)
    setRevealed(prev => ({ ...prev, [currentQ.id]: true }))
  }

  return (
    <div className="flex flex-col h-full bg-white">
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
          <span
            className="text-xs px-2 py-0.5 rounded font-medium"
            style={{
              background: currentQ.source === 'Released' ? '#dcfce7' : '#fef9c3',
              color: currentQ.source === 'Released' ? '#166534' : '#854d0e',
            }}
          >
            {currentQ.source} — {currentQ.sourceDetail}
          </span>
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
        </div>
      </div>

      {/* Question content */}
      <div className="flex-1 min-h-0">
        {currentQ.type === 'mcq' ? (
          <MCQPanel
            q={currentQ}
            selected={answers[currentQ.id] || null}
            onSelect={l => setAnswers(a => ({ ...a, [currentQ.id]: l }))}
            revealed={isRevealed}
          />
        ) : (
          <FRQPanel q={currentQ} revealed={isRevealed} />
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
        >
          Question {qIndex + 1} of {examQs.length}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {!isRevealed ? (
            <button
              type="button"
              onClick={handleReveal}
              className="px-4 py-1.5 rounded text-sm font-bold text-white transition-all"
              style={{ background: '#1e1b4b' }}
            >
              Check Answer
            </button>
          ) : null}
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
              onClick={() => { setMode('browse'); setTimerRunning(false) }}
              className="px-4 py-1.5 rounded text-sm font-bold text-white"
              style={{ background: '#4338ca' }}
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── MAIN MODAL ───────────────────────────────────────────────────────────────
export function CollegeBored({ courseShort, onClose }: CollegeBoredProps) {
  const [tab, setTab] = useState<'format' | 'practice'>('practice')
  const overlayRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: 'rgba(0,0,0,0.7)' }}
      onClick={e => { if (e.target === overlayRef.current) onClose() }}
    >
      <div
        className="relative flex flex-col w-full h-full max-w-6xl mx-auto my-4 rounded-xl overflow-hidden shadow-2xl"
        style={{ background: '#fff' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header — CollegeBoard style */}
        <div
          className="shrink-0 flex items-center justify-between px-6 py-3 border-b border-gray-200"
          style={{ background: '#fff' }}
        >
          {/* Left: logo + name */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded font-bold text-white text-sm"
              style={{ background: '#1e1b4b' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              CollegeBored
            </div>
            <span className="text-xs font-mono text-gray-400 border-l border-gray-200 pl-3">
              {courseShort.toUpperCase()} Practice
            </span>
          </div>

          {/* Center: tabs */}
          <div className="flex items-center gap-1 rounded-lg p-1" style={{ background: '#f3f4f6' }}>
            <button
              type="button"
              onClick={() => setTab('practice')}
              className="px-4 py-1.5 rounded-md text-sm font-semibold transition-all"
              style={{
                background: tab === 'practice' ? '#1e1b4b' : 'transparent',
                color: tab === 'practice' ? '#fff' : '#6b7280',
              }}
            >
              Practice Questions
            </button>
            <button
              type="button"
              onClick={() => setTab('format')}
              className="px-4 py-1.5 rounded-md text-sm font-semibold transition-all"
              style={{
                background: tab === 'format' ? '#1e1b4b' : 'transparent',
                color: tab === 'format' ? '#fff' : '#6b7280',
              }}
            >
              Exam Format & Timing
            </button>
          </div>

          {/* Right: close */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 transition-colors px-2 py-1 rounded hover:bg-gray-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Close
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {tab === 'format' ? (
            <ExamFormatTab courseShort={courseShort} />
          ) : (
            <PracticeTab courseShort={courseShort} />
          )}
        </div>
      </div>
    </div>
  )
}
