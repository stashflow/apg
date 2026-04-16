import { NotesPage } from '@/components/notes-page'
export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 3, title: 'big idea 3: algorithms & programming' }}
      topic={{ number: 2, title: 'algorithm analysis & efficiency', description: 'comparing algorithms and understanding time complexity.' }}
      content={`## algorithm analysis & efficiency

some algorithms solve problems faster than others. analyzing efficiency matters for large datasets.

### time complexity
**linear**: O(n) - time grows with input size (search through list)
**quadratic**: O(n²) - nested loops (sorting algorithms like bubble sort)
**logarithmic**: O(log n) - divide and conquer (binary search)
**exponential**: O(2^n) - very slow (avoid if possible)

### space complexity
how much memory an algorithm needs
- arrays: O(n)
- recursive functions: stack space adds up

### big O notation
upper bound on how fast algorithm grows
- O(1): constant time (lookup in hash table)
- O(log n): logarithmic (binary search)
- O(n): linear search
- O(n log n): good sorting algorithms
- O(n²): bubble sort
- O(2^n): exponential (very slow)

### tradeoffs
- faster algorithm might use more memory
- simpler algorithm might be slower but easier to code
- choose based on constraints

### exam tips
- understand relative performance
- recognize when to use binary search vs linear search
- know that algorithm choice matters for large data`}
    />
  )
}
