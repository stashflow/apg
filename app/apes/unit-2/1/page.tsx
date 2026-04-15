import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is ecosystem diversity?',
  },
  {
    type: 'body',
    content: 'ecosystem diversity refers to the variety of ecosystems found within a larger geographic area. it is one of the three levels of biodiversity (along with species diversity and genetic diversity). a region with many different ecosystem types — forests, wetlands, grasslands, coral reefs — has high ecosystem diversity, which supports more species and provides more ecosystem services.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**ecosystem** — a community of organisms interacting with their abiotic environment (temperature, water, soil, sunlight).',
      '**biome** — a large-scale ecosystem defined by climate and dominant vegetation type (e.g., tropical rainforest, tundra, desert).',
      '**ecoregion** — a geographically distinct area with characteristic species, communities, and environmental conditions.',
      '**biodiversity hotspot** — a region with exceptionally high species diversity and significant habitat loss (must have ≥1,500 endemic plant species and lost ≥70% of original habitat).',
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam distinguishes between the three levels of biodiversity: ecosystem diversity (variety of habitats), species diversity (variety of species), and genetic diversity (variety of genes within a species). know examples and why each level matters.',
  },
  {
    type: 'heading',
    content: 'why ecosystem diversity matters',
  },
  {
    type: 'body',
    content: 'high ecosystem diversity provides insurance against environmental change. if one ecosystem is damaged, others can continue to support species and provide services. diverse landscapes also support more species overall because different organisms have different habitat requirements.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**resilience** — diverse ecosystems recover faster from disturbances like fires, floods, or droughts.',
      '**redundancy** — multiple ecosystems can provide similar services, so losing one doesn\'t eliminate the service entirely.',
      '**niche availability** — more ecosystem types means more niches for species to occupy, supporting higher species diversity.',
      '**ecosystem services** — different ecosystems provide different services (forests store carbon, wetlands filter water, grasslands support pollinators).',
    ],
  },
  {
    type: 'heading',
    content: 'measuring ecosystem diversity',
  },
  {
    type: 'body',
    content: 'ecosystem diversity is harder to quantify than species diversity because ecosystems don\'t have clear boundaries. scientists use several approaches:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat mapping** — using satellite imagery and GIS to classify and count distinct ecosystem types in a region.',
      '**landscape metrics** — measuring patch size, edge length, connectivity, and fragmentation of different habitat types.',
      '**beta diversity** — comparing species composition between different sites to assess how distinct ecosystems are from each other.',
      '**functional diversity** — assessing the variety of ecological functions performed across a landscape.',
    ],
  },
  {
    type: 'heading',
    content: 'threats to ecosystem diversity',
  },
  {
    type: 'body',
    content: 'human activities are reducing ecosystem diversity worldwide by converting natural habitats to agriculture, urban areas, and monoculture plantations.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['threat', 'mechanism', 'example'],
    tableRows: [
      ['habitat conversion', 'natural ecosystems replaced by human land uses', 'rainforest cleared for palm oil plantations'],
      ['fragmentation', 'continuous habitats broken into isolated patches', 'roads and development dividing forests'],
      ['homogenization', 'diverse ecosystems replaced with uniform ones', 'diverse prairies converted to corn monocultures'],
      ['climate change', 'shifting conditions alter ecosystem boundaries', 'warming temperatures push alpine meadows higher'],
      ['pollution', 'degradation makes ecosystems more similar', 'acid rain damages diverse forests uniformly'],
    ],
  },
  {
    type: 'examtip',
    content: 'habitat fragmentation is a major topic in APES. know that it reduces ecosystem diversity by creating isolated patches that can\'t support species requiring large ranges, increases edge effects, and blocks wildlife corridors.',
  },
  {
    type: 'heading',
    content: 'conservation of ecosystem diversity',
  },
  {
    type: 'body',
    content: 'protecting ecosystem diversity requires landscape-level planning that preserves multiple ecosystem types and maintains connectivity between them.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**protected area networks** — systems of parks and reserves that represent all major ecosystem types in a region.',
      '**wildlife corridors** — strips of natural habitat connecting isolated patches, allowing species movement and gene flow.',
      '**buffer zones** — transitional areas around core protected areas that reduce edge effects and human impacts.',
      '**restoration ecology** — actively restoring degraded ecosystems to increase diversity across the landscape.',
      '**ecosystem-based management** — managing human activities to maintain ecosystem structure and function, not just individual species.',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs often ask you to propose conservation strategies for a region. always mention protecting multiple ecosystem types, maintaining connectivity, and considering both species and ecosystem-level approaches. specific examples strengthen your answer.',
  },
]

export default function APESU2T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity' }}
      topic={{
        number: 1,
        title: 'ecosystem diversity',
        keyTerms: ['ecosystem diversity', 'biome', 'ecoregion', 'biodiversity hotspot', 'resilience', 'fragmentation', 'wildlife corridor'],
      }}
      sections={sections}
      next={{ href: '/apes/unit-2/2', title: 'ecosystem services' }}
      courseHref="/apes"
      unitHref="/apes/unit-2"
    />
  )
}
