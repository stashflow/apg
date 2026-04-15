import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'ecosystem diversity', description: 'variety of ecosystems in a region — habitats, niches, and ecological communities.', videoId: 'gMavNnExCQI' },
  { number: 2, title: 'ecosystem services', description: 'provisioning, regulating, cultural, and supporting services that nature provides.' },
  { number: 3, title: 'species diversity', description: 'richness vs evenness, how to measure biodiversity, and why it matters.' },
  { number: 4, title: 'island biogeography', description: 'species-area relationship, immigration vs extinction, and habitat fragmentation.' },
  { number: 5, title: 'ecological tolerance', description: 'range of conditions species can survive, limiting factors, and distribution.' },
  { number: 6, title: 'natural disruptions', description: 'storms, fires, floods, droughts — ecosystem recovery and resilience.' },
  { number: 7, title: 'invasive species', description: 'characteristics, case studies, impacts on native species, and management.', videoId: 'ydncbgFiEQQ' },
  { number: 8, title: 'endangered species & extinction', description: 'causes, IUCN categories, ESA, and conservation strategies.', videoId: 'gLaT0_hyVQk' },
]

export default function APESUnit2Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity', examWeight: '6–8%', description: 'three levels of biodiversity, threats to species, and conservation strategies.' }}
      topics={topics}
      basePath="/apes/unit-2"
      courseHref="/apes"
      videoId="gMavNnExCQI"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
