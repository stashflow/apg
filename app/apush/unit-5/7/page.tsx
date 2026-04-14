import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 5, title: 'period 5: 1844–1877' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'reconstruction plans' },
  { type: 'table', content: '', tableHeaders: ['plan', 'who', 'terms', 'outcome'],
    tableRows: [
      ['10% Plan (1863)', 'Lincoln', '10% of voters swear loyalty oath → state readmitted; slavery abolished', 'Too lenient for Radicals; Congress rejected it'],
      ['Wade-Davis Bill (1864)', 'Radical Republicans', '50% of voters + iron-clad oath; disenfranchised Confederate officers', 'Lincoln pocket-vetoed it'],
      ['Radical Reconstruction (1867)', 'Congress', 'South divided into 5 military districts; Black men can vote; states must ratify 14th Amendment', 'Imposed by Congress over Johnson\'s vetoes'],
      ['Compromise of 1877', 'Hayes-Tilden deal', 'Hayes became president; federal troops withdrawn from South', 'Ended Reconstruction; abandoned Black Southerners'],
    ]
  },
  { type: 'heading', content: 'achievements of reconstruction' },
  { type: 'bullets', content: '', bullets: [
    '**Freedmen\'s Bureau** — federal agency providing food, education, labor contracts for freed Black people; established schools; most effective federal social program before the New Deal',
    '**Black political participation** — 16 Black congressmen (including 2 senators: Hiram Revels and Blanche Bruce) during Reconstruction; hundreds of Black state legislators',
    '**Education expansion** — HBCUs (Historically Black Colleges and Universities) founded: Howard, Fisk, Morehouse; literacy rates for Black Americans rose dramatically',
    '**Economic gains** — sharecropping replaced slavery (better than slavery, worse than free labor); some Black families accumulated land and property',
  ]},
  { type: 'heading', content: 'collapse of reconstruction' },
  { type: 'bullets', content: '', bullets: [
    '**KKK and terror** — Ku Klux Klan (founded 1865) used murder, arson, and intimidation to suppress Black voting; Congress passed Force Acts (1870–71) temporarily suppressing the Klan',
    '**Black Codes** — Southern states immediately passed laws restricting Black freedom: couldn\'t vote, own land, travel without permission, or hold certain jobs',
    '**Scalawags & Carpetbaggers** — white Southern Republicans (scalawags) and Northern Republican migrants (carpetbaggers) — both targeted for violence',
    '**Redemption** — Southern Democrats ("Redeemers") used fraud and violence to "redeem" Southern states from Republican government; by 1876 most of the South was "redeemed"',
  ]},
  { type: 'examtip', content: 'Reconstruction is consistently tested as a FAILURE — not because it was the wrong policy, but because Northern will collapsed before Southern resistance. Know both what was achieved AND what prevented those achievements from lasting. The "Compromise of 1877" = death of Reconstruction.' },
]

export default function APUSHU5T7() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 7, title: 'reconstruction', keyTerms: ['Freedmen\'s Bureau', 'Radical Reconstruction', 'scalawags', 'carpetbaggers', 'Black Codes', 'KKK', 'Redeemers', '10% Plan', 'Compromise of 1877'] }}
      sections={sections}
      prev={{ href: '/apush/unit-5/6', title: 'civil war turning points' }}
      next={{ href: '/apush/unit-5/8', title: '13th, 14th & 15th amendments' }}
      courseHref="/apush" unitHref="/apush/unit-5"
    />
  )
}
