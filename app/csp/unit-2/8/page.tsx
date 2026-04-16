import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 8, title: 'data and ethics', description: 'privacy, bias, and responsible data use.' }}
      content={`## data and ethics

data can empower or harm. collecting and using data responsibly is crucial.

### privacy
**personally identifiable information (PII)**: data that identifies individuals
- name, SSN, email, phone, location, browsing history
- companies collect massive amounts; leaks expose millions

**privacy concerns**:
- who has access? (should you need permission?)
- data breaches expose information to criminals
- companies sell data to advertisers
- governments use data for surveillance

**protections**:
- encryption: scramble data so only intended recipient can read
- anonymization: remove PII before sharing (name → "Patient #4791")
- consent: ask before collecting personal data

### bias in data
**algorithmic bias**: datasets or algorithms discriminate unfairly
- training data mostly white faces → facial recognition fails on dark skin
- historical hiring data shows racial bias → AI learns and perpetuates it

### exam tips
- understand privacy rights and protections
- recognize algorithmic bias as a problem`}
    />
  )
}
