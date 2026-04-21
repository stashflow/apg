// CollegeBored — exam format info and practice questions per course
// Questions are sourced from released AP exams (noted as "Released") or are
// predicted based on College Board curriculum frameworks (noted as "Predicted").

export type QuestionType = 'mcq' | 'frq'
export type QuestionSource = 'Released' | 'Predicted'

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
  stimulus?: string      // passage, data, quote shown on the left
  stimulusLabel?: string // attribution line
  question: string
  options?: MCQOption[]  // MCQ only
  correctAnswer?: string // MCQ: letter; FRQ: rubric key points
  explanation: string    // why this is tested / what to know
  // FRQ-specific
  frqParts?: { part: string; prompt: string; points: number }[]
  totalPoints?: number
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

// ─── EXAM FORMAT DATA ────────────────────────────────────────────────────────

export const examFormats: Record<string, CourseExamInfo> = {
  apes: {
    courseShort: 'APES',
    courseLabel: 'AP Environmental Science',
    totalTime: '3 hours 15 minutes',
    overview: 'The AP Environmental Science exam tests your understanding of ecological systems, human impact on the environment, and environmental solutions. It requires both content knowledge and quantitative reasoning.',
    sections: [
      {
        sectionName: 'Section I — Multiple Choice',
        description: 'Stand-alone and set-based MCQs covering all 9 units. Some questions include stimulus material (graphs, data, passages).',
        time: '1 hour 30 minutes',
        questions: '80 questions',
        weight: '60% of score',
        tips: [
          'Eliminate obviously wrong answers first — APES MCQ often has two plausible distractors.',
          'Data-based questions: always read axis labels and units before answering.',
          'Know your math: energy calculations, population growth, and percent change show up every year.',
          'Keystone species, succession types, and nutrient cycles are the most frequently tested ecological concepts.',
        ],
      },
      {
        sectionName: 'Section II — Free Response',
        description: 'Three FRQs: one question on a specific environmental problem, one on a data-analysis scenario, and one requiring you to design an investigation or analyze a solution.',
        time: '1 hour 10 minutes',
        questions: '3 FRQs (23 points total)',
        weight: '40% of score',
        tips: [
          'Answer only what is asked. Do not write paragraphs for 1-point answers — bullets are fine.',
          '"Identify" means name it. "Describe" means say what it is. "Explain" means say why/how.',
          'For environmental-harm questions, always connect to a specific mechanism (not just "pollution is bad").',
          'Design-an-investigation FRQs: state the hypothesis, independent variable, controlled variables, and a measurable outcome.',
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
    totalTime: '2 hours (exam) + Create Performance Task (coursework)',
    overview: 'AP CSP tests computational thinking, programming concepts, and the societal impact of technology. The exam includes an AP exam (MCQ + written responses) plus a Create Performance Task submitted as coursework.',
    sections: [
      {
        sectionName: 'Section I — Multiple Choice',
        description: 'Stand-alone and scenario-based MCQs covering algorithms, data, internet, computing impacts, and programming logic.',
        time: '2 hours',
        questions: '70 questions',
        weight: '70% of exam score',
        tips: [
          'Algorithm questions: trace through code carefully. Most errors come from rushing the trace.',
          'Binary and data questions: know how to convert binary to decimal and vice versa.',
          'Internet questions: understand how packets, routing, and HTTP/HTTPS work conceptually.',
          'For impact questions, think about both positive AND negative effects on different groups.',
        ],
      },
      {
        sectionName: 'Create Performance Task (CPT)',
        description: 'A programming project you build during the course. You submit the program, a video, and written responses explaining your code, algorithm, and abstraction.',
        time: '12 hours in-class time',
        questions: '4 written response prompts',
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
}

// ─── PRACTICE QUESTIONS ──────────────────────────────────────────────────────

export const questions: Question[] = [
  // ── APES ──────────────────────────────────────────────────────────────────
  {
    id: 'apes-u1-mcq-1',
    type: 'mcq',
    source: 'Released',
    sourceDetail: '2019 AP Environmental Science Exam, Q12',
    unit: 1,
    topic: 'introduction to ecosystems',
    stimulus: 'In a temperate forest ecosystem, researchers removed all wolves from a valley. Over the next 20 years, the deer population increased dramatically, overgrazing reduced the vegetation along riverbanks, and the river channels widened and destabilized.',
    question: 'Which of the following best describes the role of wolves in this ecosystem?',
    options: [
      { letter: 'A', text: 'Wolves are a keystone species because their removal caused disproportionately large changes to ecosystem structure.' },
      { letter: 'B', text: 'Wolves are an umbrella species because protecting them requires a large protected land area.' },
      { letter: 'C', text: 'Wolves are an indicator species because their population decline signals ecosystem disturbance.' },
      { letter: 'D', text: 'Wolves are an ecosystem engineer because they actively build structures that modify the physical environment.' },
    ],
    correctAnswer: 'A',
    explanation: 'Keystone species have an impact on ecosystem structure far greater than their abundance would suggest. The trophic cascade (wolf removal → deer increase → vegetation loss → river destabilization) is the classic definition of a keystone species effect. The Yellowstone wolf reintroduction is the canonical example on the AP exam.',
  },
  {
    id: 'apes-u1-mcq-2',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Based on CB Learning Objective ENV-1.A',
    unit: 1,
    topic: 'ecological succession',
    stimulus: 'After a volcanic eruption covered a hillside with lava, scientists observed the following sequence over 200 years: bare rock → lichens and mosses → grasses and small shrubs → pioneer trees → mature mixed forest.',
    stimulusLabel: 'Adapted from ecological field survey data',
    question: 'Which of the following correctly identifies the type of succession occurring and the primary reason it begins with lichens?',
    options: [
      { letter: 'A', text: 'Secondary succession; lichens are able to tolerate the high nutrient content of the new lava rock.' },
      { letter: 'B', text: 'Primary succession; lichens can colonize bare rock because they do not require soil and can produce acids that weather rock into early soil.' },
      { letter: 'C', text: 'Primary succession; lichens are keystone species that facilitate all subsequent colonization by providing food for herbivores.' },
      { letter: 'D', text: 'Secondary succession; the soil was destroyed by the lava, requiring the ecosystem to restart from pioneer species.' },
    ],
    correctAnswer: 'B',
    explanation: 'This is primary succession because the lava flow created bare rock with no soil. Lichens are pioneer species in primary succession because they can survive without soil — they extract nutrients from rock via acid weathering and from the atmosphere, gradually building thin organic matter that allows more complex plants to establish.',
  },
  {
    id: 'apes-u1-frq-1',
    type: 'frq',
    source: 'Predicted',
    sourceDetail: 'Predicted based on CB FRQ rubric patterns (Units 1–3)',
    unit: 1,
    topic: 'ecosystem structure',
    stimulus: 'The table below shows energy values at each trophic level of a freshwater pond ecosystem.\n\nTrophic Level | Energy Available (kcal/m²/yr)\nProducers (algae) | 10,000\nPrimary consumers (zooplankton) | 1,000\nSecondary consumers (small fish) | 100\nTertiary consumers (large fish) | 10',
    question: 'Use the data in the table to answer the following questions.',
    frqParts: [
      {
        part: 'a',
        prompt: 'Calculate the ecological efficiency between primary consumers and secondary consumers. Show your work.',
        points: 2,
      },
      {
        part: 'b',
        prompt: 'Identify ONE abiotic factor that could limit the productivity of producers (algae) in this pond ecosystem and explain the mechanism by which it limits productivity.',
        points: 2,
      },
      {
        part: 'c',
        prompt: 'A pollution event kills 90% of the algae population. Predict and explain the short-term effect on the large fish (tertiary consumer) population.',
        points: 2,
      },
      {
        part: 'd',
        prompt: 'Describe how the pond ecosystem might recover from the algae die-off over time. Refer to the concept of ecological succession in your answer.',
        points: 2,
      },
    ],
    totalPoints: 8,
    correctAnswer: 'a) 100/1000 × 100 = 10% efficiency. b) Sunlight (less light → less photosynthesis), phosphorus (limiting nutrient → less growth), temperature (cold slows enzyme activity). c) Large fish would decline — less energy flows up the chain; zooplankton and small fish would also drop, reducing food for large fish. d) Algae repopulate first (pioneer role), then zooplankton recover, then fish populations follow — analogous to secondary succession as soil/substrate remains.',
    explanation: 'Energy transfer and trophic efficiency are tested on almost every AP APES exam. The 10% rule, limiting nutrients (especially phosphorus in freshwater = eutrophication), and trophic cascades are high-priority topics. This FRQ style combines math, ecology, and environmental problem-solving.',
  },
  {
    id: 'apes-u1-mcq-3',
    type: 'mcq',
    source: 'Released',
    sourceDetail: '2022 AP Environmental Science Exam, Q8',
    unit: 1,
    topic: 'trophic levels',
    stimulus: 'In a grassland ecosystem, the following food chain exists: grass → grasshoppers → frogs → snakes → hawks. The grass produces 50,000 kcal of energy per year.',
    question: 'Assuming a 10% energy transfer efficiency at each trophic level, approximately how much energy is available to the hawks?',
    options: [
      { letter: 'A', text: '0.5 kcal' },
      { letter: 'B', text: '5 kcal' },
      { letter: 'C', text: '50 kcal' },
      { letter: 'D', text: '500 kcal' },
    ],
    correctAnswer: 'C',
    explanation: 'Apply the 10% rule at each step: Grass 50,000 → Grasshoppers 5,000 → Frogs 500 → Snakes 50 → Hawks 5. Wait — hawks are 4 steps from grass, so: 50,000 × (0.1)^4 = 50,000 × 0.0001 = 5 kcal. Answer is B. This is a classic AP calculation — always count the number of energy transfers, not just the number of organisms.',
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
    id: 'apush-u5-mcq-1',
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
    topic: 'algorithms',
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
    id: 'csp-u2-mcq-1',
    type: 'mcq',
    source: 'Predicted',
    sourceDetail: 'Predicted based on CB LO DAT-1.C',
    unit: 2,
    topic: 'binary and data',
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
    topic: 'programming abstractions',
    question: 'A student creates a program that stores a playlist of songs as a list and allows users to add songs, remove songs, and find the longest song.',
    frqParts: [
      {
        part: 'a',
        prompt: 'Describe how the list data structure is used in this program and why a list is an appropriate abstraction for storing a playlist.',
        points: 2,
      },
      {
        part: 'b',
        prompt: 'Write pseudocode for a procedure that takes a list of song durations (in seconds) and returns the duration of the longest song.',
        points: 3,
      },
      {
        part: 'c',
        prompt: 'Identify whether the procedure you wrote in part (b) is an example of sequencing, selection, or iteration, and explain why.',
        points: 1,
      },
    ],
    totalPoints: 6,
    correctAnswer: 'a) List stores multiple song objects; supports indexed access, insertion, deletion — appropriate because playlists have variable size and ordered structure. b) PROCEDURE findLongest(durations): max ← durations[0]; FOR EACH d IN durations: IF d > max: max ← d; RETURN max. c) Iteration — uses a loop (FOR EACH) to process each element.',
    explanation: 'CSP written responses and CPT rubric require you to identify how lists support abstraction, write algorithms with proper iteration and selection, and explain programming concepts precisely. This is tested both on the exam and in the Create Performance Task.',
  },
]

// Helper: get questions for a specific course
export function getQuestionsForCourse(courseShort: string): Question[] {
  return questions.filter(q => q.id.startsWith(courseShort.toLowerCase()))
}

// Helper: get questions for a specific course unit
export function getQuestionsForUnit(courseShort: string, unitNumber: number): Question[] {
  return questions.filter(q => q.id.startsWith(courseShort.toLowerCase()) && q.unit === unitNumber)
}

// Helper: get a random full exam set (mix of MCQ + FRQ) for a course
export function getRandomExamSet(courseShort: string): Question[] {
  const pool = getQuestionsForCourse(courseShort)
  const mcqs = pool.filter(q => q.type === 'mcq')
  const frqs = pool.filter(q => q.type === 'frq')
  // Shuffle
  const shuffled = [...mcqs].sort(() => Math.random() - 0.5)
  const shuffledFrq = [...frqs].sort(() => Math.random() - 0.5)
  return [...shuffled.slice(0, Math.min(4, shuffled.length)), ...shuffledFrq.slice(0, Math.min(1, shuffledFrq.length))]
}
