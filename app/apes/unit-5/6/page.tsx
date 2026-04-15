import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is sustainable agriculture?',
  },
  {
    type: 'body',
    content: 'sustainable agriculture produces food while preserving environmental health, economic viability, and social equity for future generations. it\'s an alternative to industrial agriculture that reduces pollution, conserves resources, and maintains biodiversity.',
  },
  {
    type: 'heading',
    content: 'key practices',
  },
  {
    type: 'subheading',
    content: 'crop rotation',
  },
  {
    type: 'body',
    content: 'growing different crops in sequence on the same land:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**breaks pest cycles** — pests adapted to one crop can\'t survive the next season',
      '**restores soil nutrients** — legumes (beans, clover) fix nitrogen naturally',
      '**reduces disease** — pathogens don\'t build up in soil',
      '**example** — corn → soybeans → wheat rotation',
    ],
  },
  {
    type: 'subheading',
    content: 'cover cropping',
  },
  {
    type: 'body',
    content: 'planting crops (clover, rye, vetch) between growing seasons:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**prevents erosion** — roots hold soil in place',
      '**adds organic matter** — plant material decomposes into humus',
      '**suppresses weeds** — outcompetes weeds for light and nutrients',
      '**fixes nitrogen** — leguminous cover crops add N to soil',
    ],
  },
  {
    type: 'subheading',
    content: 'no-till / conservation tillage',
  },
  {
    type: 'body',
    content: 'reducing or eliminating plowing:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**protects soil structure** — maintains aggregates and pore spaces',
      '**reduces erosion** — crop residue protects surface from wind and rain',
      '**stores carbon** — undisturbed soil holds more organic carbon',
      '**saves fuel** — fewer tractor passes means less diesel burned',
      '**tradeoff** — may require more herbicides to control weeds',
    ],
  },
  {
    type: 'subheading',
    content: 'intercropping / polyculture',
  },
  {
    type: 'body',
    content: 'growing multiple crops together in the same field:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**pest confusion** — mixed crops harder for pests to find',
      '**habitat for predators** — beneficial insects find homes',
      '**nutrient complementarity** — different crops use different nutrients',
      '**example** — "Three Sisters": corn, beans, and squash grown together (Native American practice)',
    ],
  },
  {
    type: 'subheading',
    content: 'integrated pest management (IPM)',
  },
  {
    type: 'body',
    content: 'using multiple methods to control pests with minimal pesticide use (covered in topic 3).',
  },
  {
    type: 'heading',
    content: 'organic agriculture',
  },
  {
    type: 'body',
    content: 'organic farming avoids synthetic chemicals and follows specific standards:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**no synthetic pesticides or fertilizers** — only approved natural substances',
      '**no GMOs** — genetically modified organisms prohibited',
      '**no antibiotics or hormones** — in livestock production',
      '**USDA Organic certification** — farms must meet standards and be inspected',
    ],
  },
  {
    type: 'subheading',
    content: 'pros of organic',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**reduces chemical pollution** — no synthetic pesticide runoff',
      '**healthier soil** — relies on organic matter and composting',
      '**biodiversity** — organic farms often have more species',
      '**no pesticide residues** — consumer health benefit',
    ],
  },
  {
    type: 'subheading',
    content: 'cons of organic',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**lower yields** — typically 10-20% less production per acre',
      '**more land needed** — to produce same amount of food',
      '**higher prices** — labor-intensive, lower yields mean higher costs',
      '**"natural" pesticides** — copper sulfate, rotenone can also harm environment',
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam may ask about tradeoffs between organic and conventional farming. organic reduces pollution but requires more land. if we converted all farming to organic, we\'d need to clear more habitat — so neither system is perfect.',
  },
  {
    type: 'heading',
    content: 'other sustainable approaches',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**permaculture** — designing farms to mimic natural ecosystems; perennial crops, food forests',
      '**agroforestry** — integrating trees with crops or livestock; provides shade, windbreaks, habitat',
      '**contour farming** — plowing across slopes to prevent erosion (not up/down)',
      '**terracing** — building flat platforms on hillsides to prevent runoff',
      '**strip cropping** — alternating strips of different crops',
      '**windbreaks/shelterbelts** — rows of trees that reduce wind erosion',
    ],
  },
  {
    type: 'heading',
    content: 'local and regional food systems',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**farmers markets** — direct sales reduce transportation emissions',
      '**community-supported agriculture (CSA)** — consumers buy shares of farm production',
      '**food miles** — distance food travels from farm to plate',
      '**urban agriculture** — gardens and farms in cities reduce transport and provide fresh food',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs often ask for sustainable agriculture practices. name specific techniques: crop rotation, cover crops, no-till, IPM, polyculture. explain HOW each one works and WHAT environmental problem it solves.',
  },
]

export default function APESU5T6() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use' }}
      topic={{
        number: 6,
        title: 'sustainable agriculture',
        keyTerms: ['crop rotation', 'cover crop', 'no-till', 'polyculture', 'organic', 'permaculture', 'agroforestry'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-5/5', title: 'aquaculture' }}
      next={{ href: '/apes/unit-5/7', title: 'deforestation' }}
      courseHref="/apes"
      unitHref="/apes/unit-5"
    />
  )
}
