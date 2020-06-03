const { getCommandment } = require('./get-commandment');

function makePage({ sentence, number }) {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <title>82 commandments</title>
      </head>
      <body>
        <div class="Page">
          <header>
            <h1 class="MainHeading"><span>82</span> commandments</h1>
          </header>
          <p class="Sentence">
            <span class="Sentence-body">${sentence}</span>
            <span class="Sentence-number">commandment ${number}</span>
          </p>
        </div>
      </body>
    </html>
  `;
}

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: makePage(getCommandment()),
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
};
