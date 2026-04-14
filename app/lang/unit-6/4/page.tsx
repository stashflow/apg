import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 6, title: 'position, perspective & bias' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'audience analysis — the full picture' },
  { type: 'body', content: 'Identifying the audience is not enough — you must analyze HOW the writer constructs the text for that specific audience. Every word choice, example, appeal, and structural decision is shaped by the writer\'s model of who is reading and what will move them.' },
  { type: 'bullets', content: '', bullets: [
    '**demographic assumptions**: age, education, class, nationality — what does the writer assume readers know and value?',
    '**values alignment**: the writer signals shared values ("as Americans," "as parents," "as believers in freedom") to build in-group identification',
    '**resistance anticipation**: a sophisticated writer anticipates audience resistance and addresses it directly — building credibility through fairness',
    '**primary vs. secondary audience**: a speech at a political convention targets the live audience (primary) but is also designed for the broader national TV audience (secondary)',
  ]},
  { type: 'heading', content: 'ethos — establishing credibility' },
  { type: 'bullets', content: '', bullets: [
    '**credentials/expertise**: formal qualifications that establish authority in a domain',
    '**moral character**: the writer comes across as honest, fair, and trustworthy — not just technically expert',
    '**goodwill**: demonstrating that you have the audience\'s best interests at heart, not just your own',
    '**fair-mindedness**: acknowledging opposing views, using precise language, avoiding cheap emotional manipulation — these all build ethos',
    '**shared experience**: "I have lived this" establishes a different kind of credibility than expertise — the authority of witness',
  ]},
  { type: 'heading', content: 'undermining credibility' },
  { type: 'bullets', content: '', bullets: [
    '**factual errors** — even minor mistakes undermine a writer\'s authority; readers question everything else',
    '**obvious self-interest** — if the writer clearly benefits from their argument, credibility suffers',
    '**unfair characterizations** — strawmanning the opposition signals bad faith and undermines ethos',
    '**overconfident claims** — failing to acknowledge uncertainty or nuance reads as either dishonest or naive',
  ]},
  { type: 'examtip', content: 'Ethos is not just about credentials — in fact, credentials alone rarely persuade. The most effective ethos combines expertise + moral character + goodwill. A doctor who says "I have seen 30 patients die from this medication, and my own child takes it" has all three: expertise (doctor), moral character (honesty about the cost), and goodwill (personal stake in getting it right).' },
]

export default function LangU6T4() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 4, title: 'intended audience & speaker credibility', keyTerms: ['audience analysis', 'ethos', 'credentials', 'moral character', 'goodwill', 'fair-mindedness', 'primary audience', 'values alignment'] }}
      sections={sections}
      prev={{ href: '/lang/unit-6/3', title: 'historical context' }}
      next={{ href: '/lang/unit-6/5', title: 'multiple viewpoints' }}
      courseHref="/lang" unitHref="/lang/unit-6"
    />
  )
}
