import { CourseLayout } from '@/components/course-layout'
import type { Unit } from '@/components/course-layout'

const units: Unit[] = [
  {
    number: 1,
    title: 'the living world: ecosystems',
    examWeight: '6–8%',
    topics: [
      'food chains & food webs',
      'trophic levels',
      'primary productivity',
      'biogeochemical cycles',
      'ecological succession',
    ],
  },
  {
    number: 2,
    title: 'the living world: biodiversity',
    examWeight: '6–8%',
    topics: [
      'ecosystem diversity',
      'species diversity',
      'genetic diversity',
      'invasive species',
      'habitat fragmentation',
      'endangered species',
    ],
  },
  {
    number: 3,
    title: 'populations',
    examWeight: '10–15%',
    topics: [
      'carrying capacity',
      'population growth models',
      'demographic transition model',
      'survivorship curves',
      'human population growth',
    ],
  },
  {
    number: 4,
    title: 'earth systems & resources',
    examWeight: '10–15%',
    topics: [
      'plate tectonics',
      'soil formation',
      'watersheds',
      'atmospheric circulation',
      'ocean currents',
    ],
  },
  {
    number: 5,
    title: 'land & water use',
    examWeight: '10–15%',
    topics: [
      'agriculture & irrigation',
      'deforestation',
      'urbanization',
      'fisheries',
      'mining',
    ],
  },
  {
    number: 6,
    title: 'energy resources & consumption',
    examWeight: '10–15%',
    topics: [
      'fossil fuels',
      'renewable energy',
      'nuclear energy',
      'energy efficiency',
      'sustainability',
    ],
  },
  {
    number: 7,
    title: 'atmospheric pollution',
    examWeight: '7–10%',
    topics: [
      'air pollutants',
      'smog',
      'acid rain',
      'ozone depletion',
      'indoor air pollution',
    ],
  },
  {
    number: 8,
    title: 'aquatic & terrestrial pollution',
    examWeight: '7–10%',
    topics: [
      'water pollution',
      'eutrophication',
      'waste disposal',
      'oil spills',
      'plastic pollution',
    ],
  },
  {
    number: 9,
    title: 'global change',
    examWeight: '15–20%',
    topics: [
      'climate change & greenhouse gases',
      'carbon cycle',
      'sea level rise',
      'mitigation & adaptation',
      'environmental laws & treaties',
      'apes formulas & calculations',
      'frq practice',
    ],
  },
]

export default function APESPage() {
  return (
    <CourseLayout
      course={{
        id: 'apes',
        label: 'ap environmental science',
        short: 'apes',
        description: 'the interdisciplinary study of Earth\'s systems, human impacts, and solutions. master every ecosystem, cycle, and crisis for a 5.',
        banner: '/images/enviro-banner.jpg',
        accent: '#22c55e',
        accentLight: '#86efac',
        bgClass: 'bg-enviro-green',
        examDate: 'May 15, 2025 — morning session (8:00 AM ET)',
        units,
      }}
      basePath="/apes"
    />
  )
}
