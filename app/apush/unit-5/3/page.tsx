import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 5, title: 'period 5: 1844–1877' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'compromise of 1850' },
  { type: 'body', content: 'The crisis of 1850 nearly ended the Union. California applied as a free state (Senate balance: 15 free, 15 slave). Southern senators threatened secession. Henry Clay (Kentucky), the "Great Compromiser," engineered a package deal that Stephen Douglas (Illinois) pushed through Congress after Clay collapsed from exhaustion.' },
  { type: 'table', content: '', tableHeaders: ['provision', 'who benefited'],
    tableRows: [
      ['California admitted as a FREE state', 'North'],
      ['New Mexico and Utah organized with popular sovereignty (voters decide slavery)', 'South — chance to expand'],
      ['Slave TRADE abolished in Washington D.C. (not slavery itself)', 'North'],
      ['Strengthened Fugitive Slave Act — Northerners MUST help capture escaped slaves', 'South'],
      ['Texas-New Mexico border settled; Texas paid $10M for giving up land claims', 'Both'],
    ]
  },
  { type: 'heading', content: 'fugitive slave act — northern backlash' },
  { type: 'body', content: 'The strengthened Fugitive Slave Act (1850) required all citizens — even in free states — to assist in capturing escaped enslaved people. Federal commissioners were paid $10 if they ruled someone was a slave, $5 if they freed them. Accused people could not testify in their own defense. This outraged Northern moderates who had no strong feelings about Southern slavery but deeply resented being forced to participate in it.' },
  { type: 'bullets', content: '', bullets: [
    '**Personal liberty laws** — Northern states passed laws forbidding their officials from enforcing the Fugitive Slave Act; Southern states cited this as a constitutional violation',
    '**Harriet Beecher Stowe, Uncle Tom\'s Cabin (1852)** — sold 300,000 copies in first year; humanized enslaved people for Northern readers; Lincoln allegedly called Stowe "the little woman who wrote the book that started this great war"',
    '**Underground Railroad intensified** — Harriet Tubman\'s most active years; Quaker and free Black communities organized escape routes',
  ]},
  { type: 'examtip', content: 'The Fugitive Slave Act is what turned many Northern moderates against slavery — not moral objection to slavery in the South, but the demand that they personally participate in it. This is why Uncle Tom\'s Cabin mattered: it made the human cost of the Fugitive Slave Act emotionally real.' },
]

export default function APUSHU5T3() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 3, title: 'compromise of 1850', keyTerms: ['Compromise of 1850', 'Fugitive Slave Act', 'popular sovereignty', 'Henry Clay', 'Stephen Douglas', 'Uncle Tom\'s Cabin', 'personal liberty laws', 'Harriet Beecher Stowe'] }}
      sections={sections}
      prev={{ href: '/apush/unit-5/2', title: 'mexican-american war' }}
      next={{ href: '/apush/unit-5/4', title: 'kansas-nebraska act & dred scott' }}
      courseHref="/apush" unitHref="/apush/unit-5"
    />
  )
}
