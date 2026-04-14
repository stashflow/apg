import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 1, title: 'period 1 — 1491–1607' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'mercantilism — the economic engine of colonialism',
  },
  {
    type: 'body',
    content: 'Mercantilism was the dominant economic theory of European powers from roughly 1500–1800. It held that national wealth was finite and measured by the accumulation of gold and silver. Colonies existed to enrich the mother country — providing raw materials, markets for manufactured goods, and sources of revenue. This theory directly drove colonization, trade networks, and eventually the transatlantic slave trade.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Core mercantilist principle**: colonies must produce raw materials for the mother country and buy back finished goods — a deliberately unequal relationship',
      'Colonies were forbidden from manufacturing their own goods or trading with foreign nations',
      'England enforced this through the **Navigation Acts** (beginning 1651): all trade to/from English colonies must use English ships',
      'Mercantilism created structural tension that would eventually lead to the American Revolution — colonists resented being locked into an exploitative trade system',
    ],
  },
  {
    type: 'heading',
    content: 'the early atlantic trading world',
  },
  {
    type: 'body',
    content: 'By the late 1500s, a complex Atlantic trading network was emerging. It connected Europe, Africa, and the Americas in interlocking commercial relationships. This system was built on and intensified existing African and indigenous trade networks.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**European commodities** flowed to Africa and the Americas: manufactured goods, weapons, textiles',
      '**African commodities** included enslaved people (forcibly) and gold — west African kingdoms like Dahomey and Ashanti profited from selling captives to European slave traders',
      '**American commodities** included silver, sugar, tobacco, furs, and later cotton — raw materials that fed European manufacturing',
      'The **sugar economy** of the Caribbean (Barbados, Hispaniola, Cuba) drove the earliest mass slave trade — sugar required enormous, constant labor',
    ],
  },
  {
    type: 'heading',
    content: 'the triangular trade',
  },
  {
    type: 'body',
    content: 'The triangular trade describes the three-way transatlantic exchange that formed the commercial backbone of the Atlantic world from the 1500s through the early 1800s. It was not a single fixed triangle but a complex web — the "triangle" is a simplification of multiple overlapping routes.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['leg', 'route', 'cargo carried'],
    tableRows: [
      ['Leg 1 (Outward Passage)', 'Europe → Africa', 'manufactured goods: guns, textiles, rum, metal goods'],
      ['Leg 2 (Middle Passage)', 'Africa → Americas', 'enslaved African people (12+ million over the trade\'s full history)'],
      ['Leg 3 (Return Passage)', 'Americas → Europe', 'sugar, tobacco, cotton, indigo, silver — raw materials'],
    ],
  },
  {
    type: 'heading',
    content: 'the middle passage — the human cost',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'The Middle Passage was the transatlantic voyage carrying enslaved Africans from West Africa to the Americas',
      'Enslaved people were packed in inhumane conditions — "tight packing" maximized cargo but increased death rates',
      'Mortality rates on the voyage ranged from 10–25% — those who survived arrived physically broken',
      'Resistance was constant: revolts, hunger strikes, suicide by jumping overboard — the most famous revolt was the **Amistad** (1839)',
      'Estimated **12–15 million** Africans were transported across the Atlantic between 1500 and 1900; approximately 2 million died during the voyage itself',
      'The majority of enslaved people went to **Brazil** and the **Caribbean**, not the mainland North American colonies — only about 400,000 came to what is now the US',
    ],
  },
  {
    type: 'heading',
    content: 'european motives for colonization — a summary',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Economic**: access to raw materials (silver, sugar, tobacco, fur), new markets, and trade routes',
      '**Political**: expand national power; check rivals (Spain vs. England vs. France vs. Netherlands)',
      '**Religious**: spread Christianity (especially for Spain and Portugal); escape religious persecution (Pilgrims, Puritans, Quakers)',
      '**Social**: escape poverty, debt, and social immobility; land ownership promised in the New World was impossible in stratified Europe',
    ],
  },
  {
    type: 'frqtip',
    content: 'SAQ and DBQ questions often ask you to analyze the role of economic motives in colonization. Never say colonization was "just" about religion or "just" about economics. The most sophisticated response acknowledges the interplay: economic motives were rationalized through religious language ("civilizing" and "converting" natives), while religious goals required economic funding (missions needed labor systems).',
  },
]

export default function APUSHU1T5() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 5,
        title: 'columbian triangle trade beginnings',
        keyTerms: ['mercantilism', 'triangular trade', 'Middle Passage', 'Navigation Acts', 'sugar economy', 'Amistad', 'Atlantic world', 'tight packing'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-1/4', title: 'encomienda system' }}
      courseHref="/apush"
      unitHref="/apush/unit-1"
    />
  )
}
