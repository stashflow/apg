import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what is plate tectonics?',
  },
  {
    type: 'body',
    content: 'plate tectonics is the theory that Earth\'s outer layer (lithosphere) is divided into large plates that move over the partially molten asthenosphere below. these movements cause earthquakes, volcanic eruptions, and shape Earth\'s surface over millions of years.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**lithosphere** — rigid outer layer (crust + upper mantle), broken into plates',
      '**asthenosphere** — partially molten layer below lithosphere, allows plates to move',
      '**convection currents** — heat from Earth\'s core drives movement in the mantle',
      '**plates** — 7 major plates (Pacific, North American, South American, African, Eurasian, Antarctic, Indo-Australian) plus many minor ones',
    ],
  },
  {
    type: 'heading',
    content: 'three types of plate boundaries',
  },
  {
    type: 'subheading',
    content: 'divergent boundaries (spreading)',
  },
  {
    type: 'body',
    content: 'plates move apart, allowing magma to rise and create new crust. this occurs at mid-ocean ridges and continental rift zones.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**mid-ocean ridges** — underwater mountain chains where new seafloor forms',
      '**rift valleys** — continental crust being pulled apart (East African Rift)',
      '**shallow earthquakes** — tension causes moderate seismic activity',
      '**volcanic activity** — magma rises to fill the gap',
      '**example** — Mid-Atlantic Ridge (Iceland sits on it)',
    ],
  },
  {
    type: 'subheading',
    content: 'convergent boundaries (collision)',
  },
  {
    type: 'body',
    content: 'plates move toward each other, causing one to subduct (dive under) or both to crumple upward.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**oceanic-continental** — dense oceanic plate subducts under continental plate, forming trenches and volcanic mountains (Andes)',
      '**oceanic-oceanic** — one oceanic plate subducts, forming trenches and island arcs (Japan, Philippines)',
      '**continental-continental** — neither subducts; collision forms mountain ranges (Himalayas)',
      '**deep earthquakes** — subduction zones cause the most powerful earthquakes',
      '**Ring of Fire** — circle of convergent boundaries around Pacific Ocean',
    ],
  },
  {
    type: 'subheading',
    content: 'transform boundaries (sliding)',
  },
  {
    type: 'body',
    content: 'plates slide horizontally past each other. no crust is created or destroyed.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**strike-slip faults** — horizontal movement causes friction',
      '**powerful earthquakes** — built-up stress releases suddenly',
      '**example** — San Andreas Fault (California)',
    ],
  },
  {
    type: 'heading',
    content: 'summary of plate boundaries',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['boundary', 'movement', 'features', 'example'],
    tableRows: [
      ['divergent', 'plates move apart', 'mid-ocean ridges, rift valleys, volcanic activity', 'Mid-Atlantic Ridge'],
      ['convergent', 'plates collide', 'subduction zones, trenches, mountains, volcanoes', 'Himalayas, Andes'],
      ['transform', 'plates slide past', 'fault lines, earthquakes', 'San Andreas Fault'],
    ],
  },
  {
    type: 'heading',
    content: 'earthquakes',
  },
  {
    type: 'body',
    content: 'earthquakes occur when stress built up along plate boundaries or faults is suddenly released.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**focus (hypocenter)** — point underground where earthquake originates',
      '**epicenter** — point on surface directly above focus',
      '**seismic waves** — energy radiating outward (P-waves, S-waves, surface waves)',
      '**Richter scale** — logarithmic scale measuring earthquake magnitude (each whole number = 10× more amplitude, 32× more energy)',
      '**liquefaction** — saturated soil behaves like liquid during shaking',
    ],
  },
  {
    type: 'heading',
    content: 'volcanoes',
  },
  {
    type: 'body',
    content: 'volcanoes form where magma reaches Earth\'s surface — primarily at convergent boundaries (subduction) and divergent boundaries (spreading), plus hotspots.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**hotspots** — stationary plumes of magma that pierce through moving plates (Hawaii, Yellowstone)',
      '**volcanic hazards** — lava flows, pyroclastic flows, ash fall, lahars (mudflows), gases',
      '**volcanic benefits** — fertile soils, geothermal energy, new land, mineral deposits',
    ],
  },
  {
    type: 'examtip',
    content: 'know the Ring of Fire — it\'s the zone around the Pacific plate where ~90% of earthquakes and ~75% of volcanoes occur due to subduction. also know that the Richter scale is logarithmic: magnitude 7 releases ~1,000× more energy than magnitude 5.',
  },
  {
    type: 'frqtip',
    content: 'FRQs may ask you to explain how plate tectonics create specific landforms or hazards. always identify the boundary type, then explain the process (spreading, subduction, or sliding) and the resulting features.',
  },
]

export default function APESU4T1() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 1,
        title: 'plate tectonics',
        keyTerms: ['plate tectonics', 'lithosphere', 'divergent', 'convergent', 'transform', 'subduction', 'Ring of Fire', 'hotspot'],
      }}
      sections={sections}
      next={{ href: '/apes/unit-4/2', title: 'soil formation & erosion' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
