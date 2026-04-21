import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'tragedy of the commons', description: 'shared resources, overexploitation, and solutions.', videoId: 'S6o2kL-idBI' },
  { number: 2, title: 'clearcutting & slash-and-burn', description: 'deforestation methods, impacts, and alternatives.' },
  { number: 3, title: 'green revolution', description: 'high-yield crops, fertilizers, irrigation, and impacts.', videoId: 'jsrRMYEIxvg' },
  { number: 4, title: 'agricultural practices', description: 'conventional farming, pesticides, and soil management.' },
  { number: 5, title: 'irrigation methods', description: 'flood, drip, spray irrigation and water efficiency.' },
  { number: 6, title: 'pest control methods', description: 'pesticides, IPM, biological control, and resistance.' },
  { number: 7, title: 'meat production & CAFOs', description: 'concentrated animal feeding operations and environmental costs.' },
  { number: 8, title: 'sustainable agriculture', description: 'crop rotation, organic farming, and permaculture.' },
  { number: 9, title: 'aquaculture', description: 'fish farming pros/cons, escapees, and pollution.' },
  { number: 10, title: 'sustainable forestry', description: 'selective cutting, FSC certification, and reforestation.' },
  { number: 11, title: 'urbanization', description: 'heat islands, sprawl, smart growth, green infrastructure.' },
  { number: 12, title: 'ecological footprint', description: 'measuring human impact on Earth\'s resources.' },
  { number: 13, title: 'introduction to sustainability', description: 'sustainable development, triple bottom line.' },
]

export default function APESUnit5Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use', examWeight: '10–15%', description: 'how humans use land and water — and the environmental consequences of those choices.' }}
      topics={topics}
      basePath="/apes/unit-5"
      courseHref="/apes"
      videoId="i79vSrnpV9c"
      examDate={{ date: 'Friday, May 15, 2026', time: '8:00 AM' }}
    />
  )
}
