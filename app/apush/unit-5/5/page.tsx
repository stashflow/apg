import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 5, title: 'period 5: 1844–1877' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'lincoln\'s election & southern secession (1860–1861)' },
  { type: 'body', content: 'Lincoln won the 1860 election with ZERO Southern electoral votes — the first purely sectional presidential victory. He won entirely on Northern votes, not needing the South at all. This proved to Southern leaders that they were a permanent political minority; they could never again elect a president or control Congress. Secession began before Lincoln was even inaugurated.' },
  { type: 'table', content: '', tableHeaders: ['candidate', 'party', 'section', 'result'],
    tableRows: [
      ['Abraham Lincoln', 'Republican', 'North only', 'Won — 180 electoral votes, 40% popular'],
      ['Stephen Douglas', 'Northern Democrat', 'North + border', '12 electoral votes — split the Democratic vote'],
      ['John Breckinridge', 'Southern Democrat', 'Deep South', '72 electoral votes'],
      ['John Bell', 'Constitutional Union', 'Border states', '39 electoral votes'],
    ]
  },
  { type: 'heading', content: 'causes of the civil war' },
  { type: 'bullets', content: '', bullets: [
    '**Slavery** — the fundamental, root cause; every other issue traces back to slavery\'s expansion, protection, and the economic system built on it',
    '**Sectionalism** — economic, cultural, and political differences between North (industrial, wage labor) and South (agricultural, slave labor) deepened over 40 years',
    '**States\' rights** — Southern argument that states could nullify federal law and ultimately secede; used to PROTECT slavery',
    '**Failure of compromise** — Missouri Compromise (1820), Compromise of 1850 both failed; by 1860 no middle ground existed',
    '**John Brown\'s Raid (1859)** — Brown attacked Harper\'s Ferry federal arsenal to trigger a slave rebellion; hanged as a traitor; Northern moderates called him a martyr; terrified Southern slaveholders that the North would foment insurrection',
  ]},
  { type: 'heading', content: 'secession & fort sumter' },
  { type: 'body', content: 'South Carolina seceded December 20, 1860. By February 1861, seven Deep South states formed the Confederate States of America (Davis as president). Lincoln refused to recognize secession and refused to abandon Fort Sumter. Confederate forces bombarded Sumter on April 12–13, 1861. Lincoln called for 75,000 volunteers; four more states (Virginia, Arkansas, Tennessee, North Carolina) seceded. The Civil War had begun.' },
  { type: 'examtip', content: 'APUSH expects you to name slavery as the primary cause of the Civil War — not "states\' rights" in isolation (which was used to protect slavery). The College Board\'s Course Framework explicitly states this. Never write "states\' rights" as if it were separate from slavery.' },
]

export default function APUSHU5T5() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 5, title: 'lincoln & causes of the civil war', keyTerms: ['secession', 'Confederate States of America', 'Fort Sumter', 'John Brown', 'Harper\'s Ferry', 'sectionalism', 'states\' rights', '1860 election'] }}
      sections={sections}
      prev={{ href: '/apush/unit-5/4', title: 'kansas-nebraska act & dred scott' }}
      next={{ href: '/apush/unit-5/6', title: 'civil war turning points' }}
      courseHref="/apush" unitHref="/apush/unit-5"
    />
  )
}
