import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 8, title: 'computing & social movements', description: 'how technology enables activism and organizing.' }} content={`## computing & social movements

### digital activism
- social media organizing: Arab Spring, #MeToo
- crowdfunding: raise money for causes
- online petitions: digital organizing
- live streaming: document police accountability

### benefits
- reach global audience instantly
- low barrier to entry (post from phone)
- coordination at scale
- record of events

### risks
- surveillance: governments monitor activists
- doxxing: revealing identity endangers safety
- misinformation: false narratives spread
- dependence: internet goes down, organizing stops

### government surveillance
authoritarian regimes:
- censor internet, block VPNs
- monitor social media for dissent
- arrest activists based on posts

### technology can help or harm
- VPN: protect privacy, encrypt communications
- cryptocurrency: send money without banks
- encryption: secure private messages

### exam tips
- technology enables activism but surveillance
- digital activism different from traditional
- trade-offs between reach and privacy`}
/> )
}
