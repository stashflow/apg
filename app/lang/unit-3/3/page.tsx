import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 3, title: 'diction & word choice' }

const sections: NotesSection[] = [
  {
    type: 'heading',
    content: 'imagery — the language of the senses',
  },
  {
    type: 'body',
    content: 'Imagery refers to language that creates sensory experience for the reader — sight, sound, smell, touch, taste, and motion (kinesthetic imagery). Imagery is a form of pathos because it places the reader inside an experience rather than describing it from a distance. The specificity and precision of an image determines its rhetorical power.',
  },
  {
    type: 'table',
    content: '',
    tableHeaders: ['imagery type', 'sense', 'example', 'rhetorical use'],
    tableRows: [
      ['Visual', 'Sight', '"The oil slick shimmered in iridescent rainbows"', 'Creates vivid scenes; grounds abstract in observable reality'],
      ['Auditory', 'Sound', '"The constant hiss and clank of the factory floor"', 'Immerses reader; can convey chaos, peace, or menace'],
      ['Olfactory', 'Smell', '"The sweet rot of overripe fruit"', 'Most immediately evocative sense; triggers memory and emotion'],
      ['Tactile', 'Touch/texture', '"The gritty concrete under bare feet"', 'Grounds the reader physically; creates intimacy'],
      ['Gustatory', 'Taste', '"The metallic bitterness of fear"', 'Unusual and striking; often used metaphorically'],
      ['Kinesthetic', 'Motion/physical sensation', '"Her stomach lurched as the elevator dropped"', 'Creates physical empathy; reader feels the movement'],
    ],
  },
  {
    type: 'heading',
    content: 'imagery in persuasion',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Abstract arguments become emotionally compelling when grounded in concrete imagery',
      'Environmental essays use imagery of dead fish, oil-slicked birds, and silent forests to make ecological destruction tangible',
      'Political speeches use imagery of family kitchens, small towns, and working hands to connect policy to lived experience',
      'Imagery creates empathy: when readers can FEEL an experience, they are more likely to agree that it matters',
    ],
  },
  {
    type: 'heading',
    content: 'imagery vs. simple description',
  },
  {
    type: 'bullets',
    content: '',
    bullets: [
      'Not all descriptive writing is rhetorical — imagery is purposeful when it serves the argument',
      'Ask: why THIS image? Why HERE? What does it make the reader feel/understand that advances the argument?',
      'Pattern of images: when a writer uses related images throughout a piece (recurring images of light and dark, of water and dryness, of heights and depths), it creates an **image pattern** that reinforces the central theme',
    ],
  },
  {
    type: 'examtip',
    content: 'When you analyze imagery in a rhetorical analysis essay, name the type, quote the specific language, then explain the effect AND the connection to purpose. "The olfactory imagery of \'rotting\' and \'decay\' transforms the neighborhood into something diseased and dying — compelling the reader to feel not just sympathy but urgency about the policy solutions the author advocates."',
  },
]

export default function LangU3T3() {
  return (
    <NotesPage
      course={lang}
      unit={unit}
      topic={{
        number: 3,
        title: 'imagery & sensory detail',
        keyTerms: ['imagery', 'visual imagery', 'auditory imagery', 'olfactory imagery', 'tactile imagery', 'kinesthetic imagery', 'image pattern', 'sensory detail', 'concrete language'],
      }}
      sections={sections}
      prev={{ href: '/lang/unit-3/2', title: 'figurative language' }}
      next={{ href: '/lang/unit-3/4', title: 'allusion & intertextuality' }}
      courseHref="/lang"
      unitHref="/lang/unit-3"
    />
  )
}
