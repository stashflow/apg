import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 3, title: 'intellectual property & piracy', description: 'copyright, patents, and digital rights.' }} content={`## intellectual property & piracy

### types of IP
**copyright**: literary, musical, software works (automatic)
**patents**: inventions (must apply, expensive)
**trademark**: logos, brand names

### licensing
terms for using software/content:
- **proprietary**: paid, restrictions
- **open source**: free, source code visible
- **GPL**: open source with conditions
- **Creative Commons**: flexible licensing

### piracy
using copyrighted material without permission
- music/movie torrenting
- software cracking
- counterfeiting

### consequences
- legal: lawsuits, fines
- security: pirated software often has malware
- ethical: creators don't get paid

### digital rights
**DRM** (Digital Rights Management): protects content
- Netflix: stream only, can't download
- e-books: locked to device

### exam tips
- copyright and licensing important for software
- piracy has legal and ethical consequences
- open source alternative to proprietary`}
/> )
}
