import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'primary pollutants', description: 'CO, SO₂, NOₓ, particulate matter, VOCs — sources and effects.' },
  { number: 2, title: 'secondary pollutants', description: 'ground-level ozone, smog formation from reactions.' },
  { number: 3, title: 'photochemical vs industrial smog', description: 'LA-type vs London-type smog, formation, health effects.' },
  { number: 4, title: 'thermal inversions', description: 'trapped pollutants, temperature layers, and smog events.' },
  { number: 5, title: 'acid rain', description: 'SO₂/NOₓ sources, wet/dry deposition, ecosystem effects.' },
  { number: 6, title: 'ozone depletion', description: 'CFCs, ozone hole, UV effects, Montreal Protocol.' },
  { number: 7, title: 'noise pollution', description: 'decibels, health effects, and mitigation.' },
  { number: 8, title: 'reducing air pollution', description: 'scrubbers, catalytic converters, regulations.' },
  { number: 9, title: 'indoor air pollution', description: 'radon, VOCs, asbestos, CO, and ventilation.' },
]

export default function APESUnit7Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution', examWeight: '7–10%', description: 'air pollutants, smog, acid rain, ozone depletion, and indoor air quality.' }}
      topics={topics}
      basePath="/apes/unit-7"
      courseHref="/apes"

      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
