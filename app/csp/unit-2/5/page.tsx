import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 5, title: 'data visualization', description: 'creating charts and graphs to reveal patterns in data.' }}
      content={`## data visualization

charts, graphs, and visualizations make data patterns visible and memorable.

### types of visualizations

**bar chart**: compare values across categories
- x-axis: categories, y-axis: values
- use for: sales by product, population by country

**line graph**: show trends over time
- x-axis: time, y-axis: value
- use for: stock price over months, temperature by day

**scatter plot**: show relationship between two variables
- x-axis: first variable, y-axis: second variable
- use for: height vs weight, study hours vs test score

**pie chart**: show parts of a whole (percentages)
- use for: market share, budget breakdown

**heatmap**: show intensity/magnitude across 2D space
- color intensity represents value magnitude
- use for: website click patterns, correlation matrix

### choosing visualization
right chart type depends on your data and message:
- **compare**: bar chart, line graph
- **trend**: line graph, scatter plot
- **composition**: pie chart, stacked bar
- **correlation**: scatter plot, heatmap

### misleading visualizations
**bad practice**: truncating y-axis to exaggerate differences
- bar chart from 90-100 looks dramatic; 0-100 looks flat
- same data, different story depending on axis scale

**bad practice**: 3D charts that distort perspective
**bad practice**: inappropriate chart type

### accessibility
- use color-blind friendly palettes
- include alt text for screen readers
- make text readable (large enough, good contrast)

### exam tips
- be able to interpret charts
- understand what story different charts tell
- know how visualization choices can mislead (intentionally or accidentally)`}
    />
  )
}
