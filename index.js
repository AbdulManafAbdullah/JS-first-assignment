// NO 1: Alerts

alert("Hello world")

// NO 2: Variables for Strings
var favoriteFood = "briyani";
console.log("My favorite food is: " + favoriteFood);

// NO 3: Variables for Numbers

var numberx = 50;
var numbery = 75;
console.log("Addition:", numberx + numbery);
console.log("Subtraction:", numberx - numbery);
console.log("Multiplication:", numberx * numbery);
console.log("Division:", numberx / numbery);

// NO 4: Variable Names Legal and Illegal
// Legal variable names: snake_case, camelCase, PascalCase
// Illegal variable names: 123variable (cannot start with a number), variable-name (cannot contain hyphens), var (reserved keyword)
// var 123variable = "Illegal"; // This will cause an error
// var variable-name = "Illegal"; // This will cause an error
// var var = "Illegal"; // This will cause an error

var snake_case_variable = "Legal";
var camelCaseVariable = "Legal";

// NO 5: Math Expressions: Familiar Operators (BODMAS rule)
var result = (numberx + numbery) * numberx - numbery / numberx;
console.log("Result:", result);

// NO 6: Math Expressions: Unfamiliar Operators
// Modulus operator (%) returns the remainder of a division operation
// Example: 10 % 3 returns 1, because 10 divided by 3 equals 3 with a remainder of 1
console.log("Modulus:", 10 % 3);

// Increment operators: post-increment & pre-increment
var number = 5;
var postIncrement = number++;
console.log("Post Increment:", postIncrement); // Outputs: 5
console.log("number after post increment:", number); // Outputs: 6

var numberz = 5;
var preIncrement = ++numberz;
console.log("Pre Increment:", preIncrement); // Outputs: 6
console.log("y after pre increment:", numberz); // Outputs: 6

// NO 7: Concatenating Text Strings
var firstName = "Abdul Munaf";
var lastName = "Abdullah";
var fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// NO 8: Prompts
var userAge = prompt("Please enter your age:");
console.log("User Age:", userAge);

// NO 9: if statements
var number = prompt("Enter a number:");
var result = number % 2
if ( result === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// NO 10: if...else and else if statements
var grade = prompt("Enter your numerical grade:");
if (grade >= 20) {
    console.log("A");
} else if (grade >= 15) {
    console.log("B");
} else if (grade >= 10) {
    console.log("C");
} else if (grade >= 5) {
    console.log("D");
} else {
    console.log("F");
}