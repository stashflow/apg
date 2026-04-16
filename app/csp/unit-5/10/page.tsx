import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 10, title: 'global connectivity & culture', description: 'how technology connects and changes cultures.' }} content={`## global connectivity & culture

### positive impacts
- cross-cultural learning: access to diverse perspectives
- diaspora communities: stay connected across continents
- language learning: resources available globally
- cultural preservation: minority cultures share online

### cultural homogenization
- English dominates internet
- Western tech culture spreads
- local languages threatened
- indigenous knowledge at risk

### social networks & society
- stronger weak ties: reconnect with old friends
- weaker strong ties: less face-to-face time
- parasocial relationships: feel connected to celebrities
- FOMO: fear of missing out

### digital colonialism
- Big Tech companies centered in US/China
- algorithms designed for Western users
- data extraction from developing nations
- unequal benefits of technology

### preservation efforts
- digital archiving of minority cultures
- support for local tech ecosystems
- funding for non-Western tech startups
- open access to knowledge

### exam tips
- technology spreads culture but also homogenizes
- digital divide affects cultural representation
- cultural preservation requires intentional effort`}
/> )
}
