import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is species diversity?',
  },
  {
    type: 'body',
    content: 'species diversity measures the variety of species in a given area. it has two components: species richness (the number of different species) and species evenness (how evenly individuals are distributed among species). an ecosystem can have high richness but low evenness if most individuals belong to just a few species.',
  },
  {
    type: 'subheading',
    content: 'species richness',
  },
  {
    type: 'body',
    content: 'the simplest measure of biodiversity — just count the number of species present. a tropical rainforest with 500 tree species has higher richness than a temperate forest with 50 tree species. however, richness alone doesn\'t tell the whole story.',
  },
  {
    type: 'subheading',
    content: 'species evenness',
  },
  {
    type: 'body',
    content: 'evenness measures how equally individuals are distributed among species. compare two forests, each with 100 trees and 10 species. forest A has 10 trees of each species (high evenness). forest B has 91 trees of one species and 1 tree each of the other 9 (low evenness). forest A is considered more diverse even though richness is identical.',
  },
  {
    type: 'examtip',
    content: 'the AP exam often gives you data and asks whether richness or evenness changed. if the number of species stayed the same but the distribution changed, that\'s an evenness change. if species were added or removed, that\'s a richness change.',
  },
  {
    type: 'heading',
    content: 'measuring species diversity',
  },
  {
    type: 'body',
    content: 'ecologists use diversity indices to combine richness and evenness into a single number. you should know these for the AP exam:',
  },
  {
    type: 'subheading',
    content: 'simpson\'s diversity index',
  },
  {
    type: 'body',
    content: 'measures the probability that two randomly selected individuals belong to different species. ranges from 0 to 1, where higher values indicate greater diversity. the formula is: D = 1 - Σ(nᵢ/N)², where nᵢ is the number of individuals of species i, and N is the total number of individuals.',
  },
  {
    type: 'subheading',
    content: 'shannon-wiener index',
  },
  {
    type: 'body',
    content: 'accounts for both richness and evenness using information theory. typically ranges from 1.5 to 3.5, with higher values indicating greater diversity. more sensitive to rare species than Simpson\'s index.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['index', 'formula', 'range', 'interpretation'],
    tableRows: [
      ['simpson\'s (D)', '1 - Σ(nᵢ/N)²', '0 to 1', '0 = no diversity, 1 = infinite diversity'],
      ['shannon-wiener (H)', '-Σ(pᵢ × ln pᵢ)', '0 to ~4.5', 'higher = more diverse; most ecosystems 1.5-3.5'],
    ],
  },
  {
    type: 'examtip',
    content: 'you won\'t need to calculate these indices on the AP exam, but you should understand what they measure and be able to interpret which ecosystem is more diverse given index values.',
  },
  {
    type: 'heading',
    content: 'types of species diversity',
  },
  {
    type: 'body',
    content: 'ecologists distinguish between diversity at different spatial scales:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**alpha diversity** — species diversity within a single habitat or community. "how many species are in this forest patch?"',
      '**beta diversity** — the difference in species composition between habitats. "how different are the species in the forest vs. the meadow?"',
      '**gamma diversity** — total species diversity across all habitats in a region. "how many species are in this entire landscape?"',
    ],
  },
  {
    type: 'body',
    content: 'gamma diversity = alpha diversity × beta diversity (roughly). a landscape can have high gamma diversity either through high alpha diversity (each habitat has many species) or high beta diversity (habitats have very different species).',
  },
  {
    type: 'heading',
    content: 'why species diversity matters',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**ecosystem stability** — diverse ecosystems are more resistant and resilient to disturbances (insurance hypothesis)',
      '**productivity** — diverse plant communities often produce more biomass than monocultures',
      '**ecosystem services** — more species means more services (pollination, pest control, decomposition)',
      '**future resources** — species we haven\'t yet studied may provide medicines, crops, or materials',
      '**intrinsic value** — many argue species have value regardless of human use',
    ],
  },
  {
    type: 'heading',
    content: 'global patterns in species diversity',
  },
  {
    type: 'body',
    content: 'species diversity is not evenly distributed across Earth. several patterns emerge:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**latitudinal gradient** — diversity increases from poles to equator. tropical rainforests have the highest species diversity of any terrestrial ecosystem.',
      '**elevation gradient** — diversity generally decreases with increasing elevation, similar to the latitudinal pattern.',
      '**depth gradient** — in oceans, diversity peaks at intermediate depths on continental shelves.',
      '**area effect** — larger areas support more species (species-area relationship: S = cAᶻ)',
      '**habitat heterogeneity** — more varied habitats support more species with different niches.',
    ],
  },
  {
    type: 'examtip',
    content: 'the latitudinal diversity gradient is heavily tested. tropical regions have more species because: (1) more solar energy = more productivity, (2) stable climate = less extinction, (3) more time for speciation (no ice ages), (4) more habitat heterogeneity.',
  },
  {
    type: 'frqtip',
    content: 'FRQs often provide data on species counts in two areas and ask you to compare diversity. remember to consider both richness AND evenness. also be ready to explain why one ecosystem might naturally have higher diversity than another (latitude, area, heterogeneity).',
  },
]

export default function APESU2T3() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity' }}
      topic={{
        number: 3,
        title: 'species diversity',
        keyTerms: ['species richness', 'species evenness', 'simpson\'s index', 'alpha diversity', 'beta diversity', 'gamma diversity', 'latitudinal gradient'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-2/2', title: 'ecosystem services' }}
      next={{ href: '/apes/unit-2/4', title: 'island biogeography' }}
      courseHref="/apes"
      unitHref="/apes/unit-2"
    />
  )
}
