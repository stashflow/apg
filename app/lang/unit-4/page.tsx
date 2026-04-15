import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'diction & syntax', description: 'word choice (connotation, denotation, register) and sentence structure.' },
  { number: 2, title: 'periodic vs loose sentences', description: 'delaying the main clause for suspense vs front-loading it for clarity.' },
  { number: 3, title: 'figurative language & devices', description: 'imagery, metaphor, simile, personification, understatement, paradox, metonymy, synecdoche, juxtaposition, parallelism, repetition.' },
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
