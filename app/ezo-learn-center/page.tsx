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

function FlashcardFrenzyGame({ courseKey, onExit }: { courseKey: string; onExit: () => void }) {
  const mcqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'mcq' && q.options && q.correctAnswer), [courseKey])
  const units = useMemo(() => Array.from(new Set(mcqs.map((q) => q.unit))).sort((a, b) => a - b), [mcqs])
  const [phase, setPhase] = useState<RoundPhase>('setup')
  const [unitFilter, setUnitFilter] = useState<number | 'all'>('all')
  const [roundLength, setRoundLength] = useState(10)
  const [round, setRound] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [confidence, setConfidence] = useState<'low' | 'medium' | 'high'>('medium')
  const [results, setResults] = useState<Record<string, { correct: boolean; confidence: 'low' | 'medium' | 'high' }>>({})
  const [isRetryRound, setIsRetryRound] = useState(false)

  const startRound = () => {
    const pool = unitFilter === 'all' ? mcqs : mcqs.filter((q) => q.unit === unitFilter)
    const picked = shuffle(pool).slice(0, Math.min(roundLength, pool.length))
    setRound(picked)
    setIndex(0)
    setSelected(null)
    setRevealed(false)
    setCorrectCount(0)
    setConfidence('medium')
    setResults({})
    setIsRetryRound(false)
    setPhase('play')
  }

  const q = round[index]
  const missed = round.filter((item) => results[item.id] && !results[item.id].correct)
  const overconfidentMisses = Object.values(results).filter((r) => !r.correct && r.confidence === 'high').length
  const weakTopics = Array.from(
    new Set(missed.map((m) => m.topic?.trim() || `Unit ${m.unit}`)),
  ).slice(0, 5)

  if (phase === 'setup') {
    return (
      <GameShell title="Flashcard Frenzy" subtitle="Quizlet-style round with focused retrieval" onExit={onExit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>Unit Filter</p>
            <select value={unitFilter} onChange={(e) => setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}>
              <option value="all">All Units</option>
              {units.map((u) => <option key={u} value={u}>Unit {u}</option>)}
            </select>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>Round Size</p>
            <select value={roundLength} onChange={(e) => setRoundLength(Number(e.target.value))} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}>
              {[8, 10, 12, 15, 20].map((n) => <option key={n} value={n}>{n} questions</option>)}
            </select>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>Question Bank</p>
            <p className="text-sm" style={{ color: '#a7f3d0' }}>{unitFilter === 'all' ? mcqs.length : mcqs.filter((q) => q.unit === unitFilter).length} MCQs ready</p>
          </div>
        </div>
        <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase tracking-wider border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>
          start round
        </button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    const pct = round.length > 0 ? (correctCount / round.length) * 100 : 0
    return (
      <GameShell title="Flashcard Frenzy" subtitle="Round complete" onExit={onExit}>
        <div className="border p-4" style={panelStyle()}>
          <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>Score {correctCount}/{round.length}</p>
          <p className="text-sm" style={{ color: '#a7f3d0' }}>Accuracy {pct.toFixed(0)}%</p>
          <p className="text-xs mt-2" style={{ color: '#c4b5fd' }}>
            Overconfident misses: {overconfidentMisses} · Missed topics: {weakTopics.length > 0 ? weakTopics.join(' · ') : 'none'}
          </p>
        </div>
        <div className="mt-3 flex gap-2">
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
                setCorrectCount(0)
                setConfidence('medium')
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

  if (!q) return null

  return (
    <GameShell title="Flashcard Frenzy" subtitle={isRetryRound ? 'Retry round: fix weak spots' : 'Answer first, then reveal all choices'} onExit={onExit}>
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
          <p className="text-xs font-bold mb-1">All incorrect choices (for comparison)</p>
          <ul className="space-y-1 text-xs">
            {(q.options ?? []).filter((o) => o.letter !== q.correctAnswer).map((o) => (
              <li key={o.letter}><span className="font-mono mr-1">{o.letter}.</span>{o.text}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs"><span className="font-bold">Why correct:</span> {q.explanation}</p>
        </div>
      )}

      <div className="mt-3 flex gap-2">
        {!revealed ? (
          <>
            <div className="flex items-center gap-1.5">
              {(['low', 'medium', 'high'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setConfidence(c)}
                  className="px-2.5 py-2 text-[11px] font-bold uppercase border"
                  style={{
                    background: confidence === c ? '#e9d5ff' : '#102238',
                    color: confidence === c ? '#6b21a8' : '#c4b5fd',
                    borderColor: '#7c3aed55',
                  }}
                >
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
                setResults((prev) => ({
                  ...prev,
                  [q.id]: { correct: isCorrect, confidence },
                }))
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

function DistractorHunterGame({ courseKey, onExit }: { courseKey: string; onExit: () => void }) {
  const mcqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'mcq' && q.options && q.correctAnswer), [courseKey])
  const [phase, setPhase] = useState<RoundPhase>('setup')
  const [round, setRound] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [note, setNote] = useState('')
  const [score, setScore] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [confidence, setConfidence] = useState<'low' | 'medium' | 'high'>('medium')
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
      <GameShell title="Distractor Hunter" subtitle="Break down why wrong options are wrong" onExit={onExit}>
        <p className="text-sm mb-3" style={{ color: '#a7f3d0' }}>You pick an answer and explain one trap in 20+ characters for memory reinforcement.</p>
        <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>start round</button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    return (
      <GameShell title="Distractor Hunter" subtitle="Round complete" onExit={onExit}>
        <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>Score {score}/{round.length * 2}</p>
        <p className="text-sm" style={{ color: '#a7f3d0' }}>1 point for correct choice + 1 point for solid distractor analysis each question.</p>
        <p className="text-xs mt-2" style={{ color: '#c4b5fd' }}>High-confidence misses: {highConfMisses}</p>
        <button type="button" onClick={startRound} className="mt-3 px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>play again</button>
      </GameShell>
    )
  }

  if (!q) return null

  return (
    <GameShell title="Distractor Hunter" subtitle={`question ${index + 1}/${round.length}`} onExit={onExit}>
      <div className="border p-4" style={panelStyle()}>
        <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
        <div className="space-y-2 mb-3">
          {(q.options ?? []).map((opt) => (
            <button key={opt.letter} type="button" onClick={() => setSelected(opt.letter)} className="w-full text-left p-2.5 border text-sm" style={{ background: selected === opt.letter ? '#e0f2fe' : '#0f1f33', color: selected === opt.letter ? '#0f172a' : '#d1fae5', borderColor: selected === opt.letter ? '#7dd3fc' : '#1e3a5f' }}>
              <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
            </button>
          ))}
        </div>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }} placeholder="Why is one incorrect answer tempting but wrong?" />
      </div>
      {!revealed ? (
        <div className="mt-3 flex gap-2 items-center flex-wrap">
          <div className="flex items-center gap-1.5">
            {(['low', 'medium', 'high'] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setConfidence(c)}
                className="px-2.5 py-2 text-[11px] font-bold uppercase border"
                style={{ background: confidence === c ? '#e9d5ff' : '#102238', color: confidence === c ? '#6b21a8' : '#c4b5fd', borderColor: '#7c3aed55' }}
              >
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
              if (note.trim().length >= 20) earned += 1
              if (!correctPick && confidence === 'high') setHighConfMisses((v) => v + 1)
              setScore((s) => s + earned)
              setRevealed(true)
            }}
            className="px-4 py-2 text-xs font-bold uppercase border disabled:opacity-50"
            style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
          >
            reveal feedback
          </button>
        </div>
      ) : (
        <div className="mt-3 space-y-2">
          <div className="border p-3 text-xs" style={{ ...panelStyle(), color: '#a7f3d0' }}>
            <p><span className="font-bold">Correct:</span> {q.correctAnswer}</p>
            <p className="mt-1"><span className="font-bold">Why:</span> {q.explanation}</p>
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

function ExplainToWinGame({ courseKey, onExit }: { courseKey: string; onExit: () => void }) {
  const mcqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'mcq' && q.options && q.correctAnswer), [courseKey])
  const [phase, setPhase] = useState<RoundPhase>('setup')
  const [round, setRound] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [explain, setExplain] = useState('')
  const [score, setScore] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const startRound = () => {
    setRound(shuffle(mcqs).slice(0, Math.min(8, mcqs.length)))
    setIndex(0)
    setSelected('')
    setExplain('')
    setScore(0)
    setRevealed(false)
    setPhase('play')
  }

  const q = round[index]

  if (phase === 'setup') {
    return (
      <GameShell title="Explain-to-Win" subtitle="Answer, then teach it in one sentence" onExit={onExit}>
        <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>start round</button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    return (
      <GameShell title="Explain-to-Win" subtitle="Round complete" onExit={onExit}>
        <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>Score {score}/{round.length * 3}</p>
        <button type="button" onClick={startRound} className="mt-3 px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>play again</button>
      </GameShell>
    )
  }

  if (!q) return null

  return (
    <GameShell title="Explain-to-Win" subtitle={`question ${index + 1}/${round.length}`} onExit={onExit}>
      <div className="border p-4" style={panelStyle()}>
        <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
        <div className="space-y-2 mb-3">
          {(q.options ?? []).map((opt) => (
            <button key={opt.letter} type="button" onClick={() => setSelected(opt.letter)} className="w-full text-left p-2.5 border text-sm" style={{ background: selected === opt.letter ? '#e0f2fe' : '#0f1f33', color: selected === opt.letter ? '#0f172a' : '#d1fae5', borderColor: selected === opt.letter ? '#7dd3fc' : '#1e3a5f' }}>
              <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
            </button>
          ))}
        </div>
        <textarea value={explain} onChange={(e) => setExplain(e.target.value)} rows={4} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }} placeholder="Explain why the correct answer is right." />
      </div>
      {!revealed ? (
        <button
          type="button"
          disabled={!selected}
          onClick={() => {
            let earned = 0
            if (selected === q.correctAnswer) earned += 1
            if (explain.trim().length >= 55) earned += 1
            if (/because|therefore|which means|so that/i.test(explain)) earned += 1
            setScore((s) => s + earned)
            setRevealed(true)
          }}
          className="mt-3 px-4 py-2 text-xs font-bold uppercase border disabled:opacity-50"
          style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
        >
          reveal coaching
        </button>
      ) : (
        <div className="mt-3 space-y-2">
          <div className="border p-3 text-xs" style={{ ...panelStyle(), color: '#a7f3d0' }}>
            <p><span className="font-bold">Correct:</span> {q.correctAnswer}</p>
            <p className="mt-1"><span className="font-bold">Coach:</span> {q.explanation}</p>
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

function FRQForgeGame({ courseKey, onExit }: { courseKey: string; onExit: () => void }) {
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
      <GameShell title="FRQ Forge" subtitle="Practice structured FRQ writing" onExit={onExit}>
        <button type="button" onClick={startRound} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>start round</button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    return (
      <GameShell title="FRQ Forge" subtitle="Round complete" onExit={onExit}>
        <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>Completion score {score}</p>
        <button type="button" onClick={startRound} className="mt-3 px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>play again</button>
      </GameShell>
    )
  }

  if (!q) return null

  return (
    <GameShell title="FRQ Forge" subtitle={`frq ${index + 1}/${round.length}`} onExit={onExit}>
      <div className="border p-4" style={panelStyle()}>
        <p className="text-sm mb-2" style={{ color: '#d1fae5' }}>{q.question}</p>
        {q.stimulus && <p className="text-xs mb-3 whitespace-pre-line" style={{ color: '#a7f3d0' }}>{q.stimulus}</p>}
        {(q.frqParts ?? []).map((part) => (
          <div key={part.part} className="mb-3">
            <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>({part.part}) {part.prompt}</p>
            <textarea value={responses[part.part] ?? ''} onChange={(e) => setResponses((prev) => ({ ...prev, [part.part]: e.target.value }))} rows={3} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }} />
          </div>
        ))}
        <p className="text-xs" style={{ color: '#86efac' }}>Rubric key focus: {q.correctAnswer}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          const filled = (q.frqParts ?? []).filter((p) => (responses[p.part] ?? '').trim().length >= 40).length
          setScore((s) => s + filled)
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

function UnitBossBattlesGame({ courseKey, onExit }: { courseKey: string; onExit: () => void }) {
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
    setPhase('play')
  }

  const q = battle[index]
  const missed = battle.filter((item) => results[item.id] === false)

  if (phase === 'setup') {
    const unitMcq = all.filter((x) => x.unit === unit && x.type === 'mcq').length
    const unitFrq = all.filter((x) => x.unit === unit && x.type === 'frq').length
    return (
      <GameShell title="Unit Boss Battles" subtitle="Choose a unit, then start the challenge" onExit={onExit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>Unit</p>
            <select value={unit} onChange={(e) => setUnit(Number(e.target.value))} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}>
              {units.map((u) => <option key={u} value={u}>Unit {u}</option>)}
            </select>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>Question Availability</p>
            <p className="text-sm" style={{ color: '#a7f3d0' }}>{unitMcq} MCQ · {unitFrq} FRQ</p>
          </div>
          <div className="border p-3" style={panelStyle()}>
            <p className="text-xs" style={{ color: '#c4b5fd' }}>Battle Format</p>
            <p className="text-sm" style={{ color: '#a7f3d0' }}>Up to 6 MCQ + 2 FRQ</p>
          </div>
        </div>
        <button type="button" onClick={startBattle} className="px-4 py-2 text-xs font-bold uppercase border" style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}>start battle</button>
      </GameShell>
    )
  }

  if (phase === 'done') {
    const pct = battle.length > 0 ? (score / battle.length) * 100 : 0
    const rank = pct >= 85 ? 'S' : pct >= 70 ? 'A' : pct >= 55 ? 'B' : 'C'
    return (
      <GameShell title="Unit Boss Battles" subtitle="Battle complete" onExit={onExit}>
        <p className="text-lg font-bold" style={{ color: '#d1fae5' }}>Rank {rank}</p>
        <p className="text-sm" style={{ color: '#a7f3d0' }}>Score {score}/{battle.length} · {pct.toFixed(0)}%</p>
        <div className="mt-3 flex gap-2">
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

  if (!q) return null

  const canSubmitFrq = q.type !== 'frq' || (q.frqParts?.every((p) => (frqResponses[p.part] ?? '').trim().length >= 25) ?? (frqResponses.general ?? '').trim().length >= 40)

  return (
    <GameShell title="Unit Boss Battles" subtitle={`fight ${index + 1}/${battle.length}`} onExit={onExit}>
      <div className="border p-4" style={panelStyle()}>
        <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>Unit {q.unit} · {q.type.toUpperCase()}</p>
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
            <p className="text-xs font-bold mb-1">Incorrect options review</p>
            <ul className="space-y-1 text-xs">
              {(q.options ?? []).filter((o) => o.letter !== q.correctAnswer).map((o) => (
                <li key={o.letter}><span className="font-mono mr-1">{o.letter}.</span>{o.text}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs"><span className="font-bold">Why correct:</span> {q.explanation}</p>
          </div>
        )}

        {q.type === 'frq' && (
          <div className="space-y-3">
            {(q.frqParts && q.frqParts.length > 0) ? q.frqParts.map((part) => (
              <div key={part.part}>
                <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>({part.part}) {part.prompt}</p>
                <textarea value={frqResponses[part.part] ?? ''} onChange={(e) => setFrqResponses((prev) => ({ ...prev, [part.part]: e.target.value }))} rows={3} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }} placeholder="Write your response for this part..." />
              </div>
            )) : (
              <textarea value={frqResponses.general ?? ''} onChange={(e) => setFrqResponses((prev) => ({ ...prev, general: e.target.value }))} rows={5} className="w-full p-2 text-sm border" style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }} placeholder="Write your FRQ response..." />
            )}
            {revealed && <p className="text-xs" style={{ color: '#86efac' }}>Rubric key: {q.correctAnswer}</p>}
          </div>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        {!revealed ? (
          <button
            type="button"
            disabled={(q.type === 'mcq' && !selected) || (q.type === 'frq' && !canSubmitFrq)}
            onClick={() => {
              if (q.type === 'mcq') {
                const ok = selected === q.correctAnswer
                if (ok) setScore((s) => s + 1)
                setResults((prev) => ({ ...prev, [q.id]: ok }))
              }
              if (q.type === 'frq') {
                setScore((s) => s + 1)
                setResults((prev) => ({ ...prev, [q.id]: true }))
              }
              setRevealed(true)
            }}
            className="px-4 py-2 text-xs font-bold uppercase border disabled:opacity-50"
            style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
          >
            submit fight
          </button>
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

  const gameCards: { key: ModeKey; title: string; detail: string; accent: string }[] = [
    { key: 'flashcard-frenzy', title: 'Flashcard Frenzy', detail: 'Pick settings, then play a focused MCQ learning round with full option review.', accent: '#86efac' },
    { key: 'unit-boss-battles', title: 'Unit Boss Battles', detail: 'Choose a unit and run a full challenge with MCQ + properly structured FRQ parts.', accent: '#c4b5fd' },
    { key: 'distractor-hunter', title: 'Distractor Hunter', detail: 'Train trap detection by identifying and explaining weak answer choices.', accent: '#7dd3fc' },
    { key: 'explain-to-win', title: 'Explain-to-Win', detail: 'Answer then teach the concept clearly for stronger long-term retention.', accent: '#f9a8d4' },
    { key: 'frq-forge', title: 'FRQ Forge', detail: 'Build FRQ skill with part-based writing loops and rubric-focused prompts.', accent: '#fcd34d' },
  ]

  useEffect(() => {
    if (!activeGame) return
    window.localStorage.setItem(`ezo-last-game-${activeCourse}`, activeGame)
  }, [activeGame, activeCourse])

  useEffect(() => {
    const saved = window.localStorage.getItem(`ezo-last-game-${activeCourse}`) as ModeKey | null
    if (saved && gameCards.some((g) => g.key === saved)) setActiveGame(saved)
    else setActiveGame(null)
  }, [activeCourse])

  return (
    <div className="min-h-[calc(100vh-64px)] relative overflow-hidden" style={{ background: '#050d1a' }}>
      {glowyBackdrop()}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <div className="mb-6 p-5 md:p-6 border relative overflow-hidden" style={{ background: 'linear-gradient(120deg, rgba(220,252,231,0.95) 0%, rgba(243,232,255,0.9) 45%, rgba(236,253,245,0.95) 100%)', borderColor: '#c4b5fd', boxShadow: '0 24px 50px rgba(17,24,39,0.3)' }}>
          <div className="absolute inset-0 opacity-60 pointer-events-none animate-gradient-shift" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))' }} />
          <p className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: '#6d28d9' }}>ezo learn center</p>
          <h1 className="text-3xl md:text-4xl font-black lowercase tracking-tight mt-1" style={{ color: '#14532d' }}>full game hub</h1>
          <p className="mt-2 text-sm md:text-base" style={{ color: '#166534' }}>Course: <span className="font-bold">{COURSE_LABELS[activeCourse] ?? activeCourse.toUpperCase()}</span>. Choose a game, start a round, and focus one step at a time.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href={`/collegebored?course=${encodeURIComponent(activeCourse)}`} className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border" style={{ color: '#6d28d9', borderColor: '#c4b5fd', background: '#ffffffaa' }}>back to collegebored</Link>
            <button type="button" onClick={() => setActiveGame(null)} className="px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border" style={{ color: '#166534', borderColor: '#86efac', background: '#dcfce7' }}>open game center</button>
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

        {activeGame === 'flashcard-frenzy' && <FlashcardFrenzyGame courseKey={activeCourse} onExit={() => setActiveGame(null)} />}
        {activeGame === 'distractor-hunter' && <DistractorHunterGame courseKey={activeCourse} onExit={() => setActiveGame(null)} />}
        {activeGame === 'explain-to-win' && <ExplainToWinGame courseKey={activeCourse} onExit={() => setActiveGame(null)} />}
        {activeGame === 'frq-forge' && <FRQForgeGame courseKey={activeCourse} onExit={() => setActiveGame(null)} />}
        {activeGame === 'unit-boss-battles' && <UnitBossBattlesGame courseKey={activeCourse} onExit={() => setActiveGame(null)} />}
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
