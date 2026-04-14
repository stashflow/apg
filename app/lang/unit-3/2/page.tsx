import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 3, title: 'diction & word choice' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'figurative language — beyond literal meaning',
  },
  {
    type: 'body',
    content: 'Figurative language uses words and phrases in non-literal ways to create meaning, evoke emotion, and express ideas that literal language cannot capture as efficiently or powerfully. Every major figure of speech is tested on AP Lang. More importantly, you must be able to explain what each figure accomplishes rhetorically — not just identify it.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['device', 'definition', 'example', 'rhetorical effect'],
    tableRows: [
      ['Metaphor', 'Direct comparison without "like" or "as"', '"Life is a highway"', 'Creates implicit understanding; collapses distance between two ideas'],
      ['Simile', 'Comparison using "like" or "as"', '"Her voice was like gravel"', 'More explicit than metaphor; maintains some distance'],
      ['Extended metaphor', 'A metaphor sustained through a passage or entire text', 'Whole essay comparing democracy to a garden', 'Creates structural unity; deepens an idea\'s implications'],
      ['Personification', 'Giving human qualities to non-human things', '"The wind whispered warnings"', 'Creates intimacy; makes abstract forces feel immediate'],
      ['Metonymy', 'Substituting a related word for what is meant', '"The White House announced..." (= the President)', 'Efficient; creates associations between object and idea'],
      ['Synecdoche', 'Part stands for the whole (or vice versa)', '"All hands on deck" (hands = sailors)', 'Focuses attention on a key part; can humanize or dehumanize'],
      ['Hyperbole', 'Deliberate exaggeration for effect', '"I\'ve told you a million times"', 'Emphasizes scale; creates humor or urgency'],
      ['Litotes', 'Understatement by negation', '"Not bad" (= very good)', 'Creates irony; shows sophisticated restraint'],
      ['Irony', 'Saying the opposite of what is meant', '"Oh, brilliant plan."', 'Creates distance; invites reader to share the writer\'s perspective'],
    ],
  },
  {
    type: 'heading',
    content: 'analyzing figurative language — beyond identification',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'NEVER just identify a device: "The author uses a metaphor comparing X to Y"',
      'Always explain the effect: "By comparing X to Y, the author suggests [implication], which reinforces the idea that [connection to purpose]"',
      'Ask: what does this comparison REVEAL that literal language could not? What does it CONCEAL?',
      'Extended metaphors are especially rich for analysis: trace how the comparison develops and what it implies as it extends',
    ],
  },
  {
    type: 'examtip',
    content: 'Metonymy and synecdoche are frequently confused. Metonymy: a RELATED concept replaces the original ("the pen is mightier than the sword" = writing is more powerful than violence). Synecdoche: PART replaces whole or whole replaces part ("fifty head of cattle"). Both are tested in MCQ as "rhetorical device" identification questions — know them precisely.',
  },
]

export default function LangU3T2() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 2,
        title: 'figurative language',
        keyTerms: ['metaphor', 'simile', 'extended metaphor', 'personification', 'metonymy', 'synecdoche', 'hyperbole', 'litotes', 'irony', 'figurative language'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-3/1', title: 'denotation, connotation & formality' }}
      next={{ href: '/lang/unit-3/3', title: 'imagery & sensory detail' }}
      courseHref="/lang"
      unitHref="/lang/unit-3"
    />
  )
}
