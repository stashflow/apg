import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'reagan revolution', description: 'Reaganomics, supply-side economics, deregulation, Iran-Contra, Moral Majority, and New Right.', videoId: '3JVrLMpzBIQ' },
  { number: 2, title: 'end of cold war & globalization', description: 'Berlin Wall, USSR dissolution, Gulf War, NAFTA, WTO, and dot-com boom.' },
  { number: 3, title: '9/11 & war on terror', description: 'September 11, PATRIOT Act, Bush Doctrine, Afghanistan, Iraq War, and civil liberties.' },
  { number: 4, title: 'modern political polarization', description: 'culture wars, Contract with America, Clinton impeachment, Tea Party, and Citizens United.' },
  { number: 5, title: 'supreme court landmark cases', description: 'Marbury, McCulloch, Dred Scott, Plessy, Brown, Miranda, Roe, Korematsu, and Obergefell.' },
  { number: 6, title: 'dbq, leq & saq practice', description: 'DBQ strategies, LEQ thesis writing, SAQ precision, HAPP sourcing, and scoring rubrics.', videoId: '3JVrLMpzBIQ' },
]

export default function APUSHUnit9Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 9, title: 'period 9: 1980–present', examWeight: '4–6%', description: 'conservatism\'s rise, the end of the cold war, 9/11, and essay mastery for every APUSH FRQ format.' }}
      topics={topics}
      basePath="/apush/unit-9"
      courseHref="/apush"

      examDate={{ date: 'Friday, May 8, 2026', time: '8:00 AM' }}
    />
  )
}
