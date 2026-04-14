import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 5, title: 'putting it all together' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'what cohesion means in writing' },
  { type: 'body', content: 'Cohesion is the quality of a text that makes it feel unified — where each sentence connects to the previous one and to the overall argument. Transitions are the primary tool of cohesion, but cohesion also comes from consistent vocabulary, pronoun reference, and logical flow between ideas.' },
  { type: 'heading', content: 'transition categories and words' },
  { type: 'table', content: '', tableHeaders: ['function', 'transitions to use'],
    tableRows: [
      ['Adding / elaborating', 'furthermore, in addition, moreover, similarly, also, equally important'],
      ['Contrasting / conceding', 'however, nevertheless, although, despite, even so, on the other hand, yet, conversely'],
      ['Cause and effect', 'therefore, thus, consequently, as a result, for this reason, hence'],
      ['Sequence / time', 'first, subsequently, meanwhile, ultimately, finally, before, after'],
      ['Exemplifying', 'for instance, for example, specifically, in particular, to illustrate'],
      ['Summarizing / concluding', 'in sum, ultimately, overall, in other words, to this end'],
    ]
  },
  { type: 'heading', content: 'beyond transition words — structural cohesion' },
  { type: 'bullets', content: '', bullets: [
    '**echo technique**: repeat a key word or phrase from the previous paragraph at the start of the next — creates an invisible thread',
    '**pronoun reference**: use "this," "these," "such" to refer back to previously established concepts',
    '**parallel structure across paragraphs**: if all topic sentences follow the same grammatical form, the essay feels architecturally unified',
    '**transitional sentences vs. words**: sometimes a full sentence of transition is needed between major sections of the argument',
  ]},
  { type: 'examtip', content: 'AP readers score for sophistication partly by looking for essays that feel unified — where each paragraph feels like a necessary step rather than a separate topic. Transitions earn this quality. The worst-scoring essays feel like a list of observations; the best feel like a single sustained argument where each sentence earns its place.' },
]

export default function LangU5T4() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 4, title: 'transitions & cohesion', keyTerms: ['cohesion', 'transitions', 'echo technique', 'parallel structure', 'logical flow', 'unified argument'] }}
      sections={sections}
      prev={{ href: '/lang/unit-5/3', title: 'topic sentences & commentary' }}
      next={{ href: '/lang/unit-5/5', title: 'essay organization' }}
      courseHref="/lang" unitHref="/lang/unit-5"
    />
  )
}
