import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'the greenhouse effect' },
  { type: 'body', content: 'the natural greenhouse effect is essential for life — without it, Earth\'s average surface temperature would be -18°C instead of +15°C. greenhouse gases (GHGs) in the atmosphere absorb and re-emit infrared (heat) radiation emitted by Earth\'s surface, warming the lower atmosphere. the enhanced greenhouse effect — intensified by human emissions — is driving global climate change.' },
  { type: 'heading', content: 'how it works' },
  { type: 'bullets', content: '', bullets: ['**1.** sunlight (shortwave radiation) passes through atmosphere and warms Earth\'s surface', '**2.** Earth emits longwave (infrared) radiation upward', '**3.** GHGs absorb infrared radiation — preventing it from escaping to space', '**4.** GHGs re-emit radiation in all directions, including back to Earth', '**5.** surface warms more than it would without GHGs'] },
  { type: 'heading', content: 'major greenhouse gases' },
  { type: 'table', content: '', tableHeaders: ['gas', 'GWP (100yr)', 'major human source', '% of U.S. GHG emissions'], tableRows: [['CO₂', '1 (baseline)', 'fossil fuel combustion, deforestation', '~79%'], ['CH₄ (methane)', '25', 'livestock, landfills, natural gas leaks, rice paddies', '~11%'], ['N₂O (nitrous oxide)', '298', 'synthetic fertilizers, livestock, wastewater', '~7%'], ['HFCs/PFCs/SF₆', 'hundreds–thousands', 'refrigerants, industrial processes', '~3%'], ['water vapor (H₂O)', 'amplifier', 'evaporation (positive feedback)', 'natural cycle']] },
  { type: 'callout', content: 'GWP = global warming potential — how much warming a gas causes over 100 years relative to CO₂. methane is 25× more potent than CO₂ but shorter-lived (~12 years). N₂O is 298× more potent and lasts ~114 years. gases with high GWP and long lifetimes are most concerning.' },
  { type: 'heading', content: 'albedo and feedbacks' },
  { type: 'bullets', content: '', bullets: ['**albedo**: reflectivity of a surface (0 = perfect absorber, 1 = perfect reflector)', 'fresh snow/ice: albedo 0.80–0.90; ocean: 0.06; forests: 0.08–0.15; deserts: 0.30–0.40', '**ice-albedo feedback (positive)**: warming → ice melts → darker ocean/land exposed → more heat absorbed → more warming', '**water vapor feedback (positive)**: warming → more evaporation → more water vapor (a GHG) → more warming', '**cloud feedback (uncertain)**: more clouds could reflect sunlight (negative) or trap heat (positive)'] },
  { type: 'heading', content: 'evidence for climate change' },
  { type: 'bullets', content: '', bullets: ['global average temperature up ~1.2°C since pre-industrial times (IPCC, 2021)', 'CO₂ levels: pre-industrial ~280 ppm → today ~420 ppm — highest in 800,000 years (ice core data)', 'sea levels rising ~3.3 mm/year; Arctic sea ice declining ~13% per decade', 'extreme weather events (heat waves, intense precipitation) becoming more frequent', 'species range shifts and earlier spring phenology observed globally'] },
  { type: 'examtip', content: 'know the difference between weather (short-term, local) and climate (long-term, regional/global). know CO₂ is the dominant anthropogenic GHG (by volume) but methane has 25× GWP. the ice-albedo positive feedback is the most tested feedback loop.' },
]

export default function APESU9T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 1, title: 'greenhouse effect', keyTerms: ['greenhouse gas', 'GWP', 'CO₂', 'methane', 'N₂O', 'albedo', 'ice-albedo feedback', 'enhanced greenhouse effect', 'infrared radiation'] }}
      sections={sections}
      next={{ href: '/apes/unit-9/2', title: 'carbon cycle & feedbacks' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
