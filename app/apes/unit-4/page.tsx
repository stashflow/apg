import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'plate tectonics', description: 'convergent/divergent/transform boundaries, earthquakes, volcanoes.' },
  { number: 2, title: 'soil formation & composition', description: 'weathering, horizons, texture, permeability, and erosion.' },
  { number: 3, title: 'soil erosion & conservation', description: 'causes of erosion, desertification, and conservation methods.' },
  { number: 4, title: 'earth\'s atmosphere', description: 'atmospheric composition, layers, and properties.' },
  { number: 5, title: 'global wind patterns', description: 'Hadley/Ferrel/Polar cells, trade winds, Coriolis effect.', videoId: 'zVhS19LNeH4' },
  { number: 6, title: 'watersheds', description: 'drainage basins, groundwater, aquifers, and water table.' },
  { number: 7, title: 'solar radiation & earth\'s seasons', description: 'tilt, seasons, latitude effects on climate.' },
  { number: 8, title: 'earth\'s geography & climate', description: 'latitude, altitude, proximity to water, and rain shadows.' },
  { number: 9, title: 'el niño & la niña', description: 'ENSO cycle, ocean temperature changes, and global impacts.', videoId: 'Am3LAfIIm7M' },
]

export default function APESUnit4Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources', examWeight: '10–15%', description: 'earth\'s physical systems — geology, soil, atmosphere, and ocean currents.' }}
      topics={topics}
      basePath="/apes/unit-4"
      courseHref="/apes"
      videoId="z-rAgbQ2AoA"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
