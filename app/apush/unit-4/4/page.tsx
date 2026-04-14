import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 4, title: 'period 4: 1800–1848' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the era of good feelings (1816–1824)' },
  { type: 'body', content: 'After the War of 1812, the collapse of the Federalist Party left the U.S. with one political party — the Democratic-Republicans. President James Monroe\'s two terms (1817–1825) were marked by nationalism, territorial expansion, and apparent political unity. But beneath the surface, sectional tensions (North vs. South over slavery, East vs. West over land) were building.' },
  { type: 'heading', content: 'missouri compromise (1820)' },
  { type: 'body', content: 'Missouri\'s application for statehood as a slave state threatened the balance between 11 slave and 11 free states in the Senate. Speaker Henry Clay engineered the Missouri Compromise: Missouri entered as a slave state, Maine as a free state (maintaining balance), and slavery was banned in the Louisiana Territory north of the 36°30\' line.' },
  { type: 'bullets', content: '', bullets: [
    'Jefferson called it "a firebell in the night" — warning that slavery would destroy the Union',
    'The 36°30\' line became the standard for western expansion until the Kansas-Nebraska Act (1854) demolished it',
    'Shows that sectional conflict over slavery was a permanent feature of American politics from this point forward',
  ]},
  { type: 'heading', content: 'monroe doctrine (1823)' },
  { type: 'body', content: 'As Latin American colonies won independence from Spain, President Monroe declared (in his annual message to Congress) that the Western Hemisphere was closed to further European colonization and that the U.S. would view any European attempt to extend political systems to the Americas as a threat to U.S. security. The Monroe Doctrine had little enforcement power in 1823 (Britain\'s navy actually enforced it) but became the cornerstone of U.S. foreign policy for 150+ years.' },
  { type: 'bullets', content: '', bullets: [
    '**Three parts**: (1) Western Hemisphere closed to new European colonization; (2) U.S. would not interfere in existing European colonies; (3) U.S. would not interfere in European wars',
    '**Roosevelt Corollary (1904)** — Theodore Roosevelt added that the U.S. could intervene in Latin American countries to prevent European intervention — transformed defensive doctrine into justification for U.S. imperialism',
    '**Real enforcement** — British navy, not U.S. military, backed the Monroe Doctrine in 1823',
  ]},
  { type: 'examtip', content: 'The Monroe Doctrine is tested throughout APUSH as American foreign policy evolves. Know: 1823 original (defensive), 1904 Roosevelt Corollary (interventionist), and how it was used to justify interventions in Cuba, Haiti, Nicaragua, and the Dominican Republic.' },
  { type: 'heading', content: '"corrupt bargain" of 1824 — end of era of good feelings' },
  { type: 'body', content: 'The 1824 election had four Democratic-Republican candidates; no one won an Electoral College majority. The House chose John Quincy Adams despite Andrew Jackson winning the popular vote. When Adams made Henry Clay Secretary of State (Clay had helped Adams win in the House), Jackson cried "corrupt bargain" and spent four years campaigning against Adams, winning in 1828.' },
]

export default function APUSHU4T4() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 4, title: 'era of good feelings & monroe doctrine', keyTerms: ['Era of Good Feelings', 'Missouri Compromise', 'Monroe Doctrine', '36°30\' line', 'Corrupt Bargain', 'Henry Clay', 'Roosevelt Corollary', 'sectionalism'] }}
      sections={sections}
      prev={{ href: '/apush/unit-4/3', title: 'war of 1812' }}
      next={{ href: '/apush/unit-4/5', title: 'market revolution' }}
      courseHref="/apush" unitHref="/apush/unit-4"
    />
  )
}
