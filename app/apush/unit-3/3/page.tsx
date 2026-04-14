import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'boston massacre (march 5, 1770)' },
  { type: 'body', content: 'Tensions between Boston colonists and British soldiers (stationed there under the Quartering Act) exploded when a crowd confronted a sentry outside the Custom House. Soldiers fired, killing 5 colonists including Crispus Attucks, a free Black man. Paul Revere\'s engraving — showing soldiers firing in formation on innocent civilians — became one of the most effective pieces of propaganda in history, despite being largely inaccurate.' },
  { type: 'callout', content: 'John Adams, despite being a patriot, defended the British soldiers in court and won acquittal for most, arguing that rule of law and due process must apply even to political enemies. This actually enhanced his reputation for integrity.' },
  { type: 'heading', content: 'committees of correspondence' },
  { type: 'body', content: 'Samuel Adams created the Boston Committee of Correspondence in 1772 to share information and coordinate resistance among colonial towns. By 1774, every colony had one. This network was the communications backbone of the revolutionary movement — the precursor to a colonial government.' },
  { type: 'heading', content: 'boston tea party (december 16, 1773)' },
  { type: 'body', content: 'The Tea Act of 1773 gave the British East India Company a monopoly on colonial tea sales, undercutting colonial merchants even while lowering the retail price. The Sons of Liberty, dressed as Mohawk Indians, boarded three ships and dumped 342 chests of tea (worth ~$1.7 million today) into Boston Harbor. The "Mohawk" disguise was symbolic — asserting an American, not British, identity.' },
  { type: 'bullets', content: '', bullets: [
    '**Why colonists were angry** — the Tea Act proved Parliament could manipulate colonial markets at will; merchants saw their livelihoods threatened',
    '**British response** — the Coercive Acts (1774): closed Boston Harbor, revoked Massachusetts\' self-government, required quartering of troops, moved trials to Britain',
    '**Colonial name** — colonists called them the "Intolerable Acts" — this terminology itself shows how effective propaganda was at framing British policy',
    '**Samuel Adams** — master of colonial propaganda; used both events to radicalize moderates by publicizing British "tyranny"',
  ]},
  { type: 'heading', content: 'first continental congress (1774)' },
  { type: 'body', content: 'In response to the Intolerable Acts, 12 colonies (not Georgia) sent delegates to Philadelphia. The Congress: (1) declared the Intolerable Acts unconstitutional, (2) called for a complete boycott of British goods (the Continental Association), (3) petitioned the king for redress, and (4) agreed to meet again in May 1775 if grievances were not addressed. It was NOT yet a call for independence — just reform.' },
  { type: 'examtip', content: 'Know the difference: the First Continental Congress (1774) sought reform within the British Empire; the Second Continental Congress (1775–1781) became the de facto government that declared independence, created the Continental Army, and eventually wrote the Articles of Confederation.' },
  { type: 'frqtip', content: 'For SAQ or DBQ contextualization about the Revolution, describe how the Boston Massacre and Tea Party transformed local grievances (taxation) into a broad colonial identity crisis. Paul Revere\'s engraving and Samuel Adams\' propaganda show how media shaped revolutionary consciousness.' },
]

export default function APUSHU3T3() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 3, title: 'boston massacre & tea party', keyTerms: ['Boston Massacre', 'Crispus Attucks', 'Paul Revere', 'Tea Act', 'Boston Tea Party', 'Intolerable Acts', 'Committees of Correspondence', 'First Continental Congress'] }}
      sections={sections}
      prev={{ href: '/apush/unit-3/2', title: 'taxation without representation' }}
      next={{ href: '/apush/unit-3/4', title: 'intolerable acts & continental congress' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
