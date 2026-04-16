import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 9, title: 'documentation & comments', description: 'explaining code for humans to understand.' }} content={`## documentation & comments

### comments
explain why code does something, not just what
- \`\`\`// Calculate total after tax\`\`\`
- don't comment obvious: \`\`\`// x = x + 1 adds one to x\`\`\`

### docstrings
document functions:
\`\`\`
FUNCTION add(a, b)
  // Parameters: two numbers
  // Returns: sum of a and b
  RETURN a + b
\`\`\`

### README files
project overview: what it does, how to use it, dependencies

### variable naming
good names are self-documenting:
- YES: \`\`\`studentAge, isValid, totalScore\`\`\`
- NO: \`\`\`a, x, data\`\`\`

### code style
consistent formatting helps readability:
- indentation, naming conventions
- teams follow style guides

### exam tips
- comments explain non-obvious logic
- good names reduce need for comments
- documentation helps others use your code`}
/> )
}
