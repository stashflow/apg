import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'binary numbers & data representation', description: 'converting between binary and decimal, representing text/images/audio with bits, and why 8 bits = 1 byte.', videoId: '1GSjbWt0c9M' },
  { number: 2, title: 'data compression', description: 'lossless (exact) vs. lossy (approximate) compression — how each works, tradeoffs, and examples like ZIP vs. JPEG.', videoId: 'OtDxDvCpPL4' },
  { number: 3, title: 'metadata', description: 'data about data — file size, creation date, location tags, and why metadata raises privacy concerns.', videoId: 'g6xJvAGh8Cw' },
  { number: 4, title: 'data visualization & analysis', description: 'how data is collected, cleaned, and displayed — charts, scatter plots, and what patterns can and cannot prove.', videoId: 'sNLOZmLtPzU' },
  { number: 5, title: 'big data & limitations', description: 'what makes data "big," the challenges of bias, storage, and processing, and limitations in drawing conclusions.', videoId: 'bAyrObl7TYo' },
]

export default function CSPUnit2Page() {
  return (
    <UnitPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data', examWeight: '17–22%', description: 'how computers represent, store, compress, and analyze data — high-frequency MCQ territory.' }}
      topics={topics}
      basePath="/csp/unit-2"
      courseHref="/csp"
      videoId="D_cKCl4dN6s"
      examDate={{ date: 'Thursday, May 15, 2025', time: '12:00 PM' }}
    />
  )
}
