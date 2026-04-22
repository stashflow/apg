'use client'

import Link from 'next/link'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { SiteNav } from './site-nav'
import { getApushMemoryHook } from '@/lib/apush-memory-hooks'

export interface NotesSection {
  type: 'heading' | 'subheading' | 'body' | 'bullets' | 'callout' | 'examtip' | 'frqtip' | 'table'
  content: string
  bullets?: string[]
  tableHeaders?: string[]
  tableRows?: string[][]
}

// Parse a raw markdown-style string into NotesSection[]
function parseContent(raw: string): NotesSection[] {
  const lines = raw.split('\n')
  const result: NotesSection[] = []
  let bulletBuffer: string[] = []

  const flushBullets = () => {
    if (bulletBuffer.length > 0) {
      result.push({ type: 'bullets', content: '', bullets: [...bulletBuffer] })
      bulletBuffer = []
    }
  }

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) { flushBullets(); continue }
    if (trimmed.startsWith('## ')) { flushBullets(); result.push({ type: 'heading', content: trimmed.slice(3) }); continue }
    if (trimmed.startsWith('### ')) { flushBullets(); result.push({ type: 'subheading', content: trimmed.slice(4) }); continue }
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^\d+\.\s/.test(trimmed)) {
      bulletBuffer.push(trimmed.replace(/^[-*]\s/, '').replace(/^\d+\.\s/, ''))
      continue
    }
    flushBullets()
    result.push({ type: 'body', content: trimmed })
  }
  flushBullets()
  return result
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
    description?: string
  }
  sections?: NotesSection[]
  content?: string
  prev?: { href: string; title: string }
  next?: { href: string; title: string }
  courseHref?: string
  unitHref?: string
  videoId?: string
  videoTitle?: string
  quizletUrl?: string
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function normalizeForCompare(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function buildTermRegex(keyTerms: string[]): RegExp | null {
  if (!keyTerms || keyTerms.length === 0) return null
  const parts = [...keyTerms]
    .map((term) => term.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)
    .map((term) => escapeRegex(term))
  if (parts.length === 0) return null
  return new RegExp(`(?<![A-Za-z0-9])(${parts.join('|')})(?![A-Za-z0-9])`, 'gi')
}

function highlightTerms(text: string, termRegex: RegExp | null, accentLight: string) {
  if (!termRegex || !text) return text
  const matches = Array.from(text.matchAll(termRegex))
  if (matches.length === 0) return text

  const nodes: Array<string | JSX.Element> = []
  let cursor = 0

  matches.forEach((match, idx) => {
    const full = match[0]
    const start = match.index ?? -1
    if (start < 0) return
    const end = start + full.length
    if (start > cursor) nodes.push(text.slice(cursor, start))
    nodes.push(
      <span
        key={`term-${idx}-${start}`}
        style={{
          textDecoration: 'underline',
          textDecorationColor: accentLight,
          textUnderlineOffset: '3px',
          textDecorationThickness: '2px',
          color: '#e5eefb',
          fontWeight: 700,
        }}
      >
        {full}
      </span>,
    )
    cursor = end
  })

  if (cursor < text.length) nodes.push(text.slice(cursor))
  return nodes
}

function renderMarkdownWithHighlights(text: string, termRegex: RegExp | null, accentLight: string) {
  const strongSplit = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
  return strongSplit.map((chunk, idx) => {
    const isStrong = chunk.startsWith('**') && chunk.endsWith('**')
    const clean = isStrong ? chunk.slice(2, -2) : chunk
    const highlighted = highlightTerms(clean, termRegex, accentLight)
    if (!isStrong) return <Fragment key={`chunk-${idx}`}>{highlighted}</Fragment>
    return (
      <strong key={`chunk-${idx}`} style={{ color: accentLight }}>
        {highlighted}
      </strong>
    )
  })
}

function sectionText(section: NotesSection): string {
  const parts: string[] = []
  if (section.content) parts.push(section.content)
  if (section.bullets) parts.push(...section.bullets)
  if (section.tableHeaders) parts.push(...section.tableHeaders)
  if (section.tableRows) parts.push(...section.tableRows.flat())
  return parts.join(' ')
}

function getSectionMentionedTerms(section: NotesSection, keyTerms: string[]): string[] {
  const text = sectionText(section)
  const normalized = normalizeForCompare(text)
  if (!normalized) return []
  return keyTerms.filter((term) => normalized.includes(normalizeForCompare(term)))
}

function getHtrMemoryHook(term: string, context: string, topicTitle: string): { anchor: string; memory: string; courseLink: string } {
  const firstSentence = context.split(/[.!?]/).map((s) => s.trim()).find(Boolean) || `This section is teaching ${term} in ${topicTitle}.`
  const lower = term.toLowerCase()
  const anchor = `${term} = ${firstSentence}.`

  if (lower.includes('act')) {
    return {
      anchor,
      memory: `Treat "${term}" like a policy switch Congress flipped. Ask: what behavior did this law force, protect, or restrict?`,
      courseLink: `Connect it to cause-and-effect chains: law passes -> groups react -> later unit consequences in ${topicTitle}.`,
    }
  }
  if (lower.includes('compromise')) {
    return {
      anchor,
      memory: `Think "political trade": each side gives something up to delay a bigger conflict.`,
      courseLink: `In APUSH, compromises often postpone sectional tension, then it reappears harder in later periods.`,
    }
  }
  if (lower.includes('doctrine') || lower.includes('corollary')) {
    return {
      anchor,
      memory: `Treat "${term}" like a standing rule for U.S. foreign behavior. Remember it as "the house rule for the hemisphere/world."`,
      courseLink: `Link doctrine -> intervention pattern -> Cold War or modern policy parallels later in the course.`,
    }
  }
  if (lower.includes('war') || lower.includes('battle')) {
    return {
      anchor,
      memory: `Use a 3-step frame: trigger -> turning point -> long-term consequence.`,
      courseLink: `Most APUSH war prompts reward connecting one conflict to broader political/economic change across units.`,
    }
  }
  if (lower.includes('amendment')) {
    return {
      anchor,
      memory: `Think of "${term}" as a permanent rule patch to the Constitution.`,
      courseLink: `Track who gained power/rights immediately, and where enforcement lagged in later periods.`,
    }
  }
  if (lower.includes('party')) {
    return {
      anchor,
      memory: `Map it like teams in a season: platform, voter base, and what crisis they formed around.`,
      courseLink: `Connect party shifts to realignment moments and policy outcomes in later units.`,
    }
  }

  return {
    anchor,
    memory: `Make the term concrete: if this were happening today, what headline, social group, or policy debate would it map to?`,
    courseLink: `Lock it by pairing it with one earlier APUSH example and one later APUSH consequence.`,
  }
}

function getHtrMemoryHookForCourse(
  courseShort: string,
  term: string,
  context: string,
  topicTitle: string,
  unitNumber: number,
) {
  const isApushCourse = courseShort.toLowerCase().includes('apush')
  if (isApushCourse) {
    const apushHook = getApushMemoryHook(term, {
      unitNumber,
      topicTitle,
      sectionContext: context,
    })
    if (apushHook) {
      return {
        anchor: apushHook.anchor || `${term} = ${topicTitle}`,
        memory: apushHook.memory,
        courseLink: apushHook.courseLink,
      }
    }
  }
  return getHtrMemoryHook(term, context, topicTitle)
}

export function NotesPage({
  course, unit, topic, sections: sectionsProp, content, prev, next, courseHref: courseHrefProp, unitHref: unitHrefProp, videoId, videoTitle, quizletUrl
}: NotesPageProps) {
  const sections: NotesSection[] = sectionsProp ?? (content ? parseContent(content) : [])
  const keyTerms = topic.keyTerms ?? []
  const isApush = course.short.toLowerCase().includes('apush')
  const termRegex = useMemo(() => buildTermRegex(keyTerms), [keyTerms])
  const courseSlug = course.short.replace(/\s+/g, '-').replace('ap-', '')
  const courseHref = courseHrefProp ?? `/${courseSlug}`
  const unitHref = unitHrefProp ?? `/${courseSlug}/unit-${unit.number}`
  const topicSearchQuery = `${course.short.toUpperCase()} ${topic.title}`
  const quizletHref =
    quizletUrl ?? `https://quizlet.com/search?query=${encodeURIComponent(topicSearchQuery)}&type=sets`
  const youtubeHref = `https://www.youtube.com/results?search_query=${encodeURIComponent(topicSearchQuery)}`
  const [loaded, setLoaded] = useState(false)
  const [readPct, setReadPct] = useState(0)
  const [htrOpen, setHtrOpen] = useState(false)
  const [htrTerms, setHtrTerms] = useState<string[]>([])
  const [htrContext, setHtrContext] = useState('')

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

  const openHtr = (terms: string[], context: string) => {
    setHtrTerms(terms)
    setHtrContext(context)
    setHtrOpen(true)
  }

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
            {highlightTerms(s.content, termRegex, course.accentLight)}
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
                >
                  {renderMarkdownWithHighlights(b, termRegex, course.accentLight)}
                </span>
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
            {highlightTerms(s.content, termRegex, course.accentLight)}
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
            {highlightTerms(s.content, termRegex, course.accentLight)}
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
            {highlightTerms(s.content, termRegex, course.accentLight)}
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
                        {highlightTerms(cell, termRegex, course.accentLight)}
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
        className="fixed top-14 left-0 h-[3px] z-40"
        style={{
          width: `${readPct}%`,
          background: `linear-gradient(90deg, ${course.accent}, ${course.accentLight})`,
          transition: 'width 0.08s linear',
          boxShadow: `0 0 8px ${course.accent}88`,
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

          {/* Key terms + Buttons */}
          <div className="flex flex-col gap-3">
            {topic.keyTerms && topic.keyTerms.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {topic.keyTerms.map((term, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 font-mono text-xs animate-float-soft"
                    style={{
                      background: `${course.accent}18`,
                      color: course.accent,
                      border: `1px solid ${course.accent}33`,
                      animationDelay: `${(i % 4) * 0.12}s`,
                    }}
                  >
                    {term}
                  </span>
                ))}
              </div>
            )}
            
            {/* Study buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => window.open(quizletHref, '_blank', 'noopener,noreferrer')}
                className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                style={{
                  background: '#4255ff24',
                  color: '#4255ff',
                  border: '1px solid #4255ff55',
                  boxShadow: '0 0 0 rgba(66,85,255,0)',
                }}
                title={quizletUrl ? 'Open Quizlet set' : 'Search Quizlet for this topic'}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#4255ff36'
                  el.style.borderColor = '#4255ff88'
                  el.style.transform = 'translateY(-1px)'
                  el.style.boxShadow = '0 10px 20px rgba(66,85,255,0.2)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#4255ff24'
                  el.style.borderColor = '#4255ff55'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 0 0 rgba(66,85,255,0)'
                }}
              >
                Q
                <span>quizlet</span>
              </button>
              <button
                type="button"
                onClick={() => window.open(youtubeHref, '_blank', 'noopener,noreferrer')}
                className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                style={{
                  background: '#ff000024',
                  color: '#ff4444',
                  border: '1px solid #ff000055',
                  boxShadow: '0 0 0 rgba(255,0,0,0)',
                }}
                title="Search YouTube for this topic"
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#ff000036'
                  el.style.borderColor = '#ff000088'
                  el.style.transform = 'translateY(-1px)'
                  el.style.boxShadow = '0 10px 20px rgba(255,68,68,0.2)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = '#ff000024'
                  el.style.borderColor = '#ff000055'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 0 0 rgba(255,0,0,0)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                <span>youtube</span>
              </button>
            </div>
          </div>
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
          {sections.map((s, i) => {
            const mentions = isApush ? getSectionMentionedTerms(s, keyTerms) : []
            const context = sectionText(s)
            return (
              <div key={`section-wrap-${i}`} className="relative md:pr-24">
                {renderSection(s, i)}
                {isApush && mentions.length > 0 && (
                  <div className="hidden md:flex absolute right-0 top-0 h-full items-center gap-2">
                    <div className="relative h-[calc(100%-6px)] min-h-8 w-4">
                      <div className="absolute top-0 right-0 w-3 border-t-2 border-r-2 rounded-tr-sm" style={{ borderColor: course.accentLight }} />
                      <div className="absolute bottom-0 right-0 w-3 border-b-2 border-r-2 rounded-br-sm" style={{ borderColor: course.accentLight }} />
                      <div className="absolute top-0 bottom-0 right-0 border-r-2" style={{ borderColor: course.accentLight }} />
                    </div>
                    <button
                      type="button"
                      onClick={() => openHtr(mentions, context)}
                      className="px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest transition-all"
                      style={{
                        background: `${course.accentLight}20`,
                        color: course.accentLight,
                        border: `1px solid ${course.accentLight}66`,
                      }}
                      title={`How to remember: ${mentions.join(', ')}`}
                    >
                      HTR
                    </button>
                  </div>
                )}
              </div>
            )
          })}
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

      {htrOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(5, 13, 26, 0.7)' }}
          onClick={() => setHtrOpen(false)}
        >
          <div
            className="w-full max-w-2xl p-5 md:p-6 max-h-[82vh] overflow-y-auto"
            style={{ background: '#081526', border: `1px solid ${course.accent}55` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest mb-1" style={{ color: course.accentLight }}>
                  how to remember
                </p>
                <h3 className="text-xl font-black lowercase" style={{ color: '#f0f6ff' }}>
                  vocab memory hooks
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setHtrOpen(false)}
                className="px-2 py-1 text-xs font-mono uppercase"
                style={{ color: '#9fb3c8', border: '1px solid #27415e' }}
              >
                close
              </button>
            </div>

            <div className="space-y-3">
              {htrTerms.map((term) => {
                const hook = getHtrMemoryHookForCourse(course.short, term, htrContext, topic.title, unit.number)
                return (
                  <div key={term} className="p-3 border" style={{ borderColor: '#1f3652', background: '#0a192b' }}>
                    <p className="text-sm font-black mb-1" style={{ color: course.accentLight }}>{term}</p>
                    <p className="text-sm mb-1" style={{ color: '#d0e0f2' }}><span style={{ color: '#7fb2e6' }}>anchor: </span>{hook.anchor}</p>
                    <p className="text-sm mb-1" style={{ color: '#d0e0f2' }}><span style={{ color: '#7fb2e6' }}>remember it: </span>{hook.memory}</p>
                    <p className="text-sm" style={{ color: '#d0e0f2' }}><span style={{ color: '#7fb2e6' }}>course connection: </span>{hook.courseLink}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
