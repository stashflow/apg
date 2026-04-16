import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 7, title: 'computer science education access', description: 'diversity in tech and broadening participation.' }} content={`## computer science education access

### underrepresentation
women, minorities, LGBTQ+ underrepresented in CS
- only 21% of CS degrees to women
- 8% Black, 17% Hispanic in CS

### barriers
- stereotypes: "CS not for me"
- lack of role models
- biased curriculum/examples
- poverty: expensive computers

### broadening participation
- CS education for all students
- inclusive curriculum: examples from diverse cultures
- diverse role models: highlight women/minority pioneers
- low-cost alternatives: Raspberry Pi, free online courses
- community programs: teens learn at libraries

### benefits
- diverse teams innovate better
- tech industry talent shortage
- democracy: everyone should understand computing

### exam tips
- tech industry needs diversity
- barriers are systemic, not capability
- education key to inclusion`}
/> )
}
