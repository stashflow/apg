import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 13, title: 'artificial intelligence & machine learning', description: 'programs that learn from data.' }} content={`## artificial intelligence & machine learning

### machine learning
program learns patterns from data instead of explicit instructions
- traditional: programmer writes rules
- ML: program finds patterns automatically

### training data
examples the program learns from:
- labeled photos (dog, cat, bird) → train image classifier
- patient data → predict disease risk
- historical stock prices → predict future prices

### supervised vs unsupervised
**supervised**: labeled training data (input + correct answer)
- classification: predict category
- regression: predict number

**unsupervised**: unlabeled data (find patterns)
- clustering: group similar items
- dimensionality reduction: find essential features

### overfitting
memorizing training data instead of learning general patterns
- memorized: works perfectly on training data, fails on new data
- generalization: works on both training and new data

### ethics in AI
- bias in training data → biased predictions
- privacy: whose data are you using?
- transparency: can you explain AI decisions?

### exam tips
- training data quality matters
- ML finds patterns, doesn't understand meaning
- AI amplifies biases in training data`}
/> )
}
