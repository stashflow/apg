import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 3, title: 'bandwidth & latency', description: 'measuring network performance.' }} content={`## bandwidth & latency

### bandwidth
amount of data transferred per second
- measured: Mbps (megabits per second)
- more bandwidth = faster downloads
- Netflix HD: ~5 Mbps, 4K: ~25 Mbps

### latency
delay before data starts transferring
- ping time: round trip to server and back
- lower latency = responsive (gaming, video chat)
- higher latency = lag

### throughput
actual speed achieved (less than bandwidth due to overhead)

### network types
**dial-up**: ~56 Kbps, slow
**cable**: ~100 Mbps, good
**fiber**: ~1000 Mbps (1 Gbps), excellent
**wireless**: varies, 10-100 Mbps typical`}
/> )
}
