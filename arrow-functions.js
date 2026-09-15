/*
 * Assignment 1: JavaScript Arrow Functions
 * Complete the exercises below by converting traditional functions to arrow functions
 * and writing new arrow functions from scratch.
 */

// =============================================
// PART 1: CONVERT TO ARROW FUNCTIONS
// =============================================

// Exercise 1
function greetUser(name) {
    return `Hello, ${name}!`;
}

const greetUserArrow = (name) => `Hello, ${name}!`;


// Exercise 2
function calculateArea(length, width) {
    return length * width;
}

const calculateAreaArrow = (length, width) => length * width;


// Exercise 3
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

const getCurrentTimeArrow = () => new Date().toLocaleTimeString();


// Exercise 4
function validatePassword(password) {
    if (password.length >= 8) {
        return "Password is valid";
    } else {
        return "Password must be at least 8 characters";
    }
}

const validatePasswordArrow = (password) => {
    if (password.length >= 8) {
        return "Password is valid";
    } else {
        return "Password must be at least 8 characters";
    }
};


// Exercise 5
function processOrder(item, quantity) {
    const total = item.price * quantity;
    const tax = total * 0.08;
    const finalAmount = total + tax;
    return `Order total: ${finalAmount.toFixed(2)}`;
}

const processOrderArrow = (item, quantity) => {
    const total = item.price * quantity;
    const tax = total * 0.08;
    const finalAmount = total + tax;
    return `Order total: $${finalAmount.toFixed(2)}`;
};


// =============================================
// PART 2: WRITING ARROW FUNCTIONS
// =============================================

// Exercise 6
// Return first and last name as one string
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;


// Exercise 7
// Calculate the volume of a rectangular box
const calculateVolume = (length, width, height) => length * width * height;


// Exercise 8
// Return the first element of an array
const getFirstElement = (array) => array[0];


// Exercise 9
// Return a string in uppercase
const makeUppercase = (string) => string.toUpperCase();


// Exercise 10
// Return the square of a number
const getSquare = (number) => number * number;


// Exercise 11
// Return Adult if age is 18 or older, otherwise Minor
const checkAge = (age) => {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
};


// Exercise 12
// Return the average of three test scores
const calculateAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};


// Exercise 13
// Evaluate the highest of three test scores
const evaluateScores = (score1, score2, score3) => {
    const highestScore = Math.max(score1, score2, score3);

    if (highestScore >= 90) {
        return `Excellent work! Top score: ${highestScore}`;
    } else if (highestScore >= 70) {
        return `Good job! Top score: ${highestScore}`;
    } else {
        return `Keep practicing! Top score: ${highestScore}`;
    }
};


// Exercise 14
// Calculate a 20% discount
const calculateSalePrice = (productName, price) => {
    const salePrice = price * 0.80;
    return `Product: ${productName} - Sale Price: $${salePrice}`;
};


// =============================================
// TEST YOUR FUNCTIONS
// =============================================

console.log("Testing Part 1:");
console.log(greetUserArrow("Alice")); // Should output: "Hello, Alice!"
console.log(calculateAreaArrow(5, 3)); // Should output: 15
console.log(getCurrentTimeArrow()); // Should output current time
console.log(validatePasswordArrow("secret")); // Should output: "Password must be at least 8 characters"
console.log(processOrderArrow({price: 10}, 2)); // Should output: "Order total: $21.60"

console.log("\nTesting Part 2:");
console.log(makeUppercase("hello")); // Should output: "HELLO"
console.log(getSquare(4)); // Should output: 16
console.log(createFullName("John", "Doe")); // Should output: "John Doe"
console.log(calculateVolume(2, 3, 4)); // Should output: 24
console.log(checkAge(25)); // Should output: "Adult"
console.log(checkAge(16)); // Should output: "Minor"
console.log(getFirstElement([1, 2, 3, 4])); // Should output: 1
console.log(calculateAverage(85, 92, 78)); // Should output: 85
console.log(evaluateScores(95, 87, 92)); // Should output: "Excellent work! Top score: 95"
console.log(evaluateScores(75, 68, 82)); // Should output: "Good job! Top score: 82"
console.log(calculateSalePrice("Laptop", 100)); // Should output: "Product: Laptop - Sale Price: $80"