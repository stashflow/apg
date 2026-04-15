import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is deforestation?',
  },
  {
    type: 'body',
    content: 'deforestation is the permanent removal of forests to convert land for other uses — agriculture, ranching, urban development, and logging. globally, we lose about 10 million hectares of forest annually (an area the size of South Korea).',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**tropical deforestation** — most severe in Amazon, Congo Basin, and Southeast Asia',
      '**temperate deforestation** — historically severe (Europe, US), now mostly reforesting',
      '**net forest loss** — deforestation minus reforestation/afforestation',
    ],
  },
  {
    type: 'heading',
    content: 'causes of deforestation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**agriculture** — #1 cause globally; clearing for crops (soy, palm oil) and cattle ranching',
      '**cattle ranching** — 80% of Amazon deforestation is for beef production',
      '**logging** — commercial timber harvesting, often illegal',
      '**fuelwood** — in developing countries, wood is primary cooking/heating fuel',
      '**urban expansion** — cities spreading into forested areas',
      '**infrastructure** — roads, dams, and pipelines fragment forests',
      '**mining** — extraction operations clear forests and pollute water',
    ],
  },
  {
    type: 'heading',
    content: 'environmental impacts',
  },
  {
    type: 'subheading',
    content: 'climate change',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**carbon release** — trees store carbon; cutting and burning releases CO₂',
      '**deforestation = 10% of global emissions** — major contributor to climate change',
      '**lost carbon sink** — fewer trees means less CO₂ absorbed from atmosphere',
      '**feedback loop** — warming causes more fires, which release more carbon',
    ],
  },
  {
    type: 'subheading',
    content: 'biodiversity loss',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat destruction** — forests contain 80% of terrestrial biodiversity',
      '**species extinction** — many forest species cannot survive in other habitats',
      '**fragmentation** — isolated forest patches too small to support viable populations',
      '**tropical rainforests** — contain over half of Earth\'s species on 6% of land',
    ],
  },
  {
    type: 'subheading',
    content: 'water cycle disruption',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**reduced transpiration** — trees pump water into atmosphere; less forest = less rain',
      '**Amazon "flying rivers"** — rainforest generates its own rainfall through transpiration',
      '**increased runoff** — without tree roots, rain flows off land faster',
      '**erosion** — exposed soil washes away into rivers',
      '**flooding** — faster runoff causes downstream flooding',
    ],
  },
  {
    type: 'subheading',
    content: 'soil degradation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**erosion** — tree roots hold soil; removal leads to massive topsoil loss',
      '**nutrient loss** — tropical forest nutrients are in biomass, not soil; clearing exposes poor soil',
      '**laterization** — exposed tropical soils bake into hard, brick-like laterite',
      '**desertification** — deforested areas can become unproductive wastelands',
    ],
  },
  {
    type: 'examtip',
    content: 'tropical forest soils are often nutrient-poor because nutrients cycle rapidly through biomass. when forests are cleared, the thin nutrient layer washes away, leaving poor soil that can\'t support agriculture for long — leading to more clearing. this is a key exam concept.',
  },
  {
    type: 'heading',
    content: 'sustainable forestry',
  },
  {
    type: 'subheading',
    content: 'selective cutting',
  },
  {
    type: 'body',
    content: 'harvesting only selected mature trees, leaving others standing:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**maintains forest structure** — canopy, understory, wildlife habitat preserved',
      '**reduces erosion** — root systems remain intact',
      '**continuous yield** — forest can be harvested indefinitely',
      '**higher cost** — more labor-intensive than clearcutting',
    ],
  },
  {
    type: 'subheading',
    content: 'clear-cutting',
  },
  {
    type: 'body',
    content: 'removing all trees in an area:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**efficient and cheap** — easier logging operations',
      '**destroys habitat** — complete loss of forest ecosystem',
      '**massive erosion** — no root systems to hold soil',
      '**ugly and controversial** — highly visible environmental damage',
      '**sometimes appropriate** — for species that need full sun to regenerate (aspen)',
    ],
  },
  {
    type: 'subheading',
    content: 'certification and REDD+',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**FSC certification** — Forest Stewardship Council certifies sustainably managed forests',
      '**REDD+** — Reducing Emissions from Deforestation and Degradation; pays countries to keep forests standing',
      '**carbon credits** — forest preservation can generate revenue through carbon markets',
    ],
  },
  {
    type: 'frqtip',
    content: 'deforestation FRQs often ask for: (1) causes (agriculture, ranching, logging), (2) environmental impacts (carbon, biodiversity, water, soil), and (3) solutions (selective cutting, certification, REDD+). practice connecting causes to specific impacts.',
  },
]

export default function APESU5T7() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 7,
        title: 'deforestation',
        keyTerms: ['deforestation', 'carbon sink', 'transpiration', 'laterization', 'selective cutting', 'clear-cutting', 'FSC', 'REDD+'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/6', title: 'sustainable agriculture' }}
      next={{ href: '/apes/unit-5/8', title: 'clear-cutting vs selective cutting' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
