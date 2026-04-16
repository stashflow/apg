import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 14, title: 'education & online learning', description: 'how technology transforms education.' }} content={`## education & online learning

### online education
- MOOCs: millions can take same course
- pandemic: schools went remote
- asynchronous: learn on your schedule

### benefits
- access: students in remote areas
- self-paced: review difficult concepts
- cost: free or cheap online courses
- flexibility: work + school

### challenges
- motivation: harder without in-person accountability
- digital divide: not everyone has reliable internet
- equity: synchronous classes during work hours
- interaction: less peer/teacher interaction

### personalized learning
- AI recommends next topics based on progress
- adaptive difficulty: easier if struggling
- identifies weak areas for focus

### hybrid models
- in-person + online combined
- best of both worlds: interaction + flexibility
- increasingly common post-pandemic

### exam tips
- online learning scales but loses interaction
- digital divide affects access
- technology enables but doesn't guarantee equity`}
/> )
}
