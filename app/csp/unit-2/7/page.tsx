import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 7, title: 'simulation with random sampling', description: 'using randomness to model real-world scenarios.' }}
      content={`## simulation with random sampling

simulations use random numbers to model systems too complex to predict analytically.

### why simulate?
testing real systems is expensive, time-consuming, or impossible:
- airplane crash test → simulate before building
- disease spread → simulate to plan public health response
- financial market → simulate trading strategies

### random number generation
**RANDOM()** generates number between 0 and 1
to get random integer 1-6 (like dice):
\`\`\`
roll = INT(RANDOM() * 6) + 1
\`\`\`

### monte carlo simulation example
**problem**: estimate value of π
- randomly generate points in a square
- count how many fall inside inscribed circle
- ratio ≈ π/4

### probability simulation
roll two dice 1000 times:
\`\`\`
FOR i = 0 TO 999
  die1 = INT(RANDOM() * 6) + 1
  die2 = INT(RANDOM() * 6) + 1
  sum = die1 + die2
  record(sum)
\`\`\`
most common sums: 7 (theoretical probability = 6/36 = 1/6)

### why randomness works
**law of large numbers**: as sample size grows, average approaches true value
- flip coin 10 times: might get 7 heads, 3 tails (70%)
- flip coin 10,000 times: probably get ~5000 heads, ~5000 tails (~50%)

### seeding for reproducibility
**seed**: starting point for random number generator
same seed = same "random" sequence
important for testing (want consistent results)

### exam tips
- understand simulation lets you test things efficiently
- be able to write pseudocode for simple simulations
- understand that large samples give more accurate results`}
    />
  )
}
