// Question 1: calculateArea
// Write a function calculateArea that takes two parameters: a number width and 
// a number height. It should return the area of a rectangle.

const calculateArea = (width, height) => {
  return width * height;
};

console.log(calculateArea(5, 3)); // 15
console.log(calculateArea(10, 7)); // 70
console.log("_______________________________________________________________________________________")

// Question 2: isEven
// Write a function isEven that takes one parameter: a number. It should return true if the number 
// is even, and false if the number is odd.

const isEven = (number) => {
  return number % 2 === 0;
};
console.log(isEven(2))  // true
console.log(isEven(3))  // false
console.log(isEven(0))  // true
console.log("_______________________________________________________________________________________")

// Question 3: convertToFahrenheit
// Write a function convertToFahrenheit that takes one parameter: a number celsius. 
// It should return the temperature converted to Fahrenheit using the formula: (celsius * 9/5) + 32.

const convertToFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};
console.log(convertToFahrenheit(0))   // 32
console.log(convertToFahrenheit(25))  // 77
console.log(convertToFahrenheit(100)) // 212
console.log("_______________________________________________________________________________________")

// Question 4: createGreeting
// Write a function createGreeting that takes one parameter: a string name. It should return a greeting string in the format: "Hello, [name]!"

const createGreeting = (name) => {
  return `Hello, ${name}!`;
};
console.log(createGreeting("Mohamed")) // Hello, Mohamed!
console.log(createGreeting("Sara"))    // Hello, Sara!
console.log("_______________________________________________________________________________________")

// Question 5: getInitials
// Write a function getInitials that takes two parameters: a string firstName and a string lastName. It should return the initials by taking the first letter of each name.

const getInitials = (firstName, lastName) => {
  return firstName[0] + lastName[0];
};
console.log(getInitials("Mohamed", "Sy")) // MS
console.log(getInitials("John", "Doe"))   // JD
console.log("_______________________________________________________________________________________")

// Question 6: formatPrice
// Write a function formatPrice that takes one parameter: an integer price. It should return a formatted price string in the format: "$[price].00" (without the []).

const formatPrice = (price) => {
  return `$${price}.00`;
};
console.log(formatPrice(25))  // $25.00
console.log(formatPrice(100)) // $100.00
console.log("_______________________________________________________________________________________")

// Question 7: getLarger
// Write a function getLarger that takes two parameters: a number num1 and a number num2. It should return the larger of the two numbers.

const getLarger = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};
console.log(getLarger(5, 8))  // 8
console.log(getLarger(10, 3)) // 10
console.log("_______________________________________________________________________________________")

// Question 8: isValidAge
// Write a function isValidAge that takes one parameter: a number age. It should return true if the age is between 0 and 120 (inclusive), and false otherwise.

const isValidAge = (age) => {
  return age >= 0 && age <= 120;
};
console.log(isValidAge(25))  // true
console.log(isValidAge(-5))  // false
console.log(isValidAge(150)) // false
console.log("_______________________________________________________________________________________")

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
};
