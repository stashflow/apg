import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are aquifers?',
  },
  {
    type: 'body',
    content: 'aquifers are underground layers of permeable rock, gravel, or sand that store and transmit groundwater. they\'re essential water sources — groundwater supplies drinking water for half the world\'s population and 40% of irrigation water.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**unconfined aquifer** — water table exposed to surface; recharged by rain infiltrating from above',
      '**confined aquifer** — trapped between impermeable layers; water under pressure (artesian)',
      '**water table** — the top of the saturated zone',
      '**recharge zone** — area where water enters the aquifer',
    ],
  },
  {
    type: 'heading',
    content: 'aquifer depletion',
  },
  {
    type: 'body',
    content: 'depletion occurs when water is pumped from an aquifer faster than it\'s recharged. this is happening to major aquifers worldwide.',
  },
  {
    type: 'subheading',
    content: 'the Ogallala Aquifer',
  },
  {
    type: 'body',
    content: 'the Ogallala is one of the world\'s largest aquifers, underlying parts of 8 US states from South Dakota to Texas. it\'s a critical case study:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**supplies 30% of US irrigation water** — the Great Plains breadbasket depends on it',
      '**fossil water** — accumulated over millions of years; recharges very slowly (0.5 inches/year)',
      '**pumping exceeds recharge by 3-10x** — water levels dropping 1-3 feet per year in some areas',
      '**already 30% depleted** — some areas will be unusable within decades',
      '**consequences** — crop production will decline; some areas returning to dryland farming',
    ],
  },
  {
    type: 'subheading',
    content: 'other depleting aquifers',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**California Central Valley** — pumping for irrigation, dramatic land subsidence',
      '**North China Plain** — supplies Beijing; dropping 1-3 meters per year',
      '**Punjab, India** — Green Revolution irrigation depleting aquifers',
      '**Middle East aquifers** — Saudi Arabia, Yemen, Jordan facing severe depletion',
    ],
  },
  {
    type: 'heading',
    content: 'consequences of depletion',
  },
  {
    type: 'subheading',
    content: 'land subsidence',
  },
  {
    type: 'body',
    content: 'when water is pumped out, the ground literally sinks as sediment compacts:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**San Joaquin Valley, CA** — sunk up to 28 feet in some areas',
      '**Mexico City** — sinking 6-8 inches per year; buildings tilt',
      '**irreversible** — once compacted, aquifer storage capacity is permanently reduced',
      '**infrastructure damage** — roads, pipelines, buildings crack and break',
    ],
  },
  {
    type: 'subheading',
    content: 'saltwater intrusion',
  },
  {
    type: 'body',
    content: 'in coastal areas, overpumping allows seawater to infiltrate freshwater aquifers:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**fresh water floats on salt water** — overpumping disrupts this balance',
      '**Florida, California, Long Island** — major saltwater intrusion problems',
      '**contaminated wells** — once salty, very difficult to restore',
    ],
  },
  {
    type: 'subheading',
    content: 'economic impacts',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**deeper wells needed** — more expensive to drill and pump',
      '**higher energy costs** — pumping from greater depths uses more electricity',
      '**crop shifts** — farmers switch from water-intensive crops (corn) to less profitable dryland crops',
      '**land abandonment** — some areas no longer economically farmable',
    ],
  },
  {
    type: 'examtip',
    content: 'the Ogallala Aquifer is the #1 aquifer example on the AP exam. know: (1) location (Great Plains), (2) the problem (pumping >> recharge), (3) consequences (falling water tables, subsidence, crop production decline), and (4) why it matters (US food production).',
  },
  {
    type: 'heading',
    content: 'sustainable groundwater management',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**regulated pumping** — limits on how much water can be extracted',
      '**water pricing** — charging true cost discourages waste',
      '**efficient irrigation** — drip irrigation uses 50% less water than flood irrigation',
      '**crop selection** — growing less water-intensive crops',
      '**artificial recharge** — pumping surface water or treated wastewater into aquifers',
      '**water recycling** — treating and reusing wastewater',
      '**rainwater harvesting** — capturing rain for local use',
    ],
  },
  {
    type: 'frqtip',
    content: 'aquifer depletion FRQs often ask: (1) describe the problem (pumping > recharge), (2) consequences (subsidence, saltwater intrusion, economic), and (3) solutions (regulation, efficient irrigation, artificial recharge). use the Ogallala as your example.',
  },
]

export default function APESU5T10() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 10,
        title: 'aquifer depletion',
        keyTerms: ['aquifer', 'Ogallala', 'water table', 'subsidence', 'saltwater intrusion', 'recharge', 'fossil water'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/9', title: 'urbanization' }}
      next={{ href: '/apes/unit-5/11', title: 'dams, levees & desalination' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
