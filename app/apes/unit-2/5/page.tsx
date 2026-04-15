import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is ecological tolerance?',
  },
  {
    type: 'body',
    content: 'ecological tolerance is the range of environmental conditions (temperature, pH, salinity, moisture, etc.) within which a species can survive, grow, and reproduce. every species has tolerance limits for every environmental factor — conditions outside these limits cause stress, reduced reproduction, or death.',
  },
  {
    type: 'heading',
    content: 'the tolerance curve',
  },
  {
    type: 'body',
    content: 'tolerance is often visualized as a bell curve with performance (growth, reproduction, survival) on the y-axis and the environmental factor on the x-axis. the curve shows three zones:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**optimal range** — conditions where the species performs best (highest growth, reproduction)',
      '**zones of physiological stress** — conditions where the species survives but with reduced performance',
      '**zones of intolerance** — conditions too extreme for survival (below lower limit or above upper limit)',
    ],
  },
  {
    type: 'examtip',
    content: 'the AP exam may show you a tolerance curve and ask where a species performs best (the peak), or which conditions are stressful (the edges but still on the curve), or lethal (outside the curve entirely).',
  },
  {
    type: 'heading',
    content: 'stenotolerant vs. eurytolerant species',
  },
  {
    type: 'body',
    content: 'species vary in how wide their tolerance ranges are:',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['type', 'tolerance range', 'examples', 'implications'],
    tableRows: [
      ['stenotolerant (narrow)', 'very specific requirements', 'coral (narrow temp), trout (cold water only)', 'vulnerable to environmental change, good bioindicators'],
      ['eurytolerant (broad)', 'wide range of conditions', 'rats, cockroaches, raccoons, coyotes', 'adaptable, often successful in human-modified environments'],
    ],
  },
  {
    type: 'body',
    content: 'the prefixes steno- (narrow) and eury- (wide) combine with specific factors: stenothermal (narrow temperature), eurythermal (wide temperature), stenohaline (narrow salinity), euryhaline (wide salinity).',
  },
  {
    type: 'heading',
    content: 'limiting factors',
  },
  {
    type: 'body',
    content: 'a limiting factor is any environmental factor that restricts the growth, reproduction, or distribution of a population. even if all other factors are optimal, the factor in shortest supply or most stressful determines success.',
  },
  {
    type: 'subheading',
    content: 'Liebig\'s law of the minimum',
  },
  {
    type: 'body',
    content: 'plant growth is limited by the nutrient in shortest supply, regardless of how abundant other nutrients are. if soil has plenty of nitrogen and potassium but very little phosphorus, phosphorus limits growth. adding more nitrogen won\'t help until phosphorus is addressed.',
  },
  {
    type: 'subheading',
    content: 'Shelford\'s law of tolerance',
  },
  {
    type: 'body',
    content: 'organisms have both minimum and maximum limits for environmental factors. too much of a resource can be just as harmful as too little. plants need water, but flooding kills most species. organisms need nutrients, but excess nutrients cause toxicity.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**density-dependent factors** — limiting factors whose effects intensify as population density increases (competition, disease, predation)',
      '**density-independent factors** — limiting factors unrelated to population density (weather, natural disasters, pollution)',
    ],
  },
  {
    type: 'heading',
    content: 'environmental gradients and species distribution',
  },
  {
    type: 'body',
    content: 'environmental conditions change gradually across landscapes (elevation, latitude, distance from water). species distribute themselves along these gradients according to their tolerance ranges. where tolerance ranges overlap, species coexist; where they don\'t overlap, species replace each other.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**zonation** — distinct bands of species along environmental gradients (e.g., intertidal zones based on tolerance to drying)',
      '**ecotones** — transitional zones between ecosystems where conditions and species change relatively rapidly',
      '**range boundaries** — species\' geographic limits are often set by tolerance to extreme conditions (northern limits by cold tolerance, southern limits by heat tolerance)',
    ],
  },
  {
    type: 'examtip',
    content: 'climate change is shifting species\' ranges toward the poles and up mountains as temperatures warm. species are tracking their tolerance ranges, but those already at mountaintops or polar regions have nowhere to go.',
  },
  {
    type: 'heading',
    content: 'indicator species',
  },
  {
    type: 'body',
    content: 'species with narrow tolerance ranges (stenotolerant) make excellent indicators of environmental conditions. their presence indicates specific conditions; their absence indicates conditions have changed.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**amphibians** — permeable skin makes them sensitive to water quality and pollution (indicator of ecosystem health)',
      '**lichens** — sensitive to air pollution, especially sulfur dioxide (absence indicates poor air quality)',
      '**mayflies, stoneflies, caddisflies** — require clean, well-oxygenated water (presence indicates good water quality)',
      '**trout** — require cold, clean, oxygen-rich water (presence indicates healthy streams)',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may ask why a species disappeared from an area or why it can\'t live in a certain habitat. frame your answer around tolerance limits and limiting factors. identify the environmental factor that exceeds the species\' tolerance range.',
  },
]

export default function APESU2T5() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 2, title: 'the living world: biodiversity' }}
      topic={{
        number: 5,
        title: 'ecological tolerance',
        keyTerms: ['tolerance range', 'optimal range', 'limiting factor', 'stenotolerant', 'eurytolerant', 'Liebig\'s law', 'indicator species'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-2/4', title: 'island biogeography' }}
      next={{ href: '/apes/unit-2/6', title: 'natural disruptions' }}
      courseHref="/apes"
      unitHref="/apes/unit-2"
    />
  )
}
