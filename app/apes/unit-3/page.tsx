import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'carrying capacity', description: 'K, limiting factors (biotic & abiotic), and what happens when populations exceed K.' },
  { number: 2, title: 'population growth models', description: 'exponential (J-curve) vs. logistic (S-curve) growth — equations, graphs, and exam traps.' },
  { number: 3, title: 'demographic transition model', description: 'four stages of DTM, birth/death rates, and how development changes population structure.' },
  { number: 4, title: 'survivorship curves', description: 'type I, II, and III curves — examples for each and what they predict about populations.' },
  { number: 5, title: 'human population growth', description: 'total fertility rate, age-structure diagrams, pro-natalist vs. anti-natalist policies.' },
]

export default function APESUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations', examWeight: '10–15%', description: 'population dynamics, growth models, carrying capacity, and human population patterns.' }}
      topics={topics}
      basePath="/apes/unit-3"
      courseHref="/apes"
      videoId="AxfIhRlnRcE"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
