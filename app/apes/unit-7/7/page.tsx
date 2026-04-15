import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'what is noise pollution?' },
  { type: 'body', content: 'noise pollution is unwanted or excessive sound that disrupts the natural environment or human health. it is measured in decibels (dB) on a logarithmic scale — every 10 dB increase represents a 10× increase in sound intensity. it affects humans, wildlife, and marine life.' },
  { type: 'callout', content: 'decibels are logarithmic: 60 dB (normal conversation) is 10× louder than 50 dB (quiet library), and 100× louder than 40 dB. this logarithmic nature is frequently tested — "doubling the intensity adds 3 dB."' },
  { type: 'heading', content: 'decibel scale reference' },
  { type: 'table', content: '', tableHeaders: ['sound', 'decibels (dB)', 'effect with prolonged exposure'], tableRows: [['whisper', '30 dB', 'none'], ['normal conversation', '60 dB', 'none'], ['heavy traffic', '85 dB', 'hearing damage over time'], ['lawn mower', '90 dB', 'damage after 2 hours'], ['concert/chainsaw', '110 dB', 'damage in 30 minutes'], ['jet engine (nearby)', '140 dB', 'immediate pain/damage']] },
  { type: 'heading', content: 'effects on humans' },
  { type: 'bullets', content: '', bullets: ['**hearing loss**: noise-induced hearing loss (NIHL) from prolonged exposure above 85 dB — destroys hair cells in cochlea (irreversible)', '**cardiovascular**: chronic noise raises blood pressure, increases heart disease risk', '**sleep disruption**: even moderate noise disrupts sleep quality', '**stress & mental health**: elevated cortisol, anxiety, reduced cognitive performance in children near airports/highways', '**OSHA standard**: limits workplace exposure to 90 dB for 8-hour shifts; requires hearing protection at 85+ dB'] },
  { type: 'heading', content: 'effects on wildlife' },
  { type: 'bullets', content: '', bullets: ['**communication disruption**: birds shift song frequency or timing; whales alter calls', '**predator-prey**: masks predator sounds, disrupts hunting and escape responses', '**reproductive impacts**: stress hormones reduce breeding success', '**displacement**: animals abandon noisy habitats near highways and urban areas', '**migration**: noise corridors from roads fragment habitat and disrupt movement'] },
  { type: 'heading', content: 'ocean noise pollution' },
  { type: 'bullets', content: '', bullets: ['**sources**: commercial shipping, sonar (military), seismic surveys (oil/gas), pile driving', '**effects on cetaceans (whales/dolphins)**: disrupts echolocation, navigation, communication, and feeding', '**strandings**: naval sonar linked to mass whale strandings — causes disorientation', '**fish**: disrupts schooling behavior and predator avoidance'] },
  { type: 'heading', content: 'mitigation strategies' },
  { type: 'bullets', content: '', bullets: ['sound barriers (walls along highways)', 'zoning laws (separating industrial from residential)', 'quieter engine technologies', 'speed limits on ships in sensitive areas', 'hearing protection requirements (OSHA)', 'urban planning: parks and green buffers'] },
]

export default function APESU7T7() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{ number: 7, title: 'noise pollution', keyTerms: ['decibels', 'logarithmic scale', 'NIHL', 'cochlea', 'OSHA', 'cetaceans', 'sonar', 'sound barrier'] }}
      sections={sections}
      prev={{ href: '/apes/unit-7/6', title: 'ozone depletion' }}
      next={{ href: '/apes/unit-7/8', title: 'reducing air pollution' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
