import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'niche breadth and ecological strategy',
  },
  {
    type: 'body',
    content: 'species differ in how narrow or broad their niches are — the range of conditions they tolerate and resources they use. this places them on a continuum from specialists (narrow niche) to generalists (broad niche).',
  },
  {
    type: 'heading',
    content: 'generalist species',
  },
  {
    type: 'body',
    content: 'generalists can survive on a wide variety of resources and in many different conditions. they are flexible, adaptable "jacks of all trades" but masters of none.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**wide diet** — eat many different foods (omnivores)',
      '**broad tolerance** — survive in many habitats and climates',
      '**flexible behavior** — adapt to changing conditions',
      '**wide geographic range** — found across many regions',
      '**lower extinction risk** — if one resource disappears, others are available',
      '**often successful in human-modified environments** — exploit novel resources',
    ],
  },
  {
    type: 'body',
    content: 'examples: raccoons, coyotes, rats, cockroaches, crows, white-tailed deer, humans, dandelions.',
  },
  {
    type: 'heading',
    content: 'specialist species',
  },
  {
    type: 'body',
    content: 'specialists are highly adapted to specific resources, conditions, or habitats. they excel in their niche but struggle outside it.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**narrow diet** — depend on one or few food sources',
      '**narrow tolerance** — require specific environmental conditions',
      '**specialized adaptations** — highly evolved for particular resources',
      '**limited geographic range** — restricted to where their niche exists',
      '**higher extinction risk** — if their specific resource disappears, they can\'t switch',
      '**often outcompeted by generalists** — when environments change',
    ],
  },
  {
    type: 'body',
    content: 'examples: koalas (eucalyptus only), pandas (bamboo only), monarch butterflies (milkweed), spotted owl (old-growth forest), Darwin\'s finches (specific beak adaptations).',
  },
  {
    type: 'heading',
    content: 'comparison',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['trait', 'generalist', 'specialist'],
    tableRows: [
      ['diet', 'varied (omnivore)', 'restricted (often herbivore)'],
      ['habitat tolerance', 'wide range', 'narrow range'],
      ['geographic range', 'widespread', 'limited'],
      ['competition', 'moderate (shared resources)', 'low (unique niche)'],
      ['adaptation to change', 'high flexibility', 'low flexibility'],
      ['extinction risk', 'lower', 'higher'],
      ['example', 'raccoon', 'koala'],
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam often connects specialist species to extinction risk. specialists are more vulnerable because: (1) narrow diet = food web disruption is catastrophic, (2) narrow habitat = habitat loss eliminates their entire range, (3) low flexibility = can\'t adapt to rapid changes.',
  },
  {
    type: 'heading',
    content: 'coexistence and resource partitioning',
  },
  {
    type: 'body',
    content: 'specialists can coexist with each other through resource partitioning — dividing resources to reduce competition:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**spatial partitioning** — using different areas (e.g., different heights in a tree)',
      '**temporal partitioning** — active at different times (diurnal vs. nocturnal)',
      '**dietary partitioning** — eating different parts of the same food source',
      '**morphological differences** — different body sizes allow different resource use',
    ],
  },
  {
    type: 'body',
    content: 'the classic example: MacArthur\'s warblers. five warbler species coexist by feeding in different parts of spruce trees (crown, middle, base, etc.).',
  },
  {
    type: 'heading',
    content: 'environmental change and adaptation',
  },
  {
    type: 'body',
    content: 'climate change and human disturbance generally favor generalists over specialists:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat fragmentation** — generalists can use edge habitats; specialists need interior',
      '**invasive species** — often generalists that outcompete native specialists',
      '**climate change** — generalists can shift diets and ranges; specialists may be stranded',
      '**urbanization** — creates novel environments that generalists exploit',
      '**biotic homogenization** — as specialists decline, ecosystems become dominated by the same generalist species worldwide',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may describe an environmental change and ask which type of species would be more affected. specialists are almost always more vulnerable. explain the specific mechanism: they can\'t switch food sources, can\'t tolerate new conditions, or can\'t move to new habitats.',
  },
]

export default function APESU3T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations' }}
      topic={{
        number: 4,
        title: 'generalist vs specialist',
        keyTerms: ['generalist', 'specialist', 'niche breadth', 'resource partitioning', 'extinction risk', 'biotic homogenization'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-3/3', title: 'r-selected vs K-selected' }}
      next={{ href: '/apes/unit-3/5', title: 'survivorship curves' }}
      courseHref="/apes"
      unitHref="/apes/unit-3"
    />
  )
}
