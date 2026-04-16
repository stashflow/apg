import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 10, title: 'computational thinking', description: 'general problem-solving techniques for computing.' }} content={`## computational thinking

### four pillars
**decomposition**: break problem into smaller parts
**pattern recognition**: find similarities, reuse solutions
**abstraction**: focus on essential details, ignore irrelevant
**algorithm design**: step-by-step solution

### example
problem: sort 1000 names
- decompose: split into groups, sort each, merge
- pattern: similar steps for each group
- abstract: ignore name details, focus on order
- algorithm: merge sort

### applying to non-programming
recipe: ingredients (data), steps (algorithm)
GPS routing: decompose into segments, find patterns in shortcuts

### exam tips
- computational thinking applies everywhere
- break big problems into manageable pieces`}
/> )
}
