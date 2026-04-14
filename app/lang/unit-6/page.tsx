import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'perspective & bias', description: 'how a writer\'s background, identity, and experience shape what they argue — and what they leave out.' },
  { number: 2, title: 'assumptions & cultural context', description: 'the unstated beliefs a writer assumes the audience shares — and how cultural context changes interpretation.' },
  { number: 3, title: 'historical context', description: 'how the historical moment shapes a text\'s meaning — and why understanding context is essential to analysis.' },
  { number: 4, title: 'intended audience & speaker credibility', description: 'who the writer is writing for, how credibility (ethos) is established or undermined, and why it matters.' },
  { number: 5, title: 'multiple viewpoints', description: 'how to identify, represent, and evaluate competing perspectives on an issue — the foundation of synthesis.' },
  { number: 6, title: 'author\'s position & reliability of a source', description: 'evaluating where a source comes from, what agenda it may have, and how to assess its trustworthiness.' },
]

export default function LangUnit6Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 6, title: 'position, perspective & bias', examWeight: '11–14%', description: 'critical reading — understanding who is speaking, why, and what assumptions underpin their argument.' }}
      topics={topics}
      basePath="/lang/unit-6"
      courseHref="/lang"
    />
  )
}
