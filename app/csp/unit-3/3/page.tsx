import { NotesPage } from '@/components/notes-page'
export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 3, title: 'big idea 3: algorithms & programming' }}
      topic={{ number: 3, title: 'searching algorithms', description: 'different methods to find elements in data structures.' }}
      content={`## searching algorithms

### linear search
check each item until found
- O(n) - worst case must check all items
- works on unsorted data
- simple to implement

### binary search
repeatedly divide search space in half
- O(log n) - very fast
- requires sorted data
- example: find 7 in [1, 3, 5, 7, 9, 11]
  - check middle: 7. Found!

### hash tables
instant lookup: O(1)
- trade memory for speed
- use case: dictionary lookups

### exam tips
- linear search for unsorted data
- binary search for sorted data (much faster)
- understand why binary search requires sorted data`}
    />
  )
}
