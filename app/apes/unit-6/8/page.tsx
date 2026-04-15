import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'how nuclear energy works',
  },
  {
    type: 'body',
    content: 'nuclear power generates electricity by using heat from nuclear fission reactions to produce steam that drives turbines. it provides about 10% of world electricity with zero direct carbon emissions.',
  },
  {
    type: 'subheading',
    content: 'nuclear fission',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**fission** — splitting heavy atoms (uranium-235, plutonium-239)',
      '**neutrons hit nucleus** — atom splits into smaller atoms plus more neutrons',
      '**chain reaction** — released neutrons split more atoms',
      '**massive energy** — E = mc²; small mass converts to huge energy',
      '**1 kg uranium** — equivalent to 2,700 tons of coal',
    ],
  },
  {
    type: 'subheading',
    content: 'reactor components',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**fuel rods** — contain uranium fuel pellets',
      '**control rods** — absorb neutrons to regulate reaction',
      '**moderator** — slows neutrons (water in most reactors)',
      '**coolant** — removes heat (usually water)',
      '**containment structure** — prevents release of radiation',
    ],
  },
  {
    type: 'heading',
    content: 'advantages of nuclear',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**zero direct CO₂** — no combustion, no emissions during operation',
      '**high energy density** — enormous power from small fuel volume',
      '**baseload power** — operates 24/7, 90%+ capacity factor',
      '**small land footprint** — much less land than solar or wind',
      '**long fuel supply** — uranium supplies adequate for centuries',
      '**proven technology** — operating safely in many countries for decades',
    ],
  },
  {
    type: 'heading',
    content: 'problems with nuclear',
  },
  {
    type: 'subheading',
    content: 'radioactive waste',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high-level waste** — spent fuel rods remain dangerously radioactive for 10,000+ years',
      '**no permanent repository** — no country has opened a permanent disposal site',
      '**Yucca Mountain** — proposed US site, politically blocked',
      '**on-site storage** — spent fuel stored in pools and dry casks at reactor sites',
      '**low-level waste** — contaminated tools, clothing, etc.; easier to manage',
    ],
  },
  {
    type: 'subheading',
    content: 'accidents and safety',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Three Mile Island (1979)** — partial meltdown in Pennsylvania; no deaths but public fear',
      '**Chernobyl (1986)** — explosion and fire in Ukraine; ~4,000 eventual cancer deaths estimated',
      '**Fukushima (2011)** — earthquake and tsunami caused meltdowns in Japan; 1 death attributed',
      '**rare but catastrophic** — accidents are infrequent but consequences are severe and long-lasting',
    ],
  },
  {
    type: 'subheading',
    content: 'proliferation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**weapons connection** — same technology can enrich uranium or produce plutonium for bombs',
      '**international monitoring** — IAEA inspects facilities to prevent diversion',
      '**North Korea, Iran** — concerns about civilian programs becoming weapons programs',
    ],
  },
  {
    type: 'subheading',
    content: 'economics',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high capital costs** — $10+ billion for new plants',
      '**long construction times** — 10-15 years to build',
      '**cost overruns** — projects frequently over budget',
      '**competing with cheap renewables** — solar and wind now often cheaper',
    ],
  },
  {
    type: 'examtip',
    content: 'on the AP exam, nuclear is often presented as a climate solution because it produces no CO₂. but you must also discuss waste disposal, accident risk, and high costs. know the three major accidents: TMI, Chernobyl, Fukushima.',
  },
  {
    type: 'heading',
    content: 'nuclear fusion',
  },
  {
    type: 'body',
    content: 'fusion combines light atoms (hydrogen isotopes) rather than splitting heavy ones:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**powers the sun** — hydrogen fusing into helium',
      '**advantages** — no long-lived waste, abundant fuel (hydrogen from water), no meltdown risk',
      '**challenges** — requires extreme temperatures (100+ million °C), not yet achieved net energy',
      '**ITER** — international project in France attempting to demonstrate fusion power',
      '**"always 30 years away"** — commercial fusion has been promised for decades',
    ],
  },
  {
    type: 'frqtip',
    content: 'nuclear FRQs ask about advantages (no CO₂, high energy density, baseload, small footprint) and disadvantages (waste, accidents, proliferation, cost). always mention waste disposal is unsolved and know the three accidents.',
  },
]

export default function APESU6T8() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 8,
        title: 'nuclear energy',
        keyTerms: ['fission', 'fusion', 'uranium-235', 'spent fuel', 'Chernobyl', 'Fukushima', 'half-life'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/7', title: 'biofuels & ethanol' }}
      next={{ href: '/apes/unit-6/9', title: 'energy efficiency' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
