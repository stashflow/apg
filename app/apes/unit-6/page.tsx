import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'renewable vs nonrenewable energy', description: 'energy types, sustainability, and environmental impacts.', videoId: 'v-TPSeF1_wE' },
  { number: 2, title: 'global energy consumption', description: 'consumption patterns by country, sector, and fuel type.' },
  { number: 3, title: 'fuel types & uses', description: 'fossil fuels, nuclear, and renewables — formation and extraction.' },
  { number: 4, title: 'fossil fuels', description: 'coal, oil, natural gas — EROI, reserves, and environmental costs.' },
  { number: 5, title: 'nuclear power', description: 'fission vs fusion, waste, accidents, and safety.' },
  { number: 6, title: 'solar energy', description: 'photovoltaic cells, solar thermal, advantages and limitations.' },
  { number: 7, title: 'hydroelectric power', description: 'dams, run-of-river, pros/cons, and ecological impacts.' },
  { number: 8, title: 'geothermal energy', description: 'heat pumps, power plants, and geographic limitations.' },
  { number: 9, title: 'hydrogen fuel cells', description: 'electrolysis, fuel cells, and clean energy potential.' },
  { number: 10, title: 'wind energy', description: 'turbines, wind farms, intermittency, and land use.' },
  { number: 11, title: 'energy conservation', description: 'efficiency improvements, CAFE standards, and LEED buildings.' },
]

export default function APESUnit6Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption', examWeight: '10–15%', description: 'fossil fuels, renewables, nuclear power, and energy efficiency — tradeoffs and sustainability.' }}
      topics={topics}
      basePath="/apes/unit-6"
      courseHref="/apes"
      videoId="h-KrPlUy0Ek"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
