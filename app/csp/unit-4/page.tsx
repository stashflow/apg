import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'how the internet works', description: 'the internet as a network of networks — packets, TCP/IP, and how data travels from sender to receiver.', videoId: 'AEaKrq3SpW8' },
  { number: 2, title: 'ip addresses & packets', description: 'IPv4 vs. IPv6, how packets carry data, packet headers, and why packets may arrive out of order.', videoId: '5o8CwafCxnU' },
  { number: 3, title: 'routing & dns', description: 'how routers direct packets, fault tolerance through redundancy, and how DNS translates domain names to IP addresses.', videoId: 'Yw8bnEVLLJY' },
  { number: 4, title: 'http & protocols', description: 'HTTP vs. HTTPS, what protocols are, the OSI model conceptually, and how the web sits on top of the internet.', videoId: 'kBXQZMmiA4s' },
  { number: 5, title: 'cybersecurity fundamentals', description: 'phishing, malware, DDoS, SQL injection — common attacks and the security practices that counter them.', videoId: 'bPVaOlJ6ln0' },
  { number: 6, title: 'encryption & authentication', description: 'symmetric vs. asymmetric (public key) encryption, digital certificates, and how HTTPS keeps data safe.', videoId: 'jhXCTbFnK8o' },
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
