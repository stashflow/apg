import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'tragedy of the commons', description: 'shared resources, overexploitation, and solutions.' },
  { number: 2, title: 'green revolution', description: 'high-yield crops, fertilizers, irrigation, and impacts.' },
  { number: 3, title: 'pest control methods', description: 'pesticides, IPM, biological control, and resistance.' },
  { number: 4, title: 'meat production & CAFOs', description: 'concentrated animal feeding operations and environmental costs.' },
  { number: 5, title: 'aquaculture', description: 'fish farming pros/cons, escapees, and pollution.' },
  { number: 6, title: 'sustainable agriculture', description: 'crop rotation, organic farming, and permaculture.' },
  { number: 7, title: 'deforestation', description: 'causes, carbon/water impacts, and sustainable forestry.' },
  { number: 8, title: 'clear-cutting vs selective cutting', description: 'forest management methods and tradeoffs.' },
  { number: 9, title: 'urbanization', description: 'heat islands, sprawl, smart growth, green infrastructure.' },
  { number: 10, title: 'aquifer depletion', description: 'Ogallala aquifer, subsidence, and groundwater mining.' },
  { number: 11, title: 'dams & desalination', description: 'water management tradeoffs and energy costs.' },
  { number: 12, title: 'mining', description: 'surface vs subsurface, acid drainage, and remediation.' },
]

export default function APESUnit5Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use', examWeight: '10–15%', description: 'how humans use land and water — and the environmental consequences of those choices.' }}
      topics={topics}
      basePath="/apes/unit-5"
      courseHref="/apes"

      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
