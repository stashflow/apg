import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'urbanization trends',
  },
  {
    type: 'body',
    content: 'urbanization is the movement of populations from rural to urban areas. for the first time in human history, over half the world\'s population now lives in cities — and that number is growing rapidly.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**1800** — 3% of world population in cities',
      '**1900** — 14% urban',
      '**2007** — 50% urban (historic tipping point)',
      '**2050** — projected 68% urban',
      '**megacities** — cities with 10+ million people (Tokyo, Delhi, Shanghai, São Paulo)',
    ],
  },
  {
    type: 'heading',
    content: 'urban sprawl',
  },
  {
    type: 'body',
    content: 'sprawl is the spread of low-density development outward from city centers. characterized by:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**low density** — single-family homes on large lots',
      '**car dependency** — separated land uses require driving for everything',
      '**strip malls and highways** — commercial development along roads',
      '**leapfrog development** — scattered development with gaps of undeveloped land',
      '**loss of farmland** — productive agricultural land converted to suburbs',
    ],
  },
  {
    type: 'subheading',
    content: 'environmental impacts of sprawl',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat destruction** — natural areas converted to development',
      '**fragmentation** — wildlife corridors disrupted',
      '**increased driving** — more vehicle miles traveled (VMT), more emissions',
      '**air pollution** — cars emit CO, NOₓ, VOCs, particulates',
      '**water pollution** — runoff from roads, lawns, and parking lots',
      '**impervious surfaces** — pavement prevents infiltration, increases flooding',
      '**energy use** — larger homes, more heating/cooling, more driving',
    ],
  },
  {
    type: 'heading',
    content: 'urban heat island effect',
  },
  {
    type: 'body',
    content: 'cities are typically 1-7°F warmer than surrounding rural areas due to:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**dark surfaces** — asphalt and roofs absorb solar radiation',
      '**lack of vegetation** — no evapotranspiration cooling',
      '**waste heat** — vehicles, AC units, industrial processes release heat',
      '**building geometry** — tall buildings trap heat and block cooling winds',
      '**reduced albedo** — dark urban surfaces reflect less sunlight',
    ],
  },
  {
    type: 'subheading',
    content: 'consequences',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**increased cooling costs** — more AC needed, higher energy bills',
      '**heat-related illness** — especially dangerous for elderly and poor',
      '**air quality** — heat accelerates ozone formation',
      '**water quality** — hot runoff damages aquatic ecosystems',
    ],
  },
  {
    type: 'subheading',
    content: 'mitigation strategies',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**green roofs** — plants on rooftops provide cooling and absorb stormwater',
      '**cool roofs** — white or reflective roofing materials',
      '**urban trees** — shade and evapotranspiration cooling',
      '**light-colored pavement** — reflects more sunlight',
      '**green spaces and parks** — vegetated areas are cooler',
    ],
  },
  {
    type: 'examtip',
    content: 'urban heat island is a frequent exam topic. know: (1) causes (dark surfaces, waste heat, no vegetation), (2) effects (cooling costs, health, air quality), and (3) solutions (green roofs, trees, cool surfaces). be specific about mechanisms.',
  },
  {
    type: 'heading',
    content: 'smart growth and sustainable cities',
  },
  {
    type: 'body',
    content: 'smart growth is an urban planning philosophy that combats sprawl:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**higher density** — more people per acre reduces land consumption',
      '**mixed-use development** — combining residential, commercial, and office in same areas',
      '**walkable neighborhoods** — destinations within walking distance',
      '**transit-oriented development** — dense development around transit stations',
      '**urban growth boundaries** — legal limits on outward expansion',
      '**infill development** — building on vacant lots within cities rather than at edges',
      '**preservation of open space** — protecting farmland, forests, and natural areas',
    ],
  },
  {
    type: 'heading',
    content: 'green infrastructure',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**permeable pavement** — allows water to infiltrate rather than run off',
      '**rain gardens** — planted depressions that collect and filter stormwater',
      '**bioswales** — vegetated channels that slow and filter runoff',
      '**green roofs** — reduce runoff, cool buildings, provide habitat',
      '**urban forests** — trees provide cooling, carbon storage, air filtration',
      '**constructed wetlands** — treat wastewater naturally',
    ],
  },
  {
    type: 'frqtip',
    content: 'urbanization FRQs typically ask about: (1) environmental impacts of sprawl, (2) urban heat island causes and solutions, or (3) smart growth strategies. always explain the mechanism — WHY does each intervention help?',
  },
]

export default function APESU5T9() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 9,
        title: 'urbanization',
        keyTerms: ['urbanization', 'sprawl', 'heat island', 'smart growth', 'mixed-use', 'infill', 'green roof', 'permeable pavement'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/8', title: 'clear-cutting vs selective cutting' }}
      next={{ href: '/apes/unit-5/10', title: 'aquifer depletion' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
