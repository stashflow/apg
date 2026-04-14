import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'arguable & qualified claims', description: 'what makes a claim arguable (not a fact), and how to qualify it with "although," "while," "even though" for nuance.' },
  { number: 2, title: 'defending a claim', description: 'selecting and integrating the strongest evidence, writing commentary that bridges evidence to thesis, and sustaining an argument.' },
  { number: 3, title: 'counterargument & refutation', description: 'presenting the strongest version of the opposing view, then dismantling it — how to write this without undermining yourself.' },
  { number: 4, title: 'synthesis of sources', description: 'using multiple sources as a conversation — how to cite, integrate, and synthesize without summarizing or patchwriting.' },
  { number: 5, title: 'building a line of reasoning', description: 'connecting every part of your essay — thesis, subclaims, evidence, commentary — into one coherent logical chain.' },
  { number: 6, title: 'evidence selection & commentary depth', description: 'choosing evidence that is specific, significant, and arguable — and writing commentary that earns sophistication points.' },
]

export default function LangUnit7Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 7, title: 'developing an argument', examWeight: '11–14%', description: 'building complete, sophisticated arguments — the skills that directly drive your argument essay score.' }}
      topics={topics}
      basePath="/lang/unit-7"
      courseHref="/lang"
      videoId="F4xUKv5pHW4"
      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
