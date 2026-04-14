import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 2, title: 'claims, evidence & reasoning' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what synthesis actually means',
  },
  {
    type: 'body',
    content: 'Synthesis is NOT summarizing multiple sources one by one. It is using multiple sources to build YOUR argument — letting them speak to each other, agree, disagree, and complicate each other, while you direct the conversation toward your thesis. Think of yourself as the conductor and the sources as musicians: they don\'t play in sequence, they play together under your direction.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Bad synthesis: "Source A says X. Source B says Y. Source C says Z."',
      'Good synthesis: "Sources A and B agree that X, but diverge on the mechanism: A attributes it to economic factors while B points to cultural ones. Source C complicates this by showing that under conditions of high inequality, both factors interact in ways neither source accounts for."',
      'The difference: you are making a claim about the RELATIONSHIP between sources, not just reporting what each one says',
    ],
  },
  {
    type: 'heading',
    content: 'moves for synthesizing sources',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['synthesis move', 'what it does', 'signal phrase'],
    tableRows: [
      ['Agree & extend', 'Two sources agree; you show the implication goes further', '"Both [A] and [B] acknowledge X — suggesting that Y follows..."'],
      ['Disagree & analyze', 'Sources contradict; you explain what the disagreement reveals', '"While [A] argues X, [B] contends Y — a tension that reveals the complexity of..."'],
      ['Complement', 'Sources address different aspects of the same issue', '"[A] examines the economic dimension while [B] focuses on the social impact; together they demonstrate..."'],
      ['Qualify with', 'One source complicates or limits another', '"[A]\'s optimism about X is tempered by [B]\'s evidence that..."'],
      ['Pivot from', 'Use a source as the starting point your argument moves beyond', '"[A]\'s data shows X, which suggests — though [A] does not draw this conclusion — that Y..."'],
    ],
  },
  {
    type: 'heading',
    content: 'attributing sources correctly',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Use the source identifier the exam provides: "(Source A)," "(Source B)" etc. — integrate them naturally into your prose',
      'Don\'t lead with the source label: "Source A states that..." is weaker than "The data from a 2019 Pew survey (Source A) reveals..."',
      'Blend the source into your sentence: "As urban planner Marta Green argues (Source C), the relationship between density and transit..."',
      'After the quote/summary: immediately explain what it shows and how it relates to your claim',
    ],
  },
  {
    type: 'examtip',
    content: 'You must use at least 3 sources for the synthesis essay, but the scoring rubric rewards QUALITY of synthesis, not quantity. Three well-integrated, analyzed sources that genuinely support your argument score higher than six sources mechanically mentioned. The highest-scoring responses use sources as ammunition for an original, sophisticated argument — not as the argument itself.',
  },
]

export default function LangU2T8() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 8,
        title: 'synthesizing sources',
        keyTerms: ['synthesis', 'source integration', 'attribution', 'agree and extend', 'qualify', 'complement', 'pivot', 'synthesis essay', 'Q1'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-2/7', title: 'organizing an argument' }}
      courseHref="/lang"
      unitHref="/lang/unit-2"
    />
  )
}
