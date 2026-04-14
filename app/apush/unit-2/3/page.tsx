import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 2, title: 'period 2: 1607–1754' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'new england economy and society',
  },
  {
    type: 'body',
    content: 'New England\'s economy was fundamentally different from the Chesapeake. Rocky soil and cold climate made plantation agriculture impossible, so New Englanders built a diversified economy of fishing, shipbuilding, lumber, and commerce. Towns were the center of social and political life, with town meeting governance giving ordinary (white, male, property-owning) colonists direct political participation.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Fishing**: cod fishing off the Grand Banks was enormously profitable — "sacred cod" hung in Massachusetts legislature; fish exported to Europe and Caribbean',
      '**Shipbuilding**: abundant timber made New England the shipbuilding center of the empire — by 1770, one-third of all British ships were American-built',
      '**Trade**: New England ships dominated Atlantic commerce, carrying rum, fish, and manufactured goods',
      '**Town meetings**: direct democracy where (white, male, propertied) inhabitants voted on local laws, taxes, and officials — a seedbed of revolutionary political thought',
      '**Congregational Church**: every town centered on the meeting house; minister and selectmen (elected officials) were the community leaders',
    ],
  },
  {
    type: 'heading',
    content: 'salem witch trials (1692) — religion, fear, and social tension',
  },
  {
    type: 'body',
    content: 'In 1692, Salem Village, Massachusetts experienced an explosion of witchcraft accusations that led to the execution of 20 people (19 hanged, 1 pressed to death). The trials reveal deep social tensions: young vs. old, women vs. patriarchal authority, village vs. town, declining Puritan religious authority, and anxieties created by King Philip\'s War and political instability (loss of the Massachusetts charter).',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Accusers: mostly young women from Salem Village; accused: often older, wealthier women from Salem Town (the prosperous merchant hub)',
      'Reflects a community under stress: political instability (no charter), recent war, religious anxiety, gender tensions',
      'Court used "spectral evidence" (dreams, visions) — later rejected; Governor Phips ended trials after his own wife was accused',
      'Long-term significance: accelerated decline of Puritan theocratic power; Puritanism increasingly gave way to mercantile culture in New England',
    ],
  },
  {
    type: 'heading',
    content: 'the first great awakening (1730s–1740s)',
  },
  {
    type: 'body',
    content: 'The First Great Awakening was a massive religious revival that swept through all the colonies in the 1730s–40s. Preachers like Jonathan Edwards ("Sinners in the Hands of an Angry God") and George Whitefield used emotional sermons to rekindle Protestant faith. It had profound political consequences: by challenging traditional authority and emphasizing individual conscience, it helped prepare colonists to challenge political authority as well.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Jonathan Edwards**: Northampton, MA; intellectual Calvinist preacher who used terrifying imagery to shock congregations back to faith',
      '**George Whitefield**: British itinerant preacher; celebrity of the era — drew crowds of 20,000+; used "new birth" (conversion experience) language',
      '**New Lights** (supporters of revival) vs. **Old Lights** (traditionalists who opposed emotional preaching)',
      'Divided existing churches; created dozens of new denominations; Baptist and Methodist churches boomed among common people',
      '**Political consequence**: awakening taught ordinary colonists to evaluate and challenge established authority — ministers, bishops, and soon, kings',
      'Also the first truly **inter-colonial event** — people across all 13 colonies shared a common experience for the first time, building a sense of shared American identity',
    ],
  },
  {
    type: 'examtip',
    content: 'The First Great Awakening appears constantly in APUSH. Know it has two main effects: (1) religious diversity/denominationalism that weakened established churches, and (2) a precedent for questioning authority that linked to the Revolution. Whitefields tour was also the first mass-media moment in American history — his image appeared on printed broadsides across the colonies.',
  },
]

export default function APUSHU2T3() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 3,
        title: 'new england colonies',
        keyTerms: ['town meeting', 'Congregational Church', 'Salem witch trials', 'First Great Awakening', 'Jonathan Edwards', 'George Whitefield', 'New Lights', 'Old Lights', 'itinerant preachers'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-2/2', title: 'plymouth & massachusetts bay' }}
      next={{ href: '/apush/unit-2/4', title: 'chesapeake colonies' }}
      courseHref="/apush"
      unitHref="/apush/unit-2"
    />
  )
}
