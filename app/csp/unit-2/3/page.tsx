import { NotesPage } from '@/components/notes-page'

export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 2, title: 'big idea 2: data' }}
      topic={{ number: 3, title: 'data storage & files', description: 'how data persists on disk and in databases.' }}
      content={`## data storage & files

data must be stored persistently on disk, not just in RAM.

### file systems
**files**: named collections of related data on disk
**directories/folders**: organize files hierarchically
- file path: /Users/Alice/Documents/essay.txt (absolute path from root)
- relative path: Documents/essay.txt (relative to current directory)

### file formats
format = structure for organizing data within a file

**text files**: plain ASCII or Unicode
- .txt, .csv (comma-separated values), .json

**binary files**: not human-readable; optimized for programs
- .jpg (image), .mp3 (audio), .exe (executable)

### databases
traditional relational databases use tables:
\`\`\`
Students table:
ID | Name   | GPA
1  | Alice  | 3.8
2  | Bob    | 3.5
3  | Carol  | 3.9
\`\`\`

**advantages over flat files**:
- efficient queries (search, sort, filter)
- avoid data duplication
- data integrity (constraints, relationships)
- multiple users can access simultaneously

### structured vs unstructured data
**structured**: organized into tables/fields (database, spreadsheet)
**unstructured**: no predefined format (documents, images, video)

### metadata
"data about data": information describing the actual data
- file: name, size, creation date, permissions
- photo: resolution, date taken, camera model
- document: author, last modified, version

### backup & redundancy
**redundancy**: keeping copies to prevent data loss
- RAID: multiple hard drives, if one fails others have copies
- cloud backup: automatic copies on remote servers

### exam tips
- understand difference between file storage and databases
- know metadata examples
- understand why backups matter`}
    />
  )
}
