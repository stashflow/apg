import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is ENSO?',
  },
  {
    type: 'body',
    content: 'ENSO (El Niño-Southern Oscillation) is a climate pattern in the tropical Pacific Ocean that oscillates between two phases: El Niño (warm) and La Niña (cool). it\'s one of the most important drivers of year-to-year climate variability worldwide.',
  },
  {
    type: 'heading',
    content: 'normal conditions',
  },
  {
    type: 'body',
    content: 'under normal conditions, trade winds blow westward across the Pacific, pushing warm surface water toward Asia and Australia.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**trade winds blow east → west** — pile warm water in western Pacific',
      '**western Pacific** — warm, wet (Indonesia, Australia)',
      '**eastern Pacific** — cool, dry (Peru, Ecuador)',
      '**upwelling off South America** — cold, nutrient-rich water rises, supporting fisheries',
    ],
  },
  {
    type: 'heading',
    content: 'El Niño (warm phase)',
  },
  {
    type: 'body',
    content: 'El Niño occurs when trade winds weaken or reverse, allowing warm water to flow back across the Pacific toward South America.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**trade winds weaken** — warm water sloshes eastward',
      '**eastern Pacific warms** — sea surface temperatures rise 1-3°C or more',
      '**upwelling stops** — fewer nutrients, fisheries collapse',
      '**western Pacific cools** — Australia, Indonesia experience drought and wildfires',
      '**name origin** — "El Niño" means "the boy" (Christ child), because it often arrives around Christmas',
    ],
  },
  {
    type: 'subheading',
    content: 'El Niño global impacts',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**South America** — flooding in Peru/Ecuador; reduced fish catches',
      '**Australia/Indonesia** — severe drought, wildfires',
      '**United States** — wetter in southern states (California, Florida); milder winters in north',
      '**Africa** — drought in southern Africa',
      '**global** — warmer global average temperatures',
    ],
  },
  {
    type: 'heading',
    content: 'La Niña (cool phase)',
  },
  {
    type: 'body',
    content: 'La Niña is the opposite — trade winds strengthen, pushing even more warm water westward and enhancing upwelling off South America.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**stronger trade winds** — more warm water piles up in western Pacific',
      '**eastern Pacific cools** — enhanced upwelling, more nutrients',
      '**western Pacific warmer** — more rain in Australia, Indonesia',
      '**name** — "La Niña" means "the girl"',
    ],
  },
  {
    type: 'subheading',
    content: 'La Niña global impacts',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**South America** — cooler, drier (good fishing)',
      '**Australia/Indonesia** — heavy rain, flooding',
      '**United States** — drought in southwest; colder winters in north; more Atlantic hurricanes',
      '**global** — slightly cooler global average temperatures',
    ],
  },
  {
    type: 'heading',
    content: 'comparison',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['feature', 'El Niño', 'La Niña'],
    tableRows: [
      ['trade winds', 'weaken/reverse', 'strengthen'],
      ['eastern Pacific SST', 'warm', 'cool'],
      ['western Pacific SST', 'cool', 'warm'],
      ['Peru/Ecuador', 'flooding, fishery collapse', 'normal/productive fisheries'],
      ['Australia/Indonesia', 'drought, fires', 'flooding'],
      ['US Southwest', 'wetter', 'drought'],
      ['Atlantic hurricanes', 'fewer', 'more'],
    ],
  },
  {
    type: 'examtip',
    content: 'El Niño = warm eastern Pacific = opposite conditions from normal. La Niña = cool eastern Pacific = enhanced normal conditions. the key is understanding that trade winds control where warm water goes.',
  },
  {
    type: 'heading',
    content: 'ENSO cycle timing',
  },
  {
    type: 'body',
    content: 'ENSO events occur irregularly every 2-7 years and typically last 9-12 months:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**not on a fixed schedule** — unpredictable timing',
      '**monitored by satellites** — sea surface temperature measurements',
      '**Oceanic Niño Index (ONI)** — measures ENSO intensity',
      '**climate change effects** — may intensify El Niño events',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may describe unusual weather and ask you to explain its cause. if South America is flooding while Australia has drought, think El Niño. if the reverse, think La Niña. explain the mechanism: trade winds → warm water movement → precipitation patterns.',
  },
]

export default function APESU4T7() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 7,
        title: 'El Niño & La Niña',
        keyTerms: ['ENSO', 'El Niño', 'La Niña', 'trade winds', 'upwelling', 'sea surface temperature', 'Southern Oscillation'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-4/6', title: 'geography & climate' }}
      next={{ href: '/apes/unit-4/8', title: 'thermal inversion' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
