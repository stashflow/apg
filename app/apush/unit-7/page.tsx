import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'muckrakers', description: 'Sinclair, Tarbell, Riis — investigative journalism exposing corruption and social problems.', videoId: 'AtyLciC2QOI' },
  { number: 2, title: 'progressive era reforms', description: 'trust-busting, 16th/17th/18th/19th amendments, and Roosevelt/Taft/Wilson.', videoId: 'AtyLciC2QOI' },
  { number: 3, title: 'spanish-american war', description: 'USS Maine, yellow journalism, Cuba, Philippines, and American imperialism begins.', videoId: 'voQvX7yPzBM' },
  { number: 4, title: 'american imperialism', description: 'Philippines debate, Platt Amendment, Open Door Policy, and Roosevelt Corollary.', videoId: 'voQvX7yPzBM' },
  { number: 5, title: 'world war i', description: 'neutrality, Zimmermann Telegram, Espionage Act, and home front propaganda.', videoId: 'yxr8hOp3fB0' },
  { number: 6, title: 'first red scare', description: 'post-WWI fear of communism, Palmer Raids, and suppression of radicals.' },
  { number: 7, title: 'roaring twenties', description: 'consumerism, Jazz Age, prohibition, fundamentalism vs modernism.', videoId: 'q0E91svp6dw' },
  { number: 8, title: 'harlem renaissance', description: 'African American cultural flowering, Hughes, Hurston, and jazz.' },
  { number: 9, title: 'immigration restrictions', description: '1924 Immigration Act, quotas, and nativist sentiment.' },
  { number: 10, title: 'great depression', description: 'causes, Hoovervilles, Dust Bowl, and Hoover\'s failed response.', videoId: 'uH3oqqHULKY' },
  { number: 11, title: 'new deal', description: 'FDR\'s relief-recovery-reform, Social Security, Wagner Act, and court-packing.', videoId: 'uH3oqqHULKY' },
  { number: 12, title: 'causes of wwii', description: 'isolationism, neutrality acts, Pearl Harbor, and entry into war.' },
  { number: 13, title: 'world war ii home front', description: 'mobilization, rationing, women workers, and propaganda.', videoId: 'e9qTxoMIXkA' },
  { number: 14, title: 'japanese american internment', description: 'Executive Order 9066, camps, Korematsu, and civil liberties violations.' },
  { number: 15, title: 'wwii turning points', description: 'D-Day, the Holocaust, atomic bomb decision, and Allied victory.', videoId: 'e9qTxoMIXkA' },
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
