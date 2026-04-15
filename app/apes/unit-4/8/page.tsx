import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is a thermal inversion?',
  },
  {
    type: 'body',
    content: 'a thermal inversion (temperature inversion) occurs when a layer of warm air traps cooler air below it, preventing vertical mixing. normally, air temperature decreases with altitude, and warm air rises, carrying pollutants up and away. during an inversion, this mixing stops.',
  },
  {
    type: 'heading',
    content: 'normal vs. inverted conditions',
  },
  {
    type: 'subheading',
    content: 'normal atmospheric conditions',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**temperature decreases with altitude** — warm air at surface rises',
      '**vertical mixing occurs** — pollutants disperse upward',
      '**convection** — warm surface air rises, cools, and mixes with upper air',
    ],
  },
  {
    type: 'subheading',
    content: 'temperature inversion',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**warm layer sits above cool layer** — reverse of normal',
      '**cold air trapped below** — acts as a lid, preventing rising',
      '**no vertical mixing** — pollutants accumulate at surface',
      '**can persist for days** — until weather systems break it up',
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
    content: 'the most common type. forms on clear, calm nights when the ground loses heat rapidly by radiation.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**clear night sky** — allows infrared radiation to escape',
      '**ground cools rapidly** — cools the air directly above it',
      '**upper air stays warmer** — creates inversion layer',
      '**breaks up** — when morning sun heats the surface',
    ],
  },
  {
    type: 'subheading',
    content: 'subsidence inversion',
  },
  {
    type: 'body',
    content: 'forms when air sinks over a region, compressing and warming as it descends.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high pressure systems** — cause air to sink',
      '**air compresses and warms** — creates warm layer aloft',
      '**marine layer below** — common in coastal areas like Los Angeles',
      '**can last days** — until weather pattern changes',
    ],
  },
  {
    type: 'heading',
    content: 'geographic factors',
  },
  {
    type: 'body',
    content: 'certain geographic features make inversions more common and more severe:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**valleys and basins** — cold air drains downhill and pools in low areas',
      '**coastal cities** — marine layer creates natural inversion',
      '**mountains surrounding** — trap air and prevent dispersal',
      '**high altitude cities** — Denver, Mexico City, Salt Lake City prone to inversions',
    ],
  },
  {
    type: 'examtip',
    content: 'Los Angeles is the classic inversion example: coastal location (marine layer), surrounded by mountains (traps air), sunny weather (photochemical smog), and many cars (emission sources). all factors combine to create severe air quality problems.',
  },
  {
    type: 'heading',
    content: 'inversions and air pollution',
  },
  {
    type: 'body',
    content: 'thermal inversions dramatically worsen air quality by trapping pollutants near the surface:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**pollutants accumulate** — no vertical dispersion',
      '**smog formation** — pollutants react in trapped air',
      '**health effects** — respiratory problems, especially for vulnerable populations',
      '**visibility reduction** — haze and fog',
    ],
  },
  {
    type: 'subheading',
    content: 'historical pollution events',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['event', 'year', 'deaths', 'cause'],
    tableRows: [
      ['London "Killer Fog"', '1952', '~12,000', 'coal smoke + fog + inversion'],
      ['Donora, Pennsylvania', '1948', '20', 'industrial emissions + inversion'],
      ['Los Angeles smog', 'ongoing', '—', 'vehicle emissions + inversions'],
    ],
  },
  {
    type: 'heading',
    content: 'breaking an inversion',
  },
  {
    type: 'body',
    content: 'inversions end when the atmospheric layering is disrupted:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**solar heating** — morning sun heats surface, restores normal convection',
      '**wind** — horizontal wind mixes air and breaks inversion layer',
      '**frontal passage** — weather fronts bring new air masses',
      '**storms** — precipitation washes pollutants out; turbulence mixes air',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may describe a city with severe air pollution and ask you to explain why. if the city is in a valley, coastal, or surrounded by mountains, thermal inversions are likely part of the answer. explain how the inversion traps pollutants and what geographic factors make it worse.',
  },
]

export default function APESU4T8() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 8,
        title: 'thermal inversion',
        keyTerms: ['thermal inversion', 'temperature inversion', 'radiation inversion', 'subsidence inversion', 'smog', 'air quality'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-4/7', title: 'El Niño & La Niña' }}
      next={{ href: '/apes/unit-4/9', title: 'ocean currents' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
