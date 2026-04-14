import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 1, title: 'big idea 1: creative development' }}
      topic={{ number: 1, title: 'program design process', description: 'planning, designing, and iterating on programs systematically.' }}
      content={`## program design process

the AP CSP exam tests your understanding that programming is not just about writing code—it\'s about thinking through problems systematically.

### the design process stages
1. **define the problem**: what does the program need to do?
2. **plan the solution**: break it into smaller, manageable pieces
3. **design the interface**: how will users interact with it?
4. **implement**: write the actual code
5. **test & debug**: does it work? does it handle edge cases?
6. **iterate**: refine based on testing and feedback

### key vocabulary
- **algorithm**: step-by-step procedure to solve a problem
- **pseudocode**: human-readable code-like instructions (not actual code)
- **flowchart**: visual representation of program flow using shapes and arrows
- **decomposition**: breaking a large problem into smaller subproblems

### abstraction in design
abstraction means hiding complexity behind simple interfaces. example: you don\'t need to understand how the internet works to use a web browser—the browser abstracts away the complexity.

### exam tips
- frq questions often ask you to write pseudocode or describe an algorithm
- be able to trace through an algorithm to predict output
- understand why decomposition and abstraction make programs more maintainable
- know the difference between sequence, selection, and iteration in algorithms`}
    />
  )
}
