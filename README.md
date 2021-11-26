#FSD_First_Assignment
~JavaScript
Javascript is a interpreted language that conforms to the ECMAScript specification.
Interpreter translates statements line by line into machine code. While Compiler scans the entire program and translates the whole of it into machine code at once.

Three ways to declare variables in Javascript:
1)var  2)let  3)Const

Operators used in Javascript:
1)Arithmetic  2)Assignment  3)String  4)Comparison  5)Logical 6)Type

Datatypes used in Javascript:
1)Number  2)String  3)Boolean  4)Null  5)Undefined  6)Symbol

~Symbol
A “symbol” represents a unique identifier. We can give symbol a description (also called a symbol name), mostly useful for debugging purposes. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything. Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite. As user objects belongs to another code, and that code also works with them, we shouldn’t just add any fields to it. That’s unsafe. But a symbol cannot be accessed accidentally, the third-party code probably won’t even see it, so it’s probably all right to do. Also, imagine that another script wants to have its own identifier inside user, for its own purposes. That may be another JavaScript library, so that the scripts are completely unaware of each other. 
Global_Symbols: Usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property. To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol. 
System_Symbols: There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.
