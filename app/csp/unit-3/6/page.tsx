import { NotesPage } from '@/components/notes-page'
export default function Page() { return (<NotesPage course={{ label: 'ap computer science principles', short: 'ap csp', accent: '#14b8a6', accentLight: '#f97316' }} unit={{ number: 3, title: 'big idea 3: algorithms & programming' }} topic={{ number: 6, title: 'inheritance & polymorphism', description: 'object-oriented programming concepts.' }} content={`## inheritance & polymorphism

### inheritance
classes inherit properties/methods from parent classes
- reduces code duplication
- hierarchy: Animal → Dog, Cat
- Dog inherits from Animal: bark(), eat()

### method overriding
child class provides own version of parent method
- Animal: makeSound() says general sound
- Dog: makeSound() says "woof"
- Cat: makeSound() says "meow"

### polymorphism
same method, different behaviors based on object type
- all animals make sound, but differently

### exam tips
- understand code reuse through inheritance
- polymorphism lets same message have different effects`}
/> )
}
