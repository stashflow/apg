import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'industrialization & railroads', description: 'transcontinental railroad, steel industry, Carnegie\'s vertical integration, and the transformation of the economy.', videoId: 'PxqHsPGIKOc' },
  { number: 2, title: 'big business & gospel of wealth', description: 'Rockefeller\'s Standard Oil, horizontal integration, trusts, Social Darwinism, and Carnegie\'s philanthropy rationale.', videoId: 'KmCGe7JBYoo' },
  { number: 3, title: 'labor unions', description: 'Knights of Labor, AFL, Haymarket Affair, Pullman Strike, and the tension between capital and labor.', videoId: 'V8XGQE0vPas' },
  { number: 4, title: 'immigration & urbanization', description: 'new immigration (Southern/Eastern Europe), tenements, political machines, nativism, and Chinese Exclusion Act.', videoId: 'gugrTFotQi8' },
  { number: 5, title: 'gilded age politics', description: 'political machines (Tammany Hall), spoils system, civil service reform (Pendleton Act), and Plessy v. Ferguson.', videoId: 'XPqI4pOzuFY' },
  { number: 6, title: 'populist movement', description: 'Farmers\' Alliance, Omaha Platform, free silver debate, Bryan\'s Cross of Gold speech, and populism\'s legacy.', videoId: 'hfJFm4mBx0E' },
]

export default function APUSHUnit6Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 6, title: 'period 6: 1865–1898', examWeight: '10–17%', description: 'industrialization, immigration, labor struggles, and the birth of modern corporate America.' }}
      topics={topics}
      basePath="/apush/unit-6"
      courseHref="/apush"
      videoId="h36PX_zM5V4"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
