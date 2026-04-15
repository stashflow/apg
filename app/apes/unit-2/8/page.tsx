import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'understanding extinction',
  },
  {
    type: 'body',
    content: 'extinction is the complete disappearance of a species — when the last individual dies. extinction is natural and has occurred throughout Earth\'s history, but current extinction rates are 100-1,000 times higher than the natural background rate due to human activities. we are in what scientists call the sixth mass extinction.',
  },
  {
    type: 'subheading',
    content: 'types of extinction',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**background extinction** — the normal rate of species loss over geological time (about 1-5 species per year for most of history)',
      '**mass extinction** — rapid loss of >75% of species in a geologically short time (five previous events; we may be in the sixth)',
      '**local extinction (extirpation)** — species disappears from one area but survives elsewhere',
      '**ecological extinction** — species so rare it no longer fulfills its ecological role',
      '**functional extinction** — too few individuals remain for population recovery (effectively extinct)',
    ],
  },
  {
    type: 'heading',
    content: 'causes of extinction — HIPPCO',
  },
  {
    type: 'body',
    content: 'the six major causes of species extinction can be remembered with the acronym HIPPCO:',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['cause', 'mechanism', 'example'],
    tableRows: [
      ['H — Habitat loss', 'destruction, degradation, fragmentation', 'deforestation for agriculture, wetland drainage'],
      ['I — Invasive species', 'competition, predation, disease', 'brown tree snake in Guam, chytrid fungus'],
      ['P — Population growth', 'more humans = more pressure on all factors', 'increased demand drives all other causes'],
      ['P — Pollution', 'toxic chemicals, nutrient loading', 'DDT thinning bird eggshells, acid rain'],
      ['C — Climate change', 'temperature shifts, extreme weather', 'coral bleaching, range shifts, phenology mismatch'],
      ['O — Overexploitation', 'hunting, fishing, collecting beyond sustainable levels', 'passenger pigeon, bluefin tuna, elephant ivory'],
    ],
  },
  {
    type: 'examtip',
    content: 'habitat loss is the #1 cause of species endangerment and extinction. climate change is rising rapidly as a threat. know that multiple causes often interact — habitat fragments make populations vulnerable to other threats.',
  },
  {
    type: 'heading',
    content: 'IUCN Red List categories',
  },
  {
    type: 'body',
    content: 'the International Union for Conservation of Nature (IUCN) maintains the Red List of Threatened Species, the most comprehensive database of species extinction risk:',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['category', 'abbreviation', 'meaning'],
    tableRows: [
      ['Least Concern', 'LC', 'low risk of extinction'],
      ['Near Threatened', 'NT', 'close to qualifying as threatened'],
      ['Vulnerable', 'VU', 'high risk of extinction in the wild'],
      ['Endangered', 'EN', 'very high risk of extinction'],
      ['Critically Endangered', 'CR', 'extremely high risk of extinction'],
      ['Extinct in the Wild', 'EW', 'survives only in captivity'],
      ['Extinct', 'EX', 'no individuals remain anywhere'],
    ],
  },
  {
    type: 'body',
    content: '"threatened" is an umbrella term that includes Vulnerable, Endangered, and Critically Endangered. as of 2023, over 42,000 species are threatened with extinction.',
  },
  {
    type: 'heading',
    content: 'the Endangered Species Act (ESA)',
  },
  {
    type: 'body',
    content: 'the Endangered Species Act (1973) is the primary U.S. law protecting species at risk of extinction. it is one of the strongest environmental laws in the world.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**listing process** — species are listed as Endangered or Threatened based on scientific review',
      '**critical habitat** — areas essential for species survival must be designated and protected',
      '**take prohibition** — illegal to harass, harm, pursue, hunt, shoot, wound, kill, trap, capture, or collect listed species',
      '**recovery plans** — required for all listed species, outlining actions needed for recovery',
      '**Section 7** — federal agencies must consult with USFWS to avoid jeopardizing listed species',
      '**Habitat Conservation Plans** — allow some "incidental take" in exchange for conservation commitments',
    ],
  },
  {
    type: 'examtip',
    content: 'know the difference between IUCN categories (international, scientific assessment) and ESA listings (U.S. law, legal protections). a species can be IUCN Endangered but not ESA listed, or vice versa.',
  },
  {
    type: 'heading',
    content: 'conservation strategies',
  },
  {
    type: 'subheading',
    content: 'in-situ conservation',
  },
  {
    type: 'body',
    content: 'protecting species in their natural habitat — generally preferred because it maintains ecological relationships and evolutionary processes.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**protected areas** — national parks, wildlife refuges, marine reserves',
      '**habitat restoration** — returning degraded ecosystems to functional condition',
      '**corridor creation** — connecting isolated habitat patches',
      '**sustainable use** — harvesting at levels populations can sustain',
    ],
  },
  {
    type: 'subheading',
    content: 'ex-situ conservation',
  },
  {
    type: 'body',
    content: 'protecting species outside their natural habitat — a last resort when wild populations are critically low.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**captive breeding** — breeding programs in zoos to increase population size',
      '**seed banks** — storing seeds for future restoration (Svalbard Global Seed Vault)',
      '**genetic banking** — freezing sperm, eggs, embryos, and tissue samples',
      '**reintroduction** — releasing captive-bred individuals into the wild (wolves in Yellowstone, California condors)',
    ],
  },
  {
    type: 'heading',
    content: 'CITES',
  },
  {
    type: 'body',
    content: 'the Convention on International Trade in Endangered Species (CITES) is an international agreement regulating trade in wildlife and wildlife products. it protects over 38,000 species through three appendices of increasing restriction (Appendix I = most protected, trade banned; Appendix II = regulated trade; Appendix III = country-specific).',
  },
  {
    type: 'frqtip',
    content: 'FRQs often ask you to explain why a species is endangered (use HIPPCO) and propose conservation strategies. include both in-situ and ex-situ approaches. mention specific laws (ESA, CITES) and explain how they address the threats you identified.',
  },
]

export default function APESU2T8() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity' }}
      topic={{
        number: 8,
        title: 'endangered species & extinction',
        keyTerms: ['extinction', 'HIPPCO', 'IUCN Red List', 'Endangered Species Act', 'critical habitat', 'captive breeding', 'CITES'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-2/7', title: 'invasive species' }}
      courseHref="/apes"
      unitHref="/apes/unit-2"
    />
  )
}
