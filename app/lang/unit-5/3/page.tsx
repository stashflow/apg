import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 5, title: 'putting it all together' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'what a topic sentence must do' },
  { type: 'body', content: 'A topic sentence is not just a label ("In this paragraph I will discuss..."). A strong topic sentence makes a specific sub-claim that directly supports the thesis. It tells the reader what this paragraph will prove, not just what it will discuss. Every word of your paragraph should then serve the claim made in the topic sentence.' },
  { type: 'bullets', content: '', bullets: [
    'Topic sentence = sub-claim that advances the thesis',
    'Test it: if you removed the body of the paragraph, does your topic sentence still make sense as a logical step in the argument? Good. Does it seem detached from any clear argument? Fix it.',
    'Topic sentences should **transition** from the previous paragraph while introducing the new claim',
    'Avoid: "Another example of this is..." — this connects to a previous example, not to the thesis',
  ]},
  { type: 'heading', content: 'commentary: what it is and what it isn\'t' },
  { type: 'body', content: 'Commentary is the analysis you write AFTER presenting evidence. It explains what the evidence means, how it connects to your sub-claim, and why it matters for your thesis. It is the highest-value writing in any essay — evidence is raw material, commentary is the argument.' },
  { type: 'table', content: '', tableHeaders: ['type', 'example'],
    tableRows: [
      ['Restating evidence (worthless)', '"This shows that the author is talking about nature."'],
      ['Surface-level observation (weak)', '"This shows the author cares about the environment."'],
      ['Analytical commentary (good)', '"By describing the river as \'wounded\' and \'bleeding,\' the author anthropomorphizes the natural world, compelling readers to feel guilt rather than mere concern — transforming an environmental problem into a moral one."'],
      ['Analytical + purposeful (excellent)', '"This anthropomorphization works because it exploits the reader\'s natural empathy for suffering beings, a response that abstract data about pollution cannot elicit, thereby making the argument emotionally irresistible to an audience that might otherwise intellectualize the problem away."'],
    ]
  },
  { type: 'heading', content: 'the CE²A structure' },
  { type: 'bullets', content: '', bullets: [
    '**C — Claim** (topic sentence): the sub-claim this paragraph will prove',
    '**E — Evidence**: specific quote, example, data that supports the claim',
    '**E — Explanation**: what the evidence shows; how it connects to the claim',
    '**A — Analysis/So what**: why this matters; what larger point does this paragraph prove?',
    'Each body paragraph should complete this cycle at least once; sophisticated paragraphs cycle through it twice',
  ]},
  { type: 'examtip', content: 'On the rhetorical analysis essay (Q2), commentary must link device → effect on audience → authorial purpose. A weak response says "the author uses repetition." A strong response says: "The anaphoric repetition of \'I have a dream\' builds rhythmic momentum that transforms a policy argument into a spiritual vision, shifting the audience\'s emotional register from political negotiation to moral obligation — the key to why the speech moved people to action rather than reflection."' },
]

export default function LangU5T3() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 3, title: 'topic sentences & commentary integration', keyTerms: ['topic sentence', 'sub-claim', 'commentary', 'CE²A', 'analysis', 'evidence integration', 'device-effect-purpose'] }}
      sections={sections}
      prev={{ href: '/lang/unit-5/2', title: 'strong thesis construction' }}
      next={{ href: '/lang/unit-5/4', title: 'transitions & cohesion' }}
      courseHref="/lang" unitHref="/lang/unit-5"
    />
  )
}
