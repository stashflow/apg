import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'greenhouse effect', description: 'enhanced effect, CO₂, methane, N₂O, global warming potential.' },
  { number: 2, title: 'carbon cycle & feedbacks', description: 'sources, sinks, permafrost, ice-albedo feedback.', videoId: 'pFrfOnw8TFs' },
  { number: 3, title: 'ocean warming & acidification', description: 'CO₂ absorption, pH changes, coral bleaching.' },
  { number: 4, title: 'sea level rise', description: 'thermal expansion, glacial melt, vulnerable regions.' },
  { number: 5, title: 'climate impacts on biodiversity', description: 'range shifts, phenology, extinctions.' },
  { number: 6, title: 'climate tipping points', description: 'permafrost, ice sheets, and irreversible changes.' },
  { number: 7, title: 'mitigation strategies', description: 'carbon taxes, cap-and-trade, carbon capture.' },
  { number: 8, title: 'climate treaties', description: 'Montreal Protocol, Kyoto Protocol, Paris Agreement.' },
  { number: 9, title: 'carbon footprint', description: 'calculating personal and national carbon emissions.' },
  { number: 10, title: 'environmental laws', description: 'Clean Air Act, Clean Water Act, NEPA, ESA.' },
  { number: 11, title: 'apes formulas', description: 'EROI, NPP, growth rate, percent change, LD50, pH.' },
  { number: 12, title: 'frq practice', description: 'identify-describe-explain-solve framework and strategies.' },
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
