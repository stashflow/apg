import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is an ecosystem?',
  },
  {
    type: 'body',
    content: 'an ecosystem is a community of living organisms (biotic factors) interacting with each other and with their non-living environment (abiotic factors). ecosystems can range in scale from a puddle to an entire ocean, but they all share the same functional components: producers, consumers, decomposers, and the abiotic environment they inhabit.',
  },
  {
    type: 'subheading',
    content: 'biotic factors',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**producers (autotrophs)** — organisms that make their own food via photosynthesis (plants, algae, cyanobacteria) or chemosynthesis (deep-sea vent bacteria). they are the base of every food chain.',
      '**consumers (heterotrophs)** — organisms that eat other organisms. primary consumers eat producers, secondary consumers eat primary consumers, and so on up the trophic ladder.',
      '**decomposers (detritivores)** — fungi and bacteria that break down dead organic matter into inorganic nutrients, recycling matter back into the ecosystem. without them, nutrients would lock up in dead bodies forever.',
      '**scavengers** — consume dead animals (e.g., vultures, hyenas). often confused with decomposers — scavengers physically break down tissue; decomposers chemically break it down.',
    ],
  },
  {
    type: 'subheading',
    content: 'abiotic factors',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**temperature** — controls enzyme activity and metabolic rates. cold = slow metabolism; heat = risk of protein denaturation.',
      '**sunlight / solar radiation** — drives photosynthesis. the primary energy input for almost every ecosystem on Earth.',
      '**water** — essential for all life. availability determines whether an area is desert, grassland, or forest.',
      '**soil composition** — nutrient content, pH, and texture determine what plants can grow, which determines the whole food web above.',
      '**wind** — affects evaporation, pollination, and heat distribution.',
      '**salinity** — determines whether organisms are freshwater or marine adapted.',
      '**pH** — affects enzyme function in organisms and nutrient availability in soil.',
    ],
  },
  {
    type: 'examtip',
    content: 'the exam loves to ask you to classify factors as biotic or abiotic. remember: biotic = alive or was once alive. a dead log is still biotic because it came from a living tree. bacteria in soil are biotic. salinity, temperature, sunlight = abiotic.',
  },
  {
    type: 'heading',
    content: 'ecosystem structure',
  },
  {
    type: 'body',
    content: 'ecosystems are organized at several levels of biological organization. you need to know how these levels relate to each other for the exam.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['level', 'definition', 'example'],
    tableRows: [
      ['organism', 'a single individual of a species', 'one red fox'],
      ['population', 'all individuals of one species in one area', 'all red foxes in yellowstone'],
      ['community', 'all populations of different species sharing an area', 'foxes + deer + wolves + trees in yellowstone'],
      ['ecosystem', 'community + its abiotic environment', 'yellowstone including soil, water, climate'],
      ['biome', 'a large ecosystem defined by climate & vegetation type', 'temperate deciduous forest'],
      ['biosphere', 'all life on earth & the environments it inhabits', 'the entire surface, ocean, and lower atmosphere'],
    ],
  },
  {
    type: 'heading',
    content: 'ecological relationships between species',
  },
  {
    type: 'body',
    content: 'species in an ecosystem do not exist in isolation — they interact constantly. these interactions shape population sizes and ecosystem health.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['relationship', 'species A', 'species B', 'example'],
    tableRows: [
      ['predation', '+ (predator benefits)', '− (prey harmed)', 'wolf eats rabbit'],
      ['competition', '−', '−', 'two species competing for same territory'],
      ['mutualism', '+', '+', 'clownfish & sea anemone; bees & flowers'],
      ['commensalism', '+', '0 (neutral)', 'barnacles on whale; orchids on trees'],
      ['parasitism', '+ (parasite)', '− (host)', 'tapeworm in mammal; tick on dog'],
      ['amensalism', '−', '0', 'black walnut tree killing nearby plants'],
    ],
  },
  {
    type: 'examtip',
    content: 'mutualism is the most commonly tested symbiotic relationship. key examples: mycorrhizal fungi + plant roots (fungi get carbohydrates, roots get phosphorus & water), nitrogen-fixing rhizobium bacteria + legume roots, and cleaner fish + large fish.',
  },
  {
    type: 'heading',
    content: 'habitat vs. niche',
  },
  {
    type: 'subheading',
    content: 'habitat',
  },
  {
    type: 'body',
    content: 'a habitat is the physical location where an organism lives — the "address." it includes all the physical and chemical conditions of the environment: temperature range, moisture, vegetation type, and so on. the same habitat can support dozens of species.',
  },
  {
    type: 'subheading',
    content: 'ecological niche',
  },
  {
    type: 'body',
    content: 'a niche is the functional role an organism plays in its ecosystem — the "job." it includes what the organism eats, when it is active, how it reproduces, and how it interacts with other species. the niche concept explains how multiple species can coexist: they occupy slightly different niches, avoiding direct competition.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**fundamental niche** — the full range of conditions an organism could theoretically survive in, in the absence of competition.',
      '**realized niche** — the narrower range of conditions an organism actually occupies due to competition and predation.',
      '**resource partitioning** — when competing species divide a resource (food, space, time) to reduce competition and coexist. example: different warbler species foraging at different heights in the same tree.',
      '**competitive exclusion principle (Gause\'s Law)** — two species cannot occupy the exact same niche indefinitely. one will outcompete the other to extinction or emigration in that habitat.',
    ],
  },
  {
    type: 'frqtip',
    content: 'free-response questions sometimes give you a scenario and ask you to identify the niche, explain competitive exclusion, or predict what happens when a new species invades. always distinguish between habitat (place) and niche (role). a common error: saying two species share a "niche" when they only share a "habitat."',
  },
  {
    type: 'heading',
    content: 'keystone species & ecosystem engineers',
  },
  {
    type: 'body',
    content: 'not all species have equal influence on their ecosystem. some have outsized effects relative to their abundance.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**keystone species** — a species whose removal causes dramatic changes to ecosystem structure and function, far out of proportion to its biomass. example: sea otters eat sea urchins; without otters, urchins explode and destroy kelp forests, wiping out entire habitat.',
      '**ecosystem engineers** — species that create or modify habitat for other species. example: beavers build dams that create wetlands, which support dozens of other species. elephants clear trees, creating grasslands for grazers.',
      '**indicator species** — species sensitive to environmental changes whose health signals ecosystem condition. example: amphibians (frogs) are indicators of water quality due to permeable skin.',
      '**umbrella species** — protecting one species (like grizzly bears) protects a large habitat area that shelters many others.',
    ],
  },
  {
    type: 'examtip',
    content: 'keystone species is one of the most frequently tested ecology concepts. know at least 3 examples with their ecosystem impacts. sea otter / sea urchin / kelp forest is the classic example the AP exam loves.',
  },
  {
    type: 'heading',
    content: 'ecological succession',
  },
  {
    type: 'body',
    content: 'ecosystems are not static — they change over time through a process called succession. succession describes the predictable sequence of community change after a disturbance or in a newly available habitat.',
  },
  {
    type: 'subheading',
    content: 'primary succession',
  },
  {
    type: 'body',
    content: 'occurs on bare substrate where no soil exists — after a volcanic eruption, glacier retreat, or major landslide. pioneer species (typically lichens and mosses) colonize first, breaking down rock and building soil. over hundreds or thousands of years, soil deepens and the community progresses toward a climax community.',
  },
  {
    type: 'subheading',
    content: 'secondary succession',
  },
  {
    type: 'body',
    content: 'occurs where a community has been disturbed but soil remains intact — after a forest fire, flood, clear-cut, or abandoned farmland. recovery is much faster than primary succession because soil already exists. pioneer species here include weedy grasses and fast-growing shrubs.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['feature', 'primary succession', 'secondary succession'],
    tableRows: [
      ['starting point', 'bare rock / no soil', 'disturbed area with soil intact'],
      ['pioneer species', 'lichens, mosses', 'grasses, weeds, shrubs'],
      ['speed', 'very slow (centuries–millennia)', 'faster (decades–centuries)'],
      ['example', 'lava field after volcanic eruption', 'forest recovering after wildfire'],
    ],
  },
  {
    type: 'examtip',
    content: 'the most common exam trap: students confuse primary and secondary succession. the key is soil — if there\'s no soil, it\'s primary. if soil exists, it\'s secondary. also know that climax community is the stable, self-sustaining endpoint (though in reality, ecosystems rarely reach a perfectly static state).',
  },
]

export default function APESU1T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 1, title: 'the living world — ecosystems' }}
      topic={{
        number: 1,
        title: 'introduction to ecosystems',
        keyTerms: ['biotic', 'abiotic', 'producer', 'consumer', 'decomposer', 'niche', 'habitat', 'keystone species', 'succession', 'mutualism', 'competitive exclusion'],
      }}
      sections={sections}
      next={{ href: '/apes/unit-1/2', title: 'terrestrial biomes' }}
      courseHref="/apes"
      unitHref="/apes/unit-1"
    />
  )
}
