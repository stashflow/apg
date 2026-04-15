import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'progressive era', description: 'muckrakers, trust-busting, 16th/17th/18th/19th amendments, Roosevelt/Taft/Wilson.', videoId: 'AtyLciC2QOI' },
  { number: 2, title: 'imperialism', description: 'Spanish-American War, Philippines, Platt Amendment, Open Door Policy, and Roosevelt Corollary.', videoId: 'voQvX7yPzBM' },
  { number: 3, title: 'world war i', description: 'neutrality, Zimmermann Telegram, Espionage Act, home front, and Treaty of Versailles.', videoId: 'yxr8hOp3fB0' },
  { number: 4, title: 'roaring twenties', description: 'consumerism, Jazz Age, Prohibition, Harlem Renaissance, KKK revival, and immigration restrictions.', videoId: 'q0E91svp6dw' },
  { number: 5, title: 'great depression', description: 'Black Tuesday, Smoot-Hawley, Hoovervilles, Dust Bowl, and Hoover\'s failed response.', videoId: 'uH3oqqHULKY' },
  { number: 6, title: 'new deal', description: 'FDR\'s relief-recovery-reform, CCC, TVA, Social Security, Wagner Act, and court-packing.', videoId: 'uH3oqqHULKY' },
  { number: 7, title: 'world war ii', description: 'Pearl Harbor, internment, Lend-Lease, D-Day, Holocaust, and the atomic bomb decision.', videoId: 'e9qTxoMIXkA' },
]

export default function APUSHUnit7Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 7, title: 'period 7: 1890–1945', examWeight: '10–17%', description: 'progressive reform, two world wars, the depression, and the New Deal — a half-century of upheaval.' }}
      topics={topics}
      basePath="/apush/unit-7"
      courseHref="/apush"
      videoId="EDAb7_EIXzM"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
