import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'jefferson presidency', description: '"Revolution of 1800," strict construction, Marbury v. Madison, and judicial review.', videoId: 'UiRjVdkDUxM' },
  { number: 2, title: 'marshall court decisions', description: 'McCulloch v. Maryland, Gibbons v. Ogden, and expanding federal power through the courts.' },
  { number: 3, title: 'louisiana purchase', description: 'Napoleon\'s sale, constitutional questions, Lewis & Clark, and territorial expansion.', videoId: 'UiRjVdkDUxM' },
  { number: 4, title: 'war of 1812', description: 'impressment, War Hawks, burning of D.C., Treaty of Ghent, and surge of nationalism.', videoId: '264dGFXJiX8' },
  { number: 5, title: 'era of good feelings', description: 'one-party rule, American System, and short-lived national unity.', videoId: '264dGFXJiX8' },
  { number: 6, title: 'missouri compromise', description: '1820 compromise, 36°30\' line, maintaining balance between free and slave states.' },
  { number: 7, title: 'monroe doctrine', description: 'warning against European intervention in the Americas and American hemispheric dominance.' },
  { number: 8, title: 'market revolution', description: 'industrialization, canals, railroads, factory system, and changing gender roles.', videoId: 'FOQ0M-UZ_II' },
  { number: 9, title: 'rise of sectionalism', description: 'North vs South economic differences, tariff debates, and growing regional tensions.' },
  { number: 10, title: 'jacksonian democracy', description: 'spoils system, expanded white male suffrage, and the Bank War.', videoId: 'ompD7J2pqUw' },
  { number: 11, title: 'nullification crisis', description: 'South Carolina\'s challenge to federal authority, Calhoun vs Jackson, and states\' rights.' },
  { number: 12, title: 'indian removal act', description: 'Trail of Tears, Worcester v. Georgia, and Jackson\'s defiance of the Supreme Court.', videoId: 'ompD7J2pqUw' },
  { number: 13, title: 'second great awakening', description: 'religious revivals, reform impulse, and moral perfectionism.', videoId: 'FOQ0M-UZ_II' },
  { number: 14, title: 'abolitionism', description: 'Garrison, Douglass, Uncle Tom\'s Cabin, and the antislavery movement.' },
  { number: 15, title: 'women\'s rights & seneca falls', description: '1848 convention, Declaration of Sentiments, and early feminism.' },
  { number: 16, title: 'transcendentalism', description: 'Emerson, Thoreau, civil disobedience, and American individualism.' },
]

export default function APUSHUnit4Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 4, title: 'period 4: 1800–1848', examWeight: '10–17%', description: 'early republic, westward expansion, democracy\'s expansion, and the seeds of sectional conflict.' }}
      topics={topics}
      basePath="/apush/unit-4"
      courseHref="/apush"
      videoId="FOQ0M-UZ_II"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
