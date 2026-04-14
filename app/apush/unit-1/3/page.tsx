import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'what was the columbian exchange?',
  },
  {
    type: 'body',
    content: 'the columbian exchange refers to the widespread transfer of plants, animals, culture, human populations, technology, diseases, and ideas between the americas, west africa, and the old world (europe and asia) in the 15th and 16th centuries, following christopher columbus\'s 1492 voyage to the americas. it was one of the most significant events in human history — reshaping diets, economies, populations, and ecologies across all connected continents.',
  },
  {
    type: 'callout',
    content: 'historian Alfred Crosby coined the term "Columbian Exchange" in his 1972 book. the AP exam frequently asks you to analyze the consequences of this exchange — emphasize that effects were dramatic, unequal, and often devastating for native americans.',
  },
  {
    type: 'heading',
    content: 'what went from the new world to the old world',
  },
  {
    type: 'subheading',
    content: 'plants / crops (americas → europe/africa/asia)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**maize (corn)** — became a staple crop across europe, africa, and asia; dramatically increased food supplies and population growth in Europe and China',
      '**potato** — transformed european diets and enabled massive population growth, especially in ireland, germany, and russia',
      '**tomato** — now central to italian, spanish, and greek cuisines — but entirely absent before 1492',
      '**cacao (chocolate)** — became a luxury good driving european demand and new colonial plantations',
      '**tobacco** — created enormous new commercial demand; drove the labor systems of virginia and carolina colonies',
      '**sweet potato, squash, peanuts, peppers, vanilla** — all new world crops that transformed global food systems',
    ],
  },
  {
    type: 'subheading',
    content: 'silver and gold',
  },
  {
    type: 'body',
    content: 'the extraction of silver from spanish colonial mines — particularly potosí (in modern bolivia) and mexico — flooded the old world with precious metals. this created price inflation across europe (the "price revolution"), funded spanish imperial ambitions, and financed trade with asia. it also depended on brutal indigenous and enslaved african labor.',
  },
  {
    type: 'heading',
    content: 'what went from the old world to the new world',
  },
  {
    type: 'subheading',
    content: 'animals',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**horses** — transformed the cultures of plains native americans (comanche, sioux, cheyenne) who adopted the horse after 1680. also enabled faster spanish military conquest.',
      '**cattle, pigs, sheep** — introduced new food sources but also ecological disruption as they overgrazed native vegetation',
      '**chickens** — became a global protein source',
    ],
  },
  {
    type: 'subheading',
    content: 'diseases (the most devastating transfer)',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**smallpox** — the deadliest disease for native populations. killed an estimated 50–90% of the indigenous population of the americas within a century of contact. native populations had zero immunity ("virgin soil epidemics").',
      '**measles, influenza, typhus, malaria** — additional diseases that decimated native communities',
      '**estimated death toll** — scholars estimate 50–90 million indigenous people died in the century following contact (from a pre-contact population of approximately 60–100 million)',
      '**demographic collapse** — the sudden depopulation of native america created a massive labor shortage that drove the transatlantic slave trade as europeans sought new labor for their colonies',
    ],
  },
  {
    type: 'examtip',
    content: 'disease is the most important element of the columbian exchange for the AP exam. the exam often asks you to explain why native american populations collapsed so rapidly — the answer is epidemic disease and lack of immunity (virgin soil epidemics). connect the demographic collapse to the slave trade: native death → labor shortage → african slavery.',
  },
  {
    type: 'subheading',
    content: 'crops from old world to americas',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**sugarcane** — the most commercially important. grown in the caribbean and brazil on slave-worked plantations. the "sugar revolution" created the atlantic slave trade as we know it.',
      '**wheat, rice, coffee** — introduced new agricultural patterns; coffee became an economic driver in later colonial periods',
      '**bananas** — now associated with central america but originated in southeast asia; brought via africa',
    ],
  },
  {
    type: 'heading',
    content: 'long-term consequences of the columbian exchange',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['region affected', 'consequence', 'significance'],
    tableRows: [
      ['native americas', 'population collapse from disease', 'lost 50–90% of population in a century; cultures destroyed'],
      ['europe', 'population boom from new calorie-dense crops', 'potato & maize sustained enormous population growth'],
      ['africa', 'slave trade exploded to fill labor vacuum', 'estimated 12+ million enslaved people transported to americas'],
      ['americas', 'ecological transformation', 'european livestock overgrazed land; introduced species displaced native ones'],
      ['global', 'increased interconnection & trade', 'true global economy begins; mercantilist system expands'],
    ],
  },
  {
    type: 'heading',
    content: 'the columbian exchange and the AP thematic framework',
  },
  {
    type: 'body',
    content: 'the AP exam organizes history around seven themes (WXT, PCE, MIG, PEO, SOC, NAT, ARC). the columbian exchange is central to multiple themes. being able to connect it to these themes is essential for earning points on SAQs and FRQs.',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      '**WXT (work, exchange, technology)** — sugar/tobacco plantations, slave labor, silver extraction, global trade networks',
      '**PEO (peopling)** — migration of europeans and forced migration of africans; demographic collapse of native americans',
      '**MIG (migration)** — voluntary and involuntary movement of peoples across the atlantic',
      '**NAT (human/environment interaction)** — introduction of non-native species, disease, and agriculture reshaping ecosystems',
      '**SOC (social structures)** — racial hierarchies established; encomienda and caste systems created',
    ],
  },
  {
    type: 'frqtip',
    content: 'LEQ/DBQ tip: when arguing about the columbian exchange, never describe it as simply "beneficial." the most sophisticated thesis acknowledges that it was transformative AND deeply unequal — enormously beneficial for europeans and catastrophic for native americans and enslaved africans. a thesis that grapples with this complexity earns the complexity point on the rubric.',
  },
]

export default function APUSHU1T3() {
  return (
    <NotesPage
      course={{ label: 'ap united states history', short: 'apush', accent: '#ef4444', accentLight: '#f59e0b' }}
      unit={{ number: 1, title: 'period 1 — 1491–1607' }}
      topic={{
        number: 3,
        title: 'the columbian exchange',
        keyTerms: ['columbian exchange', 'virgin soil epidemic', 'smallpox', 'demographic collapse', 'potosí', 'encomienda', 'transatlantic slave trade', 'mercantilism', 'price revolution'],
      }}
      sections={sections}
      prev={{ href: '/apush/unit-1/2', title: 'european exploration' }}
      next={{ href: '/apush/unit-1/4', title: 'first contact & conflict' }}
      courseHref="/apush"
      unitHref="/apush/unit-1"
    />
  )
}
