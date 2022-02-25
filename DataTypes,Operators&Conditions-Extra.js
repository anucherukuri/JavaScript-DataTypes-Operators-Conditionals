// Additional assignments for Day 3

const exercise = (n) => {
    console.log(`************************************************************-- Excerise-${n} --**************************************************************`);
    console.log("                                                                                                                                             ");
}

const endOfExercise = () => {
    console.log("                                                                                                                                             ");
}

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
exercise(1);
let isMale = false;

console.log((isMale === true) ? gender = "male" : gender = "female");

endOfExercise();
/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their 
 addition or subtraction is equal to 8.
*/
exercise(2);

const compareNumbers = (p,q) => {
    if((p===8)|| (q===8)){
        if(((p+q)===8)){
            console.log(`Sum of the two given numbers, ${p} and ${q} is 8 and one of the given numbers is also 8`)
        }else if((p-q)===8){
            console.log(`Subtraction of the two given numbers, ${p} and ${q} is 8 and one of the given numbers is also 8`)   
        }else{
            console.log(`One of the two given two numbers, ${p} and ${q} is 8`);
        }
    }else if((p+q)===8){
        console.log(`Sum of the two given numbers, ${p} and ${q} is 8`)   
    }else if((p-q)===8) {
        console.log(`Subtraction of the two given numbers, ${p} and ${q} is 8`)
    }else{
        console.log(`The given two numbers, ${p} and ${q} didn't meet the given conditions`)
    }
}

compareNumbers(5,8);
compareNumbers(16,8);
compareNumbers(5,3);

endOfExercise();
/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/
exercise(3);
let concatStr = "Anusha" + "Cherukuri";

console.log(concatStr);
endOfExercise();

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
 exercise(4);
 let one = 1;
let two = 2;
let three = 3;

let threeNumbers = [one, two, three];

const sortNumbers = (threeNumbers) => {
    console.log("Ascending sorting numbers are: "+threeNumbers.sort());
    console.log("Descending sorting numbers are: "+threeNumbers.sort().reverse());
}

sortNumbers(threeNumbers);

endOfExercise();

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/
exercise(5)
;const avgOfTwo = (firstNumber, secondNumber) => {
    avg = ((firstNumber + secondNumber)/2);
    console.log("Average of given two numbers, "+firstNumber+" and "+secondNumber+" is: "+avg);
}
avgOfTwo(2,5);
endOfExercise();
/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/
exercise(6);
const longestString = (str1, str2) => {
    if(str1.length > str2.length){
        console.log(`Longest string of given two strings,"${str1}" and "${str2}" is: "${str1}" with length, ${str1.length} characters`);
    }else if(str1.length < str2.length){
        console.log(`Longest string of given two strings,"${str1}" and "${str2}" is: "${str2}" with length, ${str2.length} characters`);
    }else {
        console.log(`Both Strings, "${str1}" and "${str2}" are of same length: ${str1.length} characters`);
    }
}

longestString("Strive", "School");
longestString("Anusha", "Cherukuri");
endOfExercise();
/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

exercise(7);

const checkNumber = (num) => {

    if(typeof num == 'number' && !isNaN(num)){
        if(Number.isInteger(num)){
            console.log(`Given number, ${num} is an Integer`);
        }else{
        console.log(`Given number, ${num} is a Float value`);
        }
    }else{
        console.log(`Given number, ${num} is not a number`);
    }

}

checkNumber(7);
checkNumber(1.5);
checkNumber("Anusha");
endOfExercise();
/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/
exercise(8);
const findPercentage = (percentRate,total) => {
    percentResult = percentRate/100 * total;
    console.log(percentRate+"% of "+total+ " is: "+percentResult);
}

findPercentage(20, 400);   //20% of 400 -----> should result 800
findPercentage(50, 800);   //50% of 800 -----> should result 400
endOfExercise();
/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/
exercise(9);
const evenOrOdd = (num) => {
    if(num%2 === 0){
        console.log("Given number, "+num+" is even")
    }else{
        console.log("Given number, "+num+" is odd")
    }
}

evenOrOdd(3);
evenOrOdd(32);
endOfExercise();
