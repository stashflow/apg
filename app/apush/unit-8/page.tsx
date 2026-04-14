import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'cold war & containment', description: 'Truman Doctrine, Marshall Plan, NATO, NSC-68, and domino theory.', videoId: 'gTWi3Asm2xw' },
  { number: 2, title: 'mccarthyism & red scare', description: 'House Un-American Activities Committee, blacklists, and anti-communist hysteria.' },
  { number: 3, title: 'korean war', description: '38th parallel, MacArthur\'s firing, limited war, and inconclusive end.', videoId: 'gTWi3Asm2xw' },
  { number: 4, title: 'cuban missile crisis', description: '1962 nuclear standoff, Kennedy vs Khrushchev, and brink of nuclear war.' },
  { number: 5, title: 'space race', description: 'Sputnik, NASA, moon landing, and Cold War competition.' },
  { number: 6, title: 'civil rights movement', description: 'Brown v. Board, Montgomery, sit-ins, Freedom Rides, and March on Washington.', videoId: 'gTWi3Asm2xw' },
  { number: 7, title: 'civil rights legislation', description: 'Civil Rights Act 1964, Voting Rights Act 1965, and federal enforcement.' },
  { number: 8, title: 'great society', description: 'LBJ\'s war on poverty, Medicare/Medicaid, and limits of liberal reform.', videoId: 'gTWi3Asm2xw' },
  { number: 9, title: 'vietnam war', description: 'Gulf of Tonkin, escalation, Tet Offensive, anti-war movement, and fall of Saigon.', videoId: 'gTWi3Asm2xw' },
  { number: 10, title: 'counterculture', description: '1960s youth rebellion, hippies, Woodstock, and social change.' },
  { number: 11, title: 'feminist movement', description: 'Betty Friedan, NOW, Roe v. Wade, and second-wave feminism.' },
  { number: 12, title: 'environmental movement', description: 'Silent Spring, Earth Day, EPA, and environmental legislation.' },
  { number: 13, title: 'nixon & watergate', description: 'détente, stagflation, break-in, cover-up, and resignation.', videoId: 'gTWi3Asm2xw' },
  { number: 14, title: 'conservative movement', description: 'backlash against liberalism, Nixon\'s silent majority, and rise of the New Right.' },
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
