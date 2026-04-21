import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'generalist vs specialist species', description: 'niche breadth, adaptability, and extinction risk.' },
  { number: 2, title: 'k-selected vs r-selected species', description: 'reproductive strategies, examples, and ecological implications.' },
  { number: 3, title: 'survivorship curves', description: 'type I, II, and III curves with examples.', videoId: 'EkLIxk_um9A' },
  { number: 4, title: 'carrying capacity', description: 'K, limiting factors (biotic & abiotic), and exceeding K.' },
  { number: 5, title: 'population growth & resource availability', description: 'exponential (J-curve) vs logistic (S-curve) growth.' },
  { number: 6, title: 'age-structure diagrams', description: 'population pyramids and what they predict.', videoId: '3vab5_8g2dY' },
  { number: 7, title: 'total fertility rate', description: 'TFR, replacement rate, and population projections.' },
  { number: 8, title: 'human population dynamics', description: 'historical growth, population momentum, and policies.', videoId: 'ZNEkP_4rlS4' },
  { number: 9, title: 'demographic transition', description: 'four stages, birth/death rates, and development.', videoId: 'NK7AiDgRpIc' },
]

export default function APESUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations', examWeight: '10–15%', description: 'population dynamics, growth models, carrying capacity, and human population patterns.' }}
      topics={topics}
      basePath="/apes/unit-3"
      courseHref="/apes"
      videoId="7ITb2BWS8HM"
      examDate={{ date: 'Friday, May 15, 2026', time: '8:00 AM' }}
    />
  )
}
