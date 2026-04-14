import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 1, title: 'rhetorical situation' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'the three appeals — going beyond the basics',
  },
  {
    type: 'body',
    content: 'Ethos, pathos, and logos are the three classical appeals, but the exam expects you to analyze HOW they function together, not just identify them. The most sophisticated analysis shows how a writer moves fluidly between appeals — using ethos to establish trust that makes logos more convincing, or using pathos to make the audience receptive to a difficult logical argument.',
  },
  {
    type: 'heading',
    content: 'sophisticated use of ethos',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Ethos is built throughout a text, not just in an introduction',
      'Quoting/citing experts transfers their credibility to your argument',
      'Acknowledging counterarguments builds ethos by showing intellectual honesty',
      'Diction choice signals expertise: using field-specific terminology correctly establishes credibility without stating it directly',
      'Inclusive language ("we," "our") positions the writer as part of the audience community',
    ],
  },
  {
    type: 'heading',
    content: 'the interaction of all three appeals',
  },
  {
    type: 'body',
    content: 'In practice, the three appeals are inseparable. A statistic (logos) becomes more powerful when the person citing it has credentials (ethos) and frames it in human terms (pathos). A personal story (pathos) becomes more persuasive when it leads to logical conclusions (logos) told by someone with direct experience (ethos).',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Example: "As a cancer survivor who has studied the data on treatment outcomes [ethos], I can tell you that 73% of patients who delay diagnosis face significantly worse prognosis [logos] — and I have watched friends die because they could not afford early screening [pathos]."',
      'The example above moves in one sentence through all three appeals seamlessly',
      'On the exam, find moments where all three are operating simultaneously — these are the highest-value moments to analyze',
    ],
  },
  {
    type: 'heading',
    content: 'tone and the appeals',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Tone itself is a form of pathos — the writer\'s emotional attitude toward subject and audience shapes how the reader receives the argument',
      '**Ironic tone**: creates distance; invites the reader to share the writer\'s superior perspective on the subject',
      '**Urgent tone**: generates pathos by signaling that the issue demands immediate response',
      '**Measured, calm tone**: builds ethos by suggesting the writer is not emotionally compromised',
      'Shifts in tone within a text signal shifts in strategy — always note where and why tone changes',
    ],
  },
  {
    type: 'examtip',
    content: 'When analyzing tone, use precise vocabulary: not "emotional" but "elegiac," "indignant," "sardonic," "reverent," "conciliatory." Tone vocabulary is tested in MCQ and strengthens FRQ analysis. Build your tone word bank now: somber, wistful, incisive, deferential, acerbic, fervent, measured, defiant, contemplative, reproachful.',
  },
]

export default function LangU1T5() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 5,
        title: 'ethos, pathos & logos',
        keyTerms: ['ethos', 'pathos', 'logos', 'appeals', 'tone', 'credibility transfer', 'diction', 'inclusive language', 'irony', 'kairos'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-1/4', title: 'rhetorical triangle' }}
      next={{ href: '/lang/unit-1/6', title: 'tone & shift in tone' }}
      courseHref="/lang"
      unitHref="/lang/unit-1"
    />
  )
}
