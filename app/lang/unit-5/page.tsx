import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'combining appeals & evidence', description: 'layering ethos, pathos, logos with evidence for persuasive arguments.' },
  { number: 2, title: 'strong thesis construction', description: 'defensible, specific, nuanced thesis with clear line of reasoning.' },
  { number: 3, title: 'embedding quotations', description: 'integrating quotes smoothly into your sentences without awkwardness.' },
  { number: 4, title: 'blending evidence', description: 'weaving evidence into analysis rather than dumping quotes.' },
  { number: 5, title: 'avoiding summary', description: 'analyzing rather than retelling — the key to commentary.' },
  { number: 6, title: 'topic sentences & commentary', description: 'connecting to thesis and going beyond restating evidence.' },
  { number: 7, title: 'transitions & cohesion', description: 'words, phrases, and techniques that create flow.' },
  { number: 8, title: 'essay organization', description: 'intro-body-conclusion and alternative arrangements.' },
  { number: 9, title: 'introduction & conclusion', description: 'hooks, context, thesis placement; synthesis and resonance.' },
  { number: 10, title: 'sophistication point', description: 'what it means, how to earn it, and strategies for every essay.' },
]

export default function LangUnit5Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 5, title: 'putting it all together', examWeight: '11–14%', description: 'synthesizing every skill — how to build, organize, and polish a complete AP Lang essay.' }}
      topics={topics}
      basePath="/lang/unit-5"
      courseHref="/lang"

      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
