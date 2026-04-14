import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 2, title: 'claims, evidence & reasoning' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'why counterargument matters',
  },
  {
    type: 'body',
    content: 'Addressing counterarguments is one of the most powerful tools in argumentation — and one of the most neglected by student writers. When you acknowledge and respond to the strongest version of the opposing view, you build credibility (ethos), demonstrate that your position can withstand scrutiny, and preemptively neutralize objections the reader might raise.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Failing to address counterarguments makes your argument seem naive or one-sided',
      'Addressing only weak counterarguments (straw men) is worse than not addressing them at all',
      'The strongest counterargument is the one that most directly threatens your thesis — face it, don\'t dodge it',
      'Acknowledging complexity is NOT weakness — it is intellectual honesty that actually strengthens your position',
    ],
  },
  {
    type: 'heading',
    content: 'concession vs. refutation',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['move', 'what it does', 'signal phrases'],
    tableRows: [
      ['Acknowledge', 'Name the opposing view fairly', '"Some argue that..."; "Critics contend that..."; "It is true that..."'],
      ['Concede', 'Admit a legitimate point in the counterargument', '"While it is true that X..."; "Admittedly, X has merit..."'],
      ['Refute', 'Show why the counterargument is wrong or limited', '"However..."; "Nevertheless..."; "Yet this view fails to account for..."'],
      ['Qualify', 'Limit your own claim in response to the challenge', '"While X applies in most cases, Y is the exception..."; "This claim holds when..."'],
    ],
  },
  {
    type: 'heading',
    content: 'the concede-and-refute structure',
  },
  {
    type: 'body',
    content: 'The most sophisticated arguers don\'t just refute — they concede something genuine first, then explain why their position still stands. This builds credibility and shows intellectual honesty. The refutation after a genuine concession is far more convincing than a refutation alone.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'WEAK: "Some say technology improves learning, but this is wrong because..."',
      'STRONG: "Technology can, in specific contexts, improve student engagement with material. However, the evidence consistently shows that undirected device use in classrooms reduces rather than enhances comprehension — suggesting that context and guidance, not access alone, determine outcomes."',
      'The strong version: concedes the legitimate point, then shows why the broader claim still holds',
      'The concession should be genuine — don\'t concede something trivial just to appear balanced',
    ],
  },
  {
    type: 'examtip',
    content: 'On the argument essay scoring rubric, "complexity" is the highest level — and the most reliable way to achieve it is through sophisticated counterargument. Complexity means: acknowledging nuance, alternative perspectives, or the limitations of your own position — and then explaining why your argument is still right. Place your counterargument and response in the body of the essay, not in a separate paragraph at the end — it should be woven into your argument.',
  },
]

export default function LangU2T5() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 5,
        title: 'counterargument & concession',
        keyTerms: ['counterargument', 'concession', 'refutation', 'qualification', 'concede-and-refute', 'straw man', 'intellectual honesty', 'complexity'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-2/4', title: 'logical fallacies' }}
      next={{ href: '/lang/unit-2/6', title: 'thesis writing' }}
      courseHref="/lang"
      unitHref="/lang/unit-2"
    />
  )
}
