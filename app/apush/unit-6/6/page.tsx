import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 6, title: 'period 6: 1865–1898' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'agrarian crisis & the populist movement' },
  { type: 'body', content: 'After the Civil War, American farmers faced a brutal economic squeeze: crop prices fell (overproduction, global competition) while railroad freight rates, equipment costs, and loan interest remained high. Farmers who borrowed to buy land and machinery during good times went bankrupt in bad times. Railroads charged whatever they wanted. Banks foreclosed. Farmers organized.' },
  { type: 'heading', content: 'farmers\' alliance & the omaha platform (1892)' },
  { type: 'bullets', content: '', bullets: [
    '**Farmers\' Alliance (1880s)** — the largest mass movement in American history up to that time; 3 million members; organized cooperative buying/selling to bypass middlemen',
    '**Subtreasury Plan** — government warehouses would store crops and lend farmers 80% of value at low interest; effectively a federal agricultural credit system; radical for its time; became the basis for later New Deal programs',
    '**People\'s Party (Populists, 1892)** — political party formed from Alliance; Omaha Platform: graduated income tax, direct election of senators, 8-hour workday, government ownership of railroads',
    '**James B. Weaver** — Populist presidential candidate (1892); won 22 electoral votes — remarkable for a third party',
  ]},
  { type: 'heading', content: 'the free silver debate & 1896 election' },
  { type: 'body', content: 'Farmers wanted inflation to reduce debt burden. The solution: "free silver" — coin silver at 16:1 ratio with gold, expanding the money supply. Eastern bankers and creditors wanted "sound money" (gold standard) — deflation helped them collect on loans. The debate consumed the 1890s.' },
  { type: 'bullets', content: '', bullets: [
    '**William Jennings Bryan** — "Cross of Gold" speech (1896 Democratic convention) electrified the crowd: "You shall not crucify mankind upon a cross of gold!" Won Democratic AND Populist nominations',
    '**William McKinley (R)** — backed by Eastern business (Mark Hanna\'s fundraising machine); ran on gold standard, protective tariff, and stability',
    '**1896 election** — McKinley won decisively; Populism collapsed because it failed to win urban workers who feared inflation too; Bryan lost again in 1900 and 1908',
    '**Populist legacy** — most of the Omaha Platform was eventually enacted: graduated income tax (16th Amendment), direct election of senators (17th Amendment), federal regulation of railroads',
  ]},
  { type: 'examtip', content: 'Populism\'s defeat in 1896 is NOT the end of its ideas. The 16th and 17th Amendments directly fulfill Populist demands. The New Deal\'s agricultural programs (AAA, crop loans) are descendants of the subtreasury plan. Populism = the first major challenge to industrial capitalism.' },
]

export default function APUSHU6T6() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 6, title: 'populist movement', keyTerms: ['Farmers\' Alliance', 'Omaha Platform', 'People\'s Party', 'free silver', 'gold standard', 'Bryan', 'Cross of Gold', 'subtreasury plan'] }}
      sections={sections}
      prev={{ href: '/apush/unit-6/5', title: 'gilded age politics' }}
      courseHref="/apush" unitHref="/apush/unit-6"
    />
  )
}
