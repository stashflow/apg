import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'why indoor air quality matters' },
  { type: 'body', content: 'Americans spend ~90% of their time indoors. indoor air can be 2–5× more polluted than outdoor air (EPA). indoor air pollutants come from building materials, appliances, cleaning products, and occupant activities. poor ventilation concentrates pollutants.' },
  { type: 'heading', content: 'major indoor air pollutants' },
  { type: 'subheading', content: 'radon' },
  { type: 'bullets', content: '', bullets: ['**source**: natural radioactive decay of uranium in soil and rock; seeps into basements through cracks', '**health effect**: #2 cause of lung cancer in the U.S. (after smoking) — about 21,000 deaths/year', '**detection**: radon test kits; long-term exposure is the risk (measured in pCi/L)', '**mitigation**: sub-slab depressurization system (pipe + fan vents radon from under foundation)', '**key**: radon is odorless, colorless, radioactive gas — you cannot detect without a test'] },
  { type: 'subheading', content: 'asbestos' },
  { type: 'bullets', content: '', bullets: ['**source**: fibrous mineral used in insulation, floor tiles, ceiling tiles (pre-1980 buildings)', '**health effect**: mesothelioma (rare cancer), asbestosis (lung scarring), lung cancer — diseases appear 20–40 years after exposure', '**when dangerous**: only when disturbed and fibers become airborne', '**response**: encapsulation (leave in place and seal) or abatement (professional removal)'] },
  { type: 'subheading', content: 'volatile organic compounds (VOCs)' },
  { type: 'bullets', content: '', bullets: ['**source**: paints, varnishes, cleaning products, new carpets, air fresheners, formaldehyde from pressed wood', '**health effects**: eye/nose/throat irritation, headaches, liver/kidney damage; some are carcinogenic (benzene, formaldehyde)', '**sick building syndrome**: when VOCs and other pollutants make building occupants ill', '**solution**: low-VOC products, increased ventilation'] },
  { type: 'subheading', content: 'carbon monoxide (CO)' },
  { type: 'bullets', content: '', bullets: ['**source**: incomplete combustion — gas heaters, stoves, fireplaces, idling cars in garages', '**health effect**: binds hemoglobin (250× affinity vs. O₂) — prevents oxygen delivery; symptoms: headache → dizziness → death', '**prevention**: CO detectors, proper ventilation, gas appliance maintenance', '**key**: CO is odorless and colorless — "silent killer"'] },
  { type: 'subheading', content: 'secondhand smoke (ETS)' },
  { type: 'bullets', content: '', bullets: ['contains 7,000+ chemicals, 70+ known carcinogens', 'causes lung cancer in non-smokers, heart disease, childhood respiratory illness, SIDS', 'indoor smoking bans have dramatically reduced ETS exposure'] },
  { type: 'subheading', content: 'lead dust & paint' },
  { type: 'bullets', content: '', bullets: ['**source**: lead paint in pre-1978 homes (banned 1978); deteriorates into dust', '**health effect**: neurotoxin especially harmful to children — lowers IQ, behavioral problems', '**mitigation**: encapsulation or professional abatement; blood lead level testing'] },
  { type: 'heading', content: 'solutions & ventilation' },
  { type: 'bullets', content: '', bullets: ['**source reduction**: eliminate or substitute polluting materials', '**ventilation**: HVAC filtration, open windows, heat recovery ventilators (HRV)', '**air purifiers**: HEPA filters trap PM; activated carbon removes VOCs', '**green building**: LEED standards specify low-emission materials and effective ventilation'] },
  { type: 'examtip', content: 'the exam often lists indoor pollutants and asks you to identify sources and solutions. radon is the sneaky one — it has nothing to do with combustion or chemicals; it\'s geological. always mention that radon is the #2 cause of lung cancer when discussing health risks.' },
]

export default function APESU7T9() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 7, title: 'atmospheric pollution' }}
      topic={{ number: 9, title: 'indoor air pollution', keyTerms: ['radon', 'asbestos', 'VOCs', 'carbon monoxide', 'formaldehyde', 'mesothelioma', 'sick building syndrome', 'ETS', 'HEPA'] }}
      sections={sections}
      prev={{ href: '/apes/unit-7/8', title: 'reducing air pollution' }}
      courseHref="/apes"
      unitHref="/apes/unit-7"
    />
  )
}
