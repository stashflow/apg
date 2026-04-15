import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'solar energy basics',
  },
  {
    type: 'body',
    content: 'solar energy harnesses sunlight — the most abundant energy source on Earth. enough solar energy hits Earth in one hour to power humanity for a year. the challenge is capturing and storing it efficiently.',
  },
  {
    type: 'heading',
    content: 'photovoltaic (PV) solar',
  },
  {
    type: 'body',
    content: 'PV cells directly convert sunlight into electricity using semiconductor materials.',
  },
  {
    type: 'subheading',
    content: 'how it works',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**photons** — sunlight photons strike semiconductor (usually silicon)',
      '**electron excitation** — photons knock electrons loose from atoms',
      '**electric current** — freed electrons flow through circuit as DC electricity',
      '**inverter** — converts DC to AC for home/grid use',
    ],
  },
  {
    type: 'subheading',
    content: 'applications',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**rooftop solar** — panels on homes and buildings',
      '**utility-scale solar farms** — large installations feeding the grid',
      '**off-grid systems** — remote locations without grid access',
      '**portable** — calculators, phone chargers, camping equipment',
    ],
  },
  {
    type: 'heading',
    content: 'concentrated solar power (CSP)',
  },
  {
    type: 'body',
    content: 'CSP uses mirrors or lenses to concentrate sunlight, producing heat that drives turbines.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**parabolic troughs** — curved mirrors focus sun onto a tube of fluid',
      '**solar power towers** — field of mirrors (heliostats) focus on central receiver',
      '**heat storage** — molten salt can store heat for electricity generation at night',
      '**requires direct sunlight** — works best in deserts, not cloudy regions',
    ],
  },
  {
    type: 'heading',
    content: 'passive solar',
  },
  {
    type: 'body',
    content: 'using building design to capture and use solar energy without active equipment:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**south-facing windows** — capture winter sun for heating',
      '**thermal mass** — concrete, tile, or water absorb and release heat slowly',
      '**overhangs** — block high summer sun while allowing low winter sun',
      '**no moving parts** — lowest-tech, most reliable approach',
    ],
  },
  {
    type: 'heading',
    content: 'advantages of solar',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**renewable** — sun will shine for billions of years',
      '**no emissions during operation** — zero CO₂, no air pollution',
      '**declining costs** — PV costs dropped 90%+ since 2009',
      '**scalable** — works for single homes to massive power plants',
      '**low maintenance** — no moving parts in PV systems',
      '**distributed generation** — can be placed near demand, reducing transmission losses',
      '**energy independence** — reduces reliance on imported fuels',
    ],
  },
  {
    type: 'heading',
    content: 'limitations of solar',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**intermittent** — only produces during daylight; varies with weather and seasons',
      '**storage needed** — batteries or other storage for nighttime/cloudy periods',
      '**land use** — utility-scale solar requires significant area',
      '**manufacturing impacts** — energy and materials needed to make panels',
      '**toxic materials** — some PV cells contain cadmium, lead, or other hazardous materials',
      '**e-waste** — end-of-life panels need proper disposal/recycling',
      '**location-dependent** — most effective in sunny regions',
    ],
  },
  {
    type: 'examtip',
    content: 'on the AP exam, always acknowledge that solar is intermittent. the sun doesn\'t shine at night and output varies with weather. this is why storage (batteries) and backup power sources are essential for high solar penetration.',
  },
  {
    type: 'heading',
    content: 'solar economics',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**grid parity** — solar is now cheaper than fossil fuels in many locations',
      '**LCOE** — levelized cost of energy from solar has plummeted',
      '**subsidies** — tax credits and incentives accelerate adoption',
      '**net metering** — homeowners sell excess solar power back to grid',
      '**solar PPA** — power purchase agreements allow solar without upfront costs',
    ],
  },
  {
    type: 'frqtip',
    content: 'solar FRQs typically ask about advantages (renewable, no emissions, declining cost) and limitations (intermittent, storage, land use). always discuss both. for compare questions, contrast solar with other renewables or fossil fuels on these dimensions.',
  },
]

export default function APESU6T3() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 3,
        title: 'solar energy',
        keyTerms: ['photovoltaic', 'PV cell', 'CSP', 'passive solar', 'intermittent', 'grid parity', 'net metering'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/2', title: 'global energy use' }}
      next={{ href: '/apes/unit-6/4', title: 'wind energy' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
