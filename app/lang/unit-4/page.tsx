import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'diction & syntax', description: 'word choice (connotation, denotation, register) and sentence structure.' },
  { number: 2, title: 'periodic vs loose sentences', description: 'delaying the main clause for suspense vs front-loading it for clarity.' },
  { number: 3, title: 'imagery & figurative language', description: 'visual, auditory, tactile imagery plus metaphor, simile, personification.' },
  { number: 4, title: 'understatement & litotes', description: 'downplaying for effect and double negatives for emphasis.' },
  { number: 5, title: 'paradox & oxymoron', description: 'apparent contradictions that reveal deeper truths.' },
  { number: 6, title: 'metonymy & synecdoche', description: 'substitution by association or part-for-whole.' },
  { number: 7, title: 'juxtaposition & parallelism', description: 'contrasting ideas side by side and matching grammatical structure.' },
  { number: 8, title: 'anaphora, antithesis & repetition', description: 'repeated openings, contrasted opposites, and emphasis through repetition.' },
  { number: 9, title: 'polysyndeton & asyndeton', description: 'many conjunctions (slow) vs none (fast/forceful).' },
  { number: 10, title: 'rhetorical question', description: 'questions asked for effect rather than answers.' },
  { number: 11, title: 'sentence variety & register', description: 'mixing sentence lengths and formal vs informal style.' },
]

export default function LangUnit4Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 4, title: 'style', examWeight: '11–14%', description: 'the how of writing — diction, syntax, figurative language, and every device that shapes a reader\'s experience.' }}
      topics={topics}
      basePath="/lang/unit-4"
      courseHref="/lang"

      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
