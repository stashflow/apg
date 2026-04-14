import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 5, title: 'period 5: 1844–1877' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the reconstruction amendments' },
  { type: 'table', content: '', tableHeaders: ['amendment', 'year', 'what it did', 'overturned what'],
    tableRows: [
      ['13th', '1865', 'Abolished slavery and involuntary servitude (exception: punishment for crime)', 'Dred Scott — slavery itself'],
      ['14th', '1868', 'Citizenship to all born/naturalized; equal protection; due process; no state shall deprive... — the most litigated amendment', 'Dred Scott — Black citizenship; established national citizenship over state citizenship'],
      ['15th', '1870', 'Cannot deny the right to vote based on race, color, or previous condition of servitude', 'Restrictions on Black male voting'],
    ]
  },
  { type: 'heading', content: 'how the south circumvented the amendments' },
  { type: 'bullets', content: '', bullets: [
    '**Poll taxes** — required payment to vote; too expensive for most Black (and poor white) voters; banned by 24th Amendment (1964)',
    '**Literacy tests** — selectively administered to Black voters; designed to fail them regardless of actual literacy',
    '**Grandfather clauses** — could vote if your grandfather could (pre-Civil War) — excluded Black people while protecting poor whites',
    '**White primaries** — Democratic Party declared itself a private club; excluded Black voters from the only election that mattered in the one-party South',
    '**Terror** — KKK violence, lynching, economic intimidation suppressed Black voting even where legal barriers failed',
  ]},
  { type: 'heading', content: 'plessy v. ferguson (1896)' },
  { type: 'body', content: 'Homer Plessy (7/8 white, 1/8 Black) was arrested for sitting in a "white" railroad car in Louisiana. The Supreme Court ruled 7–1 that "separate but equal" facilities were constitutional under the 14th Amendment. Justice John Marshall Harlan\'s lone dissent: "Our Constitution is color-blind." Plessy legalized Jim Crow segregation for 58 years until Brown v. Board of Education (1954).' },
  { type: 'examtip', content: 'The Reconstruction Amendments are the most important constitutional changes since the Bill of Rights. The 14th Amendment is the most litigated amendment in U.S. history — it underlies every civil rights case, due process case, and equal protection case. Know all three amendments cold.' },
  { type: 'frqtip', content: 'For any LEQ about the success or failure of Reconstruction, the strongest argument: the amendments themselves were revolutionary and created the legal architecture for eventual equality, but their implementation failed because Northern political will collapsed before Southern white resistance. This sets up the Civil Rights Movement of the 1950s–60s as a "Second Reconstruction."' },
]

export default function APUSHU5T8() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 8, title: '13th, 14th & 15th amendments', keyTerms: ['13th Amendment', '14th Amendment', '15th Amendment', 'equal protection', 'due process', 'Plessy v. Ferguson', 'separate but equal', 'poll tax', 'literacy test'] }}
      sections={sections}
      prev={{ href: '/apush/unit-5/7', title: 'reconstruction' }}
      courseHref="/apush" unitHref="/apush/unit-5"
    />
  )
}
