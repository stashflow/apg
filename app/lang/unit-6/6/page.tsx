import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 6, title: 'position, perspective & bias' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'evaluating sources critically' },
  { type: 'body', content: 'Not all sources are equal. Evaluating a source means asking: who produced it, for what purpose, with what evidence, reviewed by whom, and with what incentives? This is not about dismissing sources but about understanding their strengths and limitations — and using them appropriately in your argument.' },
  { type: 'heading', content: 'the SIFT method' },
  { type: 'bullets', content: '', bullets: [
    '**S — Stop**: pause before sharing/using; ask whether you\'ve evaluated it',
    '**I — Investigate the source**: who published this? What is their reputation and purpose?',
    '**F — Find better coverage**: is this claim corroborated by multiple independent sources?',
    '**T — Trace claims**: follow the evidence back to its original source; does the original actually say what the summary claims?',
  ]},
  { type: 'heading', content: 'source reliability indicators' },
  { type: 'table', content: '', tableHeaders: ['indicator', 'more reliable', 'less reliable'],
    tableRows: [
      ['Author credentials', 'Expert in the relevant field, peer-reviewed publication', 'Anonymous, no stated expertise, clearly partisan'],
      ['Publication', 'Peer-reviewed journal, established news org with editorial standards', 'Blog, partisan advocacy site, unknown publisher'],
      ['Evidence', 'Primary sources, data with methodology explained', 'Anecdotes only, vague references, no citations'],
      ['Transparency', 'Acknowledges limitations, discloses funding/conflicts', 'No methodology, no disclosure of conflicts of interest'],
      ['Corroboration', 'Consistent with multiple independent sources', 'Only source making this claim'],
    ]
  },
  { type: 'heading', content: 'using sources in synthesis essays' },
  { type: 'bullets', content: '', bullets: [
    'You can use a source you find partially unreliable — but acknowledge its limitations and explain why you\'re still drawing from it',
    'The strongest synthesis essays evaluate sources AS PART OF THE ARGUMENT: "Source C, written by an industry lobbyist, predictably emphasizes economic benefits — but even this source concedes..."',
    'Do not use sources as mere quote dispensers; use them as voices in a conversation you are moderating',
  ]},
  { type: 'examtip', content: 'On the AP exam, you are given the sources — you cannot research their reliability beyond what the attribution tells you. Use what you\'re given: the author\'s stated role, the publication, the date, and the nature of the evidence. These small details are your only tools for evaluating source credibility, and using them demonstrates sophistication.' },
]

export default function LangU6T6() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 6, title: "author's position & reliability of a source", keyTerms: ['SIFT method', 'source evaluation', 'credibility', 'corroboration', 'peer review', 'conflict of interest', 'reliability indicators'] }}
      sections={sections}
      prev={{ href: '/lang/unit-6/5', title: 'multiple viewpoints' }}
      next={{ href: '/lang/unit-7/1', title: 'arguable & qualified claims' }}
      courseHref="/lang" unitHref="/lang/unit-6"
    />
  )
}
