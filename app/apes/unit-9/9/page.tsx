import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'carbon footprint' },
  { type: 'body', content: 'a carbon footprint is the total amount of greenhouse gases (expressed as CO₂ equivalent, or CO₂e) produced directly and indirectly by an individual, organization, event, or product. it helps identify where emissions come from and where reductions are most effective.' },
  { type: 'heading', content: 'individual carbon footprint — major categories' },
  { type: 'table', content: '', tableHeaders: ['category', 'U.S. avg share', 'key actions to reduce'], tableRows: [['transportation', '~28%', 'drive less, EV, public transit, fly less'], ['food', '~14%', 'less beef, less food waste, local/seasonal'], ['home energy', '~25%', 'weatherization, renewable energy, heat pump'], ['goods & services', '~33%', 'buy less, secondhand, circular economy']] },
  { type: 'heading', content: 'U.S. per-capita emissions in context' },
  { type: 'bullets', content: '', bullets: ['U.S. per-capita: ~14–15 metric tons CO₂e/year', 'global average: ~4.7 metric tons CO₂e/year', 'India per-capita: ~2 metric tons; Germany: ~8; China: ~8', 'carbon budget for 1.5°C goal: roughly 2.1 tons/person/year by 2030'] },
  { type: 'heading', content: 'calculating carbon footprint' },
  { type: 'bullets', content: '', bullets: ['**transportation**: miles driven × (fuel economy) × emission factor (CO₂/gallon)', '**air travel**: miles × emission factor (higher for short flights with disproportionate takeoff fuel use)', '**electricity**: kWh × grid emission intensity (varies by region — coal-heavy grids emit more)', '**food**: beef ~27 kg CO₂e/kg; chicken ~6; legumes ~2; plant-based foods generally lowest', '**scope 1, 2, 3 emissions** (for organizations): scope 1 = direct; scope 2 = purchased electricity; scope 3 = supply chain and product use'] },
  { type: 'heading', content: 'carbon offsets' },
  { type: 'bullets', content: '', bullets: ['voluntary purchase of credits representing emission reductions elsewhere (tree planting, clean cookstoves, methane capture)', '**controversy**: additionality (would reduction have happened anyway?), permanence (will those trees survive?), measurement accuracy', 'offsets are a complement to, not a substitute for, direct emission reductions'] },
  { type: 'heading', content: 'systemic vs. individual action' },
  { type: 'bullets', content: '', bullets: ['the term "carbon footprint" was popularized by a BP advertising campaign (2004) — critics argue it shifts responsibility from industry to consumers', 'systemic change (policy, infrastructure, industrial transformation) is required alongside individual action', 'most effective individual reductions: have one fewer child, live car-free, avoid one transatlantic flight per year, switch to plant-based diet'] },
  { type: 'examtip', content: 'the AP exam may ask you to calculate a basic carbon footprint given emission factors, or to identify which actions have the greatest impact. transportation and food (especially beef) are the highest-impact categories. know that per-capita U.S. emissions are among the highest in the world.' },
]

export default function APESU9T9() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 9, title: 'carbon footprint', keyTerms: ['carbon footprint', 'CO₂e', 'per-capita emissions', 'scope 1/2/3', 'carbon offset', 'additionality', 'emission factor', 'lifecycle assessment'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/8', title: 'climate treaties' }}
      next={{ href: '/apes/unit-9/10', title: 'environmental laws' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
