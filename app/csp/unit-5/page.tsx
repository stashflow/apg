import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'digital divide', description: 'unequal access to technology by income, geography, age, and disability — causes, effects, and policy responses.', videoId: 'HELYLdFxCNY' },
  { number: 2, title: 'bias in algorithms', description: 'how biased training data produces biased outputs, facial recognition failures, hiring algorithm scandals, and remedies.', videoId: 'gV0_raKR2UQ' },
  { number: 3, title: 'privacy & surveillance', description: 'how data is collected, sold, and monitored — cookies, location tracking, government surveillance, and GDPR.', videoId: 'hBXdEtqCnbM' },
  { number: 4, title: 'ethical concerns', description: 'intellectual property, copyright, Creative Commons, open-source licensing, and the ethics of computing innovation.', videoId: 'rlOL57h3mKs' },
  { number: 5, title: 'crowdsourcing & innovation', description: 'Wikipedia, citizen science, open-source projects, and how distributed collaboration drives computing forward.', videoId: 'YUKj7GM_wMo' },
  { number: 6, title: 'create performance task guide', description: 'program requirements, personalized project reference, written response practice, common mistakes, and the full scoring rubric.', videoId: 'SQEFlhdqWkk' },
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
