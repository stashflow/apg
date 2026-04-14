import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 1, title: 'period 1 — 1491–1607' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'why europe turned west',
  },
  {
    type: 'body',
    content: 'European exploration of the Americas was driven by a convergence of motives: economic ambition (finding a direct sea route to Asia for spices and silk), religious zeal (spreading Christianity), and political rivalry between emerging nation-states. The fall of Constantinople to the Ottomans in 1453 blocked overland routes to Asia and made a sea route urgent.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**God, Gold, and Glory** — the three classic motives for Spanish exploration: religious mission, economic wealth, and personal/national prestige',
      '**Technology**: Portuguese innovations in ship design (the caravel) and navigation (astrolabe, magnetic compass) made long oceanic voyages possible',
      '**Ottoman blockade**: Fall of Constantinople (1453) made overland spice trade costly and dangerous — Europe needed sea routes',
      '**Nation-state competition**: Portugal, Spain, England, France, and the Netherlands competed fiercely for colonial advantage',
      '**Reconquista mentality**: Spain completed the reconquest of Iberia from the Moors in 1492 — the same year Columbus sailed. This crusading spirit transferred directly to the New World.',
    ],
  },
  {
    type: 'heading',
    content: 'portugal leads the way',
  },
  {
    type: 'body',
    content: 'Portugal under Prince Henry the Navigator (1394–1460) pioneered systematic exploration of the African coast, seeking a sea route to Asia around Africa. Vasco da Gama reached India in 1498, establishing the Portuguese spice trade empire.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Portuguese established trading posts (not colonies) along the African coast — model differed from Spanish conquest',
      'Treaty of Tordesillas (1494): Pope divided the "new world" between Spain and Portugal along a line of longitude. Portugal got Brazil; Spain got the rest of the Americas.',
      'Portuguese also established the Atlantic slave trade, beginning in 1441 with raids on the West African coast',
    ],
  },
  {
    type: 'heading',
    content: 'spain and columbus',
  },
  {
    type: 'body',
    content: 'Christopher Columbus, a Genoese navigator sailing for Spain, made landfall in the Caribbean on October 12, 1492. He never reached Asia — he had reached the Bahamas, Cuba, and Hispaniola. But his voyages initiated permanent contact between Europe and the Americas.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Columbus made four voyages (1492–1504), never acknowledging he had found a "new world" — he died believing he had reached Asia',
      'His voyages established Spanish claim to the Caribbean and triggered the Columbian Exchange',
      'Spanish followed with **conquistadors**: Hernán Cortés conquered the Aztec Empire (1519–1521); Francisco Pizarro destroyed the Inca Empire (1532–1572)',
      'Disease (smallpox) was the decisive weapon — native immunity was zero; populations collapsed before Spanish armies',
      '**Encomienda system**: Spanish crown granted conquistadors the right to demand labor from conquered natives — effectively a system of forced labor that decimated indigenous populations',
    ],
  },
  {
    type: 'heading',
    content: 'england, france & the netherlands enter',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['nation', 'key explorer', 'area explored', 'primary motive'],
    tableRows: [
      ['England', 'John Cabot (1497)', 'Newfoundland / North America', 'Northwest Passage; fishing; colonization'],
      ['France', 'Jacques Cartier (1534)', 'St. Lawrence River / Canada', 'fur trade; Northwest Passage'],
      ['Netherlands', 'Henry Hudson (1609)', 'Hudson River; New York area', 'fur trade; Northwest Passage'],
      ['Spain', 'Columbus (1492), Coronado, de Soto', 'Caribbean, Southwest, Southeast', 'gold; empire; Catholic mission'],
    ],
  },
  {
    type: 'heading',
    content: 'colonial models: how nations differed',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**Spain** — conquered and colonized; imposed encomienda/hacienda systems; used indigenous and African slave labor; mixed-race society (mestizo); strict mercantilist control from crown',
      '**France** — focused on fur trade and alliances with native peoples; fewer settlers; relied on native trading partners; relatively less destructive to native populations',
      '**England** — settler colonialism; displaced natives rather than ruling over them; private companies (Virginia Company) drove settlement; common law tradition carried over',
      '**Netherlands** — primarily commercial; trading posts and New Amsterdam (later New York); patroon system for large landowners',
    ],
  },
  {
    type: 'frqtip',
    content: 'A common APUSH LEQ prompt asks you to compare the colonial models of two or three European powers. The key differences: Spain conquered + extracted; France traded + allied; England settled + displaced. Connect these differences to the different relationships each nation had with native peoples.',
  },
  {
    type: 'examtip',
    content: 'Know the Treaty of Tordesillas (1494). The AP exam uses it to show that European powers believed they had the right to divide up the world without consulting its inhabitants — a fundamental expression of European attitudes toward non-European peoples.',
  },
]

export default function APUSHU1T2() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 2,
        title: 'columbian exchange',
        keyTerms: ['conquistador', 'encomienda', 'Treaty of Tordesillas', 'Reconquista', 'caravel', 'Columbus', 'Cortés', 'Pizarro', 'God Gold Glory', 'mestizo'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-1/1', title: 'native american societies' }}
      next={{ href: '/apush/unit-1/3', title: 'the columbian exchange' }}
      courseHref="/apush"
      unitHref="/apush/unit-1"
    />
  )
}
