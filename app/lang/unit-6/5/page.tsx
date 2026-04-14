import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 6, title: 'position, perspective & bias' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'why multiple viewpoints matter' },
  { type: 'body', content: 'The AP Lang exam, especially the synthesis essay, is designed to test your ability to hold multiple perspectives in mind simultaneously — to understand each on its own terms, identify where they agree and disagree, and build your own nuanced argument that engages with the full complexity of the issue. This is one of the hardest intellectual skills the exam tests.' },
  { type: 'heading', content: 'identifying the landscape of views' },
  { type: 'bullets', content: '', bullets: [
    'On any contested issue, map out the full range: what are the most important positions, not just "for" and "against"?',
    'Often there are 3–4 distinct perspectives: e.g. on social media: (1) net positive for democracy, (2) net negative, (3) neutral tool dependent on use, (4) structural reform needed',
    'Understand each perspective on its OWN terms — what evidence supports it? What values does it prioritize?',
    'Identify the CRUXES: where exactly do positions diverge? Is it factual (different evidence), values-based (different priorities), or definitional (different concepts of harm)?',
  ]},
  { type: 'heading', content: 'representing viewpoints fairly' },
  { type: 'bullets', content: '', bullets: [
    '**steelmanning**: representing the opposing view in its STRONGEST form, not a weakened version — shows intellectual honesty',
    '**avoiding strawmanning**: do not misrepresent a view to make it easier to knock down; graders recognize this as bad faith',
    '**concession language**: "while critics correctly note that..." / "proponents are right that..." — fair acknowledgment before your response',
    '**genuinely engaging**: do not dismiss alternative views — explain why, despite their merits, your position is stronger',
  ]},
  { type: 'frqtip', content: 'A synthesis essay that only presents sources supporting your thesis is a missed opportunity. The best essays use at least one source that complicates or challenges your argument — and then explain why your position is still stronger. This is what earns the sophistication/complexity point and demonstrates genuine intellectual engagement rather than cherry-picking.' },
]

export default function LangU6T5() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 5, title: 'multiple viewpoints', keyTerms: ['steelmanning', 'strawmanning', 'concession', 'perspectives', 'crux of disagreement', 'complexity', 'nuanced argument'] }}
      sections={sections}
      prev={{ href: '/lang/unit-6/4', title: 'intended audience & speaker credibility' }}
      next={{ href: '/lang/unit-6/6', title: "author's position & reliability" }}
      courseHref="/lang" unitHref="/lang/unit-6"
    />
  )
}
