import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 6, title: 'position, perspective & bias' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'why historical context changes meaning' },
  { type: 'body', content: 'A text is not just words on a page — it is a response to a specific moment in history. Understanding that moment is essential for understanding what the author could say, what they had to say, what their audience already knew, and what was dangerous or radical to claim. Without historical context, analysis becomes superficial.' },
  { type: 'bullets', content: '', bullets: [
    '**exigence + history**: the exigence (the problem or occasion that prompts the text) is always historically situated',
    '**what couldn\'t be said**: understanding what arguments were forbidden or dangerous reveals the writer\'s courage or constraint',
    '**audience knowledge**: what did readers already know? What did the writer not need to explain? What assumptions could be left unstated?',
    '**intertextuality**: what other texts is this in dialogue with? What arguments is it responding to or building on?',
  ]},
  { type: 'heading', content: 'applying historical context in analysis' },
  { type: 'bullets', content: '', bullets: [
    'Identify the year and immediate circumstances: what major events had just occurred? What debate was ongoing?',
    'Consider the medium: a newspaper, a pamphlet, a speech, a private letter — each carries different expectations and audience assumptions',
    'Ask: what does the writer take for granted that a reader TODAY would not? What has changed?',
    'Ask: what risks did the writer take in this context? What was bold or controversial for their time?',
  ]},
  { type: 'frqtip', content: 'For DBQ-style synthesis essays with historical sources, always note the date of each source and briefly acknowledge how the historical moment shapes its argument. "Written in 1962, amid Cold War fears of nuclear annihilation, Carson\'s appeal to the vulnerability of all living things resonated with anxieties that extended far beyond pesticides." This kind of contextual integration earns sophistication points.' },
]

export default function LangU6T3() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 3, title: 'historical context', keyTerms: ['historical context', 'exigence', 'intertextuality', 'audience knowledge', 'medium', 'what could not be said'] }}
      sections={sections}
      prev={{ href: '/lang/unit-6/2', title: 'assumptions & cultural context' }}
      next={{ href: '/lang/unit-6/4', title: 'intended audience & speaker credibility' }}
      courseHref="/lang" unitHref="/lang/unit-6"
    />
  )
}
