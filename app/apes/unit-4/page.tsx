import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'plate tectonics', description: 'tectonic plates, convergent/divergent/transform boundaries, earthquakes, volcanoes, and soil formation.', videoId: 'QuUJwQO9Idk' },
  { number: 2, title: 'soil formation', description: 'parent material, weathering, O-A-B-C-R horizons, soil texture, permeability, and fertility.', videoId: 'tqYxSoTbAd4' },
  { number: 3, title: 'watersheds', description: 'watershed structure, groundwater vs. surface water, aquifer types, and water table dynamics.', videoId: 'xpATJVsnVOo' },
  { number: 4, title: 'atmospheric circulation', description: 'Hadley/Ferrel/Polar cells, trade winds, Coriolis effect, rain shadows, and climate zones.', videoId: 'PDEcAxfSYaI' },
  { number: 5, title: 'ocean currents', description: 'thermohaline circulation, El Niño/La Niña (ENSO), upwelling, and climate impacts.', videoId: 'UuGrBhK2c7U' },
]

export default function APESUnit4Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources', examWeight: '10–15%', description: 'earth\'s physical systems — geology, soil, atmosphere, and ocean currents.' }}
      topics={topics}
      basePath="/apes/unit-4"
      courseHref="/apes"
      videoId="T5YzZxMBg_0"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
