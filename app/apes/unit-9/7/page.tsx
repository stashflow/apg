import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'mitigation vs. adaptation' },
  { type: 'callout', content: 'mitigation = reducing greenhouse gas emissions to slow climate change. adaptation = adjusting to climate impacts that are already happening or inevitable. both are necessary. the AP exam tests both categories and their specific examples.' },
  { type: 'heading', content: 'energy mitigation strategies' },
  { type: 'bullets', content: '', bullets: ['**transition to renewables**: solar, wind, hydroelectric, geothermal — eliminate fossil fuel combustion', '**nuclear energy**: zero-carbon during operation; controversial due to waste and cost', '**electrification**: replace gas vehicles, stoves, and heating with electric equivalents (when powered by clean electricity)', '**energy efficiency**: LED lighting, building insulation, efficient appliances — reduces energy demand', '**smart grid**: reduce transmission losses; integrate variable renewables; enable demand response'] },
  { type: 'heading', content: 'carbon capture and storage (CCS)' },
  { type: 'bullets', content: '', bullets: ['**point-source CCS**: capture CO₂ from power plant/industrial exhaust → compress → inject underground into geological formations', '**direct air capture (DAC)**: machines that pull CO₂ from ambient air — extremely expensive currently (~$300–600/ton CO₂)', '**bioenergy + CCS (BECCS)**: grow biomass (absorbs CO₂) → burn for energy → capture emissions = net carbon negative', '**natural carbon capture**: reforestation, afforestation, mangrove restoration, kelp farming, biochar soil amendment'] },
  { type: 'heading', content: 'policy tools' },
  { type: 'bullets', content: '', bullets: ['**carbon tax**: fee per ton of CO₂ emitted — provides economic incentive to reduce emissions; revenue can be redistributed', '**cap-and-trade**: set emission cap; companies trade allowances — market finds cheapest reductions', '**renewable portfolio standards (RPS)**: require utilities to obtain X% of electricity from renewables by a target year', '**CAFE standards**: require automakers to meet fleet fuel economy targets', '**methane regulations**: capture and flare (or use) methane from landfills, oil/gas operations'] },
  { type: 'heading', content: 'land use and agriculture mitigation' },
  { type: 'bullets', content: '', bullets: ['halting deforestation — avoided emissions of 5 Gt CO₂/yr', 'restoring degraded forests — sequesters additional carbon', 'cover crops and reduced tillage — increase soil carbon storage', 'reducing livestock emissions — dietary shifts, feed additives that reduce enteric fermentation in cattle', 'reducing food waste — 8% of global GHG emissions are from wasted food'] },
  { type: 'examtip', content: 'carbon tax (economic instrument) vs. cap-and-trade (market instrument) vs. command-and-control regulation (direct standard) is a classic AP comparison. know that cap-and-trade guarantees a maximum emission level; carbon tax guarantees a price but not an emission amount. reforestation is always a valid mitigation strategy on FRQs.' },
]

export default function APESU9T7() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 7, title: 'mitigation strategies', keyTerms: ['mitigation', 'adaptation', 'carbon capture', 'CCS', 'DAC', 'carbon tax', 'cap-and-trade', 'RPS', 'CAFE', 'BECCS', 'reforestation'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/6', title: 'climate tipping points' }}
      next={{ href: '/apes/unit-9/8', title: 'climate treaties' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
