import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'perspective & bias', description: 'how a writer\'s background shapes what they argue and leave out.' },
  { number: 2, title: 'loaded language & propaganda', description: 'emotionally charged words and persuasion techniques.' },
  { number: 3, title: 'assumptions & cultural context', description: 'unstated beliefs and how culture changes interpretation.' },
  { number: 4, title: 'historical context', description: 'how the historical moment shapes a text\'s meaning.' },
  { number: 5, title: 'credibility vs reliability', description: 'author credentials vs factual accuracy and source quality.' },
  { number: 6, title: 'multiple viewpoints', description: 'identifying and evaluating competing perspectives.' },
]

export default function LangUnit6Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 6, title: 'position, perspective & bias', examWeight: '11–14%', description: 'critical reading — understanding who is speaking, why, and what assumptions underpin their argument.' }}
      topics={topics}
      basePath="/lang/unit-6"
      courseHref="/lang"

      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
