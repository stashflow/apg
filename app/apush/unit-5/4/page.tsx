import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 5, title: 'period 5: 1844–1877' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'kansas-nebraska act (1854)' },
  { type: 'body', content: 'Stephen Douglas needed a transcontinental railroad through Chicago (his home state of Illinois). To get Southern support for this northern route, he proposed the Kansas-Nebraska Act — organizing Kansas and Nebraska as territories with popular sovereignty. This REPEALED the Missouri Compromise\'s 36°30\' line, reopening all previously settled territory to slavery.' },
  { type: 'bullets', content: '', bullets: [
    '**Bleeding Kansas (1855–1856)** — pro-slavery and anti-slavery settlers flooded Kansas; two rival governments formed; violence erupted; John Brown massacred 5 pro-slavery settlers at Pottawatomie Creek',
    '**Sacking of Lawrence** — pro-slavery "Border Ruffians" from Missouri burned the anti-slavery stronghold Lawrence, Kansas',
    '**Sumner-Brooks Affair (1856)** — Senator Charles Sumner (MA) gave a vicious anti-slavery speech; Representative Preston Brooks (SC) beat him unconscious with a cane on the Senate floor; Southerners sent Brooks commemorative canes; Northerners were outraged',
    '**Birth of the Republican Party (1854)** — formed by anti-slavery Whigs, Northern Democrats, and Free Soilers specifically to oppose the Kansas-Nebraska Act. Lincoln joined immediately.',
  ]},
  { type: 'heading', content: 'dred scott v. sandford (1857)' },
  { type: 'body', content: 'Dred Scott, enslaved in Missouri, sued for freedom because he had lived with his enslaver in free Illinois and Wisconsin Territory. Chief Justice Roger Taney ruled: (1) Black people (enslaved or free) were NOT citizens and had no right to sue in federal court; (2) Congress had NO power to ban slavery in any territory (the Missouri Compromise and Wilmot Proviso were unconstitutional); (3) enslaved people were property protected by the 5th Amendment.' },
  { type: 'bullets', content: '', bullets: [
    'Effectively made popular sovereignty illegal — no territory could ban slavery either',
    'Outraged the entire North; Lincoln made it the centerpiece of his 1858 Senate campaign against Douglas',
    '**Lincoln-Douglas Debates (1858)** — Lincoln forced Douglas to defend popular sovereignty against Dred Scott: the "Freeport Doctrine" (Douglas: territories can effectively exclude slavery by refusing to pass slave codes) destroyed Douglas in the South',
    '14th Amendment (1868) directly overturned Dred Scott by defining citizenship to include "all persons born or naturalized in the United States"',
  ]},
  { type: 'examtip', content: 'Dred Scott is the worst Supreme Court decision in U.S. history. Know all three holdings. Know that it made the Civil War nearly inevitable by closing every constitutional path to limiting slavery\'s expansion.' },
]

export default function APUSHU5T4() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 4, title: 'kansas-nebraska act & dred scott', keyTerms: ['Kansas-Nebraska Act', 'Bleeding Kansas', 'Dred Scott', 'Taney', 'Republican Party', 'John Brown', 'Lincoln-Douglas Debates', 'Freeport Doctrine'] }}
      sections={sections}
      prev={{ href: '/apush/unit-5/3', title: 'compromise of 1850' }}
      next={{ href: '/apush/unit-5/5', title: 'lincoln & causes of the civil war' }}
      courseHref="/apush" unitHref="/apush/unit-5"
    />
  )
}
