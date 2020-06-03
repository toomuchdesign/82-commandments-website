const commandments = require('82-commandments');

function getCommandment() {
  // @TODO Improve sentence picker
  // Pick one sentence per day
  const number = Math.round(Date.now() / 1000 / 86400) % 82;
  return {
    sentence: commandments[number],
    number,
  };
}

exports.getCommandment = getCommandment;
exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: getCommandment(),
  });
};
