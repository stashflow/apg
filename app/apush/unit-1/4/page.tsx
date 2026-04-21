import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const apush = { label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }
const unit = { number: 1, title: 'period 1 — 1491–1607' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'the encomienda system — forced labor at scale',
  },
  {
    type: 'body',
    content: 'The encomienda system was Spain\'s primary mechanism for exploiting indigenous labor in its American colonies. The Spanish Crown "granted" (encomendado) conquistadors and colonists the right to demand tribute and forced labor from a specified number of Native Americans. In return, the encomendero was theoretically responsible for the natives\' Christian instruction and protection. In practice, it was a system of brutal forced labor that killed millions.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Established formally after 1503 by the Spanish Crown to organize native labor',
      'Natives were forced to work in silver mines (Potosí, Bolivia), sugar plantations, and agricultural estates',
      '**Mita system** (in the Andes): compulsory rotational labor extracted by the Inca state; the Spanish co-opted this system for their own purposes',
      'Death rates in silver mines were catastrophic — life expectancy at Potosí was measured in months for mine workers',
      'Combined with epidemic disease, the encomienda system contributed to the near-total demographic collapse of native Caribbean and Mesoamerican populations',
    ],
  },
  {
    type: 'heading',
    content: 'bartolomé de las casas — the conscience of the conquest',
  },
  {
    type: 'body',
    content: 'Bartolomé de las Casas (1484–1566) was a Spanish Dominican friar who became the most powerful critic of the encomienda system. Initially an encomendero himself, he experienced a conversion and spent decades writing and petitioning the Crown to end the abuse of indigenous peoples. His 1542 "A Short Account of the Destruction of the Indies" documented Spanish atrocities in graphic detail.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Argued that native peoples had natural rights and souls — challenging the racial hierarchy the Spanish had constructed',
      '**New Laws of 1542**: Las Casas\'s lobbying resulted in royal legislation attempting to phase out the encomienda — but colonists largely ignored or circumvented the laws',
      'Unintentionally contributed to the rise of African slavery: suggested replacing native labor with African slaves (he later repudiated this)',
      '**Valladolid Debate (1550–51)**: Las Casas debated Juan Ginés de Sepúlveda before the Spanish Crown on whether the conquest was justified. Sepúlveda argued natives were natural slaves (Aristotle); Las Casas argued they were rational humans with rights. The debate ended inconclusively — conquest continued.',
    ],
  },
  {
    type: 'heading',
    content: 'racial hierarchy in colonial spanish america',
  },
  {
    type: 'body',
    content: 'Spanish colonialism created an elaborate racial caste system — the sistema de castas — that determined social status, legal rights, and economic opportunity based on perceived racial mixture. This was one of the earliest and most formalized racial hierarchies in the Western Hemisphere.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['caste term', 'parentage', 'status'],
    tableRows: [
      ['Peninsulares', 'born in Spain', 'highest status; monopolized top government positions'],
      ['Criollos / Creoles', 'Spanish parents, born in Americas', 'high status; wealthy landowners; frustrated by exclusion from top offices'],
      ['Mestizo', 'European + Native American', 'mixed status; common class of artisans and workers'],
      ['Mulato', 'European + African', 'low status; often free but faced legal discrimination'],
      ['Indio', 'indigenous', 'subject to tribute and labor demands; legally protected in theory'],
      ['Africano / Negro', 'enslaved African', 'lowest legal status; property; no rights'],
    ],
  },
  {
    type: 'heading',
    content: 'catholic missionaries',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'The Catholic Church was integral to Spanish colonialism — religious conversion was both a genuine goal and a justification for conquest',
      '**Franciscans, Dominicans, and Jesuits** established missions throughout New Spain — the mission system extended from Florida to California',
      'Missions converted and concentrated native peoples, disrupting traditional societies and exposing them to disease',
      '**California Mission System**: Franciscan Junípero Serra established 21 missions (1769–1833); native Californians were often held under quasi-slave conditions',
      'The Church also provided some protection: Las Casas used Church authority to challenge the worst excesses of the encomienda',
    ],
  },
  {
    type: 'heading',
    content: 'connection to the origins of racial hierarchy in the US',
  },
  {
    type: 'frqtip',
    content: 'For APUSH LEQ or DBQ about racial hierarchy, slavery, or American identity: the encomienda system is key evidence for Period 1 contextualization. Argue that racial hierarchy in the Americas was not incidental — it was deliberately constructed by colonial powers to justify exploitation. This argument can then be traced forward to English colonial slavery, the Three-Fifths Compromise, and Jim Crow.',
  },
]

export default function APUSHU1T4() {
  return (
    <NotesPage
      course={apush}
      unit={unit}
      topic={{
        number: 4,
        title: 'encomienda system',
        keyTerms: ['encomienda', 'Las Casas', 'mita', 'Valladolid Debate', 'sistema de castas', 'mestizo', 'peninsulares', 'criollo', 'New Laws of 1542', 'Potosí'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-1/3', title: 'columbian exchange impacts' }}
      next={{ href: '/apush/unit-1/5', title: 'triangle trade beginnings' }}
      courseHref="/apush"
      unitHref="/apush/unit-1"
    />
  )
}
