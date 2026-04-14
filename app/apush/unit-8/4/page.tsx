import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 8, title: 'period 8: 1945–1980' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the legal foundation' },
  { type: 'bullets', content: '', bullets: [
    '**Plessy v. Ferguson (1896)** — "separate but equal" doctrine; legalized Jim Crow segregation for 58 years',
    '**Brown v. Board of Education (1954)** — unanimous Supreme Court ruled school segregation inherently unequal; overturned Plessy; "separate educational facilities are inherently unequal"; Thurgood Marshall argued for NAACP',
    '**massive resistance** — white Southerners resisted; Eisenhower sent federal troops to Little Rock (1957) to enforce desegregation of Central High School',
  ]},
  { type: 'heading', content: 'key events of the movement' },
  { type: 'table', content: '', tableHeaders: ['event', 'year', 'significance'],
    tableRows: [
      ['Montgomery Bus Boycott', '1955–56', 'Rosa Parks arrested; 381-day boycott; Supreme Court ruled bus segregation unconstitutional; MLK emerged as national leader'],
      ['Sit-ins', '1960', 'Greensboro NC students sat at whites-only lunch counters; spread nationwide; SNCC formed'],
      ['Freedom Rides', '1961', 'Interracial groups rode buses through South to test interstate travel desegregation; met with violence; Kennedy forced to act'],
      ['Birmingham Campaign', '1963', 'MLK targeted Birmingham; Bull Connor used fire hoses and dogs on protesters; televised brutality shocked the nation; Kennedy proposed Civil Rights Act'],
      ['March on Washington', '1963', '250,000 gathered; "I Have a Dream" speech; built pressure for Civil Rights Act'],
      ['Freedom Summer', '1964', 'Voter registration drive in Mississippi; 3 workers murdered; exposed violent resistance'],
      ['Selma to Montgomery', '1965', '"Bloody Sunday" on Edmund Pettus Bridge; televised violence; LBJ pushed Voting Rights Act'],
    ]
  },
  { type: 'heading', content: 'landmark legislation' },
  { type: 'bullets', content: '', bullets: [
    '**Civil Rights Act (1964)** — banned discrimination in public accommodations and employment based on race, color, religion, sex, or national origin; created EEOC',
    '**Voting Rights Act (1965)** — eliminated literacy tests and other barriers to Black voting; federal oversight of elections in discriminatory states; most important voting rights law in U.S. history',
    '**24th Amendment (1964)** — banned poll taxes in federal elections',
  ]},
  { type: 'heading', content: 'black power & later movement' },
  { type: 'bullets', content: '', bullets: [
    '**Black Power (post-1966)** — Stokely Carmichael; emphasis on Black pride, self-determination, economic power; rejection of integration as the goal',
    '**Black Panthers (1966)** — armed self-defense, community programs, revolutionary rhetoric',
    '**MLK\'s assassination (April 4, 1968)** — Memphis; massive riots in cities nationwide; civil rights coalition fractured',
  ]},
  { type: 'examtip', content: 'The exam frequently asks you to compare tactics: nonviolent direct action (SCLC, MLK) vs. Black Power/self-defense (SNCC after 1966, Black Panthers). A sophisticated answer notes that nonviolent tactics were effective partly BECAUSE they exposed Southern violence on television to a national audience that had not witnessed Jim Crow directly.' },
]

export default function APUSHU8T4() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 4, title: 'civil rights movement', keyTerms: ['Brown v. Board', 'Montgomery Bus Boycott', 'Civil Rights Act 1964', 'Voting Rights Act 1965', 'MLK', 'SNCC', 'NAACP', 'Black Power', 'nonviolent direct action'] }}
      sections={sections}
      prev={{ href: '/apush/unit-8/3', title: 'vietnam war' }}
      next={{ href: '/apush/unit-8/5', title: 'great society' }}
      courseHref="/apush" unitHref="/apush/unit-8"
    />
  )
}
