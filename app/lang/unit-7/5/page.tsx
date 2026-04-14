import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 7, title: 'developing an argument' }}
      topic={{ number: 5, title: 'evidence selection & commentary depth', description: 'choosing the right evidence and analyzing it thoroughly for maximum persuasive power.' }}
      content={`## evidence selection & commentary depth

having a lot of evidence is not enough. you must select the **most compelling evidence** and analyze it deeply to show its relevance to your claim.

### evidence selection criteria
**relevance**: does this evidence directly support my specific claim?
- weak: "the internet has changed society" when your claim is "social media algorithms amplify polarization"
- strong: "facebook\'s algorithm prioritizes engagement-driving content, which research shows includes more extreme viewpoints"

**credibility**: is this evidence from a trustworthy source?
- academic research > reputable journalism > opinion pieces > social media posts
- cite sources when possible; when you can\'t, acknowledge the limitation

**specificity**: is this evidence detailed enough to be persuasive?
- weak: "many studies show..."
- strong: "a 2023 Stanford study of 1,200 teenagers found that social media use correlates with increased anxiety symptoms"

**diversity**: do you use multiple types of evidence?
- statistics + expert quote + concrete example = more persuasive than statistics alone

### commentary depth: the "so what"
for every piece of evidence, explain:
1. **what it shows**: what does this evidence demonstrate?
2. **why it matters**: how does this connect to your larger argument?
3. **what it proves about your claim**: what does this prove about the truth or importance of your position?

weak commentary: "this shows that social media is bad."
strong commentary: "this demonstrates that algorithmic curation—not user choice—determines what information people see, which means social media platforms bear responsibility for the polarization they amplify, not users themselves."

### depth in practice
- spend more time analyzing one strong example than listing five weak ones
- use precise language: instead of "this proves," say "this suggests," "this illustrates," or "this demonstrates the mechanism by which..."
- connect commentary back to your thesis in every paragraph`}
    />
  )
}
