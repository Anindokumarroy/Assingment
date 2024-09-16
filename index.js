// 1. Function to calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}
// Example
console.log(calculateDifference(100, 5)); // Output: 95




// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// Example
console.log(isOdd(7)); // Output: true
console.log(isOdd(4)); // Output: false




// 3. Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Example
console.log(findMin([3, 1, 4, 2, 5])); // Output: 1




// 4. Function to filter only even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]





// 5. Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// Example
console.log(sortArrayDescending([5, 1, 9, 3])); // Output: [9, 5, 3, 1]





// 6. Function to lowercase the first letter of a string

function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// Example
console.log(lowercaseFirstLetter("Hello")); // Output: "hello"



// 7. Function to count the number of vowels in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

// Example
console.log(countVowels("Hello World")); // Output: 3




// 8. Function to calculate the average of numbers in an array
function findAverage(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

// Example
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3

