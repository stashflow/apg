import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 4, title: 'period 4: 1800–1848' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the second great awakening (1800s–1840s)' },
  { type: 'body', content: 'The Second Great Awakening was a massive Protestant religious revival that swept America, especially the "burned-over district" of upstate New York. Unlike the First Great Awakening (1730s–40s), this one emphasized individual free will and the perfectibility of society — if individuals could be saved, so could society. This religious energy fueled the great reform movements of the antebellum era.' },
  { type: 'bullets', content: '', bullets: [
    '**Charles Grandison Finney** — most important revivalist preacher; "anxious bench" techniques; said anyone could be saved through personal decision',
    '**Camp meetings** — outdoor revivals lasting days; emotional, democratic, accessible to poor and women',
    '**Utopian communities** — perfectionist idea that ideal Christian communities could be built: Oneida (communal marriage), Brook Farm (Transcendentalists), Shakers (celibacy, equality)',
    '**Mormonism (1830)** — Joseph Smith founded the Church of Jesus Christ of Latter-day Saints in New York; migrated west under persecution',
  ]},
  { type: 'heading', content: 'abolitionism' },
  { type: 'bullets', content: '', bullets: [
    '**William Lloyd Garrison** — radical abolitionist; published The Liberator (1831); demanded immediate emancipation; burned the Constitution as "a covenant with death"',
    '**Frederick Douglass** — escaped slave; published Narrative of the Life... (1845); the most powerful voice against slavery; proved Black people could speak for themselves',
    '**Harriet Tubman** — Underground Railroad conductor; made ~13 missions, freed ~70 enslaved people; called "Moses of her people"',
    '**American Anti-Slavery Society (1833)** — Garrison\'s organization; trained speakers, printed pamphlets; faced violent opposition in the North',
    '**Gag Rule (1836–1844)** — pro-slavery Congress automatically tabled anti-slavery petitions; outraged Northerners regardless of their views on slavery itself',
  ]},
  { type: 'heading', content: "women's rights — seneca falls (1848)" },
  { type: 'body', content: 'Elizabeth Cady Stanton and Lucretia Mott organized the Seneca Falls Convention (1848) — the first women\'s rights convention in U.S. history. The Declaration of Sentiments (modeled directly on the Declaration of Independence: "all men AND WOMEN are created equal") listed 18 grievances and demanded women\'s suffrage, property rights, and education. Only the suffrage resolution was controversial — even among attendees.' },
  { type: 'examtip', content: 'The connection between abolitionism and women\'s rights is critical: women like Stanton and Mott were radicalized when they were told women couldn\'t speak at anti-slavery conferences. Fighting for Black freedom showed them their own oppression. This APUSH connection appears in nearly every Period 4 DBQ.' },
  { type: 'frqtip', content: 'For any reform movements LEQ, use the Second Great Awakening as your contextualization: religious perfectionism created the moral urgency that drove abolitionists, feminists, and temperance advocates. Without the religious revival, the reform era doesn\'t happen.' },
]

export default function APUSHU4T8() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 8, title: 'second great awakening & reform movements', keyTerms: ['Second Great Awakening', 'Garrison', 'Frederick Douglass', 'Harriet Tubman', 'Seneca Falls', 'Declaration of Sentiments', 'abolitionism', 'Finney', 'utopian communities'] }}
      sections={sections}
      prev={{ href: '/apush/unit-4/7', title: 'indian removal act' }}
      courseHref="/apush" unitHref="/apush/unit-4"
    />
  )
}
