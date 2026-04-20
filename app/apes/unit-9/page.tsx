import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'stratospheric ozone depletion', description: 'CFCs, ozone hole, UV radiation, and health effects.', videoId: 'hhGCV2-O8zc' },
  { number: 2, title: 'reducing ozone depletion', description: 'Montreal Protocol, CFC alternatives, and recovery.' },
  { number: 3, title: 'the greenhouse effect', description: 'natural vs enhanced effect, CO₂, methane, N₂O.', videoId: 'sMM17cmB_jc' },
  { number: 4, title: 'increases in greenhouse gases', description: 'sources, trends, and global warming potential.', videoId: 'p2bgIvuMSLg' },
  { number: 5, title: 'global climate change', description: 'evidence, impacts, and projections.', videoId: 'pINiCtUUJYo' },
  { number: 6, title: 'ocean warming & acidification', description: 'CO₂ absorption, pH changes, coral bleaching.' },
  { number: 7, title: 'invasive species & climate', description: 'range shifts, phenology changes, and ecosystem impacts.' },
  { number: 8, title: 'human impacts on ecosystems', description: 'habitat destruction, pollution, and biodiversity loss.' },
  { number: 9, title: 'endangered species legislation', description: 'ESA, CITES, and conservation strategies.' },
  { number: 10, title: 'human impacts on wetlands & mangroves', description: 'ecosystem services loss and restoration.' },
]

export default function APESUnit9Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 9, title: 'global change', examWeight: '15–20%', description: 'the highest-weighted unit — climate change, treaties, formulas, and FRQ mastery.' }}
      topics={topics}
      basePath="/apes/unit-9"
      courseHref="/apes"
      videoId="PfSm29EyANU"
      examDate={{ date: 'Tuesday, May 6, 2025', time: '8:00 AM' }}
    />
  )
}
