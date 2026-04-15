import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'why do we control pests?',
  },
  {
    type: 'body',
    content: 'pests — insects, weeds, rodents, fungi, and other organisms — compete with humans for food and resources. globally, pests destroy about 40% of crops before harvest. pest control aims to reduce these losses, but different methods have vastly different environmental impacts.',
  },
  {
    type: 'heading',
    content: 'chemical pest control (pesticides)',
  },
  {
    type: 'body',
    content: 'pesticides are chemicals designed to kill or repel pests. they\'re the dominant method in industrial agriculture.',
  },
  {
    type: 'subheading',
    content: 'types of pesticides',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**insecticides** — kill insects (organophosphates, neonicotinoids, pyrethroids)',
      '**herbicides** — kill plants/weeds (glyphosate/Roundup, atrazine, 2,4-D)',
      '**fungicides** — kill fungi (copper sulfate, chlorothalonil)',
      '**rodenticides** — kill rodents (warfarin, brodifacoum)',
    ],
  },
  {
    type: 'subheading',
    content: 'broad-spectrum vs narrow-spectrum',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**broad-spectrum** — kill many species (effective but kill beneficial organisms too)',
      '**narrow-spectrum** — target specific pests (more precise but may not control all pests)',
    ],
  },
  {
    type: 'subheading',
    content: 'problems with pesticides',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**pesticide resistance** — pests evolve resistance through natural selection (pesticide treadmill)',
      '**bioaccumulation** — pesticides concentrate in organisms over time',
      '**biomagnification** — concentrations increase up the food chain (DDT → birds)',
      '**non-target species** — pollinators, birds, fish, beneficial insects killed',
      '**human health** — farmworkers exposed; residues on food; endocrine disruptors',
      '**water contamination** — runoff pollutes streams and groundwater',
    ],
  },
  {
    type: 'examtip',
    content: 'DDT is the classic example: it nearly drove bald eagles to extinction through biomagnification (thinned eggshells). banned in US 1972, still used for malaria control in some countries. Rachel Carson\'s Silent Spring (1962) documented DDT\'s impacts.',
  },
  {
    type: 'heading',
    content: 'biological pest control',
  },
  {
    type: 'body',
    content: 'using natural predators, parasites, or pathogens to control pest populations.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**predators** — ladybugs eat aphids; cats eat mice',
      '**parasites** — parasitic wasps lay eggs in caterpillars',
      '**pathogens** — Bt (Bacillus thuringiensis) bacteria kill insect larvae',
      '**advantages** — no chemical residues, self-sustaining, species-specific',
      '**risks** — introduced species may become invasive (cane toads in Australia)',
    ],
  },
  {
    type: 'heading',
    content: 'genetic pest control',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Bt crops** — plants engineered to produce Bt toxin, killing insects that eat them',
      '**sterile insect technique** — release sterile males to mate with wild females (screwworm eradication)',
      '**gene drives** — spread genes through populations (experimental, controversial)',
      '**concerns** — evolution of resistance, ecological effects, corporate control of seeds',
    ],
  },
  {
    type: 'heading',
    content: 'cultural and mechanical controls',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**crop rotation** — break pest life cycles by changing crops each season',
      '**intercropping** — mix crops to confuse pests and provide habitat for predators',
      '**cover crops** — plants that suppress weeds and improve soil',
      '**tillage** — mechanical destruction of weeds and pest habitat',
      '**physical barriers** — nets, fences, row covers',
      '**traps** — pheromone traps, sticky traps, light traps',
    ],
  },
  {
    type: 'heading',
    content: 'integrated pest management (IPM)',
  },
  {
    type: 'body',
    content: 'IPM combines multiple methods to minimize pesticide use while maintaining effective pest control. it\'s the most sustainable approach.',
  },
  {
    type: 'subheading',
    content: 'IPM steps',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**1. monitor** — scout fields regularly, identify pest species and numbers',
      '**2. set thresholds** — determine when pest levels justify action (not at first sight)',
      '**3. prevent** — use cultural practices to reduce pest pressure',
      '**4. biological control** — release predators or use pathogens first',
      '**5. chemical control last** — use targeted, narrow-spectrum pesticides only when necessary',
    ],
  },
  {
    type: 'examtip',
    content: 'IPM is the AP-preferred answer for "how to reduce pesticide use." know the steps: monitor → thresholds → prevent → biological → chemical (last resort). emphasize that it\'s a decision-making process, not just using less pesticide.',
  },
  {
    type: 'frqtip',
    content: 'common FRQ: describe environmental problems with pesticides and propose alternatives. always mention: resistance, bioaccumulation/biomagnification, non-target species, and water pollution. then explain IPM with specific steps.',
  },
]

export default function APESU5T3() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 3,
        title: 'pest control methods',
        keyTerms: ['pesticide', 'insecticide', 'herbicide', 'bioaccumulation', 'biomagnification', 'IPM', 'Bt crops', 'resistance'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/2', title: 'green revolution' }}
      next={{ href: '/apes/unit-5/4', title: 'meat production & CAFOs' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
