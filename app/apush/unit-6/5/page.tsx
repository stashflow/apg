import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 6, title: 'period 6: 1865–1898' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'gilded age political landscape' },
  { type: 'body', content: 'Gilded Age politics (1870s–1890s) was notable for: (1) extremely high voter turnout (75–80%) despite the era\'s reputation for corruption; (2) close national elections — control of the presidency and Congress constantly shifted; (3) political parties organized along ethnic, religious, and regional lines more than ideological ones; (4) massive corruption at all levels — the spoils system distributed government jobs to party supporters.' },
  { type: 'heading', content: 'civil service reform' },
  { type: 'bullets', content: '', bullets: [
    '**Stalwarts vs. Half-Breeds** — factions within the Republican Party; Stalwarts (Roscoe Conkling) defended the spoils system; Half-Breeds (James Blaine) wanted modest reform',
    '**Garfield assassination (1881)** — Charles Guiteau, a "disappointed office-seeker," shot President Garfield because he didn\'t get a patronage job; died after 79 days; shocked the nation',
    '**Pendleton Civil Service Act (1883)** — created the Civil Service Commission; 10% of federal jobs filled by merit exam (not patronage); gradually expanded; ended the worst spoils abuses',
    '**Mugwumps** — Republican reformers who crossed party lines in 1884 to vote for Democrat Grover Cleveland over corrupt Republican Blaine; proved reform was a political force',
  ]},
  { type: 'heading', content: 'plessy v. ferguson (1896)' },
  { type: 'body', content: 'Homer Plessy challenged Louisiana\'s Separate Car Act. The Court\'s "separate but equal" ruling under the 14th Amendment\'s equal protection clause allowed segregation if facilities were theoretically equal. Justice Harlan\'s lone dissent predicted: "The thin disguise of \'equal\' accommodations... will not mislead anyone, nor atone for the wrong this day done." He was right — separate was never equal.' },
  { type: 'heading', content: 'jim crow south' },
  { type: 'bullets', content: '', bullets: [
    'After Reconstruction ended (1877), Southern states systematically stripped Black Americans of political rights: poll taxes, literacy tests, grandfather clauses, white primaries',
    '**Lynching** — 3,446 Black Americans lynched 1882–1968; Ida B. Wells\'s investigative journalism exposed lynching as racial terrorism, not "justice"',
    '**Booker T. Washington** — Atlanta Compromise (1895): accept segregation for now, focus on economic self-improvement; founded Tuskegee Institute',
    '**W.E.B. Du Bois** — opposed Washington; demanded full political and civil rights NOW; "talented tenth" to lead Black community; co-founded NAACP (1909)',
  ]},
  { type: 'examtip', content: 'Washington vs. Du Bois is a critical APUSH debate. Washington: accommodation + economic progress; Du Bois: immediate full civil rights. Know both positions and be able to evaluate them in their historical context.' },
]

export default function APUSHU6T5() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 5, title: 'gilded age politics', keyTerms: ['Pendleton Act', 'civil service reform', 'Plessy v. Ferguson', 'Jim Crow', 'Booker T. Washington', 'W.E.B. Du Bois', 'NAACP', 'Ida B. Wells'] }}
      sections={sections}
      prev={{ href: '/apush/unit-6/4', title: 'immigration & urbanization' }}
      next={{ href: '/apush/unit-6/6', title: 'populist movement' }}
      courseHref="/apush" unitHref="/apush/unit-6"
    />
  )
}
