import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 4, title: 'big idea 4: computing systems & networks' }} topic={{ number: 6, title: 'cybersecurity', description: 'protecting against attacks.' }} content={`## cybersecurity

### threats
**malware**: viruses, worms, ransomware
**phishing**: fake emails trick you into revealing info
**DDoS**: overwhelm server with requests
**SQL injection**: insert malicious code into queries

### passwords
**strong**: long, mixed characters, unique per site
**weak**: short, dictionary words, reused everywhere
- use password manager
- never share passwords

### encryption
scrambles data so only intended recipient can read
- **symmetric**: same key for encrypt/decrypt
- **asymmetric**: public key encrypt, private key decrypt (RSA)

### authentication
verify you are who you claim to be
- passwords, biometrics, two-factor

### updates & patches
software updates fix security holes
- delay = vulnerability remains
- automatic updates recommended

### exam tips
- passwords matter
- encryption protects data
- authentication verifies identity`}
/> )
}
