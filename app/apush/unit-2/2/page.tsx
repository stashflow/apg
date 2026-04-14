import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 2, title: 'period 2: 1607–1754' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'puritan origins and the "errand into the wilderness"',
  },
  {
    type: 'body',
    content: 'The Puritans who founded New England colonies were English Protestants who wanted to "purify" the Church of England of Catholic influences. They saw their migration as a sacred mission — a covenant with God to build a holy community in the New World. John Winthrop\'s 1630 sermon called Massachusetts Bay Colony "a city upon a hill" — a model Christian society for the world to see. This idea of American exceptionalism echoes through U.S. history to the present.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['colony', 'founded', 'who', 'motive'],
    tableRows: [
      ['Plymouth', '1620', 'Separatists ("Pilgrims")', 'Wanted complete separation from Church of England; Mayflower Compact = first self-governance doc in America'],
      ['Massachusetts Bay', '1630', 'Puritans (non-separating)', 'Reform Church of England; build a holy "city upon a hill"; led by John Winthrop'],
      ['Connecticut', '1636', 'Thomas Hooker, Puritan', 'Sought more fertile land and greater democracy; Fundamental Orders of Connecticut (1639) = first written constitution'],
      ['Rhode Island', '1636', 'Roger Williams, Anne Hutchinson', 'Williams expelled for religious tolerance views; Hutchinson for antinomianism; RI = first colony with religious freedom'],
      ['New Hampshire', '1638', 'John Wheelwright', 'Dissenters from Mass Bay; eventually merged with Maine'],
    ],
  },
  {
    type: 'heading',
    content: 'puritan society — religion, community, and dissent',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Puritans believed in **predestination** (Calvinist): God had already chosen who was saved ("elect"). Anxiety about salvation drove intense religious behavior',
      '**Covenant theology**: God made a covenant with the community — if they sinned collectively, God would punish the community collectively (not just the individual)',
      '**Visible saints**: only church members (those who could testify to a conversion experience) could vote in colony elections → theocracy in practice',
      '**Family migration**: unlike Chesapeake, Puritans came in families → more balanced sex ratios → healthier population, faster natural growth',
      '**Education valued**: Harvard College founded 1636 to train ministers; Massachusetts Bay required towns of 50+ families to establish schools',
      '**Anne Hutchinson**: preached that personal faith alone (not deeds or clergy) was path to salvation (antinomianism). Tried and banished 1638 — shows limits of Puritan tolerance',
      '**Roger Williams**: argued church and state must be separate; Native Americans deserved payment for land. Banished 1635; founded Providence (RI)',
    ],
  },
  {
    type: 'heading',
    content: 'king philip\'s war (1675–1676)',
  },
  {
    type: 'body',
    content: 'The bloodiest per-capita war in American history. Metacom (called "King Philip" by English), a Wampanoag leader, led a coalition of Native nations against English settlements. English expansion onto Native lands and mistreatment of converts triggered the conflict. The war devastated both sides but ended with English victory and the near-total destruction of Native independence in southern New England.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '52 of 90 English towns attacked; 12 destroyed; 600 English killed',
      'Thousands of Native Americans killed; survivors enslaved or fled; Metacom killed and his head displayed on a pike in Plymouth for 25 years',
      'War ended effective Native resistance in New England — survivors either assimilated or fled north/west',
      'Aftermath: English colonists became more aggressive toward all Native peoples; fear of Native attacks shaped frontier mentality',
    ],
  },
  {
    type: 'frqtip',
    content: 'SAQ and DBQ prompts about colonial diversity almost always expect you to compare New England with the Chesapeake. Key contrasts: religion vs. profit motive; family migration vs. male-dominated; subsistence + trade economy vs. tobacco monoculture; town-centered vs. plantation-spread; lower mortality vs. extremely high mortality from disease. These contrasts were structural, not accidental.',
  },
]

export default function APUSHU2T2() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 2,
        title: 'plymouth & massachusetts bay',
        keyTerms: ['Separatists', 'Puritans', 'Mayflower Compact', 'city upon a hill', 'predestination', 'covenant theology', 'Anne Hutchinson', 'Roger Williams', 'King Philip\'s War', 'Metacom'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-2/1', title: 'jamestown & virginia' }}
      next={{ href: '/apush/unit-2/3', title: 'new england colonies' }}
      courseHref="/apush"
      unitHref="/apush/unit-2"
    />
  )
}
