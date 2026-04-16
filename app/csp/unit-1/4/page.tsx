import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 1, title: 'big idea 1: creative development' }}
      topic={{ number: 4, title: 'functions & modularity', description: 'breaking programs into reusable pieces.' }}
      content={`## functions & modularity

functions are reusable blocks of code that perform specific tasks. they make programs cleaner and easier to maintain.

### defining and calling functions
\`\`\`
FUNCTION greet(name)
  DISPLAY "Hello, " + name
  
greet("Alice")  // output: Hello, Alice
greet("Bob")    // output: Hello, Bob
\`\`\`

### parameters and return values
parameters pass data into functions. return values send data back out.
\`\`\`
FUNCTION add(a, b)
  sum = a + b
  RETURN sum

result = add(5, 3)  // result = 8
DISPLAY result
\`\`\`

### scope & local variables
variables declared inside a function only exist within that function:
\`\`\`
FUNCTION test()
  x = 10  // x only exists here

DISPLAY x  // ERROR: x not defined outside function
\`\`\`

### modularity benefits
- **reusability**: write once, use many times
- **maintainability**: easier to update one function than fix it in 10 places
- **readability**: clear function names make code self-documenting
- **testing**: test functions independently

### example: modular program
instead of:
\`\`\`
// 100 lines of code mixed together
\`\`\`

write:
\`\`\`
FUNCTION readInput()
  // get user input
  
FUNCTION processData(data)
  // calculate results
  
FUNCTION displayResults(output)
  // show output

data = readInput()
results = processData(data)
displayResults(results)
\`\`\`

### exam tips
- understand how parameters and return values work
- be able to trace function calls
- know that decomposition into functions is good practice`}
    />
  )
}
