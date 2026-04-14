import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'french & indian war', description: 'causes, Albany Plan, Proclamation of 1763, British debt, and how it ignited colonial grievances.', videoId: 'YhqXNJngvTo' },
  { number: 2, title: 'taxation without representation', description: 'Stamp Act, Townshend Acts, colonial boycotts, Sons of Liberty, and natural rights philosophy.', videoId: 'V3PkDSjJPaE' },
  { number: 3, title: 'boston massacre & tea party', description: 'escalating tensions, the 1770 shooting, the Tea Act, and colonial unity through Committees of Correspondence.', videoId: 'E9LJBxrHVGk' },
  { number: 4, title: 'intolerable acts & continental congress', description: 'Britain\'s punitive response, the First and Second Continental Congress, Lexington & Concord.', videoId: 'D_dAoYRUwbI' },
  { number: 5, title: 'declaration of independence', description: 'Locke\'s influence, Jefferson\'s grievances, natural rights philosophy, and the document\'s lasting impact.', videoId: 'BVctfLkuUxk' },
  { number: 6, title: 'articles of confederation', description: 'the first government, Shays\' Rebellion, and weaknesses: no taxation, no executive, no national courts.', videoId: 'LD5tDZH6j6k' },
  { number: 7, title: 'constitutional convention', description: 'Great Compromise, Three-Fifths Compromise, separation of powers, checks and balances.', videoId: 'jN_scMGJ5_4' },
  { number: 8, title: 'federalists vs anti-federalists', description: 'The Federalist Papers (Madison, Hamilton, Jay), Bill of Rights as compromise, ratification debates.', videoId: 'WiRsGDsna5c' },
  { number: 9, title: 'washington & hamilton\'s financial plan', description: 'precedents set by Washington, Hamilton\'s debt assumption, national bank, whiskey tax — and Jefferson\'s opposition.', videoId: '9fHXGP44y2E' },
]

export default function APUSHUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 3, title: 'period 3: 1754–1800', examWeight: '10–17%', description: 'revolution, independence, constitutional founding — the most tested period on the APUSH exam.' }}
      topics={topics}
      basePath="/apush/unit-3"
      courseHref="/apush"
      videoId="kWVvKDu2nwE"
      examDate={{ date: 'Friday, May 9, 2025', time: '8:00 AM' }}
    />
  )
}
