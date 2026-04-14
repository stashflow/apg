import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 1, title: 'rhetorical situation' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'message — what the text actually communicates',
  },
  {
    type: 'body',
    content: 'The message (sometimes called the "subject" in SOAPSTone) is what the text is saying — but effective analysis goes beyond paraphrasing the content. The message includes both the explicit claim and the implicit assumptions, values, and world-view embedded in how that claim is made.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Explicit message**: the stated argument, claim, or information',
      '**Implicit message**: unstated assumptions, cultural values, or beliefs the text takes for granted',
      'Example: an ad that says "real men drive trucks" explicitly sells trucks; implicitly it constructs a definition of masculinity',
      'The gap between explicit and implicit is where the most interesting rhetorical analysis happens',
      'Look for what the text does NOT say — omissions are often as meaningful as inclusions',
    ],
  },
  {
    type: 'heading',
    content: 'SOAPSTone — putting it all together',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['element', 'what to identify', 'what to analyze'],
    tableRows: [
      ['Speaker', 'Who is speaking? What is their identity/position?', 'How does their identity shape credibility and perspective? What biases might they have?'],
      ['Occasion', 'What specific event prompted this text?', 'How does the occasion shape urgency, tone, and content?'],
      ['Audience', 'Who is this written for?', 'How do the writer\'s choices reflect assumptions about that audience?'],
      ['Purpose', 'What does the writer want to accomplish?', 'How do specific rhetorical choices serve that purpose?'],
      ['Subject', 'What is the text about?', 'What is the explicit topic? What deeper issues does it engage?'],
      ['Tone', 'What is the writer\'s attitude?', 'How is tone established through diction, syntax, and imagery?'],
    ],
  },
  {
    type: 'heading',
    content: 'applying SOAPSTone to analysis',
  },
  {
    type: 'body',
    content: 'SOAPSTone is a reading tool, not a writing structure. Use it to fully understand a text before you write about it. Your essay should NOT be a SOAPSTone chart — it should synthesize these elements into a coherent argument about how and why rhetorical choices work.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Read the passage: annotate for rhetorical devices, appeals, and structural choices',
      'Apply SOAPSTone to understand the full rhetorical situation',
      'Identify the 2–3 most significant rhetorical choices the writer makes',
      'For each: explain the choice, explain its effect on the reader, connect to the writer\'s purpose',
      'Your thesis should name the purpose AND the primary rhetorical strategies used to achieve it',
    ],
  },
  {
    type: 'examtip',
    content: 'A strong rhetorical analysis thesis has three parts: (1) what the writer is arguing or doing, (2) the primary rhetorical strategies they use, and (3) the purpose or effect. Example: "In her 1963 address, Rachel Carson employs scientific precision alongside emotionally charged imagery of a dying landscape to convince a general audience that pesticide regulation is an urgent moral imperative."',
  },
]

export default function LangU1T3() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 3,
        title: 'message & SOAPSTone',
        keyTerms: ['SOAPSTone', 'explicit message', 'implicit message', 'rhetorical analysis', 'thesis', 'rhetorical choices', 'omission', 'subtext'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-1/2', title: 'exigence, context & occasion' }}
      next={{ href: '/lang/unit-1/4', title: 'rhetorical triangle' }}
      courseHref="/lang"
      unitHref="/lang/unit-1"
    />
  )
}
