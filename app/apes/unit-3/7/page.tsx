import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is the demographic transition model?',
  },
  {
    type: 'body',
    content: 'the demographic transition model (DTM) describes how populations change as countries develop economically. it tracks the shift from high birth and death rates to low birth and death rates, with rapid population growth in between. this pattern has occurred in every industrialized nation and is considered a universal process of development.',
  },
  {
    type: 'heading',
    content: 'the four stages',
  },
  {
    type: 'subheading',
    content: 'stage 1: pre-industrial',
  },
  {
    type: 'body',
    content: 'high birth rates and high death rates keep population relatively stable. this was the state of all human societies before the agricultural and industrial revolutions.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high birth rate** — no birth control, children needed for labor, high infant mortality means many births needed',
      '**high death rate** — disease, famine, poor sanitation, limited medical care',
      '**population** — stable or slow growth',
      '**examples today** — no countries remain in Stage 1 (closest: isolated tribal communities)',
    ],
  },
  {
    type: 'subheading',
    content: 'stage 2: transitional (early industrial)',
  },
  {
    type: 'body',
    content: 'death rates fall rapidly while birth rates remain high, causing rapid population growth. this is the "population explosion" phase.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**declining death rate** — improved sanitation, medicine, food supply, public health',
      '**high birth rate** — cultural norms haven\'t changed yet, children still economically valuable',
      '**population** — rapid growth (the gap between births and deaths widens)',
      '**examples today** — Afghanistan, some sub-Saharan African countries',
    ],
  },
  {
    type: 'subheading',
    content: 'stage 3: industrial',
  },
  {
    type: 'body',
    content: 'birth rates begin to fall, catching up to death rates. population growth slows but continues.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**declining birth rate** — urbanization (children become economic burden, not asset), education (especially female), access to contraception, career opportunities for women',
      '**low death rate** — continues due to modern medicine and sanitation',
      '**population** — growth slows but continues',
      '**examples today** — Mexico, Brazil, India, Indonesia',
    ],
  },
  {
    type: 'subheading',
    content: 'stage 4: post-industrial',
  },
  {
    type: 'body',
    content: 'both birth and death rates are low, stabilizing the population. this is where most developed nations are today.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**low birth rate** — widespread contraception, women in workforce, expensive to raise children, lifestyle choices',
      '**low death rate** — advanced healthcare, high life expectancy',
      '**population** — stable or slowly growing',
      '**examples today** — USA, UK, France, Australia',
    ],
  },
  {
    type: 'subheading',
    content: 'stage 5? (debated)',
  },
  {
    type: 'body',
    content: 'some demographers add a fifth stage where birth rates fall below death rates, causing population decline. this is occurring in Japan, Germany, Italy, and other highly developed nations with very low fertility rates.',
  },
  {
    type: 'heading',
    content: 'stages at a glance',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['stage', 'birth rate', 'death rate', 'growth', 'example'],
    tableRows: [
      ['1 Pre-industrial', 'high', 'high', 'stable', '(historical only)'],
      ['2 Transitional', 'high', 'falling', 'rapid growth', 'Afghanistan'],
      ['3 Industrial', 'falling', 'low', 'slower growth', 'India, Brazil'],
      ['4 Post-industrial', 'low', 'low', 'stable', 'USA, UK'],
      ['5 Decline (debated)', 'very low', 'low', 'negative', 'Japan, Germany'],
    ],
  },
  {
    type: 'examtip',
    content: 'the key insight: death rates fall FIRST (due to medicine/sanitation), then birth rates follow LATER (due to cultural/economic changes). the lag between these creates population growth in Stages 2-3.',
  },
  {
    type: 'heading',
    content: 'factors driving the transition',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**female education** — single strongest predictor of fertility decline',
      '**urbanization** — children shift from economic asset to cost',
      '**access to contraception** — allows family planning',
      '**child labor laws** — reduce economic incentive for large families',
      '**social security systems** — reduce need for children to support elderly',
      '**women in workforce** — opportunity cost of having children increases',
      '**infant mortality decline** — parents have fewer children when more survive',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs often ask you to place countries in DTM stages based on data, or explain what drives transitions between stages. always connect specific factors (education, healthcare, urbanization) to changes in birth and death rates. female education is the #1 factor reducing birth rates.',
  },
]

export default function APESU3T7() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations' }}
      topic={{
        number: 7,
        title: 'demographic transition model',
        keyTerms: ['demographic transition', 'pre-industrial', 'transitional', 'industrial', 'post-industrial', 'female education', 'urbanization'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-3/6', title: 'age-structure diagrams' }}
      next={{ href: '/apes/unit-3/8', title: 'human population growth' }}
      courseHref="/apes"
      unitHref="/apes/unit-3"
    />
  )
}
