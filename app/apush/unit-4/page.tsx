import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'jefferson presidency', description: '"Revolution of 1800," strict construction, Marbury v. Madison, and judicial review.', videoId: 'UiRjVdkDUxM' },
  { number: 2, title: 'louisiana purchase', description: 'Napoleon\'s sale, constitutional questions, Lewis & Clark, and territorial expansion.', videoId: 'UiRjVdkDUxM' },
  { number: 3, title: 'war of 1812', description: 'impressment, War Hawks, burning of D.C., Treaty of Ghent, and surge of nationalism.', videoId: '264dGFXJiX8' },
  { number: 4, title: 'era of good feelings & monroe doctrine', description: 'one-party rule, Missouri Compromise, American System, and Monroe Doctrine.', videoId: '264dGFXJiX8' },
  { number: 5, title: 'market revolution', description: 'industrialization, canals, railroads, factory system, and changing gender roles.', videoId: 'FOQ0M-UZ_II' },
  { number: 6, title: 'jacksonian democracy', description: 'spoils system, nullification crisis, Bank War, and expanded white male suffrage.', videoId: 'ompD7J2pqUw' },
  { number: 7, title: 'indian removal act', description: 'Trail of Tears, Worcester v. Georgia, and Jackson\'s defiance of the Supreme Court.', videoId: 'ompD7J2pqUw' },
  { number: 8, title: 'second great awakening & reform movements', description: 'religious revivals, abolitionism, Seneca Falls, and antebellum reform impulse.', videoId: 'FOQ0M-UZ_II' },
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
      examDate={{ date: 'Friday, May 8, 2026', time: '8:00 AM' }}
    />
  )
}
