import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 2, title: 'period 2: 1607–1754' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'the middle colonies — diversity and pluralism',
  },
  {
    type: 'body',
    content: 'The Middle Colonies (New York, New Jersey, Pennsylvania, Delaware) were the most ethnically and religiously diverse in colonial America. Founded for different reasons and attracting settlers from across Europe, they developed a more pluralistic, commercial society than either New England or the Chesapeake.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['colony', 'founder', 'key features'],
    tableRows: [
      ['New York', 'Duke of York (James II)', 'Formerly Dutch New Netherland; ethnic diversity; port commerce; patroon system (large land grants)'],
      ['New Jersey', 'Berkeley & Carteret (1664)', 'Divided into East and West Jersey; reunited 1702; diverse religious groups'],
      ['Pennsylvania', 'William Penn (Quaker, 1681)', '"Holy Experiment": religious tolerance, pacifism; attracted Germans, Welsh, Scots-Irish; Philadelphia = largest city by 1750'],
      ['Delaware', 'Originally Swedish; Penn\'s territory', 'Smallest colony; farming and commerce; separated from PA 1704'],
    ],
  },
  {
    type: 'heading',
    content: 'quakers and william penn\'s holy experiment',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Quakers (Society of Friends) believed in the "inner light" — direct individual connection to God; no clergy, no rituals',
      'Quakers were pacifists, opposed slavery (first American group to formally do so), believed in gender equality (women could preach)',
      'Penn\'s Frame of Government (1682): broad religious toleration, elected legislature, no state church',
      'Penn treated Native Americans relatively fairly — negotiated and paid for land (unusual among colonists)',
      'Pennsylvania attracted massive immigration: Germans ("Pennsylvania Dutch"), Scots-Irish, Welsh, English Quakers',
      'Philadelphia grew to 30,000 by 1775 — largest city in the colonies and the 2nd-largest in the British Empire',
    ],
  },
  {
    type: 'heading',
    content: 'the southern colonies — carolina and georgia',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**South Carolina** (1663): founded by English planters from Barbados; immediately built on African slavery; rice and indigo plantations; African majority by 1710',
      '**North Carolina**: poorer, less slavery than south; small farms; Scots-Irish settlers; more independent/rebellious culture',
      '**Georgia** (1733): last of original 13 colonies; founded by James Oglethorpe as a debtor\'s refuge and military buffer against Spanish Florida; initially banned slavery (overturned 1751)',
      '**Stono Rebellion (1739)**: largest slave revolt in colonial America, South Carolina; 60+ enslaved people killed whites and fled toward Florida; suppressed brutally; led to harsher slave codes',
      'Southern colonies developed into a **plantation economy** — cotton and rice replaced tobacco as dominant crops moving south',
    ],
  },
  {
    type: 'examtip',
    content: 'Know all four colonial regions and their contrasts. Middle colonies represent pluralism and commerce — they foreshadow America\'s immigrant identity. The Quaker tradition of social reform (anti-slavery, pacifism) becomes significant again in the antebellum reform era. Georgia\'s founding story (debtor\'s refuge, buffer colony, slavery ban) is a classic SAQ topic.',
  },
]

export default function APUSHU2T5() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 5,
        title: 'middle & southern colonies',
        keyTerms: ['Quakers', 'William Penn', 'Holy Experiment', 'patroon system', 'Frame of Government', 'Stono Rebellion', 'James Oglethorpe', 'rice economy', 'indigo', 'Pennsylvania Dutch'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-2/4', title: 'chesapeake colonies' }}
      next={{ href: '/apush/unit-2/6', title: 'mercantilism & salutary neglect' }}
      courseHref="/apush"
      unitHref="/apush/unit-2"
    />
  )
}
