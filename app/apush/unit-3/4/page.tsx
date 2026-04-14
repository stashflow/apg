import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 3, title: 'period 3: 1754–1800' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'lexington, concord & the second continental congress' },
  { type: 'body', content: 'On April 19, 1775, British regulars marched to Lexington and Concord to seize colonial arms. "The shot heard round the world" at Lexington opened the Revolutionary War. The Second Continental Congress convened in May 1775 — it became the governing body of the revolution, creating the Continental Army and appointing George Washington as commander.' },
  { type: 'bullets', content: '', bullets: [
    '**Olive Branch Petition (1775)** — Congress\'s last attempt at reconciliation; King George rejected it without reading it',
    '**Common Sense (January 1776)** — Thomas Paine\'s pamphlet argued monarchy itself was irrational; sold 500,000 copies in months; shifted colonists from reform to independence',
    '**Continental Army** — Washington imposed discipline, kept army together through Valley Forge (1777–78); French alliance (1778) turned the war',
    '**Battle of Saratoga (1777)** — American victory convinced France to openly ally with the U.S.; the turning point of the war',
    '**Battle of Yorktown (1781)** — Cornwallis surrendered to Washington; effectively ended major fighting',
    '**Treaty of Paris (1783)** — Britain recognized U.S. independence; U.S. gained all land east of Mississippi',
  ]},
  { type: 'examtip', content: 'Saratoga = turning point because it brought France in. Yorktown = effective end. Treaty of Paris 1783 = legal end. Know all three dates and their significance. Common Sense is the most important pamphlet — know its argument.' },
  { type: 'heading', content: 'loyalists vs. patriots' },
  { type: 'bullets', content: '', bullets: [
    'About 1/3 of colonists were Patriots, 1/3 Loyalists (Tories), 1/3 neutral — the Revolution was also a civil war',
    'Loyalists: wealthy merchants, royal officials, Anglican clergy, recent immigrants — those with ties to Britain',
    'Patriots: colonial gentry, small farmers, artisans, many evangelical Protestants',
    '~60,000–80,000 Loyalists fled to Canada, Britain, or Caribbean after the war; their property was often confiscated',
    'African Americans: some joined British (promised freedom — Lord Dunmore\'s Proclamation 1775); others fought for Patriots hoping for liberty; most gained nothing',
  ]},
  { type: 'frqtip', content: 'LEQ prompts often ask whether the Revolution was "revolutionary" or "conservative." Use the Loyalist diaspora, the continuation of slavery, and the limited rights of women as evidence it was conservative; use the democratic ideals of the Declaration and the removal of aristocracy as evidence it was revolutionary.' },
]

export default function APUSHU3T4() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 4, title: 'intolerable acts & continental congress', keyTerms: ['Second Continental Congress', 'Common Sense', 'Saratoga', 'Yorktown', 'Treaty of Paris 1783', 'Loyalists', 'Continental Army', 'Olive Branch Petition'] }}
      sections={sections}
      prev={{ href: '/apush/unit-3/3', title: 'boston massacre & tea party' }}
      next={{ href: '/apush/unit-3/5', title: 'declaration of independence' }}
      courseHref="/apush" unitHref="/apush/unit-3"
    />
  )
}
