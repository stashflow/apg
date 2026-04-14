import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 1, title: 'rhetorical situation' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'appeals to values — the deepest form of pathos',
  },
  {
    type: 'body',
    content: 'Beyond surface-level emotional appeals (making readers sad or scared), sophisticated rhetoric appeals to the audience\'s core values — the fundamental beliefs about what is right, important, and worth protecting. Values-based appeals are powerful because they connect an argument to the audience\'s identity, not just their emotions. When you threaten something someone values, they feel it personally.',
  },
  {
    type: 'heading',
    content: 'common values writers appeal to',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['value', 'how writers appeal to it', 'example signal phrase'],
    tableRows: [
      ['Freedom / Liberty', 'Frame issue as threat to individual or collective freedom', '"Our right to... is under attack"'],
      ['Justice / Fairness', 'Show how a situation violates equitable treatment', '"No child should face... while others..."'],
      ['Family / Community', 'Connect issue to protection of loved ones or neighbors', '"Think of what we leave to our children"'],
      ['Progress / Innovation', 'Position argument as forward-thinking vs. backward', '"In the 21st century, we can do better than..."'],
      ['Tradition / Heritage', 'Appeal to historical practices or founding principles', '"Our ancestors built this nation on..."'],
      ['Security / Safety', 'Connect issue to physical or economic protection', '"The greatest threat to our safety is..."'],
      ['Equality', 'Appeal to belief in equal rights and dignity', '"Every person deserves..."'],
    ],
  },
  {
    type: 'heading',
    content: 'beliefs vs. facts — why this distinction matters',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Facts can be proven true or false; beliefs are commitments about what is right or valuable',
      'Arguments that treat beliefs as facts are making an **assumption** — and often fail to persuade those who don\'t share that belief',
      'Effective rhetoric acknowledges that its values-based premises are contested: "If we agree that fairness matters, then we must conclude..."',
      'On the exam: identify when a writer is using a shared belief as a **premise** of their argument — this is a form of ethos (assuming shared values = assuming shared identity)',
    ],
  },
  {
    type: 'heading',
    content: 'values appeals in political and civic rhetoric',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Political speeches are the richest source of values appeals — nearly every claim is grounded in a value, not just a fact',
      'MLK appeals to shared American values (equality, justice, the Declaration\'s promises) to make segregation a violation not just of law but of American identity',
      'Reagan appeals to "freedom" and "tradition" as values to frame government intervention as un-American',
      'Analyzing which values a writer appeals to tells you as much about their assumed audience as any other technique',
    ],
  },
  {
    type: 'examtip',
    content: 'On the argument essay, ground your thesis in a value, not just a position. "Social media is harmful" is a weak thesis. "If we value adolescent wellbeing and the development of genuine human connection, then the unchecked expansion of algorithmic social media represents not just a technical problem but a moral one" is a values-grounded thesis that immediately signals sophistication.',
  },
]

export default function LangU1T8() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 8,
        title: 'appeals to values & beliefs',
        keyTerms: ['values', 'beliefs', 'assumptions', 'values-based appeal', 'premises', 'shared values', 'political rhetoric', 'civic rhetoric', 'ethos', 'pathos'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-1/7', title: 'point of view' }}
      courseHref="/lang"
      unitHref="/lang/unit-1"
    />
  )
}
