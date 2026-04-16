import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 4, title: 'social media & digital citizenship', description: 'online behavior and responsibility.' }} content={`## social media & digital citizenship

### social media impacts
**positive**: connection, activism, community
**negative**: misinformation, harassment, addiction

### misinformation
false information spreads faster than truth
- deepfakes: AI-generated fake videos
- echo chambers: algorithm shows you confirmatory content
- bots: automated accounts spread propaganda

### digital citizenship
responsible online behavior:
- think before posting (permanent)
- respect others' privacy
- cite sources
- recognize bias (including own)
- report harassment

### mental health
excessive social media linked to:
- depression, anxiety
- sleep disruption
- comparison anxiety
- addiction

### exam tips
- social media amplifies both good and bad
- digital literacy essential for misinformation
- understand algorithmic bias in feeds`}
/> )
}
