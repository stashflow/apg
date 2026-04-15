import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'introduction to ecosystems', description: 'biotic & abiotic factors, food chains, food webs, trophic levels, energy transfer, keystone species, and the 10% rule.', videoId: 'SCKJJSsKqQY', quizletUrl: 'https://quizlet.com/1168266844/apes-introduction-to-ecosystems-flash-cards/?i=3obpbv&x=1jqt' },
  { number: 2, title: 'terrestrial biomes', description: 'the 8 major biomes, precipitation vs temperature, soil types, and biodiversity hotspots.', videoId: 'tFvphrq_xsc' },
  { number: 3, title: 'primary productivity', description: 'GPP vs NPP, limiting factors, and calculations.', videoId: 'tRXp-WPnjxE' },
  { number: 4, title: 'biogeochemical cycles', description: 'carbon, nitrogen, phosphorus, hydrologic — pathways, reservoirs, and human disruptions.', videoId: 'pFrfOnw8TFs' },
  { number: 5, title: 'ecological succession', description: 'primary vs secondary succession, pioneer & climax communities, and disturbance ecology.', videoId: '2g4ygzsjXNg' },
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
