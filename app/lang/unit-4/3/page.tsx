import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 4, title: 'style' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'figurative language — meaning beyond the literal',
  },
  {
    type: 'body',
    content: 'Figurative language describes language that communicates something other than its literal meaning. It uses comparison, exaggeration, or substitution to create vivid imagery, emotional impact, and deeper meaning. Figurative language is essential to both literary and rhetorical writing.',
  },
  {
    type: 'heading',
    content: 'tropes — changing meaning',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['trope', 'definition', 'example', 'effect'],
    tableRows: [
      ['Metaphor', 'Stating that one thing IS another (implicit comparison)', '"Time is money"', 'Creates a lens through which to understand a concept'],
      ['Simile', 'Comparing two things using "like" or "as"', '"She was like a ghost in the room"', 'Explicitly shows comparison; softer than metaphor'],
      ['Personification', 'Giving human qualities to non-human things', '"The wind whispered secrets"', 'Makes the inanimate relatable; creates mood'],
      ['Hyperbole', 'Extreme exaggeration for effect', '"I\'ve told you a million times"', 'Creates emphasis or humor'],
      ['Understatement', 'Deliberate downplaying of something', '"The Titanic had a bit of a problem with ice"', 'Creates irony; can be humorous or darkly comedic'],
      ['Irony', 'Contrast between what is said and what is meant', 'Saying "Great job" when someone fails', 'Creates a gap for readers to interpret; can be sarcastic'],
      ['Oxymoron', 'Combining contradictory terms', '"Deafening silence," "sweet sorrow"', 'Creates paradox; makes the reader think about contradiction'],
      ['Metonymy', 'Substituting the name of something with the name of something associated with it', '"The White House announced a new policy" (= the President)', 'Efficient; shows relationships between things'],
      ['Synecdoche', 'A part represents the whole, or vice versa', '"All hands on deck" (hands = sailors)', 'Vivid; focuses attention on a specific part'],
    ],
  },
  {
    type: 'heading',
    content: 'schemes — arrangement patterns',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Anaphora**: repetition at the start of successive clauses ("I came, I saw, I conquered")',
      '**Epistrophe**: repetition at the END of successive clauses ("government of the people, by the people, for the people")',
      '**Parallelism**: same grammatical structure for related ideas',
      '**Antithesis**: contrasting ideas in parallel structure ("Ask not what your country can do for you — ask what you can do for your country")',
      '**Chiasmus**: reversed structure in successive clauses ("It\'s not the men in my life, it\'s the life in my men")',
      '**Asyndeton**: omitting conjunctions for speed ("I came, I saw, I conquered")',
      '**Polysyndeton**: using many conjunctions for emphasis ("We fought and struggled and persisted and won")',
    ],
  },
  {
    type: 'heading',
    content: 'imagery and sensory detail',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Visual imagery**: sight — "The scarlet sunset painted the sky"',
      '**Auditory imagery**: sound — "The screech of brakes, the blare of horns"',
      '**Olfactory imagery**: smell — "The sweet rot of decay"',
      '**Tactile imagery**: touch — "The rough concrete scraped my skin"',
      '**Gustatory imagery**: taste — "The bitter metallic taste of blood"',
      '**Kinesthetic imagery**: motion — "My stomach lurched as the plane descended"',
    ],
  },
  {
    type: 'heading',
    content: 'analyzing figurative language for AP Lang',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Identify the specific device (metaphor, anaphora, etc.) and quote it',
      'Explain the literal meaning vs. the figurative meaning',
      'Describe the sensory or emotional effect it creates',
      'Connect to the larger purpose: what does this device help the writer accomplish?',
      'Look for patterns: repeated use of certain devices reveals the writer\'s style and priorities',
    ],
  },
  {
    type: 'examtip',
    content: 'In rhetorical analysis, never just identify a device. For example: "The author uses a series of metaphors comparing failure to a journey: \'stumbling,\' \'losing the path,\' \'being stranded.\' These metaphors make abstract failure concrete and relatable, inviting the reader to empathize with the struggling individual. The journey metaphor also suggests that failure is temporary — one can find a new path — which reinforces the author\'s ultimately hopeful purpose."',
  },
]

export default function LangU4T3() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 3,
        title: 'figurative language & devices',
        keyTerms: ['metaphor', 'simile', 'personification', 'hyperbole', 'understatement', 'irony', 'anaphora', 'parallelism', 'imagery', 'trope', 'scheme'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-4/2', title: 'periodic vs loose sentences' }}
      courseHref="/lang"
      unitHref="/lang/unit-4"
    />
  )
}
