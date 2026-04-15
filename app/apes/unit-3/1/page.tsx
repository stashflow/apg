import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is carrying capacity?',
  },
  {
    type: 'body',
    content: 'carrying capacity (K) is the maximum population size that an environment can sustain indefinitely, given the available resources (food, water, habitat, etc.). when a population reaches carrying capacity, resources become limiting, and population growth slows or stops.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**K** — the symbol for carrying capacity in ecological equations',
      '**dynamic, not fixed** — K can change if resources change (drought reduces K, restoration increases K)',
      '**species-specific** — different species have different carrying capacities in the same environment',
      '**density-dependent** — as population approaches K, competition for resources intensifies',
    ],
  },
  {
    type: 'heading',
    content: 'limiting factors',
  },
  {
    type: 'body',
    content: 'limiting factors are resources or conditions that restrict population growth. the factor in shortest supply (or most stressful) determines carrying capacity.',
  },
  {
    type: 'subheading',
    content: 'density-dependent limiting factors',
  },
  {
    type: 'body',
    content: 'factors whose effects intensify as population density increases:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**competition** — as population grows, individuals compete more intensely for limited resources',
      '**predation** — predators may focus on abundant prey, increasing mortality',
      '**disease** — spreads more easily in dense populations (more contact)',
      '**parasitism** — parasites spread faster when hosts are abundant',
      '**waste accumulation** — toxins build up in dense populations',
    ],
  },
  {
    type: 'subheading',
    content: 'density-independent limiting factors',
  },
  {
    type: 'body',
    content: 'factors that affect population regardless of density:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**weather events** — drought, floods, extreme cold, hurricanes',
      '**natural disasters** — volcanic eruptions, earthquakes, wildfires',
      '**human activities** — habitat destruction, pollution, pesticides',
      '**seasonal changes** — temperature and light changes affect many species',
    ],
  },
  {
    type: 'examtip',
    content: 'density-dependent factors cause negative feedback that stabilizes populations near K. density-independent factors cause random fluctuations regardless of population size. disease = density-dependent; drought = density-independent.',
  },
  {
    type: 'heading',
    content: 'what happens near carrying capacity?',
  },
  {
    type: 'body',
    content: 'as a population approaches K, several things occur:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**resource competition increases** — less food/water/space per individual',
      '**birth rate decreases** — fewer resources means less reproduction',
      '**death rate increases** — starvation, disease, and stress increase mortality',
      '**growth rate approaches zero** — births ≈ deaths, population stabilizes',
    ],
  },
  {
    type: 'heading',
    content: 'overshooting carrying capacity',
  },
  {
    type: 'body',
    content: 'populations can temporarily exceed carrying capacity (overshoot) if they grow faster than resources can respond. this leads to:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**resource depletion** — consumption exceeds regeneration',
      '**dieback** — rapid population crash as resources run out',
      '**reduced K** — environmental damage may permanently lower carrying capacity',
      '**boom-and-bust cycles** — repeated overshoot and crash',
    ],
  },
  {
    type: 'body',
    content: 'the classic example is the reindeer on St. Matthew Island: 29 reindeer introduced in 1944 grew to 6,000 by 1963, then crashed to 42 by 1966 after overgrazing destroyed their food supply.',
  },
  {
    type: 'heading',
    content: 'human carrying capacity',
  },
  {
    type: 'body',
    content: 'estimating Earth\'s human carrying capacity is controversial because:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**technology changes K** — agriculture, industry, and medicine have repeatedly raised human carrying capacity',
      '**consumption varies** — carrying capacity depends on lifestyle (more Americans vs. more Indians)',
      '**trade redistributes resources** — rich countries import carrying capacity from poor countries',
      '**environmental degradation** — pollution and climate change may be reducing long-term K',
      '**estimates range widely** — from 2 billion to 15+ billion depending on assumptions',
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam may ask whether humans have exceeded carrying capacity. evidence of overshoot includes: depleted fisheries, deforestation, freshwater shortages, climate change, and loss of biodiversity. but technology continues to alter the equation.',
  },
  {
    type: 'frqtip',
    content: 'FRQs often describe a population and ask why it crashed or stabilized. always connect to carrying capacity: identify the limiting factor, explain whether it\'s density-dependent or independent, and describe how it affects birth/death rates.',
  },
]

export default function APESU3T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations' }}
      topic={{
        number: 1,
        title: 'carrying capacity',
        keyTerms: ['carrying capacity (K)', 'limiting factor', 'density-dependent', 'density-independent', 'overshoot', 'dieback'],
      }}
      sections={sections}
      next={{ href: '/apes/unit-3/2', title: 'population growth models' }}
      courseHref="/apes"
      unitHref="/apes/unit-3"
    />
  )
}
