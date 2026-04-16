import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 16, title: 'the future of computing & society', description: 'where does computing lead us?' }} content={`## the future of computing & society

### technological trends
- AI: increasingly capable, increasingly controversial
- quantum: will revolutionize certain fields
- biocomputing: merge biology and computation
- augmented reality: digital overlay on reality

### societal challenges
- climate change: both cause and solution
- inequality: technology amplifies existing disparities
- misinformation: deepfakes, coordinated disinformation
- privacy erosion: constant surveillance

### opportunities
- solving hard problems: medicine, energy, poverty
- human potential: tools to amplify human capability
- connection: bring people together (if done well)
- sustainability: efficient computing for sustainable world

### your role
- digital citizenship: act responsibly online
- critical thinking: question technology's impact
- advocacy: push for fair and ethical tech
- creativity: build things that help

### big questions
- should AI have rights?
- is privacy dead or essential?
- can we have tech without surveillance?
- who decides technology's rules?

### exam tips
- computing's future depends on choices we make
- technology isn't inevitable; humans choose direction
- your generation will shape computing's impact`}
/> )
}
