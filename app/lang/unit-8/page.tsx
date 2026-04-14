import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'word choice & sentence structure', description: 'advanced diction analysis — denotation, connotation, register — plus syntax effects: fragments, periodic sentences, cumulative sentences.' },
  { number: 2, title: 'irony, satire & hyperbole', description: 'verbal, situational, and dramatic irony; satirical techniques; hyperbole for emphasis — and how to write about each on the exam.' },
  { number: 3, title: 'metaphor, simile, allusion & rhetorical question', description: 'four high-frequency devices: how they work, their rhetorical effect, and how to write about them analytically.' },
  { number: 4, title: 'parallel structure & repetition for emphasis', description: 'parallelism at sentence and paragraph level, anaphora, epistrophe, and how to use them in your own writing.' },
  { number: 5, title: 'synthesis essay mastery', description: 'source reading strategy, how to build a position using 3 of 6+ sources, citation integration, and scoring the full 6 points.' },
  { number: 6, title: 'rhetorical analysis essay mastery', description: 'the DACE method (Device, Audience, Claim, Effect), how to structure the body, and what separates a 4 from a 6.' },
  { number: 7, title: 'argument essay mastery', description: 'building an argument from scratch, using outside knowledge as evidence, avoiding logical fallacies, scoring sophistication.' },
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
