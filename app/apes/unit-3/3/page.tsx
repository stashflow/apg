import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'reproductive strategies',
  },
  {
    type: 'body',
    content: 'species have evolved different reproductive strategies based on the environments they inhabit. these strategies fall on a continuum from r-selected (quantity over quality) to K-selected (quality over quantity). the names come from the population growth equation: r = growth rate, K = carrying capacity.',
  },
  {
    type: 'heading',
    content: 'r-selected species',
  },
  {
    type: 'body',
    content: 'r-selected species maximize reproductive rate (r). they produce many offspring with little investment in each, betting that some will survive even in unpredictable environments.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**many offspring** — hundreds to millions of eggs/seeds',
      '**small offspring** — less energy invested per individual',
      '**no parental care** — offspring are on their own from birth',
      '**early maturity** — reproduce quickly, often in first year',
      '**short lifespan** — "live fast, die young"',
      '**opportunistic** — colonize new/disturbed habitats quickly',
      '**boom-bust populations** — rapid growth followed by crashes',
    ],
  },
  {
    type: 'body',
    content: 'examples: bacteria, insects, annual plants, mice, rabbits, many fish species, dandelions, mosquitoes.',
  },
  {
    type: 'heading',
    content: 'K-selected species',
  },
  {
    type: 'body',
    content: 'K-selected species compete effectively at carrying capacity (K). they produce few offspring with heavy investment in each, succeeding through quality survival rather than quantity.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**few offspring** — one to several per breeding event',
      '**large offspring** — well-developed at birth',
      '**extensive parental care** — years of investment in raising young',
      '**late maturity** — years or decades before first reproduction',
      '**long lifespan** — live slowly, die old',
      '**competitive specialists** — succeed in stable, crowded environments',
      '**stable populations** — fluctuate near carrying capacity',
    ],
  },
  {
    type: 'body',
    content: 'examples: elephants, whales, humans, eagles, giant sequoias, gorillas, albatrosses.',
  },
  {
    type: 'heading',
    content: 'comparison table',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['trait', 'r-selected', 'K-selected'],
    tableRows: [
      ['offspring number', 'many', 'few'],
      ['offspring size', 'small', 'large'],
      ['parental care', 'none/minimal', 'extensive'],
      ['maturity age', 'early', 'late'],
      ['lifespan', 'short', 'long'],
      ['body size', 'usually small', 'usually large'],
      ['survivorship curve', 'Type III', 'Type I'],
      ['population stability', 'boom-bust', 'stable near K'],
      ['habitat type', 'unpredictable/disturbed', 'stable/competitive'],
      ['extinction risk', 'lower (recover quickly)', 'higher (slow recovery)'],
    ],
  },
  {
    type: 'examtip',
    content: 'r-selected species are often early successional species that colonize disturbed areas. K-selected species dominate stable, mature ecosystems. this connects to succession — pioneer species tend to be r-selected; climax species tend to be K-selected.',
  },
  {
    type: 'heading',
    content: 'it\'s a continuum, not a dichotomy',
  },
  {
    type: 'body',
    content: 'most species fall somewhere between the extremes. even within a species, populations may shift strategies based on conditions. the r/K framework is a useful conceptual tool, but nature is more complex:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**sea turtles** — many eggs (r) but long-lived adults (K)',
      '**trees** — many seeds (r) but very long-lived (K)',
      '**humans** — strongly K-selected but can increase reproduction under some conditions',
      '**bet-hedging** — some species mix strategies across years or individuals',
    ],
  },
  {
    type: 'heading',
    content: 'conservation implications',
  },
  {
    type: 'body',
    content: 'r/K selection has important implications for conservation and management:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**K-selected species** are more vulnerable to extinction — slow reproduction means they can\'t recover quickly from population declines',
      '**r-selected species** often become pests — rapid reproduction lets them exploit disturbed or human-modified habitats',
      '**harvest management** differs — r-selected species can sustain heavy harvest; K-selected species need strict protection',
      '**invasive species** — successful invaders are often r-selected generalists',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may describe a species and ask you to classify it as r-selected or K-selected. list multiple traits that support your answer. if asked about conservation, explain why K-selected species are more vulnerable (slow reproduction, late maturity, few offspring).',
  },
]

export default function APESU3T3() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations' }}
      topic={{
        number: 3,
        title: 'r-selected vs K-selected',
        keyTerms: ['r-selected', 'K-selected', 'reproductive strategy', 'parental care', 'biotic potential', 'pioneer species'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-3/2', title: 'population growth models' }}
      next={{ href: '/apes/unit-3/4', title: 'generalist vs specialist' }}
      courseHref="/apes"
      unitHref="/apes/unit-3"
    />
  )
}
