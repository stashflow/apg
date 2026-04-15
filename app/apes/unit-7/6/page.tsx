import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'the ozone layer' },
  { type: 'body', content: 'the stratospheric ozone layer (15–35 km altitude) absorbs 97–99% of the sun\'s harmful ultraviolet (UV-B and UV-C) radiation. without it, UV radiation would dramatically increase skin cancer, cataracts, and immune suppression in humans, and damage phytoplankton, crops, and ecosystems globally.' },
  { type: 'callout', content: 'stratospheric ozone = good (shields life). ground-level ozone = bad (air pollutant, smog component). same molecule (O₃), very different location and effect. the AP exam tests this distinction constantly.' },
  { type: 'heading', content: 'CFCs and ozone destruction' },
  { type: 'subheading', content: 'what are CFCs?' },
  { type: 'bullets', content: '', bullets: ['chlorofluorocarbons — synthetic compounds containing chlorine, fluorine, carbon', '**uses**: refrigerants (freon), aerosol propellants, foam blowing agents', '**problem**: chemically stable, drift to stratosphere unchanged'] },
  { type: 'subheading', content: 'the destruction cycle' },
  { type: 'bullets', content: '', bullets: ['UV radiation breaks CFC apart, releasing free chlorine atoms: CFCl₃ + UV → CFCl₂ + Cl', 'Cl + O₃ → ClO + O₂ (ozone destroyed)', 'ClO + O → Cl + O₂ (chlorine regenerated — catalytic cycle)', '**key**: one Cl atom can destroy ~100,000 ozone molecules before being deactivated', 'halons (in fire extinguishers) and HCFCs also destroy ozone'] },
  { type: 'heading', content: 'the ozone hole' },
  { type: 'bullets', content: '', bullets: ['discovered 1985 over Antarctica — seasonal thinning each southern spring (Sept–Nov)', '**why Antarctica?**: polar stratospheric clouds form in extreme cold, providing surfaces where chlorine is activated', '**severity**: ozone column thinned by ~65% at peak; now slowly recovering', 'UV-B increases over southern tip of South America and Australia during hole season'] },
  { type: 'heading', content: 'health & environmental effects of increased UV' },
  { type: 'bullets', content: '', bullets: ['**humans**: increased skin cancer (especially melanoma), cataracts, weakened immune system', '**marine ecosystems**: damages phytoplankton → disrupts ocean food chains', '**agriculture**: reduces crop yields (soybeans, wheat sensitive to UV-B)', '**materials**: degrades plastics, rubber, paint'] },
  { type: 'heading', content: 'montreal protocol — the success story' },
  { type: 'bullets', content: '', bullets: ['**1987**: international treaty phasing out CFCs and other ozone-depleting substances (ODS)', '**ratified by all 197 UN member states** — most successful environmental treaty', 'CFC production in developed nations ended by 1996', '**ozone layer is recovering**: projected full recovery by 2065–2070', '**Kigali Amendment (2016)**: extended protocol to phase down HFCs (potent greenhouse gases)'] },
  { type: 'examtip', content: 'the Montreal Protocol is the go-to example of successful international environmental cooperation. contrast it with the Paris Agreement on climate change (not legally binding). the ozone story shows that global action CAN work when science is clear and substitutes are available.' },
  { type: 'table', content: '', tableHeaders: ['substance', 'ozone-depleting potential', 'replaced by'], tableRows: [['CFCs (freon)', 'very high (0.6–1.0)', 'HCFCs, then HFCs, then HFOs'], ['halons', 'highest (3–10)', 'CO₂ / water suppression'], ['methyl bromide', 'moderate', 'other fumigants']] },
]

export default function APESU7T6() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{ number: 6, title: 'ozone depletion', keyTerms: ['stratospheric ozone', 'CFCs', 'UV-B', 'chlorine', 'ozone hole', 'Montreal Protocol', 'halons', 'catalytic cycle'] }}
      sections={sections}
      prev={{ href: '/apes/unit-7/5', title: 'acid rain' }}
      next={{ href: '/apes/unit-7/7', title: 'noise pollution' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
