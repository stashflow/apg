import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'native american societies', description: 'diverse pre-contact civilizations — Aztec, Inca, Pueblo, Iroquois, and Great Plains cultures before 1492.', videoId: 'fTv4S1q7p_c' },
  { number: 2, title: 'european exploration motives', description: 'God, gold, and glory — religious conversion, wealth, and national prestige driving exploration.' },
  { number: 3, title: 'columbian exchange', description: 'transfer of plants, animals, diseases, and people between hemispheres — and its catastrophic demographic effects.', videoId: 'fTv4S1q7p_c' },
  { number: 4, title: 'spanish colonization', description: 'Columbus, conquistadors, the encomienda system, and Spain\'s empire-building model in the Americas.', videoId: 'fTv4S1q7p_c' },
  { number: 5, title: 'labor & caste systems', description: 'encomienda, mita, hacienda systems and the racial hierarchy (casta) in Spanish colonies.' },
  { number: 6, title: 'african slavery beginnings', description: 'the origins of African slavery in the Americas, Middle Passage, and early plantation economies.' },
  { number: 7, title: 'native-european-african interactions', description: 'cultural exchanges, conflicts, alliances, and the devastating impact of disease on indigenous populations.' },
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
