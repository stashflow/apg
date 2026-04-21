'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SiteNav } from './site-nav'

export interface TopicLink {
  quizletUrl?: string
  videoId?: string
}

export interface Unit {
  number: number
  title: string
  topics: string[]
  examWeight: string
  quizletUrl?: string  // Unit-level quizlet for review
  videoId?: string     // Unit-level video for review
  topicLinks?: TopicLink[] // Per-topic quizlet/video links
}

interface CourseLayoutProps {
  course: {
    id: string
    label: string
    short: string
    description: string
    banner: string
    accent: string
    accentLight: string
    bgClass: string
    examDate?: string
    units: Unit[]
  }
  basePath: string
}

export function CourseLayout({ course, basePath }: CourseLayoutProps) {
  const [loaded, setLoaded] = useState(false)
  const [hoveredUnit, setHoveredUnit] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#050d1a' }}>
      <SiteNav />

      {/* Hero banner — tall, image shows fully */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(280px, 38vh, 420px)' }}>
        <Image
          src={course.banner}
          alt={course.label}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Gradient — lighter at top so image reads, dark at bottom for text */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              rgba(5,13,26,0.1) 0%,
              rgba(5,13,26,0.4) 45%,
              rgba(5,13,26,0.9) 80%,
              #050d1a 100%)`,
          }}
        />
        {/* Accent color glow at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: `linear-gradient(0deg, ${course.accent}18 0%, transparent 100%)` }}
        />

        {/* Hero text */}
        <div
          className="absolute inset-x-0 bottom-0 px-6 md:px-14 pb-8 md:pb-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(18px)',
            transition: 'all 0.6s ease 0.1s',
          }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-4 transition-all hover:gap-3"
            style={{ color: course.accent }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            home
          </Link>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase mb-1" style={{ color: course.accentLight }}>
                {course.short}
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black lowercase tracking-tight leading-none text-balance"
                style={{ color: '#f0f6ff' }}
              >
                {course.label}
              </h1>
              <p className="mt-2 text-sm md:text-base max-w-2xl leading-relaxed" style={{ color: '#b8d0ee' }}>
                {course.description}
              </p>
            </div>
            {/* Stats chip */}
            <div
              className="shrink-0 flex items-center gap-3 px-4 py-3 font-mono text-sm"
              style={{
                background: `${course.accent}18`,
                border: `1px solid ${course.accent}44`,
              }}
            >
              <span style={{ color: course.accent, fontWeight: 800 }}>{course.units.length}</span>
              <span style={{ color: '#b8d0ee' }}>units</span>
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: course.accent }}
              />
              <span style={{ color: '#b8d0ee' }}>
                {course.units.reduce((a, u) => a + u.topics.length, 0)} topics
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Accent strip */}
      <div
        className="w-full h-1"
        style={{
          background: `linear-gradient(90deg, ${course.accent}, ${course.accentLight}, ${course.accent})`,
          backgroundSize: '200% 100%',
          animation: 'shimmer-slide 4s linear infinite',
        }}
      />

      {/* Units grid */}
      <div className="px-6 md:px-14 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-black lowercase tracking-tight" style={{ color: '#f0f6ff' }}>
            all units
          </h2>
          <div className="flex-1 h-px" style={{ background: 'rgba(26,108,245,0.2)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {course.units.map((unit, i) => {
            const isHovered = hoveredUnit === unit.number
            return (
              <div
                key={unit.number}
                className="relative overflow-hidden group"
                style={{
                  background: isHovered ? '#0f2540' : '#0a1929',
                  border: `1px solid ${isHovered ? course.accent : 'rgba(26,48,80,0.7)'}`,
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s, border-color 0.2s, background 0.2s`,
                  cursor: 'default',
                }}
                onMouseEnter={() => setHoveredUnit(unit.number)}
                onMouseLeave={() => setHoveredUnit(null)}
              >
                {/* Left accent bar */}
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{
                    background: isHovered
                      ? `linear-gradient(180deg, ${course.accent}, ${course.accentLight})`
                      : course.accent,
                    opacity: isHovered ? 1 : 0.5,
                    transition: 'opacity 0.2s, background 0.2s',
                  }}
                />

                {/* Top accent glow on hover */}
                {isHovered && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${course.accent}, transparent)` }}
                  />
                )}

                <div className="pl-5 pr-4 pt-5 pb-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: course.accent }}>
                        unit {unit.number.toString().padStart(2, '0')}
                      </p>
                      <h3 className="text-base font-black lowercase leading-tight" style={{ color: '#f0f6ff' }}>
                        {unit.title}
                      </h3>
                    </div>
                    <span
                      className="shrink-0 px-2 py-0.5 font-mono text-xs font-bold"
                      style={{
                        background: `${course.accent}20`,
                        color: course.accent,
                        border: `1px solid ${course.accent}44`,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {unit.examWeight}
                    </span>
                  </div>

                  {/* Topics */}
                  <div className="space-y-0.5 mb-4">
                    {unit.topics.map((topic, ti) => {
                      const topicLink = unit.topicLinks?.[ti]
                      const hasQuizlet = !!topicLink?.quizletUrl
                      const hasVideo = !!topicLink?.videoId
                      const searchQuery = `${course.short.toUpperCase()} - ${topic}`
                      
                      return (
                        <div
                          key={ti}
                          className="flex items-center gap-1 group/row"
                        >
                          <Link
                            href={`${basePath}/unit-${unit.number}/${ti + 1}`}
                            className="flex items-center gap-2 py-1 px-1 text-sm transition-all duration-150 group/t flex-1 min-w-0"
                            style={{ color: '#8aabb0', borderRadius: '2px' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#f0f6ff'
                              e.currentTarget.style.background = `${course.accent}15`
                              e.currentTarget.style.paddingLeft = '6px'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#8aabb0'
                              e.currentTarget.style.background = 'transparent'
                              e.currentTarget.style.paddingLeft = '4px'
                            }}
                          >
                            <span className="shrink-0 font-mono text-xs" style={{ color: course.accentLight, opacity: 0.7, minWidth: '16px' }}>
                              {(ti + 1).toString().padStart(2, '0')}
                            </span>
                            <span className="truncate">{topic}</span>
                          </Link>
                          
                          {/* Quizlet button */}
                          <a
                            href={hasQuizlet ? topicLink.quizletUrl : `https://quizlet.com/search?query=${encodeURIComponent(searchQuery)}&type=sets`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 w-5 h-5 flex items-center justify-center text-xs font-bold opacity-40 hover:opacity-100 transition-opacity"
                            style={{ 
                              color: hasQuizlet ? '#4255ff' : '#6b7280',
                            }}
                            title={hasQuizlet ? 'Open Quizlet' : 'Search Quizlet'}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Q
                          </a>
                          
                          {/* YouTube button */}
                          <a
                            href={hasVideo ? `https://www.youtube.com/watch?v=${topicLink.videoId}` : `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 w-5 h-5 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity"
                            style={{ 
                              color: hasVideo ? '#ff4444' : '#6b7280',
                            }}
                            title={hasVideo ? 'Watch Video' : 'Search YouTube'}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                            </svg>
                          </a>
                        </div>
                      )
                    })}
                  </div>

                  {/* View unit CTA */}
                  <Link
                    href={`${basePath}/unit-${unit.number}`}
                    className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200"
                    style={{
                      color: isHovered ? course.accentLight : course.accent,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.gap = '10px' }}
                    onMouseLeave={(e) => { e.currentTarget.style.gap = '8px' }}
                  >
                    all {unit.topics.length} topics
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Exam info */}
        {course.examDate && (
          <div
            className="mt-8 px-5 py-4 flex items-center gap-3"
            style={{
              background: `${course.accent}0d`,
              border: `1px solid ${course.accent}30`,
            }}
          >
            <div className="w-2 h-2 rounded-full shrink-0" style={{ background: course.accent }} />
            <p className="font-mono text-sm" style={{ color: '#b8d0ee' }}>
              <span style={{ color: course.accent, fontWeight: 700 }}>exam: </span>
              {course.examDate}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
