import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 9, title: 'impact of computing on data', description: 'how computing changes what we can do with data.' }}
      content={`## impact of computing on data

computing transformed data from static records into dynamic insights.

### volume
**big data**: datasets so large they're hard to process by traditional means
- petabyte (10^15), exabyte (10^18) scale datasets
- computing enables storage and processing in reasonable time

### velocity
data constantly generated and updated:
- real-time stock tickers, social media feeds, IoT sensors
- computing processes this stream instantly

### variety
data formats multiply - structured, unstructured, semi-structured
computing handles all types

### consequences
**positive**: personalized medicine, climate modeling, accessibility

**negative**: surveillance, environmental cost, security risks

### exam tips
- understand what "big data" means
- know how computing changed data analysis`}
    />
  )
}
