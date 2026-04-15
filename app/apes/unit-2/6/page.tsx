import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'natural disruptions to ecosystems',
  },
  {
    type: 'body',
    content: 'ecosystems are not static — they experience periodic disturbances that kill organisms, alter physical structure, and reset community composition. understanding natural disruptions is essential because many ecosystems have evolved with disturbance and depend on it for long-term health.',
  },
  {
    type: 'heading',
    content: 'types of natural disruptions',
  },
  {
    type: 'subheading',
    content: 'fire',
  },
  {
    type: 'body',
    content: 'fire is one of the most important natural disturbances in many ecosystems. many species are fire-adapted and depend on periodic burns:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**fire-dependent ecosystems** — prairies, chaparral, and pine savannas evolved with fire and decline without it',
      '**fire-adapted species** — sequoias have thick bark; jack pines have serotinous cones that only open after fire',
      '**nutrient cycling** — fire releases nutrients locked in dead plant matter back to soil',
      '**habitat creation** — fire creates a mosaic of habitat types at different recovery stages',
      '**fire suppression consequences** — decades of suppression cause fuel accumulation, leading to catastrophic mega-fires',
    ],
  },
  {
    type: 'subheading',
    content: 'storms and flooding',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**hurricanes/typhoons** — strip vegetation, cause widespread tree mortality, create canopy gaps',
      '**flooding** — redistributes sediment, creates new channels, maintains floodplain ecosystems',
      '**storm surge** — saltwater intrusion kills freshwater vegetation in coastal areas',
      '**erosion and deposition** — natural riverbank erosion creates habitat for specialized species',
    ],
  },
  {
    type: 'subheading',
    content: 'drought',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**water stress** — reduces plant growth, increases mortality, especially for shallow-rooted species',
      '**fire promotion** — drought conditions increase fire frequency and intensity',
      '**community shifts** — prolonged drought can shift grassland to desert or kill trees in forests',
      '**adaptation** — many species have drought adaptations (deep roots, reduced leaves, dormancy)',
    ],
  },
  {
    type: 'subheading',
    content: 'volcanic eruptions and earthquakes',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**lava flows** — destroy all life, creating bare substrate for primary succession',
      '**ash deposition** — buries vegetation and alters soil chemistry',
      '**landslides** — triggered by earthquakes, remove vegetation and expose bare soil',
      '**tsunamis** — saltwater inundation devastates coastal ecosystems',
      '**example** — Mt. St. Helens (1980) created a natural laboratory for studying succession',
    ],
  },
  {
    type: 'heading',
    content: 'ecosystem resilience and resistance',
  },
  {
    type: 'body',
    content: 'two key concepts describe how ecosystems respond to disturbance:',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['concept', 'definition', 'example'],
    tableRows: [
      ['resistance', 'ability to withstand disturbance without changing', 'old-growth forest survives moderate drought without tree mortality'],
      ['resilience', 'ability to recover after disturbance', 'prairie regrows quickly after fire'],
    ],
  },
  {
    type: 'body',
    content: 'ecosystems can be resistant but not resilient (tough but slow to recover) or resilient but not resistant (easily disturbed but quick to recover). high biodiversity generally increases both.',
  },
  {
    type: 'examtip',
    content: 'don\'t confuse resistance and resilience. resistance = staying the same during disturbance. resilience = bouncing back after disturbance. a prairie has low resistance (fire kills most plants) but high resilience (regrows within a year).',
  },
  {
    type: 'heading',
    content: 'disturbance regimes',
  },
  {
    type: 'body',
    content: 'ecosystems are shaped by characteristic patterns of disturbance called disturbance regimes, defined by:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**frequency** — how often disturbances occur (fires every 20 years vs. every 200 years)',
      '**intensity** — how severe the disturbance is (light surface fire vs. crown fire)',
      '**extent** — how much area is affected (single tree fall vs. landscape-wide event)',
      '**seasonality** — when disturbances typically occur (dry season fires vs. wet season floods)',
    ],
  },
  {
    type: 'heading',
    content: 'intermediate disturbance hypothesis',
  },
  {
    type: 'body',
    content: 'species diversity is highest at intermediate levels of disturbance. with too little disturbance, competitive exclusion reduces diversity as dominant species take over. with too much disturbance, only a few disturbance-tolerant species survive. intermediate disturbance maintains a mix of early and late successional species.',
  },
  {
    type: 'examtip',
    content: 'the intermediate disturbance hypothesis is frequently tested. remember: too little disturbance = competitive exclusion = low diversity. too much disturbance = only hardy species survive = low diversity. moderate disturbance = highest diversity.',
  },
  {
    type: 'heading',
    content: 'human alteration of disturbance regimes',
  },
  {
    type: 'body',
    content: 'humans have dramatically altered natural disturbance regimes, often with unintended consequences:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**fire suppression** — leads to fuel buildup and catastrophic fires (see California, Australia)',
      '**flood control** — dams and levees eliminate natural flooding that maintains floodplain ecosystems',
      '**increased fire ignition** — power lines, campfires, and arson increase fire frequency in some areas',
      '**climate change** — altering drought frequency, storm intensity, and fire seasons worldwide',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs often ask about the ecological role of fire or flooding. emphasize that these are natural processes many species depend on. explain both the immediate negative effects (mortality) and long-term positive effects (nutrient cycling, habitat diversity, preventing worse disturbances).',
  },
]

export default function APESU2T6() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity' }}
      topic={{
        number: 6,
        title: 'natural disruptions',
        keyTerms: ['disturbance', 'resilience', 'resistance', 'fire-adapted', 'disturbance regime', 'intermediate disturbance hypothesis'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-2/5', title: 'ecological tolerance' }}
      next={{ href: '/apes/unit-2/7', title: 'invasive species' }}
      courseHref="/apes"
      unitHref="/apes/unit-2"
    />
  )
}
