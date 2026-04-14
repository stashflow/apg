import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 5, title: 'putting it all together' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the standard five-paragraph structure' },
  { type: 'body', content: 'The five-paragraph essay (intro + 3 body + conclusion) is the default structure for AP Lang FRQs. It is not the only structure, but it is reliable, scannable by readers, and ensures you cover thesis, evidence, and analysis systematically. Do not abandon it without a clear reason.' },
  { type: 'bullets', content: '', bullets: [
    '**Introduction**: hook → context → thesis',
    '**Body paragraph 1**: strongest supporting sub-claim',
    '**Body paragraph 2**: second supporting sub-claim',
    '**Body paragraph 3**: third sub-claim OR counterargument + refutation',
    '**Conclusion**: synthesize (do not summarize) → broaden → end memorably',
  ]},
  { type: 'heading', content: 'alternative organizational strategies' },
  { type: 'bullets', content: '', bullets: [
    '**Concession-then-argument**: open by acknowledging the opposing view, then pivot to your argument — signals sophistication and fairness',
    '**Problem-solution**: establish the problem clearly, then argue for your solution — works well for policy arguments',
    '**Chronological/developmental**: trace how something changes over time — works for historical arguments or analyzing a text\'s emotional arc',
    '**Comparative**: organize around similarities and differences — works for synthesis essays comparing source perspectives',
  ]},
  { type: 'heading', content: 'organizing the synthesis essay specifically' },
  { type: 'bullets', content: '', bullets: [
    '**Thematic organization (recommended)**: each body paragraph addresses a theme/sub-claim, drawing from multiple sources',
    '**Source-by-source (avoid)**: one paragraph per source — reads as summary, not argument; fails to synthesize',
    'Aim to use each source in at least 2 paragraphs, showing how sources interact and support your argument together',
    'You must use at least 3 of the 6+ provided sources, but strong essays use 4–5',
  ]},
  { type: 'examtip', content: 'The most common organizational mistake: treating the three body paragraphs as three separate, unrelated topics. In a strong essay, each paragraph builds on the previous one — the argument develops and deepens rather than just adding more examples. Think of organization as the architecture of your reasoning, not just a container for evidence.' },
]

export default function LangU5T5() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 5, title: 'essay organization', keyTerms: ['five-paragraph structure', 'thematic organization', 'concession', 'problem-solution', 'synthesis organization', 'argument development'] }}
      sections={sections}
      prev={{ href: '/lang/unit-5/4', title: 'transitions & cohesion' }}
      next={{ href: '/lang/unit-5/6', title: 'introduction & conclusion techniques' }}
      courseHref="/lang" unitHref="/lang/unit-5"
    />
  )
}
