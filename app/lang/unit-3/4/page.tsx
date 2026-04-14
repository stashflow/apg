import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 3, title: 'diction & word choice' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'allusion — borrowed authority',
  },
  {
    type: 'body',
    content: 'An allusion is an indirect reference to a person, event, text, myth, or cultural phenomenon that the writer expects the audience to recognize. Allusions work by compression: a single reference invokes an entire body of meaning, emotion, and association in the reader who recognizes it. This is why understanding your audience is essential — allusions only work if the audience shares the reference.',
  },
  {
    type: 'heading',
    content: 'types of allusion',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Biblical allusion**: references to figures, stories, or language from the Bible — extremely common in American rhetoric (garden of Eden, David and Goliath, Good Samaritan)',
      '**Classical/mythological allusion**: Greek and Roman mythology — Sisyphean task, Achilles\' heel, Pandora\'s box',
      '**Literary allusion**: reference to literary works — "a Kafkaesque bureaucracy," "Orwellian surveillance"',
      '**Historical allusion**: reference to historical events — "another Munich" (appeasement), "a new New Deal"',
      '**Cultural allusion**: references to popular culture, current events, shared cultural touchstones',
    ],
  },
  {
    type: 'heading',
    content: 'rhetorical functions of allusion',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Ethos**: citing shared cultural touchstones positions the writer as culturally informed and part of the audience\'s community',
      '**Pathos**: familiar allusions trigger existing emotional associations — reference to the Holocaust evokes horror without explanation',
      '**Logos**: allusions to historical precedents serve as evidence — "this policy failed in X, it will fail again"',
      '**Efficiency**: allusion does complex work in very few words',
      '**Exclusion**: allusions also work as gates — readers who don\'t recognize them feel excluded, while those who do feel included',
    ],
  },
  {
    type: 'heading',
    content: 'intertextuality',
  },
  {
    type: 'body',
    content: 'Intertextuality is the broader concept: all texts exist in conversation with other texts. Every text borrows from, responds to, or remixes previous texts. Recognizing these connections deepens analysis — when MLK\'s "Letter from Birmingham Jail" echoes the language of Paul\'s epistles, this is not coincidence but strategic identification with a religious tradition.',
  },
  {
    type: 'examtip',
    content: 'When you identify an allusion in a passage, ask three questions: (1) What body of meaning does this reference invoke? (2) What does the writer gain by invoking it? (3) Does the allusion work perfectly or does it break down in interesting ways? An allusion that only partially fits may be revealing a tension in the argument — and that tension is often the most interesting thing to analyze.',
  },
]

export default function LangU3T4() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 4,
        title: 'allusion & intertextuality',
        keyTerms: ['allusion', 'Biblical allusion', 'classical allusion', 'literary allusion', 'historical allusion', 'intertextuality', 'borrowed authority', 'cultural touchstone'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-3/3', title: 'imagery & sensory detail' }}
      courseHref="/lang"
      unitHref="/lang/unit-3"
    />
  )
}
