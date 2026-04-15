import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'native american societies', description: 'diverse pre-contact civilizations — Aztec, Inca, Pueblo, Iroquois, and Great Plains cultures before 1492.', videoId: 'fTv4S1q7p_c' },
  { number: 2, title: 'columbian exchange', description: 'transfer of plants, animals, diseases, and people between hemispheres — and its catastrophic demographic effects.', videoId: 'fTv4S1q7p_c' },
  { number: 3, title: 'the columbian exchange', description: 'in-depth effects: new world crops, old world diseases, forced migrations, and long-term demographic collapse.', videoId: 'fTv4S1q7p_c' },
  { number: 4, title: 'encomienda system', description: 'Spanish labor exploitation, first contact violence, and the casta racial hierarchy in New Spain.' },
  { number: 5, title: 'columbian triangle trade beginnings', description: 'origins of the transatlantic slave trade, mercantilism, and the Atlantic commercial world.' },
]

export default function APUSHUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 1, title: 'period 1: 1491–1607', examWeight: '4–6%', description: 'the world before contact, the Columbian Exchange, and the beginning of European colonization.' }}
      topics={topics}
      basePath="/apush/unit-1"
      courseHref="/apush"
      videoId="fTv4S1q7p_c"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
