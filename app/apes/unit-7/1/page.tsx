import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are primary pollutants?',
  },
  {
    type: 'body',
    content: 'primary pollutants are emitted directly into the atmosphere from identifiable sources. they cause harm on their own or serve as precursors for secondary pollutants.',
  },
  {
    type: 'heading',
    content: 'the major primary pollutants',
  },
  {
    type: 'subheading',
    content: 'carbon monoxide (CO)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**source** — incomplete combustion of fossil fuels (vehicles are #1 source)',
      '**colorless and odorless** — undetectable without instruments',
      '**health effects** — binds to hemoglobin 200x more strongly than oxygen; reduces oxygen delivery',
      '**symptoms** — headaches, dizziness, confusion, death at high concentrations',
      '**indoor danger** — gas appliances, generators in enclosed spaces',
    ],
  },
  {
    type: 'subheading',
    content: 'sulfur dioxide (SO₂)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**source** — burning coal and oil (especially high-sulfur coal); smelting',
      '**effects** — respiratory irritation, aggravates asthma, precursor to acid rain',
      '**secondary pollutant formation** — oxidizes to sulfuric acid (H₂SO₄) in atmosphere',
      '**regulation** — Clean Air Act dramatically reduced SO₂ through scrubbers and fuel switching',
    ],
  },
  {
    type: 'subheading',
    content: 'nitrogen oxides (NOₓ)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**includes** — NO (nitric oxide) and NO₂ (nitrogen dioxide)',
      '**source** — high-temperature combustion (vehicles, power plants)',
      '**effects** — respiratory irritation, brown color of smog',
      '**secondary pollutant formation** — precursor to ground-level ozone and nitric acid',
    ],
  },
  {
    type: 'subheading',
    content: 'particulate matter (PM)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**PM₁₀** — particles < 10 micrometers; settles in upper airways',
      '**PM₂.₅** — particles < 2.5 micrometers; penetrates deep into lungs, enters bloodstream',
      '**sources** — combustion, dust, construction, agriculture, wildfires',
      '**health effects** — respiratory disease, cardiovascular disease, premature death',
      '**most dangerous pollutant** — PM₂.₅ causes more deaths than any other air pollutant',
    ],
  },
  {
    type: 'subheading',
    content: 'volatile organic compounds (VOCs)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**definition** — carbon-containing chemicals that evaporate easily',
      '**sources** — gasoline vapors, solvents, paints, cleaning products, vegetation',
      '**effects** — some are carcinogenic (benzene); precursors to ozone',
      '**examples** — benzene, formaldehyde, toluene, methane',
    ],
  },
  {
    type: 'subheading',
    content: 'lead (Pb)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**historically** — leaded gasoline was major source until phaseout',
      '**current sources** — metal processing, aviation fuel, old paint',
      '**effects** — neurotoxin, especially harmful to children\'s brain development',
      '**success story** — blood lead levels dropped 75% after leaded gas ban',
    ],
  },
  {
    type: 'examtip',
    content: 'know the six criteria pollutants regulated by the Clean Air Act: CO, SO₂, NOₓ, PM, O₃, and Pb. for each, know the main source and health effects. PM₂.₅ is the deadliest; lead phaseout is an environmental success story.',
  },
  {
    type: 'heading',
    content: 'sources summary',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**vehicles** — CO, NOₓ, VOCs, PM',
      '**power plants** — SO₂, NOₓ, PM, mercury',
      '**industry** — SO₂, NOₓ, PM, VOCs, heavy metals',
      '**agriculture** — ammonia (NH₃), PM, methane',
      '**natural sources** — wildfires, volcanoes, dust storms, biogenic VOCs',
    ],
  },
  {
    type: 'frqtip',
    content: 'primary pollutant FRQs ask you to identify sources and health effects. memorize: CO from vehicles (binds hemoglobin), SO₂ from coal (acid rain), NOₓ from combustion (smog precursor), PM from combustion (respiratory/cardiovascular), VOCs from fuels/solvents (ozone precursor).',
  },
]

export default function APESU7T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{
        number: 1,
        title: 'primary pollutants',
        keyTerms: ['CO', 'SO₂', 'NOₓ', 'PM₂.₅', 'VOCs', 'lead', 'criteria pollutants'],
      }}
      sections={sections}
      next={{ href: '/apes/unit-7/2', title: 'secondary pollutants' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
