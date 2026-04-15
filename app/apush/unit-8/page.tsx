import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'cold war & containment', description: 'Truman Doctrine, Marshall Plan, NATO, NSC-68, McCarthyism, and domino theory.', videoId: 'gTWi3Asm2xw' },
  { number: 2, title: 'truman doctrine & korean war', description: '38th parallel, limited war, MacArthur\'s firing, and inconclusive armistice.', videoId: 'gTWi3Asm2xw' },
  { number: 3, title: 'vietnam war', description: 'Gulf of Tonkin, escalation, Tet Offensive, anti-war movement, and fall of Saigon.', videoId: 'gTWi3Asm2xw' },
  { number: 4, title: 'civil rights movement', description: 'Brown v. Board, Montgomery, sit-ins, Freedom Rides, Civil Rights Act 1964, and Voting Rights Act.', videoId: 'gTWi3Asm2xw' },
  { number: 5, title: 'great society', description: 'LBJ\'s war on poverty, Medicare/Medicaid, and limits of liberal reform.', videoId: 'gTWi3Asm2xw' },
  { number: 6, title: 'nixon & watergate', description: 'détente, SALT I, opening China, stagflation, OPEC, southern strategy, and resignation.', videoId: 'gTWi3Asm2xw' },
]

export default function APUSHUnit8Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 8, title: 'period 8: 1945–1980', examWeight: '10–17%', description: 'Cold War, civil rights, Vietnam, Great Society, and the collapse of liberal consensus.' }}
      topics={topics}
      basePath="/apush/unit-8"
      courseHref="/apush"
      videoId="gTWi3Asm2xw"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
