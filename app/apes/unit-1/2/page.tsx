import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what defines a biome?',
  },
  {
    type: 'body',
    content: 'a biome is a large geographic region defined primarily by its climate — specifically precipitation and temperature patterns. vegetation type follows climate, and animal communities follow vegetation. biomes are not defined by specific species but by the general structure and function of the dominant vegetation.',
  },
  {
    type: 'callout',
    content: 'the two most important variables for determining biome type: (1) average annual precipitation and (2) average annual temperature. if you can plot these two axes on a graph, you can predict the biome — and the AP exam tests exactly this.',
  },
  {
    type: 'heading',
    content: 'the 8 major terrestrial biomes',
  },
  {
    type: 'subheading',
    content: '1. tropical rainforest',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate**: hot year-round (25–30°C), very high precipitation (200–400 cm/yr), no dry season',
      '**location**: near the equator — amazon basin, congo basin, southeast asia',
      '**vegetation**: multi-layered canopy, enormous biodiversity, epiphytes, bromeliads',
      '**soil**: surprisingly poor (laterite soil) — nutrients are locked in living biomass, not soil',
      '**key characteristic**: highest terrestrial biodiversity on Earth; rapid decomposition recycles nutrients instantly',
      '**threats**: deforestation for agriculture, logging, and ranching',
    ],
  },
  {
    type: 'subheading',
    content: '2. tropical dry forest (tropical seasonal forest)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate**: warm, distinct wet and dry seasons; 100–200 cm/yr precipitation, concentrated in wet season',
      '**location**: west africa, india, central america, northern australia',
      '**vegetation**: deciduous trees that drop leaves in dry season to conserve water',
      '**key characteristic**: fires are common during dry season and are a natural disturbance',
    ],
  },
  {
    type: 'subheading',
    content: '3. tropical savanna (grassland)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate**: warm year-round, 25–75 cm/yr precipitation, pronounced dry season lasting 4–8 months',
      '**location**: sub-saharan africa (serengeti), south america (cerrado), northern australia',
      '**vegetation**: grasses dominate with scattered trees (acacia, baobab)',
      '**key characteristic**: home to largest herds of large mammals; fire-adapted vegetation; frequent natural fires maintain grassland',
    ],
  },
  {
    type: 'subheading',
    content: '4. desert',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate**: less than 25 cm/yr precipitation; can be hot desert (sahara, sonoran) or cold desert (gobi, great basin)',
      '**location**: centered around 30°N and 30°S latitude — areas of descending dry air',
      '**vegetation**: cacti (new world), succulents; plants are xerophytes (water-adapted)',
      '**key characteristic**: extreme temperature swings between day and night; soils often rich in minerals since little rain leaches them',
      '**adaptations**: waxy cuticles, reduced leaves, CAM photosynthesis, deep roots or water storage',
    ],
  },
  {
    type: 'subheading',
    content: '5. temperate grassland (steppe/prairie)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate**: continental climate — hot summers, cold winters, 25–75 cm/yr precipitation; not enough rain for forests, too much for desert',
      '**location**: north american great plains, eurasian steppe, south american pampas',
      '**vegetation**: grasses dominate; no trees (fires and drought prevent tree establishment)',
      '**soil**: **richest soils on Earth** — thick, dark topsoil (mollisols) from millennia of grass decomposition; why most agricultural land is on former grassland',
      '**key characteristic**: most converted biome; vast majority turned to cropland',
    ],
  },
  {
    type: 'examtip',
    content: 'the exam often asks which biome has the richest soil — that\'s temperate grassland (mollisols). tropical rainforest has the poorest agricultural soil despite high biodiversity. this contrast is frequently tested.',
  },
  {
    type: 'subheading',
    content: '6. temperate deciduous forest',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate**: 75–150 cm/yr precipitation, four distinct seasons, 0–30°C temperature range',
      '**location**: eastern us, western europe, eastern china, northeastern asia',
      '**vegetation**: broad-leaved trees that drop leaves in fall (oak, maple, beech, hickory)',
      '**key characteristic**: distinct fall foliage; soil is moderately fertile (alfisols); high seasonal variation drives behavioral adaptations (hibernation, migration)',
    ],
  },
  {
    type: 'subheading',
    content: '7. boreal forest (taiga)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate**: cold, long winters; short, cool summers; 40–100 cm/yr precipitation (mostly snow); coldest of the forest biomes',
      '**location**: broad band across canada, russia (siberia), northern europe — largest terrestrial biome by area',
      '**vegetation**: coniferous trees (spruce, fir, pine, larch) — evergreen needles retain nutrients; adapted for heavy snow loads',
      '**soil**: acidic, nutrient-poor (spodosols); slow decomposition due to cold; thick layer of accumulated organic matter',
      '**key characteristic**: stores massive amounts of carbon in permafrost — a critical climate change feedback loop',
    ],
  },
  {
    type: 'subheading',
    content: '8. tundra',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**climate**: extremely cold; less than 25 cm/yr precipitation (technically a desert); very short growing season (60–90 days)',
      '**location**: arctic (arctic tundra) and high mountain peaks (alpine tundra)',
      '**vegetation**: no trees; low-growing shrubs, mosses, lichens, sedges',
      '**permafrost**: permanently frozen layer of subsoil — prevents water drainage, creating bogs and wetlands in summer',
      '**key characteristic**: thawing permafrost releases stored methane (CH₄), a powerful greenhouse gas — one of the most alarming climate change feedback loops',
    ],
  },
  {
    type: 'examtip',
    content: 'the permafrost / methane feedback loop is a MAJOR climate change topic on the exam. know: permafrost thaws → ancient organic matter decomposes → releases CH₄ and CO₂ → accelerates warming → more permafrost thaws. this is a positive feedback loop (it amplifies warming, which is bad).',
  },
  {
    type: 'heading',
    content: 'biome summary comparison table',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['biome', 'precipitation', 'temperature', 'soil quality', 'key fact'],
    tableRows: [
      ['tropical rainforest', 'highest (>200 cm)', 'hot & stable', 'poor (laterite)', 'highest biodiversity; nutrients in biomass'],
      ['tropical dry forest', '100–200 cm (seasonal)', 'warm', 'moderate', 'deciduous; wet/dry seasons'],
      ['savanna', '25–75 cm', 'warm', 'moderate', 'fire-maintained; large herbivores'],
      ['desert', '<25 cm', 'extreme variation', 'mineral-rich', 'xerophytes; CAM photosynthesis'],
      ['temperate grassland', '25–75 cm', '4 seasons', 'richest (mollisols)', 'most converted to agriculture'],
      ['temperate deciduous', '75–150 cm', '4 seasons', 'moderate', 'distinct seasonal change'],
      ['boreal (taiga)', '40–100 cm', 'cold', 'poor (spodosols)', 'largest biome; carbon store'],
      ['tundra', '<25 cm', 'coldest', 'permafrost', 'methane feedback loop risk'],
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQ tip: when asked to "explain how climate determines biome type," state that precipitation and temperature are the primary determinants, explain that they control water availability and plant growth potential, and give at least one specific biome example linking climate to vegetation to animal life. always connect back to the ecological concept being tested.',
  },
]

export default function APESU1T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 1, title: 'the living world — ecosystems' }}
      topic={{
        number: 2,
        title: 'terrestrial biomes',
        keyTerms: ['biome', 'climate', 'precipitation', 'permafrost', 'deciduous', 'coniferous', 'xerophyte', 'mollisol', 'laterite', 'taiga', 'tundra'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-1/1', title: 'intro to ecosystems' }}
      next={{ href: '/apes/unit-1/3', title: 'aquatic biomes' }}
      courseHref="/apes"
      unitHref="/apes/unit-1"
    />
  )
}
