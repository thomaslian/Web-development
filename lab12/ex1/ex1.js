/* 
Create your js code here.
Make sure this file is linked in your html file.
Remember that it is a good practice to include your
scripts at the end of the body
*/
var birthYear = 1995;
var year = 2018;
var age = year - birthYear;
var legalAge = 18;

console.log("Input data");
console.log("--------");
console.log("+birthYear: " + birthYear);
console.log("+year: " + year);
console.log("calculating your age...");
console.log("You are " + age + " years old");
if (age >= 18) {
    console.log("Congratulations! You are of legal age");
} else {
    var yearsToWait = legalAge - age;
    console.log("Sorry, no beer for you. You have to wait " + yearsToWait + " years to be of legal age…");
}

var factorialAge = age;
for (var i = 1; i < age; i++){
    factorialAge = factorialAge * i;
}

console.log("The factorial of your age is: " + factorialAge);
