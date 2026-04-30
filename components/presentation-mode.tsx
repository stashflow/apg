'use client'

import { Fragment, useEffect, useMemo, useState } from 'react'
import { ReadAloud } from './read-aloud'
import type { NotesSection } from './notes-page'

type CourseInfo = {
  label: string
  short: string
  accent: string
  accentLight: string
}

type UnitInfo = {
  number: number
  title: string
  examWeight?: string
  description?: string
}

type TopicInfo = {
  number: number
  title: string
  description?: string
  keyTerms?: string[]
}

type Slide = {
  kind:
    | 'title'
    | 'summary'
    | 'terms'
    | 'bullets'
    | 'two-column'
    | 'timeline'
    | 'cause-effect'
    | 'exam-tip'
    | 'practice'
  title: string
  subtitle?: string
  body?: string[]
  left?: string[]
  right?: string[]
  prompt?: string
  context: string
}

type PresentationModeProps = {
  open: boolean
  onClose: () => void
  course: CourseInfo
  unit: UnitInfo
  topic?: TopicInfo
  topics?: TopicInfo[]
  sections?: NotesSection[]
}

type ReadAloudControls = {
  seekToWord: (word: string) => void
  seekToIndex: (wordIndex: number) => void
  seekToWordOccurrence: (word: string, occurrence: number) => void
}

function sectionToText(section: NotesSection): string {
  return [
    section.content,
    ...(section.bullets ?? []),
    ...(section.tableHeaders ?? []),
    ...((section.tableRows ?? []).flat()),
    section.code ?? '',
  ]
    .filter(Boolean)
    .join(' ')
}

function splitSentences(text: string): string[] {
  return (text.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g) ?? [text])
    .map((s) => s.trim())
    .filter(Boolean)
}

function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function getSelectionWordInfo(event: React.MouseEvent<HTMLElement>): { word: string; occurrence: number } | null {
  const selection = window.getSelection()
  if (!selection || selection.rangeCount === 0) return null
  const selectedText = selection.toString().trim()
  const word = selectedText.split(/\s+/)[0]?.trim()
  if (!word) return null
  const normalizedTarget = normalizeWord(word)
  if (!normalizedTarget) return null

  const container = event.currentTarget
  const focusNode = selection.focusNode
  const focusOffset = selection.focusOffset
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT)
  let seen = 0

  while (walker.nextNode()) {
    const node = walker.currentNode as Text
    const text = node.nodeValue ?? ''
    if (!text) continue
    const tokens = text.split(/(\s+)/)
    let cursor = 0
    for (const token of tokens) {
      const tokenEnd = cursor + token.length
      cursor = tokenEnd
      if (!token.trim()) continue
      if (normalizeWord(token) !== normalizedTarget) continue
      seen += 1
      if (node === focusNode && focusOffset <= tokenEnd) {
        return { word, occurrence: seen }
      }
    }
  }
  return { word, occurrence: Math.max(1, seen) }
}

function renderMarkdownInline(text: string, activeWord: string, activeOccurrence: number, tracker: { seen: number }): Array<string | JSX.Element> {
  const nodes: Array<string | JSX.Element> = []
  const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|_([^_]+)_|\*([^*]+)\*)/g
  let last = 0
  let match: RegExpExecArray | null
  let idx = 0

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(<Fragment key={`md-t-${idx++}`}>{highlightInline(text.slice(last, match.index), activeWord, activeOccurrence, tracker)}</Fragment>)
    }
    const [token, , linkLabel, linkHref, boldContent, codeContent, italicUnderscore, italicStar] = match
    if (linkLabel && linkHref) {
      nodes.push(
        <a key={`md-l-${idx++}`} href={linkHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
          {highlightInline(linkLabel, activeWord, activeOccurrence, tracker)}
        </a>,
      )
    } else if (boldContent) {
      nodes.push(<strong key={`md-b-${idx++}`}>{highlightInline(boldContent, activeWord, activeOccurrence, tracker)}</strong>)
    } else if (codeContent) {
      nodes.push(
        <code key={`md-c-${idx++}`} className="px-1 py-0.5 rounded-sm" style={{ background: 'rgba(148,163,184,0.2)' }}>
          {codeContent}
        </code>,
      )
    } else if (italicUnderscore || italicStar) {
      const content = italicUnderscore || italicStar || ''
      nodes.push(<em key={`md-i-${idx++}`}>{highlightInline(content, activeWord, activeOccurrence, tracker)}</em>)
    } else {
      nodes.push(token)
    }
    last = match.index + token.length
  }
  if (last < text.length) {
    nodes.push(<Fragment key={`md-tail-${idx++}`}>{highlightInline(text.slice(last), activeWord, activeOccurrence, tracker)}</Fragment>)
  }
  return nodes
}

function renderMarkdownBlock(text: string, activeWord: string, activeOccurrence: number, tracker: { seen: number }) {
  const lines = text.split('\n')
  const blocks: JSX.Element[] = []
  let bullets: string[] = []
  let paragraph: string[] = []

  const flushBullets = () => {
    if (bullets.length === 0) return
    blocks.push(
      <ul key={`md-ul-${blocks.length}`} className="list-disc pl-5 space-y-1">
        {bullets.map((line, i) => (
          <li key={`md-li-${i}`}>{renderMarkdownInline(line, activeWord, activeOccurrence, tracker)}</li>
        ))}
      </ul>,
    )
    bullets = []
  }
  const flushParagraph = () => {
    if (paragraph.length === 0) return
    blocks.push(
      <p key={`md-p-${blocks.length}`} className="leading-relaxed">
        {renderMarkdownInline(paragraph.join(' '), activeWord, activeOccurrence, tracker)}
      </p>,
    )
    paragraph = []
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line) {
      flushParagraph()
      flushBullets()
      continue
    }
    if (line.startsWith('- ')) {
      flushParagraph()
      bullets.push(line.slice(2))
      continue
    }
    flushBullets()
    paragraph.push(line)
  }
  flushParagraph()
  flushBullets()
  return <div className="space-y-2">{blocks}</div>
}

function highlightInline(text: string, activeWord: string, activeOccurrence: number, tracker: { seen: number }): Array<string | JSX.Element> {
  if (!text || !activeWord) return [text]
  const target = normalizeWord(activeWord)
  if (!target) return [text]
  return text.split(/(\s+)/).map((token, i) => {
    const raw = normalizeWord(token)
    if (raw && raw === target) tracker.seen += 1
    if (raw && raw === target && tracker.seen === activeOccurrence && activeOccurrence > 0) {
      return (
        <span
          key={`${token}-${i}`}
          className="rounded-sm px-0.5"
          style={{ background: 'rgba(236, 253, 245, 0.2)', boxShadow: 'inset 0 0 0 1px rgba(134,239,172,0.35)' }}
        >
          {token}
        </span>
      )
    }
    return token
  })
}

function makeTopicSlides(course: CourseInfo, unit: UnitInfo, topic: TopicInfo, sections: NotesSection[]): Slide[] {
  const slides: Slide[] = []
  const keyTerms = topic.keyTerms ?? []
  const bodyText = sections.map(sectionToText).join(' ')
  const sentences = splitSentences(bodyText)

  slides.push({
    kind: 'title',
    title: topic.title,
    subtitle: `${course.short.toUpperCase()} · Unit ${unit.number} · Topic ${topic.number}`,
    body: [topic.description || `This topic builds core ${course.short.toUpperCase()} exam understanding.`],
    context: `${topic.title} ${topic.description || ''}`,
  })

  slides.push({
    kind: 'summary',
    title: 'Big Idea Summary',
    subtitle: 'What matters most',
    body: sentences.slice(0, 4),
    context: sentences.slice(0, 6).join(' '),
  })

  if (keyTerms.length > 0) {
    slides.push({
      kind: 'terms',
      title: 'Key Terms',
      subtitle: 'High-yield vocabulary',
      body: keyTerms,
      context: keyTerms.join(' '),
    })
  }

  sections.forEach((section, i) => {
    const text = sectionToText(section)
    if (!text) return
    const sectionSentences = splitSentences(text)

    if (section.type === 'bullets' && section.bullets && section.bullets.length > 0) {
      slides.push({
        kind: 'bullets',
        title: section.content || `Core Points ${i + 1}`,
        body: section.bullets.slice(0, 7),
        context: text,
      })
      return
    }

    if (section.type === 'table' && section.tableRows && section.tableRows.length > 0) {
      const left = section.tableRows.slice(0, 5).map((row) => row[0]).filter(Boolean)
      const right = section.tableRows.slice(0, 5).map((row) => row[1] ?? row.slice(1).join(' · ')).filter(Boolean)
      slides.push({
        kind: 'two-column',
        title: section.content || 'Comparison',
        left,
        right,
        context: text,
      })
      return
    }

    if (section.type === 'examtip' || section.type === 'frqtip') {
      slides.push({
        kind: 'exam-tip',
        title: 'Exam Tip',
        body: sectionSentences.slice(0, 5),
        context: text,
      })
      return
    }

    if (sectionSentences.length >= 4) {
      slides.push({
        kind: i % 2 === 0 ? 'cause-effect' : 'timeline',
        title: section.content || `Process ${i + 1}`,
        left: sectionSentences.slice(0, 3),
        right: sectionSentences.slice(3, 6),
        context: text,
      })
    } else {
      slides.push({
        kind: 'bullets',
        title: section.content || `Key Detail ${i + 1}`,
        body: sectionSentences,
        context: text,
      })
    }
  })

  slides.push({
    kind: 'practice',
    title: 'Practice Check',
    subtitle: 'Quick recall before moving on',
    prompt: `Without notes, explain why ${topic.title.toLowerCase()} matters in Unit ${unit.number}. Include one cause and one consequence.`,
    context: `Practice check for ${topic.title} in ${course.short}.`,
  })

  return slides
}

function makeUnitSlides(course: CourseInfo, unit: UnitInfo, topics: TopicInfo[]): Slide[] {
  const slides: Slide[] = []
  slides.push({
    kind: 'title',
    title: unit.title,
    subtitle: `${course.short.toUpperCase()} · Unit ${unit.number}`,
    body: [unit.description || `Unit ${unit.number} exam prep walkthrough.`],
    context: `${unit.title} ${unit.description || ''}`,
  })

  slides.push({
    kind: 'summary',
    title: 'Unit Big Ideas',
    subtitle: unit.examWeight ? `Exam Weight: ${unit.examWeight}` : 'Core tested ideas',
    body: topics.slice(0, 6).map((t) => `${t.number}. ${t.title}: ${t.description ?? 'Know the concept and why it matters.'}`),
    context: topics.map((t) => `${t.title} ${t.description ?? ''}`).join(' '),
  })

  slides.push({
    kind: 'timeline',
    title: 'Topic Flow',
    subtitle: 'Study in order',
    left: topics.slice(0, Math.ceil(topics.length / 2)).map((t) => `Topic ${t.number}: ${t.title}`),
    right: topics.slice(Math.ceil(topics.length / 2)).map((t) => `Topic ${t.number}: ${t.title}`),
    context: topics.map((t) => t.title).join(' '),
  })

  topics.forEach((topic, i) => {
    slides.push({
      kind: i % 2 === 0 ? 'cause-effect' : 'two-column',
      title: `Topic ${topic.number}: ${topic.title}`,
      subtitle: 'What to lock in',
      left: [
        `Core idea: ${topic.description ?? topic.title}`,
        'Know one real example from class notes.',
      ],
      right: [
        'Why this is tested: connects to larger unit themes.',
        'Exam move: compare this to one adjacent topic.',
      ],
      context: `${topic.title} ${topic.description ?? ''}`,
    })
  })

  slides.push({
    kind: 'practice',
    title: 'Unit Wrap Practice',
    subtitle: 'Exam-style self check',
    prompt: `Rank the top 3 most testable topics in Unit ${unit.number} and justify each with one piece of evidence.`,
    context: `Unit ${unit.number} wrap practice for ${course.short}.`,
  })

  return slides
}

function SlideCard({
  slide, course, activeWord, activeOccurrence, tracker,
}: { slide: Slide; course: CourseInfo; activeWord: string; activeOccurrence: number; tracker: { seen: number } }) {
  const titleClass = 'text-3xl md:text-5xl font-black tracking-tight text-balance'
  const baseText = { color: '#d8e9fb' }

  if (slide.kind === 'title') {
    return (
      <div className="h-full w-full rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden" style={{ background: 'linear-gradient(140deg, rgba(6,23,40,0.95), rgba(12,32,58,0.92))', border: `1px solid ${course.accent}44`, boxShadow: '0 30px 60px rgba(2,9,20,0.55)' }}>
        <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: course.accentLight }} />
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: course.accentLight }}>{slide.subtitle}</p>
          <h2 className={titleClass} style={{ color: '#f6fbff' }}>{slide.title}</h2>
        </div>
        <div className="space-y-2">
          {(slide.body ?? []).map((line, i) => (
            <p key={i} className="text-lg md:text-xl leading-relaxed" style={baseText}>{renderMarkdownInline(line, activeWord, activeOccurrence, tracker)}</p>
          ))}
        </div>
      </div>
    )
  }

  if (slide.kind === 'terms') {
    return (
      <div className="h-full w-full rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ background: 'linear-gradient(150deg, rgba(7,19,34,0.95), rgba(8,30,54,0.9))', border: `1px solid ${course.accent}44`, boxShadow: '0 30px 60px rgba(2,9,20,0.55)' }}>
        <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full blur-3xl opacity-25" style={{ background: course.accent }} />
        <p className="font-mono text-xs uppercase tracking-[0.25em] mb-3" style={{ color: course.accentLight }}>{slide.subtitle}</p>
        <h2 className={`${titleClass} mb-8`} style={{ color: '#f6fbff' }}>{slide.title}</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {(slide.body ?? []).map((term, i) => (
          <div key={i} className="rounded-xl px-4 py-3 text-base md:text-lg font-semibold" style={{ background: `${course.accent}20`, border: `1px solid ${course.accent}55`, color: '#eaf4ff' }}>
              {renderMarkdownInline(term, activeWord, activeOccurrence, tracker)}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (slide.kind === 'two-column' || slide.kind === 'timeline' || slide.kind === 'cause-effect') {
    return (
      <div className="h-full w-full rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ background: 'linear-gradient(145deg, rgba(8,22,40,0.95), rgba(9,31,56,0.9))', border: `1px solid ${course.accent}44`, boxShadow: '0 30px 60px rgba(2,9,20,0.55)' }}>
        <div className="absolute -top-24 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: course.accentLight }} />
        <p className="font-mono text-xs uppercase tracking-[0.25em] mb-3" style={{ color: course.accentLight }}>{slide.subtitle ?? 'structured view'}</p>
        <h2 className={`${titleClass} mb-7`} style={{ color: '#f6fbff' }}>{slide.title}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {(slide.left ?? []).map((line, i) => <p key={i} className="text-base md:text-lg leading-relaxed" style={baseText}>{renderMarkdownInline(line, activeWord, activeOccurrence, tracker)}</p>)}
          </div>
          <div className="space-y-3">
            {(slide.right ?? []).map((line, i) => <p key={i} className="text-base md:text-lg leading-relaxed" style={baseText}>{renderMarkdownInline(line, activeWord, activeOccurrence, tracker)}</p>)}
          </div>
        </div>
      </div>
    )
  }

  if (slide.kind === 'exam-tip') {
    return (
      <div className="h-full w-full rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ background: 'linear-gradient(150deg, rgba(19,27,14,0.95), rgba(10,34,23,0.9))', border: '1px solid rgba(34,197,94,0.45)', boxShadow: '0 30px 60px rgba(2,9,20,0.55)' }}>
        <div className="absolute -top-20 -right-10 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: '#22c55e' }} />
        <p className="font-mono text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#86efac' }}>exam priority</p>
        <h2 className={`${titleClass} mb-7`} style={{ color: '#ecfdf5' }}>{slide.title}</h2>
        <div className="space-y-3">
          {(slide.body ?? []).map((line, i) => <div key={i} className="text-base md:text-lg leading-relaxed" style={{ color: '#d1fae5' }}>{renderMarkdownBlock(line, activeWord, activeOccurrence, tracker)}</div>)}
        </div>
      </div>
    )
  }

  if (slide.kind === 'practice') {
    return (
      <div className="h-full w-full rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ background: 'linear-gradient(150deg, rgba(34,20,8,0.94), rgba(56,24,12,0.92))', border: '1px solid rgba(245,158,11,0.5)', boxShadow: '0 30px 60px rgba(2,9,20,0.55)' }}>
        <div className="absolute -bottom-16 -right-8 w-56 h-56 rounded-full blur-3xl opacity-20" style={{ background: '#fb923c' }} />
        <p className="font-mono text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#fdba74' }}>{slide.subtitle}</p>
        <h2 className={`${titleClass} mb-7`} style={{ color: '#fff7ed' }}>{slide.title}</h2>
        <div className="text-lg md:text-2xl leading-relaxed" style={{ color: '#ffedd5' }}>{renderMarkdownBlock(slide.prompt || '', activeWord, activeOccurrence, tracker)}</div>
      </div>
    )
  }

  return (
    <div className="h-full w-full rounded-3xl p-8 md:p-12" style={{ background: 'linear-gradient(150deg, rgba(8,22,40,0.95), rgba(9,31,56,0.9))', border: `1px solid ${course.accent}44` }}>
      <p className="font-mono text-xs uppercase tracking-[0.25em] mb-3" style={{ color: course.accentLight }}>{slide.subtitle}</p>
      <h2 className={`${titleClass} mb-7`} style={{ color: '#f6fbff' }}>{slide.title}</h2>
      <div className="space-y-3">
        {(slide.body ?? []).map((line, i) => <div key={i} className="text-base md:text-lg leading-relaxed" style={baseText}>{renderMarkdownBlock(line, activeWord, activeOccurrence, tracker)}</div>)}
      </div>
    </div>
  )
}

export function PresentationMode({ open, onClose, course, unit, topic, topics, sections }: PresentationModeProps) {
  const [index, setIndex] = useState(0)
  const [activeWord, setActiveWord] = useState('')
  const [activeOccurrence, setActiveOccurrence] = useState(0)
  const [readerControls, setReaderControls] = useState<ReadAloudControls | null>(null)
  const [slideFinished, setSlideFinished] = useState(false)
  const [autoAdvanceArmed, setAutoAdvanceArmed] = useState(false)

  const slides = useMemo(() => {
    if (topic && sections) return makeTopicSlides(course, unit, topic, sections)
    if (topics) return makeUnitSlides(course, unit, topics)
    return []
  }, [course, unit, topic, sections, topics])

  useEffect(() => {
    if (!open) return
    setIndex(0)
  }, [open])

  useEffect(() => {
    setSlideFinished(false)
    setAutoAdvanceArmed(false)
    const arm = window.setTimeout(() => setAutoAdvanceArmed(true), 250)
    return () => window.clearTimeout(arm)
  }, [index])

  useEffect(() => {
    if (!open || !slideFinished) return
    if (index >= slides.length - 1) return
    const timer = window.setTimeout(() => {
      setIndex((v) => Math.min(slides.length - 1, v + 1))
    }, 5000)
    return () => window.clearTimeout(timer)
  }, [index, open, slideFinished, slides.length])

  useEffect(() => {
    if (!open || !autoAdvanceArmed) return
    if (index >= slides.length - 1) return
    const fallback = window.setTimeout(() => {
      setSlideFinished(true)
    }, 22000)
    return () => window.clearTimeout(fallback)
  }, [autoAdvanceArmed, index, open, slides.length])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') setIndex((v) => Math.min(slides.length - 1, v + 1))
      if (event.key === 'ArrowLeft') setIndex((v) => Math.max(0, v - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, open, slides.length])

  if (!open || slides.length === 0) return null

  const activeSlide = slides[index]
  const readAloudText = `${activeSlide.title}. ${activeSlide.subtitle ?? ''}. ${(activeSlide.body ?? []).join(' ')} ${(activeSlide.left ?? []).join(' ')} ${(activeSlide.right ?? []).join(' ')} ${activeSlide.prompt ?? ''}`

  return (
    <div className="fixed inset-0 z-[90]" style={{ background: 'radial-gradient(circle at 14% 0%, #174879, #040a12 58%)' }}>
      <div className="h-full w-full px-4 md:px-10 py-6 md:py-8 flex flex-col relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-12 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: course.accent }} />
        <div className="pointer-events-none absolute -bottom-28 -right-10 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: course.accentLight }} />
        <div className="flex items-center justify-between gap-3 mb-5">
          <div>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.24em]" style={{ color: course.accentLight }}>{course.short.toUpperCase()} · Unit {unit.number} · Presentation</p>
            <p className="text-sm" style={{ color: '#8eb6de' }}>{topic ? `Topic ${topic.number}: ${topic.title}` : unit.title}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <ReadAloud
              title="have the teacher read it"
              text={readAloudText}
              accent={course.accent}
              accentLight={course.accentLight}
              inline
              onWordChange={(word, _wordIndex, occurrence) => {
                setActiveWord(word)
                setActiveOccurrence(occurrence)
              }}
              onRegisterControls={(controls) => setReaderControls(controls)}
              autoPlayOnTextChange
              onPlaybackEnd={() => setSlideFinished(true)}
              resetToken={index}
            />
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap shrink-0"
              style={{ color: '#dbeafe', border: '1px solid rgba(147,197,253,0.45)', background: 'rgba(15,30,48,0.75)' }}
            >
              exit presentation
            </button>
          </div>
        </div>

        <div
          className="flex-1 min-h-0 relative z-10"
          onDoubleClick={(event) => {
            if (!readerControls) return
            const info = getSelectionWordInfo(event)
            if (!info) return
            readerControls.seekToWordOccurrence(info.word, info.occurrence)
          }}
        >
          <SlideCard
            slide={activeSlide}
            course={course}
            activeWord={activeWord}
            activeOccurrence={activeOccurrence}
            tracker={{ seen: 0 }}
          />
        </div>

        <div className="mt-5 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((v) => Math.max(0, v - 1))}
            disabled={index === 0}
            className="px-4 py-2 text-sm font-bold disabled:opacity-40"
            style={{ background: 'rgba(15,30,48,0.8)', color: '#e2ecf8', border: '1px solid rgba(147,197,253,0.4)' }}
          >
            Previous
          </button>
          <div className="flex-1">
            <div className="h-2 rounded-full" style={{ background: 'rgba(147,197,253,0.2)' }}>
              <div className="h-full rounded-full transition-all" style={{ width: `${((index + 1) / slides.length) * 100}%`, background: `linear-gradient(90deg, ${course.accent}, ${course.accentLight})` }} />
            </div>
            <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: '#95b7d8' }}>
              Slide {index + 1} of {slides.length}{slideFinished && index < slides.length - 1 ? ' · advancing in 5s' : ''}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIndex((v) => Math.min(slides.length - 1, v + 1))}
            disabled={index === slides.length - 1}
            className="px-4 py-2 text-sm font-bold disabled:opacity-40"
            style={{ background: `linear-gradient(120deg, ${course.accent}, ${course.accentLight})`, color: '#031220' }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
