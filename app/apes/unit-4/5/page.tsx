import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what drives global winds?',
  },
  {
    type: 'body',
    content: 'global wind patterns are driven by uneven heating of Earth\'s surface. the equator receives more direct sunlight than the poles, creating temperature differences that drive atmospheric circulation. this circulation is modified by Earth\'s rotation (Coriolis effect).',
  },
  {
    type: 'heading',
    content: 'atmospheric convection cells',
  },
  {
    type: 'body',
    content: 'the atmosphere is organized into three convection cells in each hemisphere. warm air rises, moves poleward, cools, sinks, and returns to complete the loop.',
  },
  {
    type: 'subheading',
    content: 'Hadley cells (0°-30°)',
  },
  {
    type: 'body',
    content: 'the largest and most powerful cells, driven directly by equatorial heating.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**warm air rises at equator** — creates low pressure zone (ITCZ)',
      '**air moves poleward at high altitude** — cools and loses moisture',
      '**air sinks at ~30° latitude** — creates high pressure (subtropical deserts)',
      '**surface winds return to equator** — trade winds',
    ],
  },
  {
    type: 'subheading',
    content: 'Ferrel cells (30°-60°)',
  },
  {
    type: 'body',
    content: 'mid-latitude cells driven by interaction with Hadley and Polar cells.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**air rises at ~60° latitude** — low pressure, stormy zone',
      '**air sinks at ~30° latitude** — high pressure',
      '**surface winds blow poleward** — westerlies',
    ],
  },
  {
    type: 'subheading',
    content: 'Polar cells (60°-90°)',
  },
  {
    type: 'body',
    content: 'weak cells driven by cold, sinking polar air.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**cold air sinks at poles** — high pressure',
      '**air moves equatorward** — polar easterlies',
      '**air rises at ~60°** — meets Ferrel cell, creates storms',
    ],
  },
  {
    type: 'heading',
    content: 'the Coriolis effect',
  },
  {
    type: 'body',
    content: 'Earth\'s rotation deflects moving air (and water) — to the right in the Northern Hemisphere, to the left in the Southern Hemisphere. this is why winds don\'t blow directly north-south.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**maximum at poles** — deflection is strongest',
      '**zero at equator** — no deflection at equator',
      '**affects wind direction** — trade winds blow NE→SW (N. Hem.) or SE→NW (S. Hem.)',
      '**affects ocean currents** — creates circular gyres',
    ],
  },
  {
    type: 'heading',
    content: 'global wind belts',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['wind belt', 'location', 'direction', 'characteristics'],
    tableRows: [
      ['trade winds', '0°-30°', 'NE→SW (N) or SE→NW (S)', 'steady, reliable, drove sailing ships'],
      ['westerlies', '30°-60°', 'SW→NE (N) or NW→SE (S)', 'variable, bring storms to mid-latitudes'],
      ['polar easterlies', '60°-90°', 'NE→SW (N) or SE→NW (S)', 'cold, weak, less consistent'],
    ],
  },
  {
    type: 'heading',
    content: 'pressure zones',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**equatorial low (ITCZ)** — warm air rises, causes rain (rainforests)',
      '**subtropical highs (~30°)** — cool air sinks, dry (deserts like Sahara, Mojave)',
      '**subpolar lows (~60°)** — air rises, stormy weather',
      '**polar highs** — cold air sinks, dry, cold',
    ],
  },
  {
    type: 'examtip',
    content: 'rising air = low pressure = wet (clouds form as air cools). sinking air = high pressure = dry (air warms, moisture evaporates). that\'s why deserts are at ~30° latitude (sinking air in Hadley cell).',
  },
  {
    type: 'heading',
    content: 'jet streams',
  },
  {
    type: 'body',
    content: 'jet streams are fast-moving rivers of air at high altitude (~10 km), flowing west to east at the boundaries between circulation cells.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**polar jet stream** — at ~60° latitude, separates polar and temperate air',
      '**subtropical jet stream** — at ~30° latitude',
      '**affect weather patterns** — storms follow jet stream path',
      '**affected by climate change** — warming Arctic may be causing "wavy" jet stream, bringing extreme weather',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may ask why certain regions are wet or dry. connect to rising vs. sinking air: equator = rising = wet, 30° = sinking = dry. or they may ask about the Coriolis effect and wind direction.',
  },
]

export default function APESU4T5() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 5,
        title: 'global wind patterns',
        keyTerms: ['Hadley cell', 'Ferrel cell', 'Polar cell', 'Coriolis effect', 'trade winds', 'westerlies', 'jet stream', 'ITCZ'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-4/4', title: 'atmospheric layers' }}
      next={{ href: '/apes/unit-4/6', title: 'geography & climate' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
