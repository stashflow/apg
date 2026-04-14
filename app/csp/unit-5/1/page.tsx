import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 5, title: 'big idea 5: impact of computing' }}
      topic={{ number: 1, title: 'digital citizenship, security & ethics', description: 'responsible computing, privacy, and societal implications of technology.' }}
      content={`## digital citizenship, security & ethics

the AP CSP exam tests not just technical knowledge but understanding the broader societal impact of computing.

### digital security
- **authentication**: verifying who you claim to be (passwords, biometrics)
- **encryption**: scrambling data so only intended recipient can read it
- **malware**: software designed to harm (viruses, ransomware, spyware)
- **phishing**: tricking users into revealing sensitive info
- **strong passwords**: long, random, unique combinations
- **multi-factor authentication**: requiring multiple proofs of identity

### privacy concerns
- **data collection**: companies collect data about users
- **tracking**: following user behavior across websites
- **metadata**: data about data (who, when, where) can reveal sensitive info even if content is private
- **privacy vs. security trade-off**: more security might require sharing data; less privacy might compromise safety

### digital divide
- not everyone has equal access to technology
- impacts education, employment, healthcare disparities
- internet access, device affordability, digital literacy are barriers

### intellectual property
- **copyright**: protection for creative works (books, code, music)
- **fair use**: limited use of copyrighted material without permission
- **open source**: software freely available for modification and distribution
- **licensing**: terms under which software can be used

### impact of automation
- **job displacement**: automation replaces certain jobs
- **efficiency gains**: automation improves productivity
- **algorithmic bias**: biased training data leads to biased decisions
- **surveillance**: increased monitoring through cameras, data collection

### exam tips
- cssp values ethical thinking about technology
- know the difference between privacy, security, and anonymity
- understand both benefits and harms of automation and AI
- digital citizenship includes respecting others\' data and being aware of biases`}
    />
  )
}
