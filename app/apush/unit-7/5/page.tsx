import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 7, title: 'period 7: 1890–1945' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'causes of the great depression' },
  { type: 'body', content: 'The Great Depression (1929–1939) was the worst economic catastrophe in American history. It was not caused by one event — the stock market crash of October 1929 ("Black Tuesday") was the trigger, but the underlying structural problems had been building throughout the 1920s.' },
  { type: 'bullets', content: '', bullets: [
    '**overproduction** — factories and farms produced more than consumers could buy; farm prices had been depressed all decade',
    '**consumer debt** — installment buying left millions over-leveraged; when income fell, spending collapsed',
    '**stock market speculation** — buying stocks "on margin" (on credit) created a bubble; when prices fell, margin calls wiped out investors',
    '**weak banking system** — banks had made risky loans; when they failed, depositors lost everything (no FDIC yet)',
    '**Smoot-Hawley Tariff (1930)** — raised tariffs to record levels; other nations retaliated; international trade collapsed, deepening the depression globally',
    '**Federal Reserve error** — contracted the money supply when it should have expanded it, worsening deflation',
  ]},
  { type: 'heading', content: 'hoover\'s response' },
  { type: 'bullets', content: '', bullets: [
    'Hoover believed in **voluntary cooperation** and **rugged individualism** — opposed direct federal relief as destroying character',
    '**Reconstruction Finance Corporation (1932)** — lent money to banks and railroads; too little, too late',
    '**Hoovervilles** — shantytowns of unemployed named mockingly after the president',
    '**Bonus Army (1932)** — WWI veterans marched on Washington demanding early payment of bonuses; Hoover ordered army to disperse them; General MacArthur used tanks and tear gas; political disaster for Hoover',
    'Unemployment reached **25%** by 1933; GDP fell by 30%; banks failed by the thousands',
  ]},
  { type: 'heading', content: 'social impact' },
  { type: 'bullets', content: '', bullets: [
    '**Dust Bowl** — severe drought + poor farming practices created massive dust storms across the Great Plains (1930s); displaced hundreds of thousands of "Okies" who migrated to California',
    '**John Steinbeck** — *The Grapes of Wrath* (1939) documented Dust Bowl migrants; powerful cultural document',
    '**demographic shifts** — migration of unemployed workers; marriage and birth rates fell; psychological toll was immense',
    '**Hoovervilles, breadlines, soup kitchens** — symbols of the scale of suffering',
  ]},
  { type: 'examtip', content: 'The exam frequently asks you to explain the CAUSES of the depression — go beyond "the stock market crashed." The structural causes (overproduction, debt, banking weakness, Smoot-Hawley, Federal Reserve contraction) are what the graders want. The crash was the trigger; the structural weaknesses were the cause.' },
]

export default function APUSHU7T5() {
  return (
    <NotesPage
      course={apush} unit={unit}
      topic={{ number: 5, title: 'great depression', keyTerms: ['Black Tuesday', 'Smoot-Hawley Tariff', 'Hoovervilles', 'Bonus Army', 'Dust Bowl', 'overproduction', 'rugged individualism', 'margin buying'] }}
      sections={sections}
      prev={{ href: '/apush/unit-7/4', title: 'roaring twenties' }}
      next={{ href: '/apush/unit-7/6', title: 'new deal' }}
      courseHref="/apush" unitHref="/apush/unit-7"
    />
  )
}
