export interface Exam {
  id: string
  name: string
  short: string
  date: string // ISO date YYYY-MM-DD
  time: string
  color: string
}

export interface Task {
  id: string
  subject: 'apush' | 'aplang' | 'apcsp' | 'apes'
  type: 'review' | 'mcq' | 'frq' | 'quizlet' | 'mistakes'
  description: string
  units?: number[]
  priority?: 'must' | 'high' | 'optional'
  link?: string
}

export interface StudyDay {
  date: string // ISO date YYYY-MM-DD
  focus: string[]
  estimatedTime: string
  tasks: Task[]
  isExamDay?: string // exam id
  note?: string
}

// Confirmed from official 2026 AP schedule
export const EXAMS: Exam[] = [
  { id: 'apush',  name: 'AP U.S. History',                   short: 'APUSH',   date: '2026-05-08', time: '8:00 AM',   color: '#ef4444' },
  { id: 'aplang', name: 'AP English Language & Composition', short: 'AP Lang', date: '2026-05-13', time: '8:00 AM',   color: '#f59e0b' },
  { id: 'apcsp',  name: 'AP Computer Science Principles',    short: 'AP CSP',  date: '2026-05-14', time: '12:00 PM',  color: '#3b82f6' },
  { id: 'apes',   name: 'AP Environmental Science',          short: 'APES',    date: '2026-05-15', time: '8:00 AM',   color: '#22c55e' },
]

export const SUBJECT_COLORS: Record<string, string> = {
  apush:  '#ef4444',
  aplang: '#f59e0b',
  apcsp:  '#3b82f6',
  apes:   '#22c55e',
}

export const SUBJECT_NAMES: Record<string, string> = {
  apush:  'APUSH',
  aplang: 'AP Lang',
  apcsp:  'AP CSP',
  apes:   'APES',
}

export const SUBJECT_PATHS: Record<string, string> = {
  apush:  '/apush',
  aplang: '/aplang',
  apcsp:  '/csp',
  apes:   '/apes',
}

export const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  review:   { label: 'Review',       color: '#60a5fa' },
  mcq:      { label: 'MCQ',          color: '#c084fc' },
  frq:      { label: 'FRQ / Essay',  color: '#fb923c' },
  quizlet:  { label: 'Quizlet',      color: '#4ade80' },
  mistakes: { label: 'Mistakes',     color: '#f87171' },
}

// Study strategy notes per subject
export const SUBJECT_STRATEGY: Record<string, string> = {
  apush:  'Prioritize FRQ types (DBQ, LEQ, SAQ) and periodization. MCQs reward knowing cause/effect chains, not just dates.',
  aplang: 'Every essay practice counts. Focus on thesis quality, evidence integration, and rhetorical analysis of argument.',
  apcsp:  'Conceptual, not coding-heavy. Know algorithms, lists, abstraction, internet protocols, and data/privacy concepts.',
  apes:   'Math + vocab combo. Know formulas (IPAT, energy, stoichiometry), law/policy names, and case studies.',
}

let _id = 0
const t = (
  subject: Task['subject'],
  type: Task['type'],
  description: string,
  units?: number[],
  priority?: Task['priority'],
): Task => ({ id: `t${++_id}`, subject, type, description, units, priority })

// ─── APRIL 22 ────────────────────────────────────────────────────────────────
// 16 days to APUSH. All four exams need attention. APUSH dominates.
// ─────────────────────────────────────────────────────────────────────────────
export const STUDY_DAYS: StudyDay[] = [
  {
    date: '2026-04-22',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '4–5 hrs',
    tasks: [
      t('apush',  'review',  'Review Units 3–4: Revolution through Market Economy — skim all topic summaries', [3,4], 'must'),
      t('apush',  'mcq',     'Complete 20 timed MCQs on Units 3–4 — focus on cause/effect', [3,4], 'must'),
      t('aplang', 'frq',     'Write 1 rhetorical analysis body paragraph (15 min, no notes)', undefined, 'high'),
      t('aplang', 'mcq',     'Complete 10 MCQs on rhetoric and argument passages', undefined, 'high'),
      t('apes',   'review',  'Review Unit 1: Living World Ecosystems — key vocabulary and cycles', [1]),
      t('apcsp',  'review',  'Review algorithms, lists, and procedures — know traversal and abstraction', [3]),
    ],
  },

  {
    date: '2026-04-23',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '4–5 hrs',
    tasks: [
      t('apush',  'review',  'Review Units 5–6: Antebellum through Reconstruction — causes, events, effects', [5,6], 'must'),
      t('apush',  'frq',     'Write 1 SAQ on Units 5–6 (25 min timed) — practice all 3 parts', [5,6], 'must'),
      t('aplang', 'mcq',     'Complete 10 MCQs on synthesis and argument passages'),
      t('aplang', 'frq',     'Write 1 synthesis body paragraph using 2 sources (15 min)'),
      t('apes',   'review',  'Review Unit 2: Biodiversity — ecosystem services, biomes, species interactions', [2]),
      t('apcsp',  'review',  'Review internet, protocols, HTTP/DNS, cybersecurity basics', [2]),
    ],
  },

  {
    date: '2026-04-24',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '4–5 hrs',
    tasks: [
      t('apush',  'review',  'Review Units 7–8: Gilded Age through WW2 — industrialization, imperialism, New Deal', [7,8], 'must'),
      t('apush',  'mcq',     'Complete 20 timed MCQs on Units 7–8', [7,8], 'must'),
      t('aplang', 'frq',     'Write 1 argument body paragraph with clear claim + evidence (15 min)'),
      t('aplang', 'mcq',     'Complete 10 MCQs'),
      t('apes',   'review',  'Review Unit 3: Populations — human population, growth models, demographics', [3]),
      t('apcsp',  'review',  'Review data: binary, compression, lossless vs lossy, metadata', [1]),
    ],
  },

  {
    date: '2026-04-25',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('apush',  'review',  'Review Unit 9: Post-WW2 through Present — Cold War, Civil Rights, Reagan, modern era', [9], 'must'),
      t('apush',  'frq',     'Write 1 full LEQ outline + thesis for Unit 9 topic (30 min)', [9], 'must'),
      t('aplang', 'frq',     'Timed rhetorical analysis essay — 40 min, no notes, review immediately after', undefined, 'must'),
      t('apes',   'review',  'Review Unit 4: Earth Systems — plate tectonics, soil, atmosphere, water cycle', [4]),
      t('apcsp',  'review',  'Review Create Task components: abstraction, algorithm, program purpose', [3]),
    ],
  },

  {
    date: '2026-04-26',
    focus: ['APUSH', 'AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '6–7 hrs',
    tasks: [
      t('apush',  'review',  'Full review Units 3–5 — use Quizlet to test yourself on key terms and events', [3,4,5], 'must'),
      t('apush',  'mcq',     'Complete 30 timed MCQs (40 min) — simulate test pacing', undefined, 'must'),
      t('apush',  'frq',     'Write 1 SAQ (25 min) on any Units 3–5 prompt', undefined, 'high'),
      t('aplang', 'mcq',     'Complete 20 MCQs on mixed passages', undefined, 'high'),
      t('aplang', 'frq',     'Timed synthesis essay — 40 min, pick a side, write full essay'),
      t('apes',   'review',  'Review Unit 5: Land and Water Use — agriculture, irrigation, forestry, fishing', [5]),
      t('apcsp',  'mcq',     'Complete full practice MCQ set (18 questions, 30 min)', undefined, 'optional'),
    ],
  },

  {
    date: '2026-04-27',
    focus: ['APUSH', 'AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('apush',  'review',  'Full review Units 6–9 — use Quizlet for periodization and timeline', [6,7,8,9], 'must'),
      t('apush',  'quizlet', 'Timeline drill: match events to periods, causes, and turning points', undefined, 'must'),
      t('aplang', 'frq',     'Timed argument essay — 40 min, strong thesis, develop 2–3 body paragraphs', undefined, 'must'),
      t('apes',   'review',  'Review Unit 6: Energy Resources — fossil fuels, renewables, EROI, energy policy', [6]),
      t('apcsp',  'review',  'Identify and review your weakest CSP topic — spend 45 min max', undefined, 'optional'),
    ],
  },

  {
    date: '2026-04-28',
    focus: ['APUSH', 'AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('apush',  'frq',     'Full DBQ practice: read docs, annotate, write complete essay (60 min)', undefined, 'must'),
      t('apush',  'mistakes','Grade your DBQ: check thesis, evidence, sourcing, complexity', undefined, 'must'),
      t('aplang', 'mcq',     'Complete 15 MCQs — focus on passage types you struggle with'),
      t('aplang', 'frq',     'Write 1 rhetorical analysis body paragraph on a timed excerpt (15 min)'),
      t('apes',   'review',  'Review Unit 7: Atmospheric Pollution — air quality, ozone, climate change, regulation', [7]),
      t('apcsp',  'review',  'Review internet security: encryption, PII, phishing, firewalls', [2]),
    ],
  },

  {
    date: '2026-04-29',
    focus: ['APUSH', 'AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('apush',  'frq',     'Full LEQ practice: write complete essay on a new prompt (40 min)', undefined, 'must'),
      t('apush',  'mistakes','Grade your LEQ: check periodization, argument, complexity point', undefined, 'must'),
      t('apush',  'review',  'Revisit Units 3–4 weak spots flagged from MCQs', [3,4], 'high'),
      t('aplang', 'frq',     'Timed synthesis essay — 40 min, new prompt, grade your thesis immediately after', undefined, 'high'),
      t('apes',   'review',  'Review Unit 8: Aquatic and Terrestrial Pollution — water pollution, toxicology, cleanup', [8]),
      t('apcsp',  'review',  'Algorithm tracing: practice step-through problems and list manipulation', [3]),
    ],
  },

  {
    date: '2026-04-30',
    focus: ['APUSH', 'AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('apush',  'frq',     'SAQ set: 3 questions timed (25 min each), full written responses', undefined, 'must'),
      t('apush',  'review',  'Revisit Units 5–6 weak spots — causes of Civil War, Reconstruction failures', [5,6], 'high'),
      t('aplang', 'mcq',     'Complete 20 MCQs on argument and rhetorical analysis passages'),
      t('aplang', 'frq',     'Write 1 argument body paragraph — practice embedding and analyzing evidence (15 min)'),
      t('apes',   'review',  'Review Unit 9: Global Change — climate change, biodiversity loss, sustainability', [9]),
      t('apcsp',  'review',  'Review binary math, hexadecimal, data storage units — must-know for exam', [1]),
    ],
  },

  {
    date: '2026-05-01',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '6–7 hrs',
    tasks: [
      t('apush',  'mcq',     '40 MCQs timed (55 min) — simulate real exam section pacing', undefined, 'must'),
      t('apush',  'mistakes','Review every wrong answer: identify the pattern or period you missed', undefined, 'must'),
      t('aplang', 'frq',     'Timed rhetorical analysis essay (40 min) — new source, fresh eyes'),
      t('apes',   'frq',     'Complete an APES FRQ set (3 FRQs, 70 min) — practice showing units/calculations', undefined, 'high'),
      t('apcsp',  'mcq',     'Full practice MCQ set (30 questions, 45 min)'),
    ],
  },

  {
    date: '2026-05-02',
    focus: ['APUSH', 'AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '6–7 hrs',
    tasks: [
      t('apush',  'frq',     'DBQ + SAQ back-to-back: DBQ (60 min) then 2 SAQs (25 min each)', undefined, 'must'),
      t('apush',  'mistakes','Review FRQs immediately after — check your historical reasoning and sourcing', undefined, 'must'),
      t('aplang', 'mcq',     'Complete 15 MCQs — track time, aim for under 1 min per question', undefined, 'high'),
      t('aplang', 'frq',     'Write 1 synthesis body paragraph with 3 source citations (15 min)'),
      t('apes',   'mcq',     'Complete APES MCQ set (20 questions, 25 min)'),
      t('apes',   'review',  'Revisit Unit 5 weak spots — irrigation, soil degradation, GMO policy', [5]),
      t('apcsp',  'review',  'Create Task review: scoring guidelines, what counts as abstraction', undefined, 'optional'),
    ],
  },

  {
    date: '2026-05-03',
    focus: ['APUSH', 'AP Lang', 'APES'],
    estimatedTime: '7–8 hrs',
    note: 'Full APUSH practice exam today. This is the most important day before exam week.',
    tasks: [
      t('apush',  'mcq',     'Full practice exam MCQ section: 55 questions in 55 min', undefined, 'must'),
      t('apush',  'frq',     'Full practice exam FRQ section: DBQ + LEQ + 3 SAQs (130 min)', undefined, 'must'),
      t('aplang', 'frq',     'Timed argument essay (40 min) — treat it as a break between APUSH sections'),
      t('apes',   'review',  'Review Units 7 and 9 — atmospheric pollution, global change, treaties', [7,9], 'optional'),
    ],
  },

  {
    date: '2026-05-04',
    focus: ['APUSH', 'AP Lang', 'APES'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('apush',  'mistakes','Thoroughly review every wrong MCQ from practice exam — categorize by unit', undefined, 'must'),
      t('apush',  'review',  'Deep-dive the 3 most missed content areas — re-read and Quizlet them', undefined, 'must'),
      t('apush',  'mistakes','Grade both FRQs with official rubric — identify missing complexity points', undefined, 'must'),
      t('aplang', 'mcq',     'Complete 20 MCQs', undefined, 'high'),
      t('apes',   'frq',     'Complete 1 APES FRQ set (3 questions, show all work and units)', undefined, 'optional'),
    ],
  },

  {
    date: '2026-05-05',
    focus: ['APUSH'],
    estimatedTime: '4–5 hrs',
    tasks: [
      t('apush',  'frq',     'Full DBQ: new prompt, complete essay with doc analysis and outside evidence (60 min)', undefined, 'must'),
      t('apush',  'frq',     'Full LEQ: complete essay on a new periodization prompt (40 min)', undefined, 'must'),
      t('apush',  'frq',     'SAQ set: 3 full responses (75 min) — cover all 3 SAQ types', undefined, 'must'),
      t('aplang', 'mcq',     'Light: 10 MCQs only — stay sharp without burning out', undefined, 'optional'),
    ],
  },

  {
    date: '2026-05-06',
    focus: ['APUSH'],
    estimatedTime: '4–5 hrs',
    tasks: [
      t('apush',  'mcq',     '50 MCQs timed (50 min) — final high-volume MCQ drill', undefined, 'must'),
      t('apush',  'mistakes','Review every wrong answer immediately — note patterns', undefined, 'must'),
      t('apush',  'quizlet','Timeline and key figures review — Quizlet matching/flashcard mode (30 min)', undefined, 'must'),
      t('apes',   'quizlet', 'Light APES vocab review — 15 min max', undefined, 'optional'),
    ],
  },

  {
    date: '2026-05-07',
    focus: ['APUSH'],
    estimatedTime: '2–3 hrs',
    note: 'Light day. No new material. Review only. Sleep before 11 PM.',
    tasks: [
      t('apush',  'review',  'Skim all 9 unit summaries — refresh key events, causes, and turning points', undefined, 'must'),
      t('apush',  'frq',     'Write 1 DBQ intro + thesis ONLY — practice hook, contextualization, and claim (20 min)', undefined, 'high'),
      t('apush',  'quizlet', 'Quick timeline Quizlet — 15 min max, just to reinforce memory', undefined, 'optional'),
    ],
  },

  // ─── EXAM DAY: APUSH ─────────────────────────────────────────────────────
  {
    date: '2026-05-08',
    focus: ['APUSH'],
    estimatedTime: '~30 min warm-up',
    isExamDay: 'apush',
    note: 'APUSH Exam at 8:00 AM. Arrive early. Eat breakfast. After the exam: rest completely.',
    tasks: [
      t('apush',  'review',  'Morning warm-up (20 min): skim key dates, DBQ thesis tips, SAQ structure', undefined, 'must'),
      t('aplang', 'mcq',     'Optional (afternoon only): 10 light AP Lang MCQs if you feel good', undefined, 'optional'),
    ],
  },

  // ─── POST-APUSH: AP Lang sprint + APES/CSP maintenance ──────────────────
  {
    date: '2026-05-09',
    focus: ['AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('aplang', 'frq',     'Timed rhetorical analysis essay — 40 min, new prompt, score yourself with rubric', undefined, 'must'),
      t('aplang', 'mcq',     'Complete 25 MCQs — aim for under 1 min per question', undefined, 'must'),
      t('aplang', 'mistakes','Review MCQ answers: why were you wrong? Identify patterns in passage types', undefined, 'high'),
      t('apes',   'review',  'Review Units 1–4: ecosystems, biodiversity, populations, Earth systems', [1,2,3,4]),
      t('apcsp',  'review',  'Quick 20-min CSP review — Create Task scoring + algorithmic thinking', undefined, 'optional'),
    ],
  },

  {
    date: '2026-05-10',
    focus: ['AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('aplang', 'frq',     'Timed synthesis essay — 40 min, practice picking clear position and using 3+ sources', undefined, 'must'),
      t('aplang', 'mcq',     'Complete 25 MCQs on argument and rhetoric passages', undefined, 'must'),
      t('apes',   'review',  'Review Units 5–6: land/water use, energy resources — know all the tradeoffs', [5,6]),
      t('apcsp',  'review',  'Review procedures, lists, parameters, return values — key concepts', [3]),
    ],
  },

  {
    date: '2026-05-11',
    focus: ['AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    tasks: [
      t('aplang', 'frq',     'Timed argument essay — 40 min, practice qualifying your argument in conclusion', undefined, 'must'),
      t('aplang', 'mcq',     'Complete 25 MCQs — mixed passage types to simulate real exam', undefined, 'must'),
      t('apes',   'review',  'Review Unit 7: Atmospheric Pollution — CAA, ozone depletion, climate mechanisms', [7]),
      t('apcsp',  'review',  'Review internet protocols, cybersecurity, and digital citizenship', [2]),
    ],
  },

  {
    date: '2026-05-12',
    focus: ['AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5–6 hrs',
    note: 'Last full study day before AP Lang exam. Lock in your essay approach.',
    tasks: [
      t('aplang', 'mcq',     'Full timed MCQ section: 45 questions in 60 min', undefined, 'must'),
      t('aplang', 'frq',     'Review all 3 essay types: RA, synthesis, argument — write outlines for each', undefined, 'must'),
      t('aplang', 'review',  'Review rhetorical terms, AP Lang vocabulary, common argument structures', undefined, 'high'),
      t('apes',   'review',  'Review Units 8–9: aquatic/terrestrial pollution, global change, key treaties', [8,9]),
      t('apcsp',  'mcq',     'Final CSP practice set — 30 questions', undefined, 'high'),
    ],
  },

  // ─── EXAM DAY: AP Lang ───────────────────────────────────────────────────
  {
    date: '2026-05-13',
    focus: ['AP Lang', 'AP CSP', 'APES'],
    estimatedTime: '~2 hrs post-exam',
    isExamDay: 'aplang',
    note: 'AP Lang Exam at 8:00 AM. After exam: prep for CSP tomorrow and APES Friday.',
    tasks: [
      t('aplang', 'review',  'Morning warm-up (15 min): skim rhetorical terms, thesis structure, synthesis transitions', undefined, 'must'),
      t('apcsp',  'review',  'After exam: 1 hour CSP review — algorithms, lists, internet, impact of computing', undefined, 'high'),
      t('apes',   'review',  'After exam: 1 hour APES focused review — Units 5, 7, 9 only', [5,7,9], 'high'),
    ],
  },

  // ─── EXAM DAY: AP CSP ────────────────────────────────────────────────────
  {
    date: '2026-05-14',
    focus: ['AP CSP', 'APES'],
    estimatedTime: '~3 hrs post-exam',
    isExamDay: 'apcsp',
    note: 'AP CSP Exam at 12:00 PM. Morning = final CSP prep. After exam = APES cram only.',
    tasks: [
      t('apcsp',  'review',  'Morning (90 min): skim all major CSP concepts — algorithms, data, internet, impact', undefined, 'must'),
      t('apcsp',  'quizlet', 'Morning: Quizlet flashcards for key definitions and vocabulary (30 min)', undefined, 'must'),
      t('apes',   'review',  'After exam: Review Units 5, 7, and 9 — highest-weighted topics', [5,7,9], 'must'),
      t('apes',   'quizlet', 'After exam: Formulas and vocab Quizlet — IPAT, energy equations, key laws', undefined, 'must'),
      t('apes',   'frq',     'After exam: Complete 1 FRQ set (3 questions, timed)', undefined, 'high'),
    ],
  },

  // ─── EXAM DAY: APES ──────────────────────────────────────────────────────
  {
    date: '2026-05-15',
    focus: ['APES'],
    estimatedTime: '~30 min warm-up',
    isExamDay: 'apes',
    note: 'APES Exam at 8:00 AM. Quick review only — you\'re ready. Celebrate after!',
    tasks: [
      t('apes', 'quizlet', 'Morning warm-up (20 min): formulas, key vocab, major laws (Clean Air Act, ESA, CERCLA)', undefined, 'must'),
      t('apes', 'review',  'Skim key case studies and math problems — IPAT, energy calculations (10 min)', undefined, 'must'),
    ],
  },
]

// ─── Utility functions ────────────────────────────────────────────────────────

export function getDaysUntil(dateStr: string): number {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const target = new Date(dateStr + 'T00:00:00')
  const tDay = new Date(target.getFullYear(), target.getMonth(), target.getDate())
  return Math.round((tDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

export function getTodayString(): string {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function getTaskLink(task: Task): string {
  const base = SUBJECT_PATHS[task.subject]
  if (task.units && task.units.length === 1) {
    return `${base}/unit-${task.units[0]}`
  }
  return base
}

export function getNextExam(): Exam | null {
  const today = getTodayString()
  return EXAMS.find(e => e.date >= today) ?? null
}
