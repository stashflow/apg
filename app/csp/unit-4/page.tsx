import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'how the internet works', description: 'the internet as a network of networks — packets, TCP/IP, and how data travels from sender to receiver.', videoId: 'AEaKrq3SpW8' },
  { number: 2, title: 'bandwidth & latency', description: 'bandwidth (capacity), latency (delay), throughput, and their effects on network performance.' },
  { number: 3, title: 'ip addresses & packets', description: 'IPv4 vs. IPv6, how packets carry data, packet headers, and why packets may arrive out of order.', videoId: '5o8CwafCxnU' },
  { number: 4, title: 'packet switching', description: 'how packets are broken into chunks, routed independently, and reassembled at the destination.' },
  { number: 5, title: 'routing & DNS', description: 'how routers direct packets, fault tolerance through redundancy, and how DNS translates domain names to IP addresses.', videoId: 'Yw8bnEVLLJY' },
  { number: 6, title: 'fault tolerance & redundancy', description: 'multiple paths, backup systems, and how the internet recovers from failures.' },
  { number: 7, title: 'scalability of the internet', description: 'how networks expand, managing growth, and designing for scale.' },
  { number: 8, title: 'HTTP & protocols', description: 'HTTP vs. HTTPS, what protocols are, the OSI model conceptually, and how the web sits on top of the internet.', videoId: 'kBXQZMmiA4s' },
  { number: 9, title: 'parallel & distributed computing', description: 'dividing tasks across multiple processors/computers, load balancing, and concurrency.' },
  { number: 10, title: 'cybersecurity fundamentals', description: 'phishing, malware, DDoS, social engineering, and SQL injection — common attacks and defenses.', videoId: 'bPVaOlJ6ln0' },
  { number: 11, title: 'encryption & authentication', description: 'symmetric vs. asymmetric (public key) encryption, digital certificates, and how HTTPS keeps data safe.', videoId: 'jhXCTbFnK8o' },
]

export default function CSPUnit4Page() {
  return (
    <UnitPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 4, title: 'big idea 4: computer systems & networks', examWeight: '11–15%', description: 'the internet\'s architecture, protocols, routing, and cybersecurity — clear conceptual understanding required.' }}
      topics={topics}
      basePath="/csp/unit-4"
      courseHref="/csp"
      videoId="4O_LEV3aHcU"
      examDate={{ date: 'Thursday, May 15, 2025', time: '12:00 PM' }}
    />
  )
}
