import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'dams and reservoirs',
  },
  {
    type: 'body',
    content: 'dams are barriers across rivers that create reservoirs, controlling water flow for multiple purposes. there are over 50,000 large dams worldwide.',
  },
  {
    type: 'subheading',
    content: 'benefits of dams',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**water storage** — reservoirs hold water for irrigation, drinking, and industry',
      '**flood control** — can reduce downstream flooding by holding water during storms',
      '**hydroelectric power** — generates clean, renewable electricity (16% of global electricity)',
      '**recreation** — reservoirs provide boating, fishing, and swimming',
      '**navigation** — maintains river depth for shipping',
    ],
  },
  {
    type: 'subheading',
    content: 'environmental problems',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat destruction** — flooding behind dam destroys terrestrial and riparian habitat',
      '**fish migration blocked** — dams prevent salmon and other fish from reaching spawning grounds',
      '**sediment trapping** — sediment accumulates behind dam instead of flowing downstream',
      '**delta erosion** — without sediment, river deltas shrink (Nile, Mississippi)',
      '**downstream flow changes** — altered flow timing, temperature, and volume',
      '**thermal stratification** — deep reservoirs have cold bottom water; releases can shock ecosystems',
      '**methane emissions** — decomposing vegetation in reservoirs releases CH₄',
      '**evaporation losses** — large reservoirs lose significant water to evaporation',
      '**displacement** — Three Gorges Dam displaced 1.3 million people',
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam loves dam tradeoffs. know specific examples: Three Gorges (China, largest), Glen Canyon/Lake Powell (Colorado River), and the Elwha River dam removal (successful ecosystem restoration in Washington).',
  },
  {
    type: 'heading',
    content: 'levees and flood control',
  },
  {
    type: 'body',
    content: 'levees are embankments along rivers designed to prevent flooding.',
  },
  {
    type: 'subheading',
    content: 'problems with levees',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**false sense of security** — development in "protected" floodplains increases when levees fail',
      '**increased flood heights** — confining water raises levels; floods are worse when levees breach',
      '**disconnection from floodplain** — prevents natural flooding that maintains ecosystems',
      '**sediment deposition blocked** — floodplains don\'t receive nutrient-rich sediment',
      '**subsidence** — without sediment, protected areas sink (New Orleans)',
      '**downstream effects** — water confined upstream arrives faster and higher downstream',
    ],
  },
  {
    type: 'subheading',
    content: 'alternatives to levees',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**setback levees** — moved back from river, allowing more floodplain',
      '**floodplain restoration** — restoring wetlands to absorb floodwaters',
      '**buyouts** — purchasing flood-prone properties and removing buildings',
      '**flood insurance reform** — pricing that reflects actual risk',
    ],
  },
  {
    type: 'heading',
    content: 'desalination',
  },
  {
    type: 'body',
    content: 'desalination removes salt from seawater or brackish water to produce fresh water.',
  },
  {
    type: 'subheading',
    content: 'methods',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**reverse osmosis (RO)** — forces water through membranes that block salt; most common method',
      '**distillation** — boil water, collect steam; energy-intensive',
      '**electrodialysis** — uses electricity to pull salt ions through membranes',
    ],
  },
  {
    type: 'subheading',
    content: 'benefits',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**unlimited supply** — oceans contain essentially infinite water',
      '**drought-proof** — not dependent on rainfall',
      '**critical for some regions** — Middle East, islands, and dry coastal areas',
    ],
  },
  {
    type: 'subheading',
    content: 'environmental problems',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high energy consumption** — RO requires 3-4 kWh per cubic meter',
      '**greenhouse emissions** — if powered by fossil fuels, contributes to climate change',
      '**brine discharge** — concentrated salt water returned to ocean harms marine life',
      '**intake kills organisms** — fish, larvae, and plankton sucked into intake pipes',
      '**expensive** — costs 2-3x more than conventional water treatment',
    ],
  },
  {
    type: 'heading',
    content: 'water diversion projects',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**California Aqueduct** — moves water from Northern to Southern California',
      '**Colorado River** — so heavily diverted it rarely reaches the sea',
      '**Aral Sea** — Soviet irrigation diversions shrank it to 10% of original size',
      '**interbasin transfers** — moving water between watersheds disrupts both',
    ],
  },
  {
    type: 'frqtip',
    content: 'water infrastructure FRQs often ask about tradeoffs. for dams: benefits (water storage, flood control, hydropower) vs costs (habitat loss, fish blockage, sediment trapping). for desalination: benefits (new water source) vs costs (energy, brine, expense).',
  },
]

export default function APESU5T11() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 11,
        title: 'dams, levees & desalination',
        keyTerms: ['dam', 'reservoir', 'levee', 'desalination', 'reverse osmosis', 'brine', 'sediment', 'Aral Sea'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/10', title: 'aquifer depletion' }}
      next={{ href: '/apes/unit-5/12', title: 'mining' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
