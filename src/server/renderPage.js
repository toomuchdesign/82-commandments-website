const path = require('path');
const { readFileSync } = require('fs');
const hogan = require('hogan.js');
const template = hogan.compile(
  readFileSync(
    path.join(__dirname, '../client/public/index.html.mustache'),
    'utf8'
  )
);

function renderPage({ sentence, number }) {
  return template.render({ body: sentence, number });
}

module.exports.renderPage = renderPage;
