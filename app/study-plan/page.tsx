'use client'

import Link from 'next/link'
import { useEffect, useState, useMemo, useRef } from 'react'
import { SiteNav } from '@/components/site-nav'
import {
  EXAMS,
  STUDY_DAYS,
  SUBJECT_COLORS,
  SUBJECT_NAMES,
  SUBJECT_STRATEGY,
  TYPE_LABELS,
  getDaysUntil,
  formatDate,
  getTaskLink,
  getTodayString,
  getNextExam,
  type Task,
  type StudyDay,
} from '@/lib/study-plan-data'

const STORAGE_KEY = 'apgrounds-study-v2'

export default function StudyPlanPage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({})
  const [loaded, setLoaded]       = useState(false)
  const [filter, setFilter]       = useState<string | null>(null)
  const [incomplete, setIncomplete] = useState(false)
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
  const todayRef  = useRef<HTMLDivElement>(null)
  const nextExRef = useRef<HTMLDivElement>(null)

  const today     = getTodayString()
  const nextExam  = useMemo(() => getNextExam(), [])

  // ── persistence ─────────────────────────────────────────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setCompleted(JSON.parse(raw))
    } catch { /* ignore */ }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(completed))
  }, [completed, loaded])

  // ── helpers ──────────────────────────────────────────────────
  const toggle     = (id: string) => setCompleted(p => ({ ...p, [id]: !p[id] }))
  const toggleDay  = (date: string) => setCollapsed(p => ({ ...p, [date]: !p[date] }))

  const todayData  = STUDY_DAYS.find(d => d.date === today)
  const totalTasks = STUDY_DAYS.reduce((s, d) => s + d.tasks.length, 0)
  const doneTasks  = useMemo(() => Object.values(completed).filter(Boolean).length, [completed])
  const pct        = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  const dayProgress = (day: StudyDay) => {
    const done  = day.tasks.filter(t => completed[t.id]).length
    const total = day.tasks.length
    return { done, total, pct: total > 0 ? Math.round((done / total) * 100) : 0 }
  }

  const filteredDays = useMemo(() => STUDY_DAYS.filter(day => {
    if (filter && !day.tasks.some(t => t.subject === filter)) return false
    if (incomplete  && !day.tasks.some(t => !completed[t.id]))  return false
    return true
  }), [filter, incomplete, completed])

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#050d1a' }}>
        <div className="font-mono text-sm animate-pulse" style={{ color: '#7dd3fc' }}>loading plan...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-20" style={{ background: '#050d1a' }}>
      <SiteNav />

      <div className="px-4 sm:px-6 md:px-10 lg:px-14 pt-8 max-w-5xl mx-auto">

        {/* ── Back link ─────────────────────────────────────────── */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-5 transition-all hover:gap-3"
          style={{ color: '#38bdf8' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          home
        </Link>

        {/* ── Page Title ─────────────────────────────────────────── */}
        <h1 className="text-3xl sm:text-4xl font-black lowercase tracking-tight mb-1" style={{ color: '#f0f6ff' }}>
          AP Study Plan
        </h1>
        <p className="text-sm mb-7" style={{ color: '#8aabb0' }}>
          April 22 – May 15, 2026 · daily command center · check off tasks as you go
        </p>

        {/* ── Overall Progress ───────────────────────────────────── */}
        <div className="mb-6 p-4" style={{ background: '#0a1929', border: '1px solid #1e3a5f' }}>
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <span className="font-mono text-xs uppercase tracking-wider" style={{ color: '#7dd3fc' }}>
              Overall Progress
            </span>
            <span className="font-mono text-sm font-bold" style={{ color: '#f0f6ff' }}>
              {doneTasks}/{totalTasks} tasks — {pct}%
            </span>
          </div>
          <div className="h-2 overflow-hidden" style={{ background: '#1e3a5f' }}>
            <div
              className="h-full transition-all duration-700"
              style={{ width: `${pct}%`, background: pct === 100 ? '#22c55e' : 'linear-gradient(90deg,#3b82f6,#38bdf8)' }}
            />
          </div>
          <p className="text-[11px] font-mono mt-2" style={{ color: '#4b7a8a' }}>
            {pct < 20  ? 'Just getting started — every task moves the needle.' :
             pct < 50  ? 'Good momentum. Keep the streak going.' :
             pct < 80  ? 'More than halfway. The hard part is behind you.' :
             pct < 100 ? 'Almost there. Finish strong.' :
                          'Complete. Go ace those exams.'}
          </p>
        </div>

        {/* ── Exam Countdown Cards ───────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {EXAMS.map(exam => {
            const days   = getDaysUntil(exam.date)
            const isPast = days < 0
            const isNow  = days === 0
            return (
              <div
                key={exam.id}
                className="p-3 relative overflow-hidden"
                style={{
                  background: isPast ? '#0a1929' : '#0c1e33',
                  border: `1px solid ${isPast ? '#1e3a5f' : exam.color}44`,
                  opacity: isPast ? 0.55 : 1,
                }}
              >
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: exam.color }} />
                <p className="font-mono text-[9px] uppercase tracking-wider mb-1" style={{ color: exam.color }}>
                  {exam.short}
                </p>
                <p className="text-xs font-bold leading-snug mb-1" style={{ color: '#f0f6ff' }}>
                  {exam.name}
                </p>
                <p className="text-[10px] mb-2" style={{ color: '#6b8ab0' }}>
                  {formatDate(exam.date).replace(/\w+,\s/, '')} · {exam.time}
                </p>
                <div
                  className="inline-block px-2 py-0.5 font-mono text-[10px] font-bold"
                  style={{
                    background: `${isNow ? '#22c55e' : isPast ? '#6b7280' : exam.color}22`,
                    color:       isNow ? '#22c55e'  : isPast ? '#6b7280' : exam.color,
                  }}
                >
                  {isPast ? 'Done' : isNow ? 'TODAY' : `${days}d away`}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Next Exam Priority Banner ──────────────────────────── */}
        {nextExam && getDaysUntil(nextExam.date) >= 0 && (
          <div
            className="mb-5 px-4 py-3 flex items-center gap-4 flex-wrap"
            style={{ background: `${nextExam.color}0e`, border: `1px solid ${nextExam.color}44` }}
          >
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: nextExam.color }} />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: nextExam.color }}>
                Next Priority
              </p>
              <p className="text-sm font-bold" style={{ color: '#f0f6ff' }}>
                {nextExam.name}
                <span className="ml-2 font-normal text-xs" style={{ color: '#8aabb0' }}>
                  {getDaysUntil(nextExam.date) === 0
                    ? 'Exam is today!'
                    : `${getDaysUntil(nextExam.date)} days · ${nextExam.time} local`}
                </span>
              </p>
              <p className="text-xs mt-0.5" style={{ color: '#6b8ab0' }}>
                {SUBJECT_STRATEGY[nextExam.id]}
              </p>
            </div>
          </div>
        )}

        {/* ── Jump + Filter Controls ─────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <button
            onClick={() => scrollTo(todayRef)}
            className="h-7 px-3 font-mono text-[10px] uppercase tracking-wider transition-all"
            style={{ background: '#38bdf811', color: '#38bdf8', border: '1px solid #38bdf833' }}
          >
            Jump to Today
          </button>
          {nextExam && (
            <button
              onClick={() => scrollTo(nextExRef)}
              className="h-7 px-3 font-mono text-[10px] uppercase tracking-wider transition-all"
              style={{ background: `${nextExam.color}11`, color: nextExam.color, border: `1px solid ${nextExam.color}33` }}
            >
              Jump to Next Exam
            </button>
          )}
          <div className="w-px h-4 hidden sm:block" style={{ background: '#1e3a5f' }} />
          <button
            onClick={() => setFilter(null)}
            className="h-7 px-3 font-mono text-[10px] uppercase tracking-wider transition-all"
            style={{
              background: filter === null ? '#38bdf811' : 'transparent',
              color:      filter === null ? '#38bdf8'   : '#6b8ab0',
              border:     `1px solid ${filter === null ? '#38bdf833' : '#1e3a5f'}`,
            }}
          >All</button>
          {Object.entries(SUBJECT_NAMES).map(([key, name]) => (
            <button
              key={key}
              onClick={() => setFilter(filter === key ? null : key)}
              className="h-7 px-3 font-mono text-[10px] uppercase tracking-wider transition-all"
              style={{
                background: filter === key ? `${SUBJECT_COLORS[key]}18` : 'transparent',
                color:      filter === key ?  SUBJECT_COLORS[key]        : '#6b8ab0',
                border:     `1px solid ${filter === key ? `${SUBJECT_COLORS[key]}44` : '#1e3a5f'}`,
              }}
            >{name}</button>
          ))}
          <button
            onClick={() => setIncomplete(!incomplete)}
            className="h-7 px-3 font-mono text-[10px] uppercase tracking-wider transition-all"
            style={{
              background: incomplete ? '#f59e0b11' : 'transparent',
              color:      incomplete ? '#f59e0b'   : '#6b8ab0',
              border:     `1px solid ${incomplete ? '#f59e0b44' : '#1e3a5f'}`,
            }}
          >{incomplete ? 'Incomplete Only' : 'Show All'}</button>
        </div>

        {/* ── Strategy / Legend Accordion ────────────────────────── */}
        <details className="mb-6" style={{ background: '#0a1929', border: '1px solid #1e3a5f' }}>
          <summary className="px-4 py-3 cursor-pointer font-mono text-[10px] uppercase tracking-wider select-none" style={{ color: '#7dd3fc' }}>
            How to use this page + Task Legend
          </summary>
          <div className="px-4 pb-4">
            <ul className="list-disc list-inside space-y-1 mt-2 text-sm" style={{ color: '#b8d0ee' }}>
              <li>Check off tasks as you finish — progress saves to your browser automatically</li>
              <li>Click any task title to open the relevant study content</li>
              <li>Use <strong>active recall</strong>: quiz yourself, never just re-read</li>
              <li>Set a real timer before every essay — simulate exam pressure</li>
              <li>After every MCQ set: review wrong answers <em>before</em> moving on</li>
              <li>Quizlet in <strong>Learn mode</strong> beats flashcards every time</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {Object.entries(TYPE_LABELS).map(([key, { label, color }]) => (
                <span key={key} className="px-2 py-0.5 font-mono text-[10px]"
                  style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}>
                  {label}
                </span>
              ))}
              <span className="px-2 py-0.5 font-mono text-[10px]"
                style={{ background: '#ef444422', color: '#ef4444', border: '1px solid #ef444444' }}>
                Must Do
              </span>
              <span className="px-2 py-0.5 font-mono text-[10px]"
                style={{ background: '#f59e0b22', color: '#f59e0b', border: '1px solid #f59e0b44' }}>
                High Priority
              </span>
              <span className="px-2 py-0.5 font-mono text-[10px]"
                style={{ background: '#6b728022', color: '#6b7280', border: '1px solid #6b728044' }}>
                If Time Allows
              </span>
            </div>
          </div>
        </details>

        {/* ── TODAY'S PLAN (sticky highlight) ───────────────────── */}
        {todayData && (
          <div
            ref={todayRef}
            className="mb-8 p-4 sm:p-5"
            style={{
              background: '#0d2340',
              border: '2px solid #38bdf8',
              boxShadow: '0 0 24px rgba(56,189,248,0.12)',
            }}
          >
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 font-mono text-[10px] font-bold uppercase"
                  style={{ background: '#38bdf822', color: '#38bdf8' }}>
                  Today
                </span>
                <span className="font-mono text-xs" style={{ color: '#6b8ab0' }}>
                  {formatDate(today)}
                </span>
              </div>
              <span className="font-mono text-xs" style={{ color: '#7dd3fc' }}>
                {dayProgress(todayData).done}/{dayProgress(todayData).total} done · est. {todayData.estimatedTime}
              </span>
            </div>
            {todayData.note && (
              <div className="mb-3 px-3 py-2 text-xs font-mono"
                style={{ background: '#f59e0b0d', color: '#f59e0b', border: '1px solid #f59e0b33' }}>
                {todayData.note}
              </div>
            )}
            <div className="space-y-2">
              {todayData.tasks
                .filter(t => !filter || t.subject === filter)
                .filter(t => !incomplete || !completed[t.id])
                .map(task => (
                  <TaskRow key={task.id} task={task} done={!!completed[task.id]} onToggle={() => toggle(task.id)} />
                ))}
            </div>
          </div>
        )}

        {/* ── Day-by-Day Plan ────────────────────────────────────── */}
        <div className="space-y-2">
          {filteredDays.map(day => {
            const prog     = dayProgress(day)
            const isOpen   = !collapsed[day.date]
            const examMeta = day.isExamDay ? EXAMS.find(e => e.id === day.isExamDay) : null
            const isToday  = day.date === today
            const isNextEx = nextExam && day.date === nextExam.date

            return (
              <div
                key={day.date}
                ref={isNextEx ? nextExRef : undefined}
                style={{
                  background: examMeta ? `${examMeta.color}07` : '#0a1929',
                  border: `1px solid ${examMeta ? `${examMeta.color}44` : isToday ? '#38bdf833' : '#1e3a5f'}`,
                }}
              >
                {/* Day Header */}
                <button
                  type="button"
                  onClick={() => toggleDay(day.date)}
                  className="w-full px-4 py-3 flex items-center justify-between gap-2 text-left"
                >
                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                    <span className="font-mono text-xs font-bold" style={{ color: '#f0f6ff' }}>
                      {formatDate(day.date)}
                    </span>
                    {examMeta && (
                      <span className="px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase"
                        style={{ background: `${examMeta.color}22`, color: examMeta.color }}>
                        {examMeta.short} Exam Day
                      </span>
                    )}
                    {isToday && !examMeta && (
                      <span className="px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase"
                        style={{ background: '#38bdf822', color: '#38bdf8' }}>
                        Today
                      </span>
                    )}
                    {day.note && !isOpen && (
                      <span className="hidden sm:inline text-[10px] truncate max-w-[200px]" style={{ color: '#4b7a8a' }}>
                        {day.note}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-[10px]"
                      style={{ color: prog.pct === 100 ? '#22c55e' : '#6b8ab0' }}>
                      {prog.done}/{prog.total}
                    </span>
                    <div className="w-14 h-1 hidden sm:block overflow-hidden" style={{ background: '#1e3a5f' }}>
                      <div className="h-full transition-all"
                        style={{ width: `${prog.pct}%`, background: prog.pct === 100 ? '#22c55e' : '#38bdf8' }} />
                    </div>
                    <span className="font-mono text-[10px] hidden sm:block" style={{ color: '#4b7a8a' }}>
                      {day.estimatedTime}
                    </span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                      style={{ color: '#4b7a8a', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {/* Day Body */}
                {isOpen && (
                  <div className="px-4 pb-4">
                    {day.note && (
                      <div className="mb-3 px-3 py-2 text-xs font-mono"
                        style={{ background: '#f59e0b0d', color: '#f59e0b', border: '1px solid #f59e0b22' }}>
                        {day.note}
                      </div>
                    )}
                    <div className="space-y-1.5">
                      {day.tasks
                        .filter(t => !filter || t.subject === filter)
                        .filter(t => !incomplete || !completed[t.id])
                        .map(task => (
                          <TaskRow key={task.id} task={task} done={!!completed[task.id]} onToggle={() => toggle(task.id)} />
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Completion Message ─────────────────────────────────── */}
        {pct === 100 && (
          <div className="mt-10 p-6 text-center" style={{ background: '#22c55e0d', border: '2px solid #22c55e44' }}>
            <p className="text-2xl font-black mb-2" style={{ color: '#22c55e' }}>You did it.</p>
            <p className="text-sm" style={{ color: '#b8d0ee' }}>
              Every task complete. You&apos;re as prepared as you can be. Go ace those exams.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Task Row ────────────────────────────────────────────────────────────────
function TaskRow({ task, done, onToggle }: { task: Task; done: boolean; onToggle: () => void }) {
  const color    = SUBJECT_COLORS[task.subject]
  const typeInfo = TYPE_LABELS[task.type]
  const link     = getTaskLink(task)

  return (
    <div
      className="flex items-start gap-3 p-2.5 transition-all group"
      style={{
        background: done ? '#22c55e07' : 'transparent',
        border:     `1px solid ${done ? '#22c55e22' : 'transparent'}`,
        opacity:    done ? 0.65 : 1,
      }}
    >
      {/* Checkbox */}
      <button
        type="button"
        onClick={onToggle}
        className="shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center transition-all"
        style={{
          background: done ? '#22c55e'  : 'transparent',
          border:     `2px solid ${done ? '#22c55e' : '#2d4a5a'}`,
        }}
        aria-label={done ? 'Mark incomplete' : 'Mark complete'}
      >
        {done && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 5l2.5 2.5 4.5-5" stroke="#050d1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-1.5 mb-1">
          <span className="px-1.5 py-0.5 font-mono text-[9px] font-bold"
            style={{ background: `${color}22`, color }}>
            {SUBJECT_NAMES[task.subject]}
          </span>
          <span className="px-1.5 py-0.5 font-mono text-[9px]"
            style={{ background: `${typeInfo.color}22`, color: typeInfo.color }}>
            {typeInfo.label}
          </span>
          {task.priority === 'must' && (
            <span className="px-1.5 py-0.5 font-mono text-[9px] font-bold"
              style={{ background: '#ef444418', color: '#ef4444' }}>
              Must Do
            </span>
          )}
          {task.priority === 'high' && (
            <span className="px-1.5 py-0.5 font-mono text-[9px]"
              style={{ background: '#f59e0b18', color: '#f59e0b' }}>
              High Priority
            </span>
          )}
          {task.priority === 'optional' && (
            <span className="px-1.5 py-0.5 font-mono text-[9px]"
              style={{ background: '#6b728018', color: '#6b7280' }}>
              If Time Allows
            </span>
          )}
        </div>

        {/* Description as link */}
        <Link
          href={link}
          className="text-sm leading-snug transition-colors"
          style={{
            color:           done ? '#4b7a8a' : '#d4e8f8',
            textDecoration:  'none',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#38bdf8' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = done ? '#4b7a8a' : '#d4e8f8' }}
        >
          {task.description}
        </Link>
      </div>
    </div>
  )
}
