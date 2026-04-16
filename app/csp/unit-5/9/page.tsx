import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 9, title: 'employment & automation', description: 'technology displacing and creating jobs.' }} content={`## employment & automation

### job displacement
- manufacturing: robots replace assembly line workers
- transportation: self-driving vehicles threaten truck drivers
- retail: automation reduces cashiers
- customer service: chatbots replace support agents

### job creation
- new roles emerging: AI trainers, drone operators, cybersecurity
- history: tractors displaced farm workers but created new jobs
- transition period painful even if new jobs appear

### skill mismatches
- displaced workers often don't have training for new jobs
- education system slow to adapt
- retraining programs help but imperfect

### wealth concentration
- automation benefits shareholders (profits up)
- displaced workers lose income
- income inequality grows
- some propose UBI (universal basic income)

### future of work
- lifelong learning becomes necessary
- skills matter more than credentials
- gig economy: flexible but unstable
- work-life balance questions

### exam tips
- automation creates inequality if not managed
- new jobs emerge but not automatically
- retraining and education crucial`}
/> )
}
