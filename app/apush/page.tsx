import { CourseLayout } from '@/components/course-layout'
import type { Unit } from '@/components/course-layout'

const units: Unit[] = [
  {
    number: 1,
    title: 'period 1 — 1491–1607',
    examWeight: '4–6%',
    topics: [
      'native american societies before contact',
      'european exploration & motivations',
      'columbian exchange',
      'first contact & early conflict',
      'spanish colonization model',
    ],
  },
  {
    number: 2,
    title: 'period 2 — 1607–1754',
    examWeight: '6–8%',
    topics: [
      'british colonial patterns — chesapeake, new england, middle, southern',
      'slavery & the transatlantic slave trade',
      'colonial economy & mercantilism',
      'religious diversity — puritans, quakers, great awakening',
      'colonial politics & early assemblies',
      'relations with native americans',
    ],
  },
  {
    number: 3,
    title: 'period 3 — 1754–1800',
    examWeight: '10–17%',
    topics: [
      'french & indian war & its aftermath',
      'causes of the american revolution',
      'common sense & declaration of independence',
      'revolutionary war — key battles & turning points',
      'articles of confederation weaknesses',
      'constitutional convention & the constitution',
      'federalists vs. anti-federalists',
      'washington\'s presidency & precedents',
      'french revolution\'s impact on us',
      'adams & alien/sedition acts',
    ],
  },
  {
    number: 4,
    title: 'period 4 — 1800–1848',
    examWeight: '10–17%',
    topics: [
      'revolution of 1800 & jeffersonian republicanism',
      'louisiana purchase & western expansion',
      'war of 1812',
      'era of good feelings & market revolution',
      'jacksonian democracy — spoils system, bank war',
      'indian removal act & trail of tears',
      'manifest destiny',
      'antebellum reform movements — abolitionism, women\'s rights',
      'second great awakening',
      'texas annexation & mexican-american war',
    ],
  },
  {
    number: 5,
    title: 'period 5 — 1844–1877',
    examWeight: '10–17%',
    topics: [
      'sectionalism & slavery debate — compromise of 1850',
      'kansas-nebraska act & bleeding kansas',
      'dred scott decision',
      'election of 1860 & secession',
      'civil war — causes, turning points, key battles',
      'emancipation proclamation',
      'reconstruction plans — lincoln, johnson, radical',
      '13th, 14th, 15th amendments',
      'freedmen\'s bureau & sharecropping',
      'end of reconstruction & "redeemers"',
    ],
  },
  {
    number: 6,
    title: 'period 6 — 1865–1898',
    examWeight: '10–17%',
    topics: [
      'the gilded age — industrialization & big business',
      'robber barons vs. captains of industry',
      'railroad expansion & its effects',
      'immigration waves & nativist responses',
      'urbanization & social problems',
      'the west — homesteading, native american conflict',
      'populist movement',
      'labor unions & strikes',
      'jim crow laws & plessy v. ferguson',
      'new imperialism — hawaii, cuba, philippines',
    ],
  },
  {
    number: 7,
    title: 'period 7 — 1890–1945',
    examWeight: '10–17%',
    topics: [
      'progressive era reforms',
      'muckrakers & trust-busting',
      'world war I — causes, us neutrality, entry',
      'treaty of versailles & wilson\'s 14 points',
      'red scare & palmer raids',
      'harlem renaissance',
      'the 1920s — roaring twenties, consumerism',
      'great depression — causes & effects',
      'new deal — programs, critics, legacy',
      'world war II — pearl harbor, home front, decision to drop atomic bombs',
    ],
  },
  {
    number: 8,
    title: 'period 8 — 1945–1980',
    examWeight: '10–17%',
    topics: [
      'cold war origins & containment policy',
      'truman doctrine & marshall plan',
      'korean war',
      'mccarthyism & second red scare',
      'civil rights movement — key figures, events, legislation',
      'vietnam war — escalation, protests, tet offensive',
      'great society & LBJ\'s domestic programs',
      'women\'s liberation movement',
      'nixon, watergate, & détente',
      'energy crisis & stagflation',
    ],
  },
  {
    number: 9,
    title: 'period 9 — 1980–present',
    examWeight: '4–6%',
    topics: [
      'reagan revolution & conservative ascendancy',
      'end of the cold war',
      'clinton era & culture wars',
      'september 11 & war on terror',
      'recession of 2008',
      'political polarization & recent trends',
    ],
  },
]

export default function APUSHPage() {
  return (
    <CourseLayout
      course={{
        id: 'apush',
        label: 'ap united states history',
        short: 'apush',
        description: 'from pre-columbian civilizations to the 21st century — every period, every turning point, every SAQ, LEQ, and DBQ strategy you need for a 5.',
        banner: '/images/apush-banner.jpg',
        accent: '#ef4444',
        accentLight: '#f59e0b',
        bgClass: 'bg-apush-red',
        examDate: 'may 2025 — check collegeboard for exact date',
        units,
      }}
      basePath="/apush"
    />
  )
}
