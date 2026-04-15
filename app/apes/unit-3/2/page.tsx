import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'two models of population growth',
  },
  {
    type: 'body',
    content: 'population ecologists use two main models to describe how populations grow over time. understanding when each applies is essential for the AP exam.',
  },
  {
    type: 'heading',
    content: 'exponential growth (J-curve)',
  },
  {
    type: 'body',
    content: 'exponential growth occurs when resources are unlimited and populations can grow without constraint. the population increases at an accelerating rate — the more individuals present, the faster the population grows.',
  },
  {
    type: 'subheading',
    content: 'the exponential growth equation',
  },
  {
    type: 'body',
    content: 'dN/dt = rN, where dN/dt is the change in population over time, r is the intrinsic rate of natural increase (birth rate minus death rate), and N is the current population size. growth rate increases as N increases.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**r (intrinsic growth rate)** — the maximum rate a population can grow under ideal conditions',
      '**doubling time** — time for population to double = 70/r (if r is expressed as a percentage)',
      '**J-shaped curve** — when graphed, exponential growth forms a J-shape',
      '**biotic potential** — maximum reproductive rate under ideal conditions',
    ],
  },
  {
    type: 'subheading',
    content: 'when does exponential growth occur?',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**colonizing new habitat** — species arriving in empty territory with abundant resources',
      '**after population crash** — surviving individuals have access to surplus resources',
      '**invasive species** — no predators or competitors initially limit growth',
      '**early human history** — low population density meant resources weren\'t limiting',
    ],
  },
  {
    type: 'examtip',
    content: 'exponential growth cannot continue forever — eventually resources become limiting. it\'s a temporary phase that occurs when populations are well below carrying capacity.',
  },
  {
    type: 'heading',
    content: 'logistic growth (S-curve)',
  },
  {
    type: 'body',
    content: 'logistic growth incorporates carrying capacity (K). as population approaches K, growth slows due to increasing competition for limited resources. the growth curve is S-shaped (sigmoid).',
  },
  {
    type: 'subheading',
    content: 'the logistic growth equation',
  },
  {
    type: 'body',
    content: 'dN/dt = rN × (K-N)/K. the term (K-N)/K acts as a brake on growth. when N is small, (K-N)/K ≈ 1 and growth is nearly exponential. as N approaches K, (K-N)/K approaches 0 and growth stops.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**lag phase** — initial slow growth when population is small',
      '**exponential phase** — rapid growth as population increases',
      '**deceleration phase** — growth slows as population approaches K',
      '**stable equilibrium** — population fluctuates around K',
    ],
  },
  {
    type: 'heading',
    content: 'comparing the two models',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['feature', 'exponential growth', 'logistic growth'],
    tableRows: [
      ['curve shape', 'J-shaped', 'S-shaped (sigmoid)'],
      ['resources', 'unlimited', 'limited'],
      ['growth rate', 'constant (r)', 'decreases as N → K'],
      ['carrying capacity', 'not considered', 'central to model'],
      ['real-world applicability', 'short-term only', 'long-term pattern'],
      ['equation', 'dN/dt = rN', 'dN/dt = rN(K-N)/K'],
    ],
  },
  {
    type: 'heading',
    content: 'population growth calculations',
  },
  {
    type: 'body',
    content: 'you should be able to perform basic population calculations on the AP exam:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**growth rate (r)** = (births - deaths) / population = birth rate - death rate',
      '**percent growth rate** = r × 100',
      '**doubling time** = 70 / percent growth rate (rule of 70)',
      '**population change** = (birth rate - death rate + immigration - emigration) × population',
    ],
  },
  {
    type: 'body',
    content: 'example: a population of 1,000 has 50 births and 30 deaths per year. growth rate = (50-30)/1000 = 0.02 or 2%. doubling time = 70/2 = 35 years.',
  },
  {
    type: 'examtip',
    content: 'the rule of 70 is extremely useful and frequently tested. doubling time = 70 ÷ growth rate (as a percent). if a population grows at 1% per year, it doubles in 70 years. at 2%, it doubles in 35 years.',
  },
  {
    type: 'heading',
    content: 'real populations are messier',
  },
  {
    type: 'body',
    content: 'these models are simplifications. real populations often show:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**oscillations around K** — populations overshoot and undershoot carrying capacity',
      '**time lags** — birth/death rates don\'t respond instantly to resource changes',
      '**fluctuating K** — environmental changes alter carrying capacity',
      '**boom-bust cycles** — some populations crash repeatedly rather than stabilizing',
      '**Allee effects** — very small populations may decline because they\'re too sparse to find mates',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs often give you population data and ask you to identify the growth model or predict future population. sketch the curve shape: J-curve = exponential, S-curve = logistic. explain WHY — is the population below K (exponential phase) or approaching K (deceleration)?',
  },
]

export default function APESU3T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations' }}
      topic={{
        number: 2,
        title: 'population growth models',
        keyTerms: ['exponential growth', 'logistic growth', 'J-curve', 'S-curve', 'intrinsic growth rate (r)', 'doubling time', 'rule of 70'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-3/1', title: 'carrying capacity' }}
      next={{ href: '/apes/unit-3/3', title: 'r-selected vs K-selected' }}
      courseHref="/apes"
      unitHref="/apes/unit-3"
    />
  )
}
