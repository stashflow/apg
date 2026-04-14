import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 2, title: 'period 2: 1607–1754' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'the development of colonial slavery',
  },
  {
    type: 'body',
    content: 'African slavery in British North America developed gradually over the 17th century — it was not inevitable or predetermined. The first Africans in Virginia (1619) arrived with ambiguous legal status; some gained freedom, bought land, and even owned servants. But by 1705, Virginia\'s Slave Codes had established hereditary, race-based chattel slavery as a legal institution. This transformation was driven by economic need and political fear (Bacon\'s Rebellion), not simply racism — though racism quickly developed to justify the system.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['date', 'development', 'significance'],
    tableRows: [
      ['1619', 'First Africans arrive in Virginia', 'Ambiguous status — some treated as servants who could earn freedom'],
      ['1640s', 'Some Africans sentenced to lifetime servitude by courts', 'Beginning of legal distinction between white and Black servants'],
      ['1662', 'Virginia law: status follows mother (partus)', 'Children of enslaved women are enslaved — made slavery hereditary and self-reproducing'],
      ['1676', 'Bacon\'s Rebellion', 'Biracial rebel army terrifies planter elite; accelerates shift to African slavery'],
      ['1705', 'Virginia Slave Codes', 'Codified race-based, hereditary, lifetime slavery; stripped enslaved people of all legal rights'],
      ['1739', 'Stono Rebellion (SC)', 'Largest colonial slave revolt; 60+ enslaved people killed; led to stricter slave codes'],
    ],
  },
  {
    type: 'heading',
    content: 'slavery across the regions',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Chesapeake**: tobacco labor; enslaved population grew rapidly after 1680; slaves 40% of Virginia population by 1750',
      '**Low Country (South Carolina, Georgia)**: rice and indigo; required specialized knowledge (many enslaved Africans from rice-growing West African regions); enslaved people were African MAJORITY by 1720',
      '**Gullah culture**: South Carolina Low Country developed distinctive African-American culture (Gullah Geechee) — African language elements, foodways, religious practices survived because plantations were isolated',
      '**New England**: smaller numbers; household servants, artisans; slavery legal but less economically central',
      '**Middle Colonies**: mixed — some slavery in New York City; Quakers in PA opposed it',
    ],
  },
  {
    type: 'heading',
    content: 'resistance to slavery',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Everyday resistance**: working slowly, feigning illness, breaking tools, stealing food — the most common forms',
      '**Running away**: constant; "maroon" communities of escaped enslaved people formed in swamps and mountains',
      '**Armed revolts**: Stono Rebellion (1739) was the largest; also New York Conspiracy of 1741',
      'Resistance demonstrates that enslaved people were never passive — they actively fought their condition despite brutal suppression',
    ],
  },
  {
    type: 'frqtip',
    content: 'DBQ and LEQ on slavery always reward complexity. Avoid saying slavery was simply "racist" — explain the DEVELOPMENT: economic need → legal codification → racial ideology used to justify. Also distinguish regional differences. And always include African agency: enslaved people created culture, family networks, and resisted constantly. The exam wants you to see enslaved people as historical actors, not just victims.',
  },
]

export default function APUSHU2T8() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 8,
        title: 'colonial slavery',
        keyTerms: ['chattel slavery', 'Virginia Slave Codes', 'partus', 'Stono Rebellion', 'maroon communities', 'Gullah culture', 'Low Country', 'race-based slavery', 'Bacon\'s Rebellion'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-2/7', title: 'first great awakening' }}
      courseHref="/apush"
      unitHref="/apush/unit-2"
    />
  )
}
