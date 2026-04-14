import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 5, title: 'period 5: 1844–1877' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'union advantages vs. confederate advantages' },
  { type: 'table', content: '', tableHeaders: ['union (north)', 'confederacy (south)'],
    tableRows: [
      ['23 states, 22 million people', '11 states, 9 million (3.5M enslaved)'],
      ['90% of industrial capacity', 'Agricultural economy; minimal factories'],
      ['70% of railroads', 'Needed only to DEFEND territory, not conquer'],
      ['Large navy; controlled sea lanes', 'Superior generals (Lee, Jackson, Stuart)'],
      ['Had to CONQUER the South to win', 'Fighting a defensive war on home ground'],
    ]
  },
  { type: 'heading', content: 'key turning points' },
  { type: 'bullets', content: '', bullets: [
    '**Antietam (September 17, 1862)** — bloodiest single day in American history (23,000 casualties); tactical draw but Union claimed victory; Lee retreated; gave Lincoln the military victory he needed to issue the Emancipation Proclamation',
    '**Emancipation Proclamation (January 1, 1863)** — freed enslaved people in Confederate states only (not border states); war aim changed from "preserve the Union" to "end slavery"; prevented Britain and France from recognizing the Confederacy (they couldn\'t ally with a pro-slavery power)',
    '**Gettysburg (July 1–3, 1863)** — Lee\'s last major offensive into the North turned back; Pickett\'s Charge annihilated; 50,000 casualties; psychological turning point',
    '**Vicksburg (July 4, 1863)** — Union captured last Confederate stronghold on Mississippi; split Confederacy in two; Grant emerged as the Union\'s general',
    '**Sherman\'s March to the Sea (1864)** — total war: destroyed everything in a 60-mile wide path through Georgia; destroyed Confederate will to fight',
  ]},
  { type: 'heading', content: 'african americans in the war' },
  { type: 'bullets', content: '', bullets: [
    '180,000 Black soldiers served in Union army (United States Colored Troops — USCT)',
    'Paid less than white soldiers until 1864; faced execution if captured rather than prisoner-of-war status',
    '**54th Massachusetts** — most famous Black regiment; assault on Fort Wagner; celebrated in the film Glory',
    'Enslaved people fled to Union lines as "contraband of war" — effectively freed themselves through mass action',
  ]},
  { type: 'examtip', content: 'Know: Antietam enables the Emancipation Proclamation. Gettysburg + Vicksburg (both July 1863) = true military turning point. The Emancipation Proclamation changed the WAR\'S MEANING — making it impossible for Britain to support the Confederacy.' },
]

export default function APUSHU5T6() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 6, title: 'civil war turning points', keyTerms: ['Antietam', 'Emancipation Proclamation', 'Gettysburg', 'Vicksburg', 'Sherman\'s March', 'USCT', '54th Massachusetts', 'total war'] }}
      sections={sections}
      prev={{ href: '/apush/unit-5/5', title: 'lincoln & causes of the civil war' }}
      next={{ href: '/apush/unit-5/7', title: 'reconstruction' }}
      courseHref="/apush" unitHref="/apush/unit-5"
    />
  )
}
