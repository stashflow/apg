import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are ecosystem services?',
  },
  {
    type: 'body',
    content: 'ecosystem services are the benefits that humans receive from ecosystems. they include everything from clean air and water to food, fuel, recreation, and spiritual fulfillment. the Millennium Ecosystem Assessment (2005) organized ecosystem services into four categories that you need to know for the AP exam.',
  },
  {
    type: 'heading',
    content: 'the four categories of ecosystem services',
  },
  {
    type: 'subheading',
    content: '1. provisioning services',
  },
  {
    type: 'body',
    content: 'products obtained directly from ecosystems. these are the most obvious benefits — the tangible goods we harvest from nature.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**food** — crops, livestock, fish, wild game, edible plants, honey',
      '**fresh water** — drinking water, irrigation water, water for industry',
      '**raw materials** — timber, fibers (cotton, wool), biofuels',
      '**genetic resources** — genes used for crop improvement and medicine',
      '**medicinal resources** — plants and animals used for pharmaceuticals (25% of modern drugs derive from rainforest plants)',
    ],
  },
  {
    type: 'subheading',
    content: '2. regulating services',
  },
  {
    type: 'body',
    content: 'benefits from regulation of ecosystem processes. these services maintain environmental conditions that allow life to thrive.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate regulation** — forests absorb CO₂; vegetation affects local temperature and rainfall',
      '**water purification** — wetlands filter pollutants, remove sediment, break down waste',
      '**air quality regulation** — plants absorb pollutants and produce oxygen',
      '**pollination** — bees, butterflies, birds pollinate crops (worth ~$200 billion/year globally)',
      '**pest control** — natural predators control agricultural pests',
      '**flood control** — wetlands and forests absorb water, reducing flood peaks',
      '**erosion control** — plant roots stabilize soil on slopes and riverbanks',
      '**disease regulation** — healthy ecosystems limit disease vectors and outbreaks',
    ],
  },
  {
    type: 'examtip',
    content: 'pollination is a regulating service, not provisioning. the bees don\'t provide honey directly — they regulate the process of plant reproduction. this distinction trips up students on the AP exam.',
  },
  {
    type: 'subheading',
    content: '3. cultural services',
  },
  {
    type: 'body',
    content: 'non-material benefits from ecosystems. these are harder to quantify economically but deeply important to human wellbeing.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**recreation & ecotourism** — hiking, fishing, whale watching, nature photography',
      '**aesthetic value** — scenic landscapes, beautiful species',
      '**spiritual & religious value** — sacred groves, pilgrimage sites, connection to nature',
      '**educational value** — nature as a source of scientific knowledge and learning',
      '**cultural heritage** — ecosystems tied to cultural identity and traditional practices',
    ],
  },
  {
    type: 'subheading',
    content: '4. supporting services',
  },
  {
    type: 'body',
    content: 'services necessary for all other ecosystem services to function. these are the foundational processes that make ecosystems work.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**photosynthesis / primary production** — plants convert sunlight into biomass, the base of all food webs',
      '**nutrient cycling** — decomposition recycles nitrogen, phosphorus, and other nutrients through ecosystems',
      '**soil formation** — weathering, decomposition, and biological activity create soil over centuries',
      '**water cycling** — evaporation, precipitation, and transpiration move water through the biosphere',
      '**habitat provision** — ecosystems provide living space for all species',
    ],
  },
  {
    type: 'heading',
    content: 'economic value of ecosystem services',
  },
  {
    type: 'body',
    content: 'economists have attempted to value ecosystem services to make their importance visible in policy decisions. one famous estimate (Costanza et al., 1997) valued global ecosystem services at $33 trillion per year — more than the entire global GDP at the time.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['ecosystem', 'key services', 'estimated value'],
    tableRows: [
      ['wetlands', 'water purification, flood control, habitat', '$15,000/hectare/year'],
      ['tropical forests', 'carbon storage, rainfall, biodiversity', '$2,000/hectare/year'],
      ['coral reefs', 'fisheries, tourism, coastal protection', '$350,000/hectare/year'],
      ['pollinators', 'crop pollination', '$200 billion/year globally'],
      ['mangroves', 'coastal protection, nursery habitat', '$200,000/hectare/year'],
    ],
  },
  {
    type: 'examtip',
    content: 'the exam may ask why valuing ecosystem services is controversial. critics argue: (1) nature has intrinsic value beyond economics, (2) some services are priceless, (3) commodifying nature could justify destruction if the price is right. supporters argue economic valuation makes conservation relevant to policymakers.',
  },
  {
    type: 'heading',
    content: 'threats to ecosystem services',
  },
  {
    type: 'body',
    content: 'human activities are degrading ecosystem services worldwide. the Millennium Ecosystem Assessment found that 60% of ecosystem services are being used unsustainably.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat destruction** — eliminates the ecosystems that provide services',
      '**pollution** — degrades water purification, air quality, and soil health',
      '**overexploitation** — harvesting fish, timber, and water faster than regeneration',
      '**climate change** — alters temperature, precipitation, and extreme events that ecosystems depend on',
      '**invasive species** — disrupt ecosystem functions and outcompete native service providers',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs love to ask you to identify ecosystem services provided by a specific ecosystem (wetland, forest, coral reef) and explain how human activities threaten those services. always name the category (provisioning, regulating, cultural, supporting) and give specific examples.',
  },
]

export default function APESU2T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity' }}
      topic={{
        number: 2,
        title: 'ecosystem services',
        keyTerms: ['provisioning services', 'regulating services', 'cultural services', 'supporting services', 'pollination', 'water purification', 'carbon sequestration'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-2/1', title: 'ecosystem diversity' }}
      next={{ href: '/apes/unit-2/3', title: 'species diversity' }}
      courseHref="/apes"
      unitHref="/apes/unit-2"
    />
  )
}
