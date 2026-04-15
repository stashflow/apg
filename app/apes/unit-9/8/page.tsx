import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'international climate agreements' },
  { type: 'body', content: 'global climate change requires global cooperation. multiple international agreements have attempted to coordinate emission reductions across nations. knowing the key treaties, their dates, goals, and limitations is essential for the APES exam.' },
  { type: 'heading', content: 'major treaties timeline' },
  { type: 'subheading', content: 'Montreal Protocol (1987)' },
  { type: 'bullets', content: '', bullets: ['**target**: ozone-depleting substances (CFCs, halons, HCFCs) — NOT primarily a climate treaty, but its success is the gold standard', 'ratified by all 197 UN member states — most universally adopted environmental treaty', '**success**: CFCs being phased out; ozone layer recovering; projected full recovery 2065–2070', '**Kigali Amendment (2016)**: extended to phase down HFCs (potent GHGs) — major climate co-benefit'] },
  { type: 'subheading', content: 'UN Framework Convention on Climate Change (UNFCCC, 1992)' },
  { type: 'bullets', content: '', bullets: ['framework for international climate negotiations — the umbrella agreement', 'no binding emission targets; set up annual COP (Conference of Parties) meetings', 'principle of "common but differentiated responsibilities" — developed nations bear greater burden historically'] },
  { type: 'subheading', content: 'Kyoto Protocol (1997)' },
  { type: 'bullets', content: '', bullets: ['**binding** emission reduction targets for developed (Annex I) nations only', 'U.S. signed but never ratified; Canada withdrew; excluded China, India (developing nations)', 'modest reductions achieved in Europe; global emissions still rose', '**lesson**: binding targets + exclusion of major emitters = limited effectiveness'] },
  { type: 'subheading', content: 'Paris Agreement (2015)' },
  { type: 'bullets', content: '', bullets: ['**goal**: limit warming to well below 2°C above pre-industrial, with efforts toward 1.5°C', '**NDCs (Nationally Determined Contributions)**: each country sets its own emission targets — voluntary, not legally binding', 'all major economies included (U.S., China, EU, India)', 'transparency mechanism — countries must report progress', 'U.S. withdrew under Trump (2019), rejoined under Biden (2021)', '**limitation**: current NDCs, if met, still put world on track for ~2.4–2.7°C by 2100'] },
  { type: 'table', content: '', tableHeaders: ['treaty', 'year', 'binding?', 'key feature', 'limitation'], tableRows: [['Montreal Protocol', '1987', 'yes', 'universal adoption; ozone recovery success', 'not focused on CO₂/climate'], ['UNFCCC', '1992', 'no', 'framework for negotiations', 'no emission targets'], ['Kyoto Protocol', '1997', 'yes (developed)', 'binding targets for rich nations', 'excluded U.S., China, India'], ['Paris Agreement', '2015', 'no (voluntary NDCs)', 'all nations; 1.5–2°C goal', 'NDCs insufficient; no enforcement']] },
  { type: 'examtip', content: 'compare Montreal Protocol (binding, universal, successful) with Kyoto (binding but limited nations) and Paris (universal but voluntary). the AP exam may ask you to explain why Montreal succeeded where Kyoto/Paris struggled: available substitutes for CFCs made compliance economically feasible; for CO₂, the entire energy economy must transform.' },
]

export default function APESU9T8() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 8, title: 'climate treaties', keyTerms: ['Montreal Protocol', 'UNFCCC', 'Kyoto Protocol', 'Paris Agreement', 'NDCs', 'COP', 'Kigali Amendment', 'common but differentiated responsibilities'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/7', title: 'mitigation strategies' }}
      next={{ href: '/apes/unit-9/9', title: 'carbon footprint' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
