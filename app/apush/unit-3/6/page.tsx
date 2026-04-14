import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the articles of confederation (1781–1789)' },
  { type: 'body', content: 'The Articles of Confederation were America\'s first constitution, ratified in 1781. Written by people who had just fought a revolution against a strong central government, the Articles deliberately created a WEAK national government. Each state was essentially sovereign; the national government was just a loose alliance. This worked for some things but failed catastrophically at others.' },
  { type: 'table', content: '', tableHeaders: ['weakness', 'consequence'],
    tableRows: [
      ['Congress could NOT tax — only request money from states', 'National debt unpaid; soldiers not paid; government nearly bankrupt'],
      ['No executive branch to enforce laws', 'Laws passed but not enforced; states ignored Congress'],
      ['No national court system', 'No way to resolve interstate disputes or enforce contracts'],
      ['Each state had 1 vote regardless of size', 'Small states could block legislation; large states resentful'],
      ['9 of 13 states required to pass any law', 'Gridlock; almost impossible to pass legislation'],
      ['Unanimous vote required to amend the Articles', 'Could never fix its own problems'],
      ['Could not regulate interstate commerce', 'Trade wars between states; economic chaos'],
    ]
  },
  { type: 'heading', content: 'shays\' rebellion (1786–1787)' },
  { type: 'body', content: 'Massachusetts farmer and Revolutionary War veteran Daniel Shays led 1,200 armed men to shut down courts that were foreclosing on farmers\' land due to war debts. The national government under the Articles could not raise an army to suppress it. Massachusetts had to use a privately funded militia. The rebellion shocked elites nationwide and became the central argument for a stronger national government.' },
  { type: 'examtip', content: 'Shays\' Rebellion is the most important single event motivating the Constitutional Convention. It proved the Articles were fatally weak. Know: it was farmers revolting against debt, the national government couldn\'t respond, and it convinced elites (especially Washington and Madison) that a new constitution was essential.' },
  { type: 'heading', content: 'successes of the articles' },
  { type: 'bullets', content: '', bullets: [
    '**Northwest Ordinance (1787)** — the Articles\' greatest achievement. Created a process for admitting new states from the Northwest Territory (Ohio, Indiana, Michigan etc.), established townships and public education funding, and BANNED slavery north of the Ohio River — a critical precedent for later sectional conflict',
    '**Land Ordinance of 1785** — established the township-range survey system still used to divide land in the Midwest today',
    '**Treaty of Paris (1783)** — negotiated successfully; gained all land east of Mississippi',
  ]},
  { type: 'frqtip', content: 'SAQ and LEQ questions about the Articles always ask you to evaluate: acknowledge both failures (Shays\' Rebellion, economic chaos) AND successes (Northwest Ordinance). The best answers show the Articles as a flawed but understandable first attempt, not simply a disaster.' },
]

export default function APUSHU3T6() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 6, title: 'articles of confederation', keyTerms: ['Articles of Confederation', 'Shays\' Rebellion', 'Northwest Ordinance', 'Land Ordinance', 'unicameral', 'sovereignty', 'Daniel Shays'] }}
      sections={sections}
      prev={{ href: '/apush/unit-3/5', title: 'declaration of independence' }}
      next={{ href: '/apush/unit-3/7', title: 'constitutional convention' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
