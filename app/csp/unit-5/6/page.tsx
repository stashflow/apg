import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 6, title: 'accessibility & universal design', description: 'making technology inclusive for everyone.' }} content={`## accessibility & universal design

### disabilities requiring accommodation
- visual: blindness, color blindness, low vision
- hearing: deafness, hearing loss
- motor: paralysis, tremors, arthritis
- cognitive: dyslexia, ADHD, autism

### web accessibility (WCAG)
- alt text for images (screen readers)
- keyboard navigation (not mouse-only)
- sufficient color contrast
- captions for videos
- readable fonts

### universal design
design for diversity from start, not add-on
- benefits everyone: captions help people learning language
- curb cuts for wheelchairs help parents with strollers
- dark mode for accessibility also helps battery life

### assistive technology
- screen readers: read web content aloud
- magnifiers: enlarge text
- speech recognition: control computer by voice
- adaptive controllers: gaming for paralyzed players

### exam tips
- accessibility is legal requirement (ADA)
- benefits everyone, not just disabled
- universal design is better than retrofit`}
/> )
}
