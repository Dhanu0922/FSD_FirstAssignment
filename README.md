#FSD_First_Assignment

~JavaScript:
Javascript is a interpreted language that conforms to the ECMAScript specification. In Javascript, everything is an object. 
Interpreter translates statements line by line into machine code while Compiler scans the entire program and translates the whole of it into machine code at once.

Three ways to declare variables in Javascript:
1)let(private)  2)var(public) 3)Const

Operators used in Javascript:
1)Arithmetic  2)Assignment  3)String  4)Comparison  5)Logical 6)Type

Primitive Datatypes used in Javascript:
1)Number  2)String  3)Boolean  4)Null  5)Undefined  6)Symbol

Non-Primitive Datatypes used in Javascript:
1)Array 2)Object  3)ArrayObject 4)JSON

~Symbol:
A “symbol” represents a unique identifier. We can give symbol a description (also called a symbol name), mostly useful for debugging purposes. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything. Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite. As user objects belongs to another code, and that code also works with them, we shouldn’t just add any fields to it. That’s unsafe. But a symbol cannot be accessed accidentally, the third-party code probably won’t even see it, so it’s probably all right to do. Also, imagine that another script wants to have its own identifier inside user, for its own purposes. That may be another JavaScript library, so that the scripts are completely unaware of each other. 
Global_Symbols: Usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property. To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol. 
System_Symbols: There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.

~Multi-Paradigm Language:
Programming languages are often classified according to their paradigms, e.g. imperative, functional, logic, constraint-based, object-oriented, or aspect-oriented. A paradigm characterizes the style, concepts, and methods of the language for describing situations and processes and for solving problems, and each paradigm serves best for programming in particular application areas. Real-world problems, however, are often best implemented by a combination of concepts from different paradigms, because they comprise aspects from several realms, and this combination is more comfortably realized using multiparadigm programming languages. A multi-paradigm programming language is a programming languages that supports more than one programming paradigm.

~Programming Paradigms in Javascript:
Imperative- programming with an explicit sequence of commands that update state.
Declarative- programming by specifying the result you want, not how to get it.
Structured- programming with clean, goto-free, nested control structures.
Procedural- imperative programming with procedure calls.
Functional- programming with function calls that avoid any global state.
Event-driven- programming with emitters and listeners of asynchronous actions.
Object-oriented- programming by defining objects that send messages to each other, objects have their own internal state and public interfaces. In class-based category objects get state and behavior based on membership in a class. While in prototype-based category objects get behavior from a prototype object.

