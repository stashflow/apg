import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'types of mining',
  },
  {
    type: 'body',
    content: 'mining extracts valuable minerals and materials from the Earth. the method used depends on the depth and type of deposit.',
  },
  {
    type: 'subheading',
    content: 'surface mining',
  },
  {
    type: 'body',
    content: 'used when deposits are close to the surface. removes overlying material (overburden) to reach ore.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**strip mining** — removing strips of overburden to expose coal or minerals; common for coal in Appalachia',
      '**open-pit mining** — digging large open pits; used for copper, gold, iron, diamonds',
      '**mountaintop removal** — blasting tops off mountains to reach coal seams; extreme landscape destruction',
      '**placer mining** — using water to separate heavy minerals from sediment (gold panning, dredging)',
    ],
  },
  {
    type: 'subheading',
    content: 'subsurface mining',
  },
  {
    type: 'body',
    content: 'digging tunnels and shafts underground to reach deep deposits.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**shaft mining** — vertical shafts with horizontal tunnels at depth',
      '**slope mining** — angled tunnels following a sloping ore deposit',
      '**less surface disruption** — but more dangerous for workers',
      '**ground subsidence** — tunnels can collapse, causing surface sinkholes',
    ],
  },
  {
    type: 'heading',
    content: 'environmental impacts',
  },
  {
    type: 'subheading',
    content: 'acid mine drainage (AMD)',
  },
  {
    type: 'body',
    content: 'the most serious long-term pollution from mining:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**sulfide minerals** — when exposed to air and water, pyrite (FeS₂) oxidizes',
      '**sulfuric acid formation** — H₂SO₄ produced, lowering water pH to 2-4',
      '**metal leaching** — acid dissolves heavy metals (iron, copper, lead, arsenic, mercury)',
      '**persistent pollution** — AMD can continue for hundreds of years after mining ends',
      '**kills aquatic life** — acid and metals devastate streams; orange "yellow boy" iron deposits',
    ],
  },
  {
    type: 'subheading',
    content: 'habitat destruction',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**land clearing** — vegetation and topsoil removed',
      '**mountaintop removal** — valleys buried with mine waste (valley fills)',
      '**forest fragmentation** — roads and infrastructure divide ecosystems',
      '**noise and light pollution** — drives away wildlife',
    ],
  },
  {
    type: 'subheading',
    content: 'water pollution',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**sediment** — erosion from bare surfaces clouds streams',
      '**heavy metals** — arsenic, lead, mercury, cadmium contaminate water',
      '**tailings ponds** — dams holding mining waste can fail catastrophically',
      '**groundwater contamination** — pollutants seep into aquifers',
    ],
  },
  {
    type: 'subheading',
    content: 'air pollution',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**dust** — particulate matter from blasting, crushing, transport',
      '**emissions** — processing releases SO₂, CO, heavy metals',
      '**explosives** — blasting produces NOₓ and other pollutants',
    ],
  },
  {
    type: 'examtip',
    content: 'acid mine drainage is the key concept for mining on the AP exam. know the chemistry: pyrite (FeS₂) + oxygen + water → sulfuric acid → dissolves heavy metals → kills aquatic life. AMD persists for centuries — it\'s a permanent pollution problem.',
  },
  {
    type: 'heading',
    content: 'reclamation and remediation',
  },
  {
    type: 'body',
    content: 'reclamation restores mined land to productive use:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Surface Mining Control and Reclamation Act (SMCRA, 1977)** — US law requiring reclamation of coal mines',
      '**recontouring** — reshaping land to approximate original topography',
      '**topsoil replacement** — stockpiling and replacing topsoil for revegetation',
      '**revegetation** — planting native species to stabilize soil and restore habitat',
      '**water treatment** — neutralizing acid drainage, removing metals',
      '**wetland construction** — natural treatment systems for AMD',
      '**Superfund** — EPA program to clean up the worst contaminated sites (many are former mines)',
    ],
  },
  {
    type: 'subheading',
    content: 'challenges',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**cost** — reclamation is expensive; often paid by taxpayers when companies go bankrupt',
      '**time** — full ecosystem recovery takes decades to centuries',
      '**AMD persists** — no cost-effective way to stop acid drainage permanently',
      '**orphan mines** — abandoned mines with no responsible party',
    ],
  },
  {
    type: 'heading',
    content: 'sustainable alternatives',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**recycling** — reduces need for new mining (aluminum, copper, rare earths)',
      '**urban mining** — extracting materials from electronics waste',
      '**reduced consumption** — using less material in products',
      '**substitution** — replacing rare materials with more common ones',
      '**extended producer responsibility** — manufacturers responsible for end-of-life recycling',
    ],
  },
  {
    type: 'frqtip',
    content: 'mining FRQs often ask: (1) describe environmental impacts (AMD, habitat destruction, water pollution), (2) explain AMD chemistry, (3) propose solutions (reclamation, recycling). always mention that AMD is persistent and hard to remediate.',
  },
]

export default function APESU5T12() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 12,
        title: 'mining',
        keyTerms: ['strip mining', 'open-pit', 'acid mine drainage', 'pyrite', 'tailings', 'reclamation', 'SMCRA', 'Superfund'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/11', title: 'dams, levees & desalination' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
