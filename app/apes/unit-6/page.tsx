import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'fossil fuels', description: 'coal, oil, natural gas — formation, extraction, byproducts, EROI.' },
  { number: 2, title: 'global energy use', description: 'consumption patterns by country and sector.' },
  { number: 3, title: 'solar energy', description: 'photovoltaic cells, solar thermal, advantages and limitations.' },
  { number: 4, title: 'wind energy', description: 'turbines, wind farms, intermittency, and land use.' },
  { number: 5, title: 'hydroelectric power', description: 'dams, run-of-river, pros/cons, and ecological impacts.' },
  { number: 6, title: 'geothermal energy', description: 'heat pumps, power plants, and geographic limitations.' },
  { number: 7, title: 'biofuels & ethanol', description: 'corn ethanol, biodiesel, land use, and EROI.' },
  { number: 8, title: 'nuclear energy', description: 'fission vs fusion, waste, Chernobyl, Fukushima.' },
  { number: 9, title: 'energy efficiency', description: 'EROI calculations, CAFE standards, conservation.' },
  { number: 10, title: 'cogeneration', description: 'combined heat and power, efficiency gains.' },
]

export default function APESUnit6Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption', examWeight: '10–15%', description: 'fossil fuels, renewables, nuclear power, and energy efficiency — tradeoffs and sustainability.' }}
      topics={topics}
      basePath="/apes/unit-6"
      courseHref="/apes"

      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
