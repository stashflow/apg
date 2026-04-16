import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 5, title: 'big idea 5: impact of computing' }} topic={{ number: 15, title: 'ethics & responsible computing', description: 'doing computing right: who decides?' }} content={`## ethics & responsible computing

### ethical frameworks
- utilitarianism: maximize good for most
- deontology: follow rules/duties even if bad outcome
- virtue ethics: what would virtuous person do?

### responsible AI
- transparency: explain decisions
- fairness: don't discriminate
- accountability: someone responsible if wrong
- security: protect data

### design ethics
- dark patterns: deliberately confusing UI tricks users
- addictive design: intentionally habit-forming
- data collection: more than necessary?
- consent: do users understand what they're accepting?

### professional responsibility
- code of ethics: ACM, IEEE guidelines
- whistleblowing: report unethical practices
- advocacy: push for better policies

### power dynamics
- tech companies enormous power
- regulate or self-regulate?
- worker treatment (contractors, warehouse workers)
- impact on society largely undemocratic

### exam tips
- ethics can't be automated
- responsible computing requires intentional choices
- power and values matter in tech`}
/> )
}
