import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what are ocean currents?',
  },
  {
    type: 'body',
    content: 'ocean currents are continuous movements of seawater driven by wind, temperature differences, salinity differences, and Earth\'s rotation. they act as a global conveyor belt, redistributing heat and nutrients around the planet.',
  },
  {
    type: 'heading',
    content: 'surface currents',
  },
  {
    type: 'body',
    content: 'surface currents are driven primarily by wind and affect the top 100-400 meters of the ocean. they move in circular patterns called gyres.',
  },
  {
    type: 'subheading',
    content: 'what drives surface currents?',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**wind** — trade winds, westerlies, and polar easterlies push surface water',
      '**Coriolis effect** — deflects currents right (N. Hemisphere) or left (S. Hemisphere)',
      '**continental boundaries** — landmasses redirect flow',
    ],
  },
  {
    type: 'subheading',
    content: 'ocean gyres',
  },
  {
    type: 'body',
    content: 'gyres are large circular current systems in each ocean basin. they rotate clockwise in the Northern Hemisphere and counterclockwise in the Southern Hemisphere.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**5 major gyres** — North Pacific, South Pacific, North Atlantic, South Atlantic, Indian Ocean',
      '**western boundary currents** — warm, fast, narrow (Gulf Stream, Kuroshio)',
      '**eastern boundary currents** — cold, slow, broad (California Current, Canary Current)',
      '**garbage patches** — debris accumulates in gyre centers',
    ],
  },
  {
    type: 'heading',
    content: 'major surface currents',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['current', 'location', 'temperature', 'climate effect'],
    tableRows: [
      ['Gulf Stream', 'Western Atlantic', 'warm', 'warms Western Europe'],
      ['North Atlantic Drift', 'Eastern Atlantic', 'warm', 'keeps Britain mild'],
      ['California Current', 'Eastern Pacific', 'cold', 'cools coastal California'],
      ['Kuroshio Current', 'Western Pacific', 'warm', 'warms Japan'],
      ['Humboldt (Peru) Current', 'Eastern Pacific', 'cold', 'supports rich fisheries'],
    ],
  },
  {
    type: 'examtip',
    content: 'know that the Gulf Stream carries warm water northward, making Western Europe much warmer than expected for its latitude. Britain is warmer than Labrador, Canada, even though they\'re at the same latitude.',
  },
  {
    type: 'heading',
    content: 'thermohaline circulation',
  },
  {
    type: 'body',
    content: 'deep ocean circulation is driven by differences in temperature (thermo-) and salinity (-haline). cold, salty water is dense and sinks, driving a global "conveyor belt" that circulates water over centuries.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**formation of deep water** — in North Atlantic and around Antarctica, cold, salty water sinks',
      '**global conveyor belt** — deep water flows along ocean floor, eventually rising in Pacific and Indian Oceans',
      '**very slow** — takes ~1,000 years for water to complete the circuit',
      '**redistributes heat** — moves warm water poleward, cold water equatorward',
    ],
  },
  {
    type: 'subheading',
    content: 'climate change and thermohaline circulation',
  },
  {
    type: 'body',
    content: 'global warming may disrupt the thermohaline circulation by adding freshwater (melting ice) to the North Atlantic. less salty water is less dense and may not sink, potentially slowing or shutting down the conveyor belt.',
  },
  {
    type: 'heading',
    content: 'upwelling',
  },
  {
    type: 'body',
    content: 'upwelling occurs when surface water moves away from an area and deep, cold, nutrient-rich water rises to replace it.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**wind-driven** — offshore winds push surface water away; deep water rises',
      '**nutrient-rich** — cold deep water contains abundant nutrients from decomposition',
      '**supports fisheries** — nutrients fuel phytoplankton, supporting food web',
      '**upwelling zones** — Peru, California, West Africa, Antarctica',
      '**El Niño disrupts upwelling** — warm water stops nutrients from reaching surface, fisheries collapse',
    ],
  },
  {
    type: 'heading',
    content: 'ocean currents and climate',
  },
  {
    type: 'body',
    content: 'ocean currents have profound effects on regional and global climate:',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**coastal temperatures** — warm currents warm coasts, cold currents cool coasts',
      '**precipitation patterns** — warm currents increase evaporation and rainfall',
      '**global heat distribution** — currents move heat from tropics toward poles',
      '**carbon dioxide absorption** — cold water absorbs more CO₂, affecting climate',
    ],
  },
  {
    type: 'frqtip',
    content: 'FRQs may ask how currents affect coastal climate (warm vs. cold currents) or about upwelling and fisheries. if asked about climate change impacts, discuss potential thermohaline circulation changes and their cascading effects.',
  },
]

export default function APESU4T9() {
  return (
    <NotesPage
      course={{ label: 'ap environmental science', short: 'apes', accent: '#22c55e', accentLight: '#86efac' }}
      unit={{ number: 4, title: 'earth systems & resources' }}
      topic={{
        number: 9,
        title: 'ocean currents',
        keyTerms: ['surface current', 'gyre', 'Gulf Stream', 'thermohaline circulation', 'upwelling', 'Coriolis effect', 'conveyor belt'],
      }}
      sections={sections}
      prev={{ href: '/apes/unit-4/8', title: 'thermal inversion' }}
      courseHref="/apes"
      unitHref="/apes/unit-4"
    />
  )
}
