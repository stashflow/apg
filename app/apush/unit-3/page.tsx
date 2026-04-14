import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'french & indian war & its aftermath', description: 'the war that broke the peace and triggered the revolutionary crisis through taxation and debt.' },
  { number: 2, title: 'causes of the american revolution', description: 'from salutary neglect to stamp act to boston massacre — the escalating colonial grievances.' },
  { number: 3, title: 'common sense & the declaration of independence', description: 'paine\'s radical argument and jefferson\'s enlightenment philosophy made permanent.' },
  { number: 4, title: 'revolutionary war — battles & turning points', description: 'saratoga, valley forge, french alliance, yorktown — the military story of independence.' },
  { number: 5, title: 'articles of confederation & its weaknesses', description: 'the first government and why it failed — shays\' rebellion as the turning point.' },
  { number: 6, title: 'constitutional convention & the constitution', description: 'great compromise, 3/5 compromise, separation of powers, checks & balances.' },
  { number: 7, title: 'federalists vs. anti-federalists', description: 'the ratification debate — hamilton, madison, jay vs. the anti-federalist papers.' },
  { number: 8, title: 'washington\'s presidency & precedents', description: 'cabinet, farewell address, whiskey rebellion — how the first president shaped the office.' },
  { number: 9, title: 'french revolution\'s impact on the us', description: 'the ideological split between jeffersonian and hamiltonian visions of the new republic.' },
  { number: 10, title: 'adams & alien/sedition acts', description: 'the danger of partisan politics and the virginia/kentucky resolutions as early nullification.' },
]

export default function APUSHUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 3, title: 'period 3 — 1754–1800', examWeight: '10–17%', description: 'the founding era — one of the highest-weighted units. the revolution, constitution, and early republic contain endless FRQ and DBQ material. know every argument, compromise, and precedent cold.' }}
      topics={topics}
      basePath="/apush/unit-3"
      courseHref="/apush"
    />
  )
}
