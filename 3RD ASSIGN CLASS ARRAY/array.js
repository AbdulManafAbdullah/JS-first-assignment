// ==================== NO 1 ==================

// Certainly! Here's a simple JavaScript program that simulates a fruit stand with pop() and push():

// Create an array named fruits
var fruits = ["apple", "banana", "orange", "grape"];

// Display all the fruits initially
console.log("Available Fruits: " + fruits.join(", "));

// Simulate a customer purchasing a fruit
fruits.pop();
console.log("Fruit purchased! Updated list: " + fruits.join(", "));

// Simulate adding new fruits to the stock
var newFruit = prompt("Enter a new fruit name to add:");
fruits.push(newFruit);
console.log("New fruit added! Updated list: " + fruits.join(", "));

// This program uses the pop() method to simulate a customer purchasing a fruit by removing the last element from 
// the array. It also uses the push() method to add a new fruit to the stock, prompting the user to enter the 
// new fruit name. The updated list of fruits is displayed after each operation using console.log().



// ================NO 2 ===============


// Certainly! Here's an extended version of the previous program that includes the shift() and unshift() methods for simulating a new shipment of fruits:

// Create an array named fruits
var fruits = ["apple", "banana", "orange", "grape"];

// Display all the fruits initially
console.log("Available Fruits: " + fruits.join(", "));

// Simulate a customer purchasing a fruit
fruits.pop();
console.log("Fruit purchased! Updated list: " + fruits.join(", "));

// Simulate adding new fruits to the stock
var newFruit = prompt("Enter a new fruit name to add:");
fruits.push(newFruit);
console.log("New fruit added! Updated list: " + fruits.join(", "));

// Simulate a new shipment of fruits arriving
var newlyArrivedFruit = fruits.shift();
console.log("Newly arrived fruit: " + newlyArrivedFruit);
console.log("Updated list after shipment arrival: " + fruits.join(", "));

// Prompt the user to enter a fruit to add to the beginning of the array
var newFruitAtBeginning = prompt("Enter a fruit name to add to the beginning:");
fruits.unshift(newFruitAtBeginning);
console.log("New fruit added to the beginning! Updated list: " + fruits.join(", "));

// In this version, shift() is used to simulate removing the first fruit from the array as part of a new shipment,
//  and unshift() is used to add a new fruit to the beginning of the array. The updated list of fruits is displayed 
//  after each operation.



// =========== NO 3 ================


// Certainly! Here's a simple JavaScript program that uses the splice() method to remove a range of numbers from an array:

// Create an array named numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Display the initial array
console.log("Initial Array: " + numbers.join(", "));

// Prompt the user to enter the starting and ending index of the range to remove
var startIdx = parseInt(prompt("Enter the starting index of the range to remove:"));
var endIdx = parseInt(prompt("Enter the ending index of the range to remove:"));

// Check if the entered indices are valid
if (startIdx >= 0 && endIdx >= startIdx && endIdx < numbers.length) {
    // Use splice to remove the specified range
    numbers.splice(startIdx, endIdx - startIdx + 1);

    // Display the updated array
    console.log("Updated Array: " + numbers.join(", "));
} else {
    console.log("Invalid indices. Please make sure the indices are within the array bounds.");
}

// In this program, the user is prompted to enter the starting and ending indices of the range they want to remove.
//  The splice() method is then used to remove the specified range, and the updated array is displayed
//   using console.log(). The program includes a check to ensure that the entered indices are valid to prevent errors.



// =======================NO 4 ====================



// Certainly! Here's a JavaScript program that uses the slice() method to extract a slice of numbers from the array based on user input:

// Create an array named numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Display the initial array
console.log("Initial Array: " + numbers.join(", "));

// Prompt the user to enter the starting and ending index of the slice to extract
var startIdx = parseInt(prompt("Enter the starting index of the slice to extract:"));
var endIdx = parseInt(prompt("Enter the ending index of the slice to extract:"));

// Check if the entered indices are valid
if (startIdx >= 0 && endIdx >= startIdx && endIdx < numbers.length) {
    // Use slice to extract the specified slice
    var extractedSlice = numbers.slice(startIdx, endIdx + 1);

    // Display the extracted slice
    console.log("Extracted Slice: " + extractedSlice.join(", "));
} else {
    console.log("Invalid indices. Please make sure the indices are within the array bounds.");
}


// In this program, the user is prompted to enter the starting and ending indices of the slice they want to extract.
//  The slice() method is then used to extract the specified slice from the array, and the extracted slice is
//   displayed using console.log(). The program includes a check to ensure that the entered indices are valid
//    to prevent errors.




// =============================NO 5 =====================



// Certainly! Here's a JavaScript program that calculates the average of the numbers in the array using the length property:

// Create an array named numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Calculate the sum of all numbers in the array
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Calculate the average by dividing the sum by the length of the array
var average = sum / numbers.length;

// Display the calculated average
console.log("Average: " + average);


// In this program, a loop is used to iterate through the array and calculate the sum of all numbers.
//  Then, the average is calculated by dividing the sum by the length of the array (numbers.length). 
//  The calculated average is then displayed using console.log().

