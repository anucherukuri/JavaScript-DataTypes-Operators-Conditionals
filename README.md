📝 - JavaScript Introduction

**console.log()**
It is a super simple method that will allow us to print to the console pretty much anything that comes to our minds, you just need to put something between the parenthesis. It is one of developers' best allies ever!
 
**console.log()**

**Data Types and Operators**
 
**Numbers**
Numbers are one of the basic types of data in all programming languages
console.log(4); // prints 4 in the console console.log(-6); // prints -6 in the console console.log(6.82); // prints 6.82 in the console
 
For very big or very small numbers, you may also use scientific notation by adding an e (for exponent), followed by the exponent of the number
console.log(2.998e3) // prints 2998 in the console

**Operators**
console.log(4 + 6); // prints 10 in the console console.log(5 * 7); // prints 35 in the console console.log(14 - 21); // prints -7 in the console console.log(5 / 7); // prints 0.7142857142857143 in the console
  
**Modulo operator (remainder of a division %)**
console.log(5 % 2); // prints the remainder of 5:2 --> 1
 
**Operators Precedence**
When multiple operators with the same precedence appear next to each other, as in 1 - 2 + 1, they are applied left to right: (1 - 2)+ 1. When in doubt, just add parentheses
  
**Special numbers, NaN**

There are three special values in JavaScript that are considered numbers but don’t behave like normal numbers
console.log(Infinity); console.log(-Infinity); console.log(NaN);
 
What happens if you divide 0 by 0? Try to console.log that :) 

**Strings**
Strings are another basic data type in JS, they are used to represent text. Strings are written by enclosing their content in quotes (you can use double " " or single quotes ' ' and even backticks ` `)
 
**console.log**("Hello Strivers I am a string!"); console.log('Hello Strivers I am a string too!'); console.log(`Hello Strivers I have backticks but I am a string too!`);
They behave quite in the same way. We are going to learn next the differences between the three
 
**Manipulating strings, concatenation, .toLowerCase() & toUpperCase()**

You can't use mathematical operations on strings but if you use the '+' operator you will obtain a concatenation of two strings
console.log("Hello " + "Strivers!");
 
Strings have their own methods, so it does mean we can use special functionalities on them just by using the so called "dot notation" followed by the name of that method. Two famous examples are below
 
console.log("Hello Strivers!".toUpperCase()); console.log("Hello Strivers!".toLowerCase());
  
**Converting strings and numbers**

You can convert a string into a number and vice versa
 
console.log(parseInt('100')) 

let number = 100; // let declares a variable, a concept explained down below console.log(number.toString()); console.log(number.toString(2)); // you can even convert a number into his binary form, or hexadecimal form or what you prefer

**null and undefined**

In JS we have two special values called null and undefined, they both denote the absence of a meaningful value.
Null means empty or non existent value. Undefined means a variable has been declared, but the content of that variable has not yet been defined.
 
console.log(null); console.log(undefined);
 
We don't need to use them directly but in a variety of situations we will encounter them as unpredicted results of operations, not handling them in the proper way could lead to big troubles
 
**Booleans
**
Another fundamental data type! it is often useful to have the possibility to distinguish between just two possibilities, like "yes" and "no" or "1" and "0". JS and many other programming languages have this special data type called boolean, which has just two values, true and false
 
console.log(true); console.log(false);
 
If I make a comparison between two numbers I will obtain a boolean result
 
console.log(2 === 2); // Is 2 equal to 2? TRUE console.log(3 > 2); // Is 3 greater than 2? TRUE console.log(3 < 2); // Is 3 lower than 2? FALSE
 
**Logic operators, AND, OR, NOT**

We can think about logic operations like sort of arithmetic made with booleans values. We are going to use especially 3 operators: and, or, not.
 
The **AND logic** operation returns true only if both of its inputs are true. If either of the inputs is false, the output is also false
 
console.log(true && true); // True AND True --> True console.log(true && false); // True AND False --> False console.log(false && true); // False AND True --> False console.log(false && false); // False AND False --> False
 
The **OR logic** operation returns true if either of its inputs are true. If all inputs are false, the output is also false.
 
console.log(true || true); // True OR True --> True console.log(true || false); // True OR False --> True console.log(false || true); // False OR True --> True console.log(false || false); // False OR False --> False
 
The **NOT logic** operation returns true if its input is false, and false if its input is true
 
console.log(!true); // NOT True --> False console.log(!false); // NOT False --> True
 

**Variables**

What is a variable?
Variables are the way in which our program remember things, where it keeps an internal state.
A variable is a sort of container for values, in JS we can declare it with the special reserved keyword let. In JS a variable can hold all the data types without the need to specify the type
 
let ten = 10; console.log(ten * ten); // → 100 let myString = "Hello!"; console.log(myString); let isTrue = true; console.log(isTrue);

 
**Comments**
 
**One line**
// This line of code is not going to be executed because it is commented out
 
 
**Multiple line**
/* Multiple lines of code compose a block. When I need to comment multiple lines I need to use slash asterisk to start the comment area and asterisk slash to close it. The entire block of code is not going to be executed because it is commented out */
 

**Program Flow**

Not all the programs are straight roads. In our lives of developers we will need very often to create some branching roads, where the program choose a path to take basing on some conditions
 
**Conditionals using if()**
 
**if( 10 > 5)** {   // if the condition is true then the lines of code between these curly braces are going to be executed. If the condition is false, these lines are going to be skipped   console.log("Condition was true!"); }
 
**if else**
If you want to handle also the situation in which the condition holds a false value you can use an if-else statement
if( 10 < 5) {   // if the condition is true then the lines of code between these curly braces are going to be executed. If the condition is false, these lines are going to be skipped   console.log("Condition was true!"); } else {   // if the condition is false then the lines of code between these curly braces are going to be executed. If the condition is true, these lines are going to be skipped   console.log("Condition was false!"); }
 
**Ternary Operator**

Shorter version of an if statement, it returns also a value
 
const age = 19; const price = age > 18 ? "20$" : "15$"; // if age is greater than 18 price will hold "20$" as a value, otherwise it will hold "20$"
 
**Truthy and Falsy**

In JS some values are evaluated as true or false even though they aren't booleans. Here is just one example:
 
const truthyOrFalse = "" ? "truthy" : "falsy"; // empty string is evaluated as a false value
 
The following values are always falsy:
false
0 (zero)
'' or "" (empty string)
**null
undefined
NaN
Everything else is truthy.
 **
 
**=== and ==**
Unexpected situations can occur when comparing truthy and falsy values using the ==. It is always better to use in JS the triple equality === (or !== for the inequality), because it is a strict equality check.
 
console.log(2 == '2'); console.log(2 === '2'); // try to execute the two, what do you expect to have as a response when you compare a string with a number?
