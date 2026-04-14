import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 9, title: 'period 9: 1980–present' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the rise of conservatism' },
  { type: 'body', content: 'Reagan\'s 1980 victory represented the culmination of a conservative movement that had been building since the 1960s, fueled by backlash against the Great Society, civil rights enforcement, Vietnam, Watergate, stagflation, and cultural change. The "New Right" coalition united free-market economic conservatives, social/religious conservatives (Moral Majority), and disaffected white Democrats (Reagan Democrats).' },
  { type: 'heading', content: 'reaganomics (supply-side economics)' },
  { type: 'bullets', content: '', bullets: [
    '**tax cuts** — Economic Recovery Tax Act (1981): cut top income tax rate from 70% to 50% (later to 28%); theory that tax cuts would stimulate investment, grow the economy, and revenue would "trickle down"',
    '**deregulation** — cut regulations on banking, airlines, environment, communications; freed business from government oversight',
    '**anti-union** — fired striking air traffic controllers (PATCO, 1981); dramatic signal of changed labor relations; union membership declined sharply',
    '**military buildup** — massive increase in defense spending to confront Soviet Union; accelerated arms race',
    '**deficit spending** — tax cuts + military spending = massive federal deficit; national debt tripled from $994 billion to $2.9 trillion',
  ]},
  { type: 'heading', content: 'cold war endgame' },
  { type: 'bullets', content: '', bullets: [
    '**Reagan Doctrine** — support anti-communist resistance movements worldwide (Afghanistan, Nicaragua, Angola)',
    '**Iran-Contra Affair** — administration secretly sold arms to Iran, used proceeds to fund Nicaraguan Contras in violation of Congressional ban; major scandal',
    '**SDI ("Star Wars")** — proposed space-based missile defense system; alarmed Soviets; accelerated arms race USSR couldn\'t afford',
    '**Gorbachev & the end of the Cold War** — Mikhail Gorbachev introduced glasnost (openness) and perestroika (restructuring); Reagan-Gorbachev summits; INF Treaty (1987) eliminated intermediate nuclear missiles',
  ]},
  { type: 'heading', content: 'social conservatism' },
  { type: 'bullets', content: '', bullets: [
    '**Moral Majority (Jerry Falwell)** — Christian right mobilized politically; anti-abortion, anti-gay rights, pro-school prayer',
    '**war on drugs** — Nancy Reagan\'s "Just Say No"; mandatory minimums; mass incarceration of Black and Latino men accelerated',
    '**AIDS crisis** — Reagan administration slow to respond to epidemic that killed tens of thousands; mostly affected gay men; government silence seen as homophobic neglect',
  ]},
  { type: 'examtip', content: 'A core AP argument: was Reaganism a genuine ideological shift or a continuation of earlier trends? Evidence for shift: scale of deregulation, tax cuts, anti-union stance. Evidence for continuity: federal government did not actually shrink; social programs cut but not eliminated; Cold War strategy changed more in tone than substance.' },
]

export default function APUSHU9T1() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 1, title: 'reagan revolution', keyTerms: ['Reaganomics', 'supply-side economics', 'deregulation', 'Reagan Doctrine', 'Iran-Contra', 'Moral Majority', 'SDI', 'New Right', 'PATCO'] }}
      sections={sections}
      prev={{ href: '/apush/unit-8/6', title: 'nixon & watergate' }}
      next={{ href: '/apush/unit-9/2', title: 'end of cold war & globalization' }}
      courseHref="/apush" unitHref="/apush/unit-9"
    />
  )
}
