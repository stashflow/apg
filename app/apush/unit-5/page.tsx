import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'manifest destiny', description: 'the ideology of westward expansion, Polk\'s aggressive policy, Oregon Territory, and Texas annexation.' },
  { number: 2, title: 'mexican-american war', description: 'causes, key battles, Treaty of Guadalupe Hidalgo, the Wilmot Proviso, and the slavery question it reopened.' },
  { number: 3, title: 'compromise of 1850', description: 'Clay\'s package deal, California as free state, strengthened Fugitive Slave Act, and its fragile peace.' },
  { number: 4, title: 'kansas-nebraska act & dred scott', description: 'popular sovereignty, Bleeding Kansas, the birth of the Republican Party, and Dred Scott v. Sandford (1857).' },
  { number: 5, title: 'lincoln & causes of the civil war', description: 'Lincoln\'s election, Southern secession, Confederate formation, and the fundamental causes of the war.' },
  { number: 6, title: 'civil war turning points', description: 'Antietam, Emancipation Proclamation, Gettysburg, Sherman\'s March, and the Union\'s strategic advantages.' },
  { number: 7, title: 'reconstruction', description: 'Lincoln\'s 10%, Radical Reconstruction, scalawags, carpetbaggers, Black Codes, and the Freedmen\'s Bureau.' },
  { number: 8, title: '13th, 14th & 15th amendments', description: 'abolition, citizenship & equal protection, and voting rights — plus the Compromise of 1877 that ended Reconstruction.' },
]

export default function APUSHUnit5Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 5, title: 'period 5: 1844–1877', examWeight: '10–17%', description: 'manifest destiny, civil war, and reconstruction — the most consequential decades in American history.' }}
      topics={topics}
      basePath="/apush/unit-5"
      courseHref="/apush"
      videoId="MccUPVz1V2I"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
