import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 8, title: 'parallel & distributed computing', description: 'multiple processors working together.' }} content={`## parallel & distributed computing

### parallel
multiple processors on same machine
- multicore CPU: divide task across cores
- speedup: 4 cores ≈ 4x faster (ideal case)
- challenges: synchronization, shared memory

### distributed
multiple machines connected by network
- task split across computers
- fault tolerance: one fails, others continue
- examples: cloud computing, Google's MapReduce

### speedup limits
Amdahl's Law: speedup limited by sequential parts
- some code can't be parallelized
- diminishing returns as cores increase

### exam tips
- parallel = same machine, multiple cores
- distributed = multiple machines
- not all problems parallelize well`}
/> )
}
