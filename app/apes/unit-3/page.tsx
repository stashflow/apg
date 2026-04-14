import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'carrying capacity', description: 'K, limiting factors (biotic & abiotic), and exceeding K.', videoId: 'MzXaqjXpk50' },
  { number: 2, title: 'population growth models', description: 'exponential (J-curve) vs logistic (S-curve) growth.', videoId: 'NL-Q-C4HPFA' },
  { number: 3, title: 'r-selected vs K-selected', description: 'reproductive strategies, examples, and ecological implications.' },
  { number: 4, title: 'generalist vs specialist', description: 'niche breadth, adaptability, and extinction risk.' },
  { number: 5, title: 'survivorship curves', description: 'type I, II, and III curves with examples.', videoId: 'YcFdWYyQxCs' },
  { number: 6, title: 'age-structure diagrams', description: 'population pyramids and what they predict.' },
  { number: 7, title: 'demographic transition model', description: 'four stages, birth/death rates, and development.', videoId: 'NK7AiDgRpIc' },
  { number: 8, title: 'human population growth', description: 'TFR, replacement rate, and population policies.', videoId: 'z7A8rHod20M' },
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
