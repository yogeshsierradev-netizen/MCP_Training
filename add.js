// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Example usage
const num1 = 10;
const num2 = 20;
const result = add(num1, num2);

console.log(`${num1} + ${num2} = ${result}`);

// Export for use in other modules
module.exports = add;
