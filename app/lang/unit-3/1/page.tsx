import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 3, title: 'diction & word choice' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'diction — the foundation of style',
  },
  {
    type: 'body',
    content: 'Diction refers to a writer\'s word choices — every individual decision about which word to use in a given moment. Diction is the most immediate expression of voice, tone, and style. It operates on multiple levels simultaneously: connotation vs. denotation, formality, specificity, and sensory quality.',
  },
  {
    type: 'heading',
    content: 'connotation vs. denotation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Denotation**: the dictionary definition — the literal, neutral meaning of a word',
      '**Connotation**: the emotional associations a word carries — what it IMPLIES or EVOKES',
      'Example: "died," "passed away," "was killed," "perished," "was lost" all denote the same event — but their connotations are radically different',
      '"Home" vs. "house" — same denotation, but "home" implies warmth, belonging, family; "house" is neutral structure',
      'Writers choose words for their connotations at least as much as their denotations',
    ],
  },
  {
    type: 'heading',
    content: 'levels of diction — formality',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['level', 'description', 'example', 'effect'],
    tableRows: [
      ['Formal/Elevated', 'Academic, Latinate, complex vocabulary', '"The deleterious consequences of this policy are manifold."', 'Authority, expertise, distance'],
      ['Standard', 'Educated but accessible', '"The policy has many harmful effects."', 'Clear, credible, neutral'],
      ['Informal/Colloquial', 'Conversational, everyday language', '"The policy is basically a disaster."', 'Accessible, relatable, loses gravitas'],
      ['Slang/Dialect', 'Sub-cultural or regional language', 'Specific to community', 'Authenticity, intimacy, or mockery'],
    ],
  },
  {
    type: 'heading',
    content: 'specificity and concreteness',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Abstract diction**: general, conceptual words — "freedom," "justice," "society"',
      '**Concrete diction**: specific, observable, sensory words — "the rusted chain-link fence," "the particular slant of afternoon light"',
      'Concrete diction is more vivid and persuasive — it creates images in the reader\'s mind',
      'Skilled writers alternate between abstract and concrete: make a general claim (abstract), then ground it in a specific image (concrete)',
      '**Loaded diction**: words with strong emotional charges — "terrorist," "freedom fighter," "regime," "government" — signal the writer\'s bias and invite the reader to share it',
    ],
  },
  {
    type: 'examtip',
    content: 'When analyzing diction on the FRQ, avoid the generic phrase "the author uses strong word choice." Instead, quote specific words, identify their connotations, and explain what effect those connotations create: "The repeated use of \'contaminated,\' \'toxic,\' and \'poisoned\' — all words connoting disease and corruption — transforms the policy debate into a visceral health crisis, compelling the reader to feel urgency rather than merely understand it."',
  },
]

export default function LangU3T1() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 1,
        title: 'denotation, connotation & formality',
        keyTerms: ['diction', 'denotation', 'connotation', 'formal diction', 'colloquial diction', 'abstract', 'concrete', 'loaded diction', 'word choice'],
      }}
      sections={sections}
      next={{ href: '/lang/unit-3/2', title: 'figurative language' }}
      courseHref="/lang"
      unitHref="/lang/unit-3"
    />
  )
}
