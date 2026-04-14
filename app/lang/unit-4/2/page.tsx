import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 4, title: 'syntax & sentence structure' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'rhetorical schemes — patterns of arrangement',
  },
  {
    type: 'body',
    content: 'Rhetorical schemes are figures of speech that involve the arrangement (not the meaning) of words. Unlike tropes (which change meaning, like metaphor), schemes create patterns through repetition, balance, or contrast of words and structures. They create rhythm, emphasis, and memorable phrasing — which is why political speeches, sermons, and classic rhetoric are so full of them.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['scheme', 'definition', 'example', 'effect'],
    tableRows: [
      ['Anaphora', 'Repetition of word/phrase at start of successive clauses', '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields..." — Churchill', 'Builds momentum, emphasis, and emotional crescendo'],
      ['Epistrophe', 'Repetition at the END of successive clauses', '"...government of the people, by the people, for the people" — Lincoln', 'Creates finality; the repeated word carries maximum weight'],
      ['Antithesis', 'Contrasting ideas in parallel structure', '"Ask not what your country can do for you — ask what you can do for your country" — JFK', 'Sharpens the contrast; makes both ideas more memorable'],
      ['Parallelism', 'Using the same grammatical structure for related ideas', '"I came, I saw, I conquered"', 'Creates balance, equality, and rhythm; implies ideas are equivalent'],
      ['Chiasmus', 'Reversed grammatical structure in successive clauses', '"It\'s not the men in my life that counts — it\'s the life in my men" — Mae West', 'Creates elegant reversal; makes the relationship between ideas vivid'],
      ['Asyndeton', 'Omitting conjunctions between clauses', '"I came, I saw, I conquered"', 'Creates speed, urgency, and staccato impact'],
      ['Polysyndeton', 'Using many conjunctions between clauses', '"We ate and drank and laughed and sang and danced"', 'Creates slowness, accumulation, or breathlessness'],
      ['Anadiplosis', 'Last word of a clause repeated at start of next', '"Fear leads to anger. Anger leads to hate. Hate leads to suffering."', 'Creates chain-link effect; shows inevitability or progression'],
    ],
  },
  {
    type: 'heading',
    content: 'how to analyze schemes in essays',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Identify the scheme and quote the specific instance',
      'Name the structural pattern: "the parallel structure of three verb phrases..."',
      'Explain the SOUND effect: rhythm, speed, emphasis',
      'Explain the MEANING effect: what does the pattern emphasize about the content?',
      'Connect to purpose: how does this structural choice serve the writer\'s overall goal?',
    ],
  },
  {
    type: 'examtip',
    content: 'Anaphora is by far the most-tested scheme in AP Lang. Know it cold and be able to explain why it works: the repetition creates a drumbeat that builds emotional intensity and makes each successive example feel more inevitable and powerful than the last. MLK\'s "I Have a Dream" speech, Churchill\'s wartime speeches, and Obama\'s "Yes We Can" all rely heavily on anaphora — they are models of how it works.',
  },
]

export default function LangU4T2() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 2,
        title: 'rhetorical schemes',
        keyTerms: ['anaphora', 'epistrophe', 'antithesis', 'parallelism', 'chiasmus', 'asyndeton', 'polysyndeton', 'anadiplosis', 'rhetorical schemes', 'figures of speech'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-4/1', title: 'sentence types & length' }}
      next={{ href: '/lang/unit-4/3', title: 'voice & style' }}
      courseHref="/lang"
      unitHref="/lang/unit-4"
    />
  )
}
