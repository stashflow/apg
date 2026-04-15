import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is soil?',
  },
  {
    type: 'body',
    content: 'soil is a mixture of weathered rock (minerals), organic matter (humus), water, air, and living organisms. it forms slowly over centuries to millennia and is essential for plant growth, water filtration, and nutrient cycling. soil is a non-renewable resource on human timescales.',
  },
  {
    type: 'heading',
    content: 'soil formation processes',
  },
  {
    type: 'body',
    content: 'soil forms through weathering of parent material (bedrock) combined with addition of organic matter:',
  },
  {
    type: 'subheading',
    content: 'physical (mechanical) weathering',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**frost wedging** — water freezes in cracks, expands, breaks rock apart',
      '**thermal expansion** — repeated heating/cooling causes rock to crack',
      '**root growth** — plant roots penetrate cracks and pry rock apart',
      '**abrasion** — wind, water, and ice physically grind rock',
    ],
  },
  {
    type: 'subheading',
    content: 'chemical weathering',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**hydrolysis** — water reacts with minerals, altering their structure',
      '**oxidation** — oxygen reacts with iron-containing minerals (rusting)',
      '**carbonation** — CO₂ dissolves in water, forming carbonic acid that dissolves limestone',
      '**acid precipitation** — accelerates chemical weathering',
    ],
  },
  {
    type: 'subheading',
    content: 'biological weathering',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**lichens** — secrete acids that dissolve rock',
      '**burrowing organisms** — earthworms, ants, rodents mix and aerate soil',
      '**decomposition** — bacteria and fungi break down organic matter into humus',
    ],
  },
  {
    type: 'heading',
    content: 'soil horizons',
  },
  {
    type: 'body',
    content: 'mature soil develops distinct layers called horizons, visible in a soil profile:',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['horizon', 'name', 'characteristics'],
    tableRows: [
      ['O', 'organic', 'decomposing leaves, twigs; dark brown/black'],
      ['A', 'topsoil', 'humus mixed with minerals; dark, fertile; most roots and organisms'],
      ['E', 'eluviation', 'leached zone; lighter color; minerals washed downward'],
      ['B', 'subsoil', 'accumulation of clay, iron, minerals from above; reddish/brown'],
      ['C', 'parent material', 'weathered rock; little organic matter'],
      ['R', 'bedrock', 'unweathered solid rock'],
    ],
  },
  {
    type: 'examtip',
    content: 'remember the horizons as "O A E B C R" — some soils lack the E horizon. the A horizon (topsoil) is most important for agriculture. the B horizon accumulates what the E horizon loses (leaching).',
  },
  {
    type: 'heading',
    content: 'soil texture and composition',
  },
  {
    type: 'body',
    content: 'soil texture refers to the relative proportions of sand, silt, and clay particles:',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['particle', 'size', 'properties'],
    tableRows: [
      ['sand', 'largest (0.05-2mm)', 'drains quickly, low nutrients, feels gritty'],
      ['silt', 'medium (0.002-0.05mm)', 'moderate drainage and nutrients, feels smooth'],
      ['clay', 'smallest (<0.002mm)', 'holds water and nutrients, compacts easily, feels sticky'],
    ],
  },
  {
    type: 'body',
    content: '**loam** is the ideal agricultural soil — a balanced mixture of sand, silt, and clay that drains well but retains adequate water and nutrients.',
  },
  {
    type: 'heading',
    content: 'soil erosion',
  },
  {
    type: 'body',
    content: 'erosion is the removal of topsoil by wind, water, or gravity. it\'s a natural process but is accelerated dramatically by human activities:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**water erosion** — sheet erosion (thin layer), rill erosion (small channels), gully erosion (deep channels)',
      '**wind erosion** — worst on dry, exposed, fine-textured soils (Dust Bowl)',
      '**causes** — deforestation, overgrazing, poor farming practices, construction',
      '**consequences** — loss of fertility, sedimentation of waterways, reduced water-holding capacity',
    ],
  },
  {
    type: 'heading',
    content: 'soil conservation practices',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**contour plowing** — plowing across slopes, not up and down',
      '**terracing** — creating flat steps on hillsides',
      '**strip cropping** — alternating rows of different crops',
      '**cover crops** — planting crops specifically to protect and enrich soil',
      '**no-till farming** — leaving crop residue to protect soil surface',
      '**windbreaks/shelterbelts** — rows of trees to block wind',
      '**riparian buffers** — vegetation along waterways to prevent erosion',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs often describe a farm scenario and ask for conservation practices. match practices to the specific problem: water erosion on slopes = contour plowing, terracing. wind erosion = windbreaks, cover crops. explain HOW each practice works.',
  },
]

export default function APESU4T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 2,
        title: 'soil formation & erosion',
        keyTerms: ['weathering', 'soil horizons', 'topsoil', 'humus', 'loam', 'erosion', 'contour plowing', 'terracing'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-4/1', title: 'plate tectonics' }}
      next={{ href: '/apes/unit-4/3', title: 'watersheds & aquifers' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
