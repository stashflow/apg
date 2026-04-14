import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'introduction to ecosystems', description: 'biotic vs. abiotic factors, ecosystem structure, and what makes an ecosystem function.' },
  { number: 2, title: 'terrestrial biomes', description: 'all 8 major biomes — climate, vegetation, animals, and exam-ready characteristics.' },
  { number: 3, title: 'aquatic biomes', description: 'freshwater and marine ecosystems, zones, and the species that inhabit them.' },
  { number: 4, title: 'the carbon cycle', description: 'carbon reservoirs, fluxes, photosynthesis, respiration, and how humans disrupt the cycle.' },
  { number: 5, title: 'the nitrogen cycle', description: 'nitrogen fixation, nitrification, denitrification, and why fertilizer runoff is a crisis.' },
  { number: 6, title: 'the phosphorus cycle', description: 'phosphorus in rock, soil, and water — and its critical link to eutrophication.' },
  { number: 7, title: 'the hydrologic cycle', description: 'evaporation, transpiration, precipitation, infiltration, and runoff — and human disruptions.' },
  { number: 8, title: 'primary productivity', description: 'GPP vs. NPP, limiting factors, and how productivity drives ecosystem energy.' },
  { number: 9, title: 'trophic levels & food webs', description: 'producers, consumers, decomposers, food chains vs. webs, and keystone species.' },
  { number: 10, title: 'energy flow & ecological efficiency', description: '10% rule, ecological pyramids, and why energy is lost at every trophic level.' },
]

export default function APESUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 1, title: 'the living world — ecosystems', examWeight: '6–8%', description: 'the foundation of APES. understand how energy flows, how nutrients cycle, and how every organism depends on its environment.' }}
      topics={topics}
      basePath="/apes/unit-1"
      courseHref="/apes"
    />
  )
}
