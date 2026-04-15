import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'what are tipping points?' },
  { type: 'body', content: 'climate tipping points are thresholds in the Earth system where a small additional change triggers a large, potentially irreversible shift. once crossed, tipping points may be self-reinforcing — the system keeps moving even if warming stops. scientists have identified multiple interacting tipping elements, and crossing one may trigger others (tipping cascade).' },
  { type: 'heading', content: 'major climate tipping points' },
  { type: 'subheading', content: '1. Arctic permafrost thaw' },
  { type: 'bullets', content: '', bullets: ['permafrost stores ~1,700 Gt C (twice atmospheric CO₂)', 'thaw releases CO₂ and CH₄ → positive feedback loop', 'already accelerating in Siberia, Alaska, Canada', 'creates thermokarst lakes (land subsides into depressions)'] },
  { type: 'subheading', content: '2. West Antarctic Ice Sheet (WAIS) collapse' },
  { type: 'bullets', content: '', bullets: ['marine ice sheet — rests on bedrock below sea level; ocean warming undermines from below', 'may be destabilizing already (Thwaites Glacier — "doomsday glacier")', 'collapse → 3–5 m sea level rise over centuries'] },
  { type: 'subheading', content: '3. Greenland ice sheet disintegration' },
  { type: 'bullets', content: '', bullets: ['may be committed to eventual disintegration at 1.5–2°C warming', 'if fully melted → 7 m sea level rise (over centuries to millennia)'] },
  { type: 'subheading', content: '4. Amazon rainforest dieback' },
  { type: 'bullets', content: '', bullets: ['Amazon creates its own rainfall through transpiration (flying river)', 'deforestation + warming → reduced rainfall → forest dies back → savannification', 'tipping point estimated at ~20–25% deforestation (currently ~20%)', 'forest contains 150–200 Gt of carbon — release would be catastrophic'] },
  { type: 'subheading', content: '5. Atlantic Ocean circulation (AMOC) slowdown' },
  { type: 'bullets', content: '', bullets: ['AMOC (Atlantic Meridional Overturning Circulation) — "conveyor belt" that brings warm water north', 'Greenland melt dilutes salty water → disrupts thermohaline circulation → AMOC weakens', 'collapse would cool Europe dramatically, shift monsoon patterns globally'] },
  { type: 'subheading', content: '6. Coral reef die-off' },
  { type: 'bullets', content: '', bullets: ['at 2°C warming, 99% of corals predicted functionally extinct', 'reefs support 25% of marine biodiversity; support 500+ million people', 'bleaching is already causing large-scale die-offs globally'] },
  { type: 'callout', content: 'tipping cascade: scientists warn that crossing multiple tipping points could trigger others through interactions — e.g., Amazon dieback → more CO₂ → more permafrost thaw → more CO₂. a 2018 paper in PNAS called this "Hothouse Earth" scenario.' },
  { type: 'examtip', content: 'know permafrost, Amazon, and WAIS as the three most-tested tipping points. explain each as a positive feedback: crossing the threshold → self-reinforcing change → irreversible even if emissions stop. the word "irreversible" is key to defining a tipping point.' },
]

export default function APESU9T6() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 6, title: 'climate tipping points', keyTerms: ['tipping point', 'permafrost', 'West Antarctic Ice Sheet', 'Amazon dieback', 'AMOC', 'tipping cascade', 'thermohaline circulation', 'irreversibility'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/5', title: 'climate impacts on biodiversity' }}
      next={{ href: '/apes/unit-9/7', title: 'mitigation strategies' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
