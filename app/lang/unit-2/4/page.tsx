import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 2, title: 'claims, evidence & reasoning' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'logical fallacies — errors in reasoning',
  },
  {
    type: 'body',
    content: 'A logical fallacy is an error in reasoning that makes an argument invalid, even if it may sound convincing. Recognizing fallacies is tested in MCQ (identifying flawed reasoning) and expected in FRQ writing (you should NOT use them, and analyzing when authors use them shows sophisticated reading).',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['fallacy', 'what it is', 'example'],
    tableRows: [
      ['Ad Hominem', 'Attack the person, not their argument', '"Don\'t listen to his environmental policy — he doesn\'t even recycle."'],
      ['Straw Man', 'Misrepresent opponent\'s argument, then attack the misrepresentation', '"My opponent wants to help immigrants — so she wants open borders and no laws."'],
      ['False Dichotomy', 'Present only two options when more exist', '"You\'re either with us or against us."'],
      ['Slippery Slope', 'Claim X leads inevitably to extreme Y with no evidence', '"If we allow this law, soon the government will control everything."'],
      ['Hasty Generalization', 'Draw a general conclusion from too few examples', '"My two teachers were unfair. All teachers are unfair."'],
      ['Appeal to Authority', 'Cite an authority who is not relevant to the claim', '"Climate change is real — Michael Jordan says so."'],
      ['Circular Reasoning', 'The conclusion is already assumed in the premise', '"The Bible is true because the Bible says so."'],
      ['Post Hoc', 'X came before Y, therefore X caused Y', '"I wore my lucky socks and we won — they must be lucky."'],
      ['Bandwagon', 'Everyone does/believes it, so it must be right', '"Millions of people use this supplement, so it must work."'],
      ['Red Herring', 'Introduce irrelevant information to distract from the main argument', '"Why focus on wage inequality when crime is rising?"'],
    ],
  },
  {
    type: 'heading',
    content: 'using fallacy analysis in essays',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'When an author\'s argument contains a fallacy, identifying it and explaining how it weakens the argument is sophisticated analysis',
      'Don\'t just name the fallacy — explain what gap in reasoning it reveals: "The author\'s use of a false dichotomy prevents the reader from considering the range of policy options, limiting the argument\'s persuasive force"',
      'On your own argument essay, consciously avoid fallacies — they undermine your ethos and lose points',
      'Counterargument sections are where fallacies most often appear — be particularly careful when dismissing opposing views',
    ],
  },
  {
    type: 'examtip',
    content: 'MCQ questions sometimes ask you to identify the reasoning error in a passage. The hardest ones distinguish between: false dichotomy (only two choices) vs. hasty generalization (too few examples), or straw man (wrong version of argument) vs. red herring (irrelevant distraction). Focus on what is wrong with the STRUCTURE of the reasoning, not just whether you agree with the conclusion.',
  },
]

export default function LangU2T4() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 4,
        title: 'logical fallacies',
        keyTerms: ['logical fallacy', 'ad hominem', 'straw man', 'false dichotomy', 'slippery slope', 'hasty generalization', 'post hoc', 'circular reasoning', 'red herring', 'bandwagon'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-2/3', title: 'reasoning & logical structure' }}
      next={{ href: '/lang/unit-2/5', title: 'counterargument & concession' }}
      courseHref="/lang"
      unitHref="/lang/unit-2"
    />
  )
}
