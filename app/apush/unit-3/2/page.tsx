import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'from salutary neglect to direct taxation' },
  { type: 'body', content: 'For over a century, Britain largely left its American colonies to govern themselves — a policy historians call "salutary neglect." After 1763, massive war debts changed everything. Parliament passed a series of direct taxes on the colonies, who had never been directly taxed by Parliament before. Colonists responded with a constitutional argument that became the ideological foundation of the Revolution: Parliament could not tax people who had no representatives in Parliament.' },
  { type: 'table', content: '', tableHeaders: ['act', 'year', 'what it did', 'colonial response'],
    tableRows: [
      ['Sugar Act', '1764', 'Taxed imported sugar, molasses, foreign goods; strengthened customs enforcement', 'Merchants protest; first use of "no taxation without representation"'],
      ['Stamp Act', '1765', 'First DIRECT internal tax — taxed all printed paper: newspapers, legal docs, playing cards', 'Stamp Act Congress; Sons of Liberty formed; boycotts; stamp distributors intimidated'],
      ['Declaratory Act', '1766', 'Repealed Stamp Act but asserted Parliament\'s right to tax colonies "in all cases whatsoever"', 'Colonists celebrated repeal but ignored the Declaratory Act — big mistake'],
      ['Townshend Acts', '1767', 'Taxed imported British goods: glass, paper, paint, tea; created Board of Customs Commissioners', 'Non-importation agreements; Daughters of Liberty spin their own cloth'],
      ['Tea Act', '1773', 'Gave East India Company a monopoly, actually lowered tea price but cut out colonial merchants', 'Boston Tea Party — 342 chests dumped into harbor'],
      ['Intolerable Acts', '1774', 'Closed Boston Harbor; revoked Mass. charter; required colonists to quarter soldiers', 'First Continental Congress called; colonial unity'],
    ]
  },
  { type: 'heading', content: 'the sons of liberty & colonial resistance' },
  { type: 'body', content: 'The Sons of Liberty, organized by Samuel Adams in Boston, used intimidation, boycotts, and propaganda to resist British taxation. They published pamphlets, organized protests, and enforced non-importation agreements by shaming or attacking merchants who violated them. John Dickinson\'s Letters from a Farmer in Pennsylvania (1767) articulated the constitutional case against Parliamentary taxation.' },
  { type: 'heading', content: 'john locke\'s influence' },
  { type: 'bullets', content: '', bullets: [
    '**Natural rights** — all people possess life, liberty, and property by nature, not by government grant',
    '**Social contract** — government exists by the consent of the governed; if it violates natural rights, citizens may revolt',
    '**James Otis** — argued writs of assistance (general search warrants) violated natural rights; sparked colonial rights discourse',
    '**Thomas Paine, Common Sense (1776)** — argued monarchy itself was illegitimate; pushed colonists toward independence (not just reform)',
    '**Virtual vs. actual representation** — Britain claimed colonists were "virtually" represented in Parliament; colonists rejected this as meaningless',
  ]},
  { type: 'examtip', content: 'The ideological argument matters as much as the specific acts. APUSH expects you to connect Locke\'s social contract theory → colonial pamphlets → Declaration of Independence as a continuous thread. SAQ questions often ask you to explain how Enlightenment ideas shaped colonial resistance.' },
  { type: 'frqtip', content: 'For LEQ prompts comparing causes of the Revolution, frame your argument around the shift from economic grievances (taxes) to constitutional principles (consent of the governed) to ideological revolution (republicanism). This progression shows sophisticated thinking.' },
]

export default function APUSHU3T2() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 2, title: 'taxation without representation', keyTerms: ['Stamp Act', 'Townshend Acts', 'Sons of Liberty', 'non-importation', 'Locke', 'natural rights', 'social contract', 'virtual representation'] }}
      sections={sections}
      prev={{ href: '/apush/unit-3/1', title: 'french & indian war' }}
      next={{ href: '/apush/unit-3/3', title: 'boston massacre & tea party' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
