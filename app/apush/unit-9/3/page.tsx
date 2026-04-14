import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 9, title: 'period 9: 1980–present' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'september 11, 2001' },
  { type: 'body', content: 'Al-Qaeda terrorists hijacked four commercial airplanes. Two struck the World Trade Center towers (both collapsed), one hit the Pentagon, and one crashed in a Pennsylvania field after passengers resisted. Nearly 3,000 people were killed — the deadliest attack on American soil since Pearl Harbor. The attacks transformed U.S. foreign and domestic policy for decades.' },
  { type: 'heading', content: 'immediate responses' },
  { type: 'bullets', content: '', bullets: [
    '**USA PATRIOT Act (2001)** — expanded government surveillance powers: wiretapping, monitoring of financial records, reduced judicial oversight; civil liberties debate',
    '**Department of Homeland Security (2002)** — new cabinet department coordinating domestic security; largest government reorganization since WWII',
    '**invasion of Afghanistan (Oct. 2001)** — toppled Taliban government harboring al-Qaeda; Osama bin Laden escaped to Pakistan; longest U.S. war (2001–2021)',
  ]},
  { type: 'heading', content: 'iraq war (2003)' },
  { type: 'bullets', content: '', bullets: [
    '**Bush Doctrine** — preemptive war: U.S. would strike first against threats before they materialized; radical departure from containment/deterrence strategy',
    '**WMD justification** — administration claimed Saddam Hussein had weapons of mass destruction; inspections inconclusive; no WMD found after invasion',
    '**invasion (March 2003)** — rapid military victory; but occupation became insurgency; Abu Ghraib scandal; hundreds of thousands of Iraqi civilians killed or displaced',
    '**"mission accomplished" (May 2003)** — premature declaration; war dragged on until 2011 for U.S. combat forces; ISIS rose from instability',
  ]},
  { type: 'heading', content: 'civil liberties debate' },
  { type: 'bullets', content: '', bullets: [
    '**surveillance state** — NSA mass surveillance programs (later revealed by Snowden, 2013); balance between security and privacy',
    '**Guantanamo Bay** — detention without trial; "enhanced interrogation" (torture debate); military tribunals vs. civilian courts',
    '**civil liberties vs. national security** — recurring constitutional tension: 1st Amendment, 4th Amendment, due process',
  ]},
  { type: 'frqtip', content: 'Connect 9/11 to longer historical threads: the expansion of executive power in wartime (Lincoln, FDR, Nixon, Bush); civil liberties restrictions during national security crises (Espionage/Sedition Acts, Japanese internment, PATRIOT Act). The AP exam loves these continuity-and-change questions across eras.' },
]

export default function APUSHU9T3() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 3, title: '9/11 & war on terror', keyTerms: ['September 11', 'PATRIOT Act', 'Bush Doctrine', 'preemptive war', 'Afghanistan', 'Iraq War', 'WMD', 'Homeland Security', 'civil liberties', 'surveillance'] }}
      sections={sections}
      prev={{ href: '/apush/unit-9/2', title: 'end of cold war & globalization' }}
      next={{ href: '/apush/unit-9/4', title: 'modern political polarization' }}
      courseHref="/apush" unitHref="/apush/unit-9"
    />
  )
}
