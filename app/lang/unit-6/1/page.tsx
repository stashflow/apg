import { NotesPage } from '@/components/notes-page'
import type { NotesSection } from '@/components/notes-page'

const lang = { label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }
const unit = { number: 6, title: 'position, perspective & bias' }

const sections: NotesSection[] = [
  { type: 'heading', content: 'perspective shapes every argument' },
  { type: 'body', content: 'Every writer occupies a position in society — shaped by race, class, gender, nationality, profession, age, and experience — and that position inevitably shapes what they see, what they emphasize, and what they ignore. Understanding perspective is not about dismissing an argument because of who made it; it is about understanding why they made it the way they did and what might be missing.' },
  { type: 'heading', content: 'sources of bias' },
  { type: 'bullets', content: '', bullets: [
    '**professional/institutional bias**: a pharmaceutical company\'s study of its own drug; a union\'s report on wages; each organization\'s interests shape what is studied and reported',
    '**ideological bias**: conservative vs. progressive framing of the same data; which values are treated as obvious vs. controversial',
    '**cultural bias**: assumptions about what is "normal," "natural," or "obvious" that reflect specific cultural contexts',
    '**selection bias**: which evidence is included; which stories are told; whose voices appear as sources',
    '**confirmation bias**: the human tendency to seek evidence that confirms existing beliefs; affects both writers and readers',
  ]},
  { type: 'heading', content: 'detecting bias in texts' },
  { type: 'bullets', content: '', bullets: [
    'Who is speaking, and what do they have to gain or lose?',
    'What evidence is included — and what is conspicuously absent?',
    'Which voices are quoted, and which are absent or marginalized?',
    'What assumptions does the text treat as obvious or self-evident?',
    'What emotional language is used, and who is it designed to appeal to?',
    'Does the text acknowledge alternative perspectives, or does it pretend they don\'t exist?',
  ]},
  { type: 'heading', content: 'bias vs. perspective — an important distinction' },
  { type: 'body', content: 'Bias implies a distortion; perspective is simply a viewpoint. All writers have perspectives — that is unavoidable and not a flaw. Bias becomes problematic when it distorts, omits, or manipulates. In your analysis essays, avoid saying a text is "biased" as a criticism unless you can specifically show how it distorts; instead, analyze how the writer\'s perspective shapes their choices.' },
  { type: 'frqtip', content: 'In the synthesis essay, your job is to use sources from multiple perspectives to build your own argument. This means you must genuinely engage with sources you disagree with — use them to represent the counterargument, acknowledge what they get right, then explain why your position is stronger. Dismissing a source as "biased" without engagement will lose you points.' },
]

export default function LangU6T1() {
  return (
    <NotesPage
      course={lang} unit={unit}
      topic={{ number: 1, title: 'perspective & bias', keyTerms: ['perspective', 'bias', 'selection bias', 'confirmation bias', 'institutional bias', 'ideological framing', 'omission'] }}
      sections={sections}
      next={{ href: '/lang/unit-6/2', title: 'assumptions & cultural context' }}
      courseHref="/lang" unitHref="/lang/unit-6"
    />
  )
}
