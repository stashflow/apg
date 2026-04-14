import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 5, title: 'putting it all together' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the introduction — four jobs' },
  { type: 'bullets', content: '', bullets: [
    '**Hook**: capture attention — a vivid anecdote, a striking statistic, a provocative question, or a bold claim',
    '**Context**: provide the background a reader needs to understand the argument — 2–3 sentences connecting the hook to the issue',
    '**Narrowing**: move from the broad issue to your specific position',
    '**Thesis**: the final sentence(s) of the intro — your position + line of reasoning',
  ]},
  { type: 'heading', content: 'effective hook techniques' },
  { type: 'table', content: '', tableHeaders: ['technique', 'example', 'when to use'],
    tableRows: [
      ['Vivid anecdote', '"At 3 a.m. in a Memphis jail, a man reached for a pen and began to write what would become the most powerful argument in American history."', 'All essay types — creates immediate human engagement'],
      ['Striking statistic', '"Americans spend an average of 7 hours per day staring at screens — more time than they sleep."', 'Argument essays — grounds the issue in evidence immediately'],
      ['Provocative question', '"What if the greatest threat to democracy is not an enemy state, but the platform we use to discuss it?"', 'Argument essays — immediately engages the reader\'s thinking'],
      ['Paradox/tension', '"We live in the most connected era in human history, and the loneliest."', 'Works for any essay — establishes the complexity you will explore'],
      ['Bold claim', '"The greatest lie we tell children is that college is for everyone."', 'Argument essays — immediately signals your willingness to take a real position'],
    ]
  },
  { type: 'heading', content: 'the conclusion — three jobs' },
  { type: 'bullets', content: '', bullets: [
    '**Synthesize (not summarize)**: don\'t repeat your thesis word-for-word — explain what your argument has PROVEN and why it matters',
    '**Broaden**: step back from the specific argument to its larger implications — what does this mean for society, for the future, for how we think about this topic?',
    '**End memorably**: a final image, a call to action, a reference back to the hook, or a resonant sentence that leaves an impression',
  ]},
  { type: 'callout', content: 'The conclusion that simply says "In conclusion, I have shown that social media is harmful because of X, Y, and Z" earns no sophistication points. The conclusion that says "The question is not whether we can afford to regulate these platforms — it is whether we can afford not to. The architecture of our shared reality is being designed by engagement engineers, not citizens. We can change that, but only if we first recognize what has been taken from us" — that is a conclusion that elevates the essay.' },
  { type: 'examtip', content: 'Under timed conditions, budget: 5 min planning + 40 min writing + 5 min revision. If you run short on time, cut the conclusion short rather than cutting body paragraphs — a weak conclusion costs less than a missing body paragraph. But never skip the conclusion entirely: even two sentences of synthesis is better than ending mid-argument.' },
]

export default function LangU5T6() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 6, title: 'introduction & conclusion techniques', keyTerms: ['hook', 'context', 'thesis placement', 'synthesis', 'anecdote', 'paradox', 'call to action', 'broaden'] }}
      sections={sections}
      prev={{ href: '/lang/unit-5/5', title: 'essay organization' }}
      next={{ href: '/lang/unit-6/1', title: 'perspective & bias' }}
      courseHref="/lang" unitHref="/lang/unit-5"
    />
  )
}
