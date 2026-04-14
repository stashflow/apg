import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 6, title: 'period 6: 1865–1898' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the new immigration (1880s–1920s)' },
  { type: 'body', content: '"Old" immigrants (pre-1880) came from Northern/Western Europe (British, German, Irish, Scandinavian) — Protestant, often skilled. "New" immigrants (1880s–1924) came from Southern and Eastern Europe (Italians, Poles, Russians, Jews, Greeks) — Catholic, Orthodox, or Jewish; often unskilled peasants fleeing poverty and persecution. By 1910, 15 million had arrived. They transformed American cities but faced massive nativism.' },
  { type: 'bullets', content: '', bullets: [
    '**Ellis Island (opened 1892)** — main entry point for European immigrants; 12 million processed through; quick medical and legal inspection; 2% turned away',
    '**Tenements** — overcrowded, dark apartment buildings in immigrant neighborhoods; Jacob Riis photographed these conditions in How the Other Half Lives (1890)',
    '**Ethnic enclaves** — Little Italy, Chinatown, Jewish Lower East Side — immigrants concentrated in neighborhoods for mutual support; maintained native languages and culture',
    '**Nativism** — fear of immigrants; arguments: they take jobs, dilute American culture, are racially inferior, bring radical politics',
    '**Chinese Exclusion Act (1882)** — first federal law to exclude immigrants based on race/nationality; banned Chinese laborers; not repealed until 1943',
    '**Immigration Restriction League (1894)** — lobbied for literacy tests; eventually succeeded with Immigration Act of 1924 (National Origins Act) which severely restricted Southern/Eastern European immigration',
  ]},
  { type: 'heading', content: 'political machines' },
  { type: 'body', content: 'Urban political machines (Tammany Hall in NYC, led by "Boss" Tweed) provided services to immigrants in exchange for votes: jobs, housing assistance, legal help, food in hard times. They were corrupt (stealing millions from city contracts) but served genuine social welfare functions that government didn\'t provide. Middle-class Progressives attacked machines; immigrants often defended them.' },
  { type: 'examtip', content: 'The "new vs. old" immigration distinction is tested on APUSH MCQs. Know: old = Northern/Western Europe; new = Southern/Eastern Europe + Asia. The Chinese Exclusion Act and the 1924 Immigration Act both reflected nativist responses to the new immigration.' },
]

export default function APUSHU6T4() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 4, title: 'immigration & urbanization', keyTerms: ['new immigration', 'Ellis Island', 'tenements', 'nativism', 'Chinese Exclusion Act', 'Tammany Hall', 'political machines', 'Jacob Riis'] }}
      sections={sections}
      prev={{ href: '/apush/unit-6/3', title: 'labor unions' }}
      next={{ href: '/apush/unit-6/5', title: 'gilded age politics' }}
      courseHref="/apush" unitHref="/apush/unit-6"
    />
  )
}
