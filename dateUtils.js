// Comprehensive Date Utility Functions

/**
 * Add days to a given date
 * @param {Date} date - The starting date
 * @param {number} days - Number of days to add
 * @returns {Date} - New date with days added
 */
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Add months to a given date
 * @param {Date} date - The starting date
 * @param {number} months - Number of months to add
 * @returns {Date} - New date with months added
 */
function addMonths(date, months) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

/**
 * Add years to a given date
 * @param {Date} date - The starting date
 * @param {number} years - Number of years to add
 * @returns {Date} - New date with years added
 */
function addYears(date, years) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

/**
 * Get the difference between two dates in days
 * @param {Date} date1 - First date
 * @param {Date} date2 - Second date
 * @returns {number} - Difference in days
 */
function getDaysDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Check if a date is today
 * @param {Date} date - Date to check
 * @returns {boolean} - True if date is today
 */
function isToday(date) {
  const today = new Date();
  const checkDate = new Date(date);
  return today.toDateString() === checkDate.toDateString();
}

/**
 * Check if a date is in the past
 * @param {Date} date - Date to check
 * @returns {boolean} - True if date is in the past
 */
function isPast(date) {
  return new Date(date) < new Date();
}

/**
 * Check if a date is in the future
 * @param {Date} date - Date to check
 * @returns {boolean} - True if date is in the future
 */
function isFuture(date) {
  return new Date(date) > new Date();
}

/**
 * Format date to a readable string (YYYY-MM-DD)
 * @param {Date} date - Date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Get the start of the day for a given date
 * @param {Date} date - Input date
 * @returns {Date} - Date at 00:00:00
 */
function startOfDay(date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Get the end of the day for a given date
 * @param {Date} date - Input date
 * @returns {Date} - Date at 23:59:59
 */
function endOfDay(date) {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

// Export all functions
module.exports = {
  addDays,
  addMonths,
  addYears,
  getDaysDifference,
  isToday,
  isPast,
  isFuture,
  formatDate,
  startOfDay,
  endOfDay
};
