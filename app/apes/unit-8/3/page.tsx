import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'what is eutrophication?' },
  { type: 'body', content: 'eutrophication is the process by which a body of water becomes enriched with nutrients (nitrogen and phosphorus), triggering explosive algal growth that ultimately depletes oxygen and kills aquatic life. it is the dominant freshwater pollution problem caused by agricultural runoff.' },
  { type: 'heading', content: 'the eutrophication sequence' },
  { type: 'bullets', content: '', bullets: ['**1. nutrient input**: fertilizer/animal waste runoff delivers excess nitrogen (NO₃⁻) and phosphorus (PO₄³⁻) to water', '**2. algal bloom**: nutrients stimulate explosive growth of algae and cyanobacteria at surface', '**3. light blocking**: dense algal mat blocks sunlight → submerged plants die', '**4. die-off**: algae die and sink to bottom', '**5. decomposition**: aerobic bacteria decompose algae, consuming dissolved oxygen (BOD rises)', '**6. hypoxia/anoxia**: DO drops below 2 mg/L → hypoxic (low oxygen) or anoxic (no oxygen) zone', '**7. dead zone**: fish, crabs, shrimp flee or suffocate; benthic organisms die'] },
  { type: 'callout', content: 'BOD = biochemical oxygen demand — the amount of oxygen required by bacteria to decompose organic matter. high BOD = heavily polluted water = low DO. BOD and DO have an inverse relationship.' },
  { type: 'heading', content: 'real-world examples' },
  { type: 'bullets', content: '', bullets: ['**Gulf of Mexico dead zone**: hypoxic zone the size of New Jersey forms every summer from Mississippi River carrying Midwest farm runoff; peaks ~August', '**Chesapeake Bay**: major eutrophication from Mid-Atlantic agriculture and urban runoff; massive restoration efforts ongoing', '**Lake Erie algal blooms**: phosphorus from Ohio and Indiana agriculture; 2014 Toledo water crisis from cyanobacteria toxins in drinking water', '**Baltic Sea**: heavily impacted; limited water circulation worsens oxygen depletion'] },
  { type: 'heading', content: 'cultural vs. natural eutrophication' },
  { type: 'table', content: '', tableHeaders: ['type', 'timeframe', 'cause'], tableRows: [['natural (oligotrophic → eutrophic)', 'thousands of years', 'slow accumulation of sediment and nutrients'], ['cultural (human-caused)', 'years to decades', 'agricultural runoff, sewage, urban runoff']] },
  { type: 'heading', content: 'solutions' },
  { type: 'bullets', content: '', bullets: ['**reduce nutrient inputs**: precision fertilizer application, buffer strips, cover crops', '**riparian buffers**: plant grass/trees along streams to intercept runoff', '**constructed wetlands**: filter nutrients before entering waterways', '**tertiary sewage treatment**: advanced treatment removes nitrogen and phosphorus from effluent', '**phytoremediation**: aquatic plants absorb excess nutrients', '**dredging**: remove phosphorus-rich sediment from lake bottoms'] },
  { type: 'examtip', content: 'know the sequence cold: nutrients → algal bloom → decomposition → high BOD → low DO → hypoxia → dead zone. the limiting nutrient in freshwater is usually phosphorus; in saltwater/marine systems it is usually nitrogen. this distinction is testable.' },
]

export default function APESU8T3() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 3, title: 'eutrophication', keyTerms: ['nutrients', 'algal bloom', 'hypoxia', 'dead zone', 'BOD', 'dissolved oxygen', 'phosphorus', 'nitrogen', 'riparian buffer', 'cultural eutrophication'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/2', title: 'thermal pollution' }}
      next={{ href: '/apes/unit-8/4', title: 'bioaccumulation & biomagnification' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
