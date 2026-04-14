import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the constitutional convention (philadelphia, 1787)' },
  { type: 'body', content: '55 delegates met in Philadelphia, ostensibly to revise the Articles of Confederation, but quickly decided to write an entirely new constitution in secret. Notable: Thomas Jefferson and John Adams were both absent (serving as ministers to France and Britain). Roger Sherman, James Madison, and Benjamin Franklin were key architects.' },
  { type: 'table', content: '', tableHeaders: ['conflict', 'plan a', 'plan b', 'compromise'],
    tableRows: [
      ['Congressional representation', 'Virginia Plan: proportional (by population) — favored large states', 'New Jersey Plan: equal (1 state = 1 vote) — favored small states', 'Great Compromise (Connecticut Compromise): bicameral Congress — Senate equal, House proportional'],
      ['Counting enslaved people', 'North: don\'t count enslaved people for representation', 'South: count them fully', 'Three-Fifths Compromise: 3/5 of enslaved population counted for representation AND taxation'],
      ['Slave trade', 'Northern abolitionists: ban it immediately', 'Deep South: essential to economy', 'Compromise: Congress could not ban slave trade until 1808'],
      ['Executive power', 'Fear of monarchy — weak executive', 'Fear of chaos — strong executive', 'Electoral College: indirect election; 4-year terms; Congress can impeach'],
    ]
  },
  { type: 'heading', content: 'key principles of the constitution' },
  { type: 'bullets', content: '', bullets: [
    '**Separation of powers** — legislative (Congress), executive (President), judicial (Courts) — no single branch can dominate',
    '**Checks and balances** — each branch can limit the others: veto, override, judicial review, impeachment',
    '**Federalism** — power divided between national and state governments; the 10th Amendment reserves unenumerated powers to states',
    '**Popular sovereignty** — government derives power from the people ("We the People...")',
    '**Limited government** — Bill of Rights (first 10 Amendments, 1791) lists specific protections the government CANNOT violate',
  ]},
  { type: 'examtip', content: 'Know all four major compromises cold: Great (Connecticut) Compromise, Three-Fifths Compromise, Commerce/Slave Trade Compromise, Electoral College. Each one reveals fundamental tensions between North/South and large/small states that reappear throughout APUSH.' },
  { type: 'frqtip', content: 'DBQ and LEQ often ask whether the Constitution was a "bundle of compromises" or a coherent document. The best answer: it was both — the compromises (especially on slavery) created the document\'s greatest contradictions, while the structural design reflected genuine Enlightenment principles.' },
]

export default function APUSHU3T7() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 7, title: 'constitutional convention', keyTerms: ['Great Compromise', 'Three-Fifths Compromise', 'Virginia Plan', 'New Jersey Plan', 'separation of powers', 'federalism', 'checks and balances', 'Electoral College'] }}
      sections={sections}
      prev={{ href: '/apush/unit-3/6', title: 'articles of confederation' }}
      next={{ href: '/apush/unit-3/8', title: 'federalists vs anti-federalists' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
