import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 13, title: 'climate & environmental modeling', description: 'computing for understanding climate change.' }} content={`## climate & environmental modeling

### climate models
simulate Earth's atmosphere and oceans
- predict temperature, precipitation, extreme weather
- billions of calculations per model run
- uncertainty but consensus: warming is real

### data collection
- satellites: monitor atmospheric CO₂, sea ice
- weather stations: temperature, pressure
- ocean buoys: track currents

### limitations
- models have uncertainty: multiple possible futures
- long timescales: predictions 50-100 years out
- incomplete data: some regions poorly monitored

### impacts of computing
- enable faster predictions
- public access: NASA data free online
- decision-making: policy based on models

### feedback loops
- melting ice: less white surface, less reflection, faster warming
- permafrost: thawing releases methane (greenhouse gas)
- computing models show these tipping points

### solutions modeled
- carbon pricing: economic models show feasibility
- renewable energy: simulate grid with high renewables
- adaptation: model coastal flooding, crop stress

### exam tips
- models essential for understanding complex systems
- uncertainty doesn't mean ignorance
- computing enables climate science`}
/> )
}
