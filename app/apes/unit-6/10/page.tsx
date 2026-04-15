import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is cogeneration?',
  },
  {
    type: 'body',
    content: 'cogeneration, also called combined heat and power (CHP), simultaneously produces electricity and useful heat from the same fuel source. it dramatically increases energy efficiency by capturing waste heat that would otherwise be lost.',
  },
  {
    type: 'heading',
    content: 'the efficiency problem',
  },
  {
    type: 'body',
    content: 'conventional power plants waste enormous amounts of energy as heat:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**typical power plant** — ~33-40% efficient; 60-67% of fuel energy lost as waste heat',
      '**cooling towers** — dissipate heat into atmosphere or water',
      '**thermal pollution** — waste heat discharged to rivers/lakes harms aquatic life',
      '**transmission losses** — another 5-10% lost moving electricity to users',
    ],
  },
  {
    type: 'heading',
    content: 'how cogeneration works',
  },
  {
    type: 'body',
    content: 'instead of wasting heat, CHP systems capture it for useful purposes:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**generate electricity** — turbine or engine produces power',
      '**capture waste heat** — heat exchangers recover thermal energy',
      '**use heat productively** — space heating, water heating, industrial processes',
      '**combined efficiency** — 60-80% of fuel energy used (vs 33-40%)',
    ],
  },
  {
    type: 'heading',
    content: 'types of CHP systems',
  },
  {
    type: 'subheading',
    content: 'topping cycle',
  },
  {
    type: 'body',
    content: 'electricity is the primary product; heat is captured secondarily:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**gas turbine** — burns fuel, exhaust heat recovered for heating/steam',
      '**internal combustion engine** — car-like engine; engine heat captured',
      '**most common** — typical in commercial buildings, hospitals, universities',
    ],
  },
  {
    type: 'subheading',
    content: 'bottoming cycle',
  },
  {
    type: 'body',
    content: 'heat is the primary product; electricity generated from excess heat:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**industrial processes** — steel, glass, cement produce high-temperature waste heat',
      '**waste heat recovery** — heat drives turbines for electricity',
      '**less common** — mainly in heavy industry',
    ],
  },
  {
    type: 'heading',
    content: 'applications',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**hospitals** — need reliable power and heating/cooling 24/7',
      '**universities** — campus heating and electricity',
      '**hotels and offices** — heating, cooling, hot water',
      '**manufacturing** — process heat and electricity',
      '**district heating** — central plant supplies heat to multiple buildings',
      '**wastewater treatment** — biogas from digestion powers plant',
    ],
  },
  {
    type: 'heading',
    content: 'advantages of CHP',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**higher efficiency** — 60-80% vs 33-40% for separate heat and power',
      '**reduced emissions** — less fuel burned for same energy services',
      '**cost savings** — lower fuel bills, reduced electricity purchases',
      '**reliability** — on-site generation provides backup power',
      '**reduced grid strain** — distributed generation reduces transmission needs',
      '**uses various fuels** — natural gas, biogas, biomass, coal, oil',
    ],
  },
  {
    type: 'heading',
    content: 'limitations',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**capital cost** — CHP systems expensive to install',
      '**heat demand required** — only efficient if there\'s use for the heat',
      '**matching supply and demand** — heat and electricity needs must align',
      '**complex operations** — requires skilled maintenance',
      '**still uses fossil fuels** — reduces but doesn\'t eliminate emissions',
    ],
  },
  {
    type: 'examtip',
    content: 'CHP is often the answer when asked how to increase power plant efficiency. know that conventional plants are 33-40% efficient while CHP achieves 60-80% by capturing waste heat. it\'s a "low-hanging fruit" efficiency measure.',
  },
  {
    type: 'heading',
    content: 'trigeneration',
  },
  {
    type: 'body',
    content: 'extends CHP to also produce cooling:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**absorption chillers** — use heat to drive cooling (no compressor)',
      '**year-round efficiency** — useful heat output even in summer',
      '**combined cooling, heat, and power (CCHP)** — full name',
    ],
  },
  {
    type: 'frqtip',
    content: 'CHP appears in FRQs asking about energy efficiency or reducing emissions from power plants. explain: (1) conventional plants waste 60%+ of energy as heat, (2) CHP captures this heat for useful purposes, (3) combined efficiency reaches 60-80%. give specific applications (hospitals, universities).',
  },
]

export default function APESU6T10() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 10,
        title: 'cogeneration',
        keyTerms: ['cogeneration', 'CHP', 'combined heat and power', 'waste heat', 'topping cycle', 'trigeneration'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/9', title: 'energy efficiency' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
