import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 4, title: 'protocols & standards', description: 'agreed-upon rules for communication.' }} content={`## protocols & standards

### what are protocols?
rules for how devices communicate
- TCP/IP: foundation of internet
- HTTP: web pages
- HTTPS: secure web pages
- SMTP: send email
- POP/IMAP: receive email

### layered architecture
**physical layer**: cables, signals
**data link**: routing between devices
**network**: routing across internet
**transport**: TCP/UDP
**application**: HTTP, email, etc.

### standards matter
- devices from different makers can communicate
- enables global internet to function
- W3C, IETF set standards

### security protocols
**TLS**: encrypts data in transit
- HTTPS = HTTP + TLS
- locks keep data private

### exam tips
- understand protocols enable interoperability
- security protocols protect data`}
/> )
}
