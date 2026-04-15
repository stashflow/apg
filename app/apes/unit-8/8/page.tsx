import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'incineration (waste-to-energy)' },
  { type: 'body', content: 'incineration burns solid waste at high temperatures (870–1200°C), reducing its volume by ~90% and generating electricity from the heat. modern facilities are called waste-to-energy (WTE) plants. while they reduce landfill volume, they produce air pollutants and toxic ash.' },
  { type: 'heading', content: 'pros and cons of incineration' },
  { type: 'table', content: '', tableHeaders: ['advantages', 'disadvantages'], tableRows: [['reduces waste volume by ~90%', 'emits CO₂, dioxins, heavy metals, particulates'], ['generates electricity (WTE)', 'toxic bottom ash and fly ash must be landfilled'], ['reduces landfill space needs', 'expensive to build and operate'], ['kills pathogens', 'may disincentivize recycling'], ['sited near urban centers (short transport)', 'environmental justice — often near poor communities']] },
  { type: 'callout', content: 'the ash problem: incineration produces bottom ash (~80%) and fly ash (~20%). fly ash is more contaminated — contains heavy metals (lead, cadmium, mercury), dioxins, and furans. fly ash is classified as hazardous waste. bottom ash may be used as road fill if metals levels are acceptable.' },
  { type: 'heading', content: 'hazardous waste' },
  { type: 'body', content: 'hazardous waste is material that poses substantial danger to human health or the environment. EPA classifies as hazardous if it is: **ignitable** (catches fire), **corrosive** (dissolves metal), **reactive** (explosive or toxic gas releasing), or **toxic** (leaches harmful chemicals in landfill conditions).' },
  { type: 'subheading', content: 'sources of hazardous waste' },
  { type: 'bullets', content: '', bullets: ['**industry**: solvents, acids, heavy metals from manufacturing', '**agriculture**: pesticide containers, unused chemicals', '**households**: paints, batteries, motor oil, fluorescent bulbs, cleaners (HHW — household hazardous waste)', '**mining**: acid mine drainage, tailings piles with heavy metals', '**military**: munitions, explosives, contaminated soil at bases'] },
  { type: 'heading', content: 'regulation and disposal' },
  { type: 'bullets', content: '', bullets: ['**RCRA (Resource Conservation and Recovery Act, 1976)**: regulates generation, transport, and disposal of hazardous waste — "cradle to grave" tracking', '**CERCLA / Superfund (1980)**: funds cleanup of abandoned contaminated sites; identifies PRPs (potentially responsible parties) to pay', '**secure landfills**: triple-lined, leachate collection, hazardous waste only', '**deep well injection**: pump liquid hazardous waste into deep geological formations — concerns about leakage and earthquakes', '**bioremediation**: bacteria break down organic hazardous chemicals (petroleum, chlorinated solvents)', '**phytoremediation**: plants extract heavy metals from contaminated soil', '**HHW collection days**: municipalities collect household hazardous waste for proper disposal'] },
  { type: 'examtip', content: 'know RCRA (operating sites) vs. CERCLA/Superfund (abandoned sites). the Love Canal disaster (NY, 1978) led to CERCLA — buried chemical waste seeped into homes and school; residents evacuated; event galvanized hazardous waste regulation.' },
]

export default function APESU8T8() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 8, title: 'incineration & hazardous waste', keyTerms: ['incineration', 'waste-to-energy', 'fly ash', 'bottom ash', 'RCRA', 'CERCLA', 'Superfund', 'bioremediation', 'phytoremediation', 'Love Canal'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/7', title: 'solid waste & landfills' }}
      next={{ href: '/apes/unit-8/9', title: 'oil spills' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
