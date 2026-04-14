'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SiteNav } from './site-nav'
import { VideoDropdown } from './video-dropdown'

interface Topic {
  number: number
  title: string
  description: string
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
}

export function UnitPage({ course, unit, topics, basePath, courseHref, videoId }: UnitPageProps) {
  const [loaded, setLoaded] = useState(false)

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
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: '#b8d0ee' }}>
              {unit.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 md:px-12 py-10 max-w-5xl">
        {/* Video dropdown */}
        {videoId && (
          <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease 0.1s' }} className="mb-10">
            <VideoDropdown
              courseId={course.short}
              videoId={videoId}
              title="Unit Overview"
              accent={course.accent}
              accentLight={course.accentLight}
            />
          </div>
        )}

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
      </div>
    </div>
  )
}

export function UnitPage({ course, unit, topics, basePath, courseHref }: UnitPageProps) {
  const [loaded, setLoaded] = useState(false)

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
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: '#b8d0ee' }}>
              {unit.description}
            </p>
          </div>
        </div>
      </div>

      {/* Topics list */}
      <div className="px-6 md:px-12 py-10 max-w-5xl">
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
    </div>
  )
}
