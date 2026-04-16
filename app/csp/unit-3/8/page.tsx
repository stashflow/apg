import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 8, title: 'testing & debugging', description: 'finding and fixing errors in code.' }} content={`## testing & debugging

### types of errors
**syntax**: breaks rules of language ("if x = 5" instead of "if x == 5")
**logic**: code runs but produces wrong result (loop count off by one)
**runtime**: program crashes during execution (divide by zero)

### testing
try different inputs to verify behavior:
- **unit testing**: test individual functions
- **integration testing**: test functions working together
- **edge cases**: boundary conditions (empty list, zero, negative)

### debugging
finding where code fails:
- read error message (often tells exact line)
- trace execution manually
- add print statements to see variable values
- use debugger tools to step through code

### common bugs
- off-by-one errors in loops
- uninitialized variables
- incorrect operator (= vs ==)
- forgetting return statement

### exam tips
- understand different error types
- trace through code to find bugs
- test edge cases`}
/> )
}
