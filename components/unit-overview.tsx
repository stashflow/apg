'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SiteNav } from './site-nav'

interface Topic {
  title: string
  description: string
}

interface UnitOverviewProps {
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
    topics: Topic[]
  }
  courseHref: string
  basePath: string
}

export function UnitOverview({ course, unit, courseHref, basePath }: UnitOverviewProps) {
  const [loaded, setLoaded] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#050d1a' }}>
      <SiteNav />

      {/* Header strip */}
      <div
        className="w-full px-6 md:px-12 py-12 md:py-16"
        style={{
          background: '#0a1929',
          borderBottom: `1px solid rgba(26,48,80,0.8)`,
        }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-6 flex-wrap">
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
          {/* Exam weight badge */}
          <div className="flex items-center gap-3 mb-3">
            <span
              className="font-mono text-xs tracking-widest uppercase px-2 py-1"
              style={{
                background: `${course.accent}22`,
                color: course.accent,
                border: `1px solid ${course.accent}44`,
              }}
            >
              exam weight: {unit.examWeight}
            </span>
            <span
              className="font-mono text-xs"
              style={{ color: '#4a7090' }}
            >
              {unit.topics.length} topics
            </span>
          </div>

          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-2"
            style={{ color: course.accentLight }}
          >
            {course.short} · unit {String(unit.number).padStart(2, '0')}
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black lowercase tracking-tight leading-none text-balance"
            style={{ color: '#f0f6ff' }}
          >
            {unit.title}
          </h1>
        </div>
      </div>

      {/* Accent bar */}
      <div
        className="w-full h-1"
        style={{ background: `linear-gradient(90deg, ${course.accent}, ${course.accentLight}, transparent)` }}
      />

      {/* Topics grid */}
      <div className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-black lowercase" style={{ color: '#f0f6ff' }}>topics</h2>
          <div className="flex-1 h-px" style={{ background: 'rgba(26,108,245,0.2)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {unit.topics.map((topic, i) => (
            <Link
              key={i}
              href={`${basePath}/${i + 1}`}
              className="group relative flex items-start gap-4 p-5 transition-all duration-200"
              style={{
                background: hovered === i ? '#0f2540' : '#0a1929',
                border: `1px solid ${hovered === i ? course.accent : 'rgba(26,48,80,0.8)'}`,
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s, background 0.2s, border-color 0.2s`,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <div
                className="shrink-0 w-8 h-8 flex items-center justify-center font-mono text-sm font-bold"
                style={{
                  background: `${course.accent}18`,
                  color: course.accent,
                  border: `1px solid ${course.accent}33`,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="flex-1 min-w-0">
                <h3
                  className="text-base font-bold lowercase leading-tight mb-1"
                  style={{ color: '#f0f6ff' }}
                >
                  {topic.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#6a90b0' }}
                >
                  {topic.description}
                </p>
              </div>

              {/* Arrow */}
              <svg
                className="shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ color: hovered === i ? course.accent : '#4a7090' }}
              >
                <path d="M3 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-6 border-t" style={{ borderColor: 'rgba(26,108,245,0.15)' }}>
          <Link
            href={courseHref}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: course.accent }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            back to {course.short}
          </Link>
        </div>
      </div>
    </div>
  )
}
