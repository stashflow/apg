import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'manifest destiny', description: 'ideology of westward expansion, Polk\'s policy, Oregon Territory, and Texas annexation.', videoId: 'kdEW2C-6YEY' },
  { number: 2, title: 'mexican-american war', description: 'causes, Treaty of Guadalupe Hidalgo, Wilmot Proviso, and the slavery question reopened.', videoId: 'kdEW2C-6YEY' },
  { number: 3, title: 'compromise of 1850', description: 'Clay\'s package deal, California as free state, Fugitive Slave Act, and escalating tensions.', videoId: 'Z05HrH1wsMo' },
  { number: 4, title: 'kansas-nebraska act & dred scott', description: 'popular sovereignty, Bleeding Kansas, the 1857 ruling, and birth of the Republican Party.', videoId: 'Z05HrH1wsMo' },
  { number: 5, title: 'lincoln & causes of the civil war', description: 'election of 1860, southern secession, Fort Sumter, and the road to war.' },
  { number: 6, title: 'civil war turning points', description: 'Antietam, Emancipation Proclamation, Gettysburg, Sherman\'s March, and Union victory.', videoId: 'EFE3LKjl6p4' },
  { number: 7, title: 'reconstruction', description: 'Freedmen\'s Bureau, Radical Reconstruction, Black Codes, KKK, and Compromise of 1877.', videoId: 'lyOwnLtQGeo' },
  { number: 8, title: '13th, 14th & 15th amendments', description: 'abolition, citizenship, equal protection, voting rights, and how the South circumvented them.', videoId: 'lyOwnLtQGeo' },
]

export default function APUSHUnit5Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 5, title: 'period 5: 1844–1877', examWeight: '10–17%', description: 'manifest destiny, civil war, and reconstruction — the most consequential decades in American history.' }}
      topics={topics}
      basePath="/apush/unit-5"
      courseHref="/apush"
      videoId="kdEW2C-6YEY"
      examDate={{ date: 'Friday, May 8, 2026', time: '8:00 AM' }}
    />
  )
}
