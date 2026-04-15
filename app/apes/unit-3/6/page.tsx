import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are age-structure diagrams?',
  },
  {
    type: 'body',
    content: 'age-structure diagrams (population pyramids) show the distribution of a population across different age groups. they are powerful tools for predicting future population growth because they show how many individuals are in pre-reproductive, reproductive, and post-reproductive age classes.',
  },
  {
    type: 'heading',
    content: 'reading population pyramids',
  },
  {
    type: 'body',
    content: 'age-structure diagrams are horizontal bar graphs with:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**age groups on the y-axis** — youngest at bottom, oldest at top',
      '**population size on the x-axis** — males typically on left, females on right',
      '**width of bars** — represents the number of individuals in that age group',
      '**shape of pyramid** — reveals growth trajectory',
    ],
  },
  {
    type: 'heading',
    content: 'three types of age structures',
  },
  {
    type: 'subheading',
    content: 'rapid growth (expansive pyramid)',
  },
  {
    type: 'body',
    content: 'wide base, tapering top — many young people, few old people. the large pre-reproductive population will soon enter reproductive age, causing continued rapid growth.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**shape** — classic pyramid, wide at base',
      '**growth trend** — rapid population growth',
      '**typical countries** — developing nations (Nigeria, Afghanistan, many African countries)',
      '**implications** — pressure on schools, jobs, resources; "youth bulge"',
    ],
  },
  {
    type: 'subheading',
    content: 'slow growth (stationary pyramid)',
  },
  {
    type: 'body',
    content: 'roughly equal width at most ages, with a narrowing top. births approximately equal deaths, so population is stable or growing slowly.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**shape** — column-like with slight taper at top',
      '**growth trend** — stable or slow growth',
      '**typical countries** — developed nations (USA, Australia, France)',
      '**implications** — balance between workers and dependents',
    ],
  },
  {
    type: 'subheading',
    content: 'negative growth (constrictive pyramid)',
  },
  {
    type: 'body',
    content: 'narrow base, wider middle — fewer young people than middle-aged. births are below replacement level, so population will decline.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**shape** — narrow at base, bulging in middle',
      '**growth trend** — population decline',
      '**typical countries** — Japan, Germany, Italy, Russia',
      '**implications** — aging population, labor shortages, pension strain',
    ],
  },
  {
    type: 'heading',
    content: 'comparison of pyramid types',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['feature', 'rapid growth', 'slow growth', 'negative growth'],
    tableRows: [
      ['shape', 'wide base (triangle)', 'column', 'narrow base (urn)'],
      ['birth rate', 'high', 'moderate', 'low'],
      ['death rate', 'declining', 'low', 'low'],
      ['growth rate', '>2%', '0-1%', '<0%'],
      ['median age', 'young (~20)', 'middle (~35)', 'old (~45+)'],
      ['example', 'Nigeria', 'USA', 'Japan'],
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam often shows population pyramids and asks you to predict growth. wide base = rapid growth (future parents already born). narrow base = decline (not enough future parents). think about "population momentum" — growth continues even after birth rates fall because of the young population.',
  },
  {
    type: 'heading',
    content: 'population momentum',
  },
  {
    type: 'body',
    content: 'population momentum is the tendency of a population to continue growing even after fertility rates decline to replacement level. this occurs because a large generation of young people (already born) will have children, even if they have fewer children per person.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**demographic lag** — it takes decades for reduced fertility to translate to population stability',
      '**example** — China\'s population continued growing for decades after the one-child policy',
      '**implication** — even with successful family planning, global population will continue growing for 50+ years',
    ],
  },
  {
    type: 'heading',
    content: 'dependency ratio',
  },
  {
    type: 'body',
    content: 'the dependency ratio compares the non-working population (young + old) to the working-age population. it measures the economic burden on productive adults.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**formula** — (population under 15 + population over 65) / (population 15-64) × 100',
      '**high dependency ratio** — many dependents per worker (rapid growth OR aging population)',
      '**low dependency ratio** — "demographic dividend" when large working-age population supports few dependents',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may give you a population pyramid and ask you to predict economic or environmental consequences. rapid growth = strain on schools, jobs, resources. declining population = aging workforce, pension costs, labor shortages. always connect the age structure to specific outcomes.',
  },
]

export default function APESU3T6() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations' }}
      topic={{
        number: 6,
        title: 'age-structure diagrams',
        keyTerms: ['age-structure diagram', 'population pyramid', 'rapid growth', 'slow growth', 'negative growth', 'population momentum', 'dependency ratio'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-3/5', title: 'survivorship curves' }}
      next={{ href: '/apes/unit-3/7', title: 'demographic transition model' }}
      courseHref="/apes"
      unitHref="/apes/unit-3"
    />
  )
}
