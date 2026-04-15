import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'why energy efficiency matters',
  },
  {
    type: 'body',
    content: 'energy efficiency — getting the same work from less energy — is often called the "first fuel" because it\'s the cheapest and cleanest way to meet energy needs. the energy you don\'t use doesn\'t need to be generated, transmitted, or paid for.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**negawatts** — the concept that saved energy is equivalent to generated power',
      '**least-cost resource** — efficiency upgrades often cheaper than new power plants',
      '**reduces all impacts** — less pollution, less fuel, less infrastructure',
      '**multiplier effect** — 1 unit of electricity saved = 3 units of fuel saved (due to generation losses)',
    ],
  },
  {
    type: 'heading',
    content: 'efficiency in buildings',
  },
  {
    type: 'body',
    content: 'buildings use ~40% of US energy. huge efficiency gains are possible:',
  },
  {
    type: 'subheading',
    content: 'insulation and envelope',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**insulation** — slows heat transfer through walls, ceilings, floors (measured in R-value)',
      '**air sealing** — stopping drafts reduces heating/cooling load',
      '**windows** — double/triple pane, low-e coatings reduce heat loss',
      '**passive house standard** — extremely efficient buildings needing minimal heating/cooling',
    ],
  },
  {
    type: 'subheading',
    content: 'HVAC and water heating',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high-efficiency furnaces/AC** — newer units use 20-40% less energy',
      '**heat pumps** — 3-4x more efficient than resistance heating',
      '**programmable thermostats** — reduce heating/cooling when not needed',
      '**tankless water heaters** — heat water on demand, no standby losses',
      '**heat pump water heaters** — 2-3x more efficient than conventional',
    ],
  },
  {
    type: 'subheading',
    content: 'lighting and appliances',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**LED lighting** — 75-80% less energy than incandescent, lasts 25x longer',
      '**ENERGY STAR** — EPA label for efficient appliances',
      '**smart power strips** — eliminate phantom loads from standby devices',
    ],
  },
  {
    type: 'heading',
    content: 'efficiency in transportation',
  },
  {
    type: 'subheading',
    content: 'vehicle efficiency',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**CAFE standards** — Corporate Average Fuel Economy; federal mpg requirements',
      '**hybrid vehicles** — combine gas engine with electric motor and regenerative braking',
      '**electric vehicles (EVs)** — 3-4x more efficient than internal combustion (less heat loss)',
      '**aerodynamics and weight** — lighter vehicles with better shapes use less fuel',
    ],
  },
  {
    type: 'subheading',
    content: 'system efficiency',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**public transit** — buses and trains move more people per gallon',
      '**carpooling** — more passengers = less fuel per person',
      '**urban design** — walkable, bikeable cities reduce vehicle miles',
      '**telecommuting** — remote work eliminates commuting entirely',
    ],
  },
  {
    type: 'heading',
    content: 'industrial efficiency',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**cogeneration (CHP)** — combined heat and power uses waste heat for useful purposes',
      '**variable speed motors** — match motor speed to load, reducing waste',
      '**process optimization** — redesigning industrial processes to minimize energy',
      '**waste heat recovery** — capturing and reusing heat that would otherwise be lost',
    ],
  },
  {
    type: 'heading',
    content: 'EROI revisited',
  },
  {
    type: 'body',
    content: 'Energy Return on Investment measures how much energy you get back for energy invested:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**EROI = energy output / energy input**',
      '**high EROI** — conventional oil (historically 30:1), hydropower (40:1+)',
      '**low EROI** — tar sands (3-5:1), corn ethanol (~1.3:1)',
      '**declining EROI** — as easy resources are depleted, EROI falls',
      '**minimum viable** — society needs ~5:1 EROI to function',
    ],
  },
  {
    type: 'examtip',
    content: 'know EROI calculations. if it takes 10 units of energy to produce 50 units of fuel, EROI = 50/10 = 5:1. tar sands and corn ethanol have poor EROI; conventional oil and hydro have good EROI.',
  },
  {
    type: 'heading',
    content: 'policies promoting efficiency',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**appliance standards** — minimum efficiency requirements',
      '**building codes** — insulation, window, and HVAC requirements',
      '**CAFE standards** — vehicle fuel economy requirements',
      '**utility rebates** — incentives for efficient equipment',
      '**carbon pricing** — making energy more expensive encourages conservation',
      '**energy audits** — identifying efficiency opportunities',
    ],
  },
  {
    type: 'frqtip',
    content: 'efficiency FRQs may ask for specific strategies (LED, insulation, heat pumps, EVs, CAFE) or ask you to calculate EROI. remember: efficiency is the cheapest, cleanest energy resource. always specific technologies, not vague "use less energy."',
  },
]

export default function APESU6T9() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 9,
        title: 'energy efficiency',
        keyTerms: ['EROI', 'CAFE', 'ENERGY STAR', 'LED', 'heat pump', 'cogeneration', 'negawatt'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/8', title: 'nuclear energy' }}
      next={{ href: '/apes/unit-6/10', title: 'cogeneration' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
