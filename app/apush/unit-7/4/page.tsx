import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 7, title: 'period 7: 1890–1945' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the 1920s — prosperity and conflict' },
  { type: 'body', content: 'The 1920s were defined by a paradox: economic boom, cultural modernization, and mass consumption on one hand; prohibition, nativism, the KKK\'s revival, and fundamentalist backlash on the other. The decade ended in the worst economic catastrophe in American history.' },
  { type: 'heading', content: 'consumerism & modernization' },
  { type: 'bullets', content: '', bullets: [
    '**Mass production** — Henry Ford\'s assembly line made the Model T affordable; by 1927, half of all Americans owned a car; reshaped geography, suburbs, and courtship',
    '**Consumer credit** — "buy now, pay later" enabled mass consumption; installment buying created a debt-dependent economy',
    '**Radio and film** — created a national popular culture for the first time; Hollywood, jazz, and advertising linked the country',
    '**Flappers** — young women who flouted Victorian propriety: short hair, shorter skirts, voting, smoking, dancing; symbol of cultural change; rejected domesticity',
    '**Harlem Renaissance** — explosion of Black art, literature, and music in NYC: Langston Hughes, Zora Neale Hurston, Duke Ellington, Louis Armstrong; asserted Black cultural identity and humanity',
  ]},
  { type: 'heading', content: 'backlash — tradition vs. modernity' },
  { type: 'bullets', content: '', bullets: [
    '**Prohibition (18th Amendment, 1920)** — banned alcohol; created organized crime (Al Capone); widely violated; repealed by 21st Amendment (1933)',
    '**KKK revival** — 4–5 million members by mid-1920s; not just the South; anti-Black, anti-Catholic, anti-Jewish, anti-immigrant; openly political; collapsed after scandals',
    '**Immigration Act of 1924** — National Origins Act: limited immigration to 2% of each nationality\'s 1890 population; virtually banned Southern/Eastern European and Asian immigration',
    '**Scopes Trial (1925)** — Tennessee teacher John Scopes tried for teaching evolution; Darrow vs. Bryan; Scopes convicted; fundamentalism vs. modernism debate became national',
    '**Red Scare (1919–1920)** — fear of communist revolution after Russian Revolution; Palmer Raids arrested thousands of immigrants; Sacco and Vanzetti executed (Italian anarchists)',
  ]},
  { type: 'examtip', content: 'The 1920s\' economic boom contained the seeds of the 1929 crash: overproduction, agricultural depression throughout the decade, stock speculation on margin, consumer debt, and weak banking regulations. Know these structural problems for the Great Depression topic.' },
]

export default function APUSHU7T4() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 4, title: 'roaring twenties', keyTerms: ['consumerism', 'Harlem Renaissance', 'flappers', 'Prohibition', 'KKK revival', 'Immigration Act of 1924', 'Scopes Trial', 'Red Scare', 'Langston Hughes'] }}
      sections={sections}
      prev={{ href: '/apush/unit-7/3', title: 'world war i' }}
      next={{ href: '/apush/unit-7/5', title: 'great depression' }}
      courseHref="/apush" unitHref="/apush/unit-7"
    />
  )
}
