import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'food chains & food webs', description: 'producers, consumers, decomposers — how energy moves through an ecosystem step by step.' },
  { number: 2, title: 'trophic levels', description: 'energy pyramids, the 10% rule, biomass at each level, and ecological efficiency.' },
  { number: 3, title: 'primary productivity', description: 'GPP vs. NPP, limiting factors, and how to calculate net primary productivity on the exam.' },
  { number: 4, title: 'biogeochemical cycles', description: 'carbon, nitrogen, phosphorus, and the hydrologic cycle — all pathways, reservoirs, and human disruptions.' },
  { number: 5, title: 'ecological succession', description: 'primary vs. secondary succession, pioneer & climax communities, and real-world examples.' },
]

export default function APESUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 1, title: 'the living world: ecosystems', examWeight: '6–8%', description: 'the foundation of APES — energy flow, nutrient cycling, and ecosystem dynamics.' }}
      topics={topics}
      basePath="/apes/unit-1"
      videoId="lZ3bPUKo5zc"
