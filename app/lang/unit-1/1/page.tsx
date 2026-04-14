import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 1, title: 'rhetorical situation' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'the rhetorical situation — what it is',
  },
  {
    type: 'body',
    content: 'Every text is produced in a specific context. The rhetorical situation describes the full set of circumstances surrounding that text: who is speaking, to whom, about what, for what purpose, and when. Understanding the rhetorical situation is the foundation of AP Lang — every essay question, MCQ passage, and synthesis prompt expects you to analyze it.',
  },
  {
    type: 'heading',
    content: 'SOAPSTone — the framework',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['letter', 'element', 'key question'],
    tableRows: [
      ['S', 'Speaker', 'Who is narrating or writing? What is their identity, background, bias, and credibility?'],
      ['O', 'Occasion', 'What event, moment, or circumstance prompted this text? What is the immediate context?'],
      ['A', 'Audience', 'Who is the intended reader or listener? What are their values, expectations, and knowledge level?'],
      ['P', 'Purpose', 'What does the writer want the audience to do, believe, feel, or understand?'],
      ['S', 'Subject', 'What is the text literally about? The topic or issue addressed.'],
      ['Tone', 'Tone', 'What is the writer\'s attitude toward the subject and audience? (see Unit 6 for depth)'],
    ],
  },
  {
    type: 'heading',
    content: 'speaker — going deeper',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'The speaker is NOT always the author — a persona can be constructed. Ask: is the speaker reliable? What biases do they carry?',
      'A speaker\'s **credibility (ethos)** depends on perceived expertise, fairness, and trustworthiness',
      'Consider what the speaker reveals vs. conceals — what goes unstated often reveals more than what is said',
      'Speakers position themselves differently for different audiences — the same writer\'s voice in a scientific paper vs. a newspaper op-ed is very different',
    ],
  },
  {
    type: 'heading',
    content: 'audience — the invisible partner',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Writers make dozens of choices based on their imagined audience: vocabulary level, assumed knowledge, emotional appeals, examples used',
      '**Primary audience**: the direct intended reader',
      '**Secondary audience**: others who might read the text (and whose presence shapes choices)',
      'Identifying audience helps explain WHY a writer uses certain evidence, examples, or emotional appeals',
      'When audience and purpose shift, everything about the text changes — same argument, different audience = completely different text',
    ],
  },
  {
    type: 'heading',
    content: 'purpose — beyond "to inform"',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Avoid generic purposes ("to inform," "to entertain") — dig deeper',
      '**To persuade**: to change a belief or action',
      '**To inform**: to increase understanding',
      '**To entertain**: to create pleasure or emotional experience',
      '**To reflect**: to process personal experience or meaning',
      '**To critique**: to expose a flaw, injustice, or contradiction',
      'A single text can have multiple purposes simultaneously — identify the PRIMARY purpose and any secondary ones',
    ],
  },
  {
    type: 'examtip',
    content: 'In rhetorical analysis essays (Question 2), you MUST connect rhetorical choices back to purpose. Never just identify a device ("the author uses parallelism"). Always explain: the author uses parallelism to create a sense of momentum and inevitability, reinforcing the purpose of convincing the reader that change is unstoppable. Device → Effect → Purpose. Every time.',
  },
]

export default function LangU1T1() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 1,
        title: 'speaker, audience & purpose',
        keyTerms: ['rhetorical situation', 'SOAPSTone', 'speaker', 'audience', 'purpose', 'persona', 'primary audience', 'secondary audience', 'credibility', 'ethos'],
      }}
      sections={sections}
      next={{ href: '/lang/unit-1/2', title: 'exigence, context & occasion' }}
      courseHref="/lang"
      unitHref="/lang/unit-1"
    />
  )
}
