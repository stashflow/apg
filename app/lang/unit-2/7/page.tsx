import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 2, title: 'claims, evidence & reasoning' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'organizing an argument — structure as rhetoric',
  },
  {
    type: 'body',
    content: 'Structure is itself a rhetorical choice. How you arrange your claims, evidence, and counterarguments shapes how the reader experiences the logic of your argument. The goal is not to follow a template but to arrange your ideas so that each point builds on the last, creating an argument that gains force as it proceeds.',
  },
  {
    type: 'heading',
    content: 'argument organization patterns',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['pattern', 'structure', 'best for'],
    tableRows: [
      ['Classical', 'Intro → Background → Thesis → Arguments → Counterargument → Conclusion', 'Traditional academic arguments; step-by-step logic'],
      ['Rogerian', 'Acknowledge opponent → State common ground → Present your position → Show mutual benefit', 'Highly contested issues; audiences hostile to your view'],
      ['Toulmin', 'Claim → Data → Warrant → Backing → Qualifier → Rebuttal', 'Complex arguments needing explicit logical structure'],
      ['Problem-Solution', 'Establish problem → Causes → Solution → Benefits/Refutation of alternatives', 'Policy arguments; calls to action'],
    ],
  },
  {
    type: 'heading',
    content: 'paragraph structure — the PEEL model',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**P — Point**: your sub-claim / topic sentence (states what this paragraph argues)',
      '**E — Evidence**: the specific example, quote, statistic, or case that supports the point',
      '**E — Explanation**: your analysis of how the evidence proves the point (the most important part)',
      '**L — Link**: connection back to your thesis OR transition to the next point',
      'Explanation should be the LONGEST element — 2–3 sentences minimum in a timed AP essay',
    ],
  },
  {
    type: 'heading',
    content: 'transitions and logical flow',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Transitions do more than signal sequence — they show LOGICAL RELATIONSHIPS between ideas',
      '**Addition**: "furthermore," "moreover," "in addition" — builds cumulative evidence',
      '**Contrast**: "however," "yet," "nevertheless," "while X is true, Y..." — shows complexity',
      '**Cause/effect**: "therefore," "consequently," "as a result," "this explains why" — shows reasoning',
      '**Concession**: "admittedly," "granted that," "while this is true..." — shows intellectual honesty',
      'Avoid: starting every sentence with "Also," "Another," "First, second, third" — these show mechanical structure without logical connection',
    ],
  },
  {
    type: 'examtip',
    content: 'For timed FRQ essays (40 minutes each for Q2 and Q3, 15 minutes reading + 40 writing for Q1), spend the first 5 minutes planning your structure. A rough outline with: thesis → 3 body paragraph topics → counterargument placement → evidence for each → saves time and produces a stronger essay than immediately starting to write.',
  },
]

export default function LangU2T7() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 7,
        title: 'organizing an argument',
        keyTerms: ['classical argument', 'Rogerian argument', 'Toulmin', 'PEEL', 'transitions', 'logical flow', 'problem-solution', 'paragraph structure', 'topic sentence'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-2/6', title: 'thesis writing' }}
      next={{ href: '/lang/unit-2/8', title: 'synthesizing sources' }}
      courseHref="/lang"
      unitHref="/lang/unit-2"
    />
  )
}
