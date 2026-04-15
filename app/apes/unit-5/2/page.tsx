import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what was the green revolution?',
  },
  {
    type: 'body',
    content: 'the Green Revolution (1940s-1970s) was a massive increase in agricultural productivity through new crop varieties, chemical inputs, and irrigation. it\'s credited with saving over a billion people from starvation — but came with serious environmental costs.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high-yield varieties (HYVs)** — crops bred for maximum productivity (dwarf wheat, IR8 rice)',
      '**Norman Borlaug** — the "father of the Green Revolution," developed disease-resistant wheat (Nobel Peace Prize 1970)',
      '**goal** — increase food production to feed growing global population',
      '**result** — grain production doubled from 1961-1985 while population grew 50%',
    ],
  },
  {
    type: 'heading',
    content: 'key technologies',
  },
  {
    type: 'subheading',
    content: 'high-yield crop varieties',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**shorter stalks** — "dwarf" varieties put more energy into grain, less into stems',
      '**faster maturity** — multiple harvests per year possible',
      '**disease resistance** — bred to resist common crop diseases',
      '**responsive to fertilizer** — designed to maximize output with chemical inputs',
    ],
  },
  {
    type: 'subheading',
    content: 'synthetic fertilizers',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**NPK** — nitrogen, phosphorus, potassium — the three macronutrients',
      '**Haber-Bosch process** — industrial nitrogen fixation enabled mass fertilizer production',
      '**dramatic yield increases** — crops respond to abundant nutrients',
    ],
  },
  {
    type: 'subheading',
    content: 'irrigation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**controlled water supply** — less dependence on rainfall',
      '**dams and canals** — large-scale water infrastructure',
      '**groundwater pumping** — tapping aquifers for irrigation',
    ],
  },
  {
    type: 'subheading',
    content: 'pesticides',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**insecticides** — kill pest insects',
      '**herbicides** — kill competing weeds',
      '**fungicides** — prevent crop diseases',
    ],
  },
  {
    type: 'subheading',
    content: 'mechanization',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**tractors and combines** — replace human and animal labor',
      '**efficiency** — one farmer can work vastly more land',
    ],
  },
  {
    type: 'heading',
    content: 'benefits of the green revolution',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**prevented famine** — billions fed who would have starved',
      '**reduced hunger** — percentage of malnourished people dropped from 35% to 15%',
      '**lower food prices** — increased supply made food more affordable',
      '**spared land** — higher yields meant less land needed for agriculture',
      '**economic development** — agricultural surplus allowed industrialization',
    ],
  },
  {
    type: 'heading',
    content: 'environmental costs',
  },
  {
    type: 'subheading',
    content: 'water issues',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**aquifer depletion** — Ogallala, Punjab, and other aquifers pumped faster than recharge',
      '**salinization** — irrigation water evaporates, leaving salt deposits that kill crops',
      '**waterlogging** — over-irrigation raises water table, drowning roots',
    ],
  },
  {
    type: 'subheading',
    content: 'soil degradation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**erosion** — intensive tillage destroys soil structure',
      '**loss of organic matter** — synthetic fertilizers don\'t replenish soil health',
      '**compaction** — heavy machinery compresses soil',
    ],
  },
  {
    type: 'subheading',
    content: 'pollution',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**eutrophication** — fertilizer runoff causes algal blooms and dead zones',
      '**pesticide contamination** — groundwater, streams, and non-target species affected',
      '**greenhouse gases** — fertilizer production and use releases N₂O; rice paddies emit CH₄',
    ],
  },
  {
    type: 'subheading',
    content: 'biodiversity loss',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**monocultures** — vast areas planted with single crop varieties',
      '**genetic narrowing** — a few HYVs replaced thousands of traditional varieties',
      '**vulnerability** — uniform crops susceptible to disease outbreaks',
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam loves to ask about green revolution tradeoffs. know both sides: it saved lives (benefit) but created dependency on fossil fuels, depleted aquifers, and caused pollution (costs). be prepared to discuss whether it was "worth it."',
  },
  {
    type: 'heading',
    content: 'social and economic concerns',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**favored large farms** — expensive inputs (seeds, fertilizer, irrigation) disadvantaged small farmers',
      '**debt and displacement** — small farmers went into debt buying inputs, lost land to larger operations',
      '**inequality** — benefits concentrated in regions with irrigation and infrastructure',
      '**corporate control** — seed companies own patented HYVs; farmers can\'t save seeds',
    ],
  },
  {
    type: 'frqtip',
    content: 'when asked about the Green Revolution, structure your answer: (1) what it was and how it worked, (2) benefits (food production, lives saved), (3) environmental costs (water, soil, pollution, biodiversity), (4) social costs if relevant. always show both sides.',
  },
]

export default function APESU5T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 2,
        title: 'green revolution',
        keyTerms: ['HYVs', 'Norman Borlaug', 'synthetic fertilizers', 'monoculture', 'salinization', 'eutrophication'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/1', title: 'tragedy of the commons' }}
      next={{ href: '/apes/unit-5/3', title: 'pest control methods' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
