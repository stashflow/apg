import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'carrying capacity', description: 'K, limiting factors (biotic & abiotic), and what happens when populations exceed K.', videoId: 'MzXaqjXpk50' },
  { number: 2, title: 'population growth models', description: 'exponential (J-curve) vs. logistic (S-curve) growth — equations, graphs, and exam traps.', videoId: 'NL-Q-C4HPFA' },
  { number: 3, title: 'demographic transition model', description: 'four stages of DTM, birth/death rates, and how development changes population structure.', videoId: 'NK7AiDgRpIc' },
  { number: 4, title: 'survivorship curves', description: 'type I, II, and III curves — examples for each and what they predict about populations.', videoId: 'YcFdWYyQxCs' },
  { number: 5, title: 'human population growth', description: 'total fertility rate, age-structure diagrams, pro-natalist vs. anti-natalist policies.', videoId: 'z7A8rHod20M' },
]

export default function APESUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations', examWeight: '10–15%', description: 'population dynamics, growth models, carrying capacity, and human population patterns.' }}
      topics={topics}
      basePath="/apes/unit-3"
      courseHref="/apes"
      videoId="AjlOxmEOa5U"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
