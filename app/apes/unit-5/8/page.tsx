import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'forest management methods',
  },
  {
    type: 'body',
    content: 'how we harvest timber has enormous environmental consequences. the two main approaches — clear-cutting and selective cutting — represent opposite ends of the sustainability spectrum, with several intermediate methods.',
  },
  {
    type: 'heading',
    content: 'clear-cutting',
  },
  {
    type: 'body',
    content: 'removing all trees from an area at once, regardless of species, age, or size.',
  },
  {
    type: 'subheading',
    content: 'advantages',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**economically efficient** — all trees harvested in one operation, lower labor costs',
      '**simple and fast** — no need to select individual trees',
      '**good for sun-loving species** — aspen, jack pine, and some oaks regenerate best in full sun',
      '**plantation forestry** — cleared land can be replanted with fast-growing commercial species',
    ],
  },
  {
    type: 'subheading',
    content: 'environmental problems',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**habitat destruction** — complete loss of forest ecosystem; wildlife displaced or killed',
      '**soil erosion** — no root systems to hold soil; heavy erosion especially on slopes',
      '**water quality** — sediment washes into streams, harming fish and aquatic life',
      '**nutrient loss** — exposed soil loses nutrients to runoff; slash burning releases nutrients to air',
      '**aesthetic impact** — clearcuts are ugly scars on the landscape, visible for decades',
      '**microclimate change** — removal of canopy leads to temperature extremes, drying',
      '**carbon release** — stored carbon released when trees are cut and debris burned/decomposed',
    ],
  },
  {
    type: 'heading',
    content: 'selective cutting',
  },
  {
    type: 'body',
    content: 'harvesting only chosen trees while leaving the rest of the forest intact.',
  },
  {
    type: 'subheading',
    content: 'types of selective cutting',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**single-tree selection** — individual mature trees removed throughout forest',
      '**group selection** — small groups of trees removed, creating openings',
      '**diameter-limit cutting** — only trees above a certain size harvested',
      '**high-grading** — taking only the most valuable trees (bad practice — degrades genetic quality)',
    ],
  },
  {
    type: 'subheading',
    content: 'advantages',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**maintains forest structure** — canopy, understory, and wildlife habitat preserved',
      '**continuous income** — forest can be harvested repeatedly over time',
      '**biodiversity conservation** — habitat for forest-dependent species remains',
      '**erosion prevention** — root systems keep soil in place',
      '**water quality protection** — forest filtering maintains clean streams',
      '**aesthetic value** — forest remains visually intact',
      '**carbon storage** — most forest carbon remains stored',
    ],
  },
  {
    type: 'subheading',
    content: 'challenges',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**higher cost** — more planning, skilled labor, and careful operation required',
      '**damage to remaining trees** — equipment and felling can injure trees left behind',
      '**not suitable for all species** — shade-intolerant species may not regenerate',
      '**lower short-term profit** — less timber removed per operation',
    ],
  },
  {
    type: 'examtip',
    content: 'on the AP exam, selective cutting is almost always the "better" answer when asked about sustainable forestry. but remember that clear-cutting can be appropriate in certain cases — especially for shade-intolerant pioneer species like aspen.',
  },
  {
    type: 'heading',
    content: 'intermediate methods',
  },
  {
    type: 'subheading',
    content: 'shelterwood cutting',
  },
  {
    type: 'body',
    content: 'harvest in stages: first remove some trees to open canopy, then remove more as new trees establish, finally harvest remaining mature trees.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**protects seedlings** — remaining trees provide shade and shelter',
      '**gradual transition** — less shock to ecosystem than clearcutting',
      '**good for mixed forests** — works for species needing partial sun',
    ],
  },
  {
    type: 'subheading',
    content: 'seed-tree cutting',
  },
  {
    type: 'body',
    content: 'similar to clearcutting, but leave scattered mature trees to provide seeds for regeneration. seed trees are later harvested.',
  },
  {
    type: 'subheading',
    content: 'strip cutting',
  },
  {
    type: 'body',
    content: 'clearcut in narrow strips, leaving adjacent forest intact. seeds from standing forest regenerate the cleared strips. rotate through the forest over time.',
  },
  {
    type: 'heading',
    content: 'best management practices (BMPs)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**riparian buffers** — leave trees along streams to protect water quality',
      '**limit slope harvesting** — avoid steep slopes prone to erosion',
      '**road planning** — minimize road construction; use proper drainage',
      '**timing** — harvest when soil is frozen or dry to reduce compaction',
      '**wildlife corridors** — maintain connections between forest patches',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may ask you to compare clear-cutting and selective cutting. organize your answer: for each method, discuss (1) how it works, (2) environmental impacts, (3) when it\'s appropriate. conclude with which is more sustainable and why.',
  },
]

export default function APESU5T8() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 8,
        title: 'clear-cutting vs selective cutting',
        keyTerms: ['clear-cutting', 'selective cutting', 'shelterwood', 'seed-tree', 'strip cutting', 'BMPs', 'riparian buffer'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/7', title: 'deforestation' }}
      next={{ href: '/apes/unit-5/9', title: 'urbanization' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
