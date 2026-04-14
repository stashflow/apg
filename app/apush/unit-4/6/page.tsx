import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 4, title: 'period 4: 1800–1848' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'jackson\'s political revolution' },
  { type: 'body', content: 'Andrew Jackson\'s election (1828) represented a genuine democratic revolution: the first president from west of the Appalachians, first from a poor background, champion of the "common man." Property requirements for voting had been eliminated in most states by 1828, dramatically expanding the white male electorate. Jackson used this expanded democracy to crush his enemies: the Second Bank of the United States, Native Americans, and South Carolina nullifiers.' },
  { type: 'heading', content: 'spoils system' },
  { type: 'body', content: 'Jackson replaced federal officeholders with loyal Democrats — "to the victor belong the spoils." He fired more officials than all previous presidents combined. Jackson defended it as democratic reform: civil service should not be a permanent class of elites. Critics saw it as corruption. The spoils system persisted until the Pendleton Civil Service Act (1883) after the Garfield assassination.' },
  { type: 'heading', content: 'nullification crisis (1832–1833)' },
  { type: 'body', content: 'South Carolina, led by Jackson\'s own Vice President John C. Calhoun, declared federal tariffs (the "Tariff of Abominations," 1828) null and void within the state. Jackson furiously threatened to send troops. Congress passed the Force Act authorizing military action. Clay negotiated a compromise tariff. South Carolina backed down but reserved the right to nullify — setting the stage for secession 30 years later.' },
  { type: 'heading', content: 'bank war (1832–1836)' },
  { type: 'bullets', content: '', bullets: [
    'Jackson HATED the Second Bank of the United States (BUS) — called it a monster monopoly serving wealthy elites and foreign investors',
    'BUS president Nicholas Biddle sought early recharter in 1832 (election year); Jackson vetoed it in a populist message attacking "the rich and powerful" who bend government to "selfish purposes"',
    'Jackson won reelection in a landslide, claiming a mandate; ordered Treasury Secretary to remove federal deposits from BUS (fired two before Roger Taney obeyed)',
    'BUS collapsed; state banks ("pet banks") received federal deposits; expanded credit led to speculative boom → Jackson\'s Specie Circular (1836) required land payments in gold/silver → Panic of 1837 (hit Van Buren)',
  ]},
  { type: 'examtip', content: 'The Bank War is about more than banking. It\'s Jackson asserting presidential power over Congress and the financial elite. Know: Jackson\'s veto message is one of the most important presidential documents — it argues the president represents the people against Congress and economic elites.' },
]

export default function APUSHU4T6() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 6, title: 'jacksonian democracy', keyTerms: ['spoils system', 'nullification crisis', 'Bank War', 'Calhoun', 'Tariff of Abominations', 'Force Act', 'Specie Circular', 'Second Bank of the United States'] }}
      sections={sections}
      prev={{ href: '/apush/unit-4/5', title: 'market revolution' }}
      next={{ href: '/apush/unit-4/7', title: 'indian removal act' }}
      courseHref="/apush" unitHref="/apush/unit-4"
    />
  )
}
