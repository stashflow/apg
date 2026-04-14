import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 2, title: 'claims, evidence & reasoning' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'reasoning — the bridge between evidence and claim',
  },
  {
    type: 'body',
    content: 'Reasoning is the explanation of HOW the evidence proves the claim. It is the most underdeveloped part of most student essays — and the part most heavily weighted on AP scoring. You cannot just present evidence and assume the connection is obvious; you must explicitly show why this evidence means what you claim it means.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'The formula: CLAIM → because of EVIDENCE → which shows REASONING',
      'Reasoning answers: "so what?" and "how does this prove your point?"',
      'Test your reasoning: if someone could disagree with your interpretation of the evidence, your reasoning needs more work',
      'Reasoning often involves connecting the specific to the general: "this specific example reveals a broader pattern of..."',
    ],
  },
  {
    type: 'heading',
    content: 'deductive vs. inductive reasoning',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['type', 'direction', 'structure', 'strength'],
    tableRows: [
      ['Deductive', 'General → Specific', 'If all X are Y, and Z is X, then Z is Y', 'Airtight IF premises are true; but premises can be challenged'],
      ['Inductive', 'Specific → General', 'Observe cases 1,2,3,4,5 → infer pattern', 'More flexible, matches how we learn; can\'t be 100% certain'],
      ['Abductive', 'Best explanation', 'Given evidence, what is most likely true?', 'Most realistic; used in science and investigation'],
    ],
  },
  {
    type: 'heading',
    content: 'toulmin model — the complete argument',
  },
  {
    type: 'body',
    content: 'The Toulmin model (philosopher Stephen Toulmin) is the most useful framework for analyzing and constructing complex arguments. It identifies six components of a complete argument.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Claim**: the conclusion the argument wants you to accept',
      '**Data/Grounds**: the evidence offered to support the claim',
      '**Warrant**: the unstated assumption that connects the data to the claim (this is where most arguments are vulnerable)',
      '**Backing**: the support for the warrant (why should we accept that assumption?)',
      '**Qualifier**: the limits on the claim ("in most cases," "unless...")',
      '**Rebuttal/Reservation**: conditions under which the claim would not hold',
    ],
  },
  {
    type: 'heading',
    content: 'why warrants matter most',
  },
  {
    type: 'body',
    content: 'The warrant is the hidden premise — the assumption the argument relies on but never states. Arguments fail not because the evidence is wrong, but because the warrant (the assumed connection) is not shared by the audience. Identifying warrants is the highest-level form of argument analysis.',
  },
  {
    type: 'examtip',
    content: 'On the rhetorical analysis essay, analyzing reasoning means analyzing HOW the author connects evidence to claims — what assumptions do they make? Are those assumptions ones the audience shares? The most sophisticated responses identify the warrants: "The author assumes that readers share the belief that economic growth is the highest social priority — an assumption that goes unquestioned but is central to the argument."',
  },
]

export default function LangU2T3() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 3,
        title: 'reasoning & logical structure',
        keyTerms: ['reasoning', 'deductive', 'inductive', 'abductive', 'Toulmin model', 'claim', 'warrant', 'backing', 'grounds', 'qualifier', 'rebuttal'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-2/2', title: 'evidence types & sources' }}
      next={{ href: '/lang/unit-2/4', title: 'logical fallacies' }}
      courseHref="/lang"
      unitHref="/lang/unit-2"
    />
  )
}
