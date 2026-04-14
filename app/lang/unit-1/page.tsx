import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'speaker, audience & purpose', description: 'who speaks, who listens, and why — the three anchors of every rhetorical act.' },
  { number: 2, title: 'exigence, context & occasion', description: 'the "why now?" — the urgent problem that calls rhetoric into existence, and the circumstances surrounding it.' },
  { number: 3, title: 'message & SOAPSTone', description: 'how to break down any text: Subject, Occasion, Audience, Purpose, Speaker, Tone — the full method.' },
  { number: 4, title: 'rhetorical triangle', description: 'Aristotle\'s model of rhetoric — the speaker, audience, and subject as three interlocking forces.' },
  { number: 5, title: 'ethos, pathos & logos', description: 'the three classical appeals — credibility, emotion, and logic — and how writers deploy them strategically.' },
  { number: 6, title: 'tone & shift in tone', description: 'how word choice, syntax, and context create tone — and how writers shift tone to create complexity.' },
  { number: 7, title: 'point of view', description: 'first, second, and third person — and how POV shapes the reader\'s relationship to the text.' },
  { number: 8, title: 'appeals to values & beliefs', description: 'how writers connect to audience values, beliefs, and cultural assumptions to make arguments persuasive.' },
]

export default function LangUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 1, title: 'rhetorical situation', examWeight: '11–14%', description: 'the foundation — every AP Lang FRQ starts with understanding the rhetorical situation.' }}
      topics={topics}
      basePath="/lang/unit-1"
      courseHref="/lang"
      videoId="35NsF5YgZcg"
      examDate={{ date: 'Friday, May 16, 2025', time: '12:00 PM' }}
    />
  )
}
