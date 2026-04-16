import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 2, title: 'data compression', description: 'reducing file size through lossless and lossy techniques.' }}
      content={`## data compression

compression reduces file size for storage and faster transmission.

### lossless compression
all original data can be perfectly recovered.

**run-length encoding**: replace repeated values with value + count
- AAABBAAC → 3A 2B 2A 1C
- good for images with solid colors or simple patterns

**huffman coding**: frequently used symbols get shorter bit sequences
- common letters might be 2-3 bits, rare letters 8+ bits
- total bits = (frequency × bits per symbol) for all symbols

**dictionary compression**: store repeated sequences once
- "the the the" → reference same dictionary entry 3 times
- used in ZIP, PNG

### lossy compression
some data is discarded; recovery is imperfect but file size is much smaller.

**JPEG**: reduces color information and detail humans don't notice much
- set quality: 100% (less compression, bigger file) vs 50% (more compression, smaller)
- good for photos

**MP3**: removes frequencies humans can't hear
- 128 kbps MP3 sounds almost identical to original for most people
- huge file size reduction vs WAV

### why compression matters
- **storage**: a 2-hour movie as raw video = 100+ GB. Compressed = 2-4 GB
- **transmission**: smaller files download faster (important for streaming, downloading)
- **bandwidth**: phone data limits, internet speed

### entropy & information theory
**entropy**: measure of how much information is in a file
- high entropy = hard to compress (random data)
- low entropy = easy to compress (repetitive data)

### exam tips
- understand trade-off between compression ratio and quality
- know lossless vs lossy use cases
- lossy can't be undone; lossless can be perfectly recovered`}
    />
  )
}
