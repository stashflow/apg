import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is the tragedy of the commons?',
  },
  {
    type: 'body',
    content: 'the tragedy of the commons describes how shared resources get overexploited when individuals act in their own self-interest. coined by Garrett Hardin in 1968, it explains why rational individual behavior leads to collective disaster.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**commons** — shared resources accessible to all (oceans, atmosphere, public land, groundwater)',
      '**the tragedy** — each user benefits fully from exploitation but shares the cost of depletion with everyone',
      '**rational self-interest** — it makes sense for each individual to take more, even though everyone loses when all do',
      '**negative externalities** — costs of overuse are passed to the community, not the individual',
    ],
  },
  {
    type: 'heading',
    content: 'classic example: the grazing commons',
  },
  {
    type: 'body',
    content: 'imagine a shared pasture (the "commons") where multiple herders graze cattle:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**each herder gains** — adding one more cow means more profit for that individual',
      '**costs are shared** — overgrazing affects all herders equally',
      '**rational choice** — each herder adds cows because benefits > personal costs',
      '**collective disaster** — the pasture is destroyed, and everyone loses',
    ],
  },
  {
    type: 'heading',
    content: 'modern examples of the commons',
  },
  {
    type: 'subheading',
    content: 'ocean fisheries',
  },
  {
    type: 'body',
    content: 'international waters belong to no one, so fishing fleets maximize catch. result: 90% of large fish populations depleted, fisheries collapsing worldwide (cod in the Grand Banks, bluefin tuna in the Atlantic).',
  },
  {
    type: 'subheading',
    content: 'the atmosphere',
  },
  {
    type: 'body',
    content: 'CO₂ emissions benefit the polluter (cheap energy) while costs (climate change) are shared globally. no single country bears the full cost of its pollution, so emissions continue.',
  },
  {
    type: 'subheading',
    content: 'groundwater (aquifers)',
  },
  {
    type: 'body',
    content: 'farmers pumping from shared aquifers have no incentive to conserve — water saved by one farmer gets pumped by another. the Ogallala Aquifer in the US Great Plains is being depleted 3-10x faster than recharge.',
  },
  {
    type: 'subheading',
    content: 'deforestation',
  },
  {
    type: 'body',
    content: 'rainforests provide global ecosystem services (carbon storage, biodiversity, rainfall), but clearing benefits the local farmer or company. the Amazon shrinks because local profit > global cost.',
  },
  {
    type: 'examtip',
    content: 'the tragedy of the commons applies when: (1) the resource is shared/open-access, (2) users act independently, and (3) there\'s no regulation. if any condition is missing, it\'s not a true commons problem.',
  },
  {
    type: 'heading',
    content: 'solutions to the tragedy',
  },
  {
    type: 'subheading',
    content: '1. privatization',
  },
  {
    type: 'body',
    content: 'divide the commons into private property. owners have incentive to maintain their portion because they bear the full cost of degradation.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**example** — individual transferable quotas (ITQs) in fisheries give fishers ownership of a share of the catch',
      '**limitation** — some resources can\'t be privatized (atmosphere, migratory species, oceans)',
    ],
  },
  {
    type: 'subheading',
    content: '2. government regulation',
  },
  {
    type: 'body',
    content: 'external authority sets and enforces limits on resource use.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**examples** — fishing quotas, hunting licenses, cap-and-trade for emissions, protected areas',
      '**limitation** — requires enforcement, political will, and may not work across borders',
    ],
  },
  {
    type: 'subheading',
    content: '3. community management',
  },
  {
    type: 'body',
    content: 'Elinor Ostrom (Nobel Prize 2009) showed that communities can self-regulate commons without privatization or government intervention.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**conditions for success** — clear boundaries, local rules, monitoring, graduated sanctions, conflict resolution',
      '**examples** — Swiss alpine meadows, Japanese fisheries, Maine lobster territories',
      '**key insight** — communication and trust can overcome selfish incentives',
    ],
  },
  {
    type: 'subheading',
    content: '4. international treaties',
  },
  {
    type: 'body',
    content: 'for global commons (atmosphere, oceans, Antarctica), international agreements are necessary:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Montreal Protocol** — successfully phased out CFCs to protect ozone layer',
      '**Paris Agreement** — attempts to limit greenhouse gas emissions',
      '**UNCLOS** — Law of the Sea governs ocean use',
      '**limitation** — enforcement is difficult; countries can withdraw',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may describe a resource being overexploited and ask you to identify it as a tragedy of the commons, explain why it occurs, and propose solutions. always explain the incentive structure: individual benefit > individual cost, but collective cost > collective benefit.',
  },
]

export default function APESU5T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 1,
        title: 'tragedy of the commons',
        keyTerms: ['commons', 'overexploitation', 'negative externality', 'privatization', 'ITQs', 'Ostrom'],
      }}
      sections={sections}
      next={{ href: '/apes/unit-5/2', title: 'green revolution' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
