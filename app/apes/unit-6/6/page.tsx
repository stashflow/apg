import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is geothermal energy?',
  },
  {
    type: 'body',
    content: 'geothermal energy harnesses heat from Earth\'s interior — produced by radioactive decay and leftover heat from planetary formation. the Earth\'s core is about 6,000°C, and this heat flows outward through the crust.',
  },
  {
    type: 'heading',
    content: 'sources of Earth\'s heat',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**radioactive decay** — uranium, thorium, and potassium in the crust produce heat',
      '**primordial heat** — leftover from Earth\'s formation 4.5 billion years ago',
      '**geothermal gradient** — temperature increases ~25-30°C per km of depth',
      '**hot spots** — volcanic and tectonic areas have much steeper gradients',
    ],
  },
  {
    type: 'heading',
    content: 'types of geothermal use',
  },
  {
    type: 'subheading',
    content: 'geothermal power plants',
  },
  {
    type: 'body',
    content: 'generate electricity by using underground steam or hot water to drive turbines:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**dry steam plants** — use naturally occurring steam directly',
      '**flash steam plants** — depressurize hot water to create steam',
      '**binary cycle plants** — transfer heat to a secondary fluid with low boiling point',
      '**require specific conditions** — hot rock near surface with water/permeability',
    ],
  },
  {
    type: 'subheading',
    content: 'direct use',
  },
  {
    type: 'body',
    content: 'using geothermal heat directly without generating electricity:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**district heating** — Iceland heats 90% of homes with geothermal',
      '**greenhouses** — heating in cold climates',
      '**aquaculture** — warming water for fish farming',
      '**industrial processes** — drying, pasteurization, heating',
      '**spas and pools** — hot springs tourism',
    ],
  },
  {
    type: 'subheading',
    content: 'ground-source heat pumps',
  },
  {
    type: 'body',
    content: 'use the constant temperature underground (10-16°C) for heating and cooling:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**work anywhere** — don\'t require volcanic activity',
      '**heating** — extract heat from ground in winter',
      '**cooling** — deposit heat into ground in summer',
      '**highly efficient** — 3-5x more efficient than conventional HVAC',
      '**high upfront cost** — but low operating costs',
    ],
  },
  {
    type: 'heading',
    content: 'advantages of geothermal',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**renewable** — heat continuously replenished from Earth\'s interior',
      '**baseload power** — available 24/7, not intermittent',
      '**small footprint** — power plants compact compared to solar/wind farms',
      '**low emissions** — minimal CO₂, no combustion',
      '**long lifespan** — plants operate for decades',
      '**local resource** — reduces energy imports',
    ],
  },
  {
    type: 'heading',
    content: 'limitations of geothermal',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**geographically limited** — high-temperature resources concentrated at plate boundaries',
      '**best locations** — Iceland, western US, Philippines, Indonesia, East Africa',
      '**high upfront costs** — drilling and exploration expensive',
      '**water use** — power plants need water for steam/cooling',
      '**induced seismicity** — fluid injection can trigger small earthquakes',
      '**reservoir depletion** — over-extraction can cool the reservoir',
      '**hydrogen sulfide** — some sites release H₂S (rotten egg smell, toxic)',
    ],
  },
  {
    type: 'examtip',
    content: 'geothermal is location-dependent — only viable near volcanic/tectonic activity for power generation. but ground-source heat pumps work anywhere and are important for building efficiency. know the difference between geothermal power (limited locations) and heat pumps (universal).',
  },
  {
    type: 'heading',
    content: 'enhanced geothermal systems (EGS)',
  },
  {
    type: 'body',
    content: 'experimental technology to create geothermal resources where they don\'t naturally exist:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**drill deep** — reach hot rock anywhere (5-10 km down)',
      '**fracture rock** — inject water to create permeability',
      '**circulate water** — pump cold water down, extract hot water/steam',
      '**potential** — could vastly expand geothermal electricity',
      '**challenges** — induced seismicity, high drilling costs, water needs',
    ],
  },
  {
    type: 'frqtip',
    content: 'geothermal FRQs ask about advantages (renewable, baseload, small footprint) and limitations (location-dependent, high upfront cost, induced seismicity). distinguish between geothermal power plants (limited areas) and ground-source heat pumps (anywhere).',
  },
]

export default function APESU6T6() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 6,
        title: 'geothermal energy',
        keyTerms: ['geothermal', 'heat pump', 'binary cycle', 'EGS', 'induced seismicity', 'baseload'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/5', title: 'hydroelectric power' }}
      next={{ href: '/apes/unit-6/7', title: 'biofuels & ethanol' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
