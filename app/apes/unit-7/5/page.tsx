import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'what is acid rain?' },
  { type: 'body', content: 'acid rain (acid deposition) refers to any precipitation — rain, snow, fog, or dry particles — that has a lower pH than normal (below 5.6). it is caused by sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) reacting with water vapor in the atmosphere to form sulfuric and nitric acids.' },
  { type: 'callout', content: 'normal rain is slightly acidic (pH ≈ 5.6) due to dissolved CO₂ forming weak carbonic acid. acid rain is pH < 5.6 — often 4.2–4.4 in heavily polluted areas. battery acid is pH 1, pure water is pH 7.' },
  { type: 'heading', content: 'formation of acid rain' },
  { type: 'subheading', content: 'sulfur dioxide pathway' },
  { type: 'bullets', content: '', bullets: ['**source**: coal-burning power plants, smelters, volcanoes', 'SO₂ + H₂O → H₂SO₃ (sulfurous acid)', 'SO₂ + O₂ + H₂O → H₂SO₄ (sulfuric acid) — the primary acid rain acid', '**key**: coal contains sulfur impurities — burning releases SO₂'] },
  { type: 'subheading', content: 'nitrogen oxide pathway' },
  { type: 'bullets', content: '', bullets: ['**source**: car engines, power plants, any high-temperature combustion', 'N₂ + O₂ → 2NO (nitric oxide) at high temps', '2NO + O₂ → 2NO₂; NO₂ + H₂O → HNO₃ (nitric acid)', '**key**: mobile sources (cars) dominate NOₓ emissions'] },
  { type: 'heading', content: 'wet vs. dry deposition' },
  { type: 'table', content: '', tableHeaders: ['type', 'form', 'examples'], tableRows: [['wet deposition', 'dissolved in precipitation', 'acid rain, acid snow, acid fog'], ['dry deposition', 'dry particles & gases settle on surfaces', 'SO₂ gas, sulfate particles — wash into soil when it rains']] },
  { type: 'heading', content: 'ecological effects' },
  { type: 'bullets', content: '', bullets: ['**lakes & streams**: lower pH kills fish eggs, macroinvertebrates, frogs; pH < 5 kills most aquatic life', '**soil**: leaches calcium, magnesium, and potassium — nutrients plants need; mobilizes toxic aluminum ions', '**forests**: weakens trees (especially conifers), leaches nutrients from leaves, makes trees vulnerable to drought/insects/disease', '**buffering capacity**: limestone-rich soils neutralize acid; granite-underlain soils have very low buffering — lakes in granite regions are most vulnerable', '**human health**: acid deposition contributes to respiratory problems (from the precursor gases SO₂/NOₓ) and contaminates drinking water'] },
  { type: 'examtip', content: 'exam classic: "why do Adirondack lakes suffer more than Midwestern lakes from acid rain?" — granite bedrock has low buffering capacity vs. limestone. the acid travels far downwind (transboundary pollution) — polluters in Ohio affect lakes in New York and Canada.' },
  { type: 'heading', content: 'policy & solutions' },
  { type: 'bullets', content: '', bullets: ['**Clean Air Act (1970, 1990 amendments)**: set SO₂ emission standards', '**cap-and-trade (Acid Rain Program, 1990)**: set national SO₂ cap, companies buy/sell permits — market-based solution', '**scrubbers (flue gas desulfurization)**: limestone slurry removes SO₂ from coal plant exhaust', '**catalytic converters**: reduce NOₓ from automobiles', '**fuel switching**: natural gas has less sulfur than coal', '**liming lakes**: adding limestone raises pH — temporary fix only'] },
  { type: 'frqtip', content: 'FRQ format: identify the pollutants → explain the formation chemistry → describe ecosystem effects → propose and explain a solution. mention cap-and-trade as an economic approach and scrubbers as a technological approach.' },
]

export default function APESU7T5() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{ number: 5, title: 'acid rain', keyTerms: ['acid deposition', 'SO₂', 'NOₓ', 'sulfuric acid', 'nitric acid', 'wet deposition', 'dry deposition', 'buffering capacity', 'pH', 'cap-and-trade', 'scrubber'] }}
      sections={sections}
      prev={{ href: '/apes/unit-7/4', title: 'thermal inversions' }}
      next={{ href: '/apes/unit-7/6', title: 'ozone depletion' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
