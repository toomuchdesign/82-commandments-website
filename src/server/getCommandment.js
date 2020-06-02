const commandments = require('82-commandments');

function getCommandment() {
  // @TODO Improve sentence picker
  const number = Math.round(Date.now() / 86400) % 82;
  return {
    sentence: commandments[number],
    number,
  };
}

module.exports.getCommandment = getCommandment;
