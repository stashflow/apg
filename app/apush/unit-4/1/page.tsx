import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 4, title: 'period 4: 1800–1848' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the "revolution of 1800"' },
  { type: 'body', content: 'Jefferson called his 1800 election victory a "revolution" because it was the first peaceful transfer of power between opposing political parties in a major republic — unprecedented in history. The Federalists (Adams) lost; the Democratic-Republicans (Jefferson) won. Notably, the election nearly ended in crisis: a tie in the Electoral College (Jefferson vs. Burr) was broken by the House of Representatives after 36 ballots. The 12th Amendment (1804) fixed this by requiring separate votes for president and vice president.' },
  { type: 'heading', content: 'marbury v. madison (1803)' },
  { type: 'body', content: 'Chief Justice John Marshall\'s landmark ruling established JUDICIAL REVIEW — the power of the Supreme Court to strike down federal laws as unconstitutional. William Marbury had been denied his judgeship by Jefferson. Marshall ruled he deserved it but the Court couldn\'t force Jefferson to give it, because the law authorizing the court to do so was itself unconstitutional. Brilliant political maneuver: gave the Court enormous long-term power while appearing to rule against it in the short term.' },
  { type: 'examtip', content: 'Judicial review is NOT in the Constitution — Marshall invented it in Marbury v. Madison. The Constitution says courts resolve "cases and controversies" but doesn\'t explicitly grant power to strike down laws. Know: Marshall used strict logic to claim enormous power while appearing restrained.' },
  { type: 'heading', content: 'jefferson\'s republican simplicity' },
  { type: 'bullets', content: '', bullets: [
    '**Reduced federal government** — cut army, navy, and federal employees; eliminated excise taxes (including whiskey tax); paid down national debt',
    '**Strict construction (usually)** — but completely abandoned it for the Louisiana Purchase',
    '**Barbary Wars (1801–1805)** — sent Navy to fight Barbary Coast pirates who demanded tribute; showed even Jefferson would use military force',
    '**Alien & Sedition Acts** — expired under Jefferson; Virginia and Kentucky Resolutions (Jefferson and Madison, 1798) had argued states could "nullify" federal laws — a doctrine that resurfaces with Jackson and the Civil War',
  ]},
  { type: 'heading', content: 'john marshall\'s court — federalist legacy' },
  { type: 'bullets', content: '', bullets: [
    '**McCulloch v. Maryland (1819)** — confirmed implied powers (national bank constitutional) and federal supremacy over states',
    '**Gibbons v. Ogden (1824)** — federal government controls interstate commerce; states cannot obstruct it',
    'Marshall served until 1835 and consistently expanded federal power despite Jefferson\'s Democratic-Republican dominance — proving the Court\'s independence',
  ]},
  { type: 'frqtip', content: 'SAQ questions often compare Hamilton and Jefferson, then ask how Marshall\'s Court resolved these tensions. Answer: Marshall sided with Hamilton\'s vision of federal power in almost every major case, cementing Federalist constitutional interpretation even after the Federalist Party died.' },
]

export default function APUSHU4T1() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 1, title: 'jefferson presidency', keyTerms: ['Revolution of 1800', 'Marbury v. Madison', 'judicial review', 'John Marshall', 'Republican simplicity', '12th Amendment', 'McCulloch v. Maryland', 'Barbary Wars'] }}
      sections={sections}
      next={{ href: '/apush/unit-4/2', title: 'louisiana purchase' }}
      courseHref="/apush" unitHref="/apush/unit-4"
    />
  )
}
