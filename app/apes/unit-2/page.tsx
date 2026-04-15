import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'ecosystem diversity', description: 'variety of habitats, niches, and ecological communities.', videoId: 'gMavNnExCQI' },
  { number: 2, title: 'ecosystem services', description: 'provisioning, regulating, cultural, and supporting services.' },
  { number: 3, title: 'species diversity', description: 'richness vs evenness, Simpson\'s and Shannon indices.', videoId: '3QMSojbUHKk' },
  { number: 4, title: 'genetic diversity', description: 'allelic variation, inbreeding depression, and extinction prevention.', videoId: '3QMSojbUHKk' },
  { number: 5, title: 'invasive species', description: 'displacement of natives, case studies, and management.', videoId: 'ydncbgFiEQQ' },
  { number: 6, title: 'habitat fragmentation', description: 'edge effects, corridors, and minimum viable populations.', videoId: 'ydncbgFiEQQ' },
  { number: 7, title: 'endangered species', description: 'IUCN categories, ESA, captive breeding, and recovery.', videoId: 'gLaT0_hyVQk' },
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
