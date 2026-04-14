import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 7, title: 'period 7: 1890–1945' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'american imperialism' },
  { type: 'body', content: 'By 1890, the continental frontier was closed (Census Bureau, 1890). Alfred Thayer Mahan\'s The Influence of Sea Power Upon History (1890) argued the U.S. needed a powerful navy, overseas bases, and markets to be a world power. Social Darwinism, the "civilizing mission," and economic interests (raw materials and new markets) drove American imperialism.' },
  { type: 'heading', content: 'spanish-american war (1898)' },
  { type: 'bullets', content: '', bullets: [
    '**Cuba** — Cuban rebels fought Spanish colonial rule; yellow journalism (Hearst/Pulitzer) sensationalized Spanish atrocities; USS Maine explosion in Havana Harbor (February 1898) — cause unknown but blamed on Spain',
    '**"You furnish the pictures, I\'ll furnish the war"** — attributed to Hearst; whether true or not, it captures the yellow press\'s role',
    '**Results**: Spain ceded Guam, Puerto Rico, the Philippines ($20M) → Treaty of Paris (1898)',
    '**Philippines debate** — McKinley decided to keep the Philippines to "civilize and Christianize" them (already Catholic); Filipino-American War (1899–1902) followed; 200,000+ Filipino deaths',
  ]},
  { type: 'heading', content: 'anti-imperialism vs. imperialism' },
  { type: 'bullets', content: '', bullets: [
    '**Anti-Imperialist League** — Mark Twain, Andrew Carnegie, Jane Addams: acquisition of colonies violated American democratic principles; racist to force "inferior" peoples to be American subjects',
    '**Imperialists** — TR, Lodge, Mahan: great nations have empires; U.S. must project power; "white man\'s burden" to civilize non-European peoples',
    '**Platt Amendment (1901)** — U.S. reserved right to intervene in Cuba whenever it chose; Cuba was nominally independent but effectively a U.S. protectorate until 1934',
    '**Open Door Policy (1899–1900)** — Secretary of State Hay demanded European powers allow equal trading access to China; U.S. had no sphere of influence but wanted Chinese markets',
    '**Roosevelt Corollary (1904)** — U.S. will intervene in Latin American countries unable to meet international obligations; used to justify interventions in Haiti, Nicaragua, Dominican Republic',
  ]},
  { type: 'examtip', content: 'Imperialism vs. Anti-Imperialism is a classic APUSH LEQ setup. The best essays acknowledge both sides had internally consistent arguments: imperialists used Social Darwinism and strategic necessity; anti-imperialists used Declaration of Independence ideals and racial concerns.' },
]

export default function APUSHU7T2() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 2, title: 'imperialism', keyTerms: ['Spanish-American War', 'Philippines', 'yellow journalism', 'Platt Amendment', 'Open Door Policy', 'Roosevelt Corollary', 'Anti-Imperialist League', 'Mahan'] }}
      sections={sections}
      prev={{ href: '/apush/unit-7/1', title: 'progressive era' }}
      next={{ href: '/apush/unit-7/3', title: 'world war i' }}
      courseHref="/apush" unitHref="/apush/unit-7"
    />
  )
}
