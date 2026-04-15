import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'oil spills' },
  { type: 'body', content: 'oil spills release crude oil or refined petroleum into marine or freshwater environments. they occur from tanker accidents, pipeline ruptures, offshore drilling blowouts, and operational discharges. even small spills cause major ecological damage; large spills can devastate coastal ecosystems for decades.' },
  { type: 'heading', content: 'major case studies' },
  { type: 'subheading', content: 'Exxon Valdez (1989)' },
  { type: 'bullets', content: '', bullets: ['~11 million gallons of crude oil; Prince William Sound, Alaska', 'tanker ran aground on Bligh Reef due to crew error', 'killed ~250,000 seabirds, 2,800 sea otters, 300 harbor seals', 'remote location made cleanup extremely difficult; oil persists in subsurface sediment to this day', '**legacy**: led to Oil Pollution Act (1990) — required double-hull tankers, created Oil Spill Liability Trust Fund'] },
  { type: 'subheading', content: 'Deepwater Horizon (2010)' },
  { type: 'bullets', content: '', bullets: ['~210 million gallons; Gulf of Mexico — largest offshore spill in U.S. history', 'BP Macondo well blowout; drilling rig explosion killed 11 workers', '87 days before capped; oil spread across 68,000 square miles', 'massive use of Corexit dispersant — controversial; broke oil into smaller droplets (more bioavailable)', '**ecological impacts**: killed marine mammals, sea turtles, fish, birds; oiled 1,000+ miles of coastline; decimated Gulf shrimp and oyster fisheries', '**economic**: $65 billion in settlements; tourism and fishing industries devastated'] },
  { type: 'heading', content: 'how oil harms ecosystems' },
  { type: 'bullets', content: '', bullets: ['**physical coating**: oil coats bird feathers → destroys insulation → hypothermia; coats marine mammal fur', '**toxicity**: polycyclic aromatic hydrocarbons (PAHs) are carcinogenic; dissolved components toxic to fish embryos', '**smothering**: oil suffocates intertidal organisms (mussels, barnacles, crabs)', '**food chain disruption**: kills phytoplankton and zooplankton at base of marine food web', '**long-term**: oil persists in sediment; PAHs continue entering food chain for decades'] },
  { type: 'heading', content: 'cleanup methods' },
  { type: 'table', content: '', tableHeaders: ['method', 'how it works', 'limitation'], tableRows: [['booms', 'floating barriers contain surface oil', 'ineffective in rough seas'], ['skimmers', 'vacuum or skim surface oil', 'slow; only surface oil'], ['in-situ burning', 'burn oil on water surface', 'air pollution; incomplete combustion'], ['dispersants (Corexit)', 'break oil into micro-droplets', 'doesn\'t remove oil; may increase toxicity'], ['bioremediation', 'oil-eating bacteria (Alcanivorax) degrade oil', 'slow; limited to certain conditions'], ['manual cleanup', 'workers with absorbent pads/shovels', 'labor-intensive; coastal only']] },
  { type: 'examtip', content: 'know both Exxon Valdez and Deepwater Horizon — their scale, causes, ecological effects, and policy responses. the Oil Pollution Act (1990) requiring double-hull tankers is the key regulatory outcome. dispersants don\'t clean up oil — they just sink and disperse it.' },
]

export default function APESU8T9() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 9, title: 'oil spills', keyTerms: ['Exxon Valdez', 'Deepwater Horizon', 'PAHs', 'dispersants', 'bioremediation', 'booms', 'skimmers', 'Oil Pollution Act', 'Corexit'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/8', title: 'incineration & hazardous waste' }}
      next={{ href: '/apes/unit-8/10', title: 'plastic pollution' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
