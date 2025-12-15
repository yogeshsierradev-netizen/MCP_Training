// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Example usage
const num1 = 5;
const num2 = 8;
const result = multiply(num1, num2);

console.log(`${num1} * ${num2} = ${result}`);

// Export for use in other modules
module.exports = multiply;
