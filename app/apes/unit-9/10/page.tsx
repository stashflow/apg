import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'U.S. environmental laws' },
  { type: 'body', content: 'the U.S. has a comprehensive framework of environmental laws, mostly passed during the environmental movement of the late 1960s–1970s. knowing the name, year, purpose, and what each law regulates is essential for the APES exam.' },
  { type: 'heading', content: 'air quality laws' },
  { type: 'bullets', content: '', bullets: ['**Clean Air Act (1963, major amendments 1970, 1990)**: sets NAAQS for 6 criteria pollutants; regulates hazardous air pollutants; created the Acid Rain cap-and-trade program; required catalytic converters', '**CAA prevents**: EPA estimates CAA prevents >230,000 early deaths per year in the U.S.'] },
  { type: 'heading', content: 'water quality laws' },
  { type: 'bullets', content: '', bullets: ['**Clean Water Act (1972)**: regulates discharge of pollutants into navigable waters; established NPDES (National Pollutant Discharge Elimination System) permit program; goal: "fishable and swimmable" waters', '**Safe Drinking Water Act (1974)**: regulates public drinking water supply; sets MCLs (maximum contaminant levels); applies to municipal water systems (not private wells)', '**Ocean Dumping Act (1972)**: prohibits dumping of harmful materials in U.S. ocean waters'] },
  { type: 'heading', content: 'land/waste laws' },
  { type: 'bullets', content: '', bullets: ['**RCRA (Resource Conservation and Recovery Act, 1976)**: regulates generation, transport, storage, and disposal of hazardous waste — "cradle to grave"', '**CERCLA/Superfund (1980)**: funds cleanup of abandoned hazardous waste sites; identifies PRPs; created national priority list (NPL) of most contaminated sites', '**FIFRA (Federal Insecticide, Fungicide, and Rodenticide Act, 1947, 1972)**: regulates pesticide registration, use, and labeling'] },
  { type: 'heading', content: 'biodiversity and land laws' },
  { type: 'bullets', content: '', bullets: ['**Endangered Species Act (1973)**: protects threatened and endangered species and their critical habitat; prohibits "take" (harm, harassment, killing) of listed species; administered by FWS and NMFS', '**NEPA (National Environmental Policy Act, 1970)**: requires Environmental Impact Statements (EIS) for major federal actions that may significantly affect environment; created CEQ (Council on Environmental Quality)', '**Wilderness Act (1964)**: designates wilderness areas — no roads, vehicles, or resource extraction'] },
  { type: 'heading', content: 'key regulatory agencies' },
  { type: 'table', content: '', tableHeaders: ['agency', 'abbreviation', 'key responsibilities'], tableRows: [['Environmental Protection Agency', 'EPA', 'administers most environmental laws, sets standards, enforcement'], ['Fish & Wildlife Service', 'FWS', 'ESA administration for terrestrial/freshwater species'], ['National Marine Fisheries Service', 'NMFS', 'ESA for marine species; fisheries management'], ['Bureau of Land Management', 'BLM', 'manages 245 million acres of public land'], ['National Park Service', 'NPS', 'manages national parks and monuments']] },
  { type: 'examtip', content: 'know CAA, CWA, ESA, NEPA, RCRA, and CERCLA by acronym, year, and purpose. a common MCQ pattern: "which law would regulate ___?" Match: air → CAA; water discharge → CWA; drinking water → SDWA; endangered species → ESA; hazardous waste (operating) → RCRA; hazardous waste (abandoned sites) → CERCLA.' },
]

export default function APESU9T10() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 10, title: 'environmental laws', keyTerms: ['Clean Air Act', 'Clean Water Act', 'SDWA', 'RCRA', 'CERCLA', 'ESA', 'NEPA', 'FIFRA', 'NPDES', 'NAAQS', 'EPA'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/9', title: 'carbon footprint' }}
      next={{ href: '/apes/unit-9/11', title: 'apes formulas' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
