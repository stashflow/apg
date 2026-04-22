// CollegeBored — exam format info and practice questions per course
// Questions are sourced from released AP exams (noted as "Released") or are
// predicted based on College Board curriculum frameworks (noted as "Predicted").

import { apesConfig } from './apes-data'
import { apushConfig } from './apush-data'
import { cspConfig } from './csp-data'
import { langConfig } from './lang-data'

export type QuestionType = 'mcq' | 'frq'
export type QuestionSource = 'Released' | 'Predicted'
export type QuestionDifficulty = 'easy' | 'medium' | 'hard'
export type DiagnosticMatch = 'exact' | 'related' | 'unit-proxy'

export interface MCQOption {
  letter: string
  text: string
}

export interface Question {
  id: string
  type: QuestionType
  source: QuestionSource
  sourceDetail: string   // e.g. "2019 AP APES Exam, Q4"
  unit: number
  topic?: string
  topicTags?: string[]    // topic coverage tags for validation/reporting
  stimulus?: string      // passage, data, quote shown on the left
  stimulusLabel?: string // attribution line
  question: string
  options?: MCQOption[]  // MCQ only
  correctAnswer?: string // MCQ: letter; FRQ: rubric key points
  explanation: string    // why this is tested / what to know
  // FRQ-specific
  frqParts?: { part: string; prompt: string; points: number }[]
  totalPoints?: number
  difficulty?: QuestionDifficulty
  diagnosticTopic?: string
  diagnosticMatch?: DiagnosticMatch
}

export interface ExamFormat {
  sectionName: string
  description: string
  time: string
  questions: string
  weight: string
  tips: string[]
}

export interface CourseExamInfo {
  courseShort: string
  courseLabel: string
  totalTime: string
  overview: string
  sections: ExamFormat[]
}

export interface CourseResourceLink {
  label: string
  url: string
  detail: string
}

export interface CourseResources {
  courseKey: string
  links: CourseResourceLink[]
}

export interface TopicCoverageItem {
  topic: string
  covered: boolean
  questionCount: number
}

export interface UnitCoverage {
  unit: number
  title: string
  questionCount: number
  mcqCount: number
  frqCount: number
  topics: TopicCoverageItem[]
}

export interface CoverageReport {
  courseKey: string
  targetQuestions: number
  totalQuestions: number
  unitCount: number
  topicCount: number
  coveredTopics: number
  uncoveredTopics: number
  unitsInOrder: boolean
  units: UnitCoverage[]
}

export interface QuestionQualityReport {
  courseKey: string
  totalQuestions: number
  duplicateIdCount: number
  invalidMcqAnswerKeyCount: number
  mcqOptionCountIssues: number
  frqStructureIssues: number
  topicTagIssues: number
}

export interface DiagnosticBlueprintUnit {
  unit: number
  title: string
  topics: string[]
}

export interface DiagnosticSet {
  questions: Question[]
  totalTopics: number
  uniqueTopicsRepresented: number
  exactTopicHits: number
  proxyTopicHits: number
}

export function normalizeCourseKey(courseShort: string): string {
  const normalized = courseShort.toLowerCase().replace(/[^a-z]/g, '')
  if (normalized.includes('apes')) return 'apes'
  if (normalized.includes('apush')) return 'apush'
  if (normalized.includes('csp') || normalized.includes('computerscienceprinciples')) return 'csp'
  if (normalized.includes('lang') || normalized.includes('englishlanguage')) return 'lang'
  return courseShort.toLowerCase()
}

// ─── EXAM FORMAT DATA ────────────────────────────────────────────────────────

export const examFormats: Record<string, CourseExamInfo> = {
  apes: {
    courseShort: 'APES',
    courseLabel: 'AP Environmental Science',
    totalTime: '2 hours 40 minutes',
    overview: 'The AP Environmental Science exam is fully digital in Bluebook and tests concept explanation, data analysis, quantitative reasoning, and evidence-based environmental solutions.',
    sections: [
      {
        sectionName: 'Section I — Multiple Choice',
        description: 'Individual and set-based questions tied to data tables, graphs, maps, models, and text sources across all nine units.',
        time: '1 hour 30 minutes',
        questions: '80 questions',
        weight: '60% of score',
        tips: [
          'APES rewards process: identify what science practice the question is testing before choosing an answer.',
          'For data sets, read units, scales, and axis labels before reading answer choices.',
          'Many sets are multi-step: identify trend, infer mechanism, then evaluate a solution.',
          'Show your mental math quickly on scratch paper for percent change, rates, and energy transfer.',
        ],
      },
      {
        sectionName: 'Section II — Free Response',
        description: 'Question 1: design an investigation. Question 2: analyze an environmental problem and propose a solution. Question 3: analyze an environmental problem, propose a solution, and do calculations.',
        time: '1 hour 10 minutes',
        questions: '3 FRQs',
        weight: '40% of score',
        tips: [
          'Use command verbs precisely: identify, describe, explain, calculate, justify.',
          'For design questions, include hypothesis, variable control, measurement method, and sample size logic.',
          'For solution questions, connect the action to a mechanism and likely tradeoff.',
          'For calculation prompts, show setup and units clearly for full credit.',
        ],
      },
    ],
  },
  apush: {
    courseShort: 'APUSH',
    courseLabel: 'AP US History',
    totalTime: '3 hours 15 minutes',
    overview: 'The AP US History exam tests historical thinking skills (causation, continuity/change, comparison, contextualization, argumentation) applied to content from 1491 to the present. Evidence matters as much as content.',
    sections: [
      {
        sectionName: 'Section I — Multiple Choice & SAQ',
        description: 'Part A: 55 stimulus-based MCQs (primary/secondary sources, images, maps, graphs). Part B: 3 Short-Answer Questions (choose 2 of 3 for the third set).',
        time: '1 hour 35 minutes (MCQ) + 40 minutes (SAQ)',
        questions: '55 MCQ + 3 SAQ',
        weight: '40% (MCQ) + 20% (SAQ)',
        tips: [
          'All MCQs are stimulus-based — always read the source attribution (author, date, context) before the passage.',
          'SAQs: use the HAPP structure (Historical context, Argument, Period/Place, Point).',
          'You do not need a thesis for SAQs — just direct, specific evidence.',
          'Know your periodization: College Board divides US history into 9 periods. Questions often test you on what was changing vs. continuing.',
        ],
      },
      {
        sectionName: 'Section II — DBQ & LEQ',
        description: 'Document-Based Question (DBQ): analyze 7 documents and write a historically-supported essay. Long Essay Question (LEQ): choose 1 of 3 prompts and write a thesis-driven essay using your own knowledge.',
        time: '1 hour (DBQ, including 15-min reading) + 40 minutes (LEQ)',
        questions: '1 DBQ + 1 LEQ',
        weight: '25% (DBQ) + 15% (LEQ)',
        tips: [
          'DBQ thesis: make a historically defensible claim that is not just restating the prompt.',
          'Use at least 6 of 7 documents. For each, explain its relevance — do not just summarize.',
          'Earn complexity by acknowledging a counter-argument, showing continuity vs. change, or comparing across periods.',
          'LEQ: spend 5 minutes outlining before writing. A clear thesis with three supporting arguments beats a wandering essay every time.',
        ],
      },
    ],
  },
  csp: {
    courseShort: 'CSP',
    courseLabel: 'AP Computer Science Principles',
    totalTime: '3 hours total (end-of-course + create task written response)',
    overview: 'AP CSP combines a fully digital end-of-course section with the Create performance task and written responses tied to a student-developed project reference.',
    sections: [
      {
        sectionName: 'Section I — End-of-Course Multiple Choice',
        description: 'Single-select and multi-select questions on algorithms, data, internet, cybersecurity, and computing impacts.',
        time: '2 hours',
        questions: '70 MCQs',
        weight: '70% of exam score',
        tips: [
          'Algorithm questions: trace through code carefully. Most errors come from rushing the trace.',
          'Binary and data questions: know how to convert binary to decimal and vice versa.',
          'Internet questions: understand how packets, routing, and HTTP/HTTPS work conceptually.',
          'For impact questions, think about both positive AND negative effects on different groups.',
        ],
      },
      {
        sectionName: 'Section II — Create Task + Written Responses',
        description: 'Submit program code, video, and a personalized project reference during the course; complete two written-response questions (four prompts) on exam day.',
        time: '9 in-class hours + 60 min written response',
        questions: '2 written-response questions (4 prompts)',
        weight: '30% of exam score',
        tips: [
          'Your program must include a list/collection that is meaningfully used (not just stored).',
          'The algorithm must include sequencing, selection (if/else), AND iteration (loop).',
          'Written responses: be specific about how your code works, not generic. Quote specific lines.',
          'Start early — last-minute CPTs almost always miss the abstraction requirement.',
        ],
      },
    ],
  },
  lang: {
    courseShort: 'LANG',
    courseLabel: 'AP English Language and Composition',
    totalTime: '3 hours 15 minutes',
    overview: 'The AP English Language exam is fully digital in Bluebook and focuses on close rhetorical reading plus evidence-based argument writing.',
    sections: [
      {
        sectionName: 'Section I — Multiple Choice',
        description: 'Five nonfiction passage sets testing reading analysis and revision/writing decisions.',
        time: '1 hour',
        questions: '45 questions',
        weight: '45% of score',
        tips: [
          'Read the question stem before revisiting the sentence or paragraph in context.',
          'For writing questions, prioritize clarity, precision, and logical flow over flashy diction.',
          'Track tone shifts and qualification words (however, although, despite) closely.',
          'Eliminate choices that overstate author intent beyond textual evidence.',
        ],
      },
      {
        sectionName: 'Section II — Free Response',
        description: 'Three essays: synthesis, rhetorical analysis, and argument. Includes a 15-minute reading period.',
        time: '2 hours 15 minutes',
        questions: '3 FRQs',
        weight: '55% of score',
        tips: [
          'Anchor each body paragraph to a defensible line of reasoning, not a device list.',
          'In synthesis, integrate at least three sources with clear attribution and commentary.',
          'In rhetorical analysis, connect language choices to purpose and audience effect.',
          'In argument, qualify claims and acknowledge complexity to earn sophistication.',
        ],
      },
    ],
  },
}

// ─── PRACTICE QUESTIONS ──────────────────────────────────────────────────────

export const questions: Question[] = [
  // ── APES ──────────────────────────────────────────────────────────────────
  {
    id: 'apes-u1-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 1 + Science Practice 1',
    unit: 1,
    topic: 'introduction to ecosystems',
    stimulus: 'In a temperate forest ecosystem, researchers removed wolves from a valley. Over two decades, deer populations increased, riparian plants declined, and stream banks eroded.',
    question: 'Which of the following best describes the role of wolves in this ecosystem?',
    options: [
      { letter: 'A', text: 'Wolves are a keystone species because their removal caused disproportionately large changes to ecosystem structure.' },
      { letter: 'B', text: 'Wolves are an umbrella species because protecting them requires a large protected land area.' },
      { letter: 'C', text: 'Wolves are an indicator species because their population decline signals ecosystem disturbance.' },
      { letter: 'D', text: 'Wolves are an ecosystem engineer because they actively build structures that modify the physical environment.' },
    ],
    correctAnswer: 'A',
    explanation: 'The observed trophic cascade indicates a keystone role. The predator controls herbivore pressure, which protects vegetation and stabilizes ecosystem processes.',
  },
  {
    id: 'apes-u1-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 1 + Science Practice 2',
    unit: 1,
    topic: 'ecological succession',
    stimulus: 'After a volcanic eruption covered a hillside with lava, scientists observed the following sequence over 200 years: bare rock → lichens and mosses → grasses and small shrubs → pioneer trees → mature mixed forest.',
    stimulusLabel: 'Field succession observations',
    question: 'Which of the following correctly identifies the type of succession occurring and the primary reason it begins with lichens?',
    options: [
      { letter: 'A', text: 'Secondary succession; lichens are able to tolerate the high nutrient content of the new lava rock.' },
      { letter: 'B', text: 'Primary succession; lichens can colonize bare rock because they do not require soil and can produce acids that weather rock into early soil.' },
      { letter: 'C', text: 'Primary succession; lichens are keystone species that facilitate all subsequent colonization by providing food for herbivores.' },
      { letter: 'D', text: 'Secondary succession; the soil was destroyed by the lava, requiring the ecosystem to restart from pioneer species.' },
    ],
    correctAnswer: 'B',
    explanation: 'Primary succession begins where soil is absent. Lichens can colonize bare substrate and contribute to early soil formation by weathering rock and adding organic matter.',
  },
  {
    id: 'apes-u1-mcq-3',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 1 + Science Practice 6',
    unit: 1,
    topic: 'primary productivity',
    stimulus: 'In a wetland plot, gross primary productivity (GPP) is measured at 2,400 kcal/m²/yr and cellular respiration (R) is measured at 1,550 kcal/m²/yr.',
    question: 'What is the net primary productivity (NPP) of the wetland plot?',
    options: [
      { letter: 'A', text: '850 kcal/m²/yr' },
      { letter: 'B', text: '1,550 kcal/m²/yr' },
      { letter: 'C', text: '2,400 kcal/m²/yr' },
      { letter: 'D', text: '3,950 kcal/m²/yr' },
    ],
    correctAnswer: 'A',
    explanation: 'Use NPP = GPP − R. So 2,400 − 1,550 = 850 kcal/m²/yr.',
  },
  {
    id: 'apes-u1-mcq-4',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 1 + Science Practice 6',
    unit: 1,
    topic: 'trophic levels',
    stimulus: 'A grassland food chain is grass → grasshoppers → frogs → snakes → hawks. Producers capture 50,000 kcal per year.',
    question: 'Assuming 10% energy transfer efficiency at each step, approximately how much energy reaches hawks?',
    options: [
      { letter: 'A', text: '0.5 kcal' },
      { letter: 'B', text: '5 kcal' },
      { letter: 'C', text: '50 kcal' },
      { letter: 'D', text: '500 kcal' },
    ],
    correctAnswer: 'B',
    explanation: 'Energy decreases by 90% per transfer: 50,000 → 5,000 → 500 → 50 → 5 kcal.',
  },
  {
    id: 'apes-u1-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES FRQ patterns (investigation + data + calculations)',
    unit: 1,
    topic: 'ecosystem structure',
    stimulus: 'A pond ecosystem has the following annual energy values:\n\nProducers: 10,000 kcal/m²\nPrimary consumers: 1,000 kcal/m²\nSecondary consumers: 100 kcal/m²\nTertiary consumers: 10 kcal/m²',
    question: 'Use the data in the table to answer the following questions.',
    frqParts: [
      {
        part: 'a',
        prompt: 'Calculate ecological efficiency between primary and secondary consumers.',
        points: 2,
      },
      {
        part: 'b',
        prompt: 'Identify one abiotic factor limiting producer productivity and explain the mechanism.',
        points: 2,
      },
      {
        part: 'c',
        prompt: 'A pollutant kills 90% of algae. Predict the short-term effect on tertiary consumers.',
        points: 2,
      },
      {
        part: 'd',
        prompt: 'Describe one plausible recovery pathway over time using succession/ecosystem concepts.',
        points: 2,
      },
    ],
    totalPoints: 8,
    correctAnswer: 'a) (100/1000) × 100 = 10%. b) Acceptable examples: light availability, phosphorus, temperature, pH. c) Tertiary consumers decline due to reduced energy transfer from lower trophic levels. d) Producers recover first, then higher trophic levels respond with lag time.',
    explanation: 'This mirrors high-frequency APES skills: quantitative reasoning, trophic dynamics, and mechanism-based ecological explanation.',
  },
  {
    id: 'apes-u2-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 2 + Science Practice 2',
    unit: 2,
    topic: 'island biogeography',
    stimulus: 'Island A is large and close to the mainland. Island B is small and far from the mainland.',
    question: 'Which island should have greater long-term species richness, assuming similar climate and habitat types?',
    options: [
      { letter: 'A', text: 'Island A, because higher immigration and lower extinction support more species.' },
      { letter: 'B', text: 'Island A, because small islands always receive more colonizers than large islands.' },
      { letter: 'C', text: 'Island B, because far islands avoid competition and therefore retain more species.' },
      { letter: 'D', text: 'Island B, because distance from mainland increases speciation immediately.' },
    ],
    correctAnswer: 'A',
    explanation: 'Island biogeography predicts highest richness on large, near islands due to better colonization and reduced extinction risk.',
  },
  {
    id: 'apes-u2-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 2 + Science Practice 7',
    unit: 2,
    topic: 'ecosystem services',
    stimulus: 'A region reports a sharp decline in native pollinator populations after habitat loss and widespread pesticide use.',
    question: 'Which outcome is the most direct provisioning-service impact in the short term?',
    options: [
      { letter: 'A', text: 'Lower crop yields for pollination-dependent fruits and vegetables.' },
      { letter: 'B', text: 'Lower planetary albedo due to reduced cloud cover.' },
      { letter: 'C', text: 'Increased dissolved oxygen in nearby lakes.' },
      { letter: 'D', text: 'Reduced groundwater salinity in irrigated fields.' },
    ],
    correctAnswer: 'A',
    explanation: 'Pollination is a key ecosystem service that directly affects agricultural production for many crops.',
  },
  {
    id: 'apes-u3-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 3 + Science Practice 2',
    unit: 3,
    topic: 'population growth models',
    stimulus: 'A population grows rapidly after introduction into a new habitat, then growth slows and population size stabilizes.',
    question: 'Which model best describes this pattern?',
    options: [
      { letter: 'A', text: 'Exponential growth model with unlimited resources.' },
      { letter: 'B', text: 'Logistic growth model approaching carrying capacity.' },
      { letter: 'C', text: 'Linear growth model with constant annual increase.' },
      { letter: 'D', text: 'Declining growth model driven by reduced natality only.' },
    ],
    correctAnswer: 'B',
    explanation: 'Logistic growth includes an initial rapid phase followed by slowing near carrying capacity.',
  },
  {
    id: 'apes-u3-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 3 + Science Practice 6',
    unit: 3,
    topic: 'demographic transition',
    stimulus: 'Country X has declining death rates due to sanitation improvements but still has high birth rates.',
    question: 'Country X is most likely in which demographic transition stage?',
    options: [
      { letter: 'A', text: 'Stage 1' },
      { letter: 'B', text: 'Stage 2' },
      { letter: 'C', text: 'Stage 3' },
      { letter: 'D', text: 'Stage 4' },
    ],
    correctAnswer: 'B',
    explanation: 'Stage 2 is characterized by falling death rates with persistently high birth rates, causing rapid growth.',
  },
  {
    id: 'apes-u4-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 4 + Science Practice 2',
    unit: 4,
    topic: 'soil erosion',
    stimulus: 'A sloped agricultural field is tilled heavily and left bare between crop cycles.',
    question: 'Which change is most likely during intense rainfall events?',
    options: [
      { letter: 'A', text: 'Decreased sediment transport to nearby streams.' },
      { letter: 'B', text: 'Greater infiltration and lower runoff.' },
      { letter: 'C', text: 'Increased topsoil erosion and downstream turbidity.' },
      { letter: 'D', text: 'Higher soil organic matter from accelerated humus accumulation.' },
    ],
    correctAnswer: 'C',
    explanation: 'Bare, disturbed soil has low protection against raindrop impact and runoff, which increases erosion and sediment loading.',
  },
  {
    id: 'apes-u4-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 4 + Science Practice 5',
    unit: 4,
    topic: 'aquifers',
    stimulus: 'In a farming region, groundwater extraction exceeds recharge for multiple decades.',
    question: 'Which observation most strongly indicates aquifer overdraft?',
    options: [
      { letter: 'A', text: 'A long-term rise in local water table elevation.' },
      { letter: 'B', text: 'Formation of cones of depression around pumping wells.' },
      { letter: 'C', text: 'Lower stream salinity during dry seasons.' },
      { letter: 'D', text: 'Rapid increase in spring discharge rates.' },
    ],
    correctAnswer: 'B',
    explanation: 'Excessive pumping creates localized drops in hydraulic head, producing cones of depression.',
  },
  {
    id: 'apes-u5-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 5 + Science Practice 7',
    unit: 5,
    topic: 'irrigation',
    question: 'Which irrigation method usually maximizes water-use efficiency in arid regions?',
    options: [
      { letter: 'A', text: 'Flood irrigation across entire fields.' },
      { letter: 'B', text: 'Drip irrigation delivered directly to root zones.' },
      { letter: 'C', text: 'Center-pivot irrigation at midday during peak heat.' },
      { letter: 'D', text: 'Unlined open-channel irrigation with broad spray heads.' },
    ],
    correctAnswer: 'B',
    explanation: 'Drip irrigation minimizes evaporative loss and applies water more precisely where plants need it.',
  },
  {
    id: 'apes-u5-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 5 + Science Practice 7',
    unit: 5,
    topic: 'tragedy of the commons',
    stimulus: 'A coastal fishery is open access, and annual catches now exceed estimated maximum sustainable yield.',
    question: 'Which policy most directly addresses this commons problem?',
    options: [
      { letter: 'A', text: 'Reducing fishing vessel fuel taxes.' },
      { letter: 'B', text: 'Removing all catch limits for small boats only.' },
      { letter: 'C', text: 'Setting science-based catch quotas with enforcement and monitoring.' },
      { letter: 'D', text: 'Expanding bycatch allowances to improve fisher flexibility.' },
    ],
    correctAnswer: 'C',
    explanation: 'Open-access overharvest is managed through enforceable, science-based limits that align extraction with replenishment.',
  },
  {
    id: 'apes-u6-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 6 + Science Practice 5',
    unit: 6,
    topic: 'energy sources',
    question: 'Which electricity source generally has the lowest direct operational CO2 emissions per kWh?',
    options: [
      { letter: 'A', text: 'Coal combustion' },
      { letter: 'B', text: 'Natural gas combined-cycle' },
      { letter: 'C', text: 'Wind turbines' },
      { letter: 'D', text: 'Diesel generators' },
    ],
    correctAnswer: 'C',
    explanation: 'Wind generation has very low direct combustion emissions during operation compared with fossil fuel sources.',
  },
  {
    id: 'apes-u6-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 6 + Science Practice 6',
    unit: 6,
    topic: 'energy efficiency',
    stimulus: 'A building retrofit lowers electricity use from 12,000 kWh/year to 8,400 kWh/year.',
    question: 'What is the percent reduction in annual electricity use?',
    options: [
      { letter: 'A', text: '20%' },
      { letter: 'B', text: '25%' },
      { letter: 'C', text: '30%' },
      { letter: 'D', text: '40%' },
    ],
    correctAnswer: 'C',
    explanation: 'Percent reduction = (12,000 − 8,400) / 12,000 = 0.30 = 30%.',
  },
  {
    id: 'apes-u6-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES FRQ patterns (energy analysis + calculation)',
    unit: 6,
    topic: 'energy transition',
    stimulus: 'A city currently generates 70% of electricity from natural gas and 30% from wind. It plans to shift to 40% natural gas and 60% wind over five years.',
    question: 'Analyze the proposed energy transition for environmental and policy implications.',
    frqParts: [
      { part: 'a', prompt: 'Describe one likely environmental benefit of the transition.', points: 2 },
      { part: 'b', prompt: 'Identify one challenge or tradeoff associated with increasing wind generation.', points: 2 },
      { part: 'c', prompt: 'Calculate the percentage-point change in natural-gas share and in wind share.', points: 2 },
      { part: 'd', prompt: 'Propose one policy instrument that could help implement this transition effectively.', points: 2 },
    ],
    totalPoints: 8,
    correctAnswer: 'a) Lower greenhouse gas emissions and reduced criteria pollutants. b) Intermittency, transmission siting, land-use conflicts, or storage needs. c) Natural gas: −30 percentage points; wind: +30 percentage points. d) Examples: renewable portfolio standard, production tax credit, transmission investment, storage incentives.',
    explanation: 'This question integrates APES unit content with AP-style policy and quantitative reasoning.',
  },
  {
    id: 'apes-u7-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 7 + Science Practice 1',
    unit: 7,
    topic: 'photochemical smog',
    question: 'Photochemical smog forms most directly when which pollutants react in sunlight?',
    options: [
      { letter: 'A', text: 'SO2 and water vapor' },
      { letter: 'B', text: 'NOx and volatile organic compounds' },
      { letter: 'C', text: 'CO2 and methane' },
      { letter: 'D', text: 'Particulate matter and radon' },
    ],
    correctAnswer: 'B',
    explanation: 'Sunlight drives reactions between NOx and VOCs that produce ozone and other photochemical oxidants.',
  },
  {
    id: 'apes-u7-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 7 + Science Practice 5',
    unit: 7,
    topic: 'acid deposition',
    question: 'Acid deposition is primarily associated with atmospheric conversion of which emissions?',
    options: [
      { letter: 'A', text: 'CO2 and methane' },
      { letter: 'B', text: 'CFCs and halons' },
      { letter: 'C', text: 'SO2 and NOx' },
      { letter: 'D', text: 'Lead and mercury vapor' },
    ],
    correctAnswer: 'C',
    explanation: 'SO2 and NOx can oxidize to sulfuric and nitric acids, which are deposited via rain, snow, or dry fallout.',
  },
  {
    id: 'apes-u8-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 8 + Science Practice 5',
    unit: 8,
    topic: 'eutrophication',
    stimulus: 'A lake receives high nutrient runoff from nearby fertilized cropland.',
    question: 'Which sequence is most likely as eutrophication intensifies?',
    options: [
      { letter: 'A', text: 'Algal blooms increase, decomposition increases, dissolved oxygen decreases, fish kills increase.' },
      { letter: 'B', text: 'Algal blooms decline, decomposition declines, dissolved oxygen rises, fish populations surge.' },
      { letter: 'C', text: 'Nutrient inputs decrease, dissolved oxygen stabilizes, biodiversity increases immediately.' },
      { letter: 'D', text: 'Water clarity improves and harmful algal blooms become less frequent.' },
    ],
    correctAnswer: 'A',
    explanation: 'Nutrient enrichment stimulates algal growth; decomposition then consumes oxygen, often causing hypoxia.',
  },
  {
    id: 'apes-u8-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 8 + Science Practice 1',
    unit: 8,
    topic: 'biomagnification',
    question: 'In a mercury-contaminated aquatic food web, which organisms typically show the highest mercury concentration?',
    options: [
      { letter: 'A', text: 'Phytoplankton' },
      { letter: 'B', text: 'Zooplankton' },
      { letter: 'C', text: 'Top predatory fish' },
      { letter: 'D', text: 'Submerged macrophytes' },
    ],
    correctAnswer: 'C',
    explanation: 'Persistent toxins biomagnify at higher trophic levels, producing the highest concentrations in top predators.',
  },
  {
    id: 'apes-u9-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 9 + Science Practice 7',
    unit: 9,
    topic: 'mitigation and adaptation',
    question: 'Which policy is best categorized as climate adaptation rather than mitigation?',
    options: [
      { letter: 'A', text: 'Installing coastal flood barriers and elevating critical infrastructure.' },
      { letter: 'B', text: 'Replacing coal plants with utility-scale solar and wind.' },
      { letter: 'C', text: 'Implementing a carbon tax on fossil fuels.' },
      { letter: 'D', text: 'Improving vehicle fuel-efficiency standards.' },
    ],
    correctAnswer: 'A',
    explanation: 'Adaptation reduces harm from climate impacts already occurring or expected, while mitigation reduces emissions.',
  },
  {
    id: 'apes-u9-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES CED Unit 9 + Science Practice 1',
    unit: 9,
    topic: 'ozone depletion and treaties',
    question: 'Which agreement is most directly associated with reducing stratospheric ozone depletion?',
    options: [
      { letter: 'A', text: 'Kyoto Protocol' },
      { letter: 'B', text: 'Montreal Protocol' },
      { letter: 'C', text: 'Paris Agreement' },
      { letter: 'D', text: 'Clean Power Plan' },
    ],
    correctAnswer: 'B',
    explanation: 'The Montreal Protocol targeted ozone-depleting substances such as many CFCs and is a classic APES treaty example.',
  },
  {
    id: 'apes-u9-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Aligned to APES FRQ patterns (problem analysis + solution + calculation)',
    unit: 9,
    topic: 'climate solutions',
    stimulus: 'A coastal city faces increasing tidal flooding and heat-wave mortality. The city council is considering a package including urban tree-canopy expansion, cool roofs, and a bus electrification plan.',
    question: 'Evaluate the city package and justify a prioritized implementation strategy.',
    frqParts: [
      { part: 'a', prompt: 'Describe one way expanded tree canopy could reduce climate-related risk.', points: 2 },
      { part: 'b', prompt: 'Describe one limitation or tradeoff of cool-roof deployment at scale.', points: 2 },
      { part: 'c', prompt: 'Identify one co-benefit of bus electrification beyond greenhouse-gas reduction.', points: 2 },
      { part: 'd', prompt: 'Recommend which measure should be implemented first and justify with evidence-based reasoning.', points: 2 },
    ],
    totalPoints: 8,
    correctAnswer: 'a) Trees reduce urban heat via shading and evapotranspiration; can reduce flood risk through interception/infiltration. b) Tradeoffs include upfront costs, maintenance, and performance variation by climate/building stock. c) Co-benefits: lower NOx/PM exposure, noise reduction, health gains. d) Justification depends on scenario assumptions; strong responses connect urgency, equity, and measurable impact.',
    explanation: 'This matches APES synthesis demands: mechanism, tradeoff analysis, policy choice, and justification.',
  },

  // ── APUSH ──────────────────────────────────────────────────────────────────
  {
    id: 'apush-u4-mcq-1',
    type: 'mcq',
    source: 'Released',
    sourceDetail: '2019 AP US History Exam, Q28',
    unit: 4,
    topic: 'market revolution',
    stimulus: '"The great object is to make labor productive ... The mechanical powers which genius has brought to our aid have multiplied the productions of labor in a ratio altogether beyond calculation. A man who three years ago could with difficulty earn a dollar per week, can now, in the same time, earn three dollars."\n\n— Niles\' Weekly Register, 1821',
    stimulusLabel: 'Niles\' Weekly Register, 1821',
    question: 'The sentiment expressed in this excerpt is best understood in the context of which of the following developments?',
    options: [
      { letter: 'A', text: 'The expansion of slavery into newly acquired western territories' },
      { letter: 'B', text: 'The growth of industrialization and the market revolution in the northeastern United States' },
      { letter: 'C', text: 'The spread of Jeffersonian agrarianism and the yeoman farmer ideal' },
      { letter: 'D', text: 'The development of canal systems connecting the Midwest to Southern ports' },
    ],
    correctAnswer: 'B',
    explanation: 'The quote celebrates mechanical/technological improvements to labor productivity — the hallmark of the early industrialization and Market Revolution in the Northeast (1810s–1840s). Niles\' Weekly Register was an early 19th-century newspaper that frequently covered industrial and commercial developments. The context of machinery multiplying production is directly tied to textile mills (Lowell system) and early manufacturing.',
  },
  {
    id: 'apush-u5-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Predicted based on CB LO KC-5.3.II',
    unit: 5,
    topic: 'civil war causes',
    stimulus: '"A house divided against itself cannot stand. I believe this government cannot endure, permanently, half slave and half free."\n\n— Abraham Lincoln, 1858',
    stimulusLabel: 'Abraham Lincoln, "House Divided" speech, Springfield, Illinois, June 16, 1858',
    question: 'Lincoln\'s "House Divided" speech most directly reflected which of the following political developments of the 1850s?',
    options: [
      { letter: 'A', text: 'The collapse of the Second Party System and the rise of the Republican Party on an antislavery platform' },
      { letter: 'B', text: 'The passage of the Compromise of 1850 and the strengthening of the Fugitive Slave Act' },
      { letter: 'C', text: 'The Missouri Compromise and the permanent establishment of 36°30\' as the slavery boundary' },
      { letter: 'D', text: 'The annexation of Texas and the immediate expansion of slavery into the Southwest' },
    ],
    correctAnswer: 'A',
    explanation: 'The speech was delivered as Lincoln accepted the Republican Senate nomination in 1858. The broader context is the collapse of the Whig Party after the Kansas-Nebraska Act (1854), the emergence of the Republican Party built around free-labor ideology and opposition to slavery\'s expansion, and the increasingly polarized national debate. Options B, C, D refer to earlier events that predated the immediate political context of Lincoln\'s speech.',
  },
  {
    id: 'apush-u4-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Predicted LEQ — based on CB Period 4 themes',
    unit: 4,
    topic: 'jacksonian democracy',
    question: 'Evaluate the extent to which Jacksonian Democracy represented a genuine expansion of democratic participation in the United States from 1824 to 1840.',
    frqParts: [
      {
        part: 'Thesis',
        prompt: 'Write a historically defensible thesis that makes a historically defensible claim about the extent of democratic expansion under Jacksonian Democracy. Do not simply restate or rephrase the prompt.',
        points: 1,
      },
      {
        part: 'Contextualization',
        prompt: 'Describe a broader historical context that is relevant to the prompt. Explain how it connects to your argument.',
        points: 1,
      },
      {
        part: 'Evidence',
        prompt: 'Use at least two pieces of specific, accurate historical evidence to support your argument. Explain how each piece supports your thesis.',
        points: 2,
      },
      {
        part: 'Analysis',
        prompt: 'Use historical reasoning (comparison, causation, OR continuity and change over time) to frame an argument that addresses the prompt.',
        points: 2,
      },
    ],
    totalPoints: 6,
    correctAnswer: 'Strong thesis example: "While Jacksonian Democracy expanded suffrage and political participation for white men, it simultaneously restricted rights for women, enslaved people, and Native Americans, making it a deeply limited and selective expansion of democracy." Evidence FOR: elimination of property requirements for white male suffrage, spoils system democratizing government jobs, increased voter turnout. Evidence AGAINST: Indian Removal Act, continued enslavement, women excluded from politics.',
    explanation: 'Jacksonian Democracy LEQs are among the most common Period 4 essay topics. College Board wants students to complicate the narrative — acknowledging that Jacksonian "democracy" was expansion for white men only. This earns complexity points and demonstrates genuine historical thinking.',
  },

  // ── CSP ───────────────────────────────────────────────────────────────────
  {
    id: 'csp-u3-mcq-1',
    type: 'mcq',
    source: 'Released',
    sourceDetail: '2021 AP Computer Science Principles Exam, Q22',
    unit: 3,
    topic: 'conditionals & boolean logic',
    topicTags: ['conditionals & boolean logic', 'variables & data types', 'loops & iteration'],
    stimulus: 'Consider the following algorithm written in pseudocode:\n\ncount ← 0\nFOR EACH item IN list\n  IF item > 10\n    count ← count + 1\nDISPLAY count',
    question: 'What does this algorithm output when given the list [5, 12, 3, 17, 10, 25]?',
    options: [
      { letter: 'A', text: '2' },
      { letter: 'B', text: '3' },
      { letter: 'C', text: '4' },
      { letter: 'D', text: '5' },
    ],
    correctAnswer: 'B',
    explanation: 'Trace through the list: 5 (not > 10, skip), 12 (> 10, count=1), 3 (skip), 17 (> 10, count=2), 10 (NOT > 10, it equals 10, skip), 25 (> 10, count=3). Output: 3. Common error: students include 10 because they misread > as ≥. Always trace through edge cases like equality when AP asks "greater than."',
  },
  {
    id: 'csp-u2-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Predicted based on CB LO DAT-1.C',
    unit: 2,
    topic: 'binary numbers & data representation',
    topicTags: ['binary numbers & data representation'],
    question: 'Which of the following correctly converts the binary number 1011 to its decimal equivalent?',
    options: [
      { letter: 'A', text: '9' },
      { letter: 'B', text: '10' },
      { letter: 'C', text: '11' },
      { letter: 'D', text: '13' },
    ],
    correctAnswer: 'C',
    explanation: 'Binary 1011: read right to left. Position 0 (value 1): 1×1=1. Position 1 (value 2): 1×2=2. Position 2 (value 4): 0×4=0. Position 3 (value 8): 1×8=8. Total: 8+0+2+1=11. Binary-to-decimal conversion is tested every year and is one of the easiest points to earn if you memorize the place values: 1, 2, 4, 8, 16, 32...',
  },
  {
    id: 'csp-u4-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Predicted written response — based on CB CPT rubric',
    unit: 4,
    topic: 'HTTP & protocols',
    topicTags: ['HTTP & protocols', 'how the internet works', 'ip addresses & packets'],
    question: 'A school app frequently fails to load pages for users on different networks. Students suspect an issue in how requests move between clients, DNS, and web servers.',
    frqParts: [
      {
        part: 'a',
        prompt: 'Describe one role of DNS in retrieving a webpage and one consequence if DNS resolution fails.',
        points: 2,
      },
      {
        part: 'b',
        prompt: 'Explain the difference between HTTP and HTTPS and why that distinction matters for users on public Wi‑Fi.',
        points: 3,
      },
      {
        part: 'c',
        prompt: 'Identify one network-level strategy (protocol or infrastructure) that improves reliability when packets are delayed or dropped.',
        points: 1,
      },
    ],
    totalPoints: 6,
    correctAnswer: 'a) DNS maps a domain name to an IP address so packets can be routed to the correct server; if DNS fails, the browser cannot locate the destination host. b) HTTP sends data in plaintext, while HTTPS uses TLS to encrypt data in transit and authenticate server identity; HTTPS reduces interception and tampering risk on shared networks. c) Acceptable reliability examples include packet retransmission, redundant routes, load balancing, or fault-tolerant network design.',
    explanation: 'This targets Big Idea 4 system-network understanding: name resolution, protocol behavior, security implications, and reliability mechanisms in real internet workflows.',
  },
]

const handcraftedQuestionAdditions: Question[] = [
  // ── APUSH handcrafted expansion ───────────────────────────────────────────
  {
    id: 'apush-u1-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted stimulus-style APUSH item (Period 1)',
    unit: 1,
    topic: 'columbian exchange',
    topicTags: ['columbian exchange', 'native american societies before contact'],
    question: 'Which effect of the Columbian Exchange most directly transformed labor systems in the Americas?',
    options: [
      { letter: 'A', text: 'The spread of epidemic disease that caused severe Indigenous population decline' },
      { letter: 'B', text: 'The immediate replacement of plantation labor with wage labor' },
      { letter: 'C', text: 'The rapid expansion of industrial factory production in colonies' },
      { letter: 'D', text: 'The end of coerced labor in Spanish and Portuguese territories' },
    ],
    correctAnswer: 'A',
    explanation: 'Mass mortality among Indigenous communities was a major driver of coercive labor restructuring, including expanded African slavery.',
  },
  {
    id: 'apush-u2-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted stimulus-style APUSH item (Period 2)',
    unit: 2,
    topic: 'mercantilism & salutary neglect',
    topicTags: ['mercantilism & salutary neglect', 'middle colonies', 'southern colonies'],
    question: 'Salutary neglect in the early 1700s most directly encouraged which colonial pattern?',
    options: [
      { letter: 'A', text: 'Greater local self-government and weaker day-to-day imperial enforcement' },
      { letter: 'B', text: 'Immediate parliamentary representation for colonial assemblies' },
      { letter: 'C', text: 'Uniform religious conformity across all colonies' },
      { letter: 'D', text: 'Rapid abolition of navigation laws by imperial authorities' },
    ],
    correctAnswer: 'A',
    explanation: 'Loose enforcement allowed colonial assemblies and local elites to exercise significant autonomy before stricter post-1763 controls.',
  },
  {
    id: 'apush-u3-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted stimulus-style APUSH item (Period 3)',
    unit: 3,
    topic: 'constitutional convention',
    topicTags: ['constitutional convention', 'federalists vs anti-federalists'],
    question: 'The Great Compromise at the Constitutional Convention primarily resolved conflict over',
    options: [
      { letter: 'A', text: 'representation of large and small states in the national legislature' },
      { letter: 'B', text: 'the immediate abolition of slavery in all states' },
      { letter: 'C', text: 'the use of judicial review by the Supreme Court' },
      { letter: 'D', text: 'the extension of voting rights to women and free Black men' },
    ],
    correctAnswer: 'A',
    explanation: 'It created bicameralism: proportional representation in the House and equal representation in the Senate.',
  },
  {
    id: 'apush-u3-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted APUSH LEQ/SAQ blend (Period 3)',
    unit: 3,
    topic: 'articles of confederation',
    topicTags: ['articles of confederation', 'constitutional convention', 'political parties emerge'],
    question: 'Evaluate the extent to which weaknesses of the Articles of Confederation justified creation of a stronger federal Constitution.',
    frqParts: [
      { part: 'a', prompt: 'Provide a defensible thesis addressing extent.', points: 2 },
      { part: 'b', prompt: 'Use one specific weakness and one specific achievement of the Articles as evidence.', points: 2 },
      { part: 'c', prompt: 'Explain one continuity or change in federal-state power after ratification.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'Strong responses balance failures (taxation, interstate coordination, enforcement) with achievements (northwest governance, diplomacy) and connect to constitutional changes.',
    explanation: 'This mirrors APUSH scoring priorities: defensible claim, specific evidence, and historical reasoning.',
  },
  {
    id: 'apush-u5-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted stimulus-style APUSH item (Period 5)',
    unit: 5,
    topic: 'kansas-nebraska act & bleeding kansas',
    topicTags: ['kansas-nebraska act & bleeding kansas', 'dred scott decision'],
    question: 'The Kansas-Nebraska Act most directly intensified sectional conflict by',
    options: [
      { letter: 'A', text: 'allowing popular sovereignty in territories previously restricted by the Missouri Compromise' },
      { letter: 'B', text: 'abolishing slavery in Washington, D.C.' },
      { letter: 'C', text: 'granting immediate statehood to Kansas as a free state' },
      { letter: 'D', text: 'removing federal authority over western territorial governance' },
    ],
    correctAnswer: 'A',
    explanation: 'Repealing the Missouri line and opening territories to popular sovereignty fueled violent competition over slavery.',
  },
  {
    id: 'apush-u5-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted APUSH DBQ-style prompt (Period 5)',
    unit: 5,
    topic: 'reconstruction era',
    topicTags: ['reconstruction era', '13th 14th & 15th amendments', 'causes of the civil war'],
    question: 'Evaluate the extent to which Reconstruction (1865–1877) transformed social and political power in the South.',
    frqParts: [
      { part: 'a', prompt: 'State a claim about level of transformation.', points: 2 },
      { part: 'b', prompt: 'Use one constitutional amendment and one policy/event as evidence.', points: 2 },
      { part: 'c', prompt: 'Explain one major limit to Reconstruction change by 1877.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'Top responses show significant formal change via amendments and federal intervention, then explain rollback through violence, court limits, and political compromise.',
    explanation: 'This is a classic APUSH extent prompt requiring balance and precision.',
  },
  {
    id: 'apush-u6-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted stimulus-style APUSH item (Period 6)',
    unit: 6,
    topic: 'labor unions & strikes',
    topicTags: ['labor unions & strikes', 'industrialization & big business'],
    question: 'Late 19th-century labor conflict was most directly fueled by',
    options: [
      { letter: 'A', text: 'wage cuts, dangerous conditions, and anti-union employer tactics' },
      { letter: 'B', text: 'federal guarantees of collective bargaining rights' },
      { letter: 'C', text: 'universal social welfare programs reducing worker precarity' },
      { letter: 'D', text: 'the end of mechanization in major industries' },
    ],
    correctAnswer: 'A',
    explanation: 'Rapid industrial growth concentrated power among employers while labor protections remained weak.',
  },
  {
    id: 'apush-u7-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted stimulus-style APUSH item (Period 7)',
    unit: 7,
    topic: 'new deal programs & legacy',
    topicTags: ['new deal programs & legacy', 'great depression causes'],
    question: 'A major long-term effect of New Deal reforms was',
    options: [
      { letter: 'A', text: 'expanded federal responsibility for economic stabilization and social welfare' },
      { letter: 'B', text: 'permanent elimination of unemployment during recessions' },
      { letter: 'C', text: 'constitutional prohibition of deficit spending' },
      { letter: 'D', text: 'full deregulation of banking and financial markets' },
    ],
    correctAnswer: 'A',
    explanation: 'Programs and institutions from the period redefined expectations of federal intervention.',
  },
  {
    id: 'apush-u8-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted stimulus-style APUSH item (Period 8)',
    unit: 8,
    topic: 'cold war origins & containment',
    topicTags: ['cold war origins & containment', 'truman doctrine & marshall plan'],
    question: 'Containment policy was most directly designed to',
    options: [
      { letter: 'A', text: 'limit expansion of Soviet influence through economic and military support to allies' },
      { letter: 'B', text: 'replace all European governments with direct U.S. administration' },
      { letter: 'C', text: 'avoid all foreign commitments and alliance systems' },
      { letter: 'D', text: 'immediately dismantle all nuclear arsenals by treaty' },
    ],
    correctAnswer: 'A',
    explanation: 'Containment aimed to prevent further spread of communism rather than immediate rollback everywhere.',
  },
  {
    id: 'apush-u8-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted APUSH argument prompt (Period 8)',
    unit: 8,
    topic: 'civil rights movement',
    topicTags: ['civil rights movement', 'great society legislation', 'watergate scandal'],
    question: 'Evaluate the extent to which federal action, rather than grassroots activism, drove civil rights gains from 1945 to 1980.',
    frqParts: [
      { part: 'a', prompt: 'Make a defensible claim about relative influence.', points: 2 },
      { part: 'b', prompt: 'Use one federal action and one grassroots action as evidence.', points: 2 },
      { part: 'c', prompt: 'Explain interaction between movements and institutions.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'High-scoring responses show reciprocal causation: activism forced federal response; federal policy expanded legal enforcement capacity.',
    explanation: 'This prompt tests causation and complexity in core Period 8 themes.',
  },
  {
    id: 'apush-u9-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted stimulus-style APUSH item (Period 9)',
    unit: 9,
    topic: 'globalization & trade',
    topicTags: ['globalization & trade', 'modern political polarization'],
    question: 'Debates over late 20th-century globalization most often centered on',
    options: [
      { letter: 'A', text: 'tradeoffs between market integration, labor impacts, and national regulation' },
      { letter: 'B', text: 'eliminating all international supply chains by law' },
      { letter: 'C', text: 'ending digital communication between nations' },
      { letter: 'D', text: 'replacing private firms with universal state ownership worldwide' },
    ],
    correctAnswer: 'A',
    explanation: 'Policy debates emphasized economic growth benefits versus deindustrialization, labor pressure, and sovereignty concerns.',
  },
  {
    id: 'apush-u9-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted APUSH contemporary synthesis prompt',
    unit: 9,
    topic: 'modern political polarization',
    topicTags: ['modern political polarization', 'supreme court landmark cases', '9/11 & war on terror'],
    question: 'Evaluate the extent to which post-1980 political polarization represents continuity with earlier U.S. political conflict.',
    frqParts: [
      { part: 'a', prompt: 'Make a defensible continuity/change claim.', points: 2 },
      { part: 'b', prompt: 'Use one post-1980 and one pre-1980 example as evidence.', points: 2 },
      { part: 'c', prompt: 'Explain one structural factor that intensified polarization.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'Strong responses compare modern sorting/media/institutional incentives with earlier sectional, ideological, or party realignment conflicts.',
    explanation: 'This style trains cross-period argumentation and contextualization.',
  },

  // ── CSP handcrafted expansion ─────────────────────────────────────────────
  {
    id: 'csp-u1-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP style item (Big Idea 1)',
    unit: 1,
    topic: 'iterative development',
    topicTags: ['iterative development', 'testing & debugging'],
    question: 'In iterative software development, which practice most directly reduces risk before final release?',
    options: [
      { letter: 'A', text: 'Building, testing, and revising in small increments with feedback loops' },
      { letter: 'B', text: 'Writing complete code first, then testing only once at the end' },
      { letter: 'C', text: 'Avoiding user feedback to preserve original design assumptions' },
      { letter: 'D', text: 'Removing all documentation to speed deployment' },
    ],
    correctAnswer: 'A',
    explanation: 'Iteration surfaces defects earlier and allows design corrections before full integration.',
  },
  {
    id: 'csp-u2-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP style item (Big Idea 2)',
    unit: 2,
    topic: 'data compression',
    topicTags: ['data compression', 'big data & limitations'],
    question: 'A key tradeoff in lossy compression is that it',
    options: [
      { letter: 'A', text: 'reduces file size by discarding some information' },
      { letter: 'B', text: 'always increases precision and fidelity' },
      { letter: 'C', text: 'requires no algorithmic decision-making' },
      { letter: 'D', text: 'is reversible without any quality loss' },
    ],
    correctAnswer: 'A',
    explanation: 'Lossy methods prioritize size/transport efficiency at the cost of perfect reconstruction.',
  },
  {
    id: 'csp-u2-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP written response (Big Idea 2)',
    unit: 2,
    topic: 'data visualization & analysis',
    topicTags: ['data visualization & analysis', 'metadata'],
    question: 'A student dataset includes location metadata and trend charts. Explain how visualization choices can both reveal and hide patterns.',
    frqParts: [
      { part: 'a', prompt: 'Describe one visualization choice that improves interpretation.', points: 2 },
      { part: 'b', prompt: 'Describe one misleading choice and why it is misleading.', points: 2 },
      { part: 'c', prompt: 'Explain one privacy risk tied to metadata in the dataset.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'Strong responses connect axis/scaling/aggregation choices to inference quality and identify concrete metadata privacy exposure.',
    explanation: 'This mirrors CSP data interpretation + impact reasoning.',
  },
  {
    id: 'csp-u3-mcq-3',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP style item (Big Idea 3)',
    unit: 3,
    topic: 'lists & traversals',
    topicTags: ['lists & traversals', 'loops & iteration'],
    question: 'What is the primary advantage of traversing a list with a loop instead of writing separate statements?',
    options: [
      { letter: 'A', text: 'It generalizes processing to any list size and reduces repeated code' },
      { letter: 'B', text: 'It guarantees constant runtime regardless of list length' },
      { letter: 'C', text: 'It avoids all conditional logic in algorithms' },
      { letter: 'D', text: 'It removes the need for variables and state' },
    ],
    correctAnswer: 'A',
    explanation: 'Traversal patterns scale with data size and support reusable algorithmic structure.',
  },
  {
    id: 'csp-u3-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP style item (Big Idea 3)',
    unit: 3,
    topic: 'procedures & parameters',
    topicTags: ['procedures & parameters', 'return values & scope'],
    question: 'Using parameters in a procedure most directly improves',
    options: [
      { letter: 'A', text: 'abstraction and reuse across multiple inputs' },
      { letter: 'B', text: 'randomness of algorithm outcomes' },
      { letter: 'C', text: 'network packet routing efficiency' },
      { letter: 'D', text: 'binary storage capacity on disk' },
    ],
    correctAnswer: 'A',
    explanation: 'Parameters allow one algorithmic definition to operate on different data values.',
  },
  {
    id: 'csp-u3-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP written response (Big Idea 3)',
    unit: 3,
    topic: 'algorithm design',
    topicTags: ['algorithm design', 'common pseudocode patterns', 'searching & sorting'],
    question: 'Design a procedure that filters invalid records, then returns records sorted by score.',
    frqParts: [
      { part: 'a', prompt: 'Describe algorithm steps using sequencing, selection, and iteration.', points: 2 },
      { part: 'b', prompt: 'Provide pseudocode for the filtering stage.', points: 2 },
      { part: 'c', prompt: 'Explain one test case and expected sorted output.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'High-scoring responses clearly separate filter logic from ordering logic and justify with test behavior.',
    explanation: 'This is aligned with CSP algorithm and abstraction expectations.',
  },
  {
    id: 'csp-u4-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP style item (Big Idea 4)',
    unit: 4,
    topic: 'routing & DNS',
    topicTags: ['routing & DNS', 'ip addresses & packets'],
    question: 'DNS primarily provides which internet function?',
    options: [
      { letter: 'A', text: 'Translating human-readable domain names into IP addresses' },
      { letter: 'B', text: 'Encrypting all packet payloads end-to-end by default' },
      { letter: 'C', text: 'Physically forwarding packets between routers' },
      { letter: 'D', text: 'Guaranteeing zero-latency packet delivery' },
    ],
    correctAnswer: 'A',
    explanation: 'DNS is a naming layer used before packets are routed to destination addresses.',
  },
  {
    id: 'csp-u4-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP style item (Big Idea 4)',
    unit: 4,
    topic: 'encryption & authentication',
    topicTags: ['encryption & authentication', 'cybersecurity fundamentals'],
    question: 'Which statement best distinguishes encryption from authentication?',
    options: [
      { letter: 'A', text: 'Encryption protects confidentiality; authentication verifies identity/origin.' },
      { letter: 'B', text: 'Encryption verifies identity; authentication compresses data.' },
      { letter: 'C', text: 'Both only apply to offline storage, not network communication.' },
      { letter: 'D', text: 'Neither can be combined in secure protocols.' },
    ],
    correctAnswer: 'A',
    explanation: 'Secure systems often use both: confidentiality + identity/integrity assurances.',
  },
  {
    id: 'csp-u5-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP style item (Big Idea 5)',
    unit: 5,
    topic: 'bias in algorithms',
    topicTags: ['bias in algorithms', 'ethical concerns'],
    question: 'Algorithmic bias most often emerges when',
    options: [
      { letter: 'A', text: 'training data or problem framing systematically underrepresents groups' },
      { letter: 'B', text: 'programs use loops and conditionals together' },
      { letter: 'C', text: 'computers process binary values internally' },
      { letter: 'D', text: 'systems implement user authentication controls' },
    ],
    correctAnswer: 'A',
    explanation: 'Bias can come from data collection, labeling, objective selection, and deployment context.',
  },
  {
    id: 'csp-u5-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP style item (Big Idea 5)',
    unit: 5,
    topic: 'privacy & surveillance',
    topicTags: ['privacy & surveillance', 'digital divide'],
    question: 'A major privacy concern with large-scale data aggregation is',
    options: [
      { letter: 'A', text: 're-identification risk even after partial anonymization' },
      { letter: 'B', text: 'automatic elimination of all data quality errors' },
      { letter: 'C', text: 'guaranteed user control over secondary data use' },
      { letter: 'D', text: 'reduced need for consent and governance policies' },
    ],
    correctAnswer: 'A',
    explanation: 'Cross-dataset linkage can reveal identities and sensitive attributes unexpectedly.',
  },
  {
    id: 'csp-u5-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP impact prompt (Big Idea 5)',
    unit: 5,
    topic: 'create performance task guide',
    topicTags: ['create performance task guide', 'crowdsourcing & innovation'],
    question: 'A student app uses crowdsourced reports and location data. Evaluate benefits, risks, and one ethical design revision.',
    frqParts: [
      { part: 'a', prompt: 'Describe one beneficial impact for users/community.', points: 2 },
      { part: 'b', prompt: 'Describe one harm/risk, including privacy or bias dimensions.', points: 2 },
      { part: 'c', prompt: 'Propose one specific design change and justify expected tradeoffs.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'Strong responses connect technical design choices to social outcomes and justify a concrete mitigation strategy.',
    explanation: 'This trains the impact-analysis reasoning required throughout CSP.',
  },
  {
    id: 'csp-u1-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP CSP process prompt (Big Idea 1)',
    unit: 1,
    topic: 'program design process',
    topicTags: ['program design process', 'collaboration in computing', 'documentation & comments'],
    question: 'Describe an iterative team process for designing, testing, and documenting a user-facing program.',
    frqParts: [
      { part: 'a', prompt: 'Identify one role for collaboration in improving quality.', points: 2 },
      { part: 'b', prompt: 'Describe one test strategy and one debugging step.', points: 2 },
      { part: 'c', prompt: 'Explain why documentation is essential for maintainability.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'High-scoring responses connect collaboration, test evidence, and maintainable documentation choices.',
    explanation: 'Big Idea 1 emphasizes process quality, not just final code output.',
  },

  // ── AP Lang handcrafted expansion ─────────────────────────────────────────
  {
    id: 'lang-u1-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 1)',
    unit: 1,
    topic: 'speaker, audience & purpose',
    topicTags: ['speaker, audience & purpose', 'rhetorical triangle'],
    question: 'A rhetorical analysis paragraph is strongest when it primarily explains',
    options: [
      { letter: 'A', text: 'how a specific choice helps the speaker achieve purpose with a specific audience' },
      { letter: 'B', text: 'which literary device appears most often, regardless of effect' },
      { letter: 'C', text: 'the writer’s biography without reference to the text' },
      { letter: 'D', text: 'why the reader should agree with the student’s personal beliefs' },
    ],
    correctAnswer: 'A',
    explanation: 'AP Lang scoring prioritizes strategy-to-purpose analysis in context.',
  },
  {
    id: 'lang-u1-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 1)',
    unit: 1,
    topic: 'tone & shift in tone',
    topicTags: ['tone & shift in tone', 'point of view'],
    question: 'A shift from measured to urgent diction most likely signals a change in',
    options: [
      { letter: 'A', text: 'the speaker’s rhetorical strategy and intended audience response' },
      { letter: 'B', text: 'the grammatical tense from past to present only' },
      { letter: 'C', text: 'the text’s genre from argument to fiction by default' },
      { letter: 'D', text: 'the number of sources cited in the paragraph' },
    ],
    correctAnswer: 'A',
    explanation: 'Tone shifts often mark strategic pivots in appeals and purpose emphasis.',
  },
  {
    id: 'lang-u2-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 2)',
    unit: 2,
    topic: 'evidence relevance & sufficiency',
    topicTags: ['evidence relevance & sufficiency', 'commentary & analysis'],
    question: 'Evidence is sufficient in an argument when it',
    options: [
      { letter: 'A', text: 'is specific, representative, and explicitly connected to the claim through commentary' },
      { letter: 'B', text: 'is emotionally intense, even if it does not support the claim' },
      { letter: 'C', text: 'appears as long quotations with minimal explanation' },
      { letter: 'D', text: 'repeats the thesis in different words without support' },
    ],
    correctAnswer: 'A',
    explanation: 'AP readers reward clear warrant logic: evidence must be interpreted, not merely presented.',
  },
  {
    id: 'lang-u2-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang argument prompt',
    unit: 2,
    topic: 'counterclaim, rebuttal & concession',
    topicTags: ['counterclaim, rebuttal & concession', 'main claim & subclaim'],
    question: 'Develop an argument that incorporates concession and rebuttal while maintaining a clear line of reasoning.',
    frqParts: [
      { part: 'a', prompt: 'State a defensible thesis with qualification.', points: 2 },
      { part: 'b', prompt: 'Present one counterclaim fairly and rebut it with evidence.', points: 2 },
      { part: 'c', prompt: 'Explain how your rebuttal strengthens overall argument coherence.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'Top responses use concession strategically rather than as a weak add-on and maintain claim control throughout.',
    explanation: 'This reflects AP argument essay expectations for nuance and control.',
  },
  {
    id: 'lang-u3-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 3)',
    unit: 3,
    topic: 'line of reasoning',
    topicTags: ['line of reasoning', 'organizational patterns'],
    question: 'A coherent line of reasoning is best described as',
    options: [
      { letter: 'A', text: 'a sequence of claims and evidence that progressively advances a central thesis' },
      { letter: 'B', text: 'a list of unrelated points that share the same tone' },
      { letter: 'C', text: 'an introduction paragraph with no body development' },
      { letter: 'D', text: 'a summary of source content without interpretation' },
    ],
    correctAnswer: 'A',
    explanation: 'Reasoning coherence depends on logical progression and explicit argumentative links.',
  },
  {
    id: 'lang-u3-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 3)',
    unit: 3,
    topic: 'logical fallacies',
    topicTags: ['logical fallacies', 'inductive & deductive reasoning'],
    question: 'An argument that attacks a speaker’s character instead of addressing their claim commits',
    options: [
      { letter: 'A', text: 'ad hominem reasoning' },
      { letter: 'B', text: 'causal inference' },
      { letter: 'C', text: 'valid deductive proof' },
      { letter: 'D', text: 'parallel structure' },
    ],
    correctAnswer: 'A',
    explanation: 'Ad hominem is a classic AP Lang reasoning flaw question.',
  },
  {
    id: 'lang-u4-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 4)',
    unit: 4,
    topic: 'parallelism & repetition',
    topicTags: ['parallelism & repetition', 'diction & syntax'],
    question: 'A writer repeats parallel sentence openings primarily to',
    options: [
      { letter: 'A', text: 'create rhythm and emphasis that reinforce a key argumentative pattern' },
      { letter: 'B', text: 'eliminate any need for evidence' },
      { letter: 'C', text: 'shift into purely narrative storytelling mode' },
      { letter: 'D', text: 'hide logical inconsistencies from readers' },
    ],
    correctAnswer: 'A',
    explanation: 'Parallel repetition can intensify emphasis, pacing, and thematic cohesion.',
  },
  {
    id: 'lang-u4-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang rhetorical analysis prompt',
    unit: 4,
    topic: 'imagery & figurative language',
    topicTags: ['imagery & figurative language', 'sentence variety & tone shifts'],
    question: 'Analyze how imagery and syntax choices shape tone and advance the author’s argument.',
    frqParts: [
      { part: 'a', prompt: 'State a claim about tone and rhetorical purpose.', points: 2 },
      { part: 'b', prompt: 'Analyze one imagery choice and one syntactic choice.', points: 2 },
      { part: 'c', prompt: 'Explain audience effect and argumentative consequence.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'Strong responses move beyond device labels to explain rhetorical function and audience effect.',
    explanation: 'This maps directly to AP rhetorical analysis scoring logic.',
  },
  {
    id: 'lang-u5-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 5)',
    unit: 5,
    topic: 'essay organization',
    topicTags: ['essay organization', 'transitions & cohesion'],
    question: 'The most effective transition sentence in an AP Lang essay usually',
    options: [
      { letter: 'A', text: 'connects the previous point to the next claim while preserving thesis direction' },
      { letter: 'B', text: 'introduces a new claim unrelated to prior reasoning' },
      { letter: 'C', text: 'repeats a quote without commentary' },
      { letter: 'D', text: 'restarts the essay from background context only' },
    ],
    correctAnswer: 'A',
    explanation: 'Cohesion is about argumentative linkage, not decorative phrasing.',
  },
  {
    id: 'lang-u6-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 6)',
    unit: 6,
    topic: 'assumptions & cultural context',
    topicTags: ['assumptions & cultural context', 'author\'s position & reliability'],
    question: 'Identifying an unstated assumption is most useful because it helps readers',
    options: [
      { letter: 'A', text: 'evaluate whether the argument depends on beliefs the audience may not share' },
      { letter: 'B', text: 'ignore historical context for cleaner analysis' },
      { letter: 'C', text: 'replace evidence analysis with personal anecdotes' },
      { letter: 'D', text: 'treat all sources as equally reliable by default' },
    ],
    correctAnswer: 'A',
    explanation: 'Assumption analysis is central to evaluating rhetorical reasoning quality.',
  },
  {
    id: 'lang-u7-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang synthesis/argument bridge prompt',
    unit: 7,
    topic: 'synthesis of sources',
    topicTags: ['synthesis of sources', 'counterargument & refutation', 'defending a claim'],
    question: 'Synthesize at least three perspectives into a qualified argument that addresses a public policy question.',
    frqParts: [
      { part: 'a', prompt: 'State a defensible, qualified thesis.', points: 2 },
      { part: 'b', prompt: 'Integrate at least three viewpoints with attribution and commentary.', points: 2 },
      { part: 'c', prompt: 'Address one counterargument and explain its limitation.', points: 2 },
    ],
    totalPoints: 6,
    correctAnswer: 'Top responses integrate sources as evidence for original reasoning rather than summarizing them in isolation.',
    explanation: 'This tracks AP synthesis essay rubric priorities.',
  },
  {
    id: 'lang-u8-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Handcrafted AP Lang style item (Unit 8)',
    unit: 8,
    topic: 'argument essay mastery',
    topicTags: ['argument essay mastery', 'rhetorical analysis essay mastery', 'synthesis essay mastery'],
    question: 'Across all three AP Lang essays, the strongest common denominator is',
    options: [
      { letter: 'A', text: 'a defensible claim supported by specific evidence and purposeful commentary' },
      { letter: 'B', text: 'maximum vocabulary complexity regardless of clarity' },
      { letter: 'C', text: 'five-paragraph formatting with identical paragraph lengths' },
      { letter: 'D', text: 'summary of prompt language without independent reasoning' },
    ],
    correctAnswer: 'A',
    explanation: 'Regardless of essay type, scoring emphasizes claim quality, evidence, and analysis.',
  },
]

const TARGET_QUESTIONS_PER_COURSE = 30

const courseConfigMap = {
  apes: apesConfig,
  apush: apushConfig,
  csp: cspConfig,
  lang: langConfig,
} as const

const courseResourcesMap: Record<string, CourseResources> = {
  apes: {
    courseKey: 'apes',
    links: [
      {
        label: 'APES Exam Overview (AP Students)',
        url: 'https://apstudents.collegeboard.org/courses/ap-environmental-science/assessment',
        detail: 'Current exam components, timing, and digital testing details.',
      },
      {
        label: 'APES CED + Course Page',
        url: 'https://apcentral.collegeboard.org/courses/ap-environmental-science',
        detail: 'Official unit framework, skills, and course/exam description.',
      },
      {
        label: 'APES Past FRQs + Scoring',
        url: 'https://apcentral.collegeboard.org/courses/ap-environmental-science/exam/past-exam-questions',
        detail: 'Released FRQs, scoring guidelines, chief reader reports, and samples.',
      },
      {
        label: 'AP Classroom',
        url: 'https://apclassroom.collegeboard.org/',
        detail: 'Topic questions and secure classroom practice assigned by teachers.',
      },
    ],
  },
  apush: {
    courseKey: 'apush',
    links: [
      {
        label: 'APUSH Exam Overview (AP Students)',
        url: 'https://apstudents.collegeboard.org/courses/ap-united-states-history/assessment',
        detail: 'Current digital exam structure, section timing, and task expectations.',
      },
      {
        label: 'APUSH CED + Course Page',
        url: 'https://apcentral.collegeboard.org/courses/ap-united-states-history',
        detail: 'Period framework, skills, and official course pacing reference.',
      },
      {
        label: 'APUSH Past FRQs + Scoring',
        url: 'https://apcentral.collegeboard.org/courses/ap-united-states-history/exam/past-exam-questions',
        detail: 'DBQ/LEQ/SAQ released sets with scoring guidelines and samples.',
      },
      {
        label: 'AP Classroom',
        url: 'https://apclassroom.collegeboard.org/',
        detail: 'Secure period/topic checks and teacher-assigned progress work.',
      },
    ],
  },
  csp: {
    courseKey: 'csp',
    links: [
      {
        label: 'AP CSP Exam Overview (AP Students)',
        url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-principles/assessment',
        detail: 'Current end-of-course exam + Create task structure and timeline.',
      },
      {
        label: 'AP CSP CED + Course Page',
        url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles',
        detail: 'Big ideas, skill statements, and official course architecture.',
      },
      {
        label: 'AP CSP Past FRQs + Scoring',
        url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/exam/past-exam-questions',
        detail: 'Released written responses, scoring docs, and sample commentary.',
      },
      {
        label: 'Bluebook Test Previews',
        url: 'https://bluebook.collegeboard.org/',
        detail: 'Practice navigating the digital AP test environment.',
      },
    ],
  },
  lang: {
    courseKey: 'lang',
    links: [
      {
        label: 'AP Lang Exam Overview (AP Students)',
        url: 'https://apstudents.collegeboard.org/courses/ap-english-language-and-composition/assessment',
        detail: 'Current section timing, reading/writing MCQ split, and FRQ structure.',
      },
      {
        label: 'AP Lang CED + Course Page',
        url: 'https://apcentral.collegeboard.org/courses/ap-english-language-and-composition',
        detail: 'Official unit skills, rubrics, and rhetorical framework.',
      },
      {
        label: 'AP Lang Past FRQs + Scoring',
        url: 'https://apcentral.collegeboard.org/courses/ap-english-language-and-composition/exam/past-exam-questions',
        detail: 'Released synthesis/rhetorical analysis/argument prompts and scoring.',
      },
      {
        label: 'AP Classroom',
        url: 'https://apclassroom.collegeboard.org/',
        detail: 'Teacher-assigned topic questions and skill-by-skill progress sets.',
      },
    ],
  },
}

function getBaseQuestionsForCourse(courseKey: string): Question[] {
  return [...questions, ...handcraftedQuestionAdditions]
    .filter(q => q.id.startsWith(courseKey))
    .sort((a, b) => {
      if (a.unit !== b.unit) return a.unit - b.unit
      if (a.type !== b.type) return a.type === 'mcq' ? -1 : 1
      return a.id.localeCompare(b.id)
    })
}

function uniqueQuestions(pool: Question[]): Question[] {
  const seen = new Set<string>()
  const uniq: Question[] = []
  for (const q of pool) {
    if (seen.has(q.id)) continue
    seen.add(q.id)
    uniq.push(q)
  }
  return uniq
}

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function matchesTopic(question: Question, topic: string): boolean {
  const topicKey = normalizeText(topic)
  const direct = normalizeText(question.topic ?? '')
  if (direct && (direct === topicKey || direct.includes(topicKey) || topicKey.includes(direct))) {
    return true
  }
  const tags = question.topicTags ?? []
  return tags.some((tag) => {
    const key = normalizeText(tag)
    return key === topicKey || key.includes(topicKey) || topicKey.includes(key)
  })
}

function shuffle<T>(values: T[]): T[] {
  return [...values].sort(() => Math.random() - 0.5)
}

export function getQuestionDifficulty(question: Question): QuestionDifficulty {
  if (question.difficulty) return question.difficulty

  let score = 0
  if (question.source === 'Released') score += 2
  if ((question.stimulus?.length ?? 0) >= 180) score += 1
  if ((question.explanation?.length ?? 0) >= 160) score += 1
  if (question.type === 'frq' && (question.frqParts?.length ?? 0) >= 3) score += 1
  if (/(most likely|best explains|evaluate|extent|justify|tradeoff|except|NOT)/i.test(question.question)) score += 1
  if (/\d/.test(question.question)) score += 1

  if (score >= 4) return 'hard'
  if (score >= 2) return 'medium'
  return 'easy'
}

function difficultyRank(question: Question): number {
  const difficulty = getQuestionDifficulty(question)
  if (difficulty === 'hard') return 3
  if (difficulty === 'medium') return 2
  return 1
}

function selectMostChallenging(pool: Question[]): Question[] {
  return [...pool].sort((a, b) => {
    const diff = difficultyRank(b) - difficultyRank(a)
    if (diff !== 0) return diff
    if (a.source !== b.source) return a.source === 'Released' ? -1 : 1
    return a.id.localeCompare(b.id)
  })
}

export function getResourcesForCourse(courseShort: string): CourseResources {
  const key = normalizeCourseKey(courseShort)
  return courseResourcesMap[key] ?? {
    courseKey: key,
    links: [],
  }
}

export function getCourseTopicBlueprint(courseShort: string): DiagnosticBlueprintUnit[] {
  const courseKey = normalizeCourseKey(courseShort)
  const config = courseConfigMap[courseKey as keyof typeof courseConfigMap]
  if (!config) return []
  return config.units.map((unit) => ({
    unit: unit.number,
    title: unit.title,
    topics: [...unit.topics],
  }))
}

export function getDiagnosticExamSet(
  courseShort: string,
  targetQuestions = TARGET_QUESTIONS_PER_COURSE,
): DiagnosticSet {
  const courseKey = normalizeCourseKey(courseShort)
  const blueprint = getCourseTopicBlueprint(courseKey)
  const totalTopics = blueprint.reduce((sum, unit) => sum + unit.topics.length, 0)
  const pool = getQuestionsForCourse(courseKey)
  const mcqs = pool.filter((q) => q.type === 'mcq')

  const selected: Question[] = []
  const usedQuestionIds = new Set<string>()
  let exactTopicHits = 0
  let proxyTopicHits = 0

  for (const unit of blueprint) {
    for (const topic of unit.topics) {
      if (selected.length >= targetQuestions) break
      const exactCandidates = selectMostChallenging(
        mcqs.filter((q) => !usedQuestionIds.has(q.id) && q.unit === unit.unit && matchesTopic(q, topic)),
      )
      if (exactCandidates.length > 0) {
        const chosen = exactCandidates[0]
        selected.push({ ...chosen, diagnosticTopic: topic, diagnosticMatch: 'exact' })
        usedQuestionIds.add(chosen.id)
        exactTopicHits++
        continue
      }

      const relatedCandidates = selectMostChallenging(
        mcqs.filter((q) => !usedQuestionIds.has(q.id) && matchesTopic(q, topic)),
      )
      if (relatedCandidates.length > 0) {
        const chosen = relatedCandidates[0]
        selected.push({ ...chosen, diagnosticTopic: topic, diagnosticMatch: 'related' })
        usedQuestionIds.add(chosen.id)
        proxyTopicHits++
        continue
      }

      const unitProxyCandidates = selectMostChallenging(
        mcqs.filter((q) => !usedQuestionIds.has(q.id) && q.unit === unit.unit),
      )
      if (unitProxyCandidates.length > 0) {
        const chosen = unitProxyCandidates[0]
        selected.push({ ...chosen, diagnosticTopic: topic, diagnosticMatch: 'unit-proxy' })
        usedQuestionIds.add(chosen.id)
        proxyTopicHits++
      }
    }
    if (selected.length >= targetQuestions) break
  }

  if (selected.length < targetQuestions) {
    const remainder = selectMostChallenging(
      mcqs.filter((q) => !usedQuestionIds.has(q.id)),
    )
    for (const q of remainder) {
      if (selected.length >= targetQuestions) break
      selected.push({ ...q, diagnosticTopic: q.topic ?? `Unit ${q.unit}`, diagnosticMatch: 'related' })
      usedQuestionIds.add(q.id)
      proxyTopicHits++
    }
  }

  return {
    questions: selected,
    totalTopics,
    uniqueTopicsRepresented: new Set(selected.map((q) => q.diagnosticTopic || q.topic || `Unit ${q.unit}`)).size,
    exactTopicHits,
    proxyTopicHits,
  }
}

export function getCoverageReport(courseShort: string): CoverageReport {
  const courseKey = normalizeCourseKey(courseShort)
  const config = courseConfigMap[courseKey as keyof typeof courseConfigMap]
  const pool = getQuestionsForCourse(courseKey)

  if (!config) {
    return {
      courseKey,
      targetQuestions: TARGET_QUESTIONS_PER_COURSE,
      totalQuestions: pool.length,
      unitCount: 0,
      topicCount: 0,
      coveredTopics: 0,
      uncoveredTopics: 0,
      unitsInOrder: true,
      units: [],
    }
  }

  const units = config.units.map(unit => {
    const unitQs = pool.filter(q => q.unit === unit.number)
    const topics = unit.topics.map(topic => {
      const topicKey = normalizeText(topic)
      const hits = unitQs.filter(q => {
        const tags = q.topicTags ?? []
        const tagMatch = tags.some(tag => {
          const normTag = normalizeText(tag)
          return normTag === topicKey || normTag.includes(topicKey) || topicKey.includes(normTag)
        })
        if (tagMatch) return true
        const qTopic = normalizeText(q.topic ?? '')
        return qTopic === topicKey || qTopic.includes(topicKey) || topicKey.includes(qTopic)
      })
      return {
        topic,
        covered: hits.length > 0,
        questionCount: hits.length,
      }
    })

    return {
      unit: unit.number,
      title: unit.title,
      questionCount: unitQs.length,
      mcqCount: unitQs.filter(q => q.type === 'mcq').length,
      frqCount: unitQs.filter(q => q.type === 'frq').length,
      topics,
    }
  })

  const topicCount = units.reduce((sum, unit) => sum + unit.topics.length, 0)
  const coveredTopics = units.reduce((sum, unit) => sum + unit.topics.filter(t => t.covered).length, 0)
  const ordered = config.units.every((unit, i) => i === 0 || config.units[i - 1].number < unit.number)

  return {
    courseKey,
    targetQuestions: TARGET_QUESTIONS_PER_COURSE,
    totalQuestions: pool.length,
    unitCount: units.length,
    topicCount,
    coveredTopics,
    uncoveredTopics: topicCount - coveredTopics,
    unitsInOrder: ordered,
    units,
  }
}

export function getQuestionQualityReport(courseShort: string): QuestionQualityReport {
  const courseKey = normalizeCourseKey(courseShort)
  const pool = getQuestionsForCourse(courseKey)
  const config = courseConfigMap[courseKey as keyof typeof courseConfigMap]

  const idSeen = new Set<string>()
  let duplicateIdCount = 0
  let invalidMcqAnswerKeyCount = 0
  let mcqOptionCountIssues = 0
  let frqStructureIssues = 0
  let topicTagIssues = 0

  const validTopics = new Set<string>(
    (config?.units ?? []).flatMap(unit => unit.topics.map(topic => normalizeText(topic))),
  )
  const validUnits = new Set<number>((config?.units ?? []).map(unit => unit.number))

  for (const q of pool) {
    if (idSeen.has(q.id)) duplicateIdCount++
    idSeen.add(q.id)

    if (q.type === 'mcq') {
      if (!q.options || q.options.length !== 4) mcqOptionCountIssues++
      const letters = new Set((q.options ?? []).map(opt => opt.letter))
      if (!q.correctAnswer || !letters.has(q.correctAnswer)) invalidMcqAnswerKeyCount++
    }

    if (q.type === 'frq') {
      if (!q.frqParts || q.frqParts.length === 0) frqStructureIssues++
    }

    const tags = (q.topicTags ?? []).map(normalizeText)
    const topicNorm = normalizeText(q.topic ?? '')
    const hasValidTopic = topicNorm && validTopics.has(topicNorm)
    const hasValidTag = tags.some(tag => validTopics.has(tag))
    const hasValidUnit = validUnits.has(q.unit)
    if (validTopics.size > 0 && !hasValidTopic && !hasValidTag && !hasValidUnit) topicTagIssues++
  }

  return {
    courseKey,
    totalQuestions: pool.length,
    duplicateIdCount,
    invalidMcqAnswerKeyCount,
    mcqOptionCountIssues,
    frqStructureIssues,
    topicTagIssues,
  }
}

// Helper: get questions for a specific course
export function getQuestionsForCourse(courseShort: string): Question[] {
  const courseKey = normalizeCourseKey(courseShort)
  return uniqueQuestions(getBaseQuestionsForCourse(courseKey))
}

// Helper: get questions for a specific course unit
export function getQuestionsForUnit(courseShort: string, unitNumber: number): Question[] {
  return getQuestionsForCourse(courseShort).filter(q => q.unit === unitNumber)
}

// Helper: get a random full exam set (mix of MCQ + FRQ) for a course
export function getRandomExamSet(courseShort: string): Question[] {
  const pool = getQuestionsForCourse(courseShort)
  const mcqs = pool.filter(q => q.type === 'mcq')
  const frqs = pool.filter(q => q.type === 'frq')
  const shuffled = shuffle(selectMostChallenging(mcqs))
  const shuffledFrq = shuffle(selectMostChallenging(frqs))
  return [...shuffled.slice(0, Math.min(24, shuffled.length)), ...shuffledFrq.slice(0, Math.min(6, shuffledFrq.length))]
}

export function getFullExamRun(courseShort: string): Question[] {
  const pool = selectMostChallenging(getQuestionsForCourse(courseShort))
  return pool.slice(0, Math.min(TARGET_QUESTIONS_PER_COURSE, pool.length))
}
