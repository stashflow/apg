import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 8, title: 'period 8: 1945–1980' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'korean war (1950–1953)' },
  { type: 'body', content: 'Korea had been divided at the 38th parallel after WWII: communist North Korea (backed by USSR/China) and democratic South Korea (backed by U.S.). In June 1950, North Korea invaded South Korea. The UN (with U.S. leadership) authorized military intervention — the first time the UN authorized collective military action.' },
  { type: 'bullets', content: '', bullets: [
    '**UN forces under MacArthur** pushed North Korea back nearly to the Chinese border (Yalu River)',
    '**China entered the war (Oct. 1950)** — hundreds of thousands of Chinese troops pushed UN forces back to the 38th parallel',
    '**MacArthur\'s firing (April 1951)** — MacArthur publicly disagreed with Truman\'s limited war strategy, urged attacking China; Truman fired him for insubordination; principle of civilian control of the military upheld',
    '**Armistice (July 1953)** — ceasefire along the 38th parallel; no peace treaty; technically still at war today; ~37,000 Americans killed',
    '**limited war concept** — U.S. fought to restore the status quo, NOT for total victory; new Cold War logic to avoid escalation to nuclear war',
  ]},
  { type: 'heading', content: 'significance' },
  { type: 'bullets', content: '', bullets: [
    'first military test of containment — demonstrated U.S. willingness to fight communism worldwide',
    'established the precedent of **limited war** — fighting without declaring war, without seeking total victory',
    'called "the Forgotten War" — overshadowed by WWII before it and Vietnam after it',
    'NSC-68\'s defense spending increase was accelerated by the war',
  ]},
  { type: 'examtip', content: 'MacArthur\'s firing is about civilian control of the military — a constitutional principle. Truman said no general could override the president\'s foreign policy. This appears on MCQs asking about the relationship between military and civilian authority.' },
]

export default function APUSHU8T2() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 2, title: 'truman doctrine & korean war', keyTerms: ['38th parallel', 'limited war', 'MacArthur firing', 'civilian control', 'UN intervention', 'armistice', 'China intervention'] }}
      sections={sections}
      prev={{ href: '/apush/unit-8/1', title: 'cold war & containment' }}
      next={{ href: '/apush/unit-8/3', title: 'vietnam war' }}
      courseHref="/apush" unitHref="/apush/unit-8"
    />
  )
}
