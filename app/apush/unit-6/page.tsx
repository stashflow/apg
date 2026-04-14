import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'industrialization & railroads', description: 'transcontinental railroad, steel industry, Carnegie\'s vertical integration.', videoId: 'D4UODSDFXn4' },
  { number: 2, title: 'big business & social darwinism', description: 'Rockefeller\'s Standard Oil, trusts, Gospel of Wealth, and laissez-faire ideology.', videoId: 'D4UODSDFXn4' },
  { number: 3, title: 'labor unions', description: 'Knights of Labor, AFL, Haymarket, Pullman Strike, and capital vs labor tensions.', videoId: 'D4UODSDFXn4' },
  { number: 4, title: 'new immigration', description: 'Southern/Eastern European immigrants, tenements, nativism, and ethnic enclaves.', videoId: 'D4UODSDFXn4' },
  { number: 5, title: 'chinese exclusion act', description: '1882 law, anti-Asian racism, and restricting immigration based on nationality.' },
  { number: 6, title: 'urbanization', description: 'growth of cities, tenements, settlement houses, and the Social Gospel movement.' },
  { number: 7, title: 'political machines', description: 'Tammany Hall, Boss Tweed, spoils system, and urban political corruption.', videoId: 'Sem1R0g2BGg' },
  { number: 8, title: 'gilded age politics', description: 'Pendleton Act, civil service reform, and Plessy v. Ferguson.', videoId: 'Sem1R0g2BGg' },
  { number: 9, title: 'dawes act', description: '1887 attempt to assimilate Native Americans, allotment policy, and destruction of tribal lands.' },
  { number: 10, title: 'sherman antitrust act', description: '1890 law against monopolies, limited enforcement, and its later significance.' },
  { number: 11, title: 'populist movement', description: 'Farmers\' Alliance, Omaha Platform, free silver, and Bryan\'s Cross of Gold.', videoId: 'Sem1R0g2BGg' },
]

export default function APUSHUnit6Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 6, title: 'period 6: 1865–1898', examWeight: '10–17%', description: 'industrialization, immigration, labor struggles, and the birth of modern corporate America.' }}
      topics={topics}
      basePath="/apush/unit-6"
      courseHref="/apush"
      videoId="OHT4CJktvY0"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
