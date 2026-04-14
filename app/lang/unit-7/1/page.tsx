import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 7, title: 'developing an argument' }}
      topic={{ number: 1, title: 'arguable & qualified claims', description: 'constructing defensible thesis statements with nuance and complexity.' }}
      content={`## arguable & qualified claims

an **arguable claim** makes an assertion that can be reasonably disputed. it is not a fact, but an interpretation or judgment about a fact or set of facts.

### what makes a claim arguable?
- it takes a position that someone could reasonably disagree with
- it is not self-evident or universally accepted
- it invites evidence and reasoning to support it
- examples: "social media harms adolescent mental health" vs. "social media exists" (factual, not arguable)

### qualification = nuance = sophistication
qualifying a claim means acknowledging complexity, limitations, or exceptions:
- "while some studies show correlation, the causal link between social media and depression remains contested"
- "in most developed nations, voting rates have declined, though younger voters show emerging engagement in digital organizing"
- "though technology enables efficiency, it often exacerbates inequality for those without access"

### common claim structures for ap lang essays
1. **although/concession claim**: "Although X is true, Y is more important/significant."
2. **cause-effect claim**: "X causes Y because of Z."
3. **value claim**: "X is more valuable/important than Y because..."
4. **definition claim**: "X should be understood as Y, not Z."
5. **policy claim**: "The government/society should do X in order to achieve Y."

### exam tips
- avoid absolute language: use "tend to," "often," "generally," "in many cases" rather than "always" or "never"
- your claim should be specific enough to be arguable but broad enough to support with evidence
- a strong ap lang thesis is often one sentence but may span 1–2 sentences
- graders reward claims that show intellectual sophistication—nuance beats boldness every time

### practice
write an arguable claim about one of these topics:
- the role of algorithms in shaping public opinion
- standardized testing's impact on education
- remote work's effect on workplace culture
identify how you've qualified it and what evidence would support it.`}
    />
  )
}
