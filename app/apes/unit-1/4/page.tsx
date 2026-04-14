import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'why the carbon cycle matters for the exam',
  },
  {
    type: 'body',
    content: 'the carbon cycle is the single most important biogeochemical cycle for APES. it directly connects to climate change, ocean acidification, deforestation, fossil fuels, and nearly every environmental problem on the exam. understand it cold and you earn points across multiple units.',
  },
  {
    type: 'heading',
    content: 'carbon reservoirs (where carbon is stored)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**atmosphere** — carbon exists primarily as CO₂ and CH₄ (methane). currently ~420 ppm CO₂, rising ~2–3 ppm/yr due to human activity.',
      '**biosphere (living organisms)** — carbon is locked in all organic compounds (carbohydrates, proteins, fats, DNA) in every living thing.',
      '**soil** — dead organic matter, humus, and soil organisms. the soil contains roughly twice as much carbon as the atmosphere.',
      '**oceans** — the largest active reservoir. CO₂ dissolves in seawater; marine organisms incorporate carbon into shells (CaCO₃) and bodies.',
      '**sedimentary rock & fossil fuels** — the largest TOTAL reservoir. carbon accumulated in limestone, coal, oil, and natural gas over millions of years. this carbon is essentially "locked away" unless burned or weathered.',
    ],
  },
  {
    type: 'examtip',
    content: 'you will almost certainly get a question asking you to identify carbon reservoirs or rank them by size. largest total reservoir = rocks/fossil fuels. largest active (quickly cycling) reservoir = oceans. smallest active reservoir = atmosphere — but the most climatically sensitive.',
  },
  {
    type: 'heading',
    content: 'how carbon moves between reservoirs (fluxes)',
  },
  {
    type: 'subheading',
    content: 'processes that remove CO₂ from atmosphere',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**photosynthesis** — 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. plants, algae, and cyanobacteria fix atmospheric CO₂ into organic compounds. this is the primary mechanism of carbon uptake.',
      '**ocean absorption** — CO₂ dissolves directly into seawater. cooler water absorbs more CO₂ (gas solubility increases with decreasing temperature). this is the "carbon sink" role of oceans.',
      '**chemical weathering** — CO₂ + water forms carbonic acid (H₂CO₃) that weathers rock, incorporating carbon into sediments. extremely slow process.',
    ],
  },
  {
    type: 'subheading',
    content: 'processes that release CO₂ to atmosphere',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**cellular respiration** — C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. all living organisms respire, releasing CO₂. this is the reverse of photosynthesis.',
      '**decomposition** — decomposers (fungi and bacteria) break down dead organic matter, releasing CO₂ and CH₄ (in anaerobic conditions). slow in cold or dry conditions; fast in warm, moist conditions.',
      '**combustion (burning)** — fossil fuels (coal, oil, gas) and biomass burning release carbon stored for millions of years back into the atmosphere very rapidly.',
      '**volcanic activity** — releases CO₂ from Earth\'s interior. significant on geological time scales but minor compared to human combustion today.',
      '**ocean outgassing** — warmer ocean water releases dissolved CO₂ back to atmosphere (positive feedback loop with climate change).',
    ],
  },
  {
    type: 'heading',
    content: 'human disruptions to the carbon cycle',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**burning fossil fuels** — coal, oil, and natural gas release ancient carbon locked away for 100–300 million years. adds ~10 billion metric tons of CO₂ to atmosphere annually.',
      '**deforestation** — trees are massive carbon sinks. cutting them releases stored carbon AND removes future carbon-fixing capacity. tropical deforestation alone accounts for ~10% of global CO₂ emissions.',
      '**agriculture** — livestock (cattle) produce CH₄ through enteric fermentation. rice paddies release CH₄. fertilizer use releases N₂O (another greenhouse gas).',
      '**cement production** — releases CO₂ from heating limestone (CaCO₃ → CaO + CO₂). accounts for ~8% of global CO₂ emissions.',
      '**landfills** — decomposing organic waste in anaerobic conditions produces CH₄, which is 25–84× more potent as a greenhouse gas than CO₂ over different time horizons.',
    ],
  },
  {
    type: 'heading',
    content: 'the greenhouse effect & CO₂',
  },
  {
    type: 'body',
    content: 'CO₂ and other greenhouse gases absorb infrared (heat) radiation emitted by Earth\'s surface and re-radiate it back, warming the planet. this natural greenhouse effect is essential for life — without it, Earth\'s average temperature would be about −18°C. the problem is human-driven amplification: adding CO₂ to the atmosphere traps more heat than natural systems can compensate for.',
  },
  {
    type: 'subheading',
    content: 'the ocean\'s role: carbon sink and acidification source',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'oceans absorb ~30% of human CO₂ emissions — acting as a giant buffer for the climate.',
      'when CO₂ dissolves in seawater: CO₂ + H₂O → H₂CO₃ (carbonic acid) → H⁺ + HCO₃⁻',
      'this lowers ocean pH — **ocean acidification** (pH has dropped from 8.2 to 8.1 since industrialization — a 26% increase in hydrogen ion concentration)',
      'lower pH dissolves CaCO₃, the material shells and coral skeletons are made of — threatening marine food webs.',
    ],
  },
  {
    type: 'examtip',
    content: 'ocean acidification is tested as both a chemistry topic and an ecological impact topic. know the chemistry: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻. know the impacts: coral bleaching, shellfish with thinner shells, pteropod dissolution. know that the ocean has become ~26% more acidic (in terms of H⁺ concentration) since industrialization.',
  },
  {
    type: 'frqtip',
    content: 'a classic APES FRQ asks you to explain how burning fossil fuels affects the carbon cycle and the climate. structure your answer: (1) burning releases CO₂ from long-term storage → (2) atmospheric CO₂ increases → (3) enhanced greenhouse effect traps more heat → (4) temperature rises → (5) positive feedbacks (permafrost thaw, ocean outgassing, ice albedo loss) accelerate warming. give specific numbers when you can.',
  },
]

export default function APESU1T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 1, title: 'the living world — ecosystems' }}
      topic={{
        number: 4,
        title: 'the carbon cycle',
        keyTerms: ['carbon reservoir', 'photosynthesis', 'respiration', 'decomposition', 'fossil fuels', 'greenhouse effect', 'ocean acidification', 'CO₂', 'CH₄', 'carbon sink', 'feedback loop'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-1/3', title: 'aquatic biomes' }}
      next={{ href: '/apes/unit-1/5', title: 'the nitrogen cycle' }}
      courseHref="/apes"
      unitHref="/apes/unit-1"
    />
  )
}
