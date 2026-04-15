import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are fossil fuels?',
  },
  {
    type: 'body',
    content: 'fossil fuels are energy-rich hydrocarbons formed from ancient organisms buried and compressed over millions of years. they supply about 80% of global energy — but burning them releases CO₂, driving climate change.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**non-renewable** — take millions of years to form; we\'re depleting them far faster than they form',
      '**high energy density** — contain lots of energy per unit mass',
      '**stored solar energy** — ancient photosynthesis captured sunlight; we release it by burning',
    ],
  },
  {
    type: 'heading',
    content: 'coal',
  },
  {
    type: 'subheading',
    content: 'formation',
  },
  {
    type: 'body',
    content: 'formed from ancient swamp plants buried, compressed, and heated over 300+ million years. stages: peat → lignite → bituminous → anthracite (increasing carbon content and energy density).',
  },
  {
    type: 'subheading',
    content: 'extraction',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**surface mining** — strip mining, mountaintop removal for shallow deposits',
      '**underground mining** — shaft and tunnel mining for deep seams',
      '**environmental damage** — habitat destruction, acid mine drainage, subsidence',
    ],
  },
  {
    type: 'subheading',
    content: 'combustion products',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**CO₂** — highest carbon emissions per unit energy of any fuel',
      '**SO₂** — sulfur dioxide causes acid rain',
      '**NOₓ** — nitrogen oxides contribute to smog and acid rain',
      '**particulates** — fine particles cause respiratory disease',
      '**mercury** — neurotoxin that bioaccumulates in fish',
      '**ash** — solid waste containing heavy metals',
    ],
  },
  {
    type: 'heading',
    content: 'petroleum (oil)',
  },
  {
    type: 'subheading',
    content: 'formation',
  },
  {
    type: 'body',
    content: 'formed from marine microorganisms (plankton) buried in ocean sediments, heated and pressurized into liquid hydrocarbons.',
  },
  {
    type: 'subheading',
    content: 'extraction',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**conventional drilling** — wells into underground reservoirs',
      '**offshore drilling** — platforms in ocean, higher risk of spills',
      '**hydraulic fracturing (fracking)** — injecting fluid to crack rock and release oil/gas',
      '**tar sands/oil sands** — heavy oil mixed with sand; energy-intensive extraction',
    ],
  },
  {
    type: 'subheading',
    content: 'uses and products',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**transportation fuels** — gasoline, diesel, jet fuel (90%+ of transportation)',
      '**petrochemicals** — plastics, fertilizers, pharmaceuticals, synthetic materials',
      '**heating oil** — home heating, especially in Northeast US',
    ],
  },
  {
    type: 'heading',
    content: 'natural gas',
  },
  {
    type: 'subheading',
    content: 'formation',
  },
  {
    type: 'body',
    content: 'formed similarly to oil but at higher temperatures; primarily methane (CH₄).',
  },
  {
    type: 'subheading',
    content: 'extraction',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**conventional wells** — gas trapped in porous rock',
      '**fracking** — accessing gas in shale formations; controversial for water contamination',
      '**associated gas** — released during oil extraction; often flared or vented',
    ],
  },
  {
    type: 'subheading',
    content: 'combustion characteristics',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**cleanest fossil fuel** — produces 50% less CO₂ than coal per unit energy',
      '**less pollution** — very low SO₂, particulates, mercury',
      '**methane leaks** — fugitive emissions during extraction/transport offset climate benefits',
      '**bridge fuel debate** — cleaner than coal, but still causes climate change',
    ],
  },
  {
    type: 'examtip',
    content: 'know the relative CO₂ emissions: coal > oil > natural gas. also know that natural gas\'s climate benefit depends on minimizing methane leaks — methane is 80x more powerful than CO₂ as a greenhouse gas over 20 years.',
  },
  {
    type: 'heading',
    content: 'energy return on investment (EROI)',
  },
  {
    type: 'body',
    content: 'EROI measures how much energy you get back for the energy you invest to extract and process a fuel:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**EROI = energy output / energy input**',
      '**conventional oil (1930s)** — EROI of 100:1 (very easy to extract)',
      '**conventional oil (today)** — EROI of 10-20:1',
      '**tar sands** — EROI of 3-5:1 (barely worth it energetically)',
      '**declining EROI** — as easy deposits are exhausted, we go after harder ones',
    ],
  },
  {
    type: 'frqtip',
    content: 'fossil fuel FRQs often ask about formation, extraction methods, and environmental impacts. know: coal (highest CO₂, acid rain, mining damage), oil (spills, transportation dependence), natural gas (cleanest but methane leaks, fracking controversy).',
  },
]

export default function APESU6T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 1,
        title: 'fossil fuels',
        keyTerms: ['coal', 'petroleum', 'natural gas', 'fracking', 'EROI', 'tar sands', 'combustion'],
      }}
      sections={sections}
      next={{ href: '/apes/unit-6/2', title: 'global energy use' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
