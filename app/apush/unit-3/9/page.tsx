import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'washington\'s presidency — setting precedents' },
  { type: 'body', content: 'George Washington served two terms (1789–1797) and was obsessively aware that every action set a precedent. He created the Cabinet (not in the Constitution), established the practice of a two-term limit (lasted until FDR), and kept the U.S. out of European wars. His Farewell Address (1796) warned against political parties ("factions") and permanent foreign alliances.' },
  { type: 'bullets', content: '', bullets: [
    '**Two-term tradition** — voluntary; Washington could have been president for life. Not formalized until 22nd Amendment (1951)',
    '**Cabinet system** — Washington appointed Jefferson (State), Hamilton (Treasury), Knox (War), Randolph (Attorney General)',
    '**Judiciary Act of 1789** — created federal court system; established Supreme Court with 6 justices; established principle of federal court supremacy',
    '**Whiskey Rebellion (1794)** — farmers in western PA refused to pay Hamilton\'s excise tax on whiskey. Washington personally led 13,000 militia — the only time a sitting president led troops. Demonstrated national government\'s power to enforce laws.',
  ]},
  { type: 'heading', content: 'hamilton\'s financial program' },
  { type: 'table', content: '', tableHeaders: ['proposal', 'hamilton\'s argument', 'jefferson\'s objection', 'outcome'],
    tableRows: [
      ['Assumption of state war debts', 'Federal assumption creates national unity; states\' bonds become federal bonds; wealthy investors support new government', 'Southern states had paid their debts; penalizes responsible states to reward irresponsible ones', 'Passed — compromise: capital moved to Washington D.C.'],
      ['National Bank (BUS)', '"Necessary and proper" clause allows implied powers; bank stabilizes currency, provides credit', 'Strict construction: Constitution doesn\'t mention a bank; unconstitutional', 'Hamilton won; Washington signed; Bank established 1791'],
      ['Protective tariff', 'Protect infant American industries from British competition; encourage manufacturing', 'Agrarian South benefited from free trade; tariffs hurt farmers', 'Only partially passed'],
      ['Excise tax on whiskey', 'Fund the government; test federal authority', 'Frontier farmers: whiskey is how they convert grain to portable, tradeable goods; unfair burden on poor', 'Passed; triggered Whiskey Rebellion (1794)'],
    ]
  },
  { type: 'heading', content: 'birth of political parties' },
  { type: 'body', content: 'Hamilton\'s program split the republic into two factions that became America\'s first political parties: the Federalists (Hamilton\'s party: strong central government, manufacturing, pro-British) and the Democratic-Republicans (Jefferson/Madison: states\' rights, agriculture, pro-French). Washington warned against parties; they formed anyway.' },
  { type: 'examtip', content: 'The Hamilton-Jefferson debate is about more than economics — it\'s a fundamental disagreement about the kind of country America should be: urban/commercial vs. agrarian/democratic; loose vs. strict construction of the Constitution. These tensions reappear in EVERY period of APUSH.' },
  { type: 'frqtip', content: 'For LEQ comparing Hamilton and Jefferson, organize around: vision of America (commercial empire vs. republic of virtue), constitutional interpretation (loose vs. strict), economic policy (manufacturing vs. agriculture), and foreign policy (pro-Britain vs. pro-France).' },
]

export default function APUSHU3T9() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 9, title: "washington & hamilton's financial plan", keyTerms: ['Assumption Plan', 'Bank of the United States', 'strict construction', 'loose construction', 'Whiskey Rebellion', 'Federalist Party', 'Democratic-Republicans', 'implied powers'] }}
      sections={sections}
      prev={{ href: '/apush/unit-3/8', title: 'federalists vs anti-federalists' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
