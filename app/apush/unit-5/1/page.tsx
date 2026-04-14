import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 5, title: 'period 5: 1844–1877' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'manifest destiny' },
  { type: 'body', content: 'John O\'Sullivan coined "Manifest Destiny" in 1845 — the belief that U.S. expansion across North America was divinely ordained, inevitable, and right. It combined American exceptionalism, racial ideology (white Anglo-Saxon superiority), and economic ambition. Under President Polk (1845–1849), the U.S. added more territory than any other president: Texas (1845), Oregon (1846), and the Mexican Cession (1848).' },
  { type: 'bullets', content: '', bullets: [
    '**Texas annexation (1845)** — Texas had been an independent republic since 1836 (after the Battle of the Alamo); Mexico never recognized Texan independence; annexation triggered war',
    '**Oregon Territory (1846)** — "Fifty-Four Forty or Fight!" (Polk\'s campaign slogan); ultimately compromised with Britain at the 49th parallel; avoided war with Britain while focusing on Mexico',
    '**James K. Polk** — one of the most consequential one-term presidents; achieved every campaign promise: Oregon, Texas, Mexican Cession, lower tariff, independent treasury',
    '**Opposition to expansion** — Whigs (led by Henry Clay) feared expansion would reopen slavery debate; they were right',
  ]},
  { type: 'heading', content: 'the alamo & texas independence' },
  { type: 'body', content: 'American settlers in Mexican Texas (led by Stephen F. Austin) outnumbered Mexicans 10:1 by the 1830s. Santa Anna\'s centralization of power triggered a rebellion. The Alamo (1836) — 189 defenders killed including Davy Crockett and Jim Bowie — became a rallying cry. Sam Houston\'s forces captured Santa Anna at San Jacinto, winning independence. Texas was a slave republic, which complicated immediate U.S. annexation.' },
  { type: 'heading', content: 'impact on slavery expansion' },
  { type: 'bullets', content: '', bullets: [
    '**Wilmot Proviso (1846)** — proposed banning slavery from any territory acquired from Mexico; passed the House twice; failed in the Senate; showed North-South split was permanent',
    '**Free Soil Party (1848)** — "Free Soil, Free Speech, Free Labor, Free Men" — opposed slavery\'s expansion (not slavery itself); attracted Northern Democrats and Whigs alarmed by slave power',
    '**California Gold Rush (1848)** — 300,000 people flooded California; needed immediate statehood; as a free state it upset the Senate balance → led to Compromise of 1850',
  ]},
  { type: 'examtip', content: 'Every territorial acquisition from 1845–1854 immediately raises the question: will this new territory be slave or free? This is the central APUSH theme of Period 5. The Wilmot Proviso, Compromise of 1850, and Kansas-Nebraska Act are all attempts to answer the same question.' },
]

export default function APUSHU5T1() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 1, title: 'manifest destiny', keyTerms: ['Manifest Destiny', 'Texas annexation', 'Oregon Territory', 'Polk', 'Wilmot Proviso', 'Free Soil Party', 'Alamo', 'Mexican Cession'] }}
      sections={sections}
      next={{ href: '/apush/unit-5/2', title: 'mexican-american war' }}
      courseHref="/apush" unitHref="/apush/unit-5"
    />
  )
}
