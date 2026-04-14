import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 8, title: 'stylistic choices & frq mastery' }}
      topic={{ number: 1, title: 'word choice & sentence structure', description: 'using diction and syntax deliberately to strengthen your argument.' }}
      content={`## word choice & sentence structure

every word choice and sentence shape is a rhetorical move. on the ap lang exam, your job is to use these moves strategically to persuade your reader.

### diction: the power of word choice
**loaded language**: words carry connotations
- "freedom fighter" vs. "insurgent" (same person, different connotations)
- "investment in education" vs. "spending on schools" (framing)
- "tax relief" vs. "tax cuts" (emotional resonance)

**specificity over abstraction**:
- vague: "technology is important"
- specific: "encryption technology protects financial transactions"

**active vs. passive voice**:
- active: "the government implemented new policy" (clear responsibility)
- passive: "new policy was implemented" (obscures agent)
- use passive when you want to downplay responsibility; use active when you want accountability

### sentence structure: rhythm and emphasis
**short sentences** = emphasis and impact
- "inequality persists. it demands action."

**long, flowing sentences** = complexity and accumulation
- "when we consider the intersecting forces of economic instability, political polarization, and social fragmentation, we recognize that no single policy can address the systemic nature of the crisis."

**parallel structure** = rhythm and memorability
- "we must protect our environment, preserve our culture, and invest in our communities."

**inversions and rhetorical questions** = engagement
- "what are we willing to sacrifice for progress?" (rhetorical question draws reader in)
- "lost in translation is the human element." (inverted subject-verb for emphasis)

### frq mastery: apply this in your essays
- use varied sentence length to maintain reader interest and emphasize key points
- choose words for precision and connotation, not just because they\'re "fancy"
- ensure your stylistic choices reflect your argument\'s tone and urgency
- avoid overwriting: the best style is often invisible—readers notice ideas, not prose`}
    />
  )
}
