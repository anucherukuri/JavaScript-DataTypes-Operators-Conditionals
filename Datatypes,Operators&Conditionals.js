/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

const exercise = (n) => {    
    console.log(`************************************************************-- Excerise-${n} --**************************************************************`);
    console.log("                                                                                                                                             ");
}

const endOfExercise = () => {
    console.log("                                                                                                                                             ");
}

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

//*** ANSWER ***
exercise(1);
console.log(
    "Javascript, there are five basic, or primitive, types of data. The five most basic types of data are:"+
        "* Strings"+
        "* Numbers"+
        "* Booleans"+
        "* Undefined"+
        "* Null"+
 "We refer to these as primitive data types."+
"String:"+
"The string type is used to represent textual data. It is a set of 'elements' of 16-bit unsigned integer values."+
"Each element in the String occupies a position in the String."+

"Number:"+
"Number type is a double-precision 64-bit binary format IEEE 754 value. There is not a specific type for integers."+
"The number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number)."+

"Boolean:"+
"Boolean represents a logical entity and can have two values: true and false."+

"Null:"+
"The value null represents the intentional absence of any object value."+
"Null is often retrieved in a place where an object can be expected but no object is relevant."+
"A variable that is set to null is declared as intentionally nothing/empty."+

"Undefined:"+
"The global undefined property represents the primitive value undefined."+
"A variable that has NOT been assigned a value is of type undefined."
);

endOfExercise();

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

//*** ANSWER ***
exercise(2);
console.log(
"Variable:"+
"Variables are containers for storing data (storing data values).");
endOfExercise();

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

//***** ANSWER

// let a = 12;
// let b = 20;

exercise(3);
const sum = (a,b) => {
    sumResult = a+b;
    console.log("Sum of given two numbers: "+sumResult);
}
sum(12,20);
endOfExercise();
/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
exercise(4);
let x = 12;
console.log("Value of 'x' is: "+x);
endOfExercise();
/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

//*********** ANSWER *********************/
exercise(5);
let name = "John Doe";

console.log("Value of 'name' is: "+name)
endOfExercise();

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

//*********** ANSWER *********************/
exercise(6);
let num = 12;
subResult = num - x;
console.log(`Difference between 12 and variable x, ${x} is: ${subResult}`)
endOfExercise();

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

//*********** ANSWER *********************/
exercise(7);
let name1 = "john";
let name2 = "John";

if(name1 === name2){
    console.log(`Both names, ${name1} and ${name2} have same case: TRUE`);
}else{
    console.log(`Both names, ${name1} and ${name2} have different case: FALSE`);
}
endOfExercise();

/* EXERCISE 8
 Create a variable named t, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

// let t = 7;
// const literal = (t) => {
//     t = t.toString();
//     t = t.replace(/[\, ]/g,'');

//     let thousands = ["Thousand", "Lakh", "Million", "Billion", "Trillion"]
//     let ones = [ "Zero","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" ]
//     let tens = ["Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred"]

//     console.log("");
// }
// literal(t);
exercise(8);
let numberToWords = require('number-to-words');

let t = numberToWords.toWords(7);

console.log("7 to: "+t);

endOfExercise();


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

exercise(9);
let u = 6;
let v = 7;
(u > v)? u = "big": v = "big";
console.log(u, v);
endOfExercise();
/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
