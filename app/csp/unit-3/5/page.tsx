import { NotesPage } from '@/components/notes-page'
export default function Page() {
  return (
    <NotesPage
      course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }}
      unit={{ number: 3, title: 'big idea 3: algorithms & programming' }}
      topic={{ number: 5, title: 'strings & string manipulation', description: 'working with text data.' }}
      content={`## strings & string manipulation

### string basics
sequences of characters: "hello", "AP CSP 2024"
- indexed like arrays: "hello"[0] = "h"
- LENGTH("hello") = 5

### concatenation
joining strings: "hello" + " " + "world" = "hello world"

### substrings
extract part: SUBSTRING("hello", 0, 3) = "hel"
- parameters: string, start, length

### searching within strings
FIND("hello", "ll") = 2 (found at index 2)

### converting cases
UPPER("hello") = "HELLO"
LOWER("HELLO") = "hello"

### splitting & joining
SPLIT("a,b,c", ",") = ["a", "b", "c"]
JOIN(["a", "b", "c"], ",") = "a,b,c"

### common operations
- remove spaces: REPLACE(str, " ", "")
- check if contains: FIND(str, substring) != -1
- reverse: reverse algorithms common

### exam tips
- be able to trace string operations
- understand indexing (0-based)
- know basic operations: concatenate, substring, find`}
    />
  )
}
