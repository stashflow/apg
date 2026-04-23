export interface ApushMemoryHook {
  anchor?: string
  memory: string
  courseLink: string
}

interface HookContext {
  unitNumber: number
  topicTitle: string
  sectionContext: string
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function firstSentence(value: string): string {
  return value
    .split(/[.!?]/)
    .map((s) => s.trim())
    .find(Boolean) || ''
}

function acronymFromTerm(term: string): string {
  const stop = new Set(['and', 'of', 'the', 'to', 'for', 'in', 'on'])
  const letters = term
    .split(/[\s\-]+/)
    .map((w) => w.replace(/[^a-zA-Z0-9]/g, ''))
    .filter(Boolean)
    .filter((w) => !stop.has(w.toLowerCase()))
    .map((w) => w[0]?.toUpperCase())
    .filter(Boolean)
  if (letters.length === 0) return 'KEY'
  return letters.slice(0, 5).join('')
}

function realLifeAnalogy(term: string): string {
  const lower = term.toLowerCase()
  if (lower.includes('act') || lower.includes('amendment')) return 'Like your school adding a new permanent rule that changes what everyone can/can’t do.'
  if (lower.includes('war') || lower.includes('battle')) return 'Like a huge rivalry game that changes who has power after it ends.'
  if (lower.includes('doctrine') || lower.includes('plan')) return 'Like a team strategy your coach announces and keeps using all season.'
  if (lower.includes('movement')) return 'Like students organizing over time until the school board has to respond.'
  if (lower.includes('scandal')) return 'Like a major leak that makes everyone stop trusting leadership.'
  return 'Like a major policy trend today: people debate it, sides form, and later rules change because of it.'
}

function buildEasyMemory(term: string, oneLiner: string, courseLink: string): string {
  const acronym = acronymFromTerm(term)
  return [
    `- **Acronym:** \`${acronym}\``,
    `- **Real-life version:** ${realLifeAnalogy(term)}`,
    `- **One-line memory:** ${oneLiner}`,
    `- **APUSH connection:** ${courseLink}`,
  ].join('\n')
}

function withAliases(aliases: string[], hook: ApushMemoryHook, target: Record<string, ApushMemoryHook>) {
  for (const alias of aliases) {
    target[normalize(alias)] = hook
  }
}

const APUSH_HOOKS: Record<string, ApushMemoryHook> = {}

withAliases(
  ['columbian exchange'],
  {
    memory: 'Picture two giant shopping carts colliding across the Atlantic: crops, animals, and diseases all spill into the other cart.',
    courseLink: 'Use it as a root cause for labor shifts, slavery expansion, and demographic collapse in Periods 1-2.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['iroquois confederacy', 'haudenosaunee'],
  {
    memory: 'Think "League of Six Nations": a pre-U.S. federal-style alliance with shared rules and local autonomy.',
    courseLink: 'Connect to later federalism debates in Period 3 and colonial union proposals like Albany.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['mercantilism', 'salutary neglect'],
  {
    memory: 'Mercantilism is the leash; salutary neglect is the leash being loose until 1763.',
    courseLink: 'That tightening after the French and Indian War helps explain Revolutionary anger in Period 3.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['french and indian war'],
  {
    memory: 'Treat it as the expensive prequel to the Revolution: Britain wins land but inherits debt.',
    courseLink: 'Debt -> taxation -> protest chain is a core causation sequence tested in Period 3.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['articles of confederation'],
  {
    memory: 'Think "13 roommates, no landlord": states cooperate but central authority cannot reliably tax or enforce.',
    courseLink: 'Use it to explain why Constitutional Convention delegates pushed for stronger federal structure.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['constitutional convention'],
  {
    memory: 'Imagine a system redesign sprint: patch the Articles\' failures without creating another king.',
    courseLink: 'Tie convention compromises to later federal vs state power conflicts across multiple periods.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['federalists', 'anti-federalists'],
  {
    memory: 'Federalists = stronger engine now; Anti-Federalists = stronger brakes first (Bill of Rights).',
    courseLink: 'This split echoes in modern debates about federal authority, rights, and courts.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['louisiana purchase'],
  {
    memory: 'Think of it as an instant map expansion that doubled strategic options and doubled sectional questions.',
    courseLink: 'Expansion repeatedly resurfaces in slavery debates from Missouri to Kansas-Nebraska.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['market revolution'],
  {
    memory: 'Visualize canals + rails + telegraph as a speed upgrade that shrinks distance and grows national markets.',
    courseLink: 'Use it to explain class shifts, regional specialization, and reform responses in Period 4.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['jacksonian democracy'],
  {
    memory: 'Remember it as "broader white male participation, narrower protection for others."',
    courseLink: 'Great for complexity points: expansion and exclusion operating at the same time.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['indian removal act'],
  {
    memory: 'Think "voting-era populism funded by land hunger": popular politics translated into coerced displacement.',
    courseLink: 'Connect to long-run sovereignty conflicts and federal treaty power debates.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['manifest destiny'],
  {
    memory: 'Treat it like a narrative engine: moral language used to justify territorial acquisition.',
    courseLink: 'It links Mexican-American War, sectional conflict, and later imperial debates.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['kansas-nebraska act'],
  {
    memory: 'Think "popular sovereignty as a spark in a dry field": local voting turned into national violence.',
    courseLink: 'Pairs directly with Bleeding Kansas, party realignment, and Civil War causation.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['dred scott decision'],
  {
    memory: 'Remember the ruling as a maximal pro-slavery constitutional claim.',
    courseLink: 'Use it to show how legal decisions escalated sectional crisis before 1860.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['reconstruction era', 'reconstruction'],
  {
    memory: 'Think "constitutional revolution with weak enforcement stamina."',
    courseLink: 'Best essays track formal gains (13th-15th) against rollback via violence and courts.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['13th amendment', '14th amendment', '15th amendment'],
  {
    memory: 'Memorize as the "freedom-citizenship-vote trilogy."',
    courseLink: 'Trace how each amendment was later narrowed, contested, and revived by civil rights activism.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['gilded age', 'industrialization', 'big business'],
  {
    memory: 'Picture polished surface, rough underside: visible growth with hidden corruption and inequality.',
    courseLink: 'This contrast sets up Progressive Era reform logic in Period 7.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['labor unions', 'strikes', 'afl', 'knights of labor'],
  {
    memory: 'Use a pressure-cooker model: wages, hours, and safety pressure eventually vents through strikes.',
    courseLink: 'Compare federal/state response to labor conflict with response to business consolidation.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['progressive era'],
  {
    memory: 'Think "referee government": reformers wanted rules for markets, cities, and democracy.',
    courseLink: 'Link muckraking + regulation to later New Deal state capacity.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['new deal'],
  {
    memory: 'Remember the 3R frame: relief now, recovery soon, reform for the long run.',
    courseLink: 'It is a turning point in expectations of federal economic responsibility.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['cold war', 'containment'],
  {
    memory: 'Containment is a spill-control strategy: stop spread, do not necessarily eliminate source immediately.',
    courseLink: 'Track where containment was economic (Marshall), diplomatic (alliances), and military (Korea/Vietnam).',
  },
  APUSH_HOOKS,
)

withAliases(
  ['truman doctrine', 'marshall plan'],
  {
    memory: 'Doctrine = security promise, Plan = economic reconstruction; together they form early containment architecture.',
    courseLink: 'Great for causation: aid and alliance design shape later Cold War blocs.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['civil rights movement'],
  {
    memory: 'Use a two-engine model: grassroots mobilization creates pressure; federal law converts pressure into durable structure.',
    courseLink: 'Strong essays show interaction between local activism, courts, and congressional action.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['great society'],
  {
    memory: 'Think "New Deal 2.0" with stronger focus on poverty, education, and rights-era legislation.',
    courseLink: 'Compare scope and constraints against New Deal programs for continuity/change.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['watergate'],
  {
    memory: 'Treat it as the trust-collapse case study: executive overreach meets institutional checks.',
    courseLink: 'Connect to long-term public distrust and modern polarization narratives.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['reagan revolution', 'reaganomics'],
  {
    memory: 'Remember it as a directional turn: tax cuts, deregulation, anti-inflation focus, conservative coalition politics.',
    courseLink: 'Use it to explain late-20th century policy realignment and party polarization.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['globalization'],
  {
    memory: 'Picture production chains crossing borders while political blame stays local.',
    courseLink: 'Useful for explaining deindustrialization debates and modern trade politics.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['9/11', 'war on terror', 'patriot act'],
  {
    memory: 'Use the security-liberty pendulum: crisis pushes policy toward security, then rights debates push back.',
    courseLink: 'Connect to earlier wartime civil-liberties episodes for continuity analysis.',
  },
  APUSH_HOOKS,
)

withAliases(
  ['supreme court landmark cases', 'judicial review'],
  {
    memory: 'Think of the Court as a constitutional throttle: it can accelerate or slow social and policy change.',
    courseLink: 'For FRQs, pair one case with immediate effect and one longer-term doctrinal shift.',
  },
  APUSH_HOOKS,
)

export function getApushMemoryHook(term: string, ctx: HookContext): ApushMemoryHook | null {
  const key = normalize(term)
  const exact = APUSH_HOOKS[key]
  if (exact) {
    const anchor = exact.anchor || `${term} in this section: ${firstSentence(ctx.sectionContext) || `core idea in ${ctx.topicTitle}`}.`
    return {
      anchor,
      memory: buildEasyMemory(term, exact.memory, exact.courseLink),
      courseLink: exact.courseLink,
    }
  }

  if (key.includes('act')) {
    const courseLink = 'Acts are often best analyzed in a chain: context -> passage -> resistance -> later legal/political consequences.'
    return {
      anchor: `${term} in this section: ${firstSentence(ctx.sectionContext) || `policy change in Unit ${ctx.unitNumber}`}.`,
      memory: buildEasyMemory(term, 'Think of this Act as a new rule that creates winners, losers, and backlash.', courseLink),
      courseLink,
    }
  }

  if (key.includes('war') || key.includes('battle')) {
    const courseLink = 'APUSH rewards showing how wartime outcomes reshape domestic politics and rights conflicts.'
    return {
      anchor: `${term} in this section: ${firstSentence(ctx.sectionContext) || `conflict turning point in Unit ${ctx.unitNumber}`}.`,
      memory: buildEasyMemory(term, 'Use 3 steps: trigger -> turning point -> result.', courseLink),
      courseLink,
    }
  }

  if (key.includes('amendment')) {
    const courseLink = 'High-scoring writing compares constitutional text with real-world implementation.'
    return {
      anchor: `${term} in this section: ${firstSentence(ctx.sectionContext) || `constitutional shift in Unit ${ctx.unitNumber}`}.`,
      memory: buildEasyMemory(term, 'This is a permanent rule update; ask who got rights on paper vs in practice.', courseLink),
      courseLink,
    }
  }

  return null
}
