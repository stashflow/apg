import { CourseLayout } from '@/components/course-layout'
import type { Unit } from '@/components/course-layout'

const units: Unit[] = [
  {
    number: 1,
    title: 'claims, reasoning & evidence',
    examWeight: '16–18%',
    topics: [
      'what is rhetoric?',
      'claims — thesis & arguable assertions',
      'types of claims — fact, value, policy',
      'evidence — types and selection',
      'line of reasoning & how claims connect',
      'logical fallacies & how to spot them',
      'commentary & warrant',
    ],
  },
  {
    number: 2,
    title: 'rhetoric in context',
    examWeight: '16–18%',
    topics: [
      'rhetorical situation — SOAPS / SPACE',
      'speaker, audience, purpose, context',
      'subject & occasion',
      'exigence — the "why now?"',
      'reading for rhetorical purpose',
      'how context shapes meaning',
    ],
  },
  {
    number: 3,
    title: 'claims in argument',
    examWeight: '16–18%',
    topics: [
      'developing a defensible thesis',
      'qualifying claims',
      'concessions & counter-arguments',
      'refutation strategies',
      'complexity & sophistication in argument',
      'nuance vs. binary thinking',
    ],
  },
  {
    number: 4,
    title: 'how writers develop arguments',
    examWeight: '16–18%',
    topics: [
      'classical appeals — logos, ethos, pathos',
      'developing ethos — credibility signals',
      'emotional appeals done right',
      'logical structure & reasoning chains',
      'evidence integration — summary, paraphrase, quote',
      'sentence-level choices in argumentation',
    ],
  },
  {
    number: 5,
    title: 'how structure, language & detail create meaning',
    examWeight: '16–18%',
    topics: [
      'syntax & its effects — parallelism, anaphora, asyndeton',
      'diction choices — connotation & denotation',
      'figurative language — metaphor, simile, allusion',
      'tone & how it\'s established',
      'transitions & cohesion',
      'organization strategies — problem/solution, chronological, compare',
      'selecting and ordering evidence',
    ],
  },
  {
    number: 6,
    title: 'developing a complex argument',
    examWeight: '16–18%',
    topics: [
      'thesis sophistication — "although...because..."',
      'introducing complexity & tension',
      'addressing alternative perspectives',
      'commentary that extends beyond obvious',
      'synthesis across multiple sources',
      'avoiding logical fallacies in your own writing',
    ],
  },
  {
    number: 7,
    title: 'exam skills — synthesis, rhetorical analysis & argument',
    examWeight: 'all essays',
    topics: [
      'synthesis essay — reading & integrating 6+ sources',
      'rhetorical analysis essay — breakdown strategy',
      'argument essay — building without sources',
      'time management on exam day',
      'intro paragraph structures that work',
      'conclusion strategies',
      'scoring rubric breakdown — all 3 essays',
      'practice prompts & model responses',
    ],
  },
]

export default function LangPage() {
  return (
    <CourseLayout
      course={{
        id: 'lang',
        label: 'ap language & composition',
        short: 'ap lang',
        description: 'mastery of rhetoric, argumentation, and composition. every device, every appeal, every essay strategy — so you write with precision and score a 5.',
        banner: '/images/lang-banner.jpg',
        accent: '#a855f7',
        accentLight: '#ec4899',
        bgClass: 'bg-lang-purple',
        examDate: 'may 2025 — check collegeboard for exact date',
        units,
      }}
      basePath="/lang"
    />
  )
}
