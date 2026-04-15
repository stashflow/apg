import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'thermal pollution' },
  { type: 'body', content: 'thermal pollution occurs when industrial processes — primarily power plant cooling — discharge heated water into rivers, lakes, or estuaries. even a small temperature increase (3–5°C) can devastate aquatic ecosystems by reducing dissolved oxygen and disrupting species that depend on specific temperature ranges.' },
  { type: 'heading', content: 'how it works: the dissolved oxygen connection' },
  { type: 'bullets', content: '', bullets: ['**key principle**: warm water holds less dissolved oxygen (DO) than cold water — inverse relationship', 'at 10°C: DO ≈ 11 mg/L; at 25°C: DO ≈ 8 mg/L; at 35°C: DO ≈ 7 mg/L', 'fish need minimum 5–6 mg/L DO to survive; cold-water species (trout, salmon) need 7+ mg/L', '**combined effect**: warm water reduces DO AND increases fish metabolism — double stress'] },
  { type: 'heading', content: 'sources of thermal pollution' },
  { type: 'bullets', content: '', bullets: ['**nuclear and coal power plants**: once-through cooling — river water pulled in, heated by condensers, returned 10–15°C warmer', '**industrial manufacturing**: steel mills, chemical plants', '**urban runoff**: paved surfaces absorb heat; stormwater carries warm water to streams', '**deforestation along streams**: removes shading canopy; sunlight directly heats exposed water'] },
  { type: 'heading', content: 'ecological effects' },
  { type: 'bullets', content: '', bullets: ['**species displacement**: cold-water species (salmon, trout) flee or die; warm-water species invade', '**spawning disruption**: many fish species rely on specific temperatures to trigger reproduction', '**algal growth**: warm water accelerates algal and cyanobacteria growth → eutrophication risk', '**invasive species**: thermal plumes can favor non-native warm-water tolerant species', '**oxygen sag curve**: downstream from discharge, DO drops then recovers — classic pollution profile'] },
  { type: 'heading', content: 'solutions' },
  { type: 'bullets', content: '', bullets: ['**cooling towers**: evaporative towers cool water before discharge — most effective', '**cooling ponds**: large ponds allow water to cool before re-entering stream', '**once-through to closed-cycle**: replacing open systems with recirculating systems', '**mandatory thermal discharge limits**: EPA sets temperature limits under Clean Water Act NPDES permits', '**riparian buffers**: replanting streamside trees to restore natural shading'] },
  { type: 'examtip', content: 'the exam may give a graph showing DO vs. distance downstream from a power plant discharge. know the shape: DO drops sharply at the discharge point, gradually recovers downstream as water cools. this is the oxygen sag curve. cite cooling towers as the primary solution.' },
]

export default function APESU8T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 2, title: 'thermal pollution', keyTerms: ['dissolved oxygen', 'cooling tower', 'once-through cooling', 'oxygen sag curve', 'NPDES', 'riparian buffer', 'cold-water species'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/1', title: 'water pollution sources' }}
      next={{ href: '/apes/unit-8/3', title: 'eutrophication' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
