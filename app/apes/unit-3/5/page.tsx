import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are survivorship curves?',
  },
  {
    type: 'body',
    content: 'survivorship curves show the proportion of individuals surviving at each age in a population. they reveal patterns of mortality — when organisms are most likely to die. ecologists recognize three main types, each representing a different life history strategy.',
  },
  {
    type: 'heading',
    content: 'type I survivorship',
  },
  {
    type: 'body',
    content: 'type I curves show high survival throughout most of life, with mortality concentrated in old age. most individuals live to near their maximum lifespan.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**low juvenile mortality** — most offspring survive to adulthood',
      '**high old-age mortality** — death comes primarily from aging',
      '**few offspring, high investment** — K-selected strategy',
      '**extensive parental care** — protects young through vulnerable stages',
      '**curve shape** — relatively flat, then drops steeply at old age',
    ],
  },
  {
    type: 'body',
    content: 'examples: humans, elephants, whales, great apes, most large mammals.',
  },
  {
    type: 'heading',
    content: 'type II survivorship',
  },
  {
    type: 'body',
    content: 'type II curves show constant mortality rate throughout life. the probability of dying is roughly equal at any age.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**constant mortality** — same death rate at all ages',
      '**death from predation/disease** — external factors rather than aging',
      '**moderate reproductive strategy** — between r and K',
      '**curve shape** — straight diagonal line on a log scale',
    ],
  },
  {
    type: 'body',
    content: 'examples: many songbirds, small mammals (squirrels, mice), some reptiles, many invertebrates, some perennial plants.',
  },
  {
    type: 'heading',
    content: 'type III survivorship',
  },
  {
    type: 'body',
    content: 'type III curves show extremely high mortality early in life, with survivors having relatively low mortality afterward. most individuals die young.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**very high juvenile mortality** — most offspring die before maturity',
      '**survivors do well** — those that reach adulthood have decent survival',
      '**many offspring, little investment** — r-selected strategy',
      '**no parental care** — offspring fend for themselves',
      '**curve shape** — drops steeply at first, then flattens',
    ],
  },
  {
    type: 'body',
    content: 'examples: most fish, oysters, sea turtles, frogs, insects, annual plants, oak trees (seedlings).',
  },
  {
    type: 'heading',
    content: 'comparison of survivorship types',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['feature', 'type I', 'type II', 'type III'],
    tableRows: [
      ['mortality pattern', 'old age', 'constant', 'early life'],
      ['offspring number', 'few', 'moderate', 'many'],
      ['parental care', 'high', 'moderate', 'none'],
      ['body size', 'usually large', 'varied', 'often small'],
      ['r/K strategy', 'K-selected', 'intermediate', 'r-selected'],
      ['example', 'humans', 'robins', 'sea turtles'],
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam often gives you a graph and asks you to identify the survivorship type. type I = concave (drops late), type II = linear (drops steadily), type III = convex (drops early). also know that log scale is often used — this makes type II a straight diagonal.',
  },
  {
    type: 'heading',
    content: 'reading survivorship curves',
  },
  {
    type: 'body',
    content: 'survivorship curves typically plot age (x-axis) against the number or proportion of survivors (y-axis), often on a logarithmic scale:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**logarithmic y-axis** — each unit represents a 10-fold change in survival',
      '**cohort** — a group of individuals born at the same time, followed through life',
      '**life table** — the data used to construct survivorship curves',
      '**starting point** — usually 1,000 individuals at birth (cohort size)',
    ],
  },
  {
    type: 'heading',
    content: 'conservation applications',
  },
  {
    type: 'body',
    content: 'understanding survivorship helps focus conservation efforts on the most critical life stages:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**type I species** — protect adults (breeding individuals are crucial)',
      '**type III species** — often focus on juveniles (many more individuals, small improvements in juvenile survival have big impacts)',
      '**sea turtle conservation** — protects eggs and hatchlings (Type III = high juvenile mortality)',
      '**whale conservation** — protects adult females (Type I = each adult is crucial)',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may give you data on age-specific mortality and ask you to sketch or identify the survivorship curve. if most deaths occur early = Type III. if deaths are evenly distributed = Type II. if most deaths occur late = Type I. connect to reproductive strategy (r vs. K selection).',
  },
]

export default function APESU3T5() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations' }}
      topic={{
        number: 5,
        title: 'survivorship curves',
        keyTerms: ['survivorship curve', 'Type I', 'Type II', 'Type III', 'cohort', 'life table', 'age-specific mortality'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-3/4', title: 'generalist vs specialist' }}
      next={{ href: '/apes/unit-3/6', title: 'age-structure diagrams' }}
      courseHref="/apes"
      unitHref="/apes/unit-3"
    />
  )
}
