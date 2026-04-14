import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 9, title: 'period 9: 1980–present' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the most important supreme court cases' },
  { type: 'body', content: 'The AP exam tests landmark cases across all periods. You must know the case name, the ruling, and its historical significance. Below are the cases that appear most frequently.' },
  { type: 'table', content: '', tableHeaders: ['case', 'year', 'ruling & significance'],
    tableRows: [
      ['Marbury v. Madison', '1803', 'Established judicial review — Supreme Court can strike down laws as unconstitutional; foundational case'],
      ['McCulloch v. Maryland', '1819', 'Federal government has implied powers (elastic clause); federal law supreme over state law (supremacy clause)'],
      ['Gibbons v. Ogden', '1824', 'Broad federal power over interstate commerce; expanded Congressional power'],
      ['Dred Scott v. Sandford', '1857', 'Enslaved people are property not citizens; Congress cannot ban slavery in territories; helped cause Civil War'],
      ['Plessy v. Ferguson', '1896', '"Separate but equal" — legalized Jim Crow segregation for 58 years'],
      ['Schenck v. United States', '1919', '"Clear and present danger" test for speech; upheld Espionage Act limits on anti-war speech'],
      ['Korematsu v. United States', '1944', 'Upheld Japanese American internment; later repudiated; example of wartime civil liberties failure'],
      ['Brown v. Board of Education', '1954', 'Overturned Plessy; school segregation violates Equal Protection; launched civil rights era'],
      ['Miranda v. Arizona', '1966', 'Police must inform suspects of rights before interrogation; 5th/6th Amendment protections'],
      ['Roe v. Wade', '1973', 'Constitutional right to abortion based on privacy; overturned by Dobbs v. Jackson (2022)'],
      ['Bush v. Gore', '2000', 'Stopped Florida recount; gave presidency to Bush; controversial equal protection reasoning'],
      ['Obergefell v. Hodges', '2015', 'Same-sex marriage is a constitutional right under 14th Amendment'],
    ]
  },
  { type: 'examtip', content: 'For the AP exam, organize these cases by constitutional issue: (1) federalism cases (Marbury, McCulloch, Gibbons); (2) civil liberties in wartime (Schenck, Korematsu); (3) equal protection (Plessy, Brown, Obergefell); (4) due process/privacy (Miranda, Roe). This framework helps you recall relevant cases under pressure.' },
]

export default function APUSHU9T5() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 5, title: 'supreme court landmark cases', keyTerms: ['Marbury v. Madison', 'judicial review', 'McCulloch v. Maryland', 'Brown v. Board', 'Miranda rights', 'Roe v. Wade', 'Plessy v. Ferguson', 'Korematsu', 'Obergefell'] }}
      sections={sections}
      prev={{ href: '/apush/unit-9/4', title: 'modern political polarization' }}
      next={{ href: '/apush/unit-9/6', title: 'dbq, leq & saq practice' }}
      courseHref="/apush" unitHref="/apush/unit-9"
    />
  )
}
