import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the declaration of independence (july 4, 1776)' },
  { type: 'body', content: 'Thomas Jefferson drafted the Declaration in June 1776, drawing heavily on John Locke\'s Second Treatise of Government. The document has three parts: a preamble (philosophical statement of natural rights), a list of 27 grievances against King George III, and a declaration of independence. Congress edited Jefferson\'s draft, removing a passage blaming the king for slavery — a critical compromise that would haunt the republic for nearly 90 years.' },
  { type: 'table', content: '', tableHeaders: ['section', 'key argument', 'philosophical source'],
    tableRows: [
      ['Preamble', '"All men are created equal" with "unalienable rights: life, liberty, pursuit of happiness"', 'John Locke\'s natural rights (life, liberty, property)'],
      ['Grievances', '27 specific complaints against King George (standing armies, taxation, dissolving legislatures)', 'English constitutional tradition — Magna Carta, Petition of Right'],
      ['Declaration', 'Colonies are "Free and Independent States" absolved from allegiance to Britain', 'Social contract theory — government by consent'],
    ]
  },
  { type: 'heading', content: 'contradictions in the declaration' },
  { type: 'bullets', content: '', bullets: [
    '"All men are created equal" — written by a slaveholder; enslaved people were excluded, as were women and most non-property-owners',
    'Jefferson\'s original draft blamed the king for the slave trade — this was removed by southern delegates',
    'The Declaration\'s ideals became a weapon used by later reform movements: abolitionists, suffragists, civil rights leaders all invoked "all men are created equal"',
    'Frederick Douglass: "What to the Slave Is the Fourth of July?" (1852) — the Declaration\'s promises were meaningless to enslaved Americans',
  ]},
  { type: 'examtip', content: 'The Declaration\'s contradictions — especially regarding slavery — are central to APUSH. Know that abolitionists and civil rights leaders cited it as evidence America had not lived up to its founding ideals. This "promise vs. reality" theme runs through the entire course.' },
  { type: 'heading', content: 'republicanism as an ideology' },
  { type: 'body', content: 'The Revolution spread a new political ideology: republicanism. Civic virtue — the willingness to subordinate private interests to the public good — was its cornerstone. A republic required an educated, virtuous citizenry capable of self-governance. This ideology would shape debates over the Constitution, slavery, and democracy for generations.' },
  { type: 'frqtip', content: 'For any DBQ about the Revolution\'s impact, use the Declaration\'s ideals AND their limitations. The strongest essays acknowledge that the Revolution was simultaneously a genuine advance for democratic ideals and a massive failure to apply those ideals to enslaved people, women, and Native Americans.' },
]

export default function APUSHU3T5() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 5, title: 'declaration of independence', keyTerms: ['natural rights', 'unalienable rights', 'republicanism', 'civic virtue', 'Locke', 'Jefferson', 'social contract', 'grievances'] }}
      sections={sections}
      prev={{ href: '/apush/unit-3/4', title: 'intolerable acts & continental congress' }}
      next={{ href: '/apush/unit-3/6', title: 'articles of confederation' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
