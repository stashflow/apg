import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 4, title: 'big idea 4: computing systems & networks' }}
      topic={{ number: 1, title: 'hardware & networks', description: 'how computers and systems communicate and process data.' }}
      content={`## hardware & networks

understanding hardware and networks helps you understand how programs run on actual machines and how data travels across the internet.

### hardware components
- **CPU** (processor): executes instructions
- **RAM** (memory): temporary storage during program execution
- **storage**: permanent storage (hard drive, SSD)
- **input/output devices**: keyboard, monitor, printer
- **motherboard**: connects all components

### machine code vs. high-level languages
- **machine code**: 0s and 1s that CPU directly executes
- **assembly**: human-readable machine code
- **high-level languages**: Python, Java, etc. (human-readable)
- **compiler/interpreter**: translates high-level code to machine code

### networking basics
- **IP address**: unique identifier for a device on a network (like a mailing address)
- **router**: directs traffic between networks
- **bandwidth**: how much data can transfer per unit time
- **latency**: how long data takes to travel

### internet protocols
- **TCP/IP**: breaks data into packets, routes them, reassembles them
- **DNS**: translates domain names (google.com) to IP addresses
- **HTTP/HTTPS**: protocol for web communication

### scalability & reliability
- **distributed systems**: multiple computers working together
- **redundancy**: backup systems in case of failure
- **load balancing**: distributing work across multiple servers

### exam tips
- understand difference between RAM (fast, temporary) and storage (slow, permanent)
- know that all programs ultimately run as machine code
- understand that the internet works by breaking data into packets and routing them
- bandwidth affects how quickly data transfers; latency affects responsiveness`}
    />
  )
}
