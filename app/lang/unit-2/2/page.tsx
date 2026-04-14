import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 2, title: 'claims, evidence & reasoning' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'types of evidence',
  },
  {
    type: 'body',
    content: 'Evidence is anything a writer uses to support a claim. Not all evidence is equally strong — the type you use, how you use it, and how well it actually connects to your claim all determine whether your evidence convinces. Good arguers don\'t just pile up evidence — they select the most convincing type for their specific audience and purpose.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['evidence type', 'description', 'strength', 'weakness'],
    tableRows: [
      ['Statistical/Quantitative', 'Numbers, data, studies, surveys', 'Specific, verifiable, hard to dispute', 'Can be selectively used; sources matter; correlation ≠ causation'],
      ['Expert testimony', 'Quotes from authorities in the relevant field', 'Borrows credibility; synthesizes complex knowledge', 'Experts can be wrong; experts disagree; "appeal to authority" fallacy'],
      ['Historical examples', 'Past events that illustrate the point', 'Concrete, familiar; tests claims across time', 'History is complex; cherry-picking; past ≠ future'],
      ['Anecdote/narrative', 'A story about a specific person or event', 'Emotionally resonant; makes abstract concrete', 'One case ≠ universal; can feel manipulative'],
      ['Analogy', 'Comparison to a similar situation', 'Illuminates the unfamiliar; intuitive', 'Analogies can break down; no analogy is perfect'],
      ['Primary sources', 'Original documents, speeches, data', 'Highest credibility; direct connection to claim', 'Requires context; can be misinterpreted'],
    ],
  },
  {
    type: 'heading',
    content: 'evaluating evidence quality',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Relevance**: does this evidence actually support this claim? (the most common evidence failure)',
      '**Sufficiency**: is there enough evidence to be convincing? (one statistic ≠ a pattern)',
      '**Accuracy**: is the source reliable and current?',
      '**Representativeness**: is this example typical, or is it cherry-picked?',
      '**Currency**: is the evidence recent enough to apply to the current situation?',
    ],
  },
  {
    type: 'heading',
    content: 'how to use evidence in your essays',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Never drop evidence without explanation — introduce it, quote/cite it, then explain what it shows',
      'The **ICE method**: Introduce (context + source) → Cite (the evidence) → Explain (how it supports your claim)',
      'Explanation should be longer than the evidence itself — this is where YOUR analysis lives',
      'One well-analyzed piece of evidence is worth more than three unanalyzed pieces',
      'For the synthesis essay: your job is to synthesize sources, not just summarize them — show how they speak to each other',
    ],
  },
  {
    type: 'examtip',
    content: 'In the synthesis essay, you MUST cite at least 3 of the provided sources (scoring requires it). But "citing" means integrating them meaningfully — not just "Source A says X." Show how sources agree, disagree, complicate each other, or fill gaps. A response that cites 6 sources mechanically scores lower than one that deeply engages with 3.',
  },
]

export default function LangU2T2() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 2,
        title: 'evidence types & sources',
        keyTerms: ['evidence', 'statistics', 'expert testimony', 'anecdote', 'analogy', 'primary source', 'relevance', 'sufficiency', 'ICE method', 'synthesis'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-2/1', title: 'types of claims' }}
      next={{ href: '/lang/unit-2/3', title: 'reasoning & logical structure' }}
      courseHref="/lang"
      unitHref="/lang/unit-2"
    />
  )
}
