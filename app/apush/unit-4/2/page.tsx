import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 4, title: 'period 4: 1800–1848' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the louisiana purchase (1803)' },
  { type: 'body', content: 'Napoleon sold the Louisiana Territory to the U.S. for $15 million (about 3 cents per acre) — doubling the size of the country overnight. Jefferson was torn: as a strict constructionist, he knew the Constitution didn\'t explicitly authorize buying foreign territory. He ultimately decided the "general welfare" clause justified it and moved quickly before Napoleon changed his mind. This was Jefferson\'s greatest contradiction — using the very loose construction he condemned in Hamilton.' },
  { type: 'bullets', content: '', bullets: [
    '**Why Napoleon sold** — Haiti revolution (led by Toussaint L\'Ouverture) destroyed his New World plans; needed money for European wars',
    '**Constitutional issue** — Jefferson wanted to amend the Constitution first; his cabinet convinced him urgency was more important',
    '**Lewis & Clark Expedition (1804–1806)** — Jefferson sent Meriwether Lewis and William Clark to explore the territory; Sacagawea (Shoshone) guided them; produced detailed maps and scientific reports',
    '**Zebulon Pike (1806)** — explored the Southwest; gave Americans knowledge of Spanish-held territories',
    '**Impact on slavery** — doubled slave territory potential; Missouri Compromise (1820) would attempt to manage this',
  ]},
  { type: 'heading', content: 'embargo act (1807) & war buildup' },
  { type: 'body', content: 'Britain and France were at war and both were seizing American ships and impressing (kidnapping) American sailors into their navies. Jefferson tried "peaceful coercion" — the Embargo Act (1807) banned all U.S. exports. It devastated the American economy (especially New England) while barely affecting Britain or France. Madison replaced it with the Non-Intercourse Act, then Macon\'s Bill No. 2 — all failures. The War Hawks in Congress pushed for war with Britain.' },
  { type: 'examtip', content: 'The Louisiana Purchase shows the tension between Jefferson\'s ideology and his actions. His "strict construction" was repeatedly abandoned when political necessity demanded. APUSH loves this hypocrisy — it\'s a great analytical point for any LEQ about Jefferson.' },
]

export default function APUSHU4T2() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 2, title: 'louisiana purchase', keyTerms: ['Louisiana Purchase', 'Lewis & Clark', 'Sacagawea', 'Embargo Act', 'strict construction', 'Napoleon', 'impressment', 'War Hawks'] }}
      sections={sections}
      prev={{ href: '/apush/unit-4/1', title: 'jefferson presidency' }}
      next={{ href: '/apush/unit-4/3', title: 'war of 1812' }}
      courseHref="/apush" unitHref="/apush/unit-4"
    />
  )
}
