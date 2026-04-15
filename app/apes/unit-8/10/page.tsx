import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'the plastic pollution crisis' },
  { type: 'body', content: 'over 8 million metric tons of plastic enter the ocean every year. plastic does not biodegrade — it photodegrades, breaking into smaller and smaller fragments over hundreds of years. the persistence, abundance, and ecological impacts of plastic make it one of the defining environmental issues of the 21st century.' },
  { type: 'heading', content: 'ocean garbage patches' },
  { type: 'bullets', content: '', bullets: ['**Great Pacific Garbage Patch**: concentrated zone of floating plastic in the North Pacific subtropical gyre — not a solid island, but a diffuse zone of plastic-rich water', 'ocean gyres (circular current systems) trap buoyant plastic in convergence zones', '5 major gyres, each with a garbage patch accumulation zone', 'plastic-to-plankton ratio in some areas exceeds 6:1 by weight', '**SEAPLEX expedition (2009)**: documented widespread plastic in North Pacific — mainly fragments, not visible from space'] },
  { type: 'heading', content: 'microplastics' },
  { type: 'bullets', content: '', bullets: ['**definition**: plastic particles < 5 mm in diameter', '**primary microplastics**: manufactured small — microbeads (banned in U.S. 2015 Microbead-Free Waters Act), nurdles (pre-production pellets), synthetic fabric fibers', '**secondary microplastics**: result from breakdown of larger plastic items by UV and physical abrasion', '**where found**: ocean surface, deep sea sediment, Arctic ice, freshwater, soil, rain, air — literally everywhere', '**human exposure**: found in human blood, lungs, placentas, breast milk — health impacts not yet fully understood'] },
  { type: 'heading', content: 'ecological impacts' },
  { type: 'bullets', content: '', bullets: ['**entanglement**: sea turtles, seals, whales, seabirds caught in nets, six-pack rings, fishing line → injury, drowning, starvation', '**ingestion — macroplastic**: sea turtles eat plastic bags (mistaken for jellyfish); seabirds feed plastic to chicks → starvation', '**ingestion — microplastic**: fish, zooplankton, filter feeders consume microplastics; physical blockage and chemical transfer of sorbed pollutants (POPs)', '**chemical toxicity**: plastic sorbs (concentrates) persistent organic pollutants (POPs) like PCBs and DDT up to 1 million times seawater concentration → transfers to organisms upon ingestion', '**habitat alteration**: plastic debris on coral reefs increases disease, smothers polyps'] },
  { type: 'heading', content: 'solutions and policy' },
  { type: 'bullets', content: '', bullets: ['**upstream**: reduce single-use plastic production; ban plastic bags (150+ countries); extended producer responsibility (EPR)', '**collection**: improved waste management in developing nations (80% of ocean plastic enters from 10 rivers, mostly in Asia/Africa)', '**The Ocean Cleanup**: passive collection systems in gyres — ongoing project', '**recycling**: only ~9% of all plastic ever made has been recycled', '**alternatives**: compostable bioplastics (limited — still require industrial composting), paper, glass, reusable containers'] },
  { type: 'examtip', content: 'plastic does NOT biodegrade — it photodegrades into microplastics. this is a key distinction. the exam may ask about sources of microplastics (primary vs. secondary), how they enter food chains, and policy solutions. ban single-use plastics and improve waste infrastructure are the most-tested solutions.' },
]

export default function APESU8T10() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 10, title: 'plastic pollution', keyTerms: ['microplastics', 'ocean gyre', 'Great Pacific Garbage Patch', 'photodegradation', 'entanglement', 'POPs', 'nurdles', 'microbeads', 'extended producer responsibility'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/9', title: 'oil spills' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
