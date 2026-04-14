import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 7, title: 'developing an argument' }}
      topic={{ number: 6, title: 'synthesis of sources', description: 'combining multiple sources to build a more complex and credible argument.' }}
      content={`## synthesis of sources

**synthesis** means weaving together ideas from multiple sources to create a unified argument. you\'re not just summarizing sources; you\'re using them as building blocks for your own reasoning.

### synthesis in the argument essay (which provides sources)
- read all sources before writing
- identify common themes, tensions, and patterns across sources
- use each source strategically: one for data, one for expert opinion, one for a counterargument
- create a composite picture: "while source A shows X, source B demonstrates that Y, suggesting the relationship is more complex than previously thought"

### synthesis strategies
**agreement + extension**: sources agree, and you build on that agreement
- "both researchers argue that early intervention is critical. furthermore, the longitudinal data suggests that intervention timing directly correlates with long-term outcomes."

**disagreement + analysis**: sources disagree, and you analyze what that disagreement reveals
- "source A emphasizes individual choice, while source B stresses systemic barriers. this tension suggests that effective policy requires addressing both personal agency and structural inequality."

**comparison**: sources address the same issue from different angles
- "traditional media prioritizes verifiability (source A), while social media prioritizes speed (source B), reflecting fundamentally different values in information ecosystems."

### synthesis checklist for ap exams
- do i use at least 3–4 sources in my essay?
- do i quote, paraphrase, or reference sources by name or context?
- do i explain why each source matters to my argument?
- do i synthesize (combine ideas) or just summarize (list ideas)?
- does my use of sources strengthen my own voice, or get lost in their voices?

### the goal
synthesis is not about showing you\'ve read lots of sources. it\'s about showing you can think independently while incorporating evidence. your argument should be your own; sources are tools, not substitutes for thinking.`}
    />
  )
}
