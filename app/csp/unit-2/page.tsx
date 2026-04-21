import { UnitPage } from '@/components/unit-page'

export const dynamic = 'force-dynamic'

const topics = [
  { number: 1, title: 'binary numbers & data representation', description: 'converting between binary and decimal, representing text/images/audio with bits, and why 8 bits = 1 byte.' },
  { number: 2, title: 'ASCII & Unicode', description: 'character encoding standards — how text is represented with numbers.' },
  { number: 3, title: 'pixels & RGB', description: 'how images are stored as grids of pixels, RGB color values, and bit depth.' },
  { number: 4, title: 'data compression', description: 'lossless (exact) vs. lossy (approximate) compression — how each works, tradeoffs, and examples like ZIP vs. JPEG.' },
  { number: 5, title: 'overflow & rounding errors', description: 'what happens when data exceeds storage limits, integer overflow, and floating-point precision issues.' },
  { number: 6, title: 'metadata', description: 'data about data — file size, creation date, location tags, and why metadata raises privacy concerns.' },
  { number: 7, title: 'data visualization & analysis', description: 'how data is collected, cleaned, and displayed — charts, scatter plots, and what patterns can and cannot prove.' },
  { number: 8, title: 'patterns & trends', description: 'identifying correlations, causation vs correlation, and data-driven decision making.' },
  { number: 9, title: 'big data & limitations', description: 'what makes data "big," the challenges of bias, storage, and processing, and limitations in drawing conclusions.' },
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
      examDate={{ date: 'Thursday, May 14, 2026', time: '12:00 PM' }}
    />
  )
}
