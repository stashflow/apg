import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'program design process', description: 'how to move from an idea to a working program — decomposition, abstraction, and planning before coding.' },
  { number: 2, title: 'collaboration in computing', description: 'pair programming, version control, communication strategies, and how collaboration reduces bias and improves programs.' },
  { number: 3, title: 'iterative development', description: 'why programs are built in cycles — prototype, test, revise — and how iteration leads to better outcomes.' },
  { number: 4, title: 'testing & debugging', description: 'test cases, expected vs. actual output, identifying logic errors, runtime errors, and syntax errors.' },
  { number: 5, title: 'documentation & comments', description: 'why comments matter, how to write useful documentation, and how it makes programs readable and maintainable.' },
]

export default function CSPUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 1, title: 'big idea 1: creative development', examWeight: '10–13%', description: 'the design and collaboration skills behind every program — tested on MCQ and in the Create performance task.' }}
      topics={topics}
      basePath="/csp/unit-1"
      videoId="gq-5kxqzr6k"
