import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 5, title: 'putting it all together' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'why appeals must work together' },
  { type: 'body', content: 'Ethos, pathos, and logos are not separate strategies to be used in isolation — the most effective arguments layer all three simultaneously. A pure logos argument feels cold and fails to move readers emotionally. A pure pathos appeal feels manipulative if it lacks evidence. A pure ethos appeal is meaningless without a real argument. The goal is integration: each appeal reinforces the others.' },
  { type: 'heading', content: 'combining ethos + logos' },
  { type: 'bullets', content: '', bullets: [
    'A credible speaker (ethos) presenting strong evidence (logos) creates an authoritative argument readers trust',
    'Example: a climate scientist (established ethos) presenting peer-reviewed data (logos) — the credibility amplifies the evidence\'s impact',
    'Technique: establish credentials early, then build the logical case — the reader is primed to accept the argument',
    'Watch for: ethos used to compensate for weak logos — "trust me, I\'m an expert" without evidence is a fallacy (appeal to authority)',
  ]},
  { type: 'heading', content: 'combining pathos + logos' },
  { type: 'bullets', content: '', bullets: [
    'Vivid emotional appeals (pathos) that are backed by hard evidence (logos) are far more powerful than either alone',
    'Example: open with a human story (pathos), then provide the statistics that show this story is representative (logos)',
    'The story makes the data feel real; the data makes the story feel significant rather than anecdotal',
    'Technique: use the "specific-to-general" move — one powerful example → data proving it\'s typical → systemic analysis',
  ]},
  { type: 'heading', content: 'combining ethos + pathos' },
  { type: 'bullets', content: '', bullets: [
    'A trustworthy speaker (ethos) sharing genuine emotional investment (pathos) builds deep connection with readers',
    'Example: a doctor writing about a patient\'s death — professional credibility (ethos) + grief (pathos) = devastating moral authority',
    'Shared values are both ethos and pathos: "As parents, as citizens, as human beings..." aligns speaker and audience',
  ]},
  { type: 'heading', content: 'layering in your own writing' },
  { type: 'bullets', content: '', bullets: [
    '**open with a story or vivid example** (pathos) that captures the human stakes',
    '**establish your position with evidence** (logos): statistics, expert opinion, specific examples',
    '**signal credibility** (ethos): acknowledge complexity, address counterarguments fairly, cite reputable sources',
    '**close with a call to shared values** (pathos + ethos): remind the reader WHY this matters, connecting to values you\'ve established they share',
  ]},
  { type: 'frqtip', content: 'In the synthesis essay (Question 1), you are expected to use multiple sources together. The best synthesis essays don\'t just quote sources — they use them to build a layered argument: Source A provides the ethical frame (ethos/pathos), Source B provides data (logos), Source C provides a counterargument you can address. Design your argument structure before you write.' },
]

export default function LangU5T1() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 1, title: 'combining appeals & evidence', keyTerms: ['ethos', 'pathos', 'logos', 'layered argument', 'synthesis', 'appeal to authority', 'specific to general'] }}
      sections={sections}
      next={{ href: '/lang/unit-5/2', title: 'strong thesis construction' }}
      courseHref="/lang" unitHref="/lang/unit-5"
    />
  )
}
