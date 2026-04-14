import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 9, title: 'period 9: 1980–present' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'fall of the berlin wall & ussr collapse' },
  { type: 'bullets', content: '', bullets: [
    '**Berlin Wall fell (November 9, 1989)** — symbol of Cold War division; Eastern European revolutions swept communist governments from power',
    '**dissolution of the USSR (December 1991)** — Gorbachev\'s reforms unleashed forces he couldn\'t control; 15 Soviet republics became independent nations; Cold War ended',
    '**"end of history" debate** — Francis Fukuyama argued liberal democracy had definitively won; others warned of new conflicts',
    '**Gulf War (1991)** — Saddam Hussein invaded Kuwait; Bush Sr. built international coalition; expelled Iraq from Kuwait in 6 weeks; decided NOT to march to Baghdad',
  ]},
  { type: 'heading', content: 'globalization' },
  { type: 'body', content: 'The post-Cold War era saw rapid globalization — the integration of national economies into a single global market through trade, investment, and communication technology.' },
  { type: 'bullets', content: '', bullets: [
    '**NAFTA (1994)** — North American Free Trade Agreement; eliminated tariffs between U.S., Canada, Mexico; boosted trade but displaced manufacturing workers; debated legacy',
    '**WTO (1995)** — World Trade Organization; replaced GATT; governed global trade rules; U.S. championed free trade',
    '**China trade** — normalized trade relations (2000); China\'s entry into WTO; manufacturing shifted to China; millions of U.S. factory jobs lost',
    '**internet economy** — dot-com boom (1990s); digital revolution transformed commerce, communication, information',
  ]},
  { type: 'heading', content: 'debates over america\'s global role' },
  { type: 'bullets', content: '', bullets: [
    '**"sole superpower"** — U.S. was the world\'s only superpower; debates about what to do with that power',
    '**humanitarian intervention** — Clinton intervened in Somalia (failed), Haiti, Bosnia, Kosovo; "nation-building" questions',
    '**isolationism vs. interventionism** — recurring debate about U.S. global responsibility without Cold War framework',
  ]},
  { type: 'examtip', content: 'NAFTA debates preview modern trade politics: globalization created aggregate economic gains but concentrated losses in specific communities (auto workers, textile workers). This tension between efficiency and equity, winners and losers from trade, is a recurring AP theme connecting to today\'s politics.' },
]

export default function APUSHU9T2() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 2, title: 'end of cold war & globalization', keyTerms: ['Berlin Wall', 'USSR dissolution', 'Gulf War', 'NAFTA', 'WTO', 'globalization', 'Gorbachev', 'dot-com boom'] }}
      sections={sections}
      prev={{ href: '/apush/unit-9/1', title: 'reagan revolution' }}
      next={{ href: '/apush/unit-9/3', title: '9/11 & war on terror' }}
      courseHref="/apush" unitHref="/apush/unit-9"
    />
  )
}
