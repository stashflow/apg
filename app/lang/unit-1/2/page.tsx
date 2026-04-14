import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 1, title: 'rhetorical situation' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'exigence — the "why now?"',
  },
  {
    type: 'body',
    content: 'Exigence (from Latin exigere, "to demand") is the urgent problem or situation that calls a text into being. Every text exists because something happened that demanded a response. Lloyd Bitzer defined exigence as "an imperfection marked by urgency." Understanding exigence helps you understand why a text exists at all — not just what it says, but why it was necessary to say it in the first place.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Exigence = the triggering problem or gap that the text is responding to',
      'Not every problem creates a text — exigence must be both **urgent** and **rhetorical** (meaning language can actually address it)',
      'Example: MLK\'s "Letter from Birmingham Jail" was exigent because white moderate clergy had published an open letter criticizing civil rights demonstrations — King responded with rhetorical precision to THAT specific moment',
      'Identifying exigence helps explain tone, urgency, and specific rhetorical choices the writer makes',
    ],
  },
  {
    type: 'heading',
    content: 'context — the full picture',
  },
  {
    type: 'body',
    content: 'Context includes everything surrounding the text: historical moment, cultural climate, the writer\'s personal circumstances, and the physical medium of delivery. Context shapes what arguments are even possible — what can be said, what would be understood, what would be dangerous or taboo.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Historical context**: what events, debates, or conditions existed when the text was written?',
      '**Cultural context**: what values, assumptions, or beliefs did the intended audience share?',
      '**Intertextual context**: what other texts is this responding to, quoting, or arguing against?',
      '**Medium/form**: a speech has different constraints than an op-ed, a tweet, or a novel — medium shapes message',
      'Context also changes over time — a text may mean something different to modern readers than to its original audience',
    ],
  },
  {
    type: 'heading',
    content: 'occasion — the specific moment',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Occasion is the specific event or circumstance that triggers the text — it is narrower than context',
      'Example: Lincoln\'s Second Inaugural Address was occasioned by his re-election and the approaching end of the Civil War',
      'The occasion explains specific references in a text — why Lincoln mentions "malice toward none," why King writes from a jail cell',
      'Occasion and exigence overlap: the occasion IS the exigent moment',
    ],
  },
  {
    type: 'heading',
    content: 'how these elements interact',
  },
  {
    type: 'body',
    content: 'In strong rhetorical analysis writing, you link all four elements: the speaker, responding to a specific exigence/occasion, within a particular context, for a defined audience. This web of relationships explains every meaningful choice in the text. A writer who ignores audience or context produces irrelevant rhetoric — effective writers carefully calibrate their text to all these factors simultaneously.',
  },
  {
    type: 'examtip',
    content: 'The synthesis essay (Question 1) requires you to understand exigence and context deeply. Before you write, ask: what problem does each source respond to? What do they assume about their audience? Sources often agree on the exigence (the problem) but disagree on the solution. Framing your thesis around this tension — "while all sources agree X is a problem, they diverge sharply on Y" — immediately shows sophistication.',
  },
]

export default function LangU1T2() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 2,
        title: 'exigence, context & occasion',
        keyTerms: ['exigence', 'context', 'occasion', 'rhetorical situation', 'Lloyd Bitzer', 'historical context', 'cultural context', 'intertextual', 'medium'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-1/1', title: 'speaker, audience & purpose' }}
      next={{ href: '/lang/unit-1/3', title: 'message & SOAPSTone' }}
      courseHref="/lang"
      unitHref="/lang/unit-1"
    />
  )
}
