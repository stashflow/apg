import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'the water cycle (hydrologic cycle)',
  },
  {
    type: 'body',
    content: 'the water cycle describes the continuous movement of water through Earth\'s systems. water changes phase (liquid, gas, solid) and moves between atmosphere, surface water, groundwater, and living organisms.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**evaporation** — liquid water → water vapor (from oceans, lakes, soil)',
      '**transpiration** — water vapor released by plants through stomata',
      '**evapotranspiration** — combined evaporation + transpiration from land surfaces',
      '**condensation** — water vapor → liquid (forms clouds)',
      '**precipitation** — water falls as rain, snow, sleet, or hail',
      '**infiltration** — water soaks into soil and moves toward groundwater',
      '**runoff** — water flows across surface into streams, rivers, lakes, oceans',
    ],
  },
  {
    type: 'heading',
    content: 'watersheds (drainage basins)',
  },
  {
    type: 'body',
    content: 'a watershed is the land area that drains into a particular body of water (stream, river, lake, or ocean). watersheds are separated by ridges called divides.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**watershed boundaries** — follow topographic divides (ridges, mountains)',
      '**nested watersheds** — small watersheds drain into larger ones',
      '**everything flows downstream** — pollution anywhere in a watershed affects water bodies below',
      '**impervious surfaces** — pavement and buildings prevent infiltration, increasing runoff',
    ],
  },
  {
    type: 'examtip',
    content: 'watersheds are critical for understanding water quality. any pollution in the watershed — from agriculture, industry, or cities — can end up in the streams and rivers that drain it. watershed management means managing the entire drainage area, not just the water body.',
  },
  {
    type: 'heading',
    content: 'groundwater and aquifers',
  },
  {
    type: 'body',
    content: 'groundwater is water stored underground in porous rock and sediment. aquifers are underground layers of rock or sediment that hold and transmit groundwater.',
  },
  {
    type: 'subheading',
    content: 'key groundwater terms',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**water table** — the upper boundary of the saturated zone (where all pores are filled with water)',
      '**saturated zone** — region below water table where all pores contain water',
      '**unsaturated zone (vadose zone)** — region above water table where pores contain air and water',
      '**aquifer** — permeable layer that stores and transmits groundwater',
      '**aquitard (confining layer)** — impermeable layer that restricts water movement',
    ],
  },
  {
    type: 'subheading',
    content: 'types of aquifers',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['type', 'description', 'characteristics'],
    tableRows: [
      ['unconfined aquifer', 'water table is upper boundary; open to surface recharge', 'easily recharged but vulnerable to pollution'],
      ['confined aquifer', 'bounded above and below by aquitards', 'protected from pollution but harder to recharge; may have artesian pressure'],
    ],
  },
  {
    type: 'heading',
    content: 'groundwater issues',
  },
  {
    type: 'subheading',
    content: 'aquifer depletion',
  },
  {
    type: 'body',
    content: 'when groundwater is pumped faster than it recharges, aquifers become depleted:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**cone of depression** — lowered water table around a pumping well',
      '**land subsidence** — ground sinks as water is removed (irreversible)',
      '**saltwater intrusion** — seawater enters coastal aquifers when freshwater is depleted',
      '**Ogallala Aquifer** — massive aquifer under Great Plains; severely depleted by irrigation; recharges very slowly',
    ],
  },
  {
    type: 'subheading',
    content: 'groundwater contamination',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**agricultural runoff** — fertilizers, pesticides, animal waste',
      '**industrial contamination** — chemicals, heavy metals, solvents',
      '**septic systems** — can leak pathogens and nutrients',
      '**underground storage tanks** — leaking gasoline, oil',
      '**remediation is difficult** — groundwater moves slowly; contamination persists for decades',
    ],
  },
  {
    type: 'examtip',
    content: 'the Ogallala Aquifer is a classic APES example. it provides 30% of U.S. irrigation water but recharges at only ~1 inch per year while being pumped at ~1 foot per year. some areas have depleted it by over 100 feet.',
  },
  {
    type: 'frqtip',
    content: 'FRQs may ask about groundwater depletion causes and solutions. causes: over-pumping for irrigation, population growth. solutions: water-efficient irrigation (drip), crop selection, water pricing, artificial recharge. always connect to the specific aquifer characteristics.',
  },
]

export default function APESU4T3() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 3,
        title: 'watersheds & aquifers',
        keyTerms: ['water cycle', 'watershed', 'aquifer', 'water table', 'confined aquifer', 'unconfined aquifer', 'Ogallala Aquifer', 'saltwater intrusion'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-4/2', title: 'soil formation & erosion' }}
      next={{ href: '/apes/unit-4/4', title: 'atmospheric layers' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
