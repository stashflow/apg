import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 2, title: 'period 2: 1607–1754' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what was the first great awakening?',
  },
  {
    type: 'body',
    content: 'The First Great Awakening (c. 1730–1745) was a wave of evangelical Protestant revivals that swept through all 13 colonies. It emphasized emotional, personal conversion experiences over formal religious practice. The most important figure was George Whitefield, a British minister who toured the colonies seven times and drew enormous crowds with his dramatic preaching.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Jonathan Edwards** (Massachusetts): intellectual Calvinist; "Sinners in the Hands of an Angry God" (1741) — vivid imagery of damnation used to shock congregation into conversion',
      '**George Whitefield**: celebrity preacher; first American mass-media figure — his tour advertised by Benjamin Franklin\'s Pennsylvania Gazette; drew 20,000+ listeners in the open air',
      '**New Lights**: embraced emotional revival; started new churches; challenged established clergy authority',
      '**Old Lights**: rejected emotional preaching as "enthusiasm" (irrationalism); defended established church order',
      'Result: split and multiplication of churches — Baptist and Methodist congregations exploded in membership among ordinary people, especially in the South',
    ],
  },
  {
    type: 'heading',
    content: 'political consequences — why the awakening mattered beyond religion',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Taught ordinary people to **evaluate and reject authority** — if a minister could be wrong, so could a king',
      'Created democratic religious culture: anyone could experience conversion regardless of class, education, or wealth — undermined social hierarchy',
      'First truly **pan-colonial event**: colonists from Georgia to Massachusetts shared a common experience → built shared American identity preceding the Revolution',
      'New denominations (Baptist, Methodist) spread among enslaved people in the South — seeds of African-American Christianity',
      'Weakened established churches (Anglican in South, Congregational in New England) → separated church from state power → paved road to First Amendment',
    ],
  },
  {
    type: 'examtip',
    content: 'The Great Awakening is tested in relation to the Revolution constantly. The connection: both movements involved ordinary people challenging established authority based on individual conscience. When you write about the "intellectual origins of the Revolution," include the Great Awakening alongside Enlightenment thought — they worked together to create a culture of questioning authority.',
  },
]

export default function APUSHU2T7() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 7,
        title: 'first great awakening',
        keyTerms: ['First Great Awakening', 'George Whitefield', 'Jonathan Edwards', 'New Lights', 'Old Lights', 'evangelical', 'Sinners in the Hands of an Angry God', 'itinerant preaching', 'denominationalism'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-2/6', title: 'mercantilism & salutary neglect' }}
      next={{ href: '/apush/unit-2/8', title: 'colonial slavery' }}
      courseHref="/apush"
      unitHref="/apush/unit-2"
    />
  )
}
