import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 8, title: 'period 8: 1945–1980' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'escalation into vietnam' },
  { type: 'bullets', content: '', bullets: [
    '**background** — Vietnam divided at 17th parallel (1954); Ho Chi Minh led communist North Vietnam; U.S. backed South Vietnam; Eisenhower sent military advisors',
    '**Gulf of Tonkin Resolution (1964)** — Congress gave LBJ broad authority to use military force after alleged attack on U.S. ships; later revealed the second "attack" probably didn\'t happen; used to justify massive escalation',
    '**escalation** — U.S. troop levels rose from 16,000 (1963) to 543,000 (1969); massive bombing campaigns (Operation Rolling Thunder)',
  ]},
  { type: 'heading', content: 'the tet offensive (1968)' },
  { type: 'body', content: 'On January 31, 1968 (Vietnamese New Year — Tet), North Vietnamese and Viet Cong forces launched surprise attacks on over 100 cities and towns across South Vietnam, including the U.S. embassy in Saigon. Militarily the U.S. repelled the attacks, but the Tet Offensive shattered public confidence that the U.S. was winning. Walter Cronkite declared the war a "stalemate." LBJ\'s approval ratings collapsed; he announced he would not seek re-election.' },
  { type: 'heading', content: 'anti-war movement' },
  { type: 'bullets', content: '', bullets: [
    '**draft opposition** — young men burned draft cards, fled to Canada; disproportionate burden fell on poor and non-white Americans',
    '**campus protests** — Kent State (1970): National Guard killed 4 students at Ohio protest; massive campus shutdowns nationwide',
    '**credibility gap** — growing distrust between government claims (we\'re winning) and reality',
    '**Pentagon Papers (1971)** — leaked documents showed government had systematically lied about Vietnam for years; published by New York Times and Washington Post',
  ]},
  { type: 'heading', content: 'vietnamization & withdrawal' },
  { type: 'bullets', content: '', bullets: [
    '**Vietnamization (Nixon)** — gradual withdrawal of U.S. troops while training South Vietnamese to fight; paired with secret bombing of Cambodia',
    '**Paris Peace Accords (1973)** — ceasefire; U.S. troops withdrew; no genuine settlement',
    '**fall of Saigon (April 1975)** — North Vietnam overran South Vietnam; U.S. evacuation; communist unification',
  ]},
  { type: 'frqtip', content: 'Vietnam is the most complex AP topic of the Cold War era. For LEQs, be ready to argue either that Vietnam was a failure of containment strategy OR a failure of execution. Include: escalation causes, Tet\'s impact on public opinion, Nixon\'s Vietnamization, and the long-term legacy (War Powers Act 1973, reluctance to use military force).' },
]

export default function APUSHU8T3() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 3, title: 'vietnam war', keyTerms: ['Gulf of Tonkin', 'Tet Offensive', 'Vietnamization', 'credibility gap', 'Kent State', 'Pentagon Papers', 'draft', 'Paris Peace Accords', 'fall of Saigon'] }}
      sections={sections}
      prev={{ href: '/apush/unit-8/2', title: 'truman doctrine & korean war' }}
      next={{ href: '/apush/unit-8/4', title: 'civil rights movement' }}
      courseHref="/apush" unitHref="/apush/unit-8"
    />
  )
}
