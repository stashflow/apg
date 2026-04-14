import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 7, title: 'developing an argument' }}
      topic={{ number: 4, title: 'line of reasoning', description: 'building a logical progression of ideas that leads inevitably to your conclusion.' }}
      content={`## line of reasoning

your **line of reasoning** is the logical path from your evidence to your claim. it\'s the "so what" that connects each piece of evidence to your argument.

### the structure of reasoning
**evidence → warrant → claim**
- **evidence**: the fact, example, statistic, or quote
- **warrant**: the assumption or logical bridge (often implicit)
- **claim**: the conclusion drawn from evidence + warrant

example:
- evidence: "studies show that students who attend school regularly score higher on standardized tests"
- warrant: (implicit) regular school attendance correlates with academic preparation and engagement
- claim: "mandatory attendance policies contribute to improved academic outcomes"

### common reasoning structures in ap arguments
1. **causal reasoning**: X leads to Y because of Z
2. **comparison/contrast**: X and Y are similar/different in Z way, therefore...
3. **definition**: X should be defined as Y, which means...
4. **analogy**: X is like Y, so we should treat X as we treat Y
5. **precedent**: this situation is like a past situation that was resolved by...

### building a line of reasoning across paragraphs
- **topic sentence**: introduces the reasoning for this section
- **evidence**: provides the specific support
- **analysis**: explains how evidence supports the claim
- **connection to thesis**: links this paragraph\'s reasoning back to your main argument

### exam tips
- your reasoning must be explicit—don\'t assume readers will fill in gaps
- avoid logical fallacies: false causation, appeal to authority, ad hominem, strawman arguments
- ensure each paragraph\'s reasoning connects logically to the next—readers should follow your logic effortlessly`}
    />
  )
}
