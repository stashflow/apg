import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'climate change & greenhouse gases', description: 'the enhanced greenhouse effect, CO₂, methane, N₂O, water vapor — sources and global warming potential.' },
  { number: 2, title: 'carbon cycle', description: 'carbon sources, sinks, feedbacks (permafrost, ice-albedo), and the role of the ocean.', videoId: 'pFrfOnw8TFs' },
  { number: 3, title: 'sea level rise', description: 'thermal expansion, glacial melt, rate of rise, vulnerable regions, and projected impacts.' },
  { number: 4, title: 'mitigation & adaptation', description: 'carbon taxes, cap-and-trade, carbon capture, renewable transitions, and community adaptation.' },
  { number: 5, title: 'environmental laws & treaties', description: 'Clean Air Act, Clean Water Act, NEPA, ESA, Paris Agreement, Kyoto Protocol — know them all.' },
  { number: 6, title: 'apes formulas & calculations', description: 'EROI, NPP, population growth rate, percent change, LD50, pH — every calculation the FRQ tests.' },
  { number: 7, title: 'frq practice', description: 'structured FRQ strategies, identify-describe-explain-solve framework, and high-scoring sample answers.' },
]

export default function APESUnit9Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change', examWeight: '15–20%', description: 'the highest-weighted unit — climate change, treaties, formulas, and FRQ mastery.' }}
      topics={topics}
      basePath="/apes/unit-9"
      courseHref="/apes"
    />
  )
}
