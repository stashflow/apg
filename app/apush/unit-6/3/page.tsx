import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 6, title: 'period 6: 1865–1898' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'labor conditions in the gilded age' },
  { type: 'body', content: 'Industrial workers in the Gilded Age faced 12–14 hour workdays, 6–7 day weeks, dangerous conditions with no compensation for injury, child labor, and wages that could be cut at the employer\'s discretion. There were no unions, no minimum wage, no workplace safety laws, and no workers\' compensation. Workers who complained were fired and blacklisted.' },
  { type: 'table', content: '', tableHeaders: ['union', 'founded', 'approach', 'outcome'],
    tableRows: [
      ['Knights of Labor', '1869', 'Industrial unionism — all workers regardless of skill, race, gender; demanded 8-hour day, end of child labor', 'Peaked at 700,000 members (1886); collapsed after Haymarket Affair association'],
      ['American Federation of Labor (AFL)', '1886', 'Craft unionism — skilled workers only; "pure and simple" unionism: higher wages, shorter hours, not political revolution', 'Survived and grew; Samuel Gompers led until 1924; excluded unskilled/Black workers'],
      ['Industrial Workers of the World (IWW)', '1905', '"Big Bill" Haywood; radical industrial unionism; wanted to overthrow capitalism', 'Suppressed during WWI; never large but influential on labor left'],
    ]
  },
  { type: 'heading', content: 'key labor conflicts' },
  { type: 'bullets', content: '', bullets: [
    '**Great Railroad Strike (1877)** — first major national strike; workers struck against wage cuts; 100+ killed when Hayes sent federal troops; showed government would use force against labor',
    '**Haymarket Affair (1886)** — labor rally in Chicago; anarchist threw a bomb; 8 police died; Knights of Labor blamed despite no evidence; 4 anarchists executed; set back labor movement for years',
    '**Homestead Strike (1892)** — Carnegie Steel workers struck against wage cuts; Pinkerton agents hired as strikebreakers; gun battle killed 10; Pennsylvania National Guard broke strike; destroyed steel union for 40 years',
    '**Pullman Strike (1894)** — railroad workers struck against wage cuts; Eugene V. Debs led American Railway Union in sympathy boycott; shut down national rail system; Cleveland sent federal troops over Illinois Governor\'s objection; Debs jailed; Sherman Antitrust Act used against the union (not corporations)',
  ]},
  { type: 'examtip', content: 'Pattern to know: every major Gilded Age strike was broken by government force (troops, injunctions, arrests). Courts used the Sherman Antitrust Act against unions more than against corporations. This is why labor turned to politics: the AFL supported progressive candidates, and eventually the New Deal.' },
]

export default function APUSHU6T3() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 3, title: 'labor unions', keyTerms: ['Knights of Labor', 'AFL', 'Gompers', 'Haymarket', 'Homestead Strike', 'Pullman Strike', 'Debs', 'craft vs industrial unionism'] }}
      sections={sections}
      prev={{ href: '/apush/unit-6/2', title: 'big business & gospel of wealth' }}
      next={{ href: '/apush/unit-6/4', title: 'immigration & urbanization' }}
      courseHref="/apush" unitHref="/apush/unit-6"
    />
  )
}
