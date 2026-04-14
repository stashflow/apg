import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 4, title: 'period 4: 1800–1848' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'war of 1812 (1812–1815)' },
  { type: 'body', content: 'Congress declared war on Britain in June 1812 — the vote was extremely close (79–49 in House), revealing a divided nation. New England Federalists opposed the war (they called it "Mr. Madison\'s War"), while Southern and Western War Hawks (Henry Clay, John C. Calhoun) pushed for it, hoping to seize Canada and end British support for Native American resistance.' },
  { type: 'table', content: '', tableHeaders: ['cause', 'explanation'],
    tableRows: [
      ['Impressment', 'British Royal Navy kidnapping American sailors, claiming they were British deserters'],
      ['Native American support', 'Britain arming Tecumseh\'s confederacy to resist American westward expansion'],
      ['Orders in Council', 'British blockade rules forcing American ships to stop in British ports first'],
      ['War Hawks', 'Southern/Western congressmen wanted to conquer Canada and Florida; expand territory'],
    ]
  },
  { type: 'heading', content: 'key events & outcomes' },
  { type: 'bullets', content: '', bullets: [
    '**USS Constitution** — defeated HMS Guerriere; gave Americans a naval hero and "Old Ironsides" mythology',
    '**Burning of Washington D.C. (1814)** — British burned the White House and Capitol; Madison fled',
    '**Battle of New Orleans (January 1815)** — Andrew Jackson\'s greatest victory; killed 2,000 British for 13 American casualties. Fought AFTER the Treaty of Ghent had already ended the war — but Americans didn\'t know yet. Made Jackson a national hero.',
    '**Treaty of Ghent (1814)** — status quo ante bellum (restored everything to pre-war state); no territory changed hands; British stopped impressing sailors (Napoleonic Wars already ended)',
    '**Hartford Convention (1814)** — New England Federalists met to discuss secession or constitutional amendments; seen as treasonous after Jackson\'s victory; destroyed the Federalist Party permanently',
  ]},
  { type: 'heading', content: 'consequences' },
  { type: 'bullets', content: '', bullets: [
    'Era of Good Feelings — surge of American nationalism; one political party (Democratic-Republicans)',
    'Death of the Federalist Party (Hartford Convention seen as treason)',
    'Tecumseh killed in battle (1813) — ended organized pan-Indian resistance east of the Mississippi',
    'American manufacturing grew during the war (British imports cut off) — seeds of the Market Revolution',
    'Andrew Jackson emerged as a national hero — set up his 1828 presidential run',
  ]},
  { type: 'examtip', content: 'The Battle of New Orleans was fought AFTER the peace treaty — know this. It had no military significance but enormous political importance: it made Americans think they had "won" the war and created Andrew Jackson\'s national political career.' },
]

export default function APUSHU4T3() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 3, title: 'war of 1812', keyTerms: ['War Hawks', 'impressment', 'Tecumseh', 'Battle of New Orleans', 'Treaty of Ghent', 'Hartford Convention', 'Andrew Jackson', 'USS Constitution'] }}
      sections={sections}
      prev={{ href: '/apush/unit-4/2', title: 'louisiana purchase' }}
      next={{ href: '/apush/unit-4/4', title: 'era of good feelings & monroe doctrine' }}
      courseHref="/apush" unitHref="/apush/unit-4"
    />
  )
}
