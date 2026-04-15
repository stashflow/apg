import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  { type: 'heading', content: 'waterborne pathogens' },
  { type: 'body', content: 'pathogens are disease-causing microorganisms — bacteria, viruses, and protozoa — that contaminate water supplies through sewage, animal waste, and agricultural runoff. waterborne diseases kill over 2 million people globally each year, mostly in developing nations without adequate water treatment.' },
  { type: 'heading', content: 'major waterborne pathogens and diseases' },
  { type: 'table', content: '', tableHeaders: ['pathogen type', 'examples', 'disease caused', 'source'], tableRows: [['bacteria', 'Vibrio cholerae, Salmonella, E. coli O157', 'cholera, salmonellosis, HUS', 'sewage, animal waste'], ['viruses', 'hepatitis A, norovirus, rotavirus', 'hepatitis, gastroenteritis', 'sewage, human feces'], ['protozoa', 'Giardia lamblia, Cryptosporidium', 'giardiasis, cryptosporidiosis', 'animal feces, stormwater']] },
  { type: 'callout', content: 'Giardia and Cryptosporidium are especially problematic because they form cysts — resistant shells that survive normal chlorine treatment. Cryptosporidium caused the 1993 Milwaukee outbreak (400,000+ sick) after cysts passed through water treatment.' },
  { type: 'heading', content: 'indicator organisms' },
  { type: 'bullets', content: '', bullets: ['**fecal coliform bacteria** (especially E. coli): used to test for sewage contamination', 'not themselves highly dangerous (most strains), but their presence indicates fecal contamination and likely presence of dangerous pathogens', 'beaches are closed when fecal coliform counts exceed EPA thresholds', 'testing for every possible pathogen is impractical — indicator testing is efficient'] },
  { type: 'heading', content: 'global water quality context' },
  { type: 'bullets', content: '', bullets: ['~2.2 billion people lack access to safe drinking water (WHO, 2023)', 'diarrheal diseases (mostly waterborne) kill ~500,000 children under 5 annually', 'open defecation and lack of sanitation infrastructure are root causes in developing nations', '**environmental justice**: water quality problems disproportionately affect low-income communities (e.g., Flint, Michigan lead crisis)'] },
  { type: 'heading', content: 'treatment and prevention' },
  { type: 'bullets', content: '', bullets: ['**chlorination**: kills most bacteria and viruses; standard in municipal water', '**UV disinfection**: effective against Cryptosporidium (chlorine-resistant)', '**filtration**: physical removal of protozoa and particles', '**boiling**: kills all pathogens — last-resort field method', '**SODIS** (solar disinfection): used in developing nations — PET bottles + sunlight', '**sanitation infrastructure**: pit latrines, sewers, septic systems prevent fecal-oral transmission'] },
]

export default function APESU8T5() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 8, title: 'aquatic & terrestrial pollution' }}
      topic={{ number: 5, title: 'pathogens & disease', keyTerms: ['pathogens', 'fecal coliform', 'indicator organism', 'Giardia', 'Cryptosporidium', 'cholera', 'chlorination', 'UV disinfection'] }}
      sections={sections}
      prev={{ href: '/apes/unit-8/4', title: 'bioaccumulation & biomagnification' }}
      next={{ href: '/apes/unit-8/6', title: 'sewage treatment' }}
      courseHref="/apes"
      unitHref="/apes/unit-8"
    />
  )
}
