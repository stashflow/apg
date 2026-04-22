import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'word choice & sentence structure', description: 'advanced diction and syntax — fragments, periodic, cumulative.' },
  { number: 2, title: 'irony, satire & figurative language', description: 'verbal and situational irony; satirical techniques; hyperbole; metaphor; simile; allusion.' },
]

export default function LangUnit8Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 8, title: 'stylistic choices & frq mastery', examWeight: '11–14%', description: 'advanced style devices plus complete FRQ mastery for all three essay types.' }}
      topics={topics}
      basePath="/lang/unit-8"
      courseHref="/lang"

      examDate={{ date: 'Wednesday, May 13, 2026', time: '8:00 AM' }}
    />
  )
}
