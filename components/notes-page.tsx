'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SiteNav } from './site-nav'

export interface NotesSection {
  type: 'heading' | 'subheading' | 'body' | 'bullets' | 'callout' | 'examtip' | 'frqtip' | 'table'
  content: string
  bullets?: string[]
  tableHeaders?: string[]
  tableRows?: string[][]
}

interface NotesPageProps {
  course: {
    label: string
    short: string
    accent: string
    accentLight: string
  }
  unit: {
    number: number
    title: string
  }
  topic: {
    number: number
    title: string
    keyTerms?: string[]
  }
  sections: NotesSection[]
  prev?: { href: string; title: string }
  next?: { href: string; title: string }
  courseHref: string
  unitHref: string
}

export function NotesPage({
  course, unit, topic, sections, prev, next, courseHref, unitHref
}: NotesPageProps) {
  const [loaded, setLoaded] = useState(false)
  const [readPct, setReadPct] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setReadPct(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const renderSection = (s: NotesSection, i: number) => {
    switch (s.type) {
      case 'heading':
        return (
          <h2
            key={i}
            className="text-2xl md:text-3xl font-black lowercase tracking-tight mt-10 mb-4"
            style={{ color: '#f0f6ff' }}
          >
            <span style={{ color: course.accent }}># </span>
            {s.content}
          </h2>
        )
      case 'subheading':
        return (
          <h3
            key={i}
            className="text-lg font-black lowercase tracking-tight mt-6 mb-3"
            style={{ color: course.accentLight }}
          >
            {s.content}
          </h3>
        )
      case 'body':
        return (
          <p key={i} className="text-base leading-relaxed mb-4" style={{ color: '#b8d0ee', lineHeight: '1.75' }}>
            {s.content}
          </p>
        )
      case 'bullets':
        return (
          <ul key={i} className="mb-5 space-y-2">
            {(s.bullets || []).map((b, bi) => (
              <li key={bi} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-1 w-1.5 h-1.5"
                  style={{ background: course.accent, marginTop: '8px' }}
                />
                <span
                  className="text-base leading-relaxed"
                  style={{ color: '#b8d0ee' }}
                  dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.*?)\*\*/g, `<strong style="color:${course.accentLight}">$1</strong>`) }}
                />
              </li>
            ))}
          </ul>
        )
      case 'callout':
        return (
          <div
            key={i}
            className="my-5 p-4 text-sm leading-relaxed"
            style={{
              borderLeft: `3px solid ${course.accent}`,
              background: `${course.accent}12`,
              color: '#b8d0ee',
            }}
          >
            {s.content}
          </div>
        )
      case 'examtip':
        return (
          <div
            key={i}
            className="my-5 p-4 text-sm leading-relaxed"
            style={{
              borderLeft: '3px solid #22c55e',
              background: 'rgba(34,197,94,0.08)',
              color: '#b8d0ee',
            }}
          >
            <span style={{ color: '#22c55e', fontWeight: 800 }}>exam tip: </span>
            {s.content}
          </div>
        )
      case 'frqtip':
        return (
          <div
            key={i}
            className="my-5 p-4 text-sm leading-relaxed"
            style={{
              borderLeft: '3px solid #f59e0b',
              background: 'rgba(245,158,11,0.08)',
              color: '#b8d0ee',
            }}
          >
            <span style={{ color: '#f59e0b', fontWeight: 800 }}>frq / essay tip: </span>
            {s.content}
          </div>
        )
      case 'table':
        return (
          <div key={i} className="my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  {(s.tableHeaders || []).map((h, hi) => (
                    <th
                      key={hi}
                      className="px-3 py-2 text-left font-mono text-xs uppercase tracking-widest"
                      style={{
                        background: `${course.accent}22`,
                        color: course.accent,
                        border: `1px solid ${course.accent}33`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(s.tableRows || []).map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-3 py-2"
                        style={{
                          border: '1px solid rgba(26,48,80,0.8)',
                          color: '#b8d0ee',
                          background: ri % 2 === 0 ? '#0a1929' : '#0d2035',
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen" style={{ background: '#050d1a' }}>
      <SiteNav />

      {/* Reading progress bar */}
      <div
        className="fixed top-14 left-0 h-0.5 z-40 transition-all duration-100"
        style={{
          width: `${readPct}%`,
          background: `linear-gradient(90deg, ${course.accent}, ${course.accentLight})`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-8 flex-wrap">
          <Link href="/" className="transition-opacity hover:opacity-80" style={{ color: '#4a7090' }}>home</Link>
          <span style={{ color: '#1a3050' }}>/</span>
          <Link href={courseHref} className="transition-opacity hover:opacity-80" style={{ color: '#4a7090' }}>{course.short}</Link>
          <span style={{ color: '#1a3050' }}>/</span>
          <Link href={unitHref} className="transition-opacity hover:opacity-80" style={{ color: '#4a7090' }}>unit {unit.number}</Link>
          <span style={{ color: '#1a3050' }}>/</span>
          <span style={{ color: course.accent }}>topic {topic.number}</span>
        </div>

        {/* Topic header */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease',
          }}
        >
          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-1"
            style={{ color: course.accentLight }}
          >
            {course.short} · unit {unit.number} · topic {topic.number}
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-black lowercase tracking-tight leading-tight mb-4 text-balance"
            style={{ color: '#f0f6ff' }}
          >
            {topic.title}
          </h1>

          {/* Key terms */}
          {topic.keyTerms && topic.keyTerms.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {topic.keyTerms.map((term, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 font-mono text-xs"
                  style={{
                    background: `${course.accent}18`,
                    color: course.accent,
                    border: `1px solid ${course.accent}33`,
                  }}
                >
                  {term}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Accent divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: `linear-gradient(90deg, ${course.accent}, transparent)` }}
        />

        {/* Notes content */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease 0.1s',
          }}
        >
          {sections.map((s, i) => renderSection(s, i))}
        </div>

        {/* Bottom nav */}
        <div
          className="mt-16 pt-6 flex items-center justify-between gap-4 border-t"
          style={{ borderColor: 'rgba(26,108,245,0.2)' }}
        >
          {prev ? (
            <Link
              href={prev.href}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ color: course.accent }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {prev.title}
            </Link>
          ) : <div />}

          <Link
            href={unitHref}
            className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
            style={{ color: '#4a7090' }}
          >
            all topics
          </Link>

          {next ? (
            <Link
              href={next.href}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ color: course.accent }}
            >
              {next.title}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
