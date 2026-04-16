import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 11, title: 'crowdsourcing & citizen science', description: 'collective intelligence and mass participation.' }} content={`## crowdsourcing & citizen science

### crowdsourcing
distribute task to many people:
- Wikipedia: anyone can edit
- reCAPTCHA: users label images while proving humanity
- Uber: crowdsource transportation
- data entry: mechanical turk microtasks

### citizen science
non-professionals contribute to research:
- Galaxy Zoo: classify galaxies
- Bird counts: track population
- COVID tracking: citizens report cases
- pollution monitoring: cheap sensors measure air quality

### benefits
- scale: solve problems requiring many data points
- cost: free labor (sometimes exploitative)
- engagement: people care about science
- local knowledge: citizens know their areas

### risks
- data quality: non-experts might introduce errors
- exploitation: unpaid work
- inequality: barriers to participation
- privacy: personal data collected

### exam tips
- crowdsourcing leverages collective intelligence
- citizen science democratizes research
- be aware of data quality and fairness issues`}
/> )
}
