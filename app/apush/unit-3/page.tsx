import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'french & indian war', description: 'causes, Albany Plan, British debt, and how it ignited colonial grievances.', videoId: 'oeKSb7IRp7E' },
  { number: 2, title: 'proclamation of 1763', description: 'British attempt to prevent westward expansion, colonial resentment, and its failure.' },
  { number: 3, title: 'taxation without representation', description: 'Stamp Act, Townshend Acts, colonial boycotts, Sons of Liberty, and natural rights philosophy.', videoId: 'oeKSb7IRp7E' },
  { number: 4, title: 'boston massacre & tea party', description: 'escalating tensions, the 1770 shooting, the Tea Act, and Committees of Correspondence.', videoId: 'oeKSb7IRp7E' },
  { number: 5, title: 'intolerable acts & continental congress', description: 'Britain\'s punitive response, First and Second Continental Congress, Lexington & Concord.', videoId: 'oeKSb7IRp7E' },
  { number: 6, title: 'declaration of independence', description: 'Locke\'s influence, Jefferson\'s grievances, natural rights philosophy, and lasting impact.', videoId: 'FQ8hISjUHhc' },
  { number: 7, title: 'revolutionary war & treaty of paris', description: 'key battles, French alliance, Treaty of Paris 1783, and American independence secured.' },
  { number: 8, title: 'republican motherhood', description: 'women\'s role in the new republic, education for citizenship, and gender expectations.' },
  { number: 9, title: 'articles of confederation', description: 'first government, Shays\' Rebellion, weaknesses: no taxation, no executive, no courts.', videoId: 'mXBFpn4Sn8o' },
  { number: 10, title: 'northwest ordinance', description: 'organizing western territories, banning slavery north of Ohio River, statehood process.' },
  { number: 11, title: 'constitutional convention', description: 'Great Compromise, Three-Fifths Compromise, separation of powers, checks and balances.', videoId: 'mXBFpn4Sn8o' },
  { number: 12, title: 'federalists vs anti-federalists', description: 'Federalist Papers, Bill of Rights as compromise, ratification debates.', videoId: 'mXBFpn4Sn8o' },
  { number: 13, title: 'washington & hamilton\'s financial plan', description: 'Washington\'s precedents, debt assumption, national bank, whiskey tax.', videoId: '9ra11g0yp6U' },
  { number: 14, title: 'whiskey rebellion', description: 'testing federal authority, Washington\'s response, and establishing government power.' },
  { number: 15, title: 'alien & sedition acts', description: 'Adams\'s crackdown on dissent, Virginia and Kentucky Resolutions, states\' rights debate.' },
  { number: 16, title: 'first party system', description: 'Federalists vs Democratic-Republicans, Hamilton vs Jefferson, political divisions.' },
]

export default function APUSHUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 3, title: 'period 3: 1754–1800', examWeight: '10–17%', description: 'revolution, independence, constitutional founding — the most tested period on the APUSH exam.' }}
      topics={topics}
      basePath="/apush/unit-3"
      courseHref="/apush"
      videoId="S6OiL-DhtzM"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
