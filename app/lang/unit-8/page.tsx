import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'word choice & sentence structure', description: 'advanced diction and syntax — fragments, periodic, cumulative.' },
  { number: 2, title: 'irony, satire & hyperbole', description: 'verbal, situational, dramatic irony; satirical techniques; hyperbole.' },
  { number: 3, title: 'metaphor, simile, allusion', description: 'high-frequency devices and their rhetorical effects.' },
  { number: 4, title: 'parallelism & repetition', description: 'sentence and paragraph level parallelism, anaphora, epistrophe.' },
  { number: 5, title: 'multiple-choice strategies', description: 'passage reading, question types, and elimination techniques.' },
  { number: 6, title: 'frq timing strategies', description: 'pacing for all three essays and time management.' },
  { number: 7, title: 'synthesis essay mastery', description: 'source reading, 3 of 6+ sources, citation integration.' },
  { number: 8, title: 'rhetorical analysis mastery', description: 'DACE method, body structure, and 4 vs 6 scoring.' },
  { number: 9, title: 'argument essay mastery', description: 'building arguments, outside evidence, avoiding fallacies.' },
  { number: 10, title: 'sophistication strategies', description: 'what earns the point and how to demonstrate it.' },
  { number: 11, title: 'common thesis mistakes', description: 'vague claims, plot summary, and how to fix them.' },
  { number: 12, title: 'rubric breakdown', description: 'understanding scoring criteria for all three FRQs.' },
]

export default function LangUnit8Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 8, title: 'stylistic choices & frq mastery', examWeight: '11–14%', description: 'advanced style devices plus complete FRQ mastery for all three essay types.' }}
      topics={topics}
      basePath="/lang/unit-8"
      courseHref="/lang"

      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
