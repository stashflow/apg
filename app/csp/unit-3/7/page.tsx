import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 7, title: 'libraries & APIs', description: 'using pre-built code to solve problems faster.' }} content={`## libraries & APIs

### libraries
collections of pre-written code for common tasks
- math library: sqrt, sin, cos
- graphics library: draw circles, rectangles
- avoids reinventing the wheel

### APIs (Application Programming Interfaces)
specifications for how programs interact
- tells you what functions exist and what they do
- hides implementation details

### web APIs
interact with services:
- weather API: get current temperature
- map API: display locations
- payment API: process transactions

### using libraries
import needed functions, call them with parameters
- library handles complexity
- you use simplified interface

### exam tips
- understand libraries save time
- APIs let programs work together
- be able to use API documentation`}
/> )
}
