import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'normal atmospheric conditions',
  },
  {
    type: 'body',
    content: 'normally, temperature decreases with altitude in the troposphere (about 6.5°C per km). warm air near the surface rises, carrying pollutants upward where they disperse.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**warm air rises** — heated by the sun, surface air is buoyant',
      '**convection** — rising air creates mixing and dispersal',
      '**pollutant dilution** — emissions spread through large volume of atmosphere',
    ],
  },
  {
    type: 'heading',
    content: 'what is a thermal inversion?',
  },
  {
    type: 'body',
    content: 'a thermal inversion occurs when a layer of warm air sits above cooler air near the surface, trapping pollutants below.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**normal** — temperature decreases with altitude',
      '**inversion** — temperature increases with altitude (at least temporarily)',
      '**stable layer** — warm air acts as a lid, preventing vertical mixing',
      '**pollution trap** — emissions accumulate near ground level',
    ],
  },
  {
    type: 'heading',
    content: 'how inversions form',
  },
  {
    type: 'subheading',
    content: 'radiation inversion',
  },
  {
    type: 'body',
    content: 'most common type; forms on clear, calm nights:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**nighttime cooling** — ground radiates heat to space, cooling surface air',
      '**clear skies** — clouds would trap heat; clear skies allow rapid cooling',
      '**calm winds** — no mixing maintains the temperature difference',
      '**morning breakup** — sun heats surface, inversion usually dissipates by midday',
    ],
  },
  {
    type: 'subheading',
    content: 'subsidence inversion',
  },
  {
    type: 'body',
    content: 'forms when air sinks and warms (common in high-pressure systems):',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high pressure** — air descends from above',
      '**adiabatic warming** — descending air compresses and warms',
      '**warm layer aloft** — creates stable cap over cooler surface air',
      '**can persist for days** — doesn\'t break up as easily as radiation inversions',
    ],
  },
  {
    type: 'subheading',
    content: 'topographic effects',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**valleys and basins** — cold air drains downhill and pools at bottom',
      '**Los Angeles** — surrounded by mountains that trap air',
      '**Mexico City** — sits in a basin at 7,300 ft elevation',
      '**Denver** — "brown cloud" trapped against Rocky Mountains',
    ],
  },
  {
    type: 'heading',
    content: 'impacts of inversions',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**pollution spikes** — pollutant concentrations can reach dangerous levels',
      '**health emergencies** — respiratory distress, hospitalizations, deaths',
      '**reduced visibility** — trapped particles create haze',
      '**historic events** — London 1952, Donora PA 1948 (20 deaths)',
    ],
  },
  {
    type: 'examtip',
    content: 'inversions trap pollutants, they don\'t create them. when asked why pollution is worse during inversions, explain: (1) warm air above cool air, (2) no vertical mixing, (3) pollutants accumulate near surface. valleys and basins are especially vulnerable.',
  },
  {
    type: 'heading',
    content: 'predicting and responding',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**weather forecasts** — inversions can be predicted',
      '**air quality alerts** — warnings to limit outdoor activity',
      '**emission restrictions** — some cities limit driving or industry during inversions',
      '**burn bans** — prohibit wood burning during inversions',
    ],
  },
  {
    type: 'frqtip',
    content: 'inversion FRQs ask: (1) what is an inversion (warm over cold), (2) how does it form (radiation cooling or subsidence), (3) why does it trap pollution (prevents vertical mixing), (4) where is it worse (valleys, basins). draw a diagram if possible.',
  },
]

export default function APESU7T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{
        number: 4,
        title: 'thermal inversions',
        keyTerms: ['thermal inversion', 'temperature inversion', 'subsidence', 'radiation inversion', 'stable layer'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-7/3', title: 'photochemical vs industrial smog' }}
      next={{ href: '/apes/unit-7/5', title: 'acid rain' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
