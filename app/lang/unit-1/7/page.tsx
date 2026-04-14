import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 1, title: 'rhetorical situation' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'point of view — who is telling us this?',
  },
  {
    type: 'body',
    content: 'Point of view in nonfiction refers to the perspective from which a text is written — who the narrator/speaker is, what they can know and observe, and what their relationship is to the subject matter. It shapes everything: what information is included, what emotional register is appropriate, what blind spots exist in the argument.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['point of view', 'pronoun', 'effect', 'common uses'],
    tableRows: [
      ['First person singular', '"I"', 'Personal, authoritative, immediate; claims direct experience', 'Personal essays, memoirs, testimonials, op-eds'],
      ['First person plural', '"We"', 'Inclusive; builds community with reader; can be presumptuous if audience doesn\'t agree', 'Political speeches, manifestos, community calls to action'],
      ['Second person', '"You"', 'Direct address; engages reader personally; can feel accusatory or intimate', 'Instructional writing, some persuasive essays, advertising'],
      ['Third person', '"They/he/she/it"', 'Creates distance; seems more objective; authoritative and analytical', 'Academic writing, journalism, formal arguments'],
    ],
  },
  {
    type: 'heading',
    content: 'how point of view shapes argument',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'First person "I" claims authority through personal experience — but also limits the writer\'s credibility to that personal sphere',
      'First person "we" creates solidarity but also presumes the audience shares the writer\'s identity/values — can alienate those who don\'t',
      'Second person "you" is intimate and engaging but can feel presumptuous or coercive ("you must agree that...")',
      'Third person creates the appearance of objectivity — but no perspective is truly neutral. Third person often conceals the writer\'s position while still advancing it',
    ],
  },
  {
    type: 'heading',
    content: 'point of view and reliability',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Ask: what does the speaker\'s position ENABLE them to see or know? What might they be blind to?',
      'An insider\'s first-person account has emotional authenticity but may lack the distance to see systemic patterns',
      'An outside observer\'s third-person account may miss human texture but can identify structural forces',
      'The best analyses recognize what a given POV CAN and CANNOT show — and consider what alternative perspectives might reveal',
    ],
  },
  {
    type: 'examtip',
    content: 'On the argument essay (Question 3), your choice of point of view is itself a rhetorical decision. Using "I" claims the authority of your direct reasoning but can feel less authoritative than a more analytical voice. Using "we" can alienate readers who disagree. Most AP Lang teachers recommend a confident third-person analytical voice for the argument essay — though first person is not penalized if used skillfully.',
  },
]

export default function LangU1T7() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 7,
        title: 'point of view',
        keyTerms: ['point of view', 'first person', 'second person', 'third person', 'narrator', 'perspective', 'reliability', 'insider', 'objectivity'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-1/6', title: 'tone & shift in tone' }}
      next={{ href: '/lang/unit-1/8', title: 'appeals to values & beliefs' }}
      courseHref="/lang"
      unitHref="/lang/unit-1"
    />
  )
}
