import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 2, title: 'digital divide', description: 'access inequality and technology equity.' }} content={`## digital divide

### dimensions
- **geography**: rural lacks broadband, urban has fiber
- **income**: expensive equipment, subscription costs
- **age**: elderly slower to adopt technology
- **ability**: disabilities create barriers without accessibility

### consequences
- education: students without internet fall behind
- employment: jobs increasingly require digital skills
- healthcare: telemedicine requires internet access
- democracy: digital citizenship matters

### closing the gap
- government programs: provide broadband to rural areas
- subsidies: discount devices/internet for low-income
- digital literacy: teach technology skills
- universal design: make tech accessible to all

### exam tips
- digital divide perpetuates existing inequality
- access to technology = access to opportunity
- addressing requires policy, not just technology`}
/> )
}
