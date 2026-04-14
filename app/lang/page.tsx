import { CourseLayout } from '@/components/course-layout'
import type { Unit } from '@/components/course-layout'

const units: Unit[] = [
  {
    number: 1,
    title: 'rhetorical situation',
    examWeight: '11–14%',
    topics: [
      'speaker, audience & purpose',
      'exigence, context & occasion',
      'message & SOAPSTone',
      'rhetorical triangle',
      'ethos, pathos & logos',
      'tone & shift in tone',
      'point of view',
      'appeals to values & beliefs',
    ],
  },
  {
    number: 2,
    title: 'claims & evidence',
    examWeight: '11–14%',
    topics: [
      'main claim & subclaim',
      'thesis statement construction',
      'types of evidence',
      'evidence relevance & sufficiency',
      'commentary & analysis',
      'counterclaim, rebuttal & concession',
    ],
  },
  {
    number: 3,
    title: 'reasoning & organization',
    examWeight: '13–16%',
    topics: [
      'line of reasoning',
      'inductive & deductive reasoning',
      'cause & effect, compare & contrast',
      'definition, classification & exemplification',
      'organizational patterns',
      'logical fallacies',
    ],
  },
  {
    number: 4,
    title: 'style',
    examWeight: '11–14%',
    topics: [
      'diction & syntax',
      'imagery & figurative language',
      'juxtaposition & parallelism',
      'anaphora, antithesis & repetition',
      'polysyndeton & asyndeton',
      'sentence variety & formal vs informal style',
    ],
  },
  {
    number: 5,
    title: 'putting it all together',
    examWeight: '11–14%',
    topics: [
      'combining appeals & evidence',
      'strong thesis construction',
      'topic sentences & commentary integration',
      'transitions & cohesion',
      'essay organization',
      'introduction & conclusion techniques',
    ],
  },
  {
    number: 6,
    title: 'position, perspective & bias',
    examWeight: '11–14%',
    topics: [
      'perspective & bias',
      'assumptions & cultural context',
      'historical context',
      'intended audience & speaker credibility',
      'multiple viewpoints',
      'author\'s position & reliability of a source',
    ],
  },
  {
    number: 7,
    title: 'developing an argument',
    examWeight: '11–14%',
    topics: [
      'arguable & qualified claims',
      'defending a claim',
      'counterargument & refutation',
      'synthesis of sources',
      'building a line of reasoning',
      'evidence selection & commentary depth',
    ],
  },
  {
    number: 8,
    title: 'stylistic choices & frq mastery',
    examWeight: '11–14%',
    topics: [
      'word choice & sentence structure',
      'irony, satire & hyperbole',
      'metaphor, simile, allusion & rhetorical question',
      'parallel structure & repetition for emphasis',
      'synthesis essay mastery',
      'rhetorical analysis essay mastery',
      'argument essay mastery',
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
        description: 'mastery of rhetoric, argumentation, and composition. every device, appeal, and essay strategy — precision writing for a 5.',
        banner: '/images/lang-banner.jpg',
        accent: '#a855f7',
        accentLight: '#ec4899',
        bgClass: 'bg-lang-purple',
        examDate: 'May 13, 2025 — morning session (8:00 AM ET)',
        units,
      }}
      basePath="/lang"
    />
  )
}
