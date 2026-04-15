import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'structure of the atmosphere',
  },
  {
    type: 'body',
    content: 'Earth\'s atmosphere is divided into layers based on temperature changes with altitude. understanding these layers is essential for topics like the greenhouse effect, ozone depletion, and air pollution.',
  },
  {
    type: 'heading',
    content: 'atmospheric composition',
  },
  {
    type: 'body',
    content: 'the atmosphere is composed primarily of:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**nitrogen (N₂)** — 78% of atmosphere',
      '**oxygen (O₂)** — 21% of atmosphere',
      '**argon (Ar)** — 0.9% of atmosphere',
      '**carbon dioxide (CO₂)** — ~0.04% (but crucial for greenhouse effect)',
      '**water vapor** — variable (0-4%), also a greenhouse gas',
      '**trace gases** — methane, nitrous oxide, ozone, CFCs, etc.',
    ],
  },
  {
    type: 'heading',
    content: 'the four main layers',
  },
  {
    type: 'subheading',
    content: 'troposphere (0-12 km)',
  },
  {
    type: 'body',
    content: 'the lowest layer where we live and weather occurs. temperature decreases with altitude.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**contains 80% of atmospheric mass** — most of the air',
      '**all weather occurs here** — clouds, rain, storms',
      '**temperature decreases** — about 6.5°C per km (lapse rate)',
      '**ends at tropopause** — boundary where temperature stops decreasing',
      '**where air pollution concentrates** — especially in cities',
    ],
  },
  {
    type: 'subheading',
    content: 'stratosphere (12-50 km)',
  },
  {
    type: 'body',
    content: 'contains the ozone layer. temperature increases with altitude because ozone absorbs UV radiation.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**ozone layer (O₃)** — concentrated at 15-35 km; absorbs UV-B and UV-C radiation',
      '**temperature increases** — UV absorption heats this layer',
      '**very dry and stable** — little vertical mixing',
      '**commercial jets fly here** — above most weather',
      '**CFCs destroy ozone here** — causing the ozone hole',
    ],
  },
  {
    type: 'subheading',
    content: 'mesosphere (50-80 km)',
  },
  {
    type: 'body',
    content: 'temperature decreases with altitude again. meteors burn up here ("shooting stars").',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**coldest layer** — temperatures down to -90°C at the mesopause',
      '**meteors burn up** — friction with thin air',
      '**little environmental relevance** — for AP purposes',
    ],
  },
  {
    type: 'subheading',
    content: 'thermosphere (80-500+ km)',
  },
  {
    type: 'body',
    content: 'temperature increases dramatically due to absorption of high-energy solar radiation. extremely thin air.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**high temperatures** — up to 2,000°C, but feels cold due to low air density',
      '**ionosphere within it** — charged particles reflect radio waves',
      '**auroras occur here** — solar particles interact with atmosphere',
      '**satellites orbit here** — International Space Station at ~400 km',
    ],
  },
  {
    type: 'heading',
    content: 'summary table',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['layer', 'altitude', 'temperature trend', 'key features'],
    tableRows: [
      ['troposphere', '0-12 km', 'decreases ↓', 'weather, air pollution, where we live'],
      ['stratosphere', '12-50 km', 'increases ↑', 'ozone layer, UV absorption'],
      ['mesosphere', '50-80 km', 'decreases ↓', 'coldest layer, meteors burn'],
      ['thermosphere', '80-500+ km', 'increases ↑', 'very hot but thin, auroras, satellites'],
    ],
  },
  {
    type: 'examtip',
    content: 'for the AP exam, focus on troposphere (weather and pollution) and stratosphere (ozone layer). know that ozone in the stratosphere is GOOD (protects from UV), while ozone in the troposphere is BAD (ground-level ozone is a pollutant).',
  },
  {
    type: 'heading',
    content: 'the ozone layer',
  },
  {
    type: 'body',
    content: 'stratospheric ozone (O₃) absorbs harmful ultraviolet radiation, protecting life on Earth:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**UV-C** — completely absorbed by ozone (most dangerous but blocked)',
      '**UV-B** — partially absorbed; causes sunburn, skin cancer, cataracts',
      '**UV-A** — mostly passes through; less harmful',
      '**ozone depletion** — covered in detail in Unit 7 (CFCs, Montreal Protocol)',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may ask about the difference between "good" ozone (stratospheric, protective) and "bad" ozone (tropospheric, pollutant). or they may ask about temperature trends in different layers and what causes them.',
  },
]

export default function APESU4T4() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 4,
        title: 'atmospheric layers',
        keyTerms: ['troposphere', 'stratosphere', 'mesosphere', 'thermosphere', 'ozone layer', 'lapse rate', 'tropopause'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-4/3', title: 'watersheds & aquifers' }}
      next={{ href: '/apes/unit-4/5', title: 'global wind patterns' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
