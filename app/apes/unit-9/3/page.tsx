import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'ocean warming' },
  { type: 'body', content: 'the ocean has absorbed over 90% of the excess heat trapped by greenhouse gases since the 1970s. this is causing measurable warming of ocean water, expansion of the ocean\'s volume, and disruption of marine ecosystems — including the catastrophic mass bleaching of coral reefs worldwide.' },
  { type: 'bullets', content: '', bullets: ['ocean surface temperatures have increased ~0.13°C per decade since 1901', 'thermal expansion of warming water accounts for ~30–40% of sea level rise', 'warm water holds less dissolved oxygen → expanding oxygen minimum zones (OMZs)', '**coral bleaching**: corals expel symbiotic algae (zooxanthellae) when water is too warm → turn white → starve; sustained bleaching → death', 'Great Barrier Reef: 50% of coral died from bleaching events 2016–2017; 2024 worst bleaching on record'] },
  { type: 'heading', content: 'ocean acidification' },
  { type: 'body', content: 'oceans absorb ~25% of human CO₂ emissions. CO₂ dissolved in seawater reacts to form carbonic acid, lowering ocean pH. since pre-industrial times, ocean pH has dropped from ~8.2 to ~8.1 — a 26% increase in acidity (logarithmic scale).' },
  { type: 'subheading', content: 'the chemistry' },
  { type: 'bullets', content: '', bullets: ['CO₂ + H₂O → H₂CO₃ (carbonic acid)', 'H₂CO₃ → H⁺ + HCO₃⁻ (bicarbonate)', 'increased H⁺ → lower pH (more acidic)', 'H⁺ ions react with carbonate (CO₃²⁻): H⁺ + CO₃²⁻ → HCO₃⁻ — reduces carbonate availability'] },
  { type: 'subheading', content: 'impacts on marine life' },
  { type: 'bullets', content: '', bullets: ['**calcification**: many organisms build shells/skeletons from calcium carbonate (CaCO₃). reduced carbonate → shells thinner, weaker, dissolve', 'affects: oysters, mussels, clams, sea urchins, corals, pteropods (sea snails at base of food chain)', '**pteropods**: dissolving shells in Southern Ocean — key food source for salmon, whales, seabirds', '**fish behavior**: elevated CO₂ impairs smell, navigation, and predator avoidance in some fish species', '**coral reefs**: double stress — warming causes bleaching, acidification weakens skeletons'] },
  { type: 'callout', content: 'ocean acidification is sometimes called "climate change\'s evil twin." it is irreversible on human timescales — oceans will not return to pre-industrial pH without geological intervention over thousands of years. the Southern Ocean is acidifying fastest.' },
  { type: 'heading', content: 'sea level rise' },
  { type: 'bullets', content: '', bullets: ['**two causes**: (1) thermal expansion of warming water (~50%), (2) melting glaciers and ice sheets (~50%)', 'global sea level has risen ~20 cm since 1900; currently rising ~3.3 mm/year', 'projections: 0.3–1.0 m by 2100 (IPCC AR6) depending on emissions pathway', '**impacts**: saltwater intrusion into freshwater aquifers, flooding of coastal cities (Miami, Mumbai, Bangladesh), displacement of coastal populations, erosion, wetland loss'] },
  { type: 'examtip', content: 'acidification formula sequence: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻. know that H⁺ reacts with carbonate → less carbonate for shell builders. sea level rise has two causes — thermal expansion AND ice melt — both are testable.' },
]

export default function APESU9T3() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 3, title: 'ocean warming & acidification', keyTerms: ['ocean acidification', 'carbonic acid', 'calcification', 'coral bleaching', 'zooxanthellae', 'thermal expansion', 'sea level rise', 'pteropods', 'pH'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/2', title: 'carbon cycle & feedbacks' }}
      next={{ href: '/apes/unit-9/4', title: 'sea level rise' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
