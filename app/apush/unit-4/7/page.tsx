import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 4, title: 'period 4: 1800–1848' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'indian removal act (1830)' },
  { type: 'body', content: 'Jackson pushed the Indian Removal Act through Congress in 1830, authorizing the forced relocation of Native American tribes from the Southeast to lands west of the Mississippi. The "Five Civilized Tribes" — Cherokee, Chickasaw, Choctaw, Creek, and Seminole — had adopted American farming, written languages, and legal systems, hoping assimilation would protect them. It did not.' },
  { type: 'heading', content: 'worcester v. georgia (1832)' },
  { type: 'body', content: 'The Supreme Court, under John Marshall, ruled that Georgia had no authority over Cherokee lands — the Cherokee Nation was a "distinct community" with sovereign rights. Jackson allegedly said: "John Marshall has made his decision; now let him enforce it." He ignored the ruling entirely and enforced removal anyway — the most flagrant defiance of the Supreme Court by any president in U.S. history.' },
  { type: 'heading', content: 'trail of tears (1838–1839)' },
  { type: 'body', content: 'Under President Van Buren, U.S. Army soldiers forced approximately 16,000 Cherokee to march 1,000 miles to Oklahoma in winter. Roughly 4,000–8,000 Cherokee died of cold, disease, and starvation. The Choctaw, Creek, Chickasaw, and Seminole also faced brutal removals. The Seminole fought back in the Second Seminole War (1835–1842) — the costliest Indian war in U.S. history.' },
  { type: 'bullets', content: '', bullets: [
    '**Sequoyah** — Cherokee scholar who created the Cherokee syllabary (written language) in 1821 — proof of cultural sophistication ignored by removal advocates',
    '**Indian Territory** — present-day Oklahoma; tribes relocated there had separate, treaty-guaranteed sovereignty that was repeatedly violated',
    '**Second Seminole War** — Osceola led guerrilla resistance in Florida swamps; U.S. eventually captured him under flag of truce (dishonorable)',
    '**Long-term impact** — set precedent for continued land seizure; "Indian Territory" itself was opened to white settlers in Oklahoma Land Rush (1889)',
  ]},
  { type: 'examtip', content: 'Worcester v. Georgia + Jackson\'s defiance = the most powerful example in APUSH of executive supremacy overriding judicial authority. Know the principle: separation of powers means nothing if one branch refuses to obey another.' },
  { type: 'frqtip', content: 'For LEQ or SAQ about Jacksonian Democracy, make sure to include Indian Removal as evidence that "democracy" for white men came at the direct expense of Native Americans. The expansion of white male suffrage and Indian removal are two sides of the same coin in this period.' },
]

export default function APUSHU4T7() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 7, title: 'indian removal act', keyTerms: ['Indian Removal Act', 'Five Civilized Tribes', 'Trail of Tears', 'Worcester v. Georgia', 'Cherokee', 'Sequoyah', 'Second Seminole War', 'Osceola'] }}
      sections={sections}
      prev={{ href: '/apush/unit-4/6', title: 'jacksonian democracy' }}
      next={{ href: '/apush/unit-4/8', title: 'second great awakening & reform movements' }}
      courseHref="/apush" unitHref="/apush/unit-4"
    />
  )
}
