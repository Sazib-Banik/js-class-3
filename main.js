// Comparison Operators... ... Return Boolean Data true or false...

// == (check equal only value)
console.log(9 == 9); //true
console.log(9 == "9"); //true

// === (check equal value and data type both)
console.log(9 === 9); // true
console.log(9 === "9"); // false
console.log("9" === "9"); // true

// != (not equal only value)
console.log(9 != 9); // false
console.log(9 != 7); // true
console.log(9 != "9"); // false
console.log(9 != "7"); // true

// !== (not equal value and data type both)
console.log(9 !== 9); // false
console.log(9 !== 7); // true
console.log(9 !== "9"); // true
console.log(9 !== "7"); // true

// > (greater than)
console.log(9 > 8); // true
console.log(8 > 9); // false

// < (less than)
console.log(9 < 7); // false
console.log(7 < 9); // true

// >= (greater than or equal)
console.log(9 >= 8); // false
console.log(9 >= 9); // true
console.log(10 >= 9); // true

// <= (less than or equal)
console.log(9 <= 7); // false
console.log(7 <= 9); // true
console.log(9 <= 9); // true

// ? (Ternary Operator)

// Logical Operators (&&, ||, !)... ... 

/* data && data ( if both data is true then return true..if any one is false then return false) */
let x = 6;
let y = 5;

console.log(x < 9 && y > 3); // true
console.log(x < 6 && y > 3); // false
console.log(x < 5 && y > 5); // false

/* data || data (if both data is true then return true... if any one is true and other is false then return true... if both data is false then return false...) */
console.log(x < 9 || y > 3); // true
console.log(x < 9 || y > 5); // true
console.log(x < 6 || y > 5); // false

// ! (logical not operator) it returns oppsite value of actual result
console.log(!(x == y)); // true 
console.log(!(x !== y)); // false 

// Operator Precedence...
/* B O D M A S ... ... ...
    B == BRACKETS
    O == ORDERS(POWER)
    D == DIVISION
    M == MULTIPLICATION
    A == ADDITION
    S == SUBSTRUCTIONS
*/
console.log((36 / 6) * 3 + 2 ** 2 -(3 + 5));
// 6 * 3 + 2 ** 2 - 8
// 6 * 3 + 4 -8
// 18 + 4 - 8
// 22 - 8
// 14

// Template Literals (` `)
const firstName = "sazib";
const lastName  = "banik";
let age = 26;
let job = "web developer";

console.log("I'm sazib banik, 26 years old web developer");

console.log("I'm "+ firstName + " " + lastName + "," + " " + age + " " + "years old" + " " + job); // without template literal

console.log(`I'm ${firstName} ${lastName}, ${age} years old ${job}`); // with template literal

/* template literal use kore amra multiple line o likhte pari concatination charao... */
console.log(`first line
second line
third line
fourth line`);

//literal er modde amar choto khato operation o kora jay
console.log(`we konw that four + two = ${4+2}`); 

//if-else statement...
/* 
    if(true/false) {
        this code is execute if condition is true;
    } else {
        this code is execute if condition is false;
    }
*/
let othoiAge = 8;
let neshiAge = 10;

if(neshiAge >= othoiAge){
    console.log("Neshi is elder then Othoi");
} else {
    console.log("Neshi is younger then Othoi");
}

if(othoiAge <= neshiAge){
    console.log("Othoi is younger then Neshi");
} else {
    console.log("Othoi is elder then Neshi");
}






