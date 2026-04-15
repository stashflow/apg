import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'sea level rise' },
  { type: 'body', content: 'global mean sea level has risen approximately 20 cm (8 inches) since 1900, and the rate is accelerating. two processes drive this: thermal expansion of warming water and the melting of land-based ice (glaciers and ice sheets). sea level rise threatens the homes and livelihoods of hundreds of millions of coastal residents.' },
  { type: 'heading', content: 'two causes' },
  { type: 'subheading', content: '1. thermal expansion' },
  { type: 'bullets', content: '', bullets: ['water expands as it warms — ocean volume increases even without adding water mass', 'accounts for ~50% of observed sea level rise historically (larger fraction in early 20th century)', 'will continue for centuries even if warming stops — heat already in ocean will continue to expand water'] },
  { type: 'subheading', content: '2. melting ice' },
  { type: 'bullets', content: '', bullets: ['**mountain glaciers**: contributing significantly; many will be gone this century (Glacier National Park)', '**Greenland ice sheet**: melting at accelerating rate; if fully melted → 7m sea level rise', '**Antarctic ice sheet**: most uncertain factor; if West Antarctic Ice Sheet (WAIS) collapses → ~3–5m additional rise', '**key**: only land-based ice raises sea level — sea ice (Arctic ocean ice) melting does NOT raise sea level (already displacing water)'] },
  { type: 'callout', content: 'Arctic sea ice melting does NOT raise sea level — it is already floating. This is a common AP misconception. Only glaciers and ice sheets on land raise sea level when they melt. The Arctic ice loss matters for albedo feedbacks, not sea level.' },
  { type: 'heading', content: 'impacts' },
  { type: 'bullets', content: '', bullets: ['**coastal flooding**: even small rises increase storm surge damage; "nuisance flooding" in Miami, Norfolk VA', '**saltwater intrusion**: freshwater aquifers contaminated as sea levels push salt water inland', '**wetland loss**: salt marshes and mangroves drown if rise exceeds their growth rate', '**island nations**: Pacific island nations (Tuvalu, Kiribati, Maldives) — existential threat; some negotiating land purchase in higher countries', '**infrastructure**: coastal roads, power plants, sewage treatment at risk', '**climate refugees**: estimated 200 million+ people may be displaced by 2050 in worst scenarios'] },
  { type: 'heading', content: 'projections and responses' },
  { type: 'bullets', content: '', bullets: ['IPCC AR6 (2021): 0.28–1.01 m by 2100 under different scenarios; higher scenarios possible if ice sheets destabilize', '**adaptation**: sea walls, living shorelines, managed retreat, raising buildings', '**managed retreat**: planned relocation of communities away from vulnerable coasts — most controversial but effective long-term', '**living shorelines**: restoring salt marshes and oyster reefs to buffer wave energy naturally'] },
  { type: 'examtip', content: 'remember: land ice raises sea levels, sea ice does not. know the two mechanisms (thermal expansion + ice melt). the Pacific island nations scenario is a common FRQ context — rising seas as an existential threat to sovereign nations.' },
]

export default function APESU9T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 4, title: 'sea level rise', keyTerms: ['thermal expansion', 'Greenland ice sheet', 'West Antarctic Ice Sheet', 'land ice', 'sea ice', 'saltwater intrusion', 'managed retreat', 'living shorelines', 'IPCC'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/3', title: 'ocean warming & acidification' }}
      next={{ href: '/apes/unit-9/5', title: 'climate impacts on biodiversity' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
