import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'industrialization & railroads', description: 'transcontinental railroad, steel industry, Carnegie\'s vertical integration, and Sherman Antitrust Act.', videoId: 'D4UODSDFXn4' },
  { number: 2, title: 'big business & gospel of wealth', description: 'Rockefeller\'s Standard Oil, trusts, Social Darwinism, and laissez-faire ideology.', videoId: 'D4UODSDFXn4' },
  { number: 3, title: 'labor unions', description: 'Knights of Labor, AFL, Haymarket, Pullman Strike, and capital vs labor tensions.', videoId: 'D4UODSDFXn4' },
  { number: 4, title: 'immigration & urbanization', description: 'Southern/Eastern European immigrants, tenements, Tammany Hall, Jacob Riis, and Chinese Exclusion Act.', videoId: 'D4UODSDFXn4' },
  { number: 5, title: 'gilded age politics', description: 'Pendleton Act, civil service reform, Jim Crow, Plessy v. Ferguson, Booker T. Washington, and Du Bois.', videoId: 'Sem1R0g2BGg' },
  { number: 6, title: 'populist movement', description: 'Farmers\' Alliance, Omaha Platform, free silver, and Bryan\'s Cross of Gold.', videoId: 'Sem1R0g2BGg' },
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
