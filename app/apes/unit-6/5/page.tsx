import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'how hydroelectric power works',
  },
  {
    type: 'body',
    content: 'hydroelectric power converts the kinetic energy of moving water into electricity. it\'s the largest source of renewable electricity globally, supplying about 16% of world electricity.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**water flows through turbines** — gravity pulls water downhill',
      '**turbines spin generators** — mechanical energy becomes electrical energy',
      '**head and flow** — power depends on height drop (head) and water volume (flow)',
      '**formula** — Power = ρ × g × Q × h × η (density × gravity × flow × head × efficiency)',
    ],
  },
  {
    type: 'heading',
    content: 'types of hydropower',
  },
  {
    type: 'subheading',
    content: 'conventional dams',
  },
  {
    type: 'body',
    content: 'large dams create reservoirs that store water and provide controlled release:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**storage capacity** — reservoirs hold water for release when needed',
      '**dispatchable** — unlike solar/wind, can be turned on when electricity is needed',
      '**examples** — Hoover Dam, Three Gorges Dam, Grand Coulee Dam',
    ],
  },
  {
    type: 'subheading',
    content: 'run-of-river',
  },
  {
    type: 'body',
    content: 'uses natural river flow without large reservoirs:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**smaller footprint** — less flooding and habitat destruction',
      '**variable output** — depends on river flow, which varies seasonally',
      '**lower environmental impact** — but still affects fish migration',
    ],
  },
  {
    type: 'subheading',
    content: 'pumped-storage hydropower',
  },
  {
    type: 'body',
    content: 'acts as a giant battery by pumping water uphill when electricity is cheap and releasing it when expensive:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**energy storage** — stores excess solar/wind power',
      '**round-trip efficiency** — 70-85% (loses some energy each cycle)',
      '**grid stabilization** — helps balance variable renewable generation',
    ],
  },
  {
    type: 'heading',
    content: 'advantages of hydropower',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**renewable** — water cycle continuously replenishes',
      '**no direct emissions** — no combustion, no CO₂ during operation',
      '**dispatchable** — can be turned on/off to meet demand (unlike solar/wind)',
      '**long lifespan** — dams operate for 50-100+ years',
      '**low operating costs** — fuel is free',
      '**multi-purpose** — flood control, irrigation, water supply, recreation',
      '**energy storage** — pumped-storage provides grid-scale storage',
    ],
  },
  {
    type: 'heading',
    content: 'environmental problems',
  },
  {
    type: 'subheading',
    content: 'habitat destruction',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**flooded land** — reservoirs drown forests, wetlands, farmland, towns',
      '**Three Gorges** — flooded 632 km², displaced 1.3 million people',
      '**downstream changes** — altered flow affects riparian and delta ecosystems',
    ],
  },
  {
    type: 'subheading',
    content: 'fish impacts',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**blocked migration** — dams prevent fish from reaching spawning grounds',
      '**salmon decline** — Pacific Northwest salmon devastated by dams',
      '**fish ladders** — help some fish but not fully effective',
      '**turbine mortality** — fish killed passing through turbines',
    ],
  },
  {
    type: 'subheading',
    content: 'sediment and nutrients',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**sediment trapped** — settles in reservoir instead of flowing downstream',
      '**delta erosion** — without sediment, deltas shrink (Nile Delta losing land)',
      '**nutrient depletion** — downstream ecosystems starved of nutrients',
      '**reservoir filling** — sediment gradually reduces reservoir capacity',
    ],
  },
  {
    type: 'subheading',
    content: 'greenhouse gas emissions',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**methane from reservoirs** — flooded vegetation decomposes anaerobically',
      '**tropical reservoirs** — can emit significant CH₄, sometimes rivaling fossil fuels',
      '**varies widely** — cold, deep reservoirs emit much less',
    ],
  },
  {
    type: 'examtip',
    content: 'hydropower is renewable and dispatchable but has major environmental impacts. know the fish migration issue (salmon), sediment trapping, and reservoir methane emissions. three Gorges Dam is the classic example of massive scale and human displacement.',
  },
  {
    type: 'heading',
    content: 'dam removal',
  },
  {
    type: 'body',
    content: 'removing obsolete dams can restore ecosystems:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Elwha River** — two dams removed 2011-2014; salmon returning, sediment flowing',
      '**ecosystem recovery** — fish populations, riparian habitat, nutrient cycling restored',
      '**aging infrastructure** — many old dams no longer economical to maintain',
      '**1,000+ dams removed** in US since 1912; pace accelerating',
    ],
  },
  {
    type: 'frqtip',
    content: 'hydropower FRQs often ask about tradeoffs. advantages: renewable, dispatchable, no direct emissions, multi-purpose. disadvantages: habitat destruction, fish migration blocked, sediment trapping, methane emissions. always mention specific impacts.',
  },
]

export default function APESU6T5() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 5,
        title: 'hydroelectric power',
        keyTerms: ['dam', 'reservoir', 'run-of-river', 'pumped-storage', 'fish ladder', 'sediment', 'Elwha'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/4', title: 'wind energy' }}
      next={{ href: '/apes/unit-6/6', title: 'geothermal energy' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
