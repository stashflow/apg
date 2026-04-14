import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'line of reasoning', description: 'how claims connect logically — thesis to subclaims to evidence to conclusion.' },
  { number: 2, title: 'inductive & deductive reasoning', description: 'specific → general vs general → specific reasoning patterns.' },
  { number: 3, title: 'analogy as reasoning', description: 'using comparison to make abstract ideas concrete and persuasive.' },
  { number: 4, title: 'cause & effect', description: 'analyzing and writing about causal relationships.' },
  { number: 5, title: 'compare & contrast', description: 'using similarities and differences to develop arguments.' },
  { number: 6, title: 'definition, classification & exemplification', description: 'three strategies for developing and clarifying ideas.' },
  { number: 7, title: 'organizational patterns', description: 'chronological, spatial, problem-solution, order of importance.' },
  { number: 8, title: 'straw man & ad hominem', description: 'attacking a weakened version or attacking the person.' },
  { number: 9, title: 'slippery slope & false dilemma', description: 'exaggerated chain reactions and either/or reasoning.' },
  { number: 10, title: 'hasty generalization & circular reasoning', description: 'insufficient evidence and conclusions that assume themselves.' },
  { number: 11, title: 'faulty causation', description: 'post hoc fallacy and confusing correlation with causation.' },
]

export default function LangUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 3, title: 'reasoning & organization', examWeight: '13–16%', description: 'how arguments are built and structured — the highest-weighted unit on the AP Lang exam.' }}
      topics={topics}
      basePath="/lang/unit-3"
      courseHref="/lang"

      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
