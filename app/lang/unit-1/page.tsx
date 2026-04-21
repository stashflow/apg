import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'speaker, audience & purpose', description: 'who speaks, who listens, and why — the three anchors of every rhetorical act.' },
  { number: 2, title: 'exigence, context & occasion', description: 'the "why now?" — the urgent problem that calls rhetoric into existence.' },
  { number: 3, title: 'kairos', description: 'the opportune moment — why a text is effective at a particular time and place.' },
  { number: 4, title: 'genre & medium', description: 'how the form of communication (speech, essay, tweet) shapes rhetorical choices.' },
  { number: 5, title: 'message & SOAPSTone', description: 'Subject, Occasion, Audience, Purpose, Speaker, Tone — the full breakdown method.' },
  { number: 6, title: 'rhetorical triangle', description: 'Aristotle\'s model — speaker, audience, and subject as interlocking forces.' },
  { number: 7, title: 'ethos, pathos & logos', description: 'the three classical appeals — credibility, emotion, and logic.' },
  { number: 8, title: 'tone & intended effect', description: 'how word choice creates tone, shifts, and shapes audience response.' },
]

export default function LangUnit1Page() {
  return (
    <UnitPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 1, title: 'rhetorical situation', examWeight: '11–14%', description: 'the foundation — every AP Lang FRQ starts with understanding the rhetorical situation.' }}
      topics={topics}
      basePath="/lang/unit-1"
      courseHref="/lang"

      examDate={{ date: 'Wednesday, May 13, 2026', time: '8:00 AM' }}
    />
  )
}
