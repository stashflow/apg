import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'two types of smog',
  },
  {
    type: 'body',
    content: 'smog ("smoke + fog") refers to visible air pollution. there are two distinct types with different chemistry, appearance, and causes.',
  },
  {
    type: 'heading',
    content: 'photochemical smog (LA-type / brown smog)',
  },
  {
    type: 'body',
    content: 'formed by sunlight-driven reactions between vehicle emissions. characteristic of sunny cities with heavy traffic.',
  },
  {
    type: 'subheading',
    content: 'formation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**precursors** — NOₓ + VOCs from vehicle exhaust and gasoline vapors',
      '**catalyst** — intense sunlight (UV radiation)',
      '**products** — ground-level ozone (O₃), PAN, aldehydes',
      '**timing** — worst on hot, sunny afternoons',
    ],
  },
  {
    type: 'subheading',
    content: 'characteristics',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**color** — brown/yellow (from NO₂)',
      '**season** — summer (more sunlight)',
      '**location** — sunny cities with traffic: Los Angeles, Mexico City, Beijing, Delhi',
      '**geography** — worse in valleys and basins where air is trapped',
    ],
  },
  {
    type: 'subheading',
    content: 'health effects',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**respiratory** — ozone damages lung tissue, worsens asthma',
      '**eye irritation** — PAN and other oxidants',
      '**cardiovascular** — linked to heart disease and stroke',
    ],
  },
  {
    type: 'heading',
    content: 'industrial smog (London-type / gray smog)',
  },
  {
    type: 'body',
    content: 'formed by burning coal, especially in cold, damp conditions. historically devastating but now controlled in developed countries.',
  },
  {
    type: 'subheading',
    content: 'formation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**precursors** — SO₂ and particulate matter from coal combustion',
      '**chemistry** — SO₂ + water → sulfuric acid; combines with soot',
      '**conditions** — cool, cloudy, humid weather',
      '**timing** — worst in winter when heating demand is high',
    ],
  },
  {
    type: 'subheading',
    content: 'characteristics',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**color** — gray/black (from soot and sulfate particles)',
      '**season** — winter (more coal burning for heat)',
      '**location** — historically: London, Pittsburgh, industrial cities',
      '**today** — still a problem in developing countries using coal (China, India)',
    ],
  },
  {
    type: 'subheading',
    content: 'Great London Smog of 1952',
  },
  {
    type: 'body',
    content: 'the worst air pollution disaster in history:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**cause** — coal burning + temperature inversion + fog',
      '**duration** — December 5-9, 1952',
      '**deaths** — 4,000 immediate, 8,000+ in following months',
      '**result** — Clean Air Act of 1956 (UK), shift away from coal',
    ],
  },
  {
    type: 'examtip',
    content: 'know the differences: photochemical (brown, summer, sunny, NOₓ+VOCs, ozone) vs industrial (gray, winter, cold/damp, SO₂+PM, sulfuric acid). LA = photochemical; London 1952 = industrial.',
  },
  {
    type: 'heading',
    content: 'comparison table',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**photochemical** — brown, summer, sunny, NOₓ + VOCs + sunlight → O₃',
      '**industrial** — gray, winter, cold/damp, SO₂ + PM + water → H₂SO₄',
    ],
  },
  {
    type: 'heading',
    content: 'reducing smog',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**photochemical** — catalytic converters, cleaner fuels, public transit, VOC regulations',
      '**industrial** — scrubbers, fuel switching (coal to gas), particulate filters',
      '**both** — reducing emissions of precursor pollutants',
    ],
  },
  {
    type: 'frqtip',
    content: 'smog comparison is a classic FRQ. create a clear comparison: type, color, season, precursors, chemistry, health effects, example city. know that reducing photochemical smog requires controlling NOₓ and VOCs; industrial smog requires controlling SO₂ and PM.',
  },
]

export default function APESU7T3() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{
        number: 3,
        title: 'photochemical vs industrial smog',
        keyTerms: ['photochemical smog', 'industrial smog', 'brown smog', 'gray smog', 'London 1952', 'ozone'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-7/2', title: 'secondary pollutants' }}
      next={{ href: '/apes/unit-7/4', title: 'thermal inversions' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
