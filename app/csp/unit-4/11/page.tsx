import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 11, title: 'future of computing', description: 'emerging technologies and trends.' }} content={`## future of computing

### quantum computing
exploit quantum properties for computation
- solves certain problems exponentially faster
- break encryption, simulate molecules
- still experimental, niche use cases

### 5G networks
next generation mobile networks
- faster speeds, lower latency
- enable IoT, autonomous vehicles
- rollout ongoing globally

### edge computing
processing at network edge, not cloud
- faster response (no round trip to server)
- privacy (data stays local)
- bandwidth reduction

### sustainability
computing's environmental impact
- data centers use enormous electricity
- carbon footprint of devices
- need for efficient hardware/algorithms

### exam tips
- quantum computing changes what's possible
- 5G enables new IoT applications
- sustainability becomes critical concern`}
/> )
}
