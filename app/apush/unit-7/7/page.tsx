import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 7, title: 'period 7: 1890–1945' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'road to war' },
  { type: 'bullets', content: '', bullets: [
    '**U.S. neutrality (1939–1941)** — Neutrality Acts of the 1930s; isolationist sentiment ("America First"); Lend-Lease Act (1941) allowed arms to Britain without immediate payment',
    '**Pearl Harbor (December 7, 1941)** — Japanese surprise attack on U.S. naval base in Hawaii; 2,400 Americans killed; FDR called it "a date which will live in infamy"; U.S. declared war the next day',
    '**Germany declared war on U.S. (Dec. 11, 1941)** — completed U.S. entry into full two-ocean war',
  ]},
  { type: 'heading', content: 'the home front' },
  { type: 'bullets', content: '', bullets: [
    '**industrial mobilization** — U.S. factories converted to war production; GDP grew enormously; unemployment ended; war finally ended the Depression',
    '**"Rosie the Riveter"** — women entered industrial workforce in huge numbers; transformed gender roles, though many lost jobs after the war',
    '**rationing and price controls** — Office of Price Administration; Americans rationed food, gas, rubber',
    '**war bonds** — citizens bought bonds to finance the war effort',
    '**Double V Campaign** — Black Americans fought for victory abroad AND equality at home; NAACP membership grew; tensions and race riots (Detroit 1943)',
  ]},
  { type: 'heading', content: 'japanese american internment' },
  { type: 'body', content: 'Executive Order 9066 (1942) authorized the forced removal of 120,000 Japanese Americans (two-thirds were U.S. citizens) from the West Coast to internment camps. Korematsu v. United States (1944) — Supreme Court upheld internment as a wartime necessity. One of the most disgraceful civil liberties violations in American history; government formally apologized and paid reparations in 1988.' },
  { type: 'heading', content: 'key military events' },
  { type: 'bullets', content: '', bullets: [
    '**D-Day (June 6, 1944)** — Allied invasion of Normandy, France; began the liberation of Western Europe',
    '**island-hopping** — U.S. Pacific strategy of capturing strategic islands while bypassing heavily fortified ones',
    '**Holocaust** — Nazi genocide killed 6 million Jews and millions of others; U.S. slow to acknowledge or act; moral controversy',
    '**atomic bomb** — Truman authorized bombing of Hiroshima (Aug. 6) and Nagasaki (Aug. 9), 1945; Japan surrendered; enormous controversy over justification',
  ]},
  { type: 'frqtip', content: 'The atomic bomb decision is a classic LEQ/DBQ topic. Practice arguing BOTH sides: justification (would have cost more lives to invade Japan, Japan would not surrender) AND criticism (Japan was near surrender, racial dimension, inaugurated nuclear age). A sophisticated answer engages both perspectives with specific evidence.' },
]

export default function APUSHU7T7() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 7, title: 'world war ii', keyTerms: ['Pearl Harbor', 'Lend-Lease', 'internment', 'Korematsu', 'D-Day', 'atomic bomb', 'Double V Campaign', 'Rosie the Riveter', 'Executive Order 9066'] }}
      sections={sections}
      prev={{ href: '/apush/unit-7/6', title: 'new deal' }}
      next={{ href: '/apush/unit-8/1', title: 'cold war & containment' }}
      courseHref="/apush" unitHref="/apush/unit-7"
    />
  )
}
