import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'line of reasoning', description: 'how claims connect logically — thesis to subclaims to evidence to conclusion.' },
  { number: 2, title: 'inductive & deductive reasoning', description: 'specific → general vs general → specific reasoning patterns.' },
  { number: 3, title: 'analogy as reasoning', description: 'using comparison to make abstract ideas concrete and persuasive.' },
  { number: 4, title: 'logical fallacies', description: 'straw man, ad hominem, slippery slope, false dilemma, hasty generalization, circular reasoning.' },
]

export default function LangUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 3, title: 'reasoning & organization', examWeight: '13–16%', description: 'how arguments are built and structured — the highest-weighted unit on the AP Lang exam.' }}
      topics={topics}
      basePath="/lang/unit-3"
      courseHref="/lang"

      examDate={{ date: 'Wednesday, May 13, 2026', time: '8:00 AM' }}
    />
  )
}
