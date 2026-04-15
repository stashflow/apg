import { NotesPage } from '@/components/notes-page'

const course = { label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }
const unit = { number: 1, title: 'the living world: ecosystems' }
const topic = {
  number: 3,
  title: 'primary productivity',
  keyTerms: ['GPP', 'NPP', 'primary productivity', 'respiration', 'limiting factor', 'light', 'nutrients', 'temperature'],
}

const sections = [
  { type: 'heading' as const, content: 'gross vs. net primary productivity' },
  { type: 'body' as const, content: '**Primary productivity** is the rate at which producers (plants, algae) convert solar energy into chemical energy (organic matter) via photosynthesis. It is the foundation of all energy entering an ecosystem.' },
  { type: 'bullets' as const, bullets: [
    '**Gross Primary Productivity (GPP):** Total rate of photosynthesis — all energy fixed by producers, including what they use for their own respiration.',
    '**Net Primary Productivity (NPP):** Energy available to the next trophic level. NPP = GPP − Respiration (R).',
    'NPP is what actually accumulates as new plant biomass — what herbivores can eat.',
    'Units are typically: **kcal/m²/year** or **g of dry mass/m²/year**.',
  ]},
  { type: 'callout' as const, content: 'Formula: NPP = GPP − R.  If GPP = 8,000 kcal/m²/yr and R = 3,000 kcal/m²/yr, then NPP = 5,000 kcal/m²/yr. That 5,000 kcal is what herbivores can potentially consume.' },
  { type: 'examtip' as const, content: 'The AP exam WILL give you a GPP and respiration value and ask you to calculate NPP. Memorize the formula: NPP = GPP − R. Also know that NPP decreases as temperature increases beyond an optimum (too hot → more respiration).' },

  { type: 'heading' as const, content: 'which biomes have the highest NPP?' },
  { type: 'table' as const,
    tableHeaders: ['Ecosystem', 'NPP (g dry mass/m²/yr)', 'Why?'],
    tableRows: [
      ['Tropical rainforest', '2,200', 'Year-round warmth, sunlight, and rainfall'],
      ['Estuaries / wetlands', '1,500–2,000', 'Nutrient-rich, shallow, high light'],
      ['Temperate forest', '1,200', 'Good conditions but seasonal'],
      ['Coral reefs', '2,500', 'Algae + shallow clear water'],
      ['Open ocean', '125', 'Nutrient-poor (oligotrophic)'],
      ['Tundra/desert', '<200', 'Cold/dry severely limits photosynthesis'],
    ],
  },
  { type: 'body' as const, content: 'The **open ocean** has low NPP per square meter, but because it covers 70% of Earth\'s surface, it contributes enormously to total global productivity. Always distinguish **per-area productivity** from **total productivity**.' },

  { type: 'heading' as const, content: 'limiting factors for productivity' },
  { type: 'body' as const, content: 'Liebig\'s Law of the Minimum states that growth is limited by the single factor that is most scarce, not by the average of all factors. The most common limiting factors are:' },
  { type: 'bullets' as const, bullets: [
    '**Light:** Limiting factor in dense forests (shaded understory) and deep ocean.',
    '**Water:** Primary limiting factor in deserts and grasslands.',
    '**Temperature:** Low temps slow enzyme activity; high temps denature enzymes.',
    '**Nutrients:** Nitrogen (N) and phosphorus (P) are the most common limiting nutrients in aquatic systems.',
    '**CO₂:** Can limit photosynthesis in some conditions, though rarely the primary limit in nature.',
  ]},
  { type: 'frqtip' as const, content: 'FRQs often ask: "Why does ecosystem X have lower NPP than ecosystem Y?" Always cite the specific limiting factor (light, water, nutrients, temperature) and explain the mechanism. Do not just say "it\'s colder" — say "lower temperatures slow enzyme activity, reducing the rate of photosynthesis."' },
]

export default function Page() {
  return (
    <NotesPage
      course={course}
      unit={unit}
      topic={topic}
      sections={sections}
      prev={{ href: '/apes/unit-1/2', title: 'trophic levels' }}
      next={{ href: '/apes/unit-1/4', title: 'biogeochemical cycles' }}
      courseHref="/apes"
      unitHref="/apes/unit-1"
      quizletUrl="https://quizlet.com/1168368961/apes-primary-productivity-flash-cards/?i=3obpbv&x=1jqt"
    />
  )
}
