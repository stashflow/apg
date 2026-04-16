import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 5, title: 'internet architecture', description: 'how the internet is organized.' }} content={`## internet architecture

### packet switching
data broken into packets with address info
- packets can take different routes
- reassemble at destination
- redundancy: if one route fails, use another

### ISPs & backbone
**ISP**: internet service provider, connects you to internet
**backbone**: high-speed fiber networks connecting major hubs
- redundancy means internet survives failures

### DNS (Domain Name System)
translates apg.ezo.lol → IP address
- without DNS, you'd need to remember IP addresses
- distributed system for reliability

### client-server model
**server**: provides service/resource
**client**: requests service
- one server serves many clients
- servers often in data centers, always on

### peer-to-peer (P2P)
each device both client and server
- file sharing, BitTorrent
- no central server to fail
- more resilient but complex

### exam tips
- understand internet is decentralized and robust
- packet switching enables redundancy
- DNS abstracts away IP addresses`}
/> )
}
