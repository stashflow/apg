import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 8, title: 'period 8: 1945–1980' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'nixon\'s foreign policy' },
  { type: 'bullets', content: '', bullets: [
    '**détente** — relaxation of Cold War tensions; Nixon and Kissinger pursued pragmatic diplomacy over ideological confrontation',
    '**opening China (1972)** — Nixon visited communist China; began normalization of relations; brilliant Cold War strategy (split China from USSR)',
    '**SALT I (1972)** — Strategic Arms Limitation Treaty with USSR; first nuclear arms control agreement; froze ICBM and SLBM numbers',
    '**"madman theory"** — Nixon wanted enemies to think him unpredictable and possibly irrational; used as leverage in Vietnam negotiations',
  ]},
  { type: 'heading', content: 'domestic policy & stagflation' },
  { type: 'bullets', content: '', bullets: [
    '**stagflation** — simultaneous inflation + unemployment + economic stagnation; conventional economics (tax cuts for inflation, spending for unemployment) couldn\'t fix both at once',
    '**OPEC oil embargo (1973)** — Arab nations cut oil to U.S. over support for Israel; gas lines, price spikes; deepened economic crisis',
    '**EPA and environmental legislation** — Nixon signed Clean Air Act (1970), created EPA; surprising environmental legacy',
    '**southern strategy** — Nixon appealed to white Southern voters alienated by civil rights legislation; began realignment of South to Republican party',
  ]},
  { type: 'heading', content: 'watergate' },
  { type: 'body', content: 'The Watergate scandal began with a break-in at the Democratic National Committee headquarters in the Watergate complex (June 1972) by operatives connected to Nixon\'s re-election campaign (CREEP). Nixon wasn\'t involved in the break-in but directed the cover-up — using CIA, FBI, and White House staff to obstruct justice.' },
  { type: 'bullets', content: '', bullets: [
    '**Saturday Night Massacre (Oct. 1973)** — Nixon ordered Attorney General to fire independent prosecutor Archibald Cox; both Cox and Attorney General resigned rather than comply; massive public outrage',
    '**White House tapes** — Supreme Court ruled 8-0 Nixon must surrender tapes (*U.S. v. Nixon*, 1974); "smoking gun" tape revealed Nixon directed cover-up within days of break-in',
    '**resignation (August 9, 1974)** — facing certain impeachment and removal, Nixon resigned; first president to resign; Ford pardoned him',
  ]},
  { type: 'examtip', content: 'Watergate\'s significance extends beyond Nixon: it showed constitutional checks and balances worked (Congress, courts, press all played roles), led to the War Powers Act (1973) and campaign finance reform (FECA 1974), and deepened public cynicism toward government that persists today.' },
]

export default function APUSHU8T6() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 6, title: 'nixon & watergate', keyTerms: ['détente', 'SALT I', 'opening China', 'stagflation', 'OPEC', 'southern strategy', 'Watergate', 'Saturday Night Massacre', 'U.S. v. Nixon', 'resignation'] }}
      sections={sections}
      prev={{ href: '/apush/unit-8/5', title: 'great society' }}
      next={{ href: '/apush/unit-9/1', title: 'reagan revolution' }}
      courseHref="/apush" unitHref="/apush/unit-8"
    />
  )
}
