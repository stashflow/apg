import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 7, title: 'developing an argument' }}
      topic={{ number: 2, title: 'defending a claim', description: 'using evidence and reasoning to build a convincing line of argument.' }}
      content={`## defending a claim

once you\'ve made your claim, you must defend it. this means providing evidence and explaining how that evidence supports your assertion.

### the evidence hierarchy
1. **primary sources**: original documents, data, personal observation
2. **secondary sources**: analysis, research studies, expert commentary
3. **anecdotal evidence**: personal stories (weakest on its own, powerful with context)
4. **statistical evidence**: numbers, percentages, research findings (often most persuasive)
5. **expert testimony**: quotes from recognized authorities

### the "because clause"
every piece of evidence needs a "because" clause—why does this evidence matter?
- weak: "studies show social media use is increasing."
- strong: "studies show social media use is increasing, demonstrating how normalized digital connection has become in american culture, which affects how we form relationships."

### common defensive strategies
- **acknowledge the strongest counterargument first**, then refute it: "critics argue that regulation limits innovation; however, consumer protection historically accelerates innovation by creating market demand for safe products."
- **use multiple forms of evidence** in a single paragraph: statistic + expert quote + concrete example
- **build cumulatively**: start with straightforward evidence, then move to complex interpretations

### what graders look for
- specificity over generality
- connection between evidence and claim (explicit "because" reasoning)
- variety of evidence types
- appropriate tone and formality

### exam tips
- avoid filler phrases like "in today\'s society" or "due to the fact that"
- make sure your evidence actually supports your specific claim, not just the general topic
- if you\'re making a causal claim ("X causes Y"), defend both causation and significance`}
    />
  )
}
