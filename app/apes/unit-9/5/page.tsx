import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'climate change and biodiversity' },
  { type: 'body', content: 'climate change is already causing measurable shifts in species ranges, reproductive timing, migration patterns, and community composition. combined with habitat destruction and other stressors, climate change threatens to cause the sixth mass extinction — with extinction rates estimated at 1,000× background rate.' },
  { type: 'heading', content: 'range shifts' },
  { type: 'bullets', content: '', bullets: ['species move toward the poles and to higher elevations as temperatures rise', 'average range shift: ~17 km poleward per decade for terrestrial species', '**examples**: American pikas retreating to higher elevations; fish moving poleward in oceans; invasive species expanding into formerly cold areas', '**problem**: habitat may not be available at the new location; species cannot always move fast enough; barriers (roads, cities, agriculture) block movement'] },
  { type: 'heading', content: 'phenology changes' },
  { type: 'bullets', content: '', bullets: ['**phenology**: timing of seasonal biological events — flowering, migration, hibernation, hatching', 'plants flowering earlier → bees emerge before flowers open (phenological mismatch)', 'birds arrive for migration before peak insect availability → reduced reproductive success', 'amphibians breeding earlier; salmon timing disrupted by altered snowmelt patterns', '**trophic mismatch**: when predator and prey (or pollinators and plants) shift timing independently — reduces ecosystem stability'] },
  { type: 'heading', content: 'extinction risk' },
  { type: 'bullets', content: '', bullets: ['IPCC: 1°C rise → 5% species threatened; 1.5°C → 8%; 2°C → 16%; 3°C → 29% at high risk of extinction', '**endemic species**: most vulnerable — limited range, cannot disperse', '**coral reefs**: if warming exceeds 2°C above pre-industrial, 99% of corals functionally extinct', '**polar species**: polar bears, ringed seals, Arctic foxes — sea ice loss destroys habitat', '**amphibians**: most threatened vertebrate class; skin-breathing makes them sensitive to temperature and moisture changes; chytrid fungus (spreading with warming) has caused catastrophic declines'] },
  { type: 'heading', content: 'ecosystem disruption' },
  { type: 'bullets', content: '', bullets: ['**biome shifts**: tundra → boreal; boreal → temperate; treeline moving upslope and poleward', '**invasive species facilitated**: warm winters allow pests to expand (mountain pine beetle decimating western U.S. forests)', '**disease expansion**: mosquito-borne diseases (malaria, dengue) expanding to higher elevations as vectors spread', '**wildfire**: longer fire seasons, more intense fires → habitat loss, carbon release, air quality impacts'] },
  { type: 'examtip', content: 'phenological mismatch is a sophisticated concept the exam loves — when two species that depend on each other shift their timing at different rates. range shifts poleward and upward in elevation are well-documented. know that climate change multiplies the effects of habitat loss and other threats.' },
]

export default function APESU9T5() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 5, title: 'climate impacts on biodiversity', keyTerms: ['range shift', 'phenology', 'trophic mismatch', 'extinction risk', 'endemic species', 'biome shift', 'chytrid fungus', 'mountain pine beetle'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/4', title: 'sea level rise' }}
      next={{ href: '/apes/unit-9/6', title: 'climate tipping points' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
