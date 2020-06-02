const path = require('path');
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const hogan = require('hogan.js');

async function renderPage({ sentence, number }) {
  const template = await readFile(
    path.join(__dirname, '../client/public/index.html.mustache'),
    'utf8'
  );

  return hogan.compile(template).render({ body: sentence, number });
}

module.exports.renderPage = renderPage;
