import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 9, title: 'IoT & embedded systems', description: 'computing beyond traditional computers.' }} content={`## IoT & embedded systems

### embedded systems
computers built into other devices
- microcontroller: small processor, limited memory
- examples: thermostat, car ECU, fitness tracker
- specialized for one purpose

### Internet of Things (IoT)
network of connected devices collecting/sharing data
- smart home: devices communicate with each other
- wearables: health data sent to cloud
- industrial: factory sensors monitor equipment

### challenges
- power: battery-powered devices
- security: millions of unsecured devices
- privacy: constant data collection
- reliability: need to work unattended

### applications
- health: continuous monitoring
- agriculture: soil moisture sensors
- cities: traffic sensors, parking
- manufacturing: predictive maintenance

### exam tips
- embedded systems specialized for one purpose
- IoT increases connectivity but raises security/privacy concerns`}
/> )
}
