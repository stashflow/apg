import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 2, title: 'claims, evidence & reasoning' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what makes an AP-quality thesis?',
  },
  {
    type: 'body',
    content: 'The thesis is the single most important sentence in your FRQ essays. It earns a point on every rubric (Q1, Q2, Q3) and sets the direction for everything that follows. AP rubrics specifically require that a thesis do more than restate the prompt — it must make a "defensible claim" that goes beyond obvious observation.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['essay type', 'what the thesis must do', 'example structure'],
    tableRows: [
      ['Synthesis (Q1)', 'Take a clear position on the debate AND suggest how sources will be used', '"Although critics cite X, the evidence from urban planning and public health research demonstrates Y."'],
      ['Rhetorical Analysis (Q2)', 'Name the purpose AND the primary rhetorical strategies AND their effect', '"[Author] uses [technique A] and [technique B] to [effect/purpose]."'],
      ['Argument (Q3)', 'Make a defensible, specific claim that answers the prompt and implies your line of reasoning', '"Because [reason], [claim] — a conclusion that challenges the common assumption that [counterpoint]."'],
    ],
  },
  {
    type: 'heading',
    content: 'the anatomy of a strong thesis',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Defensible**: someone could reasonably disagree — if everyone agrees, it\'s not a thesis',
      '**Specific**: names the specific argument, not a vague direction',
      '**Argumentative**: takes a clear position, not just describes or summarizes',
      '**Implies reasoning**: hints at WHY or HOW — gives the reader a roadmap of your argument',
      '**Complexity optional but rewarded**: acknowledges nuance, concedes something, or qualifies the claim',
    ],
  },
  {
    type: 'heading',
    content: 'thesis formulas that work',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '"Although [counterpoint], [your claim] because [reason]."',
      '"[Author] reveals [purpose] by [strategy 1] and [strategy 2], ultimately [broader effect]."',
      '"While [nuanced acknowledgment of complexity], [clear main claim] — a position grounded in [evidence/reasoning type]."',
      '"[Phenomenon] is best understood not as [common view] but as [your view], which explains [implication]."',
    ],
  },
  {
    type: 'heading',
    content: 'common thesis mistakes',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Restating the prompt**: "In this essay, I will discuss whether social media is harmful" — this is not a thesis',
      '**Too vague**: "Social media has both positive and negative effects" — no defensible position',
      '**Too obvious**: "Climate change is a serious issue" — no one disagrees; not defensible in an interesting way',
      '**Merely descriptive**: "The author uses many rhetorical devices" — describes without arguing',
      '**Road map without claim**: "I will argue about social media, then government, then schools" — structure without substance',
    ],
  },
  {
    type: 'examtip',
    content: 'Your thesis must appear in the introduction but does NOT have to be the last sentence. Some of the strongest theses are placed after a brief context-setting sentence. For Q2 (rhetorical analysis), your thesis should name at least two specific rhetorical strategies — not just "rhetorical devices" generically. The more specific the strategies named, the stronger your thesis (and the clearer your roadmap for the body).',
  },
]

export default function LangU2T6() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 6,
        title: 'thesis writing',
        keyTerms: ['thesis', 'defensible claim', 'synthesis thesis', 'rhetorical analysis thesis', 'argument thesis', 'complexity', 'specificity', 'roadmap', 'claim'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-2/5', title: 'counterargument & concession' }}
      next={{ href: '/lang/unit-2/7', title: 'organizing an argument' }}
      courseHref="/lang"
      unitHref="/lang/unit-2"
    />
  )
}
