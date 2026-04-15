import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are CAFOs?',
  },
  {
    type: 'body',
    content: 'Concentrated Animal Feeding Operations (CAFOs) are industrial-scale livestock facilities where animals are confined at high density for feeding and growth. most meat, dairy, and eggs in the US come from CAFOs.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**large CAFO** — 1,000+ cattle, 2,500+ hogs, 125,000+ chickens',
      '**confinement** — animals kept indoors or in feedlots, not pastures',
      '**efficiency focus** — maximize weight gain with minimum land, labor, and time',
      '**vertical integration** — often owned by large corporations (Tyson, Smithfield)',
    ],
  },
  {
    type: 'heading',
    content: 'environmental impacts',
  },
  {
    type: 'subheading',
    content: 'waste and water pollution',
  },
  {
    type: 'body',
    content: 'a large CAFO can produce more waste than a city. this waste contains:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**nitrogen and phosphorus** — causes eutrophication when it enters waterways',
      '**pathogens** — E. coli, Salmonella, parasites from animal feces',
      '**antibiotics** — 70-80% of US antibiotics used in livestock',
      '**hormones** — growth hormones pass through into waste',
      '**lagoon storage** — liquid waste stored in open pits that can leak or overflow',
    ],
  },
  {
    type: 'subheading',
    content: 'air pollution',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**ammonia (NH₃)** — from decomposing urine and feces',
      '**hydrogen sulfide (H₂S)** — toxic gas from anaerobic decomposition',
      '**methane (CH₄)** — powerful greenhouse gas from enteric fermentation and manure',
      '**particulate matter** — dust, dander, dried feces',
      '**odor** — CAFOs can be smelled miles away',
    ],
  },
  {
    type: 'subheading',
    content: 'climate impact',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**livestock = 14.5% of global GHG emissions** (FAO estimate)',
      '**methane** — cattle produce 70-120 kg CH₄/year each through digestion',
      '**nitrous oxide** — from manure and fertilizer for feed crops',
      '**land use change** — deforestation for grazing and feed crops',
    ],
  },
  {
    type: 'heading',
    content: 'resource inefficiency',
  },
  {
    type: 'body',
    content: 'the ecological efficiency of meat production is very low due to the 10% rule:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**beef** — 25 kg of feed to produce 1 kg of beef (4% efficiency)',
      '**pork** — 9 kg of feed per kg of meat (11% efficiency)',
      '**chicken** — 4.5 kg of feed per kg of meat (22% efficiency)',
      '**water use** — 15,000 liters of water per kg of beef vs 1,500 for grain',
      '**land use** — 70% of agricultural land used for livestock (grazing + feed)',
    ],
  },
  {
    type: 'examtip',
    content: 'energy efficiency decreases at higher trophic levels. this is why eating lower on the food chain (plants, or chicken instead of beef) is more environmentally sustainable. the AP exam frequently asks about this tradeoff.',
  },
  {
    type: 'heading',
    content: 'other concerns',
  },
  {
    type: 'subheading',
    content: 'antibiotic resistance',
  },
  {
    type: 'body',
    content: 'CAFOs use antibiotics to prevent disease (crowded conditions spread illness) and promote growth. this creates antibiotic-resistant bacteria that can spread to humans.',
  },
  {
    type: 'subheading',
    content: 'disease emergence',
  },
  {
    type: 'body',
    content: 'high-density animal operations are breeding grounds for diseases that can jump to humans (zoonotic diseases). examples: swine flu (H1N1), avian flu (H5N1).',
  },
  {
    type: 'subheading',
    content: 'environmental justice',
  },
  {
    type: 'body',
    content: 'CAFOs are disproportionately located near low-income and minority communities, who bear the health and environmental burdens.',
  },
  {
    type: 'heading',
    content: 'sustainable alternatives',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**pasture-raised/grass-fed** — animals raised on pasture rather than feedlots',
      '**rotational grazing** — moving animals to prevent overgrazing, builds soil',
      '**smaller-scale operations** — waste can be composted and applied as fertilizer',
      '**reduced consumption** — eating less meat, especially beef, reduces demand',
      '**plant-based proteins** — legumes, soy, and alternative proteins',
      '**lab-grown meat** — cultured meat from animal cells (emerging technology)',
    ],
  },
  {
    type: 'frqtip',
    content: 'CAFOs often appear in FRQs. know: (1) what they are, (2) water pollution from waste lagoons/runoff, (3) air pollution (NH₃, CH₄), (4) climate impacts, (5) inefficiency (10% rule), and (6) at least two alternatives.',
  },
]

export default function APESU5T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 4,
        title: 'meat production & CAFOs',
        keyTerms: ['CAFO', 'feedlot', 'waste lagoon', 'eutrophication', 'methane', 'antibiotic resistance', 'trophic efficiency'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/3', title: 'pest control methods' }}
      next={{ href: '/apes/unit-5/5', title: 'aquaculture' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
