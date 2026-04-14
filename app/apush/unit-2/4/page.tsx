import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 2, title: 'period 2: 1607–1754' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'chesapeake region — virginia & maryland',
  },
  {
    type: 'body',
    content: 'The Chesapeake colonies (Virginia and Maryland) were shaped above all by tobacco. Everything else — the labor system, social structure, relations with Native Americans, political culture — flowed from the demands of that one crop. Maryland was founded in 1632 by Lord Baltimore as a proprietary colony and Catholic refuge, but it quickly developed the same tobacco-and-slavery economy as Virginia.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['feature', 'new england', 'chesapeake'],
    tableRows: [
      ['Primary motive', 'Religious (Puritan reform)', 'Economic (tobacco profit)'],
      ['Migration pattern', 'Families (balanced gender ratio)', 'Mostly young single men'],
      ['Life expectancy', 'High (70s common)', 'Very low — malaria, dysentery killed most before 40'],
      ['Economy', 'Diversified: fish, ships, commerce', 'Tobacco monoculture → later tobacco + slavery'],
      ['Labor', 'Family labor, apprentices, servants', 'Indentured servants → African slaves after 1680'],
      ['Settlement pattern', 'Compact towns around meetinghouse', 'Dispersed plantations along rivers'],
      ['Political culture', 'Town meetings; participatory', 'Planter elite dominated House of Burgesses'],
      ['Religion', 'Congregational (Puritan)', 'Anglican (Church of England); later Baptist growth'],
    ],
  },
  {
    type: 'heading',
    content: 'bacon\'s rebellion (1676) — the turning point',
  },
  {
    type: 'body',
    content: 'Nathaniel Bacon, a wealthy planter, led a rebellion of frontier settlers (many ex-indentured servants) against Governor William Berkeley\'s government. The rebellion stemmed from frustration with the elite\'s monopoly on lucrative trade with Native Americans, high taxes, and Berkeley\'s refusal to authorize attacks on Native peoples on the frontier. Bacon\'s forces burned Jamestown before Bacon died of dysentery and the rebellion collapsed.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Why it matters**: The rebel army included both poor white settlers AND enslaved Africans — this biracial coalition terrified the planter elite',
      'After the rebellion, Virginia planters pivoted decisively to African slavery: enslaved people were easier to control, could be distinguished by race, and couldn\'t vote or claim land',
      'Virginia Slave Codes (1705) formalized hereditary, race-based slavery',
      'The rebellion also reveals the danger of a landless underclass — a fear that shaped elite political thought through the Revolution',
    ],
  },
  {
    type: 'heading',
    content: 'maryland — the catholic refuge',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Founded 1632 by Lord Baltimore (Cecil Calvert) as a proprietary colony for English Catholics fleeing persecution',
      '**Maryland Toleration Act (1649)**: extended religious freedom to ALL Christians (not just Catholics) — first religious tolerance law in America (though excluded non-Christians)',
      'By 1650s, Protestant majority in Maryland outnumbered Catholics; act was repealed and re-enacted multiple times',
      'Economy: same as Virginia — tobacco, indentured servants → slavery',
    ],
  },
  {
    type: 'frqtip',
    content: 'On the DBQ or LEQ about colonial development, Bacon\'s Rebellion is essential. It\'s a turning point that connects the indentured servant labor system to African slavery. The most sophisticated answer will explain that slavery\'s growth was not inevitable or predetermined — it was a conscious choice made by elites AFTER Bacon\'s Rebellion revealed the dangers of the existing system.',
  },
]

export default function APUSHU2T4() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 4,
        title: 'chesapeake colonies',
        keyTerms: ['Maryland Toleration Act', 'Bacon\'s Rebellion', 'tobacco monoculture', 'Virginia Slave Codes', 'indentured servants', 'Lord Baltimore', 'William Berkeley', 'planter elite'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-2/3', title: 'new england colonies' }}
      next={{ href: '/apush/unit-2/5', title: 'middle & southern colonies' }}
      courseHref="/apush"
      unitHref="/apush/unit-2"
    />
  )
}
