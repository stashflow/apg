'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SiteNav } from './site-nav'

export interface Unit {
  number: number
  title: string
  topics: string[]
  examWeight: string
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
  const [activeUnit, setActiveUnit] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#050d1a' }}>
      <SiteNav />

      {/* Hero banner */}
      <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
        <Image
          src={course.banner}
          alt={course.label}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(5,13,26,0.3) 0%, rgba(5,13,26,0.75) 60%, #050d1a 100%)`,
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 px-6 md:px-12 pb-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-4 transition-opacity hover:opacity-80"
            style={{ color: course.accent }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            back to home
          </Link>
          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-1"
            style={{ color: course.accentLight }}
          >
            {course.short}
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black lowercase tracking-tight leading-none text-balance"
            style={{ color: '#f0f6ff' }}
          >
            {course.label}
          </h1>
          <p
            className="mt-2 text-base max-w-xl leading-relaxed"
            style={{ color: '#b8d0ee' }}
          >
            {course.description}
          </p>
        </div>
      </div>

      {/* Accent strip */}
      <div
        className="w-full h-1"
        style={{ background: `linear-gradient(90deg, ${course.accent}, ${course.accentLight}, ${course.accent})` }}
      />

      {/* Units grid */}
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2
            className="text-2xl font-black lowercase"
            style={{ color: '#f0f6ff' }}
          >
            units
          </h2>
          <div
            className="flex-1 h-px"
            style={{ background: 'rgba(26,108,245,0.25)' }}
          />
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: '#4a7090' }}
          >
            {course.units.length} units
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {course.units.map((unit, i) => (
            <div
              key={unit.number}
              className="relative overflow-hidden cursor-pointer group"
              style={{
                background: '#0a1929',
                border: `1px solid ${activeUnit === unit.number ? course.accent : 'rgba(26,48,80,0.8)'}`,
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s, border-color 0.2s`,
              }}
              onMouseEnter={() => setActiveUnit(unit.number)}
              onMouseLeave={() => setActiveUnit(null)}
            >
              {/* Unit number accent */}
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: course.accent }}
              />

              <div className="pl-5 pr-4 py-5">
                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p
                      className="font-mono text-xs tracking-widest uppercase mb-1"
                      style={{ color: course.accent }}
                    >
                      unit {unit.number.toString().padStart(2, '0')}
                    </p>
                    <h3
                      className="text-lg font-black lowercase leading-tight"
                      style={{ color: '#f0f6ff' }}
                    >
                      {unit.title}
                    </h3>
                  </div>
                  <div
                    className="shrink-0 ml-2 px-2 py-1 font-mono text-xs font-bold"
                    style={{
                      background: `${course.accent}22`,
                      color: course.accent,
                      border: `1px solid ${course.accent}55`,
                    }}
                  >
                    {unit.examWeight}
                  </div>
                </div>

                {/* Topics list */}
                <div className="space-y-1 mb-4">
                  {unit.topics.slice(0, 4).map((topic, ti) => (
                    <Link
                      key={ti}
                      href={`${basePath}/unit-${unit.number}/${ti + 1}`}
                      className="flex items-center gap-2 text-sm group/topic transition-all duration-200 hover:opacity-100"
                      style={{ color: '#b8d0ee', opacity: 0.8 }}
                    >
                      <span
                        className="shrink-0 w-4 h-4 flex items-center justify-center font-mono text-xs"
                        style={{ color: course.accentLight }}
                      >
                        {ti + 1}
                      </span>
                      <span className="truncate hover:text-white transition-colors">{topic}</span>
                    </Link>
                  ))}
                  {unit.topics.length > 4 && (
                    <p
                      className="font-mono text-xs"
                      style={{ color: '#4a7090', paddingLeft: '24px' }}
                    >
                      +{unit.topics.length - 4} more topics
                    </p>
                  )}
                </div>

                {/* View unit button */}
                <Link
                  href={`${basePath}/unit-${unit.number}`}
                  className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 group-hover:gap-3"
                  style={{ color: course.accent }}
                >
                  view all topics
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Exam info strip */}
        {course.examDate && (
          <div
            className="mt-8 p-4 flex items-center gap-4"
            style={{
              background: '#0a1929',
              border: `1px solid rgba(26,108,245,0.3)`,
            }}
          >
            <div
              className="w-2 h-2 shrink-0"
              style={{ background: course.accent, animation: 'pulse-ring 2s ease-out infinite' }}
            />
            <p className="font-mono text-sm" style={{ color: '#b8d0ee' }}>
              <span style={{ color: course.accent }}>exam date: </span>
              {course.examDate}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
