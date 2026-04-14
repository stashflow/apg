import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'manifest destiny', description: 'ideology of westward expansion, Polk\'s policy, Oregon Territory, and Texas annexation.', videoId: 'kdEW2C-6YEY' },
  { number: 2, title: 'mexican-american war', description: 'causes, Treaty of Guadalupe Hidalgo, Wilmot Proviso, and the slavery question reopened.', videoId: 'kdEW2C-6YEY' },
  { number: 3, title: 'compromise of 1850', description: 'Clay\'s package deal, California as free state, and strengthened Fugitive Slave Act.', videoId: 'Z05HrH1wsMo' },
  { number: 4, title: 'fugitive slave act', description: 'northern resistance, personal liberty laws, and escalating sectional tensions.' },
  { number: 5, title: 'underground railroad', description: 'Harriet Tubman, escape networks, and northern complicity in aiding runaways.' },
  { number: 6, title: 'uncle tom\'s cabin', description: 'Harriet Beecher Stowe\'s novel, northern antislavery sentiment, and southern outrage.' },
  { number: 7, title: 'kansas-nebraska act', description: 'popular sovereignty, Bleeding Kansas, and the birth of the Republican Party.', videoId: 'Z05HrH1wsMo' },
  { number: 8, title: 'dred scott decision', description: '1857 ruling, denial of Black citizenship, and invalidation of Missouri Compromise.' },
  { number: 9, title: 'election of 1860', description: 'Lincoln\'s victory, southern secession, and Confederate formation.', videoId: 'wG4AGwahQho' },
  { number: 10, title: 'civil war turning points', description: 'Antietam, Gettysburg, Sherman\'s March, and Union\'s strategic advantages.', videoId: 'EFE3LKjl6p4' },
  { number: 11, title: 'emancipation proclamation', description: 'Lincoln\'s 1863 order, freeing slaves in rebel states, and changing war aims.' },
  { number: 12, title: 'reconstruction plans', description: 'Lincoln\'s 10%, Johnson\'s lenient plan, and Radical Republican approach.', videoId: 'lyOwnLtQGeo' },
  { number: 13, title: 'black codes & sharecropping', description: 'southern attempts to control freed people, economic exploitation, and new forms of bondage.' },
  { number: 14, title: '13th, 14th & 15th amendments', description: 'abolition, citizenship, equal protection, and voting rights.', videoId: 'lyOwnLtQGeo' },
  { number: 15, title: 'compromise of 1877', description: 'disputed election, end of Reconstruction, and withdrawal of federal troops from the South.' },
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
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
