import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 7, title: 'period 7: 1890–1945' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'world war i — u.s. entry' },
  { type: 'body', content: 'Wilson kept the U.S. neutral until 1917, winning reelection in 1916 on "He kept us out of war." Three events changed everything: (1) Germany resumed unrestricted submarine warfare (February 1917), (2) Zimmermann Telegram — German offer of a military alliance with Mexico against the U.S. (intercepted by British intelligence), (3) Russian Revolution (March 1917) made the Allies look like a democratic coalition instead of autocracies.' },
  { type: 'bullets', content: '', bullets: [
    '**Lusitania (1915)** — British passenger ship sunk by German U-boat; 1,198 killed including 128 Americans; outraged public but Wilson negotiated the Sussex Pledge (Germany promised to stop targeting civilian ships)',
    '**Committee on Public Information (CPI)** — George Creel\'s propaganda agency; produced 75 million pamphlets; turned anti-war nation into pro-war in months',
    '**Espionage Act (1917) and Sedition Act (1918)** — criminalized anti-war speech; Eugene Debs sentenced to 10 years for anti-war speech; Schenck v. United States (1919) — "clear and present danger" test for speech limits',
    '**Great Migration (1916–1920)** — 500,000+ Black Americans migrated from the South to Northern industrial cities for war jobs; escaped Jim Crow but faced Northern racism and race riots (Chicago, 1919)',
  ]},
  { type: 'heading', content: 'wilson\'s fourteen points & the treaty of versailles' },
  { type: 'bullets', content: '', bullets: [
    '**Fourteen Points (January 1918)** — Wilson\'s idealistic peace plan: self-determination, freedom of the seas, open diplomacy, League of Nations as 14th point',
    '**Treaty of Versailles (1919)** — European Allies (France especially) imposed harsh terms on Germany: war guilt clause, $33 billion in reparations, loss of territory, military restrictions',
    '**Senate rejection (1919–1920)** — Senator Henry Cabot Lodge led Republican opposition; U.S. never joined the League of Nations; Wilson\'s greatest failure',
    '**Legacy** — harsh reparations + German humiliation → economic instability → rise of Hitler → WWII. Churchill: "This is not a peace. It is an armistice for twenty years." He was off by 20 days.',
  ]},
  { type: 'examtip', content: 'Wilson\'s Fourteen Points vs. the actual Treaty of Versailles is classic APUSH. Wilson got the League of Nations but sacrificed self-determination for colonized peoples to get it. Then the Senate rejected it anyway. Know Lodge\'s specific objections: U.S. sovereignty and Article X (collective security obligation).' },
]

export default function APUSHU7T3() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 3, title: 'world war i', keyTerms: ['Zimmermann Telegram', 'Lusitania', 'CPI', 'Espionage Act', 'Great Migration', 'Fourteen Points', 'Treaty of Versailles', 'League of Nations', 'Lodge'] }}
      sections={sections}
      prev={{ href: '/apush/unit-7/2', title: 'imperialism' }}
      next={{ href: '/apush/unit-7/4', title: 'roaring twenties' }}
      courseHref="/apush" unitHref="/apush/unit-7"
    />
  )
}
