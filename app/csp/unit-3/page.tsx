import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'variables & data types', description: 'storing values with variables, data types (integer, string, boolean, float), and assignment statements in pseudocode.', videoId: 'RU1u-js7db8' },
  { number: 2, title: 'conditionals & boolean logic', description: 'IF/ELSE/ELSE IF, AND/OR/NOT operators, truth tables, and how conditionals control program flow.', videoId: 'gI-qXk7XojA' },
  { number: 3, title: 'loops & iteration', description: 'REPEAT N TIMES, REPEAT UNTIL, FOR EACH — tracing loops, counting iterations, and common loop patterns.', videoId: 'wxds6MAtUQ0' },
  { number: 4, title: 'lists & traversals', description: 'creating and modifying lists, indexing (1-based in AP pseudocode), and traversal patterns with loops.', videoId: 'DuDz6B4cqVc' },
  { number: 5, title: 'procedures, parameters & return values', description: 'defining and calling procedures (functions), passing parameters, returning values, and procedural abstraction.', videoId: 'l26oaHV7D40' },
  { number: 6, title: 'algorithm design', description: 'sequencing, selection, iteration — building algorithms step-by-step and expressing them in AP pseudocode.', videoId: 'rL8X2mlNuPQ' },
  { number: 7, title: 'searching & sorting', description: 'sequential search vs. binary search (and why binary requires sorted data), and a conceptual overview of sorting.', videoId: 'TwsgCHYmbbA' },
  { number: 8, title: 'common pseudocode patterns', description: 'running totals, finding min/max, counting elements — the patterns that appear repeatedly on the MCQ section.', videoId: 'u65lvwqBVsA' },
]

export default function CSPUnit3Page() {
  return (
    <UnitPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 3, title: 'big idea 3: algorithms & programming', examWeight: '30–35%', description: 'the biggest unit — over a third of the exam. master pseudocode, loops, lists, and procedures cold.' }}
      topics={topics}
      basePath="/csp/unit-3"
      courseHref="/csp"
      videoId="gHCrPvKV3EE"
      examDate={{ date: 'Thursday, May 15, 2025', time: '12:00 PM' }}
    />
  )
}
