import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'main claim & subclaim', description: 'thesis (main claim) vs supporting claims (subclaims) that scaffold it.' },
  { number: 2, title: 'implicit vs explicit claims', description: 'stated claims vs claims the reader must infer from context.' },
  { number: 3, title: 'thesis statement construction', description: 'defensible, specific, nuanced thesis — templates and examples.' },
  { number: 4, title: 'qualification of claims', description: 'using "although," "while," "to an extent" to add nuance.' },
  { number: 5, title: 'types of evidence', description: 'anecdotal, empirical, statistical, expert testimony, and analogy.' },
  { number: 6, title: 'warrant', description: 'the "why this evidence matters" — connecting evidence to claim.' },
  { number: 7, title: 'commentary & analysis', description: 'the "so what?" — explaining why evidence supports your thesis.' },
  { number: 8, title: 'counterclaim, rebuttal & concession', description: 'acknowledging, conceding, and refuting opposing views.' },
]

export default function LangUnit2Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 2, title: 'claims & evidence', examWeight: '11–14%', description: 'how to build and support arguments — thesis construction, evidence types, and commentary.' }}
      topics={topics}
      basePath="/lang/unit-2"
      courseHref="/lang"

      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
