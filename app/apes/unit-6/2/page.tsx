import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'global energy consumption',
  },
  {
    type: 'body',
    content: 'world energy consumption has increased dramatically since the Industrial Revolution and continues to grow. understanding the current energy mix is essential for addressing climate change.',
  },
  {
    type: 'subheading',
    content: 'current global energy mix',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**oil** — ~31% of global primary energy (transportation, petrochemicals)',
      '**coal** — ~27% (electricity generation, steel production)',
      '**natural gas** — ~24% (electricity, heating, industry)',
      '**renewables** — ~13% (hydro, wind, solar, biomass)',
      '**nuclear** — ~5% (electricity generation)',
    ],
  },
  {
    type: 'examtip',
    content: 'fossil fuels supply ~80% of world energy. this number hasn\'t changed much in decades — renewables are growing fast but so is total energy demand. on the exam, always acknowledge that the transition away from fossil fuels is challenging.',
  },
  {
    type: 'heading',
    content: 'energy by sector',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**electricity generation** — largest sector, powered mainly by coal, gas, nuclear, hydro',
      '**transportation** — almost entirely oil-based (gasoline, diesel, jet fuel)',
      '**industry** — coal and gas for heat, electricity for machinery',
      '**residential/commercial** — heating, cooling, lighting, appliances',
    ],
  },
  {
    type: 'heading',
    content: 'energy use by country',
  },
  {
    type: 'subheading',
    content: 'developed vs developing countries',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**developed nations** — high per capita energy use; relatively stable or declining',
      '**developing nations** — lower per capita use but rapidly growing as economies expand',
      '**US** — ~17% of world energy with 4% of population; very high per capita use',
      '**China** — largest total energy consumer; rapidly increasing',
      '**India** — fast-growing; still low per capita but rising quickly',
    ],
  },
  {
    type: 'subheading',
    content: 'energy inequality',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**~770 million people** lack electricity access (mostly sub-Saharan Africa)',
      '**~2.6 billion** cook with traditional biomass (wood, dung, charcoal)',
      '**energy poverty** — lack of access limits economic development and health',
      '**ethical tension** — developing nations need energy but climate limits global emissions',
    ],
  },
  {
    type: 'heading',
    content: 'historical trends',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**pre-industrial** — biomass (wood) was primary energy source',
      '**19th century** — coal replaced wood during Industrial Revolution',
      '**20th century** — oil and gas rose to dominance',
      '**21st century** — renewables growing but fossil fuels still dominant',
      '**energy transitions are slow** — take 50-100 years historically',
    ],
  },
  {
    type: 'heading',
    content: 'peak oil',
  },
  {
    type: 'body',
    content: 'peak oil is the point when global oil production reaches its maximum and begins to decline.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Hubbert\'s peak** — M. King Hubbert predicted US oil would peak in 1970 (correct)',
      '**conventional oil** — many believe conventional crude peaked around 2008',
      '**unconventional oil** — fracking, tar sands, deepwater extended production',
      '**implications** — rising prices, energy insecurity, motivation for alternatives',
      '**climate perspective** — we may choose to leave oil in the ground before it runs out',
    ],
  },
  {
    type: 'heading',
    content: 'energy security',
  },
  {
    type: 'body',
    content: 'energy security refers to reliable, affordable access to energy supplies.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**import dependence** — US historically imported 50%+ of oil; now net exporter due to fracking',
      '**geopolitical risks** — oil concentrated in Middle East, Russia, Venezuela',
      '**price volatility** — oil prices swing wildly based on supply/demand and politics',
      '**domestic production** — reduces dependence but has environmental costs',
      '**diversification** — multiple energy sources and suppliers improve security',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs about global energy often ask you to compare developed vs developing countries or explain why transitioning away from fossil fuels is difficult. discuss: established infrastructure, energy density, reliability, cost, and that developing nations need energy to grow.',
  },
]

export default function APESU6T2() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 6, title: 'energy resources & consumption' }}
      topic={{
        number: 2,
        title: 'global energy use',
        keyTerms: ['energy mix', 'per capita', 'energy poverty', 'peak oil', 'energy security', 'Hubbert'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-6/1', title: 'fossil fuels' }}
      next={{ href: '/apes/unit-6/3', title: 'solar energy' }}
      courseHref="/apes"
      unitHref="/apes/unit-6"
    />
  )
}
