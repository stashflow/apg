import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'french & indian war', description: 'causes, Albany Plan, Proclamation of 1763, British debt, and how it ignited colonial grievances.' },
  { number: 2, title: 'taxation without representation', description: 'Stamp Act, Townshend Acts, colonial boycotts, Sons of Liberty, and natural rights philosophy.' },
  { number: 3, title: 'boston massacre & tea party', description: 'escalating tensions, the 1770 shooting, the Tea Act, and colonial unity through Committees of Correspondence.' },
  { number: 4, title: 'intolerable acts & continental congress', description: 'Britain\'s punitive response, the First and Second Continental Congress, Lexington & Concord.' },
  { number: 5, title: 'declaration of independence', description: 'Locke\'s influence, Jefferson\'s grievances, natural rights philosophy, and the document\'s lasting impact.' },
  { number: 6, title: 'articles of confederation', description: 'the first government, Shays\' Rebellion, and weaknesses: no taxation, no executive, no national courts.' },
  { number: 7, title: 'constitutional convention', description: 'Great Compromise, Three-Fifths Compromise, separation of powers, checks and balances.' },
  { number: 8, title: 'federalists vs anti-federalists', description: 'The Federalist Papers (Madison, Hamilton, Jay), Bill of Rights as compromise, ratification debates.' },
  { number: 9, title: 'washington & hamilton\'s financial plan', description: 'precedents set by Washington, Hamilton\'s debt assumption, national bank, whiskey tax — and Jefferson\'s opposition.' },
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
    />
  )
}
