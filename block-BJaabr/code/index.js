// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(a){
return a+1;
}


// - Write a Function Expression
let addone= function addOne(a){
return a+1;
};

// - Write an Arrow Function without curly brackets(if possible)
let addone =(a) => a+1;
// - Write an Arrow Function with curly brackets
let addone =(a)=>{
return a+1;
}
;
// - Execute the function
addone(21);
// - Execute the function and store the return value in a variable.
let store=addone(21);
// - What is the typeof returnValue
number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subOne(b){
return b-1;
}

// - Write a Function Expression
let SUBone=function (b){
return b-1;
}
// - Write an Arrow Function without curly brackets(if possible)
let SUBone = (b)=>b-1;
// - Write an Arrow Function with curly brackets
let SUBone = (b)=>{
return b-1;}
; 
// - Execute the function
SUBone(20);
// - Execute the function and store the return value in a variable.
let store = SUBOne(2);
// - What is the typeof returnValue
number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(n1,n2){
return n1+n2;
}
// - Write a Function Expression
let SUM =function sum(n1,n2){
return n1+n2;  
};

// - Write an Arrow Function without curly brackets(if possible)
let SUM =(n1,n2) =>n1+n2; 
// - Write an Arrow Function with curly brackets
let SUM =(n1,n2) => {
return n1+n2;
} 

// - Execute the function
SUM(2,3);
// - Execute the function and store the return value in a variable
let store1 = SUM (2,3);
// - What is the typeof returnValue
number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(s1)={
return s1*s1;
}
// - Write a Function Expression
let Square= function square(s1)={
return s1*s1;
}

// - Write an Arrow Function without curly brackets(if possible)
let Square = (s1)=>s1*s1;
// - Write an Arrow Function with curly brackets
let Square = (s1)=>
{
return s1*s1;
}
;

// - Execute the function
Square(5);
// - Execute the function and store the return value in a variable
let squarevar=Square(5);
// - What is the typeof returnValue
integer
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isgreater(x1,x2){
if (x1>x2){
return true;}
else{
return false;}
// - Write a Function Expression
isGreater=function isgreater(x1,x2){
if (x1>x2){
return true;}
else{
return false;}
// - Write an Arrow Function without curly brackets(if possible)
isGreater=(x1,x2)=>(x1>x2) ?true:false; 


// - Write an Arrow Function with curly brackets
isGreater=(x1,x2)==>
if (x1>x2){
return true;}
else{
return false;}
;
// - Execute the function
isGreater(29,30);
// - Execute the function and store the return value in a variable
let ISgreater=isGreater(29,30)
// - What is the typeof returnValue
Boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/
// - Write a Function Declaration
function oddeven(y1){
if (y1%2==0){
return `Number is even`;}
else {
return `Number is odd`;}

// - Write an anonymous Function Expression
function(y1){
if (y1%2==0){
return `Number is even`;}
else {
return `Number is odd`;}

// - Write an named Function Expression
function oddeven(y1){
if (y1%2==0){
return `Number is even`;}
else {
return `Number is odd`;}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddEven=(y1)==>
 (y1%2==0)? true :false;

// - Write an Arrow Function with curly brackets
let oddEven=(y1)==>{
 (y1%2==0)?return true : return false;
}
;

// - Execute the function
oddEven(2);
// - Execute the function and store the return value in a variable
let storeodd=oddEven(2);
// - What is the typeof returnValue
"string"
