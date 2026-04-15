import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'APES formulas you must know' },
  { type: 'body', content: 'the APES exam does not provide a formula sheet. you must memorize these calculations. the math is rarely complex — it is mostly multiplication, division, and unit conversions — but you need to know which formula to apply, what the variables mean, and how to manipulate units.' },
  { type: 'heading', content: 'population calculations' },
  { type: 'bullets', content: '', bullets: ['**population growth rate (r) = (birth rate + immigration) − (death rate + emigration)**', '  expressed as % or individuals per 1,000 per year', '**doubling time = 70 / growth rate (%)**', '  at 2% growth: doubles in 35 years; at 1% growth: 70 years', '**population change = births − deaths** (closed population, no migration)', '**crude birth rate = (births / population) × 1,000**'] },
  { type: 'heading', content: 'energy calculations' },
  { type: 'bullets', content: '', bullets: ['**EROI (Energy Return on Investment) = energy out / energy in**', '  coal: ~30:1; oil: ~20:1; natural gas: ~20:1; wind: ~20–30:1; solar PV: ~10–20:1; corn ethanol: ~1.3:1 (barely worth it)', '**energy efficiency = useful energy output / total energy input × 100%**', '  typical coal plant: ~33% efficient; combined cycle gas: ~55%; most energy wasted as heat', '**fuel efficiency**: miles per gallon; L per 100 km = 235 / MPG'] },
  { type: 'heading', content: 'productivity and ecology' },
  { type: 'bullets', content: '', bullets: ['**NPP = GPP − respiration** (net primary productivity = gross primary productivity minus plant respiration)', '**trophic efficiency = (energy at trophic level n+1) / (energy at trophic level n) × 100%**', '  typically ~10% — "10% rule" — 90% lost as heat at each step', '**percent change = (new − old) / old × 100%**'] },
  { type: 'heading', content: 'water and soil' },
  { type: 'bullets', content: '', bullets: ['**residence time = volume of reservoir / flow rate**', '  example: lake with 1,000 m³ and 100 m³/yr outflow → 10-year residence time', '**soil texture**: % sand + silt + clay = 100%; use USDA texture triangle to classify'] },
  { type: 'heading', content: 'toxicology' },
  { type: 'bullets', content: '', bullets: ['**LD₅₀ (lethal dose 50%)**: dose that kills 50% of test population — lower LD₅₀ = more toxic', '**dose-response curve**: plot of effect vs. dose; threshold is minimum dose with observable effect', '**bioaccumulation factor = concentration in organism / concentration in environment**'] },
  { type: 'heading', content: 'pH calculations' },
  { type: 'bullets', content: '', bullets: ['**pH = −log[H⁺]**; pH scale 0–14', 'pH 5 is 10× more acidic than pH 6; pH 4 is 100× more acidic than pH 6 — logarithmic scale', 'acid rain: pH < 5.6; normal rain: pH 5.6; battery acid: pH 1; bleach: pH 12'] },
  { type: 'heading', content: 'unit conversions to practice' },
  { type: 'bullets', content: '', bullets: ['1 kWh = 3,412 BTU = 3.6 MJ', '1 metric ton = 1,000 kg ≈ 2,205 lbs', '1 acre = 43,560 ft² ≈ 0.405 hectares', '1 hectare = 10,000 m² ≈ 2.47 acres', 'ppm × molecular weight conversion: CO₂ ppm to mg/m³ = ppm × (44/22.4)'] },
  { type: 'examtip', content: 'the FRQ math questions often involve multi-step unit cancellation. write out every unit and cancel systematically. EROI, doubling time, and NPP calculations appear regularly. always include units in your answer — points are deducted for missing units on FRQs.' },
]

export default function APESU9T11() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 11, title: 'apes formulas', keyTerms: ['EROI', 'NPP', 'GPP', 'doubling time', 'LD50', 'trophic efficiency', 'pH', 'population growth rate', 'unit conversion', 'dose-response'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/10', title: 'environmental laws' }}
      next={{ href: '/apes/unit-9/12', title: 'frq practice' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
