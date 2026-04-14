import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 1, title: 'rhetorical situation' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'tone — the writer\'s attitude',
  },
  {
    type: 'body',
    content: 'Tone is the writer\'s attitude toward the subject AND toward the audience. It is conveyed through diction (word choice), syntax (sentence structure), imagery, figurative language, and rhythm. Identifying tone accurately and describing it with precision is one of the most frequently tested skills on both the MCQ and FRQ sections.',
  },
  {
    type: 'heading',
    content: 'essential tone vocabulary',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['tone word', 'meaning', 'signal phrases/techniques'],
    tableRows: [
      ['Sardonic', 'Bitterly mocking, cynically humorous', 'Dark irony, understatement, bitter word choice'],
      ['Elegiac', 'Sorrowful, mourning a loss', 'Slow syntax, imagery of decline/death, melancholy diction'],
      ['Incisive', 'Sharp, penetrating, cutting to the core', 'Short declarative sentences, precise diction, no hedging'],
      ['Reverent', 'Deep respect or awe', 'Elevated diction, careful pacing, sacred or solemn imagery'],
      ['Deferential', 'Respectfully submissive', 'Qualifiers ("if I may," "with respect"), formal register'],
      ['Acerbic', 'Harsh, sharp-tongued', 'Cutting word choices, aggressive syntax, direct accusations'],
      ['Fervent', 'Intensely passionate', 'Exclamatory sentences, repetition, urgent rhythm'],
      ['Measured', 'Calm, controlled, deliberate', 'Complex but balanced sentences, hedging language, nuance'],
      ['Defiant', 'Boldly resistant to authority', 'Imperative sentences, direct address, strong verbs'],
      ['Wistful', 'Longing, gently melancholy', 'Past tense, sensory detail, slower syntax'],
      ['Contemptuous', 'Showing disdain, scorn', 'Sarcasm, dismissive language, rhetorical questions'],
      ['Conciliatory', 'Tending to reconcile, soothe', 'Acknowledgment of opposing views, "while...nevertheless" structures'],
    ],
  },
  {
    type: 'heading',
    content: 'tone shifts — when and why they matter',
  },
  {
    type: 'body',
    content: 'Skilled writers shift tone deliberately to achieve rhetorical effects. A shift from measured argument to fervent appeal signals that the writer is moving from the logical to the emotional — a strategic move to close the argument with maximum impact. Identifying the shift AND explaining why it occurs at that point is sophisticated analysis.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Look for tone shifts at: paragraph breaks, after evidence presentation, at the conclusion, after acknowledging counterarguments',
      'Ask: what effect does this shift have on the reader? Why here?',
      'Common pattern: measured → urgent (logical argument establishes credibility, then emotional appeal seals the deal)',
      'Another pattern: ironic → sincere (sarcasm establishes shared contempt with audience, then sincere appeal becomes more powerful by contrast)',
    ],
  },
  {
    type: 'examtip',
    content: 'On the MCQ, tone questions often give you five options and three are obviously wrong, one is close but slightly off, one is right. Train yourself on the nuances: "resigned" vs. "despondent," "critical" vs. "contemptuous," "enthusiastic" vs. "fervent." These distinctions test whether you are reading carefully enough. Always go back to specific language in the text to confirm your choice.',
  },
]

export default function LangU1T6() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 6,
        title: 'tone & shift in tone',
        keyTerms: ['tone', 'tone shift', 'diction', 'syntax', 'sardonic', 'elegiac', 'incisive', 'fervent', 'acerbic', 'measured', 'defiant', 'wistful'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-1/5', title: 'ethos, pathos & logos' }}
      next={{ href: '/lang/unit-1/7', title: 'point of view' }}
      courseHref="/lang"
      unitHref="/lang/unit-1"
    />
  )
}
