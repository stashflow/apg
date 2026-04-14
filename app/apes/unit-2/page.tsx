import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'ecosystem diversity', description: 'variety of habitats, niches, and ecological communities — why diversity stabilizes ecosystems.', videoId: 'DliF5uQmtn0' },
  { number: 2, title: 'species diversity', description: 'species richness vs. evenness, Simpson\'s and Shannon indices, and hotspots.', videoId: 'bBxLIgWpJnI' },
  { number: 3, title: 'genetic diversity', description: 'allelic variation, inbreeding depression, and why genetic diversity prevents extinction.', videoId: 'uz5lNPQLPUM' },
  { number: 4, title: 'invasive species', description: 'how invasives displace native species, case studies, and management strategies.', videoId: 'iqLV-D_mVy8' },
  { number: 5, title: 'habitat fragmentation', description: 'edge effects, island biogeography theory, corridors, and minimum viable populations.', videoId: 'dGnMniRCMsg' },
  { number: 6, title: 'endangered species', description: 'IUCN categories, the Endangered Species Act, captive breeding, and recovery plans.', videoId: 'y4WjAuIOLyE' },
]

export default function APESUnit2Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity', examWeight: '6–8%', description: 'three levels of biodiversity, threats to species, and conservation strategies.' }}
      topics={topics}
      basePath="/apes/unit-2"
      courseHref="/apes"
      videoId="OWqXAL1uJ3I"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
