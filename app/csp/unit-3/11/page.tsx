import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 11, title: 'user interface design', description: 'creating usable, accessible programs.' }} content={`## user interface design

### usability
program should be intuitive and easy to use
- buttons clearly labeled
- error messages helpful, not cryptic
- logical flow (where to click next?)

### accessibility
everyone can use the program
- text descriptions for images (screen readers)
- keyboard navigation (not mouse-only)
- color contrast (visible for color-blind)
- scalable fonts

### feedback
respond to user actions
- button click → visible change
- form submission → confirmation message
- error → explanation of what went wrong

### user testing
observe real users:
- where do they struggle?
- what's confusing?
- iterate to improve

### exam tips
- good UI is invisible (users don't think about it)
- accessibility is not optional
- testing with real users reveals problems`}
/> )
}
