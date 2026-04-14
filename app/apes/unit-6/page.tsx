import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'fossil fuels', description: 'coal, oil, and natural gas — formation, extraction, burning byproducts, and EROI.' },
  { number: 2, title: 'renewable energy', description: 'solar, wind, hydroelectric, geothermal, and biomass — advantages, limitations, and land use.' },
  { number: 3, title: 'nuclear energy', description: 'fission vs. fusion, pros/cons, waste storage, Chernobyl and Fukushima as case studies.' },
  { number: 4, title: 'energy efficiency', description: 'energy return on investment (EROI), efficiency calculations, CAFE standards, and conservation.' },
  { number: 5, title: 'sustainability', description: 'sustainable development goals, cogeneration, net metering, and transitioning off fossil fuels.' },
]

export default function APESUnit6Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption', examWeight: '10–15%', description: 'fossil fuels, renewables, nuclear power, and energy efficiency — tradeoffs and sustainability.' }}
      topics={topics}
      basePath="/apes/unit-6"
      courseHref="/apes"
      videoId="kGS5gx_KLG0"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
