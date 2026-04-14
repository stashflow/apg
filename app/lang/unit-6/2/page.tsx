import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 6, title: 'position, perspective & bias' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'what are assumptions?' },
  { type: 'body', content: 'An assumption is an unstated belief that the writer takes for granted and expects the audience to share. Assumptions are not always wrong — all communication relies on shared assumptions — but hidden assumptions can be the weak points in otherwise strong arguments. Identifying them is one of the highest-level analytical moves on AP Lang.' },
  { type: 'bullets', content: '', bullets: [
    'Example: an argument that "higher education should be free" assumes that access to higher education is a social good worth public investment — that assumption could be challenged',
    'Example: an op-ed that opens "as any parent knows..." assumes the reader is a parent, or that parental experience is universally relatable',
    'Unstated assumptions become problems when they are not shared by the audience, when they are factually questionable, or when they smuggle in a conclusion the argument was supposed to establish',
  ]},
  { type: 'heading', content: 'cultural context — why it matters' },
  { type: 'body', content: 'The same text can mean different things to different audiences depending on their cultural context. A speech invoking "family values" means one thing to an evangelical Christian audience and something entirely different to a secular urban audience. Understanding cultural context is essential for analyzing why a text works (or doesn\'t) for a specific audience.' },
  { type: 'bullets', content: '', bullets: [
    '**historical context**: when was this written? What events, movements, or debates shaped what could and could not be said?',
    '**geographic/national context**: American assumptions about individualism differ sharply from European social-democratic assumptions',
    '**religious/ideological context**: appeals that resonate within a faith tradition may fall flat or offend outside it',
    '**class context**: economic language carries different meanings to wealthy and working-class audiences',
  ]},
  { type: 'examtip', content: 'When analyzing a document\'s rhetorical situation, always address context explicitly. A speech given in 1963 vs. 2023 carries different assumptions, different audience knowledge, and different risks. Identifying and analyzing the cultural/historical context of a text earns you marks for sophisticated rhetorical analysis.' },
]

export default function LangU6T2() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 2, title: 'assumptions & cultural context', keyTerms: ['assumption', 'unstated premise', 'cultural context', 'historical context', 'shared assumption', 'audience values'] }}
      sections={sections}
      prev={{ href: '/lang/unit-6/1', title: 'perspective & bias' }}
      next={{ href: '/lang/unit-6/3', title: 'historical context' }}
      courseHref="/lang" unitHref="/lang/unit-6"
    />
  )
}
