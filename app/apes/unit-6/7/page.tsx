import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are biofuels?',
  },
  {
    type: 'body',
    content: 'biofuels are liquid fuels derived from recently living organic matter (biomass) rather than ancient fossil fuels. they\'re renewable because new plants can be grown to replace those harvested.',
  },
  {
    type: 'heading',
    content: 'types of biofuels',
  },
  {
    type: 'subheading',
    content: 'ethanol',
  },
  {
    type: 'body',
    content: 'alcohol fuel made by fermenting sugars from plant material:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**corn ethanol** — dominant in US; corn starch converted to sugar, then fermented',
      '**sugarcane ethanol** — dominant in Brazil; more efficient than corn',
      '**E10** — 10% ethanol blend, used in most US gasoline',
      '**E85** — 85% ethanol, requires flex-fuel vehicles',
      '**energy content** — about 70% of gasoline per gallon',
    ],
  },
  {
    type: 'subheading',
    content: 'biodiesel',
  },
  {
    type: 'body',
    content: 'diesel fuel made from vegetable oils or animal fats:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**feedstocks** — soybean oil, canola, palm oil, used cooking oil, animal fats',
      '**transesterification** — chemical process converts oils to biodiesel',
      '**B20** — 20% biodiesel blend, common in commercial use',
      '**B100** — pure biodiesel, can be used in modified diesel engines',
    ],
  },
  {
    type: 'subheading',
    content: 'cellulosic biofuels (2nd generation)',
  },
  {
    type: 'body',
    content: 'made from non-food plant parts — the "holy grail" of biofuels:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**feedstocks** — corn stalks, switchgrass, wood chips, agricultural waste',
      '**advantage** — doesn\'t compete with food production',
      '**challenge** — cellulose is harder to break down than sugars/starches',
      '**status** — still expensive; limited commercial production',
    ],
  },
  {
    type: 'subheading',
    content: 'algae biofuels (3rd generation)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high oil content** — algae can be 50% oil by weight',
      '**fast growth** — doubles in hours vs months for crops',
      '**non-arable land** — can grow in deserts, on wastewater',
      '**challenges** — harvesting, processing, contamination, scaling up',
    ],
  },
  {
    type: 'heading',
    content: 'advantages of biofuels',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**renewable** — new crops can be grown annually',
      '**carbon neutral (in theory)** — plants absorb CO₂ while growing, release when burned',
      '**domestic production** — reduces oil imports, supports farmers',
      '**compatible with existing infrastructure** — can blend with gasoline/diesel',
      '**rural economic development** — creates agricultural jobs',
    ],
  },
  {
    type: 'heading',
    content: 'problems with biofuels',
  },
  {
    type: 'subheading',
    content: 'food vs fuel',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**food price increases** — corn ethanol competes with food supply',
      '**40% of US corn** goes to ethanol production',
      '**ethical concerns** — using food crops for fuel while people go hungry',
    ],
  },
  {
    type: 'subheading',
    content: 'land use and deforestation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**land competition** — growing fuel crops displaces food production or natural habitat',
      '**indirect land use change (ILUC)** — clearing forest elsewhere to grow food displaced by biofuels',
      '**palm oil** — biodiesel demand driving rainforest destruction in Indonesia/Malaysia',
    ],
  },
  {
    type: 'subheading',
    content: 'energy balance (EROI)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**corn ethanol EROI** — approximately 1.3:1 (barely positive)',
      '**sugarcane ethanol** — 8:1 (much better, uses bagasse for energy)',
      '**inputs** — fertilizers, pesticides, irrigation, transportation, processing',
      '**net energy debate** — some argue corn ethanol uses more energy than it provides',
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
      '**fertilizer runoff** — corn production causes Gulf of Mexico dead zone',
      '**water use** — irrigation for biofuel crops',
      '**biodiversity loss** — monocultures replace diverse ecosystems',
      '**not truly carbon neutral** — emissions from farming, processing, transport',
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam loves corn ethanol as an example of unintended consequences. know: low EROI (~1.3:1), food vs fuel competition, fertilizer runoff, and ILUC. sugarcane ethanol in Brazil is much more efficient but has its own land-use issues.',
  },
  {
    type: 'frqtip',
    content: 'biofuel FRQs often ask you to evaluate pros and cons. advantages: renewable, domestic, carbon cycle. disadvantages: food vs fuel, low EROI (corn), deforestation, fertilizer runoff. always distinguish between corn ethanol (problematic) and cellulosic/algae (better but not yet scaled).',
  },
]

export default function APESU6T7() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 7,
        title: 'biofuels & ethanol',
        keyTerms: ['ethanol', 'biodiesel', 'cellulosic', 'EROI', 'food vs fuel', 'ILUC', 'E85'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/6', title: 'geothermal energy' }}
      next={{ href: '/apes/unit-6/8', title: 'nuclear energy' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
