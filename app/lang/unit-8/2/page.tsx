import { NotesPage } from '@/components/notes-page'

export default function Page() {
  const sections = [
    {
      title: 'metaphor & simile',
      content: `**metaphor**: "the economy is a machine" (direct comparison)
**simile**: "the economy works like a machine" (comparison with "like" or "as")
metaphors are more powerful because they\'re more direct. avoid mixed metaphors: don\'t compare something to both a machine and an organism in the same sentence.`
    },
    {
      title: 'allusion',
      content: `referencing a known work, figure, or event to deepen meaning
- "after months of infighting, the department faced its own Watergate" (allusion to Nixon scandal implies corruption and scandal)
- allusions work best when your audience recognizes them; on ap exams, use allusions that are broadly known`
    },
    {
      title: 'rhetorical question',
      content: `a question asked for effect, not to seek an answer
- "if we can\'t trust our institutions to protect us, what can we trust?" (engages reader to think)
- use sparingly: too many rhetorical questions can feel manipulative`
    }
  ]

  return (
    <NotesPage
      course={{ label: 'ap language & composition', short: 'ap lang', accent: '#a855f7', accentLight: '#ec4899' }}
      unit={{ number: 8, title: 'stylistic choices & frq mastery' }}
      topic={{ number: 2, title: 'metaphor, simile, allusion & rhetorical question', description: 'using literary devices to amplify argument and engage readers.' }}
      content={`## metaphor, simile, allusion & rhetorical question

${sections.map(s => `### ${s.title}\n${s.content}`).join('\n\n')}

### frq mastery: using devices strategically
- choose devices that reinforce your argument\'s tone and message
- ensure they\'re clear enough that your reader understands the comparison
- use figurative language to illuminate complex ideas, not to show off vocabulary
- in high-stakes essays, each device should do rhetorical work—no fillers`}
    />
  )
}
