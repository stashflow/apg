import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 4, title: 'syntax & sentence structure' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'voice — the writer\'s presence on the page',
  },
  {
    type: 'body',
    content: 'Voice is the overall personality a writer projects through their text — a combination of diction, syntax, tone, and perspective that makes their writing recognizable and distinct. Voice is how a reader feels the writer\'s presence even when the writer is invisible. Style is the sum of all the technical choices (diction, syntax, imagery, structure) that create voice.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Voice emerges from: word choice (formal vs. colloquial), sentence length and variety, use of humor or irony, degree of emotional engagement, types of evidence used',
      '**Authoritative voice**: formal diction, complex sentence structures, citations, measured tone — used for academic and journalistic writing',
      '**Personal/Intimate voice**: first person, conversational diction, anecdote, emotional directness — used for personal essays and testimonials',
      '**Ironic voice**: understated language, gap between what is said and meant, knowing tone — used for satire and critique',
      '**Urgent voice**: short sentences, direct address ("you"), imperative mood, passionate diction — used for calls to action',
    ],
  },
  {
    type: 'heading',
    content: 'style analysis — what to look for',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['element', 'questions to ask'],
    tableRows: [
      ['Diction level', 'Formal or colloquial? Technical or accessible? Latinate (abstract) or Anglo-Saxon (concrete)?'],
      ['Sentence variety', 'Long or short? Simple or complex? What patterns recur?'],
      ['Tone', 'Urgent, measured, ironic, passionate? How does it shift?'],
      ['Figurative language', 'What tropes dominate? What do they suggest about the writer\'s worldview?'],
      ['Structural patterns', 'Are there schemes (anaphora, parallelism)? How do they create emphasis?'],
      ['Point of view', 'First, second, or third? What does this choice imply?'],
    ],
  },
  {
    type: 'heading',
    content: 'developing your own style',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Read widely and analytically — notice how writers you admire make choices',
      'Vary your sentence length deliberately — break long passages of complex sentences with short, direct ones for impact',
      'Use concrete, specific imagery rather than abstract generalization',
      'Avoid passive voice when you can — active voice creates more energy',
      'Let your diction match your audience — match the formality level to the context',
    ],
  },
  {
    type: 'examtip',
    content: 'Style analysis questions on MCQ often ask: "Which of the following best describes the author\'s style?" The answer choices will use style vocabulary: "precise and analytical," "lyrical and introspective," "formal and authoritative," "conversational and ironic." Practice identifying style from short passages and connecting it to the specific diction/syntax choices that create it.',
  },
]

export default function LangU4T3() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 3,
        title: 'voice & style',
        keyTerms: ['voice', 'style', 'authoritative voice', 'personal voice', 'ironic voice', 'style analysis', 'register', 'persona', 'active voice'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-4/2', title: 'rhetorical schemes' }}
      courseHref="/lang"
      unitHref="/lang/unit-4"
    />
  )
}
