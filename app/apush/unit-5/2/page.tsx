import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 5, title: 'period 5: 1844–1877' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'mexican-american war (1846–1848)' },
  { type: 'body', content: 'Polk provoked the war by sending General Zachary Taylor into disputed territory between the Nueces River (Mexican border) and the Rio Grande. When Mexican troops crossed the Rio Grande and killed American soldiers, Polk asked Congress to declare war, claiming "American blood has been shed on American soil." Lincoln (then a congressman) challenged this claim with "spot resolutions" — demanding Polk identify the exact spot American blood was shed.' },
  { type: 'bullets', content: '', bullets: [
    '**Key battles**: General Winfield Scott captured Mexico City (September 1847); greatest American military campaign since the Revolution',
    '**Treaty of Guadalupe Hidalgo (1848)** — Mexico ceded Texas (with Rio Grande border), California, New Mexico, Arizona, Utah, Nevada, Colorado — the Mexican Cession — for $15 million',
    '**Gadsden Purchase (1853)** — $10 million purchased southern Arizona and New Mexico strip for a southern transcontinental railroad route',
    '**Opposition** — Henry David Thoreau: "Civil Disobedience" — refused to pay taxes to support an unjust war; Ulysses Grant (who fought in the war): called it "the most unjust ever waged by a stronger against a weaker nation"',
  ]},
  { type: 'heading', content: 'impact — slavery crisis reborn' },
  { type: 'body', content: 'The massive new territory immediately reignited the slavery question. The Wilmot Proviso (ban slavery in all Mexican Cession territory) passed the House but died in the Senate. Southern "fire-eaters" threatened secession if slavery was excluded. The country needed another compromise — and Henry Clay would provide it.' },
  { type: 'examtip', content: 'Know three things about the Mexican-American War: (1) Polk deliberately provoked it; (2) Treaty of Guadalupe Hidalgo gave us most of the Southwest; (3) it immediately created the Compromise of 1850 crisis. Lincoln\'s spot resolutions foreshadow his later presidency as a man of principle.' },
]

export default function APUSHU5T2() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 2, title: 'mexican-american war', keyTerms: ['Treaty of Guadalupe Hidalgo', 'Mexican Cession', 'Zachary Taylor', 'Wilmot Proviso', 'Gadsden Purchase', 'Civil Disobedience', 'Thoreau', 'spot resolutions'] }}
      sections={sections}
      prev={{ href: '/apush/unit-5/1', title: 'manifest destiny' }}
      next={{ href: '/apush/unit-5/3', title: 'compromise of 1850' }}
      courseHref="/apush" unitHref="/apush/unit-5"
    />
  )
}
