import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'human population history',
  },
  {
    type: 'body',
    content: 'for most of human history, population grew slowly. three major innovations caused population surges: the agricultural revolution (~10,000 BCE), the industrial revolution (~1750 CE), and the medical/green revolution (~1950 CE). today\'s population of ~8 billion is unprecedented in human history.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**10,000 BCE** — ~5 million humans (hunter-gatherers)',
      '**1 CE** — ~200 million (agricultural societies)',
      '**1800** — ~1 billion (beginning of industrial era)',
      '**1927** — 2 billion (124 years to add 1 billion)',
      '**1960** — 3 billion (33 years)',
      '**1974** — 4 billion (14 years)',
      '**1987** — 5 billion (13 years)',
      '**1999** — 6 billion (12 years)',
      '**2011** — 7 billion (12 years)',
      '**2022** — 8 billion (11 years)',
    ],
  },
  {
    type: 'heading',
    content: 'key population metrics',
  },
  {
    type: 'subheading',
    content: 'total fertility rate (TFR)',
  },
  {
    type: 'body',
    content: 'the average number of children a woman has during her lifetime. TFR is the most important measure for predicting future population:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**replacement level fertility** — 2.1 children per woman (enough to replace both parents plus account for child mortality)',
      '**above replacement** — population grows (TFR > 2.1)',
      '**below replacement** — population eventually declines (TFR < 2.1)',
      '**global TFR** — dropped from 5.0 in 1960 to ~2.3 today',
    ],
  },
  {
    type: 'subheading',
    content: 'crude birth rate and death rate',
  },
  {
    type: 'body',
    content: 'births and deaths per 1,000 people per year. "crude" because they don\'t account for age structure.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**crude birth rate (CBR)** — global average ~18 per 1,000',
      '**crude death rate (CDR)** — global average ~8 per 1,000',
      '**rate of natural increase (RNI)** — (CBR - CDR) / 10 = annual growth rate percentage',
    ],
  },
  {
    type: 'subheading',
    content: 'infant mortality rate',
  },
  {
    type: 'body',
    content: 'deaths of infants under age 1 per 1,000 live births. a key indicator of development and healthcare quality. ranges from <3 (Japan, Singapore) to >100 (some African nations).',
  },
  {
    type: 'heading',
    content: 'regional population trends',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['region', 'current trend', 'TFR', 'key factors'],
    tableRows: [
      ['Sub-Saharan Africa', 'rapid growth', '4.5+', 'high fertility, improving mortality'],
      ['South Asia', 'slowing growth', '2.0-2.5', 'declining fertility, large young population'],
      ['East Asia', 'stable/declining', '1.0-1.7', 'very low fertility, aging population'],
      ['Europe', 'declining', '1.4-1.8', 'below replacement fertility'],
      ['North America', 'slow growth', '1.6-1.8', 'immigration offsets low fertility'],
      ['Latin America', 'slowing growth', '1.9-2.2', 'rapid fertility decline'],
    ],
  },
  {
    type: 'heading',
    content: 'population policies',
  },
  {
    type: 'body',
    content: 'governments use various policies to influence population growth:',
  },
  {
    type: 'subheading',
    content: 'anti-natalist policies (reduce births)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**China\'s one-child policy (1979-2015)** — restricted most couples to one child, prevented ~400 million births, criticized for human rights violations and forced abortions',
      '**India\'s family planning** — voluntary programs, incentives for sterilization, varying state policies',
      '**education and empowerment** — investing in female education and workforce participation',
    ],
  },
  {
    type: 'subheading',
    content: 'pro-natalist policies (increase births)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**parental leave** — paid time off for new parents (Scandinavia)',
      '**childcare subsidies** — reducing cost of raising children (France)',
      '**tax benefits** — financial incentives for larger families',
      '**immigration** — offsetting low fertility with foreign workers',
    ],
  },
  {
    type: 'examtip',
    content: 'the most effective and ethical approach to reducing population growth is empowering women through education and economic opportunity. coercive policies like China\'s one-child policy are controversial due to human rights concerns.',
  },
  {
    type: 'heading',
    content: 'future projections',
  },
  {
    type: 'body',
    content: 'UN projections suggest global population will reach ~10.4 billion by 2100, then stabilize or decline. key uncertainties:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**fertility decline in Africa** — will it follow the global pattern?',
      '**climate change impacts** — could increase mortality in vulnerable regions',
      '**technological changes** — could increase or decrease carrying capacity',
      '**immigration patterns** — will reshape regional demographics',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs often ask about policies to reduce population growth. emphasize education (especially female), access to contraception, and economic development. if asked about specific countries, connect to their DTM stage and cultural context.',
  },
]

export default function APESU3T8() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 3, title: 'populations' }}
      topic={{
        number: 8,
        title: 'human population growth',
        keyTerms: ['total fertility rate (TFR)', 'replacement level', 'crude birth rate', 'crude death rate', 'infant mortality', 'one-child policy', 'pro-natalist'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-3/7', title: 'demographic transition model' }}
      courseHref="/apes"
      unitHref="/apes/unit-3"
    />
  )
}
