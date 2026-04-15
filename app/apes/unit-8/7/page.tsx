import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'solid waste in the U.S.' },
  { type: 'body', content: 'the U.S. generates about 292 million tons of municipal solid waste (MSW) per year — roughly 4.9 lbs/person/day. the composition is roughly: food 24%, paper 23%, plastics 12%, yard trimmings 12%, metals 9%, glass 4%, other 16% (EPA, 2018). landfills receive about 50%, recycling/composting 35%, combustion 12%.' },
  { type: 'heading', content: 'the waste hierarchy (5 Rs)' },
  { type: 'bullets', content: '', bullets: ['**Refuse**: don\'t buy/use the product in the first place (most preferred)', '**Reduce**: use less — smaller packaging, less consumption', '**Reuse**: use items multiple times, repair instead of discard', '**Recycle**: process materials to make new products', '**Recover** (incinerate for energy): waste-to-energy as last resort before landfill (least preferred)'] },
  { type: 'heading', content: 'sanitary landfills' },
  { type: 'bullets', content: '', bullets: ['**liner system**: thick plastic liner + clay layer prevents leachate from reaching groundwater', '**leachate collection**: pipes collect contaminated liquid that percolates through waste → treated before discharge', '**methane capture**: anaerobic decomposition produces CH₄ → pipes collect and can generate electricity', '**daily cover**: compacted soil or tarps applied daily to reduce odor, pests, and litter', '**closure**: capped with clay/plastic after full; monitored 30 years post-closure', '**modern vs. open dump**: open dumps (illegal in U.S.) → contaminate groundwater, attract pests, release methane uncontrolled'] },
  { type: 'callout', content: 'landfill methane: anaerobic bacteria decompose organic waste → CH₄. methane is 25× more potent greenhouse gas than CO₂ over 100 years. capture and use as landfill gas (LFG) to generate electricity is both an environmental and economic benefit.' },
  { type: 'heading', content: 'problems with landfills' },
  { type: 'bullets', content: '', bullets: ['running out of space in densely populated areas (New York, New Jersey)', 'NIMBY (Not In My Back Yard) opposition to siting new landfills', 'liner failure → leachate contaminates groundwater', 'methane explosion risk if not managed', 'environmental justice: landfills disproportionately sited near low-income/minority communities'] },
  { type: 'heading', content: 'recycling and composting' },
  { type: 'bullets', content: '', bullets: ['**benefits**: conserves resources, reduces energy use, reduces landfill volume', '**compost**: decomposed organics → soil amendment (reduces food waste in landfills)', '**challenges**: contamination of recycling streams, commodity price volatility, limited markets', '**China\'s National Sword (2018)**: China stopped accepting contaminated recyclables → U.S. recycling crisis'] },
  { type: 'examtip', content: 'know the parts of a sanitary landfill: liner, leachate collection, methane capture. contrast with open dumps. the waste hierarchy goes Refuse → Reduce → Reuse → Recycle → Recover — landfill is always last resort. composting reduces methane emissions from landfills (organic waste decomposes aerobically in compost, not anaerobically in landfill).' },
]

export default function APESU8T7() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 7, title: 'solid waste & landfills', keyTerms: ['municipal solid waste', 'sanitary landfill', 'leachate', 'methane capture', 'liner', '5 Rs', 'waste hierarchy', 'NIMBY', 'composting', 'landfill gas'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/6', title: 'sewage treatment' }}
      next={{ href: '/apes/unit-8/8', title: 'incineration & hazardous waste' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
