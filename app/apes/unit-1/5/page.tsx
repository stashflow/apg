import { NotesPage } from '@/components/notes-page'

const course = { label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }
const unit = { number: 1, title: 'the living world: ecosystems' }
const topic = {
  number: 5,
  title: 'ecological succession',
  keyTerms: ['primary succession', 'secondary succession', 'pioneer species', 'climax community', 'seral stages', 'disturbance', 'resilience', 'resistance'],
}

const sections = [
  { type: 'heading' as const, content: 'what is ecological succession?' },
  { type: 'body' as const, content: '**Ecological succession** is the gradual, predictable change in species composition of an ecosystem over time following a disturbance or on newly formed land. Succession always moves toward a **climax community** — the most stable, complex ecosystem that the climate and soil of a region can support.' },

  { type: 'heading' as const, content: 'primary succession' },
  { type: 'body' as const, content: 'Primary succession occurs on **bare substrate with no soil** — where life has never existed or all soil has been completely destroyed.' },
  { type: 'bullets' as const, bullets: [
    '**Triggers:** Volcanic lava flows, retreating glaciers, newly formed sand dunes, landslides that strip all soil.',
    '**Pioneer species:** Lichens and mosses colonize bare rock first. Lichens produce acids that break down rock → create early soil.',
    '**Seral stages:** Lichens → mosses → grasses/ferns → shrubs → early tree species → climax forest (can take hundreds to thousands of years).',
    '**Soil building:** Each stage adds organic matter → improves soil → allows more complex plants.',
    '**Example:** Mount St. Helens eruption (1980) → lava fields colonized by prairie lupine → nitrogen fixed → grasses arrived → forest beginning to return.',
  ]},

  { type: 'heading' as const, content: 'secondary succession' },
  { type: 'body' as const, content: 'Secondary succession occurs when a disturbance **removes the existing community but leaves the soil intact**. It is faster than primary succession because soil and seed banks already exist.' },
  { type: 'bullets' as const, bullets: [
    '**Triggers:** Forest fire, flood, farming abandonment, logging, hurricane, disease outbreak.',
    '**Pioneer species:** Annual weeds and grasses — fast-growing, light-demanding species that colonize open areas quickly.',
    '**Progression:** Grasses/weeds → perennial plants → shrubs → young forest (fast-growing species like pine/birch) → climax hardwood forest.',
    '**Example:** Abandoned farmfield in eastern US → crabgrass → goldenrod → shrubs → pine forest → oak-hickory climax (takes 100–200 years).',
    '**Fire ecology:** Some ecosystems (chaparral, jack pine forests) depend on periodic fire to reset succession and recycle nutrients.',
  ]},
  { type: 'table' as const,
    tableHeaders: ['Feature', 'Primary Succession', 'Secondary Succession'],
    tableRows: [
      ['Starting condition', 'Bare rock/no soil', 'Disturbed area with soil intact'],
      ['Speed', 'Very slow (100s–1000s years)', 'Faster (decades–centuries)'],
      ['Pioneer species', 'Lichens, mosses', 'Grasses, annual weeds'],
      ['Example', 'Volcanic island, retreating glacier', 'Burned forest, abandoned farm'],
    ],
  },
  { type: 'heading' as const, content: 'climax community & ecosystem stability' },
  { type: 'bullets' as const, bullets: [
    'A **climax community** is stable and self-maintaining under current climate conditions.',
    '**Resistance:** An ecosystem\'s ability to withstand a disturbance without changing.',
    '**Resilience:** An ecosystem\'s ability to recover and return to its original state after a disturbance.',
    'Diverse ecosystems are generally more resilient (multiple species can fill the same niche).',
    'The concept of a single "climax" community is somewhat simplified — real ecosystems are dynamic and disturbance-dependent.',
  ]},
  { type: 'examtip' as const, content: 'The AP exam loves to ask you to compare primary and secondary succession. Always distinguish them by soil presence. Also, remember: both types end at the same climax community for a given region — the path there just differs in speed and starting point.' },
  { type: 'frqtip' as const, content: 'If asked "what would happen to a forest after a fire?" — describe secondary succession stages in order (grasses → shrubs → pioneer trees → climax forest), explain what makes each stage give way to the next (competitive exclusion, soil improvement, shade), and mention the timeline.' },
]

export default function Page() {
  return (
    <NotesPage
      course={course}
      unit={unit}
      topic={topic}
      sections={sections}
      prev={{ href: '/apes/unit-1/4', title: 'biogeochemical cycles' }}
      courseHref="/apes"
      unitHref="/apes/unit-1"
      quizletUrl="https://quizlet.com/1168369785/apes-ecological-succession-flash-cards/?i=3obpbv&x=1jqt"
    />
  )
}
