import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'air pollutants', description: 'primary vs. secondary pollutants, criteria pollutants, CO, SO₂, NOₓ, particulate matter, and VOCs.' },
  { number: 2, title: 'smog', description: 'photochemical smog formation, ground-level ozone, thermal inversions, and LA vs. London smog.' },
  { number: 3, title: 'acid rain', description: 'SO₂ and NOₓ sources, wet vs. dry deposition, pH effects on aquatic and terrestrial ecosystems.' },
  { number: 4, title: 'ozone depletion', description: 'stratospheric ozone, CFC chemistry, the ozone hole, UV radiation effects, and the Montreal Protocol.' },
  { number: 5, title: 'indoor air pollution', description: 'radon, VOCs, asbestos, CO, secondhand smoke — sources, health effects, and ventilation solutions.' },
]

export default function APESUnit7Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution', examWeight: '7–10%', description: 'air pollutants, smog, acid rain, ozone depletion, and indoor air quality.' }}
      topics={topics}
      basePath="/apes/unit-7"
      videoId="Bp_BXxCBf-8"
