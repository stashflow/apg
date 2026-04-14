import { CourseLayout } from '@/components/course-layout'
import type { Unit } from '@/components/course-layout'

const units: Unit[] = [
  {
    number: 1,
    title: 'big idea 1: creative development',
    examWeight: '10–13%',
    topics: [
      'program design process',
      'collaboration in computing',
      'iterative development',
      'testing & debugging',
      'documentation & comments',
    ],
  },
  {
    number: 2,
    title: 'big idea 2: data',
    examWeight: '17–22%',
    topics: [
      'binary numbers & data representation',
      'ASCII & Unicode',
      'pixels & RGB',
      'data compression',
      'overflow & rounding errors',
      'metadata',
      'data visualization & analysis',
      'patterns & trends',
      'big data & limitations',
    ],
  },
  {
    number: 3,
    title: 'big idea 3: algorithms & programming',
    examWeight: '30–35%',
    topics: [
      'variables & data types',
      'conditionals & boolean logic',
      'sequencing, selection & iteration',
      'loops & iteration',
      'nested loops & nested conditionals',
      'string operations',
      'random values & simulation',
      'lists & traversals',
      'procedures, parameters & return values',
      'algorithm design',
      'tracing code step-by-step',
      'linear vs binary search',
      'algorithm efficiency',
      'common pseudocode patterns',
    ],
  },
  {
    number: 4,
    title: 'big idea 4: computer systems & networks',
    examWeight: '11–15%',
    topics: [
      'how the internet works',
      'bandwidth & latency',
      'ip addresses & packets',
      'packet switching',
      'routing & DNS',
      'fault tolerance & redundancy',
      'scalability of the internet',
      'HTTP & protocols',
      'parallel & distributed computing',
      'cybersecurity fundamentals',
      'encryption & authentication',
    ],
  },
  {
    number: 5,
    title: 'big idea 5: impact of computing',
    examWeight: '21–26%',
    topics: [
      'digital divide',
      'bias in algorithms',
      'privacy & surveillance',
      'intellectual property & copyright',
      'open source & licensing',
      'safe computing practices',
      'beneficial & harmful effects',
      'unintended consequences',
      'ethical concerns',
      'crowdsourcing & innovation',
      'create task: abstraction',
      'create task: list usage',
      'create task: student-developed procedure',
      'create task: control structures',
      'create task: video & written response',
      'create performance task guide',
    ],
  },
]

export default function CSPPage() {
  return (
    <CourseLayout
      course={{
        id: 'csp',
        label: 'ap computer science principles',
        short: 'ap csp',
        description: 'from binary to the internet to algorithmic thinking — every concept, create task strategy, and MCQ pattern for a 5.',
        banner: '/images/csp-banner.jpg',
        accent: '#14b8a6',
        accentLight: '#f97316',
        bgClass: 'bg-csp-teal',
        examDate: 'May 14, 2025 — afternoon session (12:00 PM ET)',
        units,
      }}
      basePath="/csp"
    />
  )
}
