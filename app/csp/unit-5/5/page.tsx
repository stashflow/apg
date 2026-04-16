import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 5, title: 'environmental impact of computing', description: 'sustainability and tech carbon footprint.' }} content={`## environmental impact of computing

### energy consumption
data centers use ~1% of global electricity
- growing rapidly as computing scales
- server cooling uses additional power
- battery manufacturing: toxic materials

### e-waste
discarded electronics contain toxic materials:
- lead, mercury, cadmium
- proper recycling essential
- most e-waste exported to developing nations

### carbon footprint
manufacturing computer: 200+ kg CO₂
using computer 5 years: comparable to manufacturing

### sustainability efforts
- renewable energy for data centers
- efficient algorithms (waste less computation)
- longer device lifespan
- better recycling programs

### exam tips
- computing has real environmental cost
- data centers energy-intensive
- sustainability increasingly important
- green computing emerging field`}
/> )
}
