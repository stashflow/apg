import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 4, title: 'style' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'periodic vs loose sentences',
  },
  {
    type: 'body',
    content: 'Periodic and cumulative sentences represent two opposing approaches to structure. Periodic sentences withhold the main clause until the end, creating anticipation. Cumulative sentences place the main clause first, then elaborate on it. Each creates different effects and serves different rhetorical purposes.',
  },
  {
    type: 'heading',
    content: 'periodic sentences — withholding for suspense',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Structure: modifiers → main clause (withheld to the end)',
      'Example: "Though exhausted by the journey, depleted of resources, and surrounded by enemies, the general refused to surrender."',
      'Effect: Creates suspense; reader waits for the main revelation',
      'The longer the delay, the greater the anticipation builds',
      'Used in formal, persuasive, or dramatic contexts where you want to build a case before revealing the conclusion',
    ],
  },
  {
    type: 'heading',
    content: 'cumulative/loose sentences — building on an idea',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Structure: main clause → modifiers (elaboration follows)',
      'Example: "The general refused to surrender, exhausted by the journey, depleted of resources, surrounded by enemies, yet unbowed."',
      'Effect: Statement is made, then its implications unfold naturally; feels exploratory and organic',
      'Mimic how thought actually develops — start with an idea, then keep adding details',
      'Used for narrative, observation, and reflection — the reader stays grounded in the main point while details accumulate',
    ],
  },
  {
    type: 'heading',
    content: 'rhetorical effects and comparison',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['aspect', 'periodic', 'cumulative'],
    tableRows: [
      ['Pace', 'Builds toward a climax', 'Unfolds naturally'],
      ['Reader experience', 'Anticipation; waiting for the point', 'Grounded in main idea; watching it elaborate'],
      ['Tone', 'Formal, deliberate, dramatic', 'Natural, conversational, reflective'],
      ['Best for', 'Legal writing, rhetoric, formal arguments', 'Narrative, descriptive writing, essays'],
      ['Key example', 'Churchill, MLK speeches (formal persuasion)', 'Personal essays, nature writing'],
    ],
  },
  {
    type: 'heading',
    content: 'mixing periodic and cumulative structures',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Skilled writers alternate between periodic and cumulative sentences to create rhythm',
      'A long cumulative sentence followed by a short periodic structure creates balance',
      'Deliberate breaks in pattern create emphasis — if cumulative sentences dominate, one periodic sentence stands out',
      'MLK alternates between both: "I have a dream that one day..." (cumulative, expanding), then "...that the sons of former slaves and the sons of former slaveowners will be able to sit down..." (periodic, building to main clause)',
    ],
  },
  {
    type: 'examtip',
    content: 'On rhetorical analysis essays, identify whether sentences are periodic or cumulative, then explain the effect: "The author primarily uses cumulative sentences, which allows the reader to remain grounded in the main argument while details accrue, creating a sense that the point is inevitable and self-evident. Occasionally, a periodic sentence interrupts — like \'Despite all these obstacles, change is possible.\' — creating emphasis through breaking the established pattern."',
  },
]

export default function LangU4T2() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 2,
        title: 'periodic vs loose sentences',
        keyTerms: ['periodic sentence', 'cumulative sentence', 'loose sentence', 'syntactic structure', 'anticipation', 'elaboration', 'modifiers', 'main clause'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-4/1', title: 'diction & syntax' }}
      next={{ href: '/lang/unit-4/3', title: 'figurative language & devices' }}
      courseHref="/lang"
      unitHref="/lang/unit-4"
    />
  )
}
