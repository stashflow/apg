import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'combining appeals & evidence', description: 'how to layer ethos, pathos, and logos with evidence types to create persuasive, multidimensional arguments.' },
  { number: 2, title: 'strong thesis construction', description: 'the anatomy of a high-scoring thesis — defensible, specific, nuanced, with a clear line of reasoning implied.' },
  { number: 3, title: 'topic sentences & commentary integration', description: 'how to write topic sentences that connect to the thesis, and commentary that goes beyond restating evidence.' },
  { number: 4, title: 'transitions & cohesion', description: 'transition words, phrases, and techniques that create flow — and how cohesion earns points on every FRQ.' },
  { number: 5, title: 'essay organization', description: 'intro-body-conclusion structure, alternative arrangements, and how organization serves the argument.' },
  { number: 6, title: 'introduction & conclusion techniques', description: 'hooks, context-setting, and thesis placement for intros; synthesis, call-to-action, and resonance for conclusions.' },
]

export default function LangUnit5Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 5, title: 'putting it all together', examWeight: '11–14%', description: 'synthesizing every skill — how to build, organize, and polish a complete AP Lang essay.' }}
      topics={topics}
      basePath="/lang/unit-5"
      courseHref="/lang"
      videoId="0w-R4z4wvFU"
      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
