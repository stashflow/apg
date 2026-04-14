import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 2, title: 'period 2: 1607–1754' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'jamestown — england\'s first permanent settlement',
  },
  {
    type: 'body',
    content: 'Founded in 1607 by the Virginia Company of London (a joint-stock company), Jamestown was the first permanent English settlement in North America. It nearly failed multiple times due to disease, starvation, and conflict with the Powhatan Confederacy. Its survival and eventual success fundamentally shaped the Chesapeake region\'s labor system, economy, and society.',
  },
  {
    type: 'examtip',
    content: 'The contrast between Chesapeake (tobacco, indentured servants → slavery, male-dominated) and New England (religion, family migration, diversified economy) is one of the most-tested contrasts in all of APUSH. Know both regions cold.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['date', 'event', 'significance'],
    tableRows: [
      ['1607', 'Jamestown founded', 'First permanent English settlement; nearly destroyed by disease and starvation ("Starving Time" 1609–10)'],
      ['1612', 'John Rolfe introduces tobacco cultivation', 'Saved the colony economically; made Virginia profitable; created demand for labor'],
      ['1619', 'First Africans arrive in Virginia', 'Came as "servants" not slaves initially — legal status of slavery developed gradually over decades'],
      ['1619', 'House of Burgesses established', 'First representative assembly in English America; precedent for self-governance'],
      ['1622', 'Powhatan attack kills 347 colonists', 'Shifted English attitude from uneasy coexistence to open war and displacement of Powhatan people'],
      ['1676', 'Bacon\'s Rebellion', 'Frontier settlers (many ex-indentured servants) rebel against Gov. Berkeley; aftermath accelerated shift to African slavery'],
    ],
  },
  {
    type: 'heading',
    content: 'the tobacco economy and its consequences',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Tobacco was exhausting on soil — planters constantly needed new land, pushing further west into Native territory',
      'Labor-intensive crop demanded constant workers → first solved with **indentured servants** (poor English who worked 4–7 years for passage)',
      'By the 1660s–1680s, the supply of indentured servants dried up (improving conditions in England) and survivors wanted land',
      'Bacon\'s Rebellion (1676) revealed the danger of a large class of landless, armed, angry ex-indentured servants',
      '**Result**: planters pivoted to **African slavery** — enslaved workers couldn\'t rebel as effectively, couldn\'t escape as easily, served for life, and their children were also enslaved',
      'Virginia Slave Codes (1705) legally defined slavery as hereditary, race-based, and permanent — the legal foundation of American chattel slavery',
    ],
  },
  {
    type: 'heading',
    content: 'virginia\'s social structure',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Planter elite**: large landowners dominated politics, economy, and social life — they controlled the House of Burgesses',
      '**Small farmers**: the majority, aspiring to own more land; resentful of elite; backbone of Bacon\'s Rebellion',
      '**Indentured servants**: declining class; desperate, often violent after freedom',
      '**Enslaved Africans**: rapidly growing underclass after 1680; legally stripped of all rights by 1705',
      'Virginia developed an **honor culture** among the planter class — dueling, status-obsession, and public reputation were central values that persist in Southern culture',
    ],
  },
  {
    type: 'frqtip',
    content: 'LEQ prompts about the development of slavery often ask you to evaluate the relative importance of economic vs. social factors. The most sophisticated answer shows how they were linked: economic need (tobacco labor) created a situation that racial ideology then justified and stabilized. Bacon\'s Rebellion is the pivotal turning point — always use it.',
  },
]

export default function APUSHU2T1() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 1,
        title: 'jamestown & virginia',
        keyTerms: ['Virginia Company', 'joint-stock company', 'tobacco', 'indentured servants', 'House of Burgesses', 'Bacon\'s Rebellion', 'Virginia Slave Codes', 'Powhatan Confederacy'],
      }}
      sections={sections}
      next={{ href: '/apush/unit-2/2', title: 'plymouth & massachusetts bay' }}
      courseHref="/apush"
      unitHref="/apush/unit-2"
    />
  )
}
