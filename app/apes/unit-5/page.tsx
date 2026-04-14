import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'agriculture & irrigation', description: 'green revolution, GMOs, irrigation methods (flood, drip, furrow), and water use efficiency.' },
  { number: 2, title: 'deforestation', description: 'causes, effects on carbon/water cycles, slash-and-burn, and sustainable forestry practices.' },
  { number: 3, title: 'urbanization', description: 'urban heat islands, impervious surfaces, sprawl, smart growth, and green infrastructure.' },
  { number: 4, title: 'fisheries', description: 'maximum sustainable yield, overfishing, bycatch, aquaculture pros/cons, and fishing regulations.' },
  { number: 5, title: 'mining', description: 'surface vs. subsurface mining, acid mine drainage, tailings, mountaintop removal, and remediation.' },
]

export default function APESUnit5Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 5, title: 'land & water use', examWeight: '10–15%', description: 'how humans use land and water — and the environmental consequences of those choices.' }}
      topics={topics}
      basePath="/apes/unit-5"
      videoId="Aq2K9R9lrtA"
