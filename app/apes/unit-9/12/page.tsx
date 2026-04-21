import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'APES FRQ overview' },
  { type: 'body', content: 'the APES free-response section has 3 questions answered in 70 minutes (~23 min each). FRQs are each worth 10 points. they require applying content knowledge, reading data/graphs, doing calculations, and explaining environmental consequences and solutions. every point has specific scoring criteria — know the rubric language.' },
  { type: 'heading', content: 'the APES FRQ framework' },
  { type: 'callout', content: 'the four FRQ command verbs: IDENTIFY (name it — 1 sentence), DESCRIBE (explain what/how — 2–3 sentences), EXPLAIN (give reason/mechanism — "because"), CALCULATE (show work, include units). read the command verb before you write a single word.' },
  { type: 'heading', content: 'question 1: data-analysis question' },
  { type: 'bullets', content: '', bullets: ['includes a real-world scenario with data (graphs, maps, tables)', 'typically 4–5 parts: identify, describe, explain, calculate, propose solutions', 'must use data from the document AND content knowledge', '**strategy**: annotate the data figure first, identify what it shows, then answer each part separately with a label (a), (b), (c), etc.'] },
  { type: 'heading', content: 'question 2: synthesis & evaluation' },
  { type: 'bullets', content: '', bullets: ['evaluate pros/cons of an environmental strategy or compare two approaches', 'requires balanced, nuanced answers that acknowledge tradeoffs', 'often asks to "describe ONE environmental benefit AND ONE environmental cost"', '**strategy**: be specific — name the pollutant, name the ecosystem, name the mechanism — vague answers get no credit'] },
  { type: 'heading', content: 'question 3: design an investigation' },
  { type: 'bullets', content: '', bullets: ['design a controlled experiment or sampling study', 'must identify: independent variable, dependent variable, control group, controlled variables', 'explain what data to collect and how to analyze it', '**strategy**: always have a specific hypothesis, clear IV and DV, a controlled comparison, and a data analysis step'] },
  { type: 'heading', content: 'scoring strategy' },
  { type: 'bullets', content: '', bullets: ['**be specific**: "water pollution" → "nitrate runoff from cornfields entering the Chesapeake Bay causing eutrophication"', '**one fact per point**: don\'t write a paragraph where one sentence earns the point — keep it clear', '**use proper terminology**: use the science vocabulary — "hypoxia" not "lack of oxygen"', '**show all work for calculations**: even if final answer is wrong, steps earn partial credit', '**answer what is asked**: if it says "identify one," only identify one — don\'t write 3 hoping one is right (can hurt)'] },
  { type: 'heading', content: 'high-frequency FRQ topics (practice these)' },
  { type: 'bullets', content: '', bullets: ['eutrophication sequence and solutions', 'acid rain formation, effects, and policy', 'biomagnification food chain with concentration calculations', 'energy efficiency / EROI calculation', 'population growth rate and doubling time', 'sewage treatment stages', 'coal plant: pollutants + control technologies', 'climate change: cause, effect, solution chain', 'biodiversity metrics and island biogeography', 'sustainable agriculture practices and justifications'] },
  { type: 'frqtip', content: 'FRQ master tip: always structure your answer as SOURCE → PATHWAY → EFFECT → SOLUTION. example: "nitrogen fertilizer [source] runs off agricultural fields into streams [pathway], where it causes algal blooms and hypoxia [effect]; planting riparian buffer strips [solution] would intercept nutrient runoff before it reaches the waterway."' },
]

export default function APESU9T12() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change' }}
      topic={{ number: 12, title: 'frq practice', keyTerms: ['FRQ', 'identify', 'describe', 'explain', 'calculate', 'independent variable', 'dependent variable', 'control group', 'rubric', 'data-analysis question'] }}
      sections={sections}
      prev={{ href: '/apes/unit-9/11', title: 'apes formulas' }}
      courseHref="/apes"
      unitHref="/apes/unit-9"
    />
  )
}
