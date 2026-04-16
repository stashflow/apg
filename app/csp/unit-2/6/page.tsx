import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 6, title: 'statistics & aggregation', description: 'analyzing data with statistics to find patterns.' }}
      content={`## statistics & aggregation

summarizing large datasets reveals patterns invisible in raw data.

### mean, median, mode
**mean (average)**: sum all values, divide by count
- [1, 2, 3, 4, 5] → mean = 15/5 = 3

**median**: middle value when sorted
- [1, 2, 3, 4, 5] → median = 3
- [1, 2, 3, 4] → median = (2+3)/2 = 2.5
- less affected by outliers than mean

**mode**: most frequent value
- [1, 2, 2, 3, 4, 2] → mode = 2

### spread & distribution
**range**: max - min (tells how spread out data is)
**standard deviation**: how far values deviate from mean
- small SD = clustered near mean, large SD = scattered

**quartiles**: divide data into 4 parts
- Q1: 25th percentile, Q2: 50th (median), Q3: 75th percentile

### aggregation
combining data to create summary statistics:
\`\`\`
GROUP BY department:
  SUM salary
  COUNT employees
  AVG salary per employee
\`\`\`

### correlation vs causation
**correlation**: two variables move together
- example: ice cream sales and temperature are correlated
**causation**: one variable causes the other
- hot weather causes people to buy ice cream
- ice cream sales don't cause heat

**mistake**: assuming correlation = causation
- example: taller people read more advanced books
- correlation? yes. Causation? No—both correlate with age

### sampling bias
**biased sample**: doesn't represent the population fairly
- survey only morning shoppers → miss evening shoppers' preferences
- online survey → miss people without internet

**random sample**: better chance of representing population fairly

### exam tips
- know mean, median, mode formulas and when to use each
- understand correlation ≠ causation
- know how sampling can introduce bias`}
    />
  )
}
