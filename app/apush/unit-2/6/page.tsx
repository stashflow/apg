import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 2, title: 'period 2: 1607–1754' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'mercantilism — the theory of colonial economics',
  },
  {
    type: 'body',
    content: 'Mercantilism held that national wealth was finite and measured in gold/silver. Colonies existed purely to benefit the mother country — providing raw materials and buying manufactured goods. Britain enforced this through the Navigation Acts, which required all colonial trade to use English ships and pass through English ports.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Navigation Acts (1651, 1660, 1663)**: colonial goods must be shipped on English vessels; "enumerated goods" (tobacco, sugar, indigo) must go to England first before re-export',
      'Colonists resented Navigation Acts but largely evaded them through smuggling — especially in New England',
      'The acts benefited some colonists (Virginia tobacco planters got guaranteed English market) while hurting others (New England merchants faced restrictions)',
    ],
  },
  {
    type: 'heading',
    content: 'salutary neglect — why it mattered',
  },
  {
    type: 'body',
    content: 'From roughly 1700–1763, Britain loosely enforced its colonial laws — a policy described by Edmund Burke as "salutary neglect." The Crown was focused on European wars and trusted that colonial trade profits would flow naturally. During this period, colonial assemblies grew powerful and colonists developed habits of self-governance.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Colonial assemblies (like Virginia\'s House of Burgesses) controlled their own tax rates and budgets — "power of the purse" became their weapon',
      'Governors were appointed by Crown but dependent on assemblies for their salaries — assemblies used this leverage effectively',
      'Decades of self-governance made colonists feel entitled to control their own affairs',
      '**End of salutary neglect**: after the French & Indian War (1763), Britain needed revenue and began ACTUALLY enforcing the Navigation Acts — colonists experienced this as a sudden, intolerable change, not merely enforcement of existing law',
    ],
  },
  {
    type: 'heading',
    content: 'colonial assemblies and the roots of representative government',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'All 13 colonies developed elected assemblies by 1750',
      'Assemblies modeled on British Parliament; colonists saw themselves as Englishmen with full English rights',
      '**"No taxation without representation"** was not a new radical idea — it was a traditional English right that colonists believed Parliament was violating when it taxed them without their elected representatives',
      'The long experience of self-governance (1607–1763) is the essential context for understanding why colonists responded so violently to post-1763 British taxation',
    ],
  },
  {
    type: 'examtip',
    content: 'Salutary neglect is essential context for the entire Revolution. The standard SAQ structure is: (1) define salutary neglect, (2) explain how it allowed colonial self-governance to develop, (3) explain how its END triggered the Revolution. Never just say "Britain taxed them" — the deeper story is that colonists had governed themselves for 60+ years and felt the post-1763 changes violated their fundamental rights as English subjects.',
  },
]

export default function APUSHU2T6() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 6,
        title: 'mercantilism & salutary neglect',
        keyTerms: ['mercantilism', 'Navigation Acts', 'salutary neglect', 'power of the purse', 'colonial assemblies', 'enumerated goods', 'Edmund Burke', 'self-governance'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-2/5', title: 'middle & southern colonies' }}
      next={{ href: '/apush/unit-2/7', title: 'first great awakening' }}
      courseHref="/apush"
      unitHref="/apush/unit-2"
    />
  )
}
