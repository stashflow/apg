import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'progressive era', description: 'muckrakers (Sinclair, Tarbell), trust-busting, 16th/17th/18th/19th amendments, and the Roosevelt/Taft/Wilson presidencies.' },
  { number: 2, title: 'imperialism', description: 'Spanish-American War, Philippines debate, Platt Amendment, Open Door Policy, and Roosevelt Corollary.' },
  { number: 3, title: 'world war i', description: 'assassination of Franz Ferdinand, U.S. neutrality, Zimmermann Telegram, Committee on Public Information, Espionage Act.' },
  { number: 4, title: 'roaring twenties', description: 'consumerism, Harlem Renaissance, Jazz Age, prohibition, fundamentalism vs. modernism, and nativism.' },
  { number: 5, title: 'great depression', description: 'causes (overproduction, credit, tariffs), Hoovervilles, Dust Bowl, unemployment, and Hoover\'s failed response.' },
  { number: 6, title: 'new deal', description: 'FDR\'s relief-recovery-reform programs, TVA, Social Security, court-packing, and labor\'s rise (Wagner Act).' },
  { number: 7, title: 'world war ii', description: 'Pearl Harbor, home front mobilization, Japanese internment, D-Day, the Holocaust, and the atomic bomb decision.' },
]

export default function APUSHUnit7Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 7, title: 'period 7: 1890–1945', examWeight: '10–17%', description: 'progressive reform, two world wars, the depression, and the New Deal — a half-century of upheaval.' }}
      topics={topics}
      basePath="/apush/unit-7"
      courseHref="/apush"
      videoId="qSJiXsw-xMU"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
