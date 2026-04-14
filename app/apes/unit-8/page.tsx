import { UnitPage } from '@/components/unit-page'

const topics = [
  { number: 1, title: 'water pollution', description: 'point vs. nonpoint source pollution, pathogens, heavy metals, nitrates, and the Clean Water Act.' },
  { number: 2, title: 'eutrophication', description: 'nutrient loading, algal blooms, hypoxic dead zones, biological oxygen demand (BOD), and Chesapeake Bay.' },
  { number: 3, title: 'waste disposal', description: 'landfills, leachate, incineration, composting, the 5 Rs hierarchy, and e-waste.' },
  { number: 4, title: 'oil spills', description: 'Deepwater Horizon and Exxon Valdez case studies, cleanup methods, and ecosystem recovery timelines.' },
  { number: 5, title: 'plastic pollution', description: 'microplastics, ocean gyres, bioaccumulation, and policy responses to plastic waste.' },
]

export default function APESUnit8Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution', examWeight: '7–10%', description: 'water pollution, eutrophication, waste management, oil spills, and plastic pollution.' }}
      topics={topics}
      basePath="/apes/unit-8"
      videoId="H0SUmO0qVxw"
