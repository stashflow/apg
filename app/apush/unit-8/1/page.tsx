import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 8, title: 'period 8: 1945–1980' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'origins of the cold war' },
  { type: 'body', content: 'The Cold War was the ideological, political, and military competition between the United States and the Soviet Union from 1945 to 1991. It was "cold" because the two superpowers never directly fought each other — instead they competed through proxy wars, arms races, and ideological struggle worldwide.' },
  { type: 'bullets', content: '', bullets: [
    '**Yalta Conference (1945)** — FDR, Churchill, Stalin agreed on postwar Europe; Stalin agreed to free elections in Eastern Europe but never held them',
    '**Soviet expansion** — USSR imposed communist governments across Eastern Europe ("Iron Curtain")',
    '**Truman Doctrine (1947)** — U.S. would support free peoples resisting communist subjugation; announced in context of Greece and Turkey; formalized containment policy',
    '**Marshall Plan (1948)** — $13 billion in economic aid to rebuild Western Europe; prevent economic despair from leading to communism',
    '**NATO (1949)** — North Atlantic Treaty Organization; first peacetime military alliance in U.S. history; "an attack on one is an attack on all"',
  ]},
  { type: 'heading', content: 'containment — the core strategy' },
  { type: 'body', content: 'Containment was proposed by diplomat George Kennan (1946 "Long Telegram" and 1947 "X Article"): the U.S. should prevent Soviet expansion wherever it occurred, but need not roll back existing communist control. This became the foundational U.S. Cold War strategy.' },
  { type: 'heading', content: 'nsc-68 and the arms race' },
  { type: 'bullets', content: '', bullets: [
    '**NSC-68 (1950)** — top-secret policy paper; argued the USSR was an existential threat requiring massive military buildup; tripled defense spending',
    '**nuclear arms race** — USSR tested atomic bomb (1949), then hydrogen bomb (1953); massive buildup of ICBMs, bombers; "mutually assured destruction" (MAD)',
    '**Berlin Blockade (1948–49)** — Soviets blocked western access to West Berlin; U.S./allies supplied city by airlift for 11 months; first major Cold War confrontation',
    '**McCarthyism / Second Red Scare** — Senator Joseph McCarthy\'s accusations of communist infiltration (1950–1954); Hollywood blacklist; HUAC hearings; climate of fear; ended when McCarthy attacked the army on live TV',
  ]},
  { type: 'heading', content: 'domino theory' },
  { type: 'body', content: 'Eisenhower articulated the domino theory (1954): if one country fell to communism, neighboring countries would follow like a row of dominoes. This logic justified U.S. intervention in Korea, Vietnam, Latin America, and beyond throughout the Cold War.' },
  { type: 'examtip', content: 'Truman Doctrine vs. Marshall Plan: Truman Doctrine = military/political aid to resist communism. Marshall Plan = economic aid to rebuild capitalist democracies. Both are containment, but through different means. Know both for MCQ and essay prompts asking about U.S. Cold War strategy.' },
]

export default function APUSHU8T1() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 1, title: 'cold war & containment', keyTerms: ['containment', 'Truman Doctrine', 'Marshall Plan', 'NATO', 'NSC-68', 'domino theory', 'McCarthyism', 'Iron Curtain', 'George Kennan', 'MAD'] }}
      sections={sections}
      prev={{ href: '/apush/unit-7/7', title: 'world war ii' }}
      next={{ href: '/apush/unit-8/2', title: 'truman doctrine & korean war' }}
      courseHref="/apush" unitHref="/apush/unit-8"
    />
  )
}
