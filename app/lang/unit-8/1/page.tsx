import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 8, title: 'stylistic choices & frq mastery' }}
      topic={{ number: 2, title: 'irony, satire & hyperbole', description: 'using figurative language and rhetorical devices to create persuasive effects.' }}
      content={`## irony, satire & hyperbole

these devices don\'t just ornament your writing—they create powerful rhetorical effects when used deliberately.

### irony: saying one thing, meaning another
**situational irony**: reality contradicts expectation
- "the safety regulation intended to protect workers instead created a bottleneck that slowed production."

**verbal irony**: speaker says the opposite of what is meant
- "oh, sure, cutting funding for public education is a great way to build a competitive workforce." (the writer means the opposite)

**dramatic irony**: reader/audience knows something the character doesn\'t
- using this in essays: "while policymakers claim this initiative will reduce inequality, the data reveals it will widen the gap."

### satire: using irony to critique
satire uses exaggeration and irony to expose flaws, absurdity, or hypocrisy. it\'s persuasive because it makes the audience complicit in recognizing the absurdity.
- "we should definitely ignore climate data from scientists—after all, oil companies have better funding for research."
- **use sparingly in ap essays**: satire can backfire if it seems mean-spirited or unclear

### hyperbole: intentional exaggeration
hyperbole makes a point through extreme overstatement.
- "if we don\'t address mental health support in schools now, an entire generation will be lost."
- this is more powerful than: "mental health issues in schools are serious."

### usage tips for ap lang
- these devices work best when the stakes are high and the audience is educated
- avoid sarcasm (which is often just mean without a point)
- ensure the device serves your argument, not distracts from it
- use only once or twice in an essay—overuse dilutes effect`}
    />
  )
}
