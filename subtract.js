// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Example usage
const num1 = 30;
const num2 = 10;
const result = subtract(num1, num2);

console.log(`${num1} - ${num2} = ${result}`);

// Export for use in other modules
module.exports = subtract;
