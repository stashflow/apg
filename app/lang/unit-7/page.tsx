import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'arguable & qualified claims', description: 'what makes a claim arguable, and qualifying with "although," "while."' },
  { number: 2, title: 'addressing complexity', description: 'dealing with tensions, contradictions, and multiple perspectives.' },
  { number: 3, title: 'defending a claim', description: 'selecting strongest evidence and bridging it to thesis.' },
  { number: 4, title: 'counterargument & refutation', description: 'presenting and dismantling opposing views effectively.' },
  { number: 5, title: 'synthesis of sources', description: 'using sources as a conversation without summarizing.' },
  { number: 6, title: 'building a line of reasoning', description: 'connecting thesis, subclaims, evidence into coherent chain.' },
]

export default function LangUnit7Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 7, title: 'developing an argument', examWeight: '11–14%', description: 'building complete, sophisticated arguments — the skills that directly drive your argument essay score.' }}
      topics={topics}
      basePath="/lang/unit-7"
      courseHref="/lang"

      examDate={{ date: 'Wednesday, May 13, 2026', time: '8:00 AM' }}
    />
  )
}
