import { CourseLayout } from '@/components/course-layout'
import type { Unit } from '@/components/course-layout'

const units: Unit[] = [
  {
    number: 1,
    title: 'creative development',
    examWeight: '10–13%',
    topics: [
      'collaboration & pair programming',
      'program design process',
      'prototyping & testing strategies',
      'identifying & correcting errors',
      'documentation & commenting',
    ],
  },
  {
    number: 2,
    title: 'data',
    examWeight: '17–22%',
    topics: [
      'binary & number systems',
      'data representation — text, images, audio',
      'data compression — lossless vs. lossy',
      'analog vs. digital data',
      'metadata & its uses',
      'data storage & file formats',
      'big data & its implications',
      'privacy concerns with data collection',
      'cleaning & analyzing data',
    ],
  },
  {
    number: 3,
    title: 'algorithms & programming',
    examWeight: '30–35%',
    topics: [
      'variables, data types & assignment',
      'conditionals — if/else logic',
      'iteration — loops (for, while, repeat until)',
      'lists & traversal algorithms',
      'procedures (functions) — parameters & return values',
      'abstraction in programming',
      'algorithmic efficiency — linear vs. logarithmic',
      'searching — sequential & binary search',
      'sorting algorithms overview',
      'heuristics & undecidable problems',
      'the create task — what graders look for',
    ],
  },
  {
    number: 4,
    title: 'computer systems & networks',
    examWeight: '11–15%',
    topics: [
      'how the internet works — TCP/IP, DNS, HTTP',
      'IP addresses & routing',
      'fault tolerance & redundancy',
      'bandwidth, latency & packet switching',
      'cybersecurity — encryption, authentication',
      'public key vs. symmetric encryption',
      'the web vs. the internet',
      'hardware components — CPU, memory, storage',
    ],
  },
  {
    number: 5,
    title: 'impact of computing',
    examWeight: '21–26%',
    topics: [
      'computing innovations — beneficial & harmful',
      'digital divide',
      'bias in algorithms & training data',
      'crowdsourcing & open-source',
      'intellectual property — copyright, creative commons',
      'privacy & surveillance',
      'cybercrime & legal issues',
      'computing & the environment',
      'innovation & the economy',
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
        description: 'from binary to the internet to algorithmic thinking — every concept, create task strategy, and MCQ pattern you need to lock in a 5.',
        banner: '/images/csp-banner.jpg',
        accent: '#14b8a6',
        accentLight: '#f97316',
        bgClass: 'bg-csp-teal',
        examDate: 'may 2025 — check collegeboard for exact date',
        units,
      }}
      basePath="/csp"
    />
  )
}
