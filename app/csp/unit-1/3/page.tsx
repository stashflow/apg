import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 1, title: 'big idea 1: creative development' }}
      topic={{ number: 3, title: 'sequence, selection & iteration', description: 'three fundamental programming constructs.' }}
      content={`## sequence, selection & iteration

these three control structures form the foundation of all algorithms.

### sequence
executing statements in order from top to bottom. the simplest control flow.
\`\`\`
x = 5
y = 10
sum = x + y
DISPLAY sum  // displays 15
\`\`\`

### selection (conditionals)
making decisions based on conditions using if/else:
\`\`\`
IF (age >= 18)
  DISPLAY "Adult"
ELSE
  DISPLAY "Minor"
\`\`\`
nested conditionals check multiple conditions:
\`\`\`
IF (score >= 90)
  DISPLAY "A"
ELSE IF (score >= 80)
  DISPLAY "B"
ELSE
  DISPLAY "C"
\`\`\`

### iteration (loops)
repeating code while a condition is true:

**WHILE loop**:
\`\`\`
count = 0
WHILE (count < 5)
  DISPLAY count
  count = count + 1
\`\`\`

**FOR loop** (counting):
\`\`\`
FOR i = 0 TO 4
  DISPLAY i
\`\`\`

**FOR EACH loop** (iterate through lists):
\`\`\`
scores = [95, 87, 92]
FOR EACH score IN scores
  DISPLAY score
\`\`\`

### combining constructs
real programs combine all three. example: check each item in a list:
\`\`\`
FOR EACH student IN classList
  IF (student score >= 90)
    DISPLAY student name + " earned an A"
\`\`\`

### exam tips
- trace through loops to predict output
- understand loop termination conditions
- know the difference between while and for loops`}
    />
  )
}
