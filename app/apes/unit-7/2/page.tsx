import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are secondary pollutants?',
  },
  {
    type: 'body',
    content: 'secondary pollutants are not emitted directly — they form in the atmosphere through chemical reactions between primary pollutants and other atmospheric components (sunlight, water, oxygen).',
  },
  {
    type: 'heading',
    content: 'ground-level ozone (O₃)',
  },
  {
    type: 'body',
    content: 'the most important secondary pollutant — a key component of smog.',
  },
  {
    type: 'subheading',
    content: 'formation',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**precursors** — NOₓ + VOCs + sunlight',
      '**reaction** — NO₂ breaks down in UV light, releases oxygen atom that combines with O₂',
      '**peak levels** — sunny afternoons in summer',
      '**location** — worst in cities with traffic and sun (LA, Houston, Mexico City)',
    ],
  },
  {
    type: 'subheading',
    content: 'health and environmental effects',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**respiratory damage** — inflames airways, worsens asthma, reduces lung function',
      '**crop damage** — reduces agricultural yields by billions annually',
      '**forest damage** — weakens trees, makes them susceptible to disease and pests',
      '**"bad ozone"** — ground-level ozone is harmful (vs "good ozone" in stratosphere)',
    ],
  },
  {
    type: 'examtip',
    content: 'ground-level ozone is BAD (smog, respiratory damage). stratospheric ozone is GOOD (blocks UV radiation). same molecule, different locations, opposite effects. the AP exam tests this distinction.',
  },
  {
    type: 'heading',
    content: 'sulfuric and nitric acids',
  },
  {
    type: 'body',
    content: 'these acids form acid rain when SO₂ and NOₓ react with water in the atmosphere:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**SO₂ → H₂SO₄** — sulfur dioxide oxidizes to sulfuric acid',
      '**NOₓ → HNO₃** — nitrogen oxides form nitric acid',
      '**wet deposition** — acids fall as rain, snow, fog',
      '**dry deposition** — acid particles settle directly on surfaces',
    ],
  },
  {
    type: 'heading',
    content: 'photochemical oxidants',
  },
  {
    type: 'body',
    content: 'besides ozone, other oxidizing chemicals form from photochemical reactions:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**PAN (peroxyacyl nitrates)** — eye irritant, plant damage',
      '**hydrogen peroxide (H₂O₂)** — strong oxidizer',
      '**aldehydes** — formaldehyde and others; some carcinogenic',
    ],
  },
  {
    type: 'heading',
    content: 'secondary particulate matter',
  },
  {
    type: 'body',
    content: 'some PM forms in the atmosphere rather than being emitted directly:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**sulfate particles** — from SO₂ oxidation',
      '**nitrate particles** — from NOₓ reactions',
      '**secondary organic aerosols** — from VOC oxidation',
      '**ammonium compounds** — ammonia combines with acids',
    ],
  },
  {
    type: 'heading',
    content: 'primary vs secondary comparison',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**primary** — emitted directly: CO, SO₂, NOₓ, PM, VOCs, lead',
      '**secondary** — formed in atmosphere: O₃, H₂SO₄, HNO₃, PAN, secondary PM',
      '**control strategy** — to reduce secondary pollutants, reduce their precursors',
    ],
  },
  {
    type: 'frqtip',
    content: 'secondary pollutant FRQs typically ask about ozone formation. know the formula: NOₓ + VOCs + sunlight → O₃. to reduce ozone, reduce NOₓ (combustion) and VOCs (gasoline vapors, solvents). explain why ozone peaks on hot, sunny afternoons.',
  },
]

export default function APESU7T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{
        number: 2,
        title: 'secondary pollutants',
        keyTerms: ['ozone', 'photochemical', 'sulfuric acid', 'nitric acid', 'PAN', 'secondary PM'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-7/1', title: 'primary pollutants' }}
      next={{ href: '/apes/unit-7/3', title: 'photochemical vs industrial smog' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
