import { NotesPage } from '@/components/notes-page'
export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 3, title: 'big idea 3: algorithms & programming' }}
      topic={{ number: 4, title: 'sorting algorithms', description: 'arranging data in order efficiently.' }}
      content={`## sorting algorithms

### bubble sort
repeatedly swap adjacent elements if out of order
- O(n²) worst case
- simple but slow for large data
- already sorted? O(n) best case

### selection sort
find minimum, move to front, repeat
- O(n²)
- fewer swaps than bubble sort
- still slow for large data

### merge sort
divide into halves, sort each, merge
- O(n log n) - much faster
- requires extra space for merging
- used in practice (good compromise)

### quick sort
partition around pivot, recursively sort partitions
- O(n log n) average, O(n²) worst
- very fast in practice
- most common choice

### why sort matters
- enables binary search
- essential for database queries
- real-world impact: O(n²) vs O(n log n) differs by hours for millions of items

### exam tips
- understand that O(n²) is too slow for large data
- know bubble sort is inefficient but simple
- merge/quick sort are O(n log n) and practical`}
    />
  )
}
