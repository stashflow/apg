import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'the carbon cycle' },
  { type: 'body', content: 'carbon moves continuously between the atmosphere, biosphere, hydrosphere, and lithosphere. understanding carbon sources (processes that release CO₂) and sinks (processes that absorb CO₂) is essential for understanding climate change and mitigation strategies.' },
  { type: 'heading', content: 'carbon reservoirs (stocks)' },
  { type: 'table', content: '', tableHeaders: ['reservoir', 'approx. carbon stored', 'notes'], tableRows: [['deep ocean', '38,000 Gt C', 'largest reservoir'], ['terrestrial rocks/soil', '~2,500 Gt C', 'slow exchange'], ['terrestrial biomass', '~550 Gt C', 'forests are major store'], ['atmosphere', '~870 Gt C', 'fastest-changing reservoir'], ['surface ocean', '~1,000 Gt C', 'rapid exchange with atmosphere']] },
  { type: 'heading', content: 'carbon sources and sinks' },
  { type: 'subheading', content: 'natural sources' },
  { type: 'bullets', content: '', bullets: ['volcanic eruptions (small, geologically slow)', 'respiration (plants, animals, decomposers)', 'ocean outgassing (CO₂ released from warm surface waters)'] },
  { type: 'subheading', content: 'natural sinks' },
  { type: 'bullets', content: '', bullets: ['**photosynthesis**: plants/algae absorb CO₂, store as organic carbon', '**ocean absorption**: ~25% of human CO₂ emissions absorbed by oceans (causing acidification)', '**soil carbon**: organic matter in soil stores vast amounts of carbon'] },
  { type: 'subheading', content: 'human sources (fluxes that matter)' },
  { type: 'bullets', content: '', bullets: ['fossil fuel combustion: ~36 Gt CO₂/year — dominant source', 'deforestation and land-use change: ~5 Gt CO₂/year', 'cement production, agriculture'] },
  { type: 'heading', content: 'climate feedbacks' },
  { type: 'subheading', content: 'positive feedbacks (amplify warming)' },
  { type: 'bullets', content: '', bullets: ['**permafrost thaw**: frozen soil thaws → ancient organic matter decomposes → releases CO₂ and CH₄ → more warming (MAJOR AP topic)', '**ice-albedo**: ice melts → darker surface absorbs more heat → more melting', '**water vapor**: warming → more evaporation → water vapor (GHG) → more warming', '**forest dieback**: Amazon drought stress → trees die → release stored carbon → less photosynthesis'] },
  { type: 'subheading', content: 'negative feedbacks (dampen warming)' },
  { type: 'bullets', content: '', bullets: ['**increased plant growth**: higher CO₂ + longer growing seasons → more photosynthesis (carbon fertilization effect — limited by nutrient availability)', '**ocean uptake**: more CO₂ in atmosphere → ocean absorbs more (but this causes acidification)'] },
  { type: 'callout', content: 'the permafrost feedback is the most critical for the exam. permafrost covers ~25% of Northern Hemisphere land. it stores an estimated 1,700 Gt of carbon — twice what is currently in the atmosphere. rapid permafrost thaw is a potential climate tipping point.' },
  { type: 'examtip', content: 'distinguish positive feedback (amplifies change — BAD for climate stability) from negative feedback (dampens change — stabilizing). on the AP exam, positive does NOT mean "good" — it means self-reinforcing. ice-albedo and permafrost-methane are the two positive feedbacks you must know cold.' },
]

export default function APESU9T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 2, title: 'carbon cycle & feedbacks', keyTerms: ['carbon cycle', 'carbon source', 'carbon sink', 'permafrost', 'positive feedback', 'negative feedback', 'ice-albedo', 'ocean uptake', 'deforestation'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/1', title: 'greenhouse effect' }}
      next={{ href: '/apes/unit-9/3', title: 'ocean warming & acidification' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
      videoId="pFrfOnw8TFs"
    />
  )
}
