import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 4, title: 'filtering & sorting', description: 'organizing and selecting data to answer questions.' }}
      content={`## filtering & sorting

transforming data makes it useful for analysis and decisions.

### filtering
selecting rows/records that meet certain criteria.

**simple filter**: show only students with GPA > 3.5
**complex filter**: (age >= 18) AND (score >= 90)

in spreadsheets or databases:
\`\`\`
SELECT name, gpa FROM students WHERE gpa > 3.5
\`\`\`

### sorting
arranging data in order (ascending or descending).

**single sort**: list prices from lowest to highest
**multi-level sort**: sort by department first, then by salary within each department

### why filtering & sorting matter
- **decision making**: "which products are below cost?" → filter to identify problems
- **discovery**: sort employees by salary to see who's paid most
- **analysis**: filter to specific time period, then analyze trends
- **efficiency**: humans can't manually sort 1 million records; computers do it instantly

### algorithms
**linear search**: check each item until found (slow for large data)
**binary search**: repeatedly cut search space in half (only works on sorted data)

### data quality affects results
**garbage in, garbage out**: if data has errors, results are useless
- wrong entries, missing values, duplicates
- important to clean data before analyzing

### bias in filtering
how you filter determines what you see:
- filter "students with scholarship" vs "students without scholarship" tells different stories
- filters can reveal or hide bias

### exam tips
- understand AND/OR logic in complex filters
- know difference between filtering and sorting
- understand that data cleaning is often necessary before analysis`}
    />
  )
}
