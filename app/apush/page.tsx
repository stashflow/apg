import { CourseLayout } from '@/components/course-layout'
import type { Unit } from '@/components/course-layout'

const units: Unit[] = [
  {
    number: 1,
    title: 'period 1: 1491–1607',
    examWeight: '4–6%',
    topics: [
      'native american societies',
      'columbian exchange',
      'columbian exchange impacts',
      'encomienda system',
      'columbian triangle trade beginnings',
    ],
  },
  {
    number: 2,
    title: 'period 2: 1607–1754',
    examWeight: '6–8%',
    topics: [
      'jamestown & virginia',
      'plymouth & massachusetts bay',
      'new england colonies',
      'chesapeake colonies',
      'middle & southern colonies',
      'mercantilism & salutary neglect',
      'first great awakening',
      'colonial slavery',
    ],
  },
  {
    number: 3,
    title: 'period 3: 1754–1800',
    examWeight: '10–17%',
    topics: [
      'french & indian war',
      'taxation without representation',
      'boston massacre & tea party',
      'intolerable acts & continental congress',
      'declaration of independence',
      'articles of confederation',
      'constitutional convention',
      'federalists vs anti-federalists',
      "washington & hamilton's financial plan",
    ],
  },
  {
    number: 4,
    title: 'period 4: 1800–1848',
    examWeight: '10–17%',
    topics: [
      'jefferson presidency',
      'louisiana purchase',
      'war of 1812',
      'era of good feelings & monroe doctrine',
      'market revolution',
      'jacksonian democracy',
      'indian removal act',
      'second great awakening & reform movements',
    ],
  },
  {
    number: 5,
    title: 'period 5: 1844–1877',
    examWeight: '10–17%',
    topics: [
      'manifest destiny',
      'mexican-american war',
      'compromise of 1850',
      'kansas-nebraska act & dred scott',
      'lincoln & causes of the civil war',
      'civil war turning points',
      'reconstruction',
      '13th, 14th & 15th amendments',
    ],
  },
  {
    number: 6,
    title: 'period 6: 1865–1898',
    examWeight: '10–17%',
    topics: [
      'industrialization & railroads',
      'big business & gospel of wealth',
      'labor unions',
      'immigration & urbanization',
      'gilded age politics',
      'populist movement',
    ],
  },
  {
    number: 7,
    title: 'period 7: 1890–1945',
    examWeight: '10–17%',
    topics: [
      'progressive era',
      'imperialism',
      'world war i',
      'roaring twenties',
      'great depression',
      'new deal',
      'world war ii',
    ],
  },
  {
    number: 8,
    title: 'period 8: 1945–1980',
    examWeight: '10–17%',
    topics: [
      'cold war & containment',
      'truman doctrine & korean war',
      'vietnam war',
      'civil rights movement',
      'great society',
      'nixon & watergate',
    ],
  },
  {
    number: 9,
    title: 'period 9: 1980–present',
    examWeight: '4–6%',
    topics: [
      'reagan revolution',
      'end of cold war & globalization',
      '9/11 & war on terror',
      'modern political polarization',
      'supreme court landmark cases',
      'dbq, leq & saq practice',
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
        description: 'from 1491 to the present — every period, turning point, and essay strategy to lock in a 5.',
        banner: '/images/apush-banner.jpg',
        accent: '#ef4444',
        accentLight: '#f59e0b',
        bgClass: 'bg-apush-red',
        examDate: 'May 8, 2026 — morning session (8:00 AM local)',
        units,
      }}
      basePath="/apush"
    />
  )
}
