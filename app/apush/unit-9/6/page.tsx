import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 9, title: 'period 9: 1980–present' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'document-based question (dbq)' },
  { type: 'body', content: 'The DBQ gives you 7 documents and asks you to write an argument essay using them. You have 60 minutes (15 min reading + 45 min writing). Maximum 7 points.' },
  { type: 'table', content: '', tableHeaders: ['point', 'requirement'],
    tableRows: [
      ['Thesis (1 pt)', 'Makes a historically defensible claim with a line of reasoning; goes beyond restating the prompt'],
      ['Contextualization (1 pt)', 'Describes a broader historical context relevant to the prompt in 3+ sentences; connects to argument'],
      ['Evidence: Document Content (2 pts)', '1 pt: uses content from 3 docs. 2 pts: uses content from 6 docs AND explains how each supports argument'],
      ['Evidence: Outside Evidence (1 pt)', 'Uses specific evidence NOT in the documents that supports the argument'],
      ['Analysis/Sourcing (1 pt)', 'For at least 3 docs: explains how HAPP affects argument (Historical Situation, Audience, Purpose, Point of View)'],
      ['Complexity (1 pt)', 'Demonstrates complex understanding: corroboration, qualification, synthesis across periods/themes'],
    ]
  },
  { type: 'heading', content: 'long essay question (leq)' },
  { type: 'body', content: 'The LEQ asks you to write a full argumentative essay from memory — no documents. Choose 1 of 3 options (different time periods). 40 minutes. Maximum 6 points.' },
  { type: 'table', content: '', tableHeaders: ['point', 'requirement'],
    tableRows: [
      ['Thesis (1 pt)', 'Historically defensible, specific, with line of reasoning'],
      ['Contextualization (1 pt)', 'Broader context in 3+ sentences that connects to argument'],
      ['Evidence (2 pts)', '1 pt: specific examples relevant to topic. 2 pts: uses evidence to support argument'],
      ['Analysis (2 pts)', '1 pt: uses historical reasoning (causation/comparison/continuity-change). 2 pts: demonstrates complexity'],
    ]
  },
  { type: 'heading', content: 'short answer question (saq)' },
  { type: 'bullets', content: '', bullets: [
    '4 SAQs; answer 3 in 40 minutes; each has 3 parts (a, b, c); each part = 1 sentence minimum',
    '**no thesis needed** — just concise, historically accurate answers using specific evidence',
    'Part (a) usually asks you to describe/identify; parts (b)/(c) ask you to explain/evaluate',
    'Be precise: use specific names, dates, events — vague answers get 0 points',
  ]},
  { type: 'heading', content: 'happ sourcing for dbq documents' },
  { type: 'bullets', content: '', bullets: [
    '**H — Historical Situation**: what was happening when/where this document was created? How does that context affect its meaning or reliability?',
    '**A — Audience**: who was this written for? How does the intended audience affect what the author includes/excludes?',
    '**P — Purpose**: why was this document created? Propaganda? Personal reflection? Official record? How does purpose create bias?',
    '**P — Point of View**: what perspective does the author bring? What are their interests, biases, position in society?',
  ]},
  { type: 'frqtip', content: 'The single biggest mistake on DBQ/LEQ: listing evidence without analysis. Every piece of evidence must be connected to your argument with explicit reasoning. "This shows that..." is not enough. "This demonstrates that [specific historical claim], which supports the argument that [thesis] because [reasoning chain]" is what earns full credit.' },
]

export default function APUSHU9T6() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 6, title: 'dbq, leq & saq practice', keyTerms: ['DBQ', 'LEQ', 'SAQ', 'thesis', 'contextualization', 'HAPP', 'complexity', 'line of reasoning', 'outside evidence', 'sourcing'] }}
      sections={sections}
      prev={{ href: '/apush/unit-9/5', title: 'supreme court landmark cases' }}
      courseHref="/apush" unitHref="/apush/unit-9"
    />
  )
}
