import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 1, title: 'binary numbers & data representation', description: 'how computers represent and store all information using binary.' }}
      content={`## binary numbers & data representation

all data in computers—numbers, text, images, sound—is ultimately represented in binary: sequences of 0s and 1s.

### binary basics
- **bit**: a single 0 or 1 (binary digit)
- **byte**: 8 bits (the standard unit of storage)
- **binary counting**: 0=0, 1=1, 10=2, 11=3, 100=4, 101=5, 110=6, 111=7, 1000=8

### converting binary to decimal
each position represents a power of 2:
- 1101 = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13

### representing text
**ASCII**: American Standard Code for Information Exchange
- A = 65, B = 66, etc.
- each character is assigned a number, then that number is stored in binary
- **Unicode**: extended standard that includes characters from all languages

### representing images
pixels are represented as RGB values (red, green, blue), each 0-255:
- each pixel needs 3 bytes (one for each color channel)
- more bits per pixel = higher color depth = more colors possible

### sampling and compression
**sampling**: taking measurements at regular intervals (like audio samples per second)
- more samples = higher quality but more data
- **lossy compression**: removes some data (mp3, jpg) for smaller file size but quality loss
- **lossless compression**: all data recoverable (png, zip)

### exam tips
- be able to convert between binary and decimal
- understand why data compression matters (storage, transmission speed)
- know that all data is ultimately binary—programs, documents, images, sound`}
    />
  )
}
