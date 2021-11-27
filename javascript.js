//for printing in JavaScript
console.log('Hey.....I am Dhanashree')
console.error('This is an ERROR message')
console.warn('This is an WARNING message')
//alert('THIS IS AN ALERT!!')

//Variables in JavaScript
//let
let myVar
myVar = 99
console.log(myVar)

//var
var x=4
console.log(x)

//const
const day = 'Tuesday'
console.log(day)

//operators in JavaScript
//Arithmetic
//addition
let a= 100
let b= 50
let c= a + b
console.log(c)

//subtraction
let p= 100
let q= 50
let r= p - q
console.log(r)

//multiplication
let m= 100
let n= 50
let l= m * n 
console.log(l)

//division
let s= 100
let t= 50
let u= s / t
console.log(u)

//remainder
let f= 82
let g= 9
let h= f % g
console.log(h)

//increment
let i= 99
i++
let k = i
console.log(k)

//decrement
let b = 45
b--
let a = b
console.log(a)

//Assignment Operators
let x = 10
x += 5
console.log(x)

let y = 10
y -= 5
console.log(y)

let z = 10
z *= 5
console.log(z)

let a= 10
a /= 5
console.log(a)

let b = 10
b %= 5
console.log(b)

//String operators
let a = "Hello!!"
console.log(a)

let b = 'How are you?'
console.log(b)

//Type operators
const a=10
console.log(typeof a)

var x= "Dhanashree"
console.log(typeof x)

//Symbols
const a = Symbol('Dhanashree')
const b = Symbol('Dhanashree')
console.log(a === b)
//output will be false because symbols are unique

// creating symbol
const x = Symbol()
console.log(typeof x)

//adding description of symbol
const y = Symbol('Happy')
console.log(y)

//accessing description
const z = Symbol('Happy')
console.log(z.description)

//symbol as an object
let id = Symbol("name")
let person = {name: "Dhanashree"}
console.log(person)

//Array
const languages = ["java", "python", "c++"]
console.log(languages)

const colors = [
    "blue",
    "green",
    "red"
  ]
  console.log(colors)

const cars = []
cars[0]= "Saab"
cars[1]= "Volvo"
cars[2]= "BMW"
console.log(cars)

const phone = new Array("Oppo", "Vivo", "Realme");
console.log(phone)

