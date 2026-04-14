import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 7, title: 'period 7: 1890–1945' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'the progressive era (1890s–1920s)' },
  { type: 'body', content: 'Progressivism was a broad reform movement responding to the problems of industrialization: corporate monopoly, urban poverty, political corruption, unsafe food/drugs/workplaces, and inequality. Progressives believed the government SHOULD regulate the economy and improve social conditions — a direct rejection of Gilded Age laissez-faire ideology. Middle-class, educated, mostly white Protestants led the movement.' },
  { type: 'heading', content: 'muckrakers' },
  { type: 'bullets', content: '', bullets: [
    '**Upton Sinclair** — The Jungle (1906): exposed horrific conditions in Chicago meatpacking plants; intended to promote socialism; got the Pure Food and Drug Act and Meat Inspection Act instead',
    '**Ida Tarbell** — History of the Standard Oil Company (1904): meticulous investigative journalism exposing Rockefeller\'s monopolistic practices; led to Standard Oil\'s breakup (1911)',
    '**Lincoln Steffens** — The Shame of the Cities (1904): exposed urban political machine corruption',
    '**Jacob Riis** — How the Other Half Lives (1890): photographs of tenement conditions; influenced housing reform',
    'TR coined "muckraker" (from Bunyan\'s Pilgrim\'s Progress) — slightly disparaging but the term stuck',
  ]},
  { type: 'heading', content: 'progressive amendments (16th–19th)' },
  { type: 'table', content: '', tableHeaders: ['amendment', 'year', 'what it did'],
    tableRows: [
      ['16th', '1913', 'Federal income tax — allowed graduated taxation (Populist demand!)'],
      ['17th', '1913', 'Direct election of U.S. senators — previously elected by state legislatures (also Populist demand)'],
      ['18th', '1919', 'Prohibition — banned manufacture/sale of alcohol; went into effect 1920'],
      ['19th', '1920', 'Women\'s suffrage — "the right of citizens to vote shall not be denied... on account of sex"'],
    ]
  },
  { type: 'heading', content: 'the three progressive presidents' },
  { type: 'bullets', content: '', bullets: [
    '**Theodore Roosevelt (R, 1901–1909)** — trust-busting (Northern Securities, 1904); conservation; Pure Food/Drug Act; "Square Deal"; first to use executive power aggressively in public interest',
    '**William Howard Taft (R, 1909–1913)** — actually busted MORE trusts than TR but didn\'t publicize it; TR turned against him; Taft lost support of both progressive and conservative Republicans',
    '**Woodrow Wilson (D, 1913–1921)** — "New Freedom"; Federal Reserve (1913); Clayton Antitrust Act (1914); Federal Trade Commission; WWI intervention; League of Nations (Senate rejected it)',
  ]},
  { type: 'examtip', content: 'Know all four Progressive amendments (16th–19th) and their connection to earlier reform movements. The 16th and 17th directly fulfilled Populist Party demands from 1892. The 19th was the culmination of 72 years of women\'s suffrage activism from Seneca Falls (1848).' },
]

export default function APUSHU7T1() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 1, title: 'progressive era', keyTerms: ['muckrakers', 'Sinclair', 'Tarbell', 'trust-busting', '16th Amendment', '17th Amendment', '18th Amendment', '19th Amendment', 'Square Deal', 'New Freedom'] }}
      sections={sections}
      next={{ href: '/apush/unit-7/2', title: 'imperialism' }}
      courseHref="/apush" unitHref="/apush/unit-7"
    />
  )
}
