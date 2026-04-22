'use client'

import Link from 'next/link'
import { useEffect, useState, useMemo } from 'react'
import { SiteNav } from '@/components/site-nav'
import {
  EXAMS,
  STUDY_DAYS,
  SUBJECT_COLORS,
  SUBJECT_NAMES,
  TYPE_LABELS,
  getDaysUntil,
  formatDate,
  getTaskLink,
  type Task,
  type StudyDay,
} from '@/lib/study-plan-data'

const STORAGE_KEY = 'apgrounds-study-progress'

export default function StudyPlanPage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({})
  const [loaded, setLoaded] = useState(false)
  const [filter, setFilter] = useState<string | null>(null)
  const [showIncompleteOnly, setShowIncompleteOnly] = useState(false)
  const [collapsedDays, setCollapsedDays] = useState<Record<string, boolean>>({})

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setCompleted(JSON.parse(saved))
      } catch { /* ignore */ }
    }
    setLoaded(true)
  }, [])

  // Save to localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed))
    }
  }, [completed, loaded])

  const toggleTask = (taskId: string) => {
    setCompleted(prev => ({ ...prev, [taskId]: !prev[taskId] }))
  }

  const toggleDay = (date: string) => {
    setCollapsedDays(prev => ({ ...prev, [date]: !prev[date] }))
  }

  // Find today and next priority
  const today = '2026-04-22'
  const todayData = STUDY_DAYS.find(d => d.date === today)
  
  const nextExam = useMemo(() => {
    return EXAMS.find(e => getDaysUntil(e.date) > 0) || EXAMS[EXAMS.length - 1]
  }, [])

  // Filter days
  const filteredDays = useMemo(() => {
    return STUDY_DAYS.filter(day => {
      if (filter) {
        const hasSubject = day.tasks.some(t => t.subject === filter)
        if (!hasSubject) return false
      }
      if (showIncompleteOnly) {
        const hasIncomplete = day.tasks.some(t => !completed[t.id])
        if (!hasIncomplete) return false
      }
      return true
    })
  }, [filter, showIncompleteOnly, completed])

  // Progress stats
  const totalTasks = STUDY_DAYS.reduce((sum, d) => sum + d.tasks.length, 0)
  const completedTasks = Object.values(completed).filter(Boolean).length
  const overallProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  const getDayProgress = (day: StudyDay) => {
    const done = day.tasks.filter(t => completed[t.id]).length
    return { done, total: day.tasks.length, pct: day.tasks.length > 0 ? Math.round((done / day.tasks.length) * 100) : 0 }
  }

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#050d1a' }}>
        <div className="font-mono text-sm" style={{ color: '#7dd3fc' }}>Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: '#050d1a' }}>
      <SiteNav />

      {/* Header */}
      <div className="px-4 sm:px-6 md:px-14 pt-8 pb-6 max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-4 transition-all hover:gap-3"
          style={{ color: '#38bdf8' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-black lowercase tracking-tight mb-2" style={{ color: '#f0f6ff' }}>
          AP Study Plan
        </h1>
        <p className="text-sm sm:text-base mb-6" style={{ color: '#b8d0ee' }}>
          Daily command center from April 22 - May 15, 2026. Check off tasks as you go.
        </p>

        {/* Overall Progress Bar */}
        <div className="mb-6 p-4" style={{ background: '#0a1929', border: '1px solid #1e3a5f' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-wider" style={{ color: '#7dd3fc' }}>
              Overall Progress
            </span>
            <span className="font-mono text-sm font-bold" style={{ color: '#f0f6ff' }}>
              {completedTasks}/{totalTasks} tasks ({overallProgress}%)
            </span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: '#1e3a5f' }}>
            <div
              className="h-full transition-all duration-500"
              style={{ width: `${overallProgress}%`, background: 'linear-gradient(90deg, #22c55e, #38bdf8)' }}
            />
          </div>
        </div>

        {/* Exam Countdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {EXAMS.map(exam => {
            const days = getDaysUntil(exam.date)
            const isPast = days < 0
            const isToday = days === 0
            return (
              <div
                key={exam.id}
                className="p-4 relative overflow-hidden"
                style={{
                  background: isPast ? '#0a1929' : '#0f2540',
                  border: `1px solid ${isPast ? '#1e3a5f' : exam.color}44`,
                  opacity: isPast ? 0.6 : 1,
                }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ background: exam.color }}
                />
                <p className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: exam.color }}>
                  {exam.short}
                </p>
                <p className="text-sm font-bold mb-1" style={{ color: '#f0f6ff' }}>
                  {exam.name}
                </p>
                <p className="text-xs mb-2" style={{ color: '#8aabb0' }}>
                  {formatDate(exam.date)} · {exam.time}
                </p>
                <div
                  className="inline-block px-2 py-0.5 font-mono text-xs font-bold"
                  style={{
                    background: isToday ? '#22c55e22' : isPast ? '#6b728022' : `${exam.color}22`,
                    color: isToday ? '#22c55e' : isPast ? '#6b7280' : exam.color,
                  }}
                >
                  {isPast ? 'Done' : isToday ? 'TODAY' : `${days} days`}
                </div>
              </div>
            )
          })}
        </div>

        {/* Strategy Tips */}
        <details className="mb-6" style={{ background: '#0a1929', border: '1px solid #1e3a5f' }}>
          <summary className="px-4 py-3 cursor-pointer font-mono text-xs uppercase tracking-wider" style={{ color: '#7dd3fc' }}>
            How to use this page + Study Tips
          </summary>
          <div className="px-4 pb-4 text-sm" style={{ color: '#b8d0ee' }}>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Check off tasks as you complete them — progress saves automatically</li>
              <li>Click any task to go to the relevant study content</li>
              <li>Use <strong>active recall</strong>: test yourself, don&apos;t just re-read</li>
              <li>Do Quizlets in <strong>Learn mode</strong> for best retention</li>
              <li>Time your essays — practice under real conditions</li>
              <li>Review your mistakes — they&apos;re the fastest way to improve</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {Object.entries(TYPE_LABELS).map(([key, { label, color }]) => (
                <span
                  key={key}
                  className="px-2 py-0.5 text-xs font-mono"
                  style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </details>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="font-mono text-[10px] uppercase tracking-wider mr-1" style={{ color: '#7dd3fc' }}>
            Filter:
          </span>
          <button
            onClick={() => setFilter(null)}
            className="px-2 py-1 font-mono text-xs transition-all"
            style={{
              background: filter === null ? '#38bdf822' : 'transparent',
              color: filter === null ? '#38bdf8' : '#8aabb0',
              border: `1px solid ${filter === null ? '#38bdf844' : '#1e3a5f'}`,
            }}
          >
            All
          </button>
          {Object.entries(SUBJECT_NAMES).map(([key, name]) => (
            <button
              key={key}
              onClick={() => setFilter(filter === key ? null : key)}
              className="px-2 py-1 font-mono text-xs transition-all"
              style={{
                background: filter === key ? `${SUBJECT_COLORS[key]}22` : 'transparent',
                color: filter === key ? SUBJECT_COLORS[key] : '#8aabb0',
                border: `1px solid ${filter === key ? `${SUBJECT_COLORS[key]}44` : '#1e3a5f'}`,
              }}
            >
              {name}
            </button>
          ))}
          <button
            onClick={() => setShowIncompleteOnly(!showIncompleteOnly)}
            className="px-2 py-1 font-mono text-xs transition-all ml-2"
            style={{
              background: showIncompleteOnly ? '#f5970b22' : 'transparent',
              color: showIncompleteOnly ? '#f59e0b' : '#8aabb0',
              border: `1px solid ${showIncompleteOnly ? '#f59e0b44' : '#1e3a5f'}`,
            }}
          >
            {showIncompleteOnly ? 'Incomplete Only' : 'Show All'}
          </button>
        </div>

        {/* Next Exam Priority Banner */}
        {nextExam && (
          <div
            className="mb-6 p-4 flex items-center gap-4"
            style={{
              background: `${nextExam.color}11`,
              border: `1px solid ${nextExam.color}44`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: nextExam.color }}
            />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: nextExam.color }}>
                Next Priority
              </p>
              <p className="text-sm font-bold" style={{ color: '#f0f6ff' }}>
                {nextExam.name} — {getDaysUntil(nextExam.date)} days away
              </p>
            </div>
          </div>
        )}

        {/* Today's Plan (if today is in the plan) */}
        {todayData && (
          <div
            className="mb-8 p-4 sm:p-5"
            style={{
              background: '#0f2540',
              border: '2px solid #38bdf8',
              boxShadow: '0 0 20px rgba(56,189,248,0.15)',
            }}
          >
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span
                  className="px-2 py-0.5 font-mono text-xs font-bold uppercase"
                  style={{ background: '#38bdf822', color: '#38bdf8' }}
                >
                  Today
                </span>
                <span className="font-mono text-xs" style={{ color: '#8aabb0' }}>
                  {formatDate(todayData.date)}
                </span>
              </div>
              <span className="font-mono text-xs" style={{ color: '#7dd3fc' }}>
                {getDayProgress(todayData).done}/{getDayProgress(todayData).total} done
              </span>
            </div>
            <div className="space-y-2">
              {todayData.tasks
                .filter(t => !filter || t.subject === filter)
                .map(task => (
                  <TaskRow key={task.id} task={task} completed={completed[task.id]} onToggle={() => toggleTask(task.id)} />
                ))}
            </div>
          </div>
        )}

        {/* Day-by-Day Plan */}
        <div className="space-y-3">
          {filteredDays.map(day => {
            const progress = getDayProgress(day)
            const isCollapsed = collapsedDays[day.date]
            const isExamDay = !!day.isExamDay
            const exam = isExamDay ? EXAMS.find(e => e.id === day.isExamDay) : null
            const isToday = day.date === today

            return (
              <div
                key={day.date}
                className="overflow-hidden"
                style={{
                  background: isExamDay ? `${exam?.color}08` : '#0a1929',
                  border: `1px solid ${isExamDay ? `${exam?.color}44` : isToday ? '#38bdf844' : '#1e3a5f'}`,
                }}
              >
                {/* Day Header */}
                <button
                  type="button"
                  onClick={() => toggleDay(day.date)}
                  className="w-full px-4 py-3 flex items-center justify-between gap-2 text-left"
                  style={{ background: isCollapsed ? 'transparent' : '#0a192911' }}
                >
                  <div className="flex items-center gap-3 flex-wrap min-w-0">
                    <span className="font-mono text-sm font-bold" style={{ color: '#f0f6ff' }}>
                      {formatDate(day.date).split(',')[0]}
                    </span>
                    <span className="font-mono text-xs" style={{ color: '#8aabb0' }}>
                      {formatDate(day.date).split(', ')[1]}
                    </span>
                    {isExamDay && exam && (
                      <span
                        className="px-2 py-0.5 font-mono text-[10px] font-bold uppercase"
                        style={{ background: `${exam.color}22`, color: exam.color }}
                      >
                        {exam.short} Exam Day
                      </span>
                    )}
                    {isToday && !isExamDay && (
                      <span
                        className="px-2 py-0.5 font-mono text-[10px] font-bold uppercase"
                        style={{ background: '#38bdf822', color: '#38bdf8' }}
                      >
                        Today
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-xs" style={{ color: progress.pct === 100 ? '#22c55e' : '#8aabb0' }}>
                      {progress.done}/{progress.total}
                    </span>
                    <div className="w-16 h-1.5 rounded-full overflow-hidden hidden sm:block" style={{ background: '#1e3a5f' }}>
                      <div
                        className="h-full"
                        style={{
                          width: `${progress.pct}%`,
                          background: progress.pct === 100 ? '#22c55e' : '#38bdf8',
                        }}
                      />
                    </div>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        color: '#8aabb0',
                        transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                        transition: 'transform 0.2s',
                      }}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {/* Day Content */}
                {!isCollapsed && (
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs" style={{ color: '#8aabb0' }}>
                      <span className="font-mono">Focus: {day.focus.join(', ')}</span>
                      <span>·</span>
                      <span className="font-mono">{day.estimatedTime}</span>
                    </div>
                    {day.note && (
                      <div
                        className="mb-3 px-3 py-2 text-xs font-mono"
                        style={{ background: '#f59e0b11', color: '#f59e0b', border: '1px solid #f59e0b33' }}
                      >
                        {day.note}
                      </div>
                    )}
                    <div className="space-y-2">
                      {day.tasks
                        .filter(t => !filter || t.subject === filter)
                        .filter(t => !showIncompleteOnly || !completed[t.id])
                        .map(task => (
                          <TaskRow key={task.id} task={task} completed={completed[task.id]} onToggle={() => toggleTask(task.id)} />
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Completion Message */}
        {overallProgress === 100 && (
          <div
            className="mt-8 p-6 text-center"
            style={{ background: '#22c55e11', border: '2px solid #22c55e44' }}
          >
            <p className="text-xl font-bold mb-2" style={{ color: '#22c55e' }}>
              You did it!
            </p>
            <p className="text-sm" style={{ color: '#b8d0ee' }}>
              All tasks complete. You&apos;re ready to ace these exams. Good luck!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Task Row Component
function TaskRow({ task, completed, onToggle }: { task: Task; completed: boolean; onToggle: () => void }) {
  const color = SUBJECT_COLORS[task.subject]
  const typeInfo = TYPE_LABELS[task.type]
  const link = getTaskLink(task)

  return (
    <div
      className="flex items-start gap-3 p-2 sm:p-3 transition-all group"
      style={{
        background: completed ? '#22c55e08' : '#0a192966',
        border: `1px solid ${completed ? '#22c55e33' : 'transparent'}`,
        opacity: completed ? 0.7 : 1,
      }}
    >
      {/* Checkbox */}
      <button
        type="button"
        onClick={onToggle}
        className="shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center transition-all"
        style={{
          background: completed ? '#22c55e' : 'transparent',
          border: `2px solid ${completed ? '#22c55e' : '#4b5563'}`,
        }}
        aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {completed && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-6" stroke="#050d1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span
            className="px-1.5 py-0.5 font-mono text-[10px] font-bold"
            style={{ background: `${color}22`, color }}
          >
            {SUBJECT_NAMES[task.subject]}
          </span>
          <span
            className="px-1.5 py-0.5 font-mono text-[10px]"
            style={{ background: `${typeInfo.color}22`, color: typeInfo.color }}
          >
            {typeInfo.label}
          </span>
          {task.priority === 'must' && (
            <span
              className="px-1.5 py-0.5 font-mono text-[10px] font-bold"
              style={{ background: '#ef444422', color: '#ef4444' }}
            >
              Must Do
            </span>
          )}
          {task.priority === 'high' && (
            <span
              className="px-1.5 py-0.5 font-mono text-[10px]"
              style={{ background: '#f59e0b22', color: '#f59e0b' }}
            >
              High Priority
            </span>
          )}
          {task.priority === 'optional' && (
            <span
              className="px-1.5 py-0.5 font-mono text-[10px]"
              style={{ background: '#6b728022', color: '#9ca3af' }}
            >
              If Time
            </span>
          )}
        </div>
        <Link
          href={link}
          className="text-sm transition-colors hover:underline"
          style={{
            color: completed ? '#6b7280' : '#dbeafe',
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {task.description}
          {task.units && task.units.length > 0 && (
            <span className="ml-1 font-mono text-xs" style={{ color: '#8aabb0' }}>
              (Unit{task.units.length > 1 ? 's' : ''} {task.units.join(', ')})
            </span>
          )}
        </Link>
      </div>

      {/* Go Link */}
      <Link
        href={link}
        className="shrink-0 px-2 py-1 font-mono text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block"
        style={{ background: `${color}22`, color }}
      >
        Go
      </Link>
    </div>
  )
}
