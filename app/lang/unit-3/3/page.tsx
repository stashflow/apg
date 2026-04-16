import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 3, title: 'reasoning & organization' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'analogy — reasoning through comparison',
  },
  {
    type: 'body',
    content: 'Analogy is a form of reasoning that compares two things to make a point about one based on properties of the other. Unlike metaphor (which suggests similarity for literary effect), analogies make explicit logical arguments: "if X is true in situation A, then Y should be true in situation B because they share key similarities."',
  },
  {
    type: 'heading',
    content: 'how analogies work',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Identify the comparison** — what two situations/things are being compared?',
      '**Find the shared property** — what do they have in common?',
      '**Make the argument** — because they share this property, what conclusion follows?',
      '**Test the analogy** — are the cases truly similar enough to draw this conclusion? What crucial differences exist?',
    ],
  },
  {
    type: 'heading',
    content: 'examples of analogical reasoning',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '"A nation is like a body. If one part is diseased, the whole body suffers. Therefore, when one region faces economic hardship, the entire nation must respond."',
      '"Running a family budget requires discipline and planning. Therefore, running a national budget requires the same principles."',
      '"Just as a river cannot run uphill, human nature cannot be fundamentally changed by legislation alone."',
      '"The brain is like a computer — both process information, store data, and respond to input. Therefore, the brain likely works by mechanical principles like a computer does."',
    ],
  },
  {
    type: 'heading',
    content: 'evaluating analogies — strengths and weaknesses',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Strength: makes abstract concrete** — comparing policy to a recognizable analogy makes the argument clearer and more memorable',
      '**Strength: builds intuition** — if the analogy is apt, the reader intuitively "gets it"',
      '**Weakness: surface-level similarity** — superficial likenesses can hide crucial differences',
      '**Weakness: begging the question** — just because two things share one property doesn\'t mean they\'re similar in all relevant ways',
    ],
  },
  {
    type: 'examtip',
    content: 'On the AP Lang exam, you may encounter analogies in texts and need to evaluate them. Strong analysis questions whether the comparison is apt: "The author compares environmental policy to military strategy, but this analogy breaks down because… [explain key difference]." Always test: are the cases truly similar enough for this conclusion?',
  },
]

export default function LangU3T3() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 3,
        title: 'analogy as reasoning',
        keyTerms: ['analogy', 'analogical reasoning', 'comparison', 'logical reasoning', 'warrant', 'test the analogy'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-3/2', title: 'inductive & deductive reasoning' }}
      next={{ href: '/lang/unit-3/4', title: 'logical fallacies' }}
      courseHref="/lang"
      unitHref="/lang/unit-3"
    />
  )
}
