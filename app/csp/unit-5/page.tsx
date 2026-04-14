import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'digital divide', description: 'unequal access to technology by income, geography, age, and disability — causes, effects, and policy responses.' },
  { number: 2, title: 'bias in algorithms', description: 'how biased training data produces biased outputs, facial recognition failures, hiring algorithm scandals, and remedies.' },
  { number: 3, title: 'privacy & surveillance', description: 'how data is collected, sold, and monitored — cookies, location tracking, government surveillance, and GDPR.' },
  { number: 4, title: 'intellectual property & copyright', description: 'copyright law, plagiarism, intellectual property protection, and fair use.' },
  { number: 5, title: 'open source & licensing', description: 'Creative Commons, open-source licenses, and the ethics of sharing code.' },
  { number: 6, title: 'safe computing practices', description: 'password security, phishing awareness, two-factor authentication, and personal cybersecurity.' },
  { number: 7, title: 'beneficial & harmful effects', description: 'positive and negative impacts of computing innovations on individuals and society.' },
  { number: 8, title: 'unintended consequences', description: 'how technology changes have unexpected side effects and social disruptions.' },
  { number: 9, title: 'ethical concerns', description: 'ethical frameworks for computing decisions and responsible innovation.' },
  { number: 10, title: 'crowdsourcing & innovation', description: 'Wikipedia, citizen science, open-source projects, and how distributed collaboration drives computing forward.' },
  { number: 11, title: 'create task: abstraction', description: 'how to use abstraction in your program — dividing code into manageable pieces.' },
  { number: 12, title: 'create task: list usage', description: 'using lists effectively in your program — storing and manipulating collections of data.' },
  { number: 13, title: 'create task: student-developed procedure', description: 'writing your own function/procedure with parameters and return value.' },
  { number: 14, title: 'create task: control structures', description: 'sequencing, selection, and iteration in your algorithm — the core logic.' },
  { number: 15, title: 'create task: video & written response', description: 'video requirements (60–90 seconds), code explanation, and written response rubric.' },
  { number: 16, title: 'create performance task guide', description: 'program requirements, personalized project reference, common mistakes, and full scoring rubric.' },
]

export default function CSPUnit5Page() {
  return (
    <UnitPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 5, title: 'big idea 5: impact of computing', examWeight: '21–26%', description: 'computing\'s effects on society, ethics, and individuals — plus the complete Create performance task guide.' }}
      topics={topics}
      basePath="/csp/unit-5"
      courseHref="/csp"
      videoId="Z_lf3wDBgn4"
      examDate={{ date: 'Thursday, May 15, 2025', time: '12:00 PM' }}
    />
  )
}
