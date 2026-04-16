import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 1, title: 'big idea 1: creative development' }}
      topic={{ number: 2, title: 'variables & data types', description: 'storing and managing different types of information in programs.' }}
      content={`## variables & data types

variables are containers that store information. the type of data determines what operations you can perform.

### basic data types
- **integer**: whole numbers (-5, 0, 42)
- **float/real**: decimal numbers (3.14, -2.5)
- **string**: text ("hello", "AP CSP")
- **boolean**: true or false (used for conditions)
- **list/array**: ordered collection of values

### variable naming & declaration
good variable names are descriptive: \`studentAge\`, \`isValid\`, \`scoreList\`
declare before use in most languages:
\`\`\`
age = 15
name = "Alice"
scores = [95, 87, 92]
\`\`\`

### type conversion
converting between types:
- string to number: convert("123") = 123
- number to string: convert(123) = "123"
- important for operations that require specific types

### operations by type
- **numbers**: addition, subtraction, multiplication, division, modulo
- **strings**: concatenation ("hello" + " world" = "hello world")
- **booleans**: AND, OR, NOT (for logic)

### exam tips
- understand which operations work with which data types
- know the difference between = (assignment) and == (comparison)
- be able to trace programs that use different data types`}
    />
  )
}
