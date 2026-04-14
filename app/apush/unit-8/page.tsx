import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'cold war & containment', description: 'Truman Doctrine, Marshall Plan, NATO, NSC-68, and the domino theory — the ideological logic of containment.' },
  { number: 2, title: 'truman doctrine & korean war', description: 'the 38th parallel, MacArthur\'s firing, limited war concept, and the Korean War\'s inconclusive end.' },
  { number: 3, title: 'vietnam war', description: 'Gulf of Tonkin Resolution, escalation, Tet Offensive, anti-war movement, Vietnamization, and the fall of Saigon.' },
  { number: 4, title: 'civil rights movement', description: 'Brown v. Board, Montgomery, sit-ins, Freedom Rides, March on Washington, Civil Rights Act (1964), Voting Rights Act (1965).' },
  { number: 5, title: 'great society', description: 'LBJ\'s war on poverty, Medicare/Medicaid, Elementary Education Act, and the limits of liberal reform.' },
  { number: 6, title: 'nixon & watergate', description: 'détente with China/USSR, stagflation, break-in, cover-up, Saturday Night Massacre, impeachment threat, and resignation.' },
]

export default function APUSHUnit8Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 8, title: 'period 8: 1945–1980', examWeight: '10–17%', description: 'Cold War, civil rights, Vietnam, Great Society, and the collapse of liberal consensus.' }}
      topics={topics}
      basePath="/apush/unit-8"
      courseHref="/apush"
      videoId="s4Dqk9FdOms"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
