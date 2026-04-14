import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'diction & syntax', description: 'word choice (connotation, denotation, register) and sentence structure (length, type, order) — and how each creates meaning.' },
  { number: 2, title: 'imagery & figurative language', description: 'visual, auditory, tactile imagery — plus metaphor, simile, personification, and how they create emotional impact.' },
  { number: 3, title: 'juxtaposition & parallelism', description: 'placing contrasting ideas side by side (juxtaposition) and using matching grammatical structure (parallelism) for emphasis.' },
  { number: 4, title: 'anaphora, antithesis & repetition', description: 'anaphora (repeated openings), antithesis (contrasted opposites), and repetition — all as tools of emphasis and rhythm.' },
  { number: 5, title: 'polysyndeton & asyndeton', description: 'adding many conjunctions (polysyndeton, slow/overwhelming) vs. removing them (asyndeton, fast/forceful) — know the effect of each.' },
  { number: 6, title: 'sentence variety & formal vs informal style', description: 'mixing short and long sentences for rhythm, and the difference between formal, informal, and colloquial register.' },
]

export default function LangUnit4Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 4, title: 'style', examWeight: '11–14%', description: 'the how of writing — diction, syntax, figurative language, and every device that shapes a reader\'s experience.' }}
      topics={topics}
      basePath="/lang/unit-4"
      courseHref="/lang"
    />
  )
}
