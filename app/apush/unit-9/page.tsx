import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'reagan revolution', description: 'supply-side economics, deregulation, Reaganomics, Iran-Contra, and the resurgence of American conservatism.', videoId: 'sUV9-QUiRV0' },
  { number: 2, title: 'end of cold war & globalization', description: 'fall of the Berlin Wall, USSR dissolution, NAFTA, WTO, and debates over America\'s global role.', videoId: 'Qa8AhSd-xZ8' },
  { number: 3, title: '9/11 & war on terror', description: 'September 11, PATRIOT Act, invasion of Afghanistan, Iraq War, and the civil liberties debate.', videoId: 'fTlUF7bkyXE' },
  { number: 4, title: 'modern political polarization', description: 'culture wars, partisan media, Obama\'s election, Tea Party, and the intensification of ideological divisions.', videoId: 'cUuNsNMpNeQ' },
  { number: 5, title: 'supreme court landmark cases', description: 'Marbury, McCulloch, Dred Scott, Plessy, Brown, Miranda, Roe, Bush v. Gore, Obergefell — all you need to know.', videoId: 'OJcEfMn7yBs' },
  { number: 6, title: 'dbq, leq & saq practice', description: 'DBQ document strategies, LEQ thesis writing, SAQ precision, scoring rubrics, and model high-score responses.', videoId: 'grMGSBHPqjg' },
]

export default function APUSHUnit9Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 9, title: 'period 9: 1980–present', examWeight: '4–6%', description: 'conservatism\'s rise, the end of the cold war, 9/11, and essay mastery for every APUSH FRQ format.' }}
      topics={topics}
      basePath="/apush/unit-9"
      courseHref="/apush"
      videoId="uKLVN5SqBj8"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
