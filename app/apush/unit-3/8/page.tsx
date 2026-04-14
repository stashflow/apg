import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the ratification debate (1787–1789)' },
  { type: 'body', content: 'After the Convention, the Constitution needed ratification by 9 of 13 states. Two factions emerged: Federalists (supported ratification) and Anti-Federalists (opposed it). The debate was fierce and substantive — one of the great political arguments in American history.' },
  { type: 'table', content: '', tableHeaders: ['', 'federalists', 'anti-federalists'],
    tableRows: [
      ['Key figures', 'Hamilton, Madison, Jay', 'Patrick Henry, George Mason, Samuel Adams'],
      ['Core argument', 'Strong central government needed; republic could work at large scale; checks and balances prevent tyranny', 'Too much central power; no Bill of Rights; will crush state sovereignty; too aristocratic'],
      ['Key document', 'The Federalist Papers (85 essays, 1787–88) — most important political science text in U.S. history', 'Anti-Federalist Papers (various authors)'],
      ['Outcome', 'Won ratification in all 13 states (NH was the 9th, June 1788)', 'Won the Bill of Rights as a compromise — their biggest legacy'],
    ]
  },
  { type: 'heading', content: 'the federalist papers — key essays' },
  { type: 'bullets', content: '', bullets: [
    '**Federalist No. 10 (Madison)** — large republics are BETTER than small ones because factions cancel each other out; diversity prevents any single faction from dominating — directly countered anti-federalist claim that republics could only work in small territories',
    '**Federalist No. 51 (Madison)** — "Ambition must be made to counteract ambition" — defends separation of powers and checks & balances as the solution to human nature\'s tendency toward corruption',
    '**Federalist No. 78 (Hamilton)** — defends an independent judiciary; argues courts must have power to strike down unconstitutional laws (establishes basis for judicial review)',
  ]},
  { type: 'examtip', content: 'Federalist No. 10 is the single most tested Federalist Paper. Know Madison\'s argument: factions are inevitable; a large republic with representative government contains them better than a direct democracy or small republic. This is the philosophical foundation for the U.S. system.' },
  { type: 'frqtip', content: 'The Anti-Federalists\' legacy is the Bill of Rights. For any LEQ about the Constitution\'s creation, argue that the Anti-Federalists were not simply wrong — their demands for explicit protections of individual rights were correct and shaped the document we live under today.' },
]

export default function APUSHU3T8() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 8, title: 'federalists vs anti-federalists', keyTerms: ['Federalist Papers', 'Anti-Federalists', 'Federalist No. 10', 'Federalist No. 51', 'Bill of Rights', 'ratification', 'faction', 'Madison', 'Hamilton'] }}
      sections={sections}
      prev={{ href: '/apush/unit-3/7', title: 'constitutional convention' }}
      next={{ href: '/apush/unit-3/9', title: 'washington & hamilton\'s financial plan' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
