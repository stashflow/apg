import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 7, title: 'cloud computing', description: 'software and data stored remotely.' }} content={`## cloud computing

### what is cloud?
computing resources (storage, processing) accessed over internet
- data lives on servers somewhere
- access from any device with internet

### advantages
- scalability: pay for what you use
- reliability: automatic backups
- accessibility: access from anywhere
- no maintenance: provider handles updates

### disadvantages
- dependency: loses internet = no access
- privacy: data on someone else's server
- latency: internet delay
- cost: ongoing subscription fees

### types
**IaaS** (Infrastructure): rent servers
**PaaS** (Platform): development environment in cloud
**SaaS** (Software): software as subscription (Gmail, Office365)

### examples
- AWS: web services platform
- Google Cloud, Azure: similar
- Dropbox, iCloud: storage

### exam tips
- understand cloud tradeoffs
- know types of cloud services
- consider security implications`}
/> )
}
