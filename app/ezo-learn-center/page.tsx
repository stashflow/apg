'use client'

import Link from 'next/link'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SiteNav } from '@/components/site-nav'
import { getQuestionsForCourse, normalizeCourseKey, type MCQOption, type Question } from '@/lib/college-bored-data'

const COURSE_LABELS: Record<string, string> = {
  apes: 'AP Environmental Science',
  apush: 'AP United States History',
  csp: 'AP Computer Science Principles',
  lang: 'AP English Language & Composition',
}

type ModeKey = 'flashcard-frenzy' | 'distractor-hunter' | 'explain-to-win' | 'frq-forge' | 'unit-boss-battles'

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function correctOptionText(q: Question): string {
  if (!q.options || !q.correctAnswer) return 'See explanation.'
  return q.options.find((opt) => opt.letter === q.correctAnswer)?.text ?? 'See explanation.'
}

function FlashcardFrenzy({ courseKey }: { courseKey: string }) {
  const allQuestions = useMemo(() => getQuestionsForCourse(courseKey), [courseKey])
  const units = useMemo(() => Array.from(new Set(allQuestions.map((q) => q.unit))).sort((a, b) => a - b), [allQuestions])
  const [unitFilter, setUnitFilter] = useState<number | 'all'>('all')
  const [progress, setProgress] = useState<Record<string, { bucket: number; seen: number }>>({})
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [flipped, setFlipped] = useState(false)

  const deck = useMemo(() => {
    const filtered = unitFilter === 'all' ? allQuestions : allQuestions.filter((q) => q.unit === unitFilter)
    return filtered.map((q) => ({
      id: q.id,
      unit: q.unit,
      topic: q.topic ?? `unit ${q.unit}`,
      front: q.type === 'mcq' ? q.question : `${q.question}\n\n${q.frqParts?.[0]?.prompt ?? 'Explain the core claim.'}`,
      back: q.type === 'mcq'
        ? `Correct (${q.correctAnswer}): ${correctOptionText(q)}\n\nWhy: ${q.explanation}`
        : `CollegeBoard-style rubric focus: ${q.correctAnswer ?? ''}\n\nWhy: ${q.explanation}`,
      source: `${q.source} · ${q.sourceDetail}`,
    }))
  }, [allQuestions, unitFilter])

  const currentCard = useMemo(() => {
    if (deck.length === 0) return null
    const found = currentId ? deck.find((c) => c.id === currentId) : null
    return found ?? deck[0]
  }, [deck, currentId])

  const pickNext = () => {
    if (deck.length === 0) return
    const weighted = deck.flatMap((card) => {
      const bucket = progress[card.id]?.bucket ?? 1
      const weight = Math.max(1, 6 - bucket)
      return Array.from({ length: weight }, () => card)
    })
    const next = weighted[Math.floor(Math.random() * weighted.length)]
    if (next) setCurrentId(next.id)
    setFlipped(false)
  }

  const grade = (label: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentCard) return
    setProgress((prev) => {
      const old = prev[currentCard.id] ?? { bucket: 1, seen: 0 }
      let nextBucket = old.bucket
      if (label === 'again') nextBucket = 1
      if (label === 'hard') nextBucket = Math.max(1, old.bucket - 1)
      if (label === 'good') nextBucket = Math.min(5, old.bucket + 1)
      if (label === 'easy') nextBucket = Math.min(5, old.bucket + 2)
      return { ...prev, [currentCard.id]: { bucket: nextBucket, seen: old.seen + 1 } }
    })
    pickNext()
  }

  const mastery = useMemo(() => {
    if (deck.length === 0) return 0
    const total = deck.reduce((sum, c) => sum + (progress[c.id]?.bucket ?? 1), 0)
    return (total / (deck.length * 5)) * 100
  }, [deck, progress])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase()
      if (tag === 'textarea' || tag === 'input' || tag === 'select') return
      if (e.key === ' ') {
        e.preventDefault()
        setFlipped((v) => !v)
      }
      if (e.key.toLowerCase() === 'n') pickNext()
      if (e.key === '1') grade('again')
      if (e.key === '2') grade('hard')
      if (e.key === '3') grade('good')
      if (e.key === '4') grade('easy')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono uppercase tracking-wider" style={{ color: '#d8b4fe' }}>Unit Deck</span>
        <select
          value={unitFilter}
          onChange={(e) => setUnitFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          className="px-2.5 py-1.5 text-xs border"
          style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}
        >
          <option value="all">All Units</option>
          {units.map((unit) => (
            <option key={unit} value={unit}>Unit {unit}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={pickNext}
          className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border"
          style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
        >
          next card
        </button>
        <button
          type="button"
          onClick={() => setProgress({})}
          className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border"
          style={{ background: '#fee2e2', color: '#991b1b', borderColor: '#fecaca' }}
        >
          reset deck
        </button>
        <span className="ml-auto text-xs font-mono" style={{ color: '#86efac' }}>
          mastery {mastery.toFixed(0)}%
        </span>
      </div>
      <p className="text-[11px] font-mono" style={{ color: '#c4b5fd' }}>
        shortcuts: space flip · N next · 1/2/3/4 grade
      </p>

      {currentCard ? (
        <div
          className="border p-5 min-h-[260px] cursor-pointer transition-all duration-300"
          style={{ background: '#0b1a2c', borderColor: '#1e3a5f' }}
          onClick={() => setFlipped((v) => !v)}
        >
          <p className="text-xs font-mono mb-2" style={{ color: '#a78bfa' }}>
            Unit {currentCard.unit} · {currentCard.topic}
          </p>
          <p className="text-sm whitespace-pre-line leading-relaxed" style={{ color: '#d1fae5' }}>
            {flipped ? currentCard.back : currentCard.front}
          </p>
          <p className="mt-4 text-[11px]" style={{ color: '#86efac' }}>
            {flipped ? currentCard.source : 'tap to reveal collegeboard-style answer'}
          </p>
        </div>
      ) : (
        <div className="border p-5 text-sm" style={{ background: '#0b1a2c', borderColor: '#1e3a5f', color: '#d1fae5' }}>
          no cards available for this unit filter.
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <button type="button" onClick={() => grade('again')} className="px-3 py-2 text-xs font-bold uppercase border" style={{ background: '#fee2e2', color: '#991b1b', borderColor: '#fecaca' }}>again</button>
        <button type="button" onClick={() => grade('hard')} className="px-3 py-2 text-xs font-bold uppercase border" style={{ background: '#ffedd5', color: '#9a3412', borderColor: '#fed7aa' }}>hard</button>
        <button type="button" onClick={() => grade('good')} className="px-3 py-2 text-xs font-bold uppercase border" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>good</button>
        <button type="button" onClick={() => grade('easy')} className="px-3 py-2 text-xs font-bold uppercase border" style={{ background: '#e9d5ff', color: '#6b21a8', borderColor: '#d8b4fe' }}>easy</button>
      </div>
    </div>
  )
}

function DistractorHunter({ courseKey }: { courseKey: string }) {
  const mcqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'mcq' && q.options && q.correctAnswer), [courseKey])
  const [set, setSet] = useState<Question[]>(() => shuffle(mcqs).slice(0, Math.min(8, mcqs.length)))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [revealed, setRevealed] = useState(false)

  const q = set[index]
  if (!q) return <div className="text-sm" style={{ color: '#d1fae5' }}>No MCQs available.</div>

  const wrongOptions = (q.options ?? []).filter((opt) => opt.letter !== q.correctAnswer)
  const correct = selected === q.correctAnswer
  const noteCount = wrongOptions.filter((opt) => (notes[opt.letter] ?? '').trim().length >= 18).length

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <p className="text-xs font-mono" style={{ color: '#a78bfa' }}>question {index + 1} / {set.length}</p>
        <button
          type="button"
          onClick={() => {
            setSet(shuffle(mcqs).slice(0, Math.min(8, mcqs.length)))
            setIndex(0)
            setSelected('')
            setNotes({})
            setRevealed(false)
          }}
          className="ml-auto px-3 py-1.5 text-xs font-bold uppercase border"
          style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
        >
          new round
        </button>
      </div>

      <div className="border p-4" style={{ background: '#0b1a2c', borderColor: '#1e3a5f' }}>
        <p className="text-sm leading-relaxed mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
        <div className="space-y-2">
          {(q.options ?? []).map((opt) => (
            <button
              key={opt.letter}
              type="button"
              onClick={() => !revealed && setSelected(opt.letter)}
              className="w-full text-left p-3 border text-sm"
              style={{
                background: selected === opt.letter ? '#e0f2fe' : '#0f1f33',
                color: selected === opt.letter ? '#0f172a' : '#d1fae5',
                borderColor: selected === opt.letter ? '#7dd3fc' : '#1e3a5f',
              }}
            >
              <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {wrongOptions.map((opt) => (
          <div key={opt.letter} className="border p-3" style={{ background: '#0b1a2c', borderColor: '#1e3a5f' }}>
            <p className="text-xs font-bold mb-1" style={{ color: '#c4b5fd' }}>Why {opt.letter} is tempting but wrong</p>
            <textarea
              value={notes[opt.letter] ?? ''}
              onChange={(e) => setNotes((prev) => ({ ...prev, [opt.letter]: e.target.value }))}
              rows={3}
              className="w-full p-2 text-xs border"
              style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}
              placeholder="Write your trap analysis..."
            />
            {revealed && (
              <p className="mt-2 text-[11px] leading-relaxed" style={{ color: '#86efac' }}>
                Model: tempting if you focus on isolated words in this choice; wrong because the stronger evidence supports {q.correctAnswer}.
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="px-3 py-2 text-xs font-bold uppercase border"
            style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
          >
            check analysis
          </button>
        ) : (
          <>
            <div className="px-3 py-2 text-xs border" style={{ background: '#f3e8ff', color: '#6b21a8', borderColor: '#c4b5fd' }}>
              pick: {correct ? 'correct' : 'incorrect'} · distractor notes: {noteCount}/{wrongOptions.length}
            </div>
            <button
              type="button"
              onClick={() => {
                setSelected('')
                setNotes({})
                setRevealed(false)
                setIndex((i) => Math.min(set.length - 1, i + 1))
              }}
              className="px-3 py-2 text-xs font-bold uppercase border"
              style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
            >
              next
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function ExplainToWin({ courseKey }: { courseKey: string }) {
  const mcqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'mcq' && q.options && q.correctAnswer), [courseKey])
  const [set] = useState<Question[]>(() => shuffle(mcqs).slice(0, Math.min(10, mcqs.length)))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [teach, setTeach] = useState('')
  const [revealed, setRevealed] = useState(false)

  const q = set[index]
  if (!q) return <div className="text-sm" style={{ color: '#d1fae5' }}>No MCQs available.</div>

  const hasBecause = /because|therefore|so that|which means/i.test(teach)
  const hasLength = teach.trim().length >= 50
  const gotRight = selected === q.correctAnswer
  const score = Number(gotRight) + Number(hasBecause) + Number(hasLength)

  return (
    <div className="space-y-4">
      <p className="text-xs font-mono" style={{ color: '#a78bfa' }}>question {index + 1} / {set.length}</p>
      <div className="border p-4" style={{ background: '#0b1a2c', borderColor: '#1e3a5f' }}>
        <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
        <div className="space-y-2 mb-3">
          {(q.options ?? []).map((opt) => (
            <button
              key={opt.letter}
              type="button"
              onClick={() => !revealed && setSelected(opt.letter)}
              className="w-full text-left p-2.5 border text-sm"
              style={{
                background: selected === opt.letter ? '#e0f2fe' : '#0f1f33',
                color: selected === opt.letter ? '#0f172a' : '#d1fae5',
                borderColor: selected === opt.letter ? '#7dd3fc' : '#1e3a5f',
              }}
            >
              <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
            </button>
          ))}
        </div>
        <p className="text-xs mb-1" style={{ color: '#c4b5fd' }}>Teach it in one strong sentence:</p>
        <textarea
          value={teach}
          onChange={(e) => setTeach(e.target.value)}
          rows={4}
          className="w-full p-2 text-sm border"
          style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}
          placeholder="Explain why the correct answer is correct and what principle it demonstrates..."
        />
      </div>

      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="px-3 py-2 text-xs font-bold uppercase border"
          style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
        >
          score my explanation
        </button>
      ) : (
        <div className="space-y-2">
          <div className="border p-3 text-xs" style={{ background: '#f3e8ff', color: '#5b21b6', borderColor: '#c4b5fd' }}>
            score {score}/3 · answer {gotRight ? 'correct' : `incorrect (correct ${q.correctAnswer})`} · causal language {hasBecause ? 'yes' : 'no'} · depth {hasLength ? 'good' : 'too short'}
          </div>
          <div className="border p-3 text-xs" style={{ background: '#0b1a2c', color: '#a7f3d0', borderColor: '#1e3a5f' }}>
            CollegeBoard-style feedback: {q.explanation}
          </div>
          <button
            type="button"
            onClick={() => {
              setSelected('')
              setTeach('')
              setRevealed(false)
              setIndex((i) => Math.min(set.length - 1, i + 1))
            }}
            className="px-3 py-2 text-xs font-bold uppercase border"
            style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
          >
            next question
          </button>
        </div>
      )}
    </div>
  )
}

function FRQForge({ courseKey }: { courseKey: string }) {
  const frqs = useMemo(() => getQuestionsForCourse(courseKey).filter((q) => q.type === 'frq' && q.frqParts?.length), [courseKey])
  const [index, setIndex] = useState(0)
  const [responses, setResponses] = useState<Record<string, string>>({})
  const [blocks, setBlocks] = useState<string[]>([])
  const [revealed, setRevealed] = useState(false)

  const q = frqs[index]
  if (!q) return <div className="text-sm" style={{ color: '#d1fae5' }}>No FRQs available.</div>

  const buildingBlocks = ['claim', 'specific evidence', 'analysis reasoning', 'counterpoint', 'context', 'conclusion']
  const responseCoverage = (q.frqParts ?? []).filter((part) => (responses[part.part] ?? '').trim().length >= 40).length

  return (
    <div className="space-y-4">
      <p className="text-xs font-mono" style={{ color: '#a78bfa' }}>frq {index + 1} / {frqs.length}</p>
      <div className="border p-4" style={{ background: '#0b1a2c', borderColor: '#1e3a5f' }}>
        <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {buildingBlocks.map((block) => {
            const active = blocks.includes(block)
            return (
              <button
                key={block}
                type="button"
                onClick={() => {
                  setBlocks((prev) => (prev.includes(block) ? prev.filter((b) => b !== block) : [...prev, block]))
                }}
                className="px-2.5 py-1 text-[11px] font-bold uppercase border"
                style={{ background: active ? '#ddd6fe' : '#102238', color: active ? '#5b21b6' : '#c4b5fd', borderColor: '#7c3aed55' }}
              >
                {block}
              </button>
            )
          })}
        </div>

        <div className="space-y-3">
          {(q.frqParts ?? []).map((part) => (
            <div key={part.part}>
              <p className="text-xs mb-1" style={{ color: '#a7f3d0' }}>({part.part}) {part.prompt}</p>
              <textarea
                value={responses[part.part] ?? ''}
                onChange={(e) => setResponses((prev) => ({ ...prev, [part.part]: e.target.value }))}
                rows={3}
                className="w-full p-2 text-sm border"
                style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}
                placeholder="Write your response..."
              />
            </div>
          ))}
        </div>
      </div>

      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="px-3 py-2 text-xs font-bold uppercase border"
          style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
        >
          check forge score
        </button>
      ) : (
        <div className="space-y-2">
          <div className="border p-3 text-xs" style={{ background: '#f3e8ff', color: '#5b21b6', borderColor: '#c4b5fd' }}>
            build score: {Math.min(6, blocks.length)}/6 blocks · response coverage: {responseCoverage}/{q.frqParts?.length ?? 0} parts at depth
          </div>
          <div className="border p-3 text-xs whitespace-pre-line" style={{ background: '#0b1a2c', color: '#a7f3d0', borderColor: '#1e3a5f' }}>
            CollegeBoard-style rubric focus: {q.correctAnswer}\n\nWhy tested: {q.explanation}
          </div>
          <button
            type="button"
            onClick={() => {
              setResponses({})
              setBlocks([])
              setRevealed(false)
              setIndex((i) => Math.min(frqs.length - 1, i + 1))
            }}
            className="px-3 py-2 text-xs font-bold uppercase border"
            style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
          >
            next frq
          </button>
        </div>
      )}
    </div>
  )
}

function UnitBossBattles({ courseKey }: { courseKey: string }) {
  const all = useMemo(() => getQuestionsForCourse(courseKey), [courseKey])
  const units = useMemo(() => Array.from(new Set(all.map((q) => q.unit))).sort((a, b) => a - b), [all])
  const [unit, setUnit] = useState<number | null>(units[0] ?? null)
  const [battle, setBattle] = useState<Question[]>([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [frqMini, setFrqMini] = useState<Record<string, string>>({})
  const [finished, setFinished] = useState(false)

  const startBattle = () => {
    if (!unit) return
    const inUnit = all.filter((q) => q.unit === unit)
    const mcq = shuffle(inUnit.filter((q) => q.type === 'mcq')).slice(0, 6)
    const frq = shuffle(inUnit.filter((q) => q.type === 'frq')).slice(0, 2)
    const set = shuffle([...mcq, ...frq])
    setBattle(set)
    setIndex(0)
    setAnswers({})
    setFrqMini({})
    setFinished(false)
  }

  const q = battle[index]
  const mcqTotal = battle.filter((x) => x.type === 'mcq').length
  const mcqCorrect = battle.filter((x) => x.type === 'mcq' && answers[x.id] === x.correctAnswer).length
  const frqTotal = battle.filter((x) => x.type === 'frq').length
  const frqComplete = battle.filter((x) => x.type === 'frq' && (frqMini[x.id] ?? '').trim().length >= 80).length
  const bossPct = battle.length === 0 ? 0 : ((mcqCorrect + frqComplete) / (mcqTotal + frqTotal)) * 100
  const bossRank = bossPct >= 85 ? 'S' : bossPct >= 70 ? 'A' : bossPct >= 55 ? 'B' : 'C'

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={unit ?? ''}
          onChange={(e) => setUnit(Number(e.target.value))}
          className="px-2.5 py-1.5 text-xs border"
          style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}
        >
          {units.map((u) => (
            <option key={u} value={u}>Unit {u}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={startBattle}
          className="px-3 py-1.5 text-xs font-bold uppercase border"
          style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
        >
          start boss battle
        </button>
        {battle.length > 0 && (
          <span className="ml-auto text-xs font-mono" style={{ color: '#86efac' }}>
            {finished ? `rank ${bossRank} · ${bossPct.toFixed(0)}%` : `fight ${index + 1}/${battle.length}`}
          </span>
        )}
      </div>

      {battle.length > 0 && q && !finished && (
        <div className="border p-4" style={{ background: '#0b1a2c', borderColor: '#1e3a5f' }}>
          <p className="text-xs mb-2" style={{ color: '#a78bfa' }}>Unit {q.unit} · {q.type.toUpperCase()}</p>
          <p className="text-sm mb-3" style={{ color: '#d1fae5' }}>{q.question}</p>
          {q.type === 'mcq' ? (
            <div className="space-y-2">
              {(q.options ?? []).map((opt: MCQOption) => (
                <button
                  key={opt.letter}
                  type="button"
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.letter }))}
                  className="w-full text-left p-2.5 border text-sm"
                  style={{
                    background: answers[q.id] === opt.letter ? '#e0f2fe' : '#0f1f33',
                    color: answers[q.id] === opt.letter ? '#0f172a' : '#d1fae5',
                    borderColor: answers[q.id] === opt.letter ? '#7dd3fc' : '#1e3a5f',
                  }}
                >
                  <span className="font-mono mr-2">{opt.letter}.</span>{opt.text}
                </button>
              ))}
            </div>
          ) : (
            <textarea
              rows={5}
              value={frqMini[q.id] ?? ''}
              onChange={(e) => setFrqMini((prev) => ({ ...prev, [q.id]: e.target.value }))}
              className="w-full p-2 text-sm border"
              style={{ background: '#102238', color: '#d1fae5', borderColor: '#1e3a5f' }}
              placeholder="Write a focused mini-FRQ response (80+ chars for completion credit)..."
            />
          )}

          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="px-3 py-1.5 text-xs font-bold uppercase border"
              style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
            >
              back
            </button>
            <button
              type="button"
              onClick={() => {
                if (index >= battle.length - 1) setFinished(true)
                else setIndex((i) => i + 1)
              }}
              className="px-3 py-1.5 text-xs font-bold uppercase border"
              style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
            >
              {index >= battle.length - 1 ? 'finish battle' : 'next'}
            </button>
          </div>
        </div>
      )}

      {finished && (
        <div className="border p-4" style={{ background: '#0b1a2c', borderColor: '#1e3a5f' }}>
          <p className="text-sm font-bold" style={{ color: '#d1fae5' }}>Boss result: Rank {bossRank}</p>
          <p className="text-xs mt-1" style={{ color: '#86efac' }}>
            MCQ {mcqCorrect}/{mcqTotal} · FRQ completion {frqComplete}/{frqTotal} · total {bossPct.toFixed(0)}%
          </p>
          <p className="text-xs mt-2" style={{ color: '#c4b5fd' }}>
            Review tip: replay this unit battle until you can hold Rank A twice in a row.
          </p>
        </div>
      )}
    </div>
  )
}

function EzoLearnCenterContent() {
  const searchParams = useSearchParams()
  const activeCourse = useMemo(() => normalizeCourseKey(searchParams.get('course') ?? 'apes'), [searchParams])
  const [mode, setMode] = useState<ModeKey>('flashcard-frenzy')
  const [loadedPref, setLoadedPref] = useState(false)

  const modes: { key: ModeKey; title: string; detail: string }[] = [
    { key: 'flashcard-frenzy', title: 'Flashcard Frenzy', detail: 'Quizlet-style adaptive flashcards by unit with spaced bucket learning.' },
    { key: 'distractor-hunter', title: 'Distractor Hunter', detail: 'Train yourself to spot and dismantle tempting wrong AP-style choices.' },
    { key: 'explain-to-win', title: 'Explain-to-Win', detail: 'Answer, then teach the concept in one sentence for retention.' },
    { key: 'frq-forge', title: 'FRQ Forge', detail: 'Build stronger FRQ responses with structure blocks and rubric checks.' },
    { key: 'unit-boss-battles', title: 'Unit Boss Battles', detail: 'Mixed unit challenges with performance rank feedback.' },
  ]

  useEffect(() => {
    const saved = window.localStorage.getItem(`ezo-mode-${activeCourse}`) as ModeKey | null
    if (saved && modes.some((m) => m.key === saved)) setMode(saved)
    setLoadedPref(true)
  }, [activeCourse])

  useEffect(() => {
    if (!loadedPref) return
    window.localStorage.setItem(`ezo-mode-${activeCourse}`, mode)
  }, [mode, activeCourse, loadedPref])

  const modeIndex = modes.findIndex((m) => m.key === mode)
  const prevMode = modes[(modeIndex - 1 + modes.length) % modes.length]
  const nextMode = modes[(modeIndex + 1) % modes.length]

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#050d1a' }}>
      <SiteNav />
      <div
        className="pointer-events-none absolute -top-24 -left-20 w-[460px] h-[460px] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(187,247,208,0.45), rgba(187,247,208,0))' }}
      />
      <div
        className="pointer-events-none absolute top-32 right-[-140px] w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(196,181,253,0.55), rgba(196,181,253,0))' }}
      />
      <div
        className="pointer-events-none absolute bottom-[-180px] left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-35"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.35), rgba(34,211,238,0))' }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <div
          className="mb-8 p-6 md:p-8 border relative overflow-hidden"
          style={{
            background: 'linear-gradient(120deg, rgba(220,252,231,0.95) 0%, rgba(243,232,255,0.9) 42%, rgba(236,253,245,0.95) 100%)',
            borderColor: '#c4b5fd',
            boxShadow: '0 24px 50px rgba(17, 24, 39, 0.28)',
          }}
        >
          <div
            className="absolute inset-0 opacity-60 pointer-events-none animate-gradient-shift"
            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0))' }}
          />
          <p className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: '#6d28d9' }}>
            ezo learn center
          </p>
          <h1 className="text-3xl md:text-4xl font-black lowercase tracking-tight mt-1" style={{ color: '#14532d' }}>
            quizlet-style memory + ap-level games
          </h1>
          <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: '#166534' }}>
            Active course: <span className="font-bold">{COURSE_LABELS[activeCourse] ?? activeCourse.toUpperCase()}</span>. All modes use your CollegeBoard-style bank.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <Link
              href={`/collegebored?course=${encodeURIComponent(activeCourse)}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border"
              style={{ color: '#6d28d9', borderColor: '#c4b5fd', background: '#ffffffaa' }}
            >
              back to collegebored
            </Link>
            <span className="text-xs font-mono" style={{ color: '#166534' }}>
              mode memory: saved per course
            </span>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setMode(prevMode.key)}
            className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border"
            style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}
          >
            previous mode
          </button>
          <button
            type="button"
            onClick={() => setMode(nextMode.key)}
            className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border"
            style={{ background: '#ede9fe', color: '#5b21b6', borderColor: '#c4b5fd' }}
          >
            next mode
          </button>
          <span className="text-xs font-mono ml-auto" style={{ color: '#c4b5fd' }}>
            current: {modes[modeIndex]?.title ?? 'Mode'}
          </span>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
          {modes.map((entry) => {
            const active = mode === entry.key
            return (
              <button
                key={entry.key}
                type="button"
                onClick={() => setMode(entry.key)}
                className="text-left p-3 border transition-all duration-200"
                style={{
                  background: active ? 'linear-gradient(130deg, #dcfce7 0%, #f3e8ff 100%)' : 'linear-gradient(145deg, #0b1a2c 0%, #0c2139 100%)',
                  borderColor: active ? '#c4b5fd' : '#1e3a5f',
                  color: active ? '#14532d' : '#d1fae5',
                  boxShadow: active ? '0 12px 22px rgba(196,181,253,0.3)' : 'none',
                }}
              >
                <p className="text-xs font-bold uppercase tracking-wider">{entry.title}</p>
                <p className="text-[11px] mt-1 leading-relaxed" style={{ color: active ? '#166534' : '#86efac' }}>{entry.detail}</p>
              </button>
            )
          })}
        </div>

        <div
          className="border p-5 relative overflow-hidden"
          style={{ background: 'linear-gradient(145deg, #071425 0%, #0a1f38 100%)', borderColor: '#1e3a5f', boxShadow: '0 20px 48px rgba(0,0,0,0.35)' }}
        >
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.7), rgba(196,181,253,0))' }}
          />
          <div
            className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.7), rgba(110,231,183,0))' }}
          />
          {mode === 'flashcard-frenzy' && <FlashcardFrenzy courseKey={activeCourse} />}
          {mode === 'distractor-hunter' && <DistractorHunter courseKey={activeCourse} />}
          {mode === 'explain-to-win' && <ExplainToWin courseKey={activeCourse} />}
          {mode === 'frq-forge' && <FRQForge courseKey={activeCourse} />}
          {mode === 'unit-boss-battles' && <UnitBossBattles courseKey={activeCourse} />}
        </div>
      </div>
    </div>
  )
}

export default function EzoLearnCenterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen" style={{ background: '#050d1a' }}>
          <SiteNav />
          <div className="max-w-6xl mx-auto px-6 py-8" style={{ color: '#a7f3d0' }}>
            loading ezo learn center...
          </div>
        </div>
      }
    >
      <EzoLearnCenterContent />
    </Suspense>
  )
}
