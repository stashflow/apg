import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'factors that influence climate',
  },
  {
    type: 'body',
    content: 'climate is the long-term average of weather conditions in a region. while latitude and global circulation patterns set the broad climate zones, local geography can dramatically modify conditions.',
  },
  {
    type: 'heading',
    content: 'latitude',
  },
  {
    type: 'body',
    content: 'latitude is the primary determinant of climate because it affects how much solar energy an area receives.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**equator (0°)** — receives most direct sunlight year-round; hot, wet',
      '**tropics (0°-23.5°)** — high sun angle, warm all year',
      '**temperate (23.5°-66.5°)** — distinct seasons, moderate temperatures',
      '**polar (66.5°-90°)** — low sun angle, extreme cold, polar day/night cycles',
    ],
  },
  {
    type: 'heading',
    content: 'altitude (elevation)',
  },
  {
    type: 'body',
    content: 'temperature decreases with altitude at about 6.5°C per 1,000 meters. this is why mountains can be snow-capped even at the equator.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**lapse rate** — temperature drops ~6.5°C per km of elevation',
      '**alpine climates** — similar to higher latitudes despite being in tropics',
      '**vegetation zones** — change with elevation just like they change with latitude',
      '**example** — Mount Kilimanjaro (on equator) has permanent ice cap',
    ],
  },
  {
    type: 'heading',
    content: 'proximity to water',
  },
  {
    type: 'body',
    content: 'water has a high heat capacity — it heats and cools slowly. this moderates temperatures of nearby land.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**maritime (oceanic) climates** — small temperature range, mild winters, cool summers, often foggy',
      '**continental climates** — large temperature range, hot summers, cold winters',
      '**coastal areas** — moderated by ocean; San Francisco stays mild year-round',
      '**inland areas** — experience temperature extremes; Kansas has hot summers, cold winters',
    ],
  },
  {
    type: 'examtip',
    content: 'maritime vs. continental climates is a common comparison. water moderates temperature (smaller range), while land far from water has extreme seasons (larger range). this is why coastal California and inland Nebraska have such different climates despite similar latitudes.',
  },
  {
    type: 'heading',
    content: 'rain shadows',
  },
  {
    type: 'body',
    content: 'when moist air hits a mountain range, it rises, cools, and drops precipitation on the windward side. the leeward (downwind) side is dry — a rain shadow.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**orographic lift** — air forced upward by terrain',
      '**windward side** — wet, lush vegetation',
      '**leeward side** — dry, often desert-like',
      '**examples** — Cascades (Washington), Sierra Nevada (California), Himalayas (Gobi Desert in rain shadow)',
    ],
  },
  {
    type: 'heading',
    content: 'ocean currents',
  },
  {
    type: 'body',
    content: 'ocean currents carry warm or cold water to coastal areas, dramatically affecting their climate.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**warm currents** — heat coastal areas (Gulf Stream warms Western Europe)',
      '**cold currents** — cool coastal areas (California Current brings cool temperatures to LA)',
      '**upwelling** — cold, nutrient-rich water rises to surface (supports fisheries)',
      '**examples** — Britain is much warmer than Labrador (same latitude) due to Gulf Stream',
    ],
  },
  {
    type: 'heading',
    content: 'summary of factors',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['factor', 'effect on temperature', 'effect on precipitation'],
    tableRows: [
      ['higher latitude', 'cooler', 'generally drier'],
      ['higher altitude', 'cooler', 'varies (often wetter on mountains)'],
      ['near ocean', 'more moderate', 'often wetter'],
      ['inland/continental', 'more extreme', 'often drier'],
      ['windward side', 'cooler (wet adiabatic)', 'wetter'],
      ['leeward side', 'warmer (compression)', 'drier (rain shadow)'],
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs often describe a location and ask you to explain its climate. use multiple factors: latitude sets the baseline, then modify for altitude, distance from water, ocean currents, and rain shadows. be specific about mechanisms.',
  },
]

export default function APESU4T6() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 6,
        title: 'geography & climate',
        keyTerms: ['latitude', 'altitude', 'maritime', 'continental', 'rain shadow', 'orographic lift', 'lapse rate'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-4/5', title: 'global wind patterns' }}
      next={{ href: '/apes/unit-4/7', title: 'El Niño & La Niña' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
