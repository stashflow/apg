import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'main claim & subclaim', description: 'the difference between a thesis (main claim) and the supporting claims (subclaims) that scaffold it.' },
  { number: 2, title: 'thesis statement construction', description: 'how to write a defensible, specific, nuanced thesis — with templates and examples that score full points.' },
  { number: 3, title: 'types of evidence', description: 'anecdotes, statistics, historical examples, expert testimony, personal experience, and analogy — all defined with exam use cases.' },
  { number: 4, title: 'evidence relevance & sufficiency', description: 'how graders judge whether evidence is on-topic, adequate in amount, and actually supports the claim.' },
  { number: 5, title: 'commentary & analysis', description: 'the "so what?" — how to explain why your evidence matters and connect it back to your thesis without just summarizing.' },
  { number: 6, title: 'counterclaim, rebuttal & concession', description: 'how to acknowledge opposing views, concede valid points, and refute effectively — the mark of a sophisticated argument.' },
]

export default function LangUnit2Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 2, title: 'claims & evidence', examWeight: '11–14%', description: 'how to build and support arguments — thesis construction, evidence types, and commentary.' }}
      topics={topics}
      basePath="/lang/unit-2"
      courseHref="/lang"
      videoId="vPJGDf0LmOA"
      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
