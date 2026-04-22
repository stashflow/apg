export interface Exam {
  id: string
  name: string
  short: string
  date: string // ISO date
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
  date: string // ISO date
  focus: string[]
  estimatedTime: string
  tasks: Task[]
  isExamDay?: string // exam id if exam day
  note?: string
}

export const EXAMS: Exam[] = [
  { id: 'apush', name: 'AP U.S. History', short: 'APUSH', date: '2026-05-08', time: '8:00 AM', color: '#ef4444' },
  { id: 'aplang', name: 'AP English Language', short: 'AP Lang', date: '2026-05-13', time: '8:00 AM', color: '#f59e0b' },
  { id: 'apcsp', name: 'AP Computer Science Principles', short: 'AP CSP', date: '2026-05-14', time: '12:00 PM', color: '#3b82f6' },
  { id: 'apes', name: 'AP Environmental Science', short: 'APES', date: '2026-05-15', time: '12:00 PM', color: '#22c55e' },
]

export const SUBJECT_COLORS: Record<string, string> = {
  apush: '#ef4444',
  aplang: '#f59e0b',
  apcsp: '#3b82f6',
  apes: '#22c55e',
}

export const SUBJECT_NAMES: Record<string, string> = {
  apush: 'APUSH',
  aplang: 'AP Lang',
  apcsp: 'AP CSP',
  apes: 'APES',
}

export const SUBJECT_PATHS: Record<string, string> = {
  apush: '/apush',
  aplang: '/aplang',
  apcsp: '/csp',
  apes: '/apes',
}

export const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  review: { label: 'Review', color: '#60a5fa' },
  mcq: { label: 'MCQ', color: '#c084fc' },
  frq: { label: 'FRQ/Essay', color: '#fb923c' },
  quizlet: { label: 'Quizlet', color: '#4ade80' },
  mistakes: { label: 'Mistakes', color: '#f87171' },
}

let taskId = 0
const t = (subject: Task['subject'], type: Task['type'], description: string, units?: number[], priority?: Task['priority']): Task => ({
  id: `task-${++taskId}`,
  subject,
  type,
  description,
  units,
  priority,
})

export const STUDY_DAYS: StudyDay[] = [
  {
    date: '2026-04-22',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '4-5 hours',
    tasks: [
      t('apush', 'review', 'Review Units 3-4 content', [3, 4], 'must'),
      t('apush', 'mcq', 'Complete 20 MCQs on Units 3-4', [3, 4], 'must'),
      t('apes', 'review', 'Review Unit 1: The Living World', [1]),
      t('aplang', 'mcq', 'Complete 10 MCQs', undefined, 'high'),
      t('aplang', 'frq', 'Write 1 rhetorical analysis body paragraph'),
      t('apcsp', 'review', 'Review algorithms, lists, and procedures', [3]),
    ],
  },
  {
    date: '2026-04-23',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '4-5 hours',
    tasks: [
      t('apush', 'review', 'Review Units 5-6 content', [5, 6], 'must'),
      t('apush', 'frq', 'Complete 1 SAQ on Units 5-6', [5, 6], 'must'),
      t('apes', 'review', 'Review Unit 2: Biodiversity', [2]),
      t('aplang', 'mcq', 'Complete 10 MCQs'),
      t('aplang', 'frq', 'Write 1 synthesis body paragraph'),
      t('apcsp', 'review', 'Review internet, protocols, cybersecurity', [2]),
    ],
  },
  {
    date: '2026-04-24',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '4-5 hours',
    tasks: [
      t('apush', 'review', 'Review Units 7-8 content', [7, 8], 'must'),
      t('apush', 'mcq', 'Complete 20 MCQs on Units 7-8', [7, 8], 'must'),
      t('apes', 'review', 'Review Unit 3: Populations', [3]),
      t('aplang', 'frq', 'Write 1 argument body paragraph'),
      t('aplang', 'mcq', 'Complete 10 MCQs'),
      t('apcsp', 'review', 'Review data, compression, binary', [1]),
    ],
  },
  {
    date: '2026-04-25',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('apush', 'review', 'Review Unit 9 content', [9], 'must'),
      t('apush', 'frq', 'Complete 1 LEQ outline', [9], 'must'),
      t('apes', 'review', 'Review Unit 4: Earth Systems', [4]),
      t('aplang', 'frq', 'Timed rhetorical analysis essay (40 min)', undefined, 'high'),
      t('apcsp', 'review', 'Review Create Task + procedures/lists', [3]),
    ],
  },
  {
    date: '2026-04-26',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '6-7 hours',
    tasks: [
      t('apush', 'review', 'Full review Units 3-5', [3, 4, 5], 'must'),
      t('apush', 'mcq', 'Complete 30 MCQs', undefined, 'must'),
      t('apush', 'frq', 'Complete 1 SAQ', undefined, 'high'),
      t('apes', 'review', 'Review Unit 5: Land and Water Use', [5]),
      t('aplang', 'mcq', 'Complete 20 MCQs', undefined, 'high'),
      t('aplang', 'frq', 'Timed synthesis essay (40 min)'),
      t('apcsp', 'mcq', 'Full practice set (18 MCQs)'),
    ],
  },
  {
    date: '2026-04-27',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('apush', 'review', 'Full review Units 6-9 + timeline', [6, 7, 8, 9], 'must'),
      t('apush', 'quizlet', 'Timeline practice with Quizlet'),
      t('apes', 'review', 'Review Unit 6: Energy Resources', [6]),
      t('aplang', 'frq', 'Timed argument essay (40 min)', undefined, 'high'),
      t('apcsp', 'review', 'Review weakest topic'),
    ],
  },
  {
    date: '2026-04-28',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('apush', 'frq', 'Full DBQ practice (60 min)', undefined, 'must'),
      t('apes', 'review', 'Review Unit 7: Atmospheric Pollution', [7]),
      t('aplang', 'mcq', 'Complete 15 MCQs'),
      t('aplang', 'frq', 'Write 1 rhetorical analysis paragraph'),
      t('apcsp', 'review', 'Review internet/cybersecurity', [2]),
    ],
  },
  {
    date: '2026-04-29',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('apush', 'frq', 'LEQ practice (40 min)', undefined, 'must'),
      t('apush', 'review', 'Review Units 3-4 weak spots', [3, 4], 'high'),
      t('apes', 'review', 'Review Unit 8: Aquatic Pollution', [8]),
      t('aplang', 'frq', 'Timed synthesis essay (40 min)', undefined, 'high'),
      t('apcsp', 'review', 'Review algorithms + tracing code', [3]),
    ],
  },
  {
    date: '2026-04-30',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('apush', 'frq', 'SAQ set (3 questions)', undefined, 'must'),
      t('apush', 'review', 'Review Units 5-6 weak spots', [5, 6], 'high'),
      t('apes', 'review', 'Review Unit 9: Global Change', [9]),
      t('aplang', 'mcq', 'Complete 20 MCQs'),
      t('aplang', 'frq', 'Write 1 argument paragraph'),
      t('apcsp', 'review', 'Review binary + data', [1]),
    ],
  },
  {
    date: '2026-05-01',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '6-7 hours',
    tasks: [
      t('apush', 'mcq', 'Timed 40 MCQs (55 min)', undefined, 'must'),
      t('apush', 'mistakes', 'Review all incorrect answers', undefined, 'must'),
      t('apes', 'frq', 'Complete 1 FRQ set (3 questions)', undefined, 'high'),
      t('aplang', 'frq', 'Timed rhetorical analysis essay (40 min)'),
      t('apcsp', 'mcq', 'Full practice set'),
    ],
  },
  {
    date: '2026-05-02',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '6-7 hours',
    tasks: [
      t('apush', 'frq', 'DBQ + SAQ practice', undefined, 'must'),
      t('apes', 'mcq', 'Complete MCQ set (20 questions)'),
      t('apes', 'review', 'Review Unit 5 weak spots', [5]),
      t('aplang', 'mcq', 'Complete 15 MCQs'),
      t('aplang', 'frq', 'Write 1 synthesis paragraph'),
      t('apcsp', 'review', 'Create Task final review'),
    ],
  },
  {
    date: '2026-05-03',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '7-8 hours',
    tasks: [
      t('apush', 'mcq', 'Full practice exam - MCQ section (55 min)', undefined, 'must'),
      t('apush', 'frq', 'Full practice exam - FRQ section', undefined, 'must'),
      t('apes', 'review', 'Review Units 7 + 9', [7, 9]),
      t('aplang', 'frq', 'Timed argument essay (40 min)'),
      t('apcsp', 'review', 'Review weak areas only', undefined, 'optional'),
    ],
  },
  {
    date: '2026-05-04',
    focus: ['APUSH', 'APES', 'AP Lang', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('apush', 'mistakes', 'Review EVERY mistake from practice exam', undefined, 'must'),
      t('apush', 'review', 'Review concepts you missed', undefined, 'must'),
      t('apes', 'frq', 'Complete 1 FRQ set'),
      t('aplang', 'mcq', 'Complete 20 MCQs'),
      t('apcsp', 'review', 'Quick review - 30 min max', undefined, 'optional'),
    ],
  },
  {
    date: '2026-05-05',
    focus: ['APUSH'],
    estimatedTime: '4-5 hours',
    tasks: [
      t('apush', 'frq', 'DBQ practice (full essay)', undefined, 'must'),
      t('apush', 'frq', 'LEQ practice (full essay)', undefined, 'must'),
      t('apush', 'frq', 'SAQ set (3 questions)', undefined, 'must'),
      t('aplang', 'mcq', 'Light MCQ only (10 questions)', undefined, 'optional'),
    ],
  },
  {
    date: '2026-05-06',
    focus: ['APUSH'],
    estimatedTime: '4-5 hours',
    tasks: [
      t('apush', 'mcq', 'Timed 50 MCQs + review', undefined, 'must'),
      t('apush', 'quizlet', 'Timeline review with Quizlet', undefined, 'must'),
      t('apes', 'quizlet', 'Light vocab review', undefined, 'optional'),
    ],
  },
  {
    date: '2026-05-07',
    focus: ['APUSH'],
    estimatedTime: '3-4 hours',
    note: 'Light day before exam. Sleep early!',
    tasks: [
      t('apush', 'review', 'Final full content review - skim all units', undefined, 'must'),
      t('apush', 'frq', 'Practice 1 DBQ intro + thesis only', undefined, 'high'),
      t('apush', 'quizlet', 'Quick timeline review', undefined, 'optional'),
    ],
  },
  {
    date: '2026-05-08',
    focus: ['APUSH'],
    estimatedTime: '1 hour',
    isExamDay: 'apush',
    note: 'APUSH Exam at 8:00 AM. Rest after!',
    tasks: [
      t('apush', 'review', 'Quick warm-up: skim key dates/themes (15 min)', undefined, 'must'),
      t('aplang', 'mcq', 'Optional: Light AP Lang MCQs later', undefined, 'optional'),
    ],
  },
  {
    date: '2026-05-09',
    focus: ['AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('aplang', 'frq', 'Timed rhetorical analysis essay (40 min)', undefined, 'must'),
      t('aplang', 'mcq', 'Complete 25 MCQs', undefined, 'must'),
      t('apes', 'review', 'Review Units 1-4', [1, 2, 3, 4]),
      t('apcsp', 'review', 'Quick 20-minute review', undefined, 'optional'),
    ],
  },
  {
    date: '2026-05-10',
    focus: ['AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('aplang', 'frq', 'Timed synthesis essay (40 min)', undefined, 'must'),
      t('aplang', 'mcq', 'Complete 25 MCQs', undefined, 'must'),
      t('apes', 'review', 'Review Units 5-6', [5, 6]),
      t('apcsp', 'review', 'Review procedures/lists', [3]),
    ],
  },
  {
    date: '2026-05-11',
    focus: ['AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5-6 hours',
    tasks: [
      t('aplang', 'frq', 'Timed argument essay (40 min)', undefined, 'must'),
      t('aplang', 'mcq', 'Complete 25 MCQs', undefined, 'must'),
      t('apes', 'review', 'Review Unit 7', [7]),
      t('apcsp', 'review', 'Review internet + cybersecurity', [2]),
    ],
  },
  {
    date: '2026-05-12',
    focus: ['AP Lang', 'APES', 'AP CSP'],
    estimatedTime: '5-6 hours',
    note: 'Last full day before AP Lang exam',
    tasks: [
      t('aplang', 'mcq', 'Full practice section (45 MCQs)', undefined, 'must'),
      t('aplang', 'frq', 'Review all 3 essay types', undefined, 'must'),
      t('apes', 'review', 'Review Units 8-9', [8, 9]),
      t('apcsp', 'mcq', 'Full practice set', undefined, 'high'),
    ],
  },
  {
    date: '2026-05-13',
    focus: ['AP Lang', 'AP CSP', 'APES'],
    estimatedTime: '3-4 hours',
    isExamDay: 'aplang',
    note: 'AP Lang Exam at 8:00 AM. Then prep for tomorrow!',
    tasks: [
      t('aplang', 'review', 'Quick warm-up: rhetorical terms (15 min)', undefined, 'must'),
      t('apcsp', 'review', 'After exam: 1 hour AP CSP review', undefined, 'high'),
      t('apes', 'review', 'After exam: 1 hour APES Units 5,7,9', [5, 7, 9], 'high'),
    ],
  },
  {
    date: '2026-05-14',
    focus: ['AP CSP', 'APES'],
    estimatedTime: '4-5 hours',
    isExamDay: 'apcsp',
    note: 'AP CSP Exam at 12:00 PM. Final APES cram after!',
    tasks: [
      t('apcsp', 'review', 'Morning warm-up: key concepts (30 min)', undefined, 'must'),
      t('apes', 'review', 'After exam: Review Units 5, 7, 9', [5, 7, 9], 'must'),
      t('apes', 'quizlet', 'After exam: Formulas and vocab review', undefined, 'must'),
      t('apes', 'frq', 'After exam: Complete 1 FRQ set', undefined, 'high'),
    ],
  },
  {
    date: '2026-05-15',
    focus: ['APES'],
    estimatedTime: '1 hour',
    isExamDay: 'apes',
    note: 'APES Exam at 12:00 PM. You did it!',
    tasks: [
      t('apes', 'quizlet', 'Quick formula and vocab review (20 min)', undefined, 'must'),
      t('apes', 'review', 'Skim key concepts one last time', undefined, 'must'),
    ],
  },
]

export function getDaysUntil(dateStr: string): number {
  const today = new Date('2026-04-22')
  today.setHours(0, 0, 0, 0)
  const target = new Date(dateStr)
  target.setHours(0, 0, 0, 0)
  return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

export function getTaskLink(task: Task): string {
  const base = SUBJECT_PATHS[task.subject]
  if (task.units && task.units.length === 1) {
    return `${base}/unit-${task.units[0]}`
  }
  return base
}
