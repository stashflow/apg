import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 1, title: 'big idea 1: creative development' }}
      topic={{ number: 5, title: 'lists & arrays', description: 'storing multiple values in a single variable.' }}
      content={`## lists & arrays

lists store multiple related values under one name, accessed by index position.

### creating and accessing lists
\`\`\`
colors = ["red", "green", "blue"]
DISPLAY colors[0]  // red
DISPLAY colors[1]  // green
DISPLAY colors[2]  // blue
\`\`\`

**note**: most programming uses 0-based indexing (first item is index 0)

### modifying lists
\`\`\`
scores = [90, 85, 88]
scores[0] = 95  // change first element to 95
APPEND scores, 92  // add to end: [95, 85, 88, 92]
INSERT scores, 0, 100  // insert at position 0: [100, 95, 85, 88, 92]
REMOVE scores, 2  // remove index 2: [100, 95, 88, 92]
\`\`\`

### list length
\`\`\`
names = ["Alice", "Bob", "Charlie"]
LENGTH(names)  // returns 3

FOR i = 0 TO LENGTH(names) - 1
  DISPLAY names[i]
\`\`\`

### iterating through lists
\`\`\`
// Method 1: indexed loop
FOR i = 0 TO LENGTH(list) - 1
  DISPLAY list[i]

// Method 2: for-each (cleaner)
FOR EACH item IN list
  DISPLAY item
\`\`\`

### searching lists
\`\`\`
numbers = [3, 7, 2, 9, 1]
index = -1

FOR i = 0 TO LENGTH(numbers) - 1
  IF numbers[i] = 7
    index = i

// now index = 1
\`\`\`

### 2D lists/arrays
\`\`\`
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
DISPLAY matrix[0][1]  // 2
DISPLAY matrix[2][2]  // 9
\`\`\`

### exam tips
- be careful with off-by-one errors (index 0 vs count 1)
- know list operations: append, insert, remove, length
- trace through loops that modify lists`}
    />
  )
}
