import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'strategies for reducing air pollution' },
  { type: 'body', content: 'reducing air pollution requires both technology and policy. the most effective approaches target pollution at the source — either preventing its formation or capturing it before it reaches the atmosphere. the AP exam tests specific technologies, regulations, and their effectiveness.' },
  { type: 'heading', content: 'emission control technologies' },
  { type: 'subheading', content: 'catalytic converters' },
  { type: 'bullets', content: '', bullets: ['**function**: convert toxic exhaust gases into less harmful ones before they leave the tailpipe', 'platinum and palladium catalysts convert: CO → CO₂; hydrocarbons → CO₂ + H₂O; NOₓ → N₂ + O₂', '**required**: on all U.S. gasoline vehicles since 1975 (Clean Air Act mandate)', '**limitation**: only works when engine is warm; electric vehicles eliminate need entirely'] },
  { type: 'subheading', content: 'scrubbers (flue gas desulfurization)' },
  { type: 'bullets', content: '', bullets: ['**function**: remove SO₂ from coal plant exhaust before it enters the atmosphere', '**wet scrubber**: spray limestone slurry (CaCO₃) into exhaust; SO₂ + CaCO₃ → CaSO₄ (gypsum, can be sold)', '**dry scrubber**: inject powdered lime; less water but slightly less effective', '**required**: on most coal power plants in the U.S.', '**limitation**: expensive to install/operate; produces gypsum waste'] },
  { type: 'subheading', content: 'particulate filters' },
  { type: 'bullets', content: '', bullets: ['electrostatic precipitators (ESPs): charge particles, then collect on oppositely-charged plates', 'bag house filters: fabric filters catch fine particles', '**removes**: PM₂.₅ and PM₁₀ from industrial smokestacks'] },
  { type: 'heading', content: 'regulatory approaches' },
  { type: 'bullets', content: '', bullets: ['**Clean Air Act (1963, amended 1970, 1990)**: sets NAAQS (National Ambient Air Quality Standards) for 6 criteria pollutants: CO, lead, NO₂, O₃, PM, SO₂', '**CAFE standards**: fuel economy requirements reduce total vehicle emissions per mile', '**Acid Rain Program (1990)**: cap-and-trade for SO₂ — set a cap, companies buy/sell allowances; **very successful** — cut SO₂ by 90% by 2017', '**state implementation plans**: states must show EPA how they will meet NAAQS', '**zero-emission vehicle mandates**: California leads; pushes automakers to EV production'] },
  { type: 'heading', content: 'source reduction strategies' },
  { type: 'bullets', content: '', bullets: ['**fuel switching**: coal → natural gas (less SO₂, less CO₂); gas → renewables (no combustion)', '**energy efficiency**: less energy burned = less pollution emitted', '**mass transit**: reduces per-person vehicle miles traveled', '**electric vehicles**: zero tailpipe emissions (upstream emissions depend on grid source)', '**renewable energy**: solar and wind produce zero air pollution at point of use'] },
  { type: 'examtip', content: 'know all 6 NAAQS criteria pollutants: CO, SO₂, NOₓ, O₃, PM₂.₅/PM₁₀, and lead. cap-and-trade (market-based) vs. command-and-control (regulation) is a frequent FRQ comparison. always give specific technologies: scrubber for SO₂, catalytic converter for NOₓ/CO/VOCs.' },
  { type: 'table', content: '', tableHeaders: ['pollutant', 'control technology', 'regulatory tool'], tableRows: [['SO₂', 'scrubber, fuel switching', 'Acid Rain cap-and-trade'], ['NOₓ', 'catalytic converter, SCR', 'NAAQS, CAFE'], ['PM', 'electrostatic precipitator, bag filter', 'NAAQS'], ['CO', 'catalytic converter', 'NAAQS, vehicle standards'], ['VOCs', 'catalytic converter, vapor recovery', 'NAAQS']] },
]

export default function APESU7T8() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{ number: 8, title: 'reducing air pollution', keyTerms: ['catalytic converter', 'scrubber', 'electrostatic precipitator', 'Clean Air Act', 'NAAQS', 'cap-and-trade', 'CAFE standards', 'criteria pollutants'] }}
      sections={sections}
      prev={{ href: '/apes/unit-7/7', title: 'noise pollution' }}
      next={{ href: '/apes/unit-7/9', title: 'indoor air pollution' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
