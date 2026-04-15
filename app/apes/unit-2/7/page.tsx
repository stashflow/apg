import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are invasive species?',
  },
  {
    type: 'body',
    content: 'an invasive species is a non-native organism that spreads beyond its introduction site and causes ecological or economic harm. not all non-native (exotic) species become invasive — most introduced species fail to establish or remain limited. invasives are the subset that thrive and spread aggressively.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**native species** — originated in the area through natural processes',
      '**non-native/exotic/alien species** — introduced by human activity (intentionally or accidentally)',
      '**invasive species** — non-native species that spread and cause harm',
      '**naturalized species** — non-native species that established but don\'t spread aggressively',
    ],
  },
  {
    type: 'heading',
    content: 'characteristics of successful invaders',
  },
  {
    type: 'body',
    content: 'certain traits make species more likely to become invasive:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high reproductive rate** — r-selected traits: many offspring, early maturity, short generation time',
      '**generalist diet/habitat** — eurytolerant: can thrive in many conditions',
      '**effective dispersal** — seeds spread by wind, animals, or water; mobile adults',
      '**no natural predators** — escape from enemies that control them in native range',
      '**rapid growth** — outcompete natives for light, water, and nutrients',
      '**phenotypic plasticity** — ability to adjust to new conditions',
      '**history of invasion** — species invasive elsewhere often succeed in new locations',
    ],
  },
  {
    type: 'examtip',
    content: 'the phrase "release from natural enemies" is key to explaining why invasive species succeed. in their native range, predators, parasites, and diseases keep populations in check. in new environments, these controls are absent.',
  },
  {
    type: 'heading',
    content: 'pathways of introduction',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['pathway', 'mechanism', 'examples'],
    tableRows: [
      ['intentional release', 'deliberate introduction for perceived benefit', 'cane toads to Australia for pest control; kudzu for erosion control'],
      ['escape from cultivation', 'ornamental or agricultural species spreading', 'purple loosestrife, English ivy, escaped pets'],
      ['ballast water', 'ships take in water with organisms', 'zebra mussels, Asian shore crab'],
      ['hitchhikers', 'organisms attached to cargo, vehicles, equipment', 'brown tree snake in cargo, insects in wood products'],
      ['canals and corridors', 'human-made connections between water bodies', 'sea lamprey via Erie Canal'],
    ],
  },
  {
    type: 'heading',
    content: 'case studies you should know',
  },
  {
    type: 'subheading',
    content: 'zebra mussels (Dreissena polymorpha)',
  },
  {
    type: 'body',
    content: 'arrived in the Great Lakes via ballast water from Europe in 1988. filter-feed massive amounts of plankton, clarifying water but starving native mussels and fish. clog water intake pipes costing billions in damage. now spread throughout eastern North America via boats.',
  },
  {
    type: 'subheading',
    content: 'kudzu (Pueraria montana)',
  },
  {
    type: 'body',
    content: 'introduced from Japan in 1876 for erosion control and livestock forage. grows up to 1 foot per day in summer, smothering native vegetation and trees. now covers millions of acres in the southeastern U.S. "the vine that ate the South."',
  },
  {
    type: 'subheading',
    content: 'brown tree snake (Boiga irregularis)',
  },
  {
    type: 'body',
    content: 'arrived in Guam as a stowaway in military cargo after WWII. drove 10 of 12 native forest bird species to extinction. caused thousands of power outages by climbing power lines. example of how islands are especially vulnerable to invasives.',
  },
  {
    type: 'subheading',
    content: 'cane toad (Rhinella marina)',
  },
  {
    type: 'body',
    content: 'introduced to Australia in 1935 to control sugarcane beetles (which they didn\'t eat). highly toxic skin kills predators that try to eat them. population exploded to over 200 million, devastating native predators.',
  },
  {
    type: 'heading',
    content: 'impacts of invasive species',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**competition** — outcompete natives for food, space, light, water',
      '**predation** — consume native species not adapted to defend against them',
      '**disease transmission** — introduce new pathogens to naive populations',
      '**hybridization** — interbreed with natives, diluting genetic distinctiveness',
      '**habitat alteration** — change fire regimes, soil chemistry, water flow',
      '**economic costs** — global cost estimated at $1.4 trillion per year',
    ],
  },
  {
    type: 'heading',
    content: 'management strategies',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**prevention** — inspection, quarantine, ballast water treatment, public education (most cost-effective)',
      '**early detection and rapid response** — find and eradicate new invasions before they establish',
      '**mechanical removal** — trapping, hand-pulling, cutting (labor-intensive)',
      '**chemical control** — herbicides, pesticides (may harm non-target species)',
      '**biological control** — introduce natural enemies from native range (risky — can become invasive themselves)',
      '**ecosystem management** — restore native species and conditions that resist invasion',
    ],
  },
  {
    type: 'examtip',
    content: 'biological control is controversial because introduced control agents can themselves become invasive. the cane toad was a biological control attempt that backfired spectacularly. successful examples exist (vedalia beetle for cottony cushion scale) but risks are high.',
  },
  {
    type: 'frqtip',
    content: 'FRQs often describe an invasion scenario and ask for impacts and management strategies. be specific: name the ecological mechanism (competition, predation, etc.) and explain why natives are vulnerable (no co-evolution, release from enemies). for management, always include prevention as the best strategy.',
  },
]

export default function APESU2T7() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity' }}
      topic={{
        number: 7,
        title: 'invasive species',
        keyTerms: ['invasive species', 'non-native', 'release from enemies', 'biological control', 'zebra mussel', 'kudzu', 'cane toad'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-2/6', title: 'natural disruptions' }}
      next={{ href: '/apes/unit-2/8', title: 'endangered species & extinction' }}
      courseHref="/apes"
      unitHref="/apes/unit-2"
    />
  )
}
