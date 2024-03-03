const moment = require('moment');

function toReadableDate(date) {
  return moment(date).format('LLLL');
}

module.exports = toReadableDate;