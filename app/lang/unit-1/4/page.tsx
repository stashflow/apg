import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 1, title: 'rhetorical situation' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'aristotle\'s rhetorical triangle',
  },
  {
    type: 'body',
    content: 'Aristotle identified three fundamental elements of persuasion in his Rhetoric (c. 350 BCE): the speaker (ethos), the message (logos), and the audience (pathos). These three form a triangle because effective rhetoric must balance all three — lean too heavily on one and the argument becomes unreliable (too much emotion), cold (too much logic), or self-important (too much personal authority).',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['appeal', 'based on', 'how it works', 'risk if overused'],
    tableRows: [
      ['Ethos', 'Speaker credibility & character', 'Establishes trust through expertise, fairness, shared values with audience', 'Seems arrogant or name-drops without substance'],
      ['Logos', 'Logic, reason, evidence', 'Convinces through facts, statistics, examples, logical structure', 'Feels cold, ignores human dimension, bores audience'],
      ['Pathos', 'Emotional appeal to audience', 'Moves audience through storytelling, imagery, appeals to values and fears', 'Manipulates, feels exploitative, substitutes feeling for thinking'],
    ],
  },
  {
    type: 'heading',
    content: 'ethos — building credibility',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Practical ethos**: credentials, expertise, experience directly stated ("As a physician with 20 years in oncology...")',
      '**Demonstrated ethos**: credibility built through HOW the argument is made — fair acknowledgment of complexity, precise language, honest treatment of counterarguments',
      '**Character ethos**: showing shared values with the audience — connecting your position to what the audience already believes is right',
      'The most credible writers use all three simultaneously',
      'Ethos can be destroyed: logical fallacies, dishonest use of statistics, or failing to acknowledge obvious counterarguments all erode credibility',
    ],
  },
  {
    type: 'heading',
    content: 'logos — the logic of argument',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Deductive reasoning**: from general principle to specific conclusion (syllogism: All men are mortal; Socrates is a man; therefore Socrates is mortal)',
      '**Inductive reasoning**: from specific examples to general conclusion (observe many cases → infer a pattern)',
      '**Evidence types**: statistics, data, expert testimony, historical examples, case studies, anecdotes (all count as evidence — quality varies)',
      '**Causal reasoning**: X causes Y (one of the most misused — correlation is NOT causation)',
      'Logos includes the logical STRUCTURE of the text: how claims lead to subclaims lead to conclusion',
    ],
  },
  {
    type: 'heading',
    content: 'pathos — emotional resonance',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Pathos is NOT manipulation — legitimate emotional appeals connect the audience to the human stakes of an argument',
      'Techniques: vivid imagery, concrete examples (one specific child\'s story moves audiences more than statistics about thousands), narrative, appeals to shared values',
      '**Kairos**: the right emotional moment — effective pathos requires reading the audience\'s emotional state and meeting it',
      'Emotional appeals become manipulative when they bypass reason entirely: scare tactics, appeals to prejudice, false urgency',
      'The line between legitimate pathos and manipulation is whether the emotion is proportionate to the actual evidence',
    ],
  },
  {
    type: 'examtip',
    content: 'On the rhetorical analysis essay, analyze HOW each appeal works, not just that it exists. "The author uses pathos" earns no points. "The author\'s description of a child\'s hospital room — with its cold metal equipment and silent monitors — creates visceral pathos by placing the abstract policy debate inside one family\'s lived experience, making the reader feel the human cost of insurance gaps" earns full commentary credit.',
  },
]

export default function LangU1T4() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 4,
        title: 'rhetorical triangle',
        keyTerms: ['ethos', 'logos', 'pathos', 'rhetorical triangle', 'Aristotle', 'deductive reasoning', 'inductive reasoning', 'kairos', 'credibility', 'emotional appeal'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-1/3', title: 'message & SOAPSTone' }}
      next={{ href: '/lang/unit-1/5', title: 'ethos, pathos & logos' }}
      courseHref="/lang"
      unitHref="/lang/unit-1"
    />
  )
}
