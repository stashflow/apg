import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 4, title: 'period 4: 1800–1848' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the market revolution (1800s–1840s)' },
  { type: 'body', content: 'The Market Revolution transformed America from a subsistence agricultural economy into a market-oriented, interconnected national economy. Three forces drove it: transportation improvements (canals, railroads), industrialization (factories), and commercialization (farming for profit, not just survival). It created the modern American class system.' },
  { type: 'heading', content: 'transportation revolution' },
  { type: 'bullets', content: '', bullets: [
    '**Erie Canal (1825)** — connected Great Lakes to NYC via Hudson River; cut shipping costs 90%; made NYC the dominant American city; encouraged settlement of the Midwest',
    '**National Road (Cumberland Road, 1811)** — first federally funded road; connected Maryland to Illinois',
    '**Railroads (1830s–1840s)** — faster than canals; less weather-dependent; connected regions; drove iron and coal industries',
    '**Steamboats** — Robert Fulton\'s Clermont (1807) opened river trade; New Orleans became major port city',
  ]},
  { type: 'heading', content: 'industrialization — the lowell system' },
  { type: 'body', content: 'The textile industry led American industrialization. The Lowell Mills (Massachusetts, 1820s) hired young women from farms — "Lowell Girls" — for low wages. They lived in company boarding houses under strict moral supervision. When owners cut wages, the Lowell Girls organized the first significant labor actions by women in American history (1834, 1836). By 1840, factories replaced them with cheaper Irish immigrant labor.' },
  { type: 'heading', content: 'social changes' },
  { type: 'bullets', content: '', bullets: [
    '**Cult of Domesticity** — middle-class women idealized as moral guardians of the home; "separate spheres" ideology divided public (male) from private (female) life',
    '**New middle class** — professionals, managers, shopkeepers emerged between wealthy elites and working poor',
    '**Working class** — factory workers, mostly immigrants (Irish, German after 1840s); dangerous conditions, 12-14 hour days; child labor common',
    '**Urbanization** — cities grew rapidly: NYC, Boston, Philadelphia; immigration surged after 1840 Irish famine',
    '**Regions deepen** — North: industrial wage labor; South: plantation slavery; West: family farming and commerce',
  ]},
  { type: 'examtip', content: 'The Market Revolution is the economic backbone of Period 4. Know how it changed ALL aspects of American life — work, family, class, gender roles, and regional identity. It set the stage for the sectional conflict of Period 5 because it deepened economic differences between North (industrial) and South (plantation).' },
  { type: 'frqtip', content: 'DBQ and LEQ questions about reform movements in this era require you to connect the Second Great Awakening (religious revivalism) to the Market Revolution: rapid economic change created anxiety → religious revival provided certainty → revival produced reform energy → reformers attacked slavery, alcohol, women\'s inequality.' },
]

export default function APUSHU4T5() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 5, title: 'market revolution', keyTerms: ['Market Revolution', 'Erie Canal', 'Lowell Mills', 'Lowell Girls', 'cult of domesticity', 'separate spheres', 'transportation revolution', 'urbanization'] }}
      sections={sections}
      prev={{ href: '/apush/unit-4/4', title: 'era of good feelings & monroe doctrine' }}
      next={{ href: '/apush/unit-4/6', title: 'jacksonian democracy' }}
      courseHref="/apush" unitHref="/apush/unit-4"
    />
  )
}
