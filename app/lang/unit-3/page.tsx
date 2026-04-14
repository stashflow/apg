import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'line of reasoning', description: 'how claims connect logically — the thread that ties thesis to subclaims to evidence to conclusion.' },
  { number: 2, title: 'inductive & deductive reasoning', description: 'bottom-up (specific → general) vs. top-down (general → specific) — and how to identify each in passages.' },
  { number: 3, title: 'cause & effect, compare & contrast', description: 'two common organizational modes — how writers use them and how to write about them in analysis essays.' },
  { number: 4, title: 'definition, classification & exemplification', description: 'three rhetorical strategies for developing ideas — how to identify and write about each one.' },
  { number: 5, title: 'organizational patterns', description: 'chronological, spatial, problem-solution, order of importance — how structure itself creates meaning.' },
  { number: 6, title: 'logical fallacies', description: 'straw man, ad hominem, slippery slope, circular reasoning, false dilemma, hasty generalization, red herring — define, identify, explain effect.' },
]

export default function LangUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 3, title: 'reasoning & organization', examWeight: '13–16%', description: 'how arguments are built and structured — the highest-weighted unit on the AP Lang exam.' }}
      topics={topics}
      basePath="/lang/unit-3"
      courseHref="/lang"
    />
  )
}
