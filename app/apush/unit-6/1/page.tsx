import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 6, title: 'period 6: 1865–1898' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the gilded age — industrialization & railroads' },
  { type: 'body', content: 'The term "Gilded Age" (from Mark Twain\'s 1873 novel) describes the era of rapid industrialization, enormous wealth at the top, and deep poverty below. The transcontinental railroad (completed 1869, Golden Spike at Promontory Summit, Utah) was the engine of this transformation — connecting markets, enabling resource extraction, and creating national corporations for the first time.' },
  { type: 'bullets', content: '', bullets: [
    '**Transcontinental Railroad** — Central Pacific (Chinese immigrant labor, west to east) met Union Pacific (Irish immigrant labor, east to west) in 1869; land grants to railroad companies totaled 170 million acres',
    '**Andrew Carnegie — steel** — Carnegie Steel used vertical integration (owning every step: coal mines, iron ore, ships, railroads, steel mills); by 1900 produced more steel than all of Britain',
    '**John D. Rockefeller — oil** — Standard Oil used horizontal integration (buying out or crushing all competitors); by 1880 controlled 90% of U.S. oil refining; created the modern business trust',
    '**J.P. Morgan — finance** — banker who consolidated railroads and steel; US Steel (1901, first billion-dollar corporation) was Morgan buying Carnegie Steel',
  ]},
  { type: 'heading', content: 'gospel of wealth & social darwinism' },
  { type: 'body', content: 'Carnegie\'s Gospel of Wealth (1889) argued the wealthy had a duty to use their fortunes for public benefit (libraries, universities, concert halls). Herbert Spencer applied Darwin\'s "survival of the fittest" to economics — Social Darwinism argued poverty was natural selection; helping the poor was unnatural and harmful. Both ideologies justified laissez-faire economics and opposed government regulation.' },
  { type: 'examtip', content: 'Know the difference: vertical integration (Carnegie — owning the entire production chain) vs. horizontal integration (Rockefeller — controlling all competitors in one industry). Both created monopolies; both were attacked by Progressive-era trust busters.' },
  { type: 'heading', content: 'railroad regulation' },
  { type: 'bullets', content: '', bullets: [
    '**Wabash v. Illinois (1886)** — Supreme Court ruled states could NOT regulate interstate railroads; only Congress could',
    '**Interstate Commerce Act (1887)** — created the Interstate Commerce Commission (ICC) — first federal regulatory agency; required "reasonable and just" railroad rates; largely toothless at first',
    '**Sherman Antitrust Act (1890)** — banned business combinations "in restraint of trade"; first federal antitrust law; rarely enforced until TR',
  ]},
]

export default function APUSHU6T1() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 1, title: 'industrialization & railroads', keyTerms: ['transcontinental railroad', 'vertical integration', 'horizontal integration', 'Carnegie', 'Rockefeller', 'Gospel of Wealth', 'Social Darwinism', 'Sherman Antitrust Act'] }}
      sections={sections}
      next={{ href: '/apush/unit-6/2', title: 'big business & gospel of wealth' }}
      courseHref="/apush" unitHref="/apush/unit-6"
    />
  )
}
