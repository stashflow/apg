import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'energy transfer & trophic levels', description: 'how energy flows through ecosystems, the 10% rule, and why energy is lost at each level.', videoId: 'SCKJJSsKqQY' },
  { number: 2, title: 'food chains & food webs', description: 'producers, consumers, decomposers — how energy moves through ecosystems.', videoId: 'SCKJJSsKqQY' },
  { number: 3, title: 'trophic levels & 10% rule', description: 'energy pyramids, biomass, and ecological efficiency.', videoId: 'tFvphrq_xsc' },
  { number: 4, title: 'primary productivity', description: 'GPP vs NPP, limiting factors, and calculations.', videoId: 'tRXp-WPnjxE' },
  { number: 5, title: 'terrestrial vs aquatic biomes', description: 'characteristics of major biomes and their distributions.' },
  { number: 6, title: 'biogeochemical cycles', description: 'carbon, nitrogen, phosphorus, hydrologic — pathways and disruptions.', videoId: 'pFrfOnw8TFs' },
  { number: 7, title: 'ecological succession', description: 'primary vs secondary, pioneer & climax communities.', videoId: '2g4ygzsjXNg' },
]

export default function APESUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 1, title: 'the living world: ecosystems', examWeight: '6–8%', description: 'the foundation of APES — energy flow, nutrient cycling, and ecosystem dynamics.' }}
      topics={topics}
      basePath="/apes/unit-1"
      courseHref="/apes"
      videoId="-IMCElvN0lk"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
