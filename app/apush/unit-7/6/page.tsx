import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 7, title: 'period 7: 1890–1945' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'FDR and the new deal' },
  { type: 'body', content: 'Franklin Roosevelt won the 1932 election in a landslide, promising a "New Deal" for the American people. His three goals: Relief (immediate aid for suffering), Recovery (reviving the economy), Reform (preventing future depressions). The New Deal fundamentally transformed the relationship between the federal government and ordinary Americans.' },
  { type: 'heading', content: 'first new deal (1933–1934) — key programs' },
  { type: 'table', content: '', tableHeaders: ['program', 'acronym', 'what it did'],
    tableRows: [
      ['Emergency Banking Act', '—', 'Closed banks, inspected them, only sound banks reopened; restored confidence'],
      ['Civilian Conservation Corps', 'CCC', 'Employed young men in national parks/forests; environmental conservation + jobs'],
      ['Agricultural Adjustment Act', 'AAA', 'Paid farmers to reduce production to raise prices; declared unconstitutional 1936'],
      ['National Recovery Administration', 'NRA', 'Industry codes setting wages, hours, prices; declared unconstitutional (Schechter, 1935)'],
      ['Tennessee Valley Authority', 'TVA', 'Federal dam/electricity project for Appalachia; still operating; model of regional planning'],
      ['Federal Deposit Insurance Corp', 'FDIC', 'Insured bank deposits up to $2,500; restored trust in banks'],
    ]
  },
  { type: 'heading', content: 'second new deal (1935–1936) — key programs' },
  { type: 'bullets', content: '', bullets: [
    '**Social Security Act (1935)** — old-age pensions, unemployment insurance, aid to dependent children; created the modern welfare state',
    '**Wagner Act / National Labor Relations Act (1935)** — guaranteed workers\' right to unionize and bargain collectively; created NLRB; explosive growth of union membership (CIO)',
    '**Works Progress Administration (WPA)** — employed millions in public works: roads, bridges, schools, but also arts, theater, writing projects',
    '**Rural Electrification Act (1936)** — brought electricity to rural America',
  ]},
  { type: 'heading', content: 'opposition & court-packing' },
  { type: 'bullets', content: '', bullets: [
    '**Conservative opposition** — Liberty League (business groups); argued New Deal was socialism/unconstitutional overreach',
    '**Populist opposition** — Huey Long\'s "Share Our Wealth"; Father Coughlin (radio priest); Dr. Townsend (old-age pension plan); argued New Deal didn\'t go far enough',
    '**Supreme Court** — struck down AAA and NRA as unconstitutional; FDR proposed adding up to 6 new justices (1937)',
    '**Court-packing plan failed** — even Democrats rejected it as executive overreach; damaged FDR\'s political capital',
    '**"the switch in time that saved nine"** — the Court began upholding New Deal legislation before the plan was voted on',
  ]},
  { type: 'examtip', content: 'The New Deal debate is a perennial AP essay topic. Know both conservative criticisms (too much government, unconstitutional) AND progressive criticisms (didn\'t do enough, excluded Black Americans from many programs). The New Deal created the modern regulatory state and the Democratic coalition that lasted through the 1960s.' },
]

export default function APUSHU7T6() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 6, title: 'new deal', keyTerms: ['CCC', 'AAA', 'TVA', 'FDIC', 'Social Security', 'Wagner Act', 'WPA', 'court-packing', 'Huey Long', 'relief recovery reform'] }}
      sections={sections}
      prev={{ href: '/apush/unit-7/5', title: 'great depression' }}
      next={{ href: '/apush/unit-7/7', title: 'world war ii' }}
      courseHref="/apush" unitHref="/apush/unit-7"
    />
  )
}
