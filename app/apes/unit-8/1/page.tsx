import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'point vs. nonpoint sources' },
  { type: 'body', content: 'water pollution enters waterways from two categories of sources. point sources are discrete, identifiable discharge locations — pipes from factories or sewage plants. nonpoint sources are diffuse, spread over large areas — agricultural runoff, urban stormwater, and atmospheric deposition.' },
  { type: 'table', content: '', tableHeaders: ['type', 'examples', 'regulation difficulty'], tableRows: [['point source', 'factory pipe, sewage outfall, oil rig', 'easier — can monitor and regulate discharge'], ['nonpoint source', 'farm runoff, lawn fertilizers, road runoff, acid rain', 'harder — no single pipe to monitor']] },
  { type: 'callout', content: 'nonpoint source pollution is the leading cause of water quality problems in U.S. rivers and lakes. it is very hard to regulate because it comes from millions of individual sources with no single discharge point.' },
  { type: 'heading', content: 'categories of water pollutants' },
  { type: 'subheading', content: 'pathogens & infectious agents' },
  { type: 'bullets', content: '', bullets: ['bacteria (E. coli, Salmonella), viruses (hepatitis A, norovirus), protozoa (Giardia, Cryptosporidium)', '**source**: sewage, animal waste, septic systems', '**indicator organism**: fecal coliform bacteria (especially E. coli) — used to test for sewage contamination', '**health effects**: diarrhea, cholera, typhoid, hepatitis — leading cause of death in developing nations'] },
  { type: 'subheading', content: 'nutrients (nitrogen & phosphorus)' },
  { type: 'bullets', content: '', bullets: ['**source**: fertilizer runoff, sewage, animal waste (CAFOs)', '**effects**: eutrophication — algal blooms → oxygen depletion → dead zones', '**key**: phosphorus often limits freshwater algal growth; nitrogen limits marine algal growth'] },
  { type: 'subheading', content: 'sediment' },
  { type: 'bullets', content: '', bullets: ['**source**: construction sites, tilled farmland, logging, streambank erosion', '**effects**: smothers fish eggs and benthic organisms, reduces light penetration, carries attached pollutants', '**leading pollutant**: by volume, sediment is the #1 water pollutant in the U.S.'] },
  { type: 'subheading', content: 'heavy metals' },
  { type: 'bullets', content: '', bullets: ['mercury, lead, arsenic, cadmium, chromium', '**sources**: mining drainage, industrial discharge, coal combustion (mercury)', '**effects**: bioaccumulate in tissues, biomagnify up food chains; neurological damage (mercury), kidney damage (lead)'] },
  { type: 'subheading', content: 'organic compounds (synthetic chemicals)' },
  { type: 'bullets', content: '', bullets: ['pesticides (DDT, atrazine), PCBs, dioxins, pharmaceuticals', 'endocrine disruptors: mimic hormones — feminization of fish, reproductive failure', '**persistent**: resist breakdown, accumulate in sediment and fat tissue'] },
  { type: 'subheading', content: 'thermal pollution' },
  { type: 'bullets', content: '', bullets: ['**source**: power plants and factories use water for cooling, discharge warm water', '**effect**: warm water holds less dissolved oxygen (DO) → stresses fish, kills cold-water species (trout, salmon)', '**solution**: cooling towers recirculate water; cooling ponds'] },
  { type: 'examtip', content: 'know the distinction: point vs. nonpoint, and the specific pollutants. fecal coliform is the indicator, not the disease agent itself. sediment is #1 by volume. for the FRQ, always link source → pollutant → ecological effect → solution.' },
]

export default function APESU8T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 1, title: 'water pollution sources', keyTerms: ['point source', 'nonpoint source', 'fecal coliform', 'pathogens', 'eutrophication', 'heavy metals', 'endocrine disruptors', 'thermal pollution', 'sediment'] }}
      sections={sections}
      next={{ href: '/apes/unit-8/2', title: 'thermal pollution' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
