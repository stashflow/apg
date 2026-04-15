import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'sewage treatment overview' },
  { type: 'body', content: 'sewage treatment removes pathogens, solids, nutrients, and chemicals from wastewater before it is discharged into waterways or reused. municipal treatment plants use a sequence of physical, biological, and chemical processes. knowing the three stages and what each removes is essential for the APES exam.' },
  { type: 'heading', content: 'primary treatment — physical' },
  { type: 'bullets', content: '', bullets: ['**process**: screening (removes large debris) → grit removal → settling tanks (sedimentation)', '**removes**: ~60% of suspended solids and ~35% of BOD (large particles)', '**product**: primary sludge (settled solids) + clarified liquid (primary effluent)', '**does NOT remove**: dissolved nutrients, pathogens, dissolved chemicals'] },
  { type: 'heading', content: 'secondary treatment — biological' },
  { type: 'bullets', content: '', bullets: ['**process**: aeration tanks with aerobic bacteria decompose dissolved organics → secondary clarifier settles bacterial floc', '**removes**: ~90% of BOD and suspended solids; some pathogens', '**method**: activated sludge (most common), trickling filters, rotating biological contactors', '**key**: bacteria do the work — they eat the dissolved organic matter, removing it from water', '**does NOT remove well**: nutrients (N, P), pharmaceuticals, heavy metals'] },
  { type: 'heading', content: 'tertiary treatment — advanced' },
  { type: 'bullets', content: '', bullets: ['**process**: nutrient removal (nitrification/denitrification for N; chemical precipitation for P) + filtration + disinfection', '**removes**: nutrients, remaining pathogens, some pharmaceuticals', '**disinfection methods**: chlorination (adds chlorine — can form THMs), UV radiation (no chemical residual), ozonation', '**product**: water clean enough for reuse (irrigation, groundwater recharge), or safe discharge', '**cost**: most expensive stage — not required everywhere'] },
  { type: 'table', content: '', tableHeaders: ['stage', 'type', 'removes', 'cost'], tableRows: [['primary', 'physical (settling)', 'large solids, some BOD', 'low'], ['secondary', 'biological (bacteria)', '~90% BOD, organics', 'moderate'], ['tertiary', 'chemical/advanced', 'nutrients, pathogens, trace chemicals', 'high']] },
  { type: 'heading', content: 'sludge management' },
  { type: 'bullets', content: '', bullets: ['primary and secondary sludge is collected and must be processed', '**anaerobic digestion**: bacteria break down sludge → produces methane biogas (can generate electricity) + stabilized biosolids', '**biosolids**: nutrient-rich material applied to agricultural land as fertilizer — regulated by EPA (40 CFR Part 503)', '**concerns**: biosolids may contain heavy metals, PFAS ("forever chemicals"), and pathogens if not properly treated'] },
  { type: 'heading', content: 'septic systems' },
  { type: 'bullets', content: '', bullets: ['decentralized treatment for rural/suburban homes not on municipal sewer', '**septic tank**: anaerobic settling and decomposition; effluent flows to drain field', '**drain field (leach field)**: perforated pipes distribute effluent into soil; soil bacteria complete treatment', '**failure**: saturated soil, high water table, improper maintenance → groundwater contamination'] },
  { type: 'examtip', content: 'know the three stages and what each removes. a common MCQ: "which treatment stage removes the most BOD?" → secondary. "which removes nutrients?" → tertiary. UV vs. chlorination for disinfection is also tested — UV leaves no chemical residual, chlorination can form harmful trihalomethanes (THMs).' },
]

export default function APESU8T6() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 6, title: 'sewage treatment', keyTerms: ['primary treatment', 'secondary treatment', 'tertiary treatment', 'BOD', 'activated sludge', 'biosolids', 'anaerobic digestion', 'septic system', 'chlorination', 'UV disinfection'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/5', title: 'pathogens & disease' }}
      next={{ href: '/apes/unit-8/7', title: 'solid waste & landfills' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
