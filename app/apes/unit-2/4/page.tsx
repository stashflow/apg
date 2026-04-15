import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'the theory of island biogeography',
  },
  {
    type: 'body',
    content: 'developed by Robert MacArthur and E.O. Wilson in 1967, island biogeography theory explains how the number of species on an island reaches equilibrium based on island size and distance from the mainland. this theory is crucial for conservation biology because habitat fragments act like "islands" in a sea of human-modified landscape.',
  },
  {
    type: 'heading',
    content: 'two key factors',
  },
  {
    type: 'subheading',
    content: 'immigration rate',
  },
  {
    type: 'body',
    content: 'the rate at which new species arrive on an island depends primarily on distance from the source population (mainland or other islands). islands close to the mainland have high immigration rates; remote islands have low immigration rates. as species accumulate, the immigration rate decreases because fewer new species remain that haven\'t already arrived.',
  },
  {
    type: 'subheading',
    content: 'extinction rate',
  },
  {
    type: 'body',
    content: 'the rate at which species go locally extinct depends primarily on island size. small islands have high extinction rates because populations are small and vulnerable. large islands have low extinction rates because they can support larger, more stable populations. as more species accumulate, competition increases and extinction rate rises.',
  },
  {
    type: 'heading',
    content: 'equilibrium species number',
  },
  {
    type: 'body',
    content: 'the number of species on an island reaches equilibrium where immigration rate equals extinction rate. this doesn\'t mean species composition is static — species continue to arrive and go extinct, but the total number stays roughly constant (species turnover).',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['island type', 'immigration', 'extinction', 'equilibrium species'],
    tableRows: [
      ['large, near mainland', 'high', 'low', 'highest'],
      ['large, far from mainland', 'low', 'low', 'intermediate'],
      ['small, near mainland', 'high', 'high', 'intermediate'],
      ['small, far from mainland', 'low', 'high', 'lowest'],
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam loves to ask which island will have the most species. remember: LARGE + NEAR = MOST SPECIES. size affects extinction rate; distance affects immigration rate. both matter, but size often has a stronger effect.',
  },
  {
    type: 'heading',
    content: 'the species-area relationship',
  },
  {
    type: 'body',
    content: 'one of the most consistent patterns in ecology: larger areas support more species. the relationship is described by the equation S = cAᶻ, where S is species number, A is area, c is a constant, and z is typically 0.2-0.35. this means doubling the area increases species by about 15-25%.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat diversity** — larger areas contain more habitat types and niches',
      '**population size** — larger areas support larger populations less prone to extinction',
      '**sampling effect** — larger areas are more likely to include rare species',
      '**speciation** — larger areas may allow more speciation over evolutionary time',
    ],
  },
  {
    type: 'heading',
    content: 'application to habitat fragmentation',
  },
  {
    type: 'body',
    content: 'island biogeography theory revolutionized conservation by showing that habitat fragments behave like islands. when we break a continuous forest into isolated patches, each patch loses species according to its new, smaller "island" size and distance from other patches.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat fragments** — remnant patches of natural habitat surrounded by human-modified landscape',
      '**edge effects** — altered conditions at fragment edges (more light, wind, invasive species) effectively shrink the interior habitat',
      '**isolation** — fragments far from other natural areas receive fewer immigrants to rescue declining populations',
      '**extinction debt** — species may persist temporarily but are doomed to eventual extinction in fragments too small to support them',
    ],
  },
  {
    type: 'examtip',
    content: 'extinction debt is an important concept: after habitat loss, not all species go extinct immediately. some persist for years or decades before their small populations finally die out. this means current species counts may overestimate long-term diversity.',
  },
  {
    type: 'heading',
    content: 'conservation implications',
  },
  {
    type: 'body',
    content: 'island biogeography provides principles for designing nature reserves:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**larger is better** — a single large reserve supports more species than several small ones of equal total area (SLOSS debate)',
      '**connected is better** — wildlife corridors linking fragments allow immigration and gene flow',
      '**closer is better** — reserves near other natural areas receive more immigrants',
      '**round is better** — circular reserves minimize edge effects compared to elongated shapes',
      '**buffer zones help** — transitional areas around core reserves reduce edge effects',
    ],
  },
  {
    type: 'subheading',
    content: 'the SLOSS debate',
  },
  {
    type: 'body',
    content: '"Single Large Or Several Small" — should we protect one big reserve or multiple small ones? island biogeography suggests one large reserve is better for species requiring large areas. however, multiple small reserves may capture more habitat types and protect against catastrophic events affecting one area. most ecologists now favor networks of reserves connected by corridors.',
  },
  {
    type: 'frqtip',
    content: 'FRQs may describe a landscape and ask you to predict species richness in different habitat patches, or propose reserve design. use island biogeography: mention size, distance, connectivity, and edge effects. explain WHY each factor matters (larger = lower extinction, closer = higher immigration).',
  },
]

export default function APESU2T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity' }}
      topic={{
        number: 4,
        title: 'island biogeography',
        keyTerms: ['immigration rate', 'extinction rate', 'equilibrium', 'species-area relationship', 'habitat fragmentation', 'edge effects', 'extinction debt', 'SLOSS'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-2/3', title: 'species diversity' }}
      next={{ href: '/apes/unit-2/5', title: 'ecological tolerance' }}
      courseHref="/apes"
      unitHref="/apes/unit-2"
    />
  )
}
