import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 3, title: 'big idea 3: algorithms & programming' }}
      topic={{ number: 1, title: 'variables, data types & assignment', description: 'storing and manipulating data in programs.' }}
      content={`## variables, data types & assignment

a **variable** is a named container that stores a value. variables allow programs to work with data.

### basic data types
- **integer**: whole numbers (-5, 0, 42)
- **float/real**: decimal numbers (3.14, -0.5)
- **string**: text ("hello", "abc123")
- **boolean**: true or false (often result of comparisons)
- **list/array**: collection of values ([1,2,3], ["a","b","c"])

### assignment
**variable ← value** means "store value in the location named variable"
- x ← 5 (now x holds the value 5)
- x ← x + 1 (read current value of x, add 1, store result back in x; x is now 6)
- name ← "Alice" (string assignment)

### variable naming conventions
- clear, descriptive names: age, totalScore, userInput
- avoid single letters except for loop counters
- use consistent naming: camelCase, snake_case, etc.

### scope
a variable is only accessible within its scope (the region of code where it\'s defined):
- global variables: accessible anywhere
- local variables: only accessible within their function or block

### type checking
some languages require you to declare data type: int x = 5
others infer it: x = 5

### exam tips
- be able to trace variable values through a program
- understand that assignment overwrites previous values
- know the difference between a variable\'s name and its value
- understand scope and how it affects variable access`}
    />
  )
}
