import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 8, title: 'period 8: 1945–1980' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'lbj\'s great society' },
  { type: 'body', content: 'Lyndon Johnson won the 1964 election in a massive landslide and used the political capital to push the most sweeping domestic legislation since the New Deal. His "Great Society" aimed to eliminate poverty and racial injustice — building on Kennedy\'s stalled agenda and the civil rights movement\'s pressure.' },
  { type: 'heading', content: 'key great society programs' },
  { type: 'table', content: '', tableHeaders: ['program', 'year', 'what it did'],
    tableRows: [
      ['Medicare', '1965', 'Federal health insurance for Americans over 65; over conservatives\' fierce opposition'],
      ['Medicaid', '1965', 'Federal-state health insurance for low-income Americans'],
      ['Elementary & Secondary Education Act', '1965', 'First major federal funding for public education'],
      ['Immigration Act (Hart-Celler)', '1965', 'Abolished national-origins quota system; dramatically changed immigration patterns toward Asia/Latin America'],
      ['Voting Rights Act', '1965', 'See Civil Rights topic — Great Society\'s most consequential achievement'],
      ['Head Start', '1965', 'Preschool program for low-income children; community action programs'],
      ['HUD / Housing Act', '1965', 'Created Department of Housing and Urban Development; federal urban renewal'],
    ]
  },
  { type: 'heading', content: 'limits of the great society' },
  { type: 'bullets', content: '', bullets: [
    '**Vietnam undermined it** — war costs crowded out domestic spending; LBJ\'s attention and political capital consumed by war',
    '**urban riots (1964–1968)** — Watts (1965), Newark/Detroit (1967); showed Great Society programs hadn\'t solved urban poverty',
    '**white backlash** — conservative reaction against civil rights enforcement, affirmative action, and urban unrest fueled rise of Republican coalition',
    '**structural limits** — programs addressed symptoms but not structural causes of poverty; critics on both left (not enough) and right (too much government)',
  ]},
  { type: 'examtip', content: 'Compare New Deal vs. Great Society: both massively expanded the federal government\'s role in social welfare. Key difference: New Deal focused on economic relief/recovery; Great Society added civil rights and social justice. Both faced conservative opposition and had lasting institutional legacies (Social Security + Medicare still define American social policy).' },
]

export default function APUSHU8T5() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 5, title: 'great society', keyTerms: ['Medicare', 'Medicaid', 'Head Start', 'Immigration Act 1965', 'War on Poverty', 'HUD', 'LBJ', 'white backlash', 'urban riots'] }}
      sections={sections}
      prev={{ href: '/apush/unit-8/4', title: 'civil rights movement' }}
      next={{ href: '/apush/unit-8/6', title: 'nixon & watergate' }}
      courseHref="/apush" unitHref="/apush/unit-8"
    />
  )
}
