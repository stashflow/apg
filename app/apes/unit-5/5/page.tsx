import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is aquaculture?',
  },
  {
    type: 'body',
    content: 'aquaculture is the farming of aquatic organisms — fish, shellfish, seaweed, and other species — in controlled environments. it\'s the fastest-growing food production sector, now providing over half of all seafood consumed globally.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**mariculture** — aquaculture in marine (saltwater) environments',
      '**freshwater aquaculture** — ponds, tanks, and cages in lakes/rivers',
      '**top species** — salmon, tilapia, catfish, shrimp, carp, oysters, mussels',
      '**China** — produces over 60% of the world\'s farmed fish',
    ],
  },
  {
    type: 'heading',
    content: 'why aquaculture?',
  },
  {
    type: 'body',
    content: 'wild fisheries are in crisis — 90% of fish stocks are fully exploited or overfished. aquaculture offers a way to meet growing seafood demand without further depleting wild populations.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**wild fishery collapse** — Grand Banks cod, Bluefin tuna, many others in decline',
      '**growing demand** — global seafood consumption has doubled since 1960',
      '**protein efficiency** — fish convert feed to protein more efficiently than land animals',
      '**health benefits** — fish are a lean protein source with omega-3 fatty acids',
    ],
  },
  {
    type: 'heading',
    content: 'environmental benefits',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**reduces pressure on wild fisheries** — farmed fish can replace wild-caught',
      '**efficient feed conversion** — 1.5 kg feed per kg of fish (vs 7+ for beef)',
      '**low carbon footprint** — fish don\'t produce methane',
      '**shellfish filter water** — oysters and mussels remove nutrients and improve water quality',
      '**seaweed absorbs CO₂** — seaweed farming is carbon-negative',
    ],
  },
  {
    type: 'heading',
    content: 'environmental problems',
  },
  {
    type: 'subheading',
    content: 'water pollution',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**nutrient loading** — fish waste (feces, uneaten feed) causes eutrophication',
      '**antibiotics and chemicals** — used to control disease in crowded pens',
      '**concentrated waste** — fish farms can produce as much waste as small cities',
    ],
  },
  {
    type: 'subheading',
    content: 'escapees and invasive species',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**genetic pollution** — farmed fish escaping and breeding with wild populations',
      '**disease transmission** — farmed fish can spread parasites (sea lice) and diseases to wild fish',
      '**Atlantic salmon** — escapees compete with and interbreed with native Pacific salmon',
    ],
  },
  {
    type: 'subheading',
    content: 'habitat destruction',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**mangrove destruction** — shrimp farms often built by clearing mangrove forests',
      '**coastal ecosystem loss** — mangroves provide nursery habitat, storm protection, carbon storage',
      '**Southeast Asia** — over 50% of mangroves destroyed, largely for aquaculture',
    ],
  },
  {
    type: 'subheading',
    content: 'feed sustainability',
  },
  {
    type: 'body',
    content: 'carnivorous farmed fish (salmon, tuna, shrimp) are fed fishmeal and fish oil made from wild-caught fish. this can worsen pressure on wild fisheries:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**FIFO ratio** — fish in / fish out: how many kg of wild fish to produce 1 kg of farmed fish',
      '**salmon FIFO** — historically 3-5 kg wild fish per kg farmed salmon',
      '**"farming down the food web"** — harvesting small fish for feed depletes forage fish populations',
      '**improvements** — plant-based and insect-based feeds reduce FIFO ratios',
    ],
  },
  {
    type: 'examtip',
    content: 'know the mangrove connection: shrimp farming is a leading cause of mangrove loss, especially in Southeast Asia. mangroves are critical for: (1) fish nurseries, (2) coastal protection, (3) carbon storage. this is a common FRQ topic.',
  },
  {
    type: 'heading',
    content: 'sustainable aquaculture practices',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**recirculating aquaculture systems (RAS)** — closed-loop systems that filter and reuse water',
      '**offshore farming** — deep-water pens with better water circulation',
      '**polyculture** — growing multiple species together (fish + shellfish + seaweed)',
      '**herbivorous species** — tilapia, carp, and catfish don\'t require fish-based feed',
      '**shellfish and seaweed farming** — no feed needed, actually improves water quality',
      '**certification programs** — Aquaculture Stewardship Council, Best Aquaculture Practices',
    ],
  },
  {
    type: 'frqtip',
    content: 'aquaculture FRQs ask about pros and cons. pros: relieves pressure on wild fisheries, efficient protein. cons: pollution, escapees, habitat destruction (mangroves), feed from wild fish. always mention sustainable alternatives.',
  },
]

export default function APESU5T5() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 5,
        title: 'aquaculture',
        keyTerms: ['mariculture', 'fishmeal', 'FIFO ratio', 'sea lice', 'mangrove', 'polyculture', 'RAS'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/4', title: 'meat production & CAFOs' }}
      next={{ href: '/apes/unit-5/6', title: 'sustainable agriculture' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
