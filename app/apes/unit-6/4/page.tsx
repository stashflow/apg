import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'how wind energy works',
  },
  {
    type: 'body',
    content: 'wind turbines convert kinetic energy from moving air into electricity. wind is actually a form of solar energy — uneven heating of Earth\'s surface creates pressure differences that drive air movement.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**wind turns blades** — aerodynamic lift (like airplane wings) spins the rotor',
      '**rotor spins generator** — mechanical energy converted to electrical energy',
      '**power output** — proportional to wind speed cubed (double the wind = 8x the power)',
      '**cut-in speed** — minimum wind speed for generation (~3-4 m/s)',
      '**cut-out speed** — turbines shut down in extreme winds to prevent damage (~25 m/s)',
    ],
  },
  {
    type: 'heading',
    content: 'types of wind power',
  },
  {
    type: 'subheading',
    content: 'onshore wind',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**land-based turbines** — most common, lowest cost',
      '**wind farms** — clusters of turbines in windy locations',
      '**best locations** — Great Plains, mountain passes, coastal areas',
      '**Texas** — leads US wind production; "wind belt" from Texas to Dakotas',
    ],
  },
  {
    type: 'subheading',
    content: 'offshore wind',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**ocean-based turbines** — stronger, more consistent winds',
      '**higher capacity factors** — produce power more hours per year',
      '**more expensive** — installation and maintenance in marine environment costly',
      '**growing rapidly** — Europe leads; US building first large offshore farms',
      '**reduced visual/noise impacts** — turbines far from shore are less visible',
    ],
  },
  {
    type: 'heading',
    content: 'advantages of wind',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**renewable** — wind will blow as long as sun heats Earth',
      '**no emissions** — zero CO₂ or air pollution during operation',
      '**low operating cost** — fuel is free; maintenance is main ongoing cost',
      '**rapid growth** — fastest-growing energy source globally',
      '**land sharing** — farming and grazing can continue around turbines',
      '**rural economic benefits** — lease payments to landowners, local jobs, tax revenue',
      '**scalable** — from single turbines to massive wind farms',
    ],
  },
  {
    type: 'heading',
    content: 'limitations of wind',
  },
  {
    type: 'subheading',
    content: 'intermittency',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**variable output** — wind speed fluctuates hour to hour, day to day',
      '**not dispatchable** — can\'t turn on wind when you need it',
      '**capacity factor** — turbines produce power 25-45% of the time (vs ~90% for nuclear)',
      '**requires backup** — natural gas or storage needed for calm periods',
    ],
  },
  {
    type: 'subheading',
    content: 'environmental impacts',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**bird and bat deaths** — turbine blades kill birds and especially bats (much lower than cats or windows)',
      '**noise** — whooshing sound can disturb nearby residents',
      '**visual impact** — some consider turbines ugly; others like them',
      '**shadow flicker** — rotating blades cast moving shadows',
    ],
  },
  {
    type: 'subheading',
    content: 'other limitations',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**location-dependent** — only economical in windy areas',
      '**transmission** — best wind resources often far from population centers',
      '**materials** — large amounts of steel, concrete, and rare earths needed',
    ],
  },
  {
    type: 'examtip',
    content: 'wind kills birds, but keep perspective: cats kill billions of birds annually; windows kill hundreds of millions; wind turbines kill thousands to hundreds of thousands. still, siting turbines away from migration routes and using deterrents helps.',
  },
  {
    type: 'heading',
    content: 'wind economics',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**lowest-cost new electricity** — onshore wind often cheapest option',
      '**production tax credit (PTC)** — US federal subsidy per kWh generated',
      '**LCOE declining** — costs dropped 70% since 2009',
      '**power purchase agreements** — long-term contracts provide revenue certainty',
    ],
  },
  {
    type: 'frqtip',
    content: 'wind FRQs ask about advantages (renewable, no emissions, low cost, land sharing) and disadvantages (intermittent, bird kills, visual/noise). always discuss intermittency and the need for backup or storage.',
  },
]

export default function APESU6T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 4,
        title: 'wind energy',
        keyTerms: ['wind turbine', 'onshore', 'offshore', 'capacity factor', 'intermittent', 'bird mortality'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/3', title: 'solar energy' }}
      next={{ href: '/apes/unit-6/5', title: 'hydroelectric power' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
