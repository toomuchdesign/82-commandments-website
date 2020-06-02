const path = require('path');
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const hogan = require('hogan.js');

async function renderPage(body = '') {
  const template = await readFile(
    path.join(__dirname, '../client/public/index.html.mustache'),
    'utf8'
  );

  return hogan.compile(template).render({ body });
}

module.exports.renderPage = renderPage;
