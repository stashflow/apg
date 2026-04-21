import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'introduction to ecosystems', description: 'biotic & abiotic factors, food chains, food webs, trophic levels, energy transfer, keystone species, and the 10% rule.', videoId: '-IMCElvN0lk', quizletUrl: 'https://quizlet.com/1168266844/apes-introduction-to-ecosystems-flash-cards/?i=3obpbv&x=1jqt' },
  { number: 2, title: 'terrestrial biomes', description: 'the 8 major biomes, precipitation vs temperature, soil types, and biodiversity hotspots.', videoId: 'DliF5uQmtn0', quizletUrl: 'https://quizlet.com/1168367442/apes-terrestrial-biomes-flash-cards/?i=3obpbv&x=1jqt' },
  { number: 3, title: 'aquatic biomes', description: 'freshwater vs marine ecosystems, coral reefs, estuaries, and wetlands.', quizletUrl: 'https://quizlet.com/1168368961/apes-primary-productivity-flash-cards/?i=3obpbv&x=1jqt' },
  { number: 4, title: 'carbon cycle', description: 'carbon sources, sinks, reservoirs, and human disruptions to the cycle.' },
  { number: 5, title: 'nitrogen cycle', description: 'nitrogen fixation, nitrification, denitrification, and agricultural impacts.' },
  { number: 6, title: 'phosphorus cycle', description: 'sedimentary cycle, limiting nutrient, and eutrophication.' },
  { number: 7, title: 'hydrologic cycle', description: 'evaporation, transpiration, precipitation, runoff, and groundwater.' },
  { number: 8, title: 'primary productivity', description: 'GPP vs NPP, limiting factors, and calculations.', videoId: '_aSyn68JmZg' },
  { number: 9, title: 'trophic levels & energy', description: 'energy transfer, 10% rule, and ecological pyramids.', quizletUrl: 'https://quizlet.com/1168369785/apes-ecological-succession-flash-cards/?i=3obpbv&x=1jqt' },
  { number: 10, title: 'food chains & webs', description: 'producers, consumers, decomposers, and keystone species.' },
  { number: 11, title: 'ecological succession', description: 'primary vs secondary succession, pioneer & climax communities.' },
]

export default function APESUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 1, title: 'the living world: ecosystems', examWeight: '6–8%', description: 'the foundation of APES — energy flow, nutrient cycling, and ecosystem dynamics.' }}
      topics={topics}
      basePath="/apes/unit-1"
      courseHref="/apes"
      videoId="tmSmdUCw0sk"
      examDate={{ date: 'Friday, May 15, 2026', time: '8:00 AM' }}
    />
  )
}
