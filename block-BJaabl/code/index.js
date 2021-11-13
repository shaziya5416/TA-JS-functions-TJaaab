/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name)
{
console.log(`Hello ${name}`);
}
sayHello("shazia");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(FirstName,LastName){
return `${FirstName} ${LastName}`;
}
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(a,b){
switch(true){
case (isNaN(a)):
case (isNaN(b)):alert(`not a valid input`);
break}
return a+b;
}
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc (numA,numB,operation){
switch(true){
case (isNaN(numA)):
case (isNaN(numB)):alert(`not a valid input`);
}
switch (operation){
case ("add"):return numA+numB;
break;
case ("sub"):return numA-numB;
break;
case ("mul"):return numA*numB;
break;
case ("div"):return numA/numB;
}
};


/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year){
switch(true)
{
case (year%400==0):return true;
break;
case(year%100==0):return false;
break;
case(year%4==0):return true;
break;
default:return false;
} 
}
/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(factorial){
for(i=(factorial-1);i>=1;i=i-1)
{
factorial=factorial*i;
}
return(factorial);
}

