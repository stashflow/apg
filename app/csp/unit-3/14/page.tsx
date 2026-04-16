import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 14, title: 'impacts of computing', description: 'how algorithms shape society.' }} content={`## impacts of computing

### beneficial impacts
- medical: algorithms diagnose diseases earlier, save lives
- education: personalized learning paths
- accessibility: technology helps people with disabilities
- efficiency: automate repetitive tasks

### harmful impacts
- job displacement: automation reduces employment
- misinformation: AI-generated fake news
- surveillance: algorithms track everything you do
- environmental: data centers use massive electricity

### digital divide
access inequality:
- wealthy have internet, poor don't
- algorithms amplify existing inequality
- countries without infrastructure lag behind

### policy & regulation
governments trying to catch up:
- GDPR: protect privacy
- AI regulation: ensure fairness
- net neutrality: internet access equity

### exam tips
- computing has profound societal effects
- benefits and harms coexist
- responsibility in design choices`}
/> )
}
