// Function to add two dates
function addDates(date1, date2) {
  // Convert both dates to Date objects if they're strings
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  // Get time in milliseconds and add them
  const sumTime = d1.getTime() + d2.getTime();
  
  // Create a new Date from the sum
  return new Date(sumTime);
}

// Function to add days to a date
function addDaysToDate(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Function to add hours to a date
function addHoursToDate(date, hours) {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
}

// Export functions for use in other modules
module.exports = {
  addDates,
  addDaysToDate,
  addHoursToDate
};
