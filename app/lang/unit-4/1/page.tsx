import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 4, title: 'syntax & sentence structure' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'syntax — structure as meaning',
  },
  {
    type: 'body',
    content: 'Syntax refers to the arrangement of words and phrases to create sentences. Like diction, syntax is both a grammatical fact and a rhetorical choice. The length, type, and structure of a sentence determines its rhythm, emphasis, and emotional effect. Skilled writers manipulate syntax to control how the reader experiences an argument.',
  },
  {
    type: 'heading',
    content: 'sentence types and their effects',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['sentence type', 'structure', 'rhetorical effect'],
    tableRows: [
      ['Simple', 'One independent clause', 'Direct, forceful, declarative; creates certainty or impact'],
      ['Compound', 'Two+ independent clauses joined by coordinating conjunction', 'Shows parallel or equal relationship between ideas; balanced'],
      ['Complex', 'Independent + one/more dependent clauses', 'Shows hierarchy: main idea + qualification, condition, or context'],
      ['Compound-complex', 'Multiple independent + dependent clauses', 'Can express sophisticated, nuanced ideas; can feel elaborate or overwhelming'],
      ['Cumulative', 'Main clause first, then modification piles on', 'Exploratory, additive, builds on an initial statement; mimics natural thought'],
      ['Periodic', 'Main clause withheld until the end', 'Creates suspense; all modifiers lead to a climactic main point'],
    ],
  },
  {
    type: 'heading',
    content: 'sentence length variation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Long sentences**: create complexity, nuance, elaboration; mimic the experience of thinking through something carefully; can create breathlessness or grandeur',
      '**Short sentences**: create punch, finality, clarity; often used for impact after a buildup of long sentences',
      '**Fragment (intentional)**: creates emphasis; signals incompletion; Like this.',
      'Rhythm: alternating long and short sentences creates a rhythm that moves the reader forward',
      'Key pattern: a series of long sentences followed by a very short one → the short sentence carries maximum emphasis',
    ],
  },
  {
    type: 'heading',
    content: 'periodic vs. cumulative sentences',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Periodic**: "Despite the warnings of experts, despite the evidence of history, despite the pleas of citizens in the streets, the government moved ahead." — suspense builds; the reader waits for the main event',
      '**Cumulative**: "The government moved ahead, ignoring experts, dismissing history, silencing the streets." — the main event is stated, then its implications accumulate',
      'Periodic sentences create anticipation; cumulative sentences create elaboration and weight',
    ],
  },
  {
    type: 'examtip',
    content: 'On the rhetorical analysis FRQ, analyzing syntax means more than saying "the author uses short sentences." Explain what the sentence structure DOES: "The shift to a series of staccato, three-word sentences — \'We were lied to. We were used. We were discarded.\' — creates a drumbeat rhythm that transforms individual grievances into a collective indictment, the simplicity of structure mirroring the simplicity of the demand for accountability."',
  },
]

export default function LangU4T1() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 1,
        title: 'sentence types & length',
        keyTerms: ['syntax', 'simple sentence', 'compound sentence', 'complex sentence', 'periodic sentence', 'cumulative sentence', 'fragment', 'sentence variety', 'rhythm'],
      }}
      sections={sections}
      next={{ href: '/lang/unit-4/2', title: 'rhetorical schemes' }}
      courseHref="/lang"
      unitHref="/lang/unit-4"
    />
  )
}
