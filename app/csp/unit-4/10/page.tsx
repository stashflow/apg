import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 10, title: 'reliability & redundancy', description: 'systems that keep working despite failures.' }} content={`## reliability & redundancy

### fault tolerance
system continues despite component failures
- airplane: triple-redundant systems
- data centers: automatic failover
- RAID drives: one fails, data still accessible

### backup & recovery
**incremental backup**: save only changes
**full backup**: save everything
- recovery time: how long to restore?
- recovery point: how much data lost?

### monitoring
detect problems early
- alerts when systems slow down
- dashboards show health

### exam tips
- redundancy prevents single point of failure
- backup essential for data recovery
- monitoring detects issues early`}
/> )
}
