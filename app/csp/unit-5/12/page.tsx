import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 12, title: 'healthcare & personalized medicine', description: 'computing enabling better health outcomes.' }} content={`## healthcare & personalized medicine

### electronic health records
- digital medical histories accessible to providers
- faster consultations, fewer redundant tests
- privacy/security critical

### diagnosis & treatment
- AI helps doctors identify diseases (radiologists)
- gene sequencing: personalized treatments
- drug discovery: computational models faster than experiments

### wearable technology
- fitness trackers: steps, heart rate
- continuous monitoring: detect problems early
- data privacy concerns: who has access?

### telemedicine
- video consultations from home
- expanded access: rural areas, mobility issues
- during pandemic: essential service

### data integration
- analyze patterns across millions of patients
- precision medicine: treatment tailored to individual
- genetic data: hereditary risk prediction

### ethical issues
- privacy: medical data sensitive
- access: expensive treatments create inequality
- genetic discrimination: use genetic data to deny insurance
- informed consent: what data sharing is okay?

### exam tips
- computing improves diagnosis and treatment
- personalized medicine matches treatments to individuals
- privacy/equality must be protected`}
/> )
}
