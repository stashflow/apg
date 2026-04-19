import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 4, title: 'style' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'diction — word choice as rhetorical power',
  },
  {
    type: 'body',
    content: 'Diction refers to a writer\'s choice of words. Every word carries a denotation (literal meaning) and a connotation (emotional associations). Skilled writers manipulate diction to create tone, shape perception, and persuade. The same fact expressed with different words becomes a different argument.',
  },
  {
    type: 'heading',
    content: 'types of diction',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['diction type', 'definition', 'example', 'effect'],
    tableRows: [
      ['Formal/Academic', 'Technical, sophisticated, specialized vocabulary', '"The amelioration of economic disparities requires systemic intervention."', 'Creates credibility; signals expertise and authority'],
      ['Colloquial', 'Casual, conversational, everyday language', '"We gotta fix how money gets spread around."', 'Creates intimacy; makes argument accessible; informal'],
      ['Informal/Slang', 'Contemporary, trendy, youth-culture language', '"This policy is fire and the opposition is sus."', 'Creates connection with certain audiences; ages quickly'],
      ['Concrete', 'Specific nouns and verbs; appeals to senses', '"The rusted factory churned out clouds of black smoke."', 'Creates vivid imagery; reader feels what is described'],
      ['Abstract', 'General, conceptual language; appeals to intellect', '"Economic justice requires systemic change."', 'Philosophical; can feel distant or pretentious'],
    ],
  },
  {
    type: 'heading',
    content: 'connotation vs. denotation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Denotation**: the dictionary definition — "slim" literally means thin',
      '**Connotation**: emotional associations — "slim" is positive (elegant, fit), while "scrawny" is negative (unhealthy, weak), though both mean thin',
      'Writers choose words for connotations, not just meaning: "activist" vs. "radical," "undocumented immigrant" vs. "illegal alien," "pro-choice" vs. "pro-abortion"',
      'The same object described as "vintage," "old," "retro," or "decrepit" creates completely different impressions',
    ],
  },
  {
    type: 'heading',
    content: 'registers and registers shifts',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Register is the level of formality appropriate to the context',
      'Formal register: academic papers, government documents, professional communications',
      'Informal register: text messages, social media, casual conversations',
      'Registers can shift within a text — the effect depends on what the shift communicates',
      'Intentional shifts can be powerful: a formal essay that suddenly uses slang creates emphasis and intimacy',
    ],
  },
  {
    type: 'heading',
    content: 'syntax — sentence structure',
  },
  {
    type: 'body',
    content: 'Syntax refers to how words are arranged into sentences. Like diction, syntax is both grammatically correct and rhetorically powerful. The length, complexity, and structure of sentences determine pace, emphasis, and emotional effect.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['sentence element', 'definition', 'rhetorical effect'],
    tableRows: [
      ['Simple', 'One independent clause', 'Direct, forceful, declarative'],
      ['Compound', 'Two independent clauses (usually with "and," "but," "or")', 'Shows equal relationship; balanced rhythm'],
      ['Complex', 'Independent clause + dependent clauses', 'Shows hierarchy; main idea is primary'],
      ['Cumulative', 'Main clause first, then modifiers add detail', 'Exploratory; feels natural and organic'],
      ['Periodic', 'Modifiers first, main clause delayed', 'Creates suspense; all elements build to climax'],
    ],
  },
  {
    type: 'heading',
    content: 'sentence length and rhythm',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Long sentences** create complexity, sophistication, and breathlessness',
      '**Short sentences** create impact, finality, and punch',
      'Variation in length creates rhythm — readers expect patterns and are jolted when patterns break',
      'Key pattern: multiple long sentences followed by one very short sentence = maximum emphasis on the short one',
    ],
  },
  {
    type: 'examtip',
    content: 'For rhetorical analysis, never say "the author uses short sentences" without explaining the effect. Say: "The shift to a series of short, declarative sentences — each beginning with a verb, each stating a fact — creates a staccato rhythm that mirrors the jerky, disorienting experience being described. The simplicity of structure conveys the urgency of the message."',
  },
]

export default function LangU4T1() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 1,
        title: 'diction & syntax',
        keyTerms: ['diction', 'connotation', 'denotation', 'register', 'formal', 'colloquial', 'syntax', 'sentence structure', 'clause', 'simple sentence', 'complex sentence'],
      }}
      sections={sections}
      next={{ href: '/lang/unit-4/2', title: 'periodic vs loose sentences' }}
      courseHref="/lang"
      unitHref="/lang/unit-4"
    />
  )
}
