import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'jamestown & virginia', description: 'the first permanent English colony, headright system, Bacon\'s Rebellion, and the tobacco economy.', videoId: 'y51ri8EwUZs' },
  { number: 2, title: 'plymouth & massachusetts bay', description: 'Pilgrims, Puritans, the Mayflower Compact, theocracy, and the city on a hill.', videoId: 'Ud0MyzwA_mU' },
  { number: 3, title: 'new england colonies', description: 'Puritan society, town meetings, King Philip\'s War, and the Salem Witch Trials as social rupture.', videoId: 'Ud0MyzwA_mU' },
  { number: 4, title: 'chesapeake colonies', description: 'Virginia and Maryland — indentured servants, tobacco, Bacon\'s Rebellion, and the shift to enslaved labor.', videoId: 'y51ri8EwUZs' },
  { number: 5, title: 'middle & southern colonies', description: 'Pennsylvania\'s diversity, New York\'s patroons, Carolina\'s rice economy, and Georgia\'s buffer role.', videoId: 'qdFj4Kn7Uyk' },
  { number: 6, title: 'mercantilism & salutary neglect', description: 'Navigation Acts, Britain\'s economic theory, and why England left the colonies largely alone until the 1760s.', videoId: '_rSS9Y53jVI' },
  { number: 7, title: 'first great awakening', description: 'Whitefield, Edwards, emotional revivalism, its challenge to authority, and early seeds of democratic thinking.', videoId: '_rSS9Y53jVI' },
  { number: 8, title: 'colonial slavery', description: 'the transatlantic slave trade, slave codes, the Middle Passage, resistance, and African cultural retention.', videoId: 'hbSw46VC4U8' },
]

export default function APUSHUnit2Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 2, title: 'period 2: 1607–1754', examWeight: '6–8%', description: 'British colonial settlement, regional differences, and the social structures that would define early America.' }}
      topics={topics}
      basePath="/apush/unit-2"
      courseHref="/apush"
      videoId="_rSS9Y53jVI"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
