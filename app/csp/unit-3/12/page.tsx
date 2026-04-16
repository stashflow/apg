import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 12, title: 'version control', description: 'tracking changes to code over time.' }} content={`## version control

### why version control?
multiple people editing same code
- track who changed what and when
- revert to previous versions if needed
- merge changes without losing work

### Git basics
**commit**: save current state of files
- timestamp, message describing change
- creates checkpoint can return to

**branches**: parallel versions
- work on feature without affecting main code
- merge back when done

**repository**: collection of all versions
- local copy on your computer
- remote (cloud) backup

### workflow
1. pull latest code
2. make changes on your branch
3. commit with descriptive message
4. push to remote
5. merge with others' work

### exam tips
- version control prevents catastrophic loss
- branches allow parallel development
- commits are checkpoints you can return to`}
/> )
}
