// Function to get current date and time
function getCurrentDateTime() {
  const now = new Date();
  return now;
}

// Function to format date and time
function formatDateTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Get current date and time
const currentDateTime = getCurrentDateTime();
const formattedDateTime = formatDateTime(currentDateTime);

console.log('Current DateTime:', formattedDateTime);
console.log('Full Date Object:', currentDateTime);

// Export functions for use in other modules
module.exports = { getCurrentDateTime, formatDateTime };
