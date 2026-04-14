import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 5, title: 'putting it all together' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'what makes a thesis score points' },
  { type: 'body', content: 'The AP Lang thesis is scored on one criterion: it must make a historically defensible, specific claim that establishes a line of reasoning. That means it cannot be a simple observation, a restatement of the prompt, or a fact. It must take a position and suggest WHY you hold that position — giving the reader a preview of your argumentative structure.' },
  { type: 'heading', content: 'the anatomy of a full-credit thesis' },
  { type: 'bullets', content: '', bullets: [
    '**position**: a clear, arguable stance (not "technology has both benefits and drawbacks")',
    '**line of reasoning**: a "because" clause or a "through X, Y, and Z" structure that maps your argument',
    '**nuance/qualification** (for sophistication point): acknowledges complexity without undermining your position',
    'Thesis can be ONE sentence or TWO — what matters is that together they establish position + reasoning',
  ]},
  { type: 'heading', content: 'thesis formula and examples' },
  { type: 'table', content: '', tableHeaders: ['quality', 'example thesis'],
    tableRows: [
      ['0 points (no claim)', '"Technology affects society in many ways." — just an observation, no position'],
      ['0 points (restates prompt)', '"As the sources show, there are many perspectives on social media." — just a summary'],
      ['1 point (basic)', '"Social media is harmful because it spreads misinformation and harms mental health." — position + some reasoning, but not nuanced'],
      ['1 point + sophistication potential', '"Although social media enables connection and civic organizing, its algorithmic design systematically amplifies outrage and misinformation, making it a net harm to democratic discourse." — position + qualified reasoning + complexity'],
    ]
  },
  { type: 'heading', content: 'thesis placement' },
  { type: 'bullets', content: '', bullets: [
    'Thesis can appear at the END of the introduction (traditional) or at the START (if you jump right to argument)',
    'Do NOT bury the thesis in the middle of a paragraph — graders must find it easily',
    'For rhetorical analysis: "Through [devices], [speaker] [achieves purpose] in order to [effect on audience]" — device-purpose-audience structure',
    'For argument: "[Position] because [reason 1], [reason 2], and [qualifying condition]"',
    'For synthesis: "[Position], as demonstrated by [frame from sources], [evidence type], and [acknowledgment of complexity]"',
  ]},
  { type: 'examtip', content: 'The most common thesis failure: making a claim without a line of reasoning. "Social media is damaging" is not enough. "Social media damages democratic discourse primarily because its engagement-maximizing algorithms reward emotional outrage over accurate information" earns the point. Always ask: does my thesis explain WHY, not just WHAT.' },
]

export default function LangU5T2() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 2, title: 'strong thesis construction', keyTerms: ['thesis', 'line of reasoning', 'nuance', 'qualification', 'position', 'defensible claim', 'sophistication'] }}
      sections={sections}
      prev={{ href: '/lang/unit-5/1', title: 'combining appeals & evidence' }}
      next={{ href: '/lang/unit-5/3', title: 'topic sentences & commentary' }}
      courseHref="/lang" unitHref="/lang/unit-5"
    />
  )
}
