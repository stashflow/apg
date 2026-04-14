import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'native american societies before contact', description: 'diverse cultures across north america — from the pueblo to the haudenosaunee confederacy.' },
  { number: 2, title: 'european exploration & motivations', description: 'why spain, portugal, france, and england explored — God, Gold, and Glory explained.' },
  { number: 3, title: 'the columbian exchange', description: 'the transfer of plants, animals, diseases, and people between hemispheres and its massive consequences.' },
  { number: 4, title: 'first contact & early conflict', description: 'how encounter reshaped both native and european societies permanently.' },
  { number: 5, title: 'spanish colonization model', description: 'encomienda, missions, and the construction of spanish colonial society in the americas.' },
]

export default function APUSHUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 1, title: 'period 1 — 1491–1607', examWeight: '4–6%', description: 'the world before and immediately after european contact. though low weight, the columbian exchange and native american diversity set up themes tested throughout the entire exam.' }}
      topics={topics}
      basePath="/apush/unit-1"
      courseHref="/apush"
    />
  )
}
