const commandments = require('82-commandments');

function getCommandment() {
  // @TODO Improve sentence picker
  // Pick one sentce per day
  const number = Math.round(Date.now() / 1000 / 86400) % 82;
  return {
    sentence: commandments[number],
    number,
  };
}

module.exports.getCommandment = getCommandment;
