import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 9, title: 'period 9: 1980–present' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'culture wars & partisan media' },
  { type: 'bullets', content: '', bullets: [
    '**culture wars (1990s)** — conflicts over abortion, gay rights, school prayer, multiculturalism, immigration; Pat Buchanan\'s 1992 "culture war" speech',
    '**partisan media** — Fox News (1996) and later MSNBC built audiences by reinforcing partisan worldviews; cable news replaced network news; social media accelerated fragmentation after 2008',
    '**talk radio** — Rush Limbaugh and others built conservative media ecosystem; "echo chambers" intensified partisan identity',
    '**Contract with America (1994)** — Newt Gingrich led Republicans to take House for first time in 40 years; more confrontational politics; government shutdown',
  ]},
  { type: 'heading', content: 'clinton era' },
  { type: 'bullets', content: '', bullets: [
    '**"third way" (DLC)** — Clinton moved Democrats toward center: welfare reform, NAFTA, balanced budget; triangulation',
    '**welfare reform (1996)** — Personal Responsibility and Work Opportunity Act; replaced AFDC with TANF; time limits and work requirements',
    '**impeachment (1998)** — Clinton impeached for perjury/obstruction related to affair with Monica Lewinsky; acquitted by Senate; polarized public',
    '**budget surplus** — first since 1969; squandered by Bush tax cuts and Iraq War',
  ]},
  { type: 'heading', content: 'obama & the tea party' },
  { type: 'bullets', content: '', bullets: [
    '**Obama\'s election (2008)** — first Black president; ran on "hope and change"; won in financial crisis; ACA (Obamacare) passed 2010',
    '**Tea Party movement (2009–)** — grassroots conservative backlash against bailouts and ACA; anti-government, anti-tax; took House in 2010; predecessor to MAGA movement',
    '**polarization intensified** — partisan sorting accelerated; geographic sorting (urban/rural divide); media fragmentation; declining trust in institutions',
    '**Citizens United (2010)** — Supreme Court ruled corporations have free speech right to spend unlimited money in elections; "super PACs" flooded politics with money',
  ]},
  { type: 'examtip', content: 'The exam is unlikely to ask directly about very recent events, but it does test causes of polarization that have deep historical roots. Connect: civil rights backlash → southern strategy → culture wars → Tea Party → deeper partisan division. This is a change-and-continuity thread running from the 1960s to the present.' },
]

export default function APUSHU9T4() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 4, title: 'modern political polarization', keyTerms: ['culture wars', 'partisan media', 'Contract with America', 'welfare reform', 'Clinton impeachment', 'Obama', 'Tea Party', 'Citizens United', 'polarization'] }}
      sections={sections}
      prev={{ href: '/apush/unit-9/3', title: '9/11 & war on terror' }}
      next={{ href: '/apush/unit-9/5', title: 'supreme court landmark cases' }}
      courseHref="/apush" unitHref="/apush/unit-9"
    />
  )
}
