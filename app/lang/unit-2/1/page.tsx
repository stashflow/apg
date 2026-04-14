import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 2, title: 'claims, evidence & reasoning' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is a claim?',
  },
  {
    type: 'body',
    content: 'A claim is a statement the writer wants the reader to accept as true or right — it takes a position that goes beyond mere fact-reporting. Every argumentative text is built on a hierarchy of claims: a central thesis claim supported by sub-claims, each backed by evidence and reasoning. Understanding this structure is essential for both analyzing arguments and constructing your own.',
  },
  {
    type: 'heading',
    content: 'types of claims',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['claim type', 'what it asserts', 'example'],
    tableRows: [
      ['Claim of Fact', 'Something is or is not true; something happened', '"The United States incarcerates more people per capita than any other country."'],
      ['Claim of Definition', 'How something should be categorized or understood', '"Solitary confinement constitutes torture under international law."'],
      ['Claim of Value', 'Something is good/bad, right/wrong, better/worse', '"Mandatory minimums are unjust because they eliminate judicial discretion."'],
      ['Claim of Cause', 'X causes Y; this explains that', '"Mass incarceration is caused by policies targeting drug offenses, not rising crime rates."'],
      ['Claim of Policy', 'Something should or should not be done', '"The federal government should abolish mandatory minimum sentencing."'],
    ],
  },
  {
    type: 'heading',
    content: 'thesis vs. claim',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'A **thesis** is the central, controlling claim of an entire argument — it encompasses the main position and often implies the reasoning',
      'A **sub-claim** (or supporting claim) is a specific claim that supports the thesis — it\'s what a single body paragraph argues',
      'Evidence supports sub-claims; sub-claims support the thesis',
      'Every sentence in your essay should either STATE a claim, SUPPORT a claim with evidence, or EXPLAIN the connection between them (reasoning)',
    ],
  },
  {
    type: 'heading',
    content: 'complexity: what makes a strong claim?',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Debatable**: a strong claim takes a position that reasonable people could disagree with',
      '**Specific**: "social media is bad" is weak; "algorithmic content curation on social platforms systematically degrades political discourse by rewarding outrage" is specific',
      '**Defensible**: you have evidence and reasoning to support it',
      '**Complex**: acknowledges nuance, conditions, or counterarguments even while taking a clear position',
      'Avoid: claims that are purely factual (not debatable), vague (not specific), or so extreme they are indefensible',
    ],
  },
  {
    type: 'examtip',
    content: 'The argument essay (Question 3) is scored heavily on the complexity and sophistication of your claim. A sophisticated argument essay qualifies its claim: "While individual media literacy plays a role, the more fundamental problem is the platform incentive structure" shows more complexity than a blanket claim. Include a "although X, ultimately Y" or "while it is true that X, the more significant factor is Y" structure in your thesis.',
  },
]

export default function LangU2T1() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 1,
        title: 'types of claims',
        keyTerms: ['claim', 'thesis', 'sub-claim', 'claim of fact', 'claim of value', 'claim of policy', 'claim of cause', 'claim of definition', 'debatable', 'defensible'],
      }}
      sections={sections}
      next={{ href: '/lang/unit-2/2', title: 'evidence types & sources' }}
      courseHref="/lang"
      unitHref="/lang/unit-2"
    />
  )
}
