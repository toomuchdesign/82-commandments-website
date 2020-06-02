const test = require('ava');
const got = require('got');
const commandments = require('82-commandments');
const { startServer, defaultPort } = require('./server/startServer');

test.before((t) => {
  startServer();
});

test('render HTML page containing one sentence', async (t) => {
  const response = await got(`http://localhost:${defaultPort}`, {
    https: {
      rejectUnauthorized: false,
    },
  });

  t.is(response.headers['content-type'], 'text/html; charset=utf-8');

  let sentenceFound = false;
  for (sentence of commandments) {
    if (response.body.includes(sentence)) {
      sentenceFound = true;
      return;
    }
  }

  t.true(sentenceFound);
});
