// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age) {
return age*7;
}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(Age,Number) {
let total=0;
if(Age<=60){
total= Age*4*12*Number;
}
else 
{ total=60*4*12*Number;
}
return total;
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(cel) {
return (cel*(9/5))+32;
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function FToc(f) {
  return (f-32)*(5/9);
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(x,n) {
if (n<0)
{
return `number not allowed`;}
else{
 return x**n;
}
}

function sumOrProductOfN(n,string) {
let add=0;
let pro=1;
for(i=n;i<=n;i--)
{
add=add+i;
pro=pro*i;
}
switch(true){
case (string!=="sum"):
case (string!=="product"):alert(`inavlid`);
case (string=="sum"):return add;
case (string=="product"):return pro;
}
}

//6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n

function sumOfN(n)
{
let sum=0;
for(i=0;i<=n;i++){
sum=sum+i;
}
return sum;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/
function sum1OfN(n)
{
let sum1=0;
let z=0;
for(i=0;i<=n;i++){
if(i%5==0){
z=i;
}
else if(i%7==0){
z=i;
}
else {
z=0;
}
sum1=sum1+z;
}
return sum1;
}



// Your code goes here

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(e,f){
if(e<f){
return e;
}
else {
return f;
}
}

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/
function typeCheck(j) {
  return typeof(j);
}
