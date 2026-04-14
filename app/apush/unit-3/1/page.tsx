import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the french & indian war (1754–1763)' },
  { type: 'body', content: 'The French and Indian War (Seven Years\' War globally) was fought between Britain and France over control of North America, primarily the Ohio River Valley. British colonists like George Washington fired the first shots in 1754. The war ended with the Treaty of Paris (1763), giving Britain control of Canada and lands east of the Mississippi — but at an enormous financial cost that Britain expected the colonists to help pay.' },
  { type: 'examtip', content: 'The French and Indian War is the single most important trigger for the American Revolution. Every act of "taxation without representation" flows directly from Britain\'s war debt. Know: Albany Plan (1754), Proclamation of 1763, and how the war changed British colonial policy.' },
  { type: 'heading', content: 'the albany plan of union (1754)' },
  { type: 'body', content: 'Benjamin Franklin proposed the Albany Plan at the Albany Congress — a plan to unite the colonies under a single government for common defense against France and Native Americans. Every colonial assembly rejected it because they refused to surrender local power. It is significant as the FIRST attempt at colonial union and foreshadows both the Articles of Confederation and the Constitution.' },
  { type: 'heading', content: 'aftermath & consequences' },
  { type: 'bullets', content: '', bullets: [
    '**Proclamation of 1763** — Britain forbade colonists from settling west of the Appalachians to prevent costly conflicts with Native Americans. Colonists resented this as an infringement on freedom and land acquisition rights.',
    '**Massive British debt** — war cost Britain £130 million. Parliament decided colonists must help pay through new taxes.',
    '**British troops stay in colonies** — standing army quartered in colonial homes (later becomes the 3rd Amendment issue)',
    '**Colonial military experience** — colonists fought alongside British regulars, observed their tactics, and stopped feeling dependent on Britain for defense',
    '**Native American alliances shift** — Pontiac\'s Rebellion (1763) showed Britain that Native Americans would resist western expansion regardless of European political settlements',
  ]},
  { type: 'heading', content: 'pontiac\'s rebellion (1763)' },
  { type: 'body', content: 'After the French defeat, Native Americans lost their French trading partners and protectors. Pontiac, an Ottawa leader, organized a pan-Indian resistance that captured 8 of 12 British forts in the Great Lakes region. Britain used biological warfare — distributing smallpox-infected blankets — to suppress it. The Proclamation of 1763 was partly a response to Pontiac\'s Rebellion.' },
  { type: 'frqtip', content: 'For contextualization on any Period 3 prompt, describe how the French and Indian War shifted the British-colonial relationship: before the war, salutary neglect gave colonists self-governance; after the war, direct taxation and standing armies created a constitutional crisis.' },
  { type: 'heading', content: 'key terms' },
  { type: 'bullets', content: '', bullets: [
    '**Treaty of Paris 1763** — ended war; Britain gained Canada and FL; France ceded Louisiana to Spain',
    '**Salutary neglect** — pre-war policy of leaving colonies largely self-governing; ended after 1763',
    '**Ohio Valley** — the contested region that triggered the war; key to westward expansion',
    '**George Washington** — led Virginia militia at Fort Necessity (1754); his defeat triggered the war',
    '**William Pitt** — British minister who turned the war around by sending professional troops and paying colonial militia',
  ]},
]

export default function APUSHU3T1() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 1, title: 'french & indian war', keyTerms: ['Treaty of Paris 1763', 'Albany Plan', 'Proclamation of 1763', 'salutary neglect', 'Pontiac\'s Rebellion', 'Ohio Valley'] }}
      sections={sections}
      next={{ href: '/apush/unit-3/2', title: 'taxation without representation' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
