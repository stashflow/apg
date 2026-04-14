import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'reagan revolution', description: 'supply-side economics, deregulation, Reaganomics, and resurgence of conservatism.' },
  { number: 2, title: 'end of cold war', description: 'fall of the Berlin Wall, USSR dissolution, and American triumphalism.' },
  { number: 3, title: 'globalization', description: 'NAFTA, WTO, outsourcing, and debates over free trade.' },
  { number: 4, title: 'technology & internet', description: 'digital revolution, social media, and transformation of communication.' },
  { number: 5, title: '9/11 & war on terror', description: 'September 11, PATRIOT Act, Afghanistan, Iraq War, and civil liberties.' },
  { number: 6, title: 'great recession', description: '2008 financial crisis, housing bubble, bank bailouts, and economic inequality.' },
  { number: 7, title: 'immigration debates', description: 'DACA, border security, and ongoing controversies over immigration policy.' },
  { number: 8, title: 'modern social movements', description: 'Black Lives Matter, #MeToo, marriage equality, and Obergefell.' },
  { number: 9, title: 'political polarization', description: 'culture wars, partisan media, Tea Party, and ideological divisions.' },
  { number: 10, title: 'supreme court landmark cases', description: 'Marbury, McCulloch, Dred Scott, Plessy, Brown, Miranda, Roe, Bush v. Gore.' },
  { number: 11, title: 'dbq, leq & saq practice', description: 'DBQ strategies, LEQ thesis writing, SAQ precision, and scoring rubrics.', videoId: '3JVrLMpzBIQ' },
]

export default function APUSHUnit9Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 9, title: 'period 9: 1980–present', examWeight: '4–6%', description: 'conservatism\'s rise, the end of the cold war, 9/11, and essay mastery for every APUSH FRQ format.' }}
      topics={topics}
      basePath="/apush/unit-9"
      courseHref="/apush"

      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
