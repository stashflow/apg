import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'plate tectonics', description: 'convergent/divergent/transform boundaries, earthquakes, volcanoes.' },
  { number: 2, title: 'soil formation & erosion', description: 'weathering, horizons, texture, permeability, and erosion.' },
  { number: 3, title: 'watersheds & aquifers', description: 'groundwater vs surface water, aquifer types, water table.' },
  { number: 4, title: 'atmospheric layers', description: 'troposphere, stratosphere, mesosphere, thermosphere.' },
  { number: 5, title: 'global wind patterns', description: 'Hadley/Ferrel/Polar cells, trade winds, Coriolis effect.' },
  { number: 6, title: 'geography & climate', description: 'latitude, altitude, proximity to water, and rain shadows.' },
  { number: 7, title: 'el niño & la niña', description: 'ENSO cycle, ocean temperature changes, and global impacts.' },
  { number: 8, title: 'thermal inversion', description: 'temperature inversions, trapped pollutants, and smog.' },
  { number: 9, title: 'ocean currents', description: 'thermohaline circulation, upwelling, and climate effects.' },
]

export default function APESUnit4Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources', examWeight: '10–15%', description: 'earth\'s physical systems — geology, soil, atmosphere, and ocean currents.' }}
      topics={topics}
      basePath="/apes/unit-4"
      courseHref="/apes"

      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
