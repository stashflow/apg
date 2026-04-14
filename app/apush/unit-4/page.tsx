import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'jefferson presidency', description: '"Revolution of 1800," strict construction, reducing federal power, Marbury v. Madison, and judicial review.' },
  { number: 2, title: 'louisiana purchase', description: 'Napoleon\'s sale, constitutional questions, Lewis & Clark, and the expansion of American territory.' },
  { number: 3, title: 'war of 1812', description: 'impressment, War Hawks, battles, the burning of D.C., Treaty of Ghent, and the surge of nationalism afterward.' },
  { number: 4, title: 'era of good feelings & monroe doctrine', description: 'one-party rule, Missouri Compromise, and Monroe\'s warning against European intervention in the Americas.' },
  { number: 5, title: 'market revolution', description: 'industrialization, canals, railroads, new middle class, changing gender roles, and the factory system.' },
  { number: 6, title: 'jacksonian democracy', description: 'spoils system, expanded white male suffrage, nullification crisis, and the Bank War (BUS vs. Jackson).' },
  { number: 7, title: 'indian removal act', description: 'forced relocation of southeastern tribes, the Trail of Tears, Worcester v. Georgia, and Jackson\'s defiance.' },
  { number: 8, title: 'second great awakening & reform movements', description: 'abolitionism (Garrison, Douglass), women\'s rights (Seneca Falls 1848), temperance, and utopian communities.' },
]

export default function APUSHUnit4Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 4, title: 'period 4: 1800–1848', examWeight: '10–17%', description: 'early republic, westward expansion, democracy\'s expansion, and the seeds of sectional conflict.' }}
      topics={topics}
      basePath="/apush/unit-4"
      courseHref="/apush"
      videoId="6_rR4t1D4G4"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
