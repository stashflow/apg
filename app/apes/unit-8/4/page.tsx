import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'bioaccumulation' },
  { type: 'body', content: 'bioaccumulation is the buildup of a toxin within an organism\'s body over its lifetime. organisms absorb toxins faster than they can excrete them, so concentrations increase with age. lipophilic (fat-soluble) compounds like DDT, PCBs, and mercury accumulate most effectively because they dissolve in fat tissue rather than being excreted in urine.' },
  { type: 'callout', content: 'key characteristic of bioaccumulating toxins: **persistent** (resist breakdown), **lipophilic** (fat-soluble), and **biologically active** (toxic at low concentrations). DDT, PCBs, dioxins, mercury (as methylmercury), and lead are classic examples.' },
  { type: 'heading', content: 'biomagnification' },
  { type: 'body', content: 'biomagnification is the increasing concentration of a toxin at each successive trophic level of a food chain. when a predator eats many contaminated prey organisms, it ingests the toxin from all of them — concentrating it 10× or more at each step up the food chain.' },
  { type: 'heading', content: 'the classic example: DDT & bald eagles' },
  { type: 'bullets', content: '', bullets: ['DDT (dichlorodiphenyltrichloroethane): pesticide sprayed widely 1940s–1970s', 'water: 0.000003 ppm → zooplankton: 0.04 ppm → small fish: 0.5 ppm → large fish: 2 ppm → osprey/bald eagle: 25 ppm', '**~10,000,000× concentration** from water to top predator', '**effect**: DDT disrupts calcium metabolism → thin eggshells → eggs crushed during incubation → population collapse', '**result**: DDT banned in U.S. in 1972 (Rachel Carson\'s "Silent Spring" 1962 triggered the movement); bald eagle recovered from near-extinction'] },
  { type: 'heading', content: 'mercury biomagnification' },
  { type: 'bullets', content: '', bullets: ['coal combustion releases inorganic mercury → bacteria in sediment convert to methylmercury (organic, highly bioaccumulative)', 'zooplankton → small fish → tuna/swordfish/shark → humans', '**human health**: Minamata disease (Japan) — severe neurological damage from eating contaminated fish', '**FDA advisory**: pregnant women and children avoid high-mercury fish (tuna, swordfish, shark, tilefish)', '**source**: coal plants, gold mining using mercury (illegal in many countries)'] },
  { type: 'heading', content: 'other examples' },
  { type: 'bullets', content: '', bullets: ['**PCBs**: banned in 1979; persist in Great Lakes sediment; contaminate fish; cause cancer and immune disruption', '**dioxins**: byproduct of incineration and industrial processes; biomagnify in fat-containing foods', '**lead**: neurotoxin; does not need to biomagnify — even tiny amounts harmful to children\'s brain development'] },
  { type: 'heading', content: 'solutions' },
  { type: 'bullets', content: '', bullets: ['ban or restrict persistent pesticides and industrial chemicals (TSCA, Stockholm Convention on POPs)', 'clean coal technology reduces mercury emissions', 'fish consumption advisories protect high-risk populations', 'remediate contaminated sediment (dredging, capping)'] },
  { type: 'frqtip', content: 'FRQ: always distinguish bioaccumulation (within one organism, increases with age) from biomagnification (increases across trophic levels). draw/describe the food chain with increasing concentrations at each level. identify why top predators — including humans — face the highest risk.' },
]

export default function APESU8T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 4, title: 'bioaccumulation & biomagnification', keyTerms: ['bioaccumulation', 'biomagnification', 'DDT', 'methylmercury', 'PCBs', 'lipophilic', 'trophic level', 'persistent', 'Silent Spring', 'Minamata disease'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/3', title: 'eutrophication' }}
      next={{ href: '/apes/unit-8/5', title: 'pathogens & disease' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
