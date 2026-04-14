import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'jamestown & virginia', description: 'the first permanent English colony, headright system, and the tobacco economy.', videoId: 'y51ri8EwUZs' },
  { number: 2, title: 'bacon\'s rebellion', description: 'the 1676 uprising, class tensions, and the shift from indentured servants to enslaved Africans.' },
  { number: 3, title: 'plymouth & massachusetts bay', description: 'Pilgrims, Puritans, the Mayflower Compact, theocracy, and the city on a hill.', videoId: 'Ud0MyzwA_mU' },
  { number: 4, title: 'salem witch trials', description: 'mass hysteria, Puritan anxieties, gender and social tensions, and aftermath.' },
  { number: 5, title: 'new england colonies', description: 'Puritan society, town meetings, King Philip\'s War, and colonial regional differences.', videoId: 'Ud0MyzwA_mU' },
  { number: 6, title: 'chesapeake & southern colonies', description: 'Virginia, Maryland, Carolina rice economy, Georgia as buffer, and growth of slavery.', videoId: 'y51ri8EwUZs' },
  { number: 7, title: 'middle colonies', description: 'Pennsylvania\'s diversity, New York\'s patroons, religious tolerance, and ethnic mixing.', videoId: 'qdFj4Kn7Uyk' },
  { number: 8, title: 'representative government', description: 'House of Burgesses, colonial assemblies, Glorious Revolution\'s impact, and Zenger Trial.' },
  { number: 9, title: 'mercantilism & salutary neglect', description: 'Navigation Acts, Britain\'s economic theory, and why England left colonies alone until the 1760s.', videoId: '_rSS9Y53jVI' },
  { number: 10, title: 'enlightenment ideas', description: 'Locke, Montesquieu, natural rights, social contract, and their influence on colonial thought.' },
  { number: 11, title: 'first great awakening', description: 'Whitefield, Edwards, emotional revivalism, challenge to authority, and seeds of democratic thinking.', videoId: '_rSS9Y53jVI' },
  { number: 12, title: 'transatlantic trade & slavery', description: 'triangular trade, Middle Passage, slave codes, resistance, and African cultural retention.', videoId: 'hbSw46VC4U8' },
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
