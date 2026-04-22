import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'water pollution sources', description: 'point vs nonpoint, pathogens, heavy metals, nitrates.' },
  { number: 2, title: 'thermal pollution', description: 'power plant cooling, dissolved oxygen, and aquatic life.' },
  { number: 3, title: 'eutrophication', description: 'nutrient loading, algal blooms, hypoxic dead zones, BOD.' },
  { number: 4, title: 'bioaccumulation & biomagnification', description: 'toxins concentrating up the food chain.' },
  { number: 5, title: 'pathogens & disease', description: 'waterborne diseases, fecal coliform, and treatment.' },
  { number: 6, title: 'sewage treatment', description: 'primary, secondary, tertiary treatment, and septic systems.' },
  { number: 7, title: 'solid waste & landfills', description: 'sanitary landfills, leachate, methane, and the 5 Rs.' },
  { number: 8, title: 'incineration & hazardous waste', description: 'burning waste, toxic ash, and disposal methods.' },
  { number: 9, title: 'oil spills', description: 'Deepwater Horizon, Exxon Valdez, cleanup, recovery.' },
  { number: 10, title: 'plastic pollution', description: 'microplastics, ocean gyres, and policy responses.' },
]

export default function APESUnit8Page() {
  return (
    <UnitPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution', examWeight: '7–10%', description: 'water pollution, eutrophication, waste management, oil spills, and plastic pollution.' }}
      topics={topics}
      basePath="/apes/unit-8"
      courseHref="/apes"
      videoId="SxJSVqE7oOY"
      examDate={{ date: 'Friday, May 15, 2026', time: '8:00 AM' }}
    />
  )
}
