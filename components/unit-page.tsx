'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SiteNav } from './site-nav'

interface Topic {
  number: number
  title: string
  description: string
  videoId?: string
  quizletUrl?: string
}

interface UnitPageProps {
  course: {
    label: string
    short: string
    accent: string
    accentLight: string
  }
  unit: {
    number: number
    title: string
    examWeight: string
    description: string
  }
  topics: Topic[]
  basePath: string
  courseHref: string
  videoId?: string
  quizletUrl?: string  // Unit-level quizlet for review
  examDate?: {
    date: string
    time: string
  }
}

export function UnitPage({ course, unit, topics, basePath, courseHref, videoId: _videoId, quizletUrl, examDate }: UnitPageProps) {
  const [loaded, setLoaded] = useState(false)
  const unitThemeHint = (() => {
    const text = `${unit.title} ${topics.map((topic) => topic.title).join(' ')}`.toLowerCase()
    if (text.includes('climate') || text.includes('pollution') || text.includes('energy')) return 'systems focus'
    if (text.includes('civil war') || text.includes('reconstruction') || text.includes('cold war')) return 'causation focus'
    if (text.includes('algorithm') || text.includes('data') || text.includes('internet')) return 'logic focus'
    if (text.includes('argument') || text.includes('rhetorical') || text.includes('style')) return 'writing focus'
    return 'high-yield focus'
  })()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#050d1a' }}>
      <SiteNav />

      {/* Breadcrumb & header */}
      <div
        className="px-6 md:px-12 pt-10 pb-8 border-b"
        style={{ borderColor: 'rgba(26,108,245,0.2)' }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-6">
          <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: '#4a7090' }}>home</Link>
          <span style={{ color: '#1a3050' }}>/</span>
          <Link href={courseHref} className="transition-opacity hover:opacity-80" style={{ color: '#4a7090' }}>{course.short}</Link>
          <span style={{ color: '#1a3050' }}>/</span>
          <span style={{ color: course.accent }}>unit {unit.number}</span>
        </div>

        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.5s ease',
          }}
        >
          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-1"
            style={{ color: course.accentLight }}
          >
            {course.short} — unit {unit.number.toString().padStart(2, '0')}
          </p>
          <h1
            className="text-4xl md:text-5xl font-black lowercase tracking-tight leading-none mb-3 text-balance"
            style={{ color: '#f0f6ff' }}
          >
            {unit.title}
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div
              className="px-3 py-1 font-mono text-xs font-bold"
              style={{
                background: `${course.accent}22`,
                color: course.accent,
                border: `1px solid ${course.accent}55`,
              }}
            >
              exam weight: {unit.examWeight}
            </div>
            
            {/* Unit review buttons */}
            <a
              href={quizletUrl || `https://quizlet.com/search?query=${encodeURIComponent(`${course.short.toUpperCase()} Unit ${unit.number}`)}&type=sets`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs font-bold transition-all"
              style={{
                background: quizletUrl ? '#4255ff22' : '#4255ff12',
                color: quizletUrl ? '#4255ff' : '#6b8ab0',
                border: `1px solid ${quizletUrl ? '#4255ff44' : '#4255ff22'}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4255ff33'
                e.currentTarget.style.borderColor = '#4255ff66'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = quizletUrl ? '#4255ff22' : '#4255ff12'
                e.currentTarget.style.borderColor = quizletUrl ? '#4255ff44' : '#4255ff22'
              }}
            >
              <span className="font-black">Q</span>
              <span>{quizletUrl ? 'unit review' : 'search quizlet'}</span>
            </a>
            
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${course.short.toUpperCase()} - UNIT ${unit.number}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs font-bold transition-all"
              style={{
                background: '#ff000012',
                color: '#b06b6b',
                border: '1px solid #ff000022',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff000033'
                e.currentTarget.style.borderColor = '#ff000066'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ff000012'
                e.currentTarget.style.borderColor = '#ff000022'
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
              <span>search youtube</span>
            </a>

            <Link
              href={`${basePath}/jist`}
              className="group relative overflow-hidden px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide transition-all duration-300 animate-gradient-shift"
              style={{
                color: '#ecfeff',
                border: `1px solid ${course.accent}88`,
                background: `linear-gradient(130deg, ${course.accent}55 0%, ${course.accentLight}44 50%, #0f1b35 100%)`,
                boxShadow: `0 0 18px ${course.accent}33`,
                backgroundSize: '200% 200%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)'
                e.currentTarget.style.boxShadow = `0 0 26px ${course.accent}66`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = `0 0 18px ${course.accent}33`
              }}
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
              />
              <span className="relative">JIST page</span>
              <span className="relative ml-2 opacity-85" style={{ color: '#cffafe' }}>
                {unitThemeHint}
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: '#b8d0ee' }}>
              {unit.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 md:px-12 py-10 max-w-5xl">
        {/* Topics section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-black lowercase" style={{ color: '#f0f6ff' }}>
              topics in this unit
            </h2>
            <div className="flex-1 h-px" style={{ background: 'rgba(26,108,245,0.2)' }} />
            <span className="font-mono text-xs" style={{ color: '#4a7090' }}>
              {topics.length} topics
            </span>
          </div>

          <div className="space-y-2">
            {topics.map((topic, i) => (
              <Link
                key={topic.number}
                href={`${basePath}/${topic.number}`}
                className="group flex items-stretch overflow-hidden"
                style={{
                  background: '#0a1929',
                  border: `1px solid rgba(26,48,80,0.7)`,
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateX(0)' : 'translateX(-24px)',
                  transition: `opacity 0.45s ease ${i * 0.045}s, transform 0.45s cubic-bezier(0.22,1,0.36,1) ${i * 0.045}s`,
                  display: 'flex',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = course.accent
                  el.style.background = '#0f2540'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(26,48,80,0.7)'
                  el.style.background = '#0a1929'
                }}
              >
                {/* Left accent strip */}
                <div
                  className="shrink-0 w-1"
                  style={{ background: `${course.accent}`, opacity: 0.5 }}
                />

                <div className="flex items-start gap-4 px-5 py-4 flex-1">
                  {/* Topic number badge */}
                  <div
                    className="shrink-0 w-10 h-10 flex items-center justify-center font-mono font-black text-sm"
                    style={{
                      background: `${course.accent}1a`,
                      color: course.accent,
                      border: `1px solid ${course.accent}40`,
                    }}
                  >
                    {topic.number.toString().padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-black text-base lowercase leading-tight mb-1"
                      style={{ color: '#f0f6ff' }}
                    >
                      {topic.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#7a9ab0' }}>
                      {topic.description}
                    </p>
                  </div>

                  {/* Quizlet button - always show, with search fallback */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      const url = topic.quizletUrl || `https://quizlet.com/search?query=${encodeURIComponent(`${course.short.toUpperCase()} - ${topic.title}`)}&type=sets`
                      window.open(url, '_blank', 'noopener,noreferrer')
                    }}
                    className="shrink-0 self-center flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs font-bold transition-all cursor-pointer"
                    style={{
                      background: topic.quizletUrl ? '#4255ff18' : '#4255ff10',
                      color: topic.quizletUrl ? '#4255ff' : '#6b8ab0',
                      border: `1px solid ${topic.quizletUrl ? '#4255ff33' : '#4255ff22'}`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.background = '#4255ff30'
                      el.style.borderColor = '#4255ff66'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.background = topic.quizletUrl ? '#4255ff18' : '#4255ff10'
                      el.style.borderColor = topic.quizletUrl ? '#4255ff33' : '#4255ff22'
                    }}
                    title={topic.quizletUrl ? 'Open Quizlet' : 'Search Quizlet'}
                  >
                    <span className="font-black text-[10px]">Q</span>
                  </button>

                  {/* Video button - always show, with search fallback */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${course.short.toUpperCase()} - ${topic.title}`)}`
                      window.open(url, '_blank', 'noopener,noreferrer')
                    }}
                    className="shrink-0 self-center flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs font-bold transition-all cursor-pointer"
                    style={{
                      background: '#ff000010',
                      color: '#b06b6b',
                      border: '1px solid #ff000022',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.background = '#ff000030'
                      el.style.borderColor = '#ff000066'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.background = '#ff000010'
                      el.style.borderColor = '#ff000022'
                    }}
                    title="Search YouTube"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                    </svg>
                  </button>

                  {/* Arrow */}
                  <div
                    className="shrink-0 self-center transition-transform duration-250 group-hover:translate-x-2"
                    style={{ color: course.accent }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Exam date section at bottom */}
        {examDate && (
          <div
            className="mt-16 pt-8 border-t"
            style={{ borderColor: 'rgba(26,108,245,0.2)' }}
          >
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
              }}
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#4a7090' }}>
                exam date
              </p>
              <div
                className="p-6 border rounded-sm inline-block"
                style={{
                  borderColor: `${course.accent}44`,
                  background: `${course.accent}0a`,
                }}
              >
                <p className="font-mono text-xs tracking-[0.15em] uppercase mb-2" style={{ color: course.accent }}>
                  {course.label}
                </p>
                <p className="text-2xl font-black lowercase leading-tight mb-2" style={{ color: '#f0f6ff' }}>
                  {examDate.date}
                </p>
                <p className="text-sm font-mono" style={{ color: '#b8d0ee' }}>
                  {examDate.time} local time
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
