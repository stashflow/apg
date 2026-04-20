import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'introduction to biodiversity', description: 'three levels of biodiversity — genetic, species, and ecosystem diversity.', videoId: 'gMavNnExCQI' },
  { number: 2, title: 'ecosystem services', description: 'provisioning, regulating, cultural, and supporting services that nature provides.', videoId: '0gadVwWOHo0' },
  { number: 3, title: 'island biogeography', description: 'species-area relationship, immigration vs extinction, and habitat fragmentation.', videoId: '3QMSojbUHKk' },
  { number: 4, title: 'ecological tolerance', description: 'range of conditions species can survive, limiting factors, and distribution.' },
  { number: 5, title: 'natural disruptions', description: 'storms, fires, floods, droughts — ecosystem recovery and resilience.' },
  { number: 6, title: 'adaptations', description: 'behavioral, physiological, and structural adaptations for survival.' },
  { number: 7, title: 'ecological niches', description: 'fundamental vs realized niche, competitive exclusion, and resource partitioning.' },
  { number: 8, title: 'invasive species', description: 'characteristics, case studies, impacts on native species, and management.' },
  { number: 9, title: 'endangered species', description: 'causes of extinction, IUCN categories, and conservation strategies.' },
  { number: 10, title: 'human impacts on biodiversity', description: 'habitat destruction, overexploitation, pollution, and climate change.' },
]

export default function APESUnit2Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity', examWeight: '6–8%', description: 'three levels of biodiversity, threats to species, and conservation strategies.' }}
      topics={topics}
      basePath="/apes/unit-2"
      courseHref="/apes"
      videoId="V0_LQ3RSuCo"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
