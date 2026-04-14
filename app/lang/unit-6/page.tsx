import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'perspective & bias', description: 'how a writer\'s background shapes what they argue and leave out.' },
  { number: 2, title: 'recognizing bias in evidence', description: 'identifying slanted data, cherry-picked examples, and agenda.' },
  { number: 3, title: 'loaded language', description: 'emotionally charged words that influence reader response.' },
  { number: 4, title: 'propaganda techniques', description: 'bandwagon, card stacking, glittering generalities, and more.' },
  { number: 5, title: 'assumptions & cultural context', description: 'unstated beliefs and how culture changes interpretation.' },
  { number: 6, title: 'historical context', description: 'how the historical moment shapes a text\'s meaning.' },
  { number: 7, title: 'credibility vs reliability', description: 'author credentials vs factual accuracy and source quality.' },
  { number: 8, title: 'primary vs secondary sources', description: 'firsthand accounts vs interpretations and analyses.' },
  { number: 9, title: 'multiple viewpoints', description: 'identifying and evaluating competing perspectives.' },
  { number: 10, title: 'author\'s position & agenda', description: 'evaluating source origin and potential biases.' },
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
