const { format } = require('date-fns');

/**

 * @param {Date | string | number} date - 
 * @param {string} [dateFormat='MMMM dd, yyyy'] -
 * @returns {string} 
 */
function dateFormat(date, dateFormat = 'MMMM dd, yyyy') {
  if (!date) return '';

  const dateObject = new Date(date);


  return format(dateObject, dateFormat);
}

module.exports = dateFormat;