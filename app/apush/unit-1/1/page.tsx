import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 1, title: 'period 1 — 1491–1607' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'the world before 1492',
  },
  {
    type: 'body',
    content: 'Before European contact, the Americas were home to hundreds of sophisticated, diverse civilizations. The APUSH exam begins at 1491 precisely to emphasize that Native American societies were complex, organized, and culturally rich — not simply "discovered" by Europeans. Understanding pre-contact diversity is essential for analyzing how contact transformed these civilizations.',
  },
  {
    type: 'examtip',
    content: 'APUSH Period 1 carries only 4–6% of the exam weight, but you WILL see SAQ and DBQ questions that require you to contextualize later events (colonialism, slavery, Manifest Destiny) by referencing pre-contact indigenous societies. Know the major culture groups.',
  },
  {
    type: 'heading',
    content: 'major native american culture groups',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['region', 'culture group', 'key characteristics'],
    tableRows: [
      ['Mesoamerica', 'Aztec (Mexica)', 'Tenochtitlan (capital ~200,000 people), agriculture (chinampas), tribute empire, human sacrifice, writing, calendar'],
      ['South America', 'Inca', 'Andean empire — largest in the world by 1500. Road network, terrace farming (mit\'a labor system), no writing (quipu)'],
      ['Southwest', 'Pueblo / Ancestral Puebloans', 'Cliff dwellings (Mesa Verde), irrigation agriculture, kivas (ceremonial rooms), traded turquoise'],
      ['Southwest', 'Navajo / Apache', 'Semi-nomadic after adoption of horses; adapted to harsh desert environment'],
      ['Northeast', 'Iroquois Confederacy (Haudenosaunee)', 'Six nations united: Mohawk, Onondaga, Cayuga, Oneida, Seneca (+ Tuscarora). Matrilineal clan system. Democratic council influenced Founders.'],
      ['Great Plains', 'Sioux, Comanche, Cheyenne', 'Before horses: semi-sedentary, buffalo hunts on foot. After horses (post-1680): fully nomadic warrior cultures'],
      ['Southeast', 'Cherokee, Creek, Choctaw', '"Five Civilized Tribes" — agricultural, complex political structures. Later removed by Jackson.'],
      ['Pacific Northwest', 'Chinook, Kwakwaka\'wakw', 'Salmon-based economy, potlatch ceremonies, elaborate totem poles, sedentary due to food abundance'],
    ],
  },
  {
    type: 'heading',
    content: 'economic & social structures',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Agriculture** — many groups practiced sophisticated farming: maize (corn), beans, squash ("Three Sisters") intercropped together for sustainability and nutrition',
      '**Trade networks** — extensive long-distance trade: Mississippian cultures traded shells, copper, and obsidian across thousands of miles; Cahokia (near modern St. Louis) had ~20,000 residents ca. 1100 CE',
      '**Gender roles** — varied widely: many eastern woodland cultures were matrilineal (property and identity passed through mother\'s line); women often controlled agricultural fields while men hunted',
      '**Spiritual life** — deeply integrated with nature; land was held communally, not as private property — a fundamental difference from European concepts that caused enormous conflict later',
      '**Political organization** — ranged from small band societies to vast empires; confederacies (like the Iroquois) showed sophisticated diplomatic structures',
    ],
  },
  {
    type: 'heading',
    content: 'the iroquois confederacy — special emphasis',
  },
  {
    type: 'body',
    content: 'The Iroquois (Haudenosaunee) Confederacy is the most important Native American political structure for APUSH. Founded around 1570 by Deganawida (the "Great Peacemaker") and Hiawatha, it united warring nations under a Great Law of Peace. It featured a democratic council, power-sharing between nations, and rules for decision-making that some historians argue influenced the framers of the U.S. Constitution.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Matrilineal society — women selected and could remove (impeach) male leaders (sachems)',
      'Council of representatives from each nation — unanimity required for war decisions',
      'Later allied with British (most nations) during French and Indian War and American Revolution',
      'The Albany Plan (1754) — Franklin\'s failed attempt to unite colonies was partly inspired by the Iroquois model',
    ],
  },
  {
    type: 'heading',
    content: 'why pre-contact diversity matters for the exam',
  },
  {
    type: 'frqtip',
    content: 'DBQ and LEQ prompts about colonialism, westward expansion, or Indian Removal will award points for contextualization that references pre-contact Native American societies. Describe how diverse, sophisticated, and land-based these cultures were — then contrast with European concepts of private property and sovereignty to show why conflict was structural, not incidental.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Native Americans held land communally → Europeans imposed private property → fundamental conflict',
      'Different cultural views: Europeans saw "wilderness" as empty land to conquer; Natives saw it as inhabited, managed, and sacred',
      'Native trade networks showed economic sophistication — they were not primitive peoples awaiting European "civilization"',
      'Demographic size: estimates of pre-contact population range from 40–100 million in the Americas — disease (Columbian Exchange) would kill 50–90% of this population within a century',
    ],
  },
]

export default function APUSHU1T1() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 1,
        title: 'native american societies',
        keyTerms: ['Aztec', 'Inca', 'Iroquois Confederacy', 'Three Sisters', 'Cahokia', 'matrilineal', 'Haudenosaunee', 'Great Law of Peace', 'potlatch', 'Pueblo'],
      }}
      sections={sections}
      next={{ href: '/apush/unit-1/2', title: 'columbian exchange' }}
      courseHref="/apush"
      unitHref="/apush/unit-1"
    />
  )
}
