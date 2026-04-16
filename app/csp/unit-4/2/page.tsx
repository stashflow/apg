import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 2, title: 'hardware components', description: 'CPU, memory, storage, and how they work.' }} content={`## hardware components

### CPU (processor)
executes instructions, does calculations
- speed: GHz (gigahertz)
- cores: more cores = more parallel processing

### memory
**RAM**: fast temporary storage, cleared when powered off
- program data lives here during execution
- more RAM = more programs/tabs open simultaneously

**ROM**: read-only, permanent storage of firmware
**Cache**: ultra-fast memory on CPU for frequently used data

### storage
**hard drive (HDD)**: magnetic storage, cheap, slower
**SSD**: flash storage, fast, more expensive
**external**: USB drives, cloud storage

### I/O devices
input: keyboard, mouse, microphone
output: monitor, speakers, printer

### performance factors
faster components cost more
- need to balance speed vs cost
- bottlenecks matter (slowest component limits system)`}
/> )
}
