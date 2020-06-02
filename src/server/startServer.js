const express = require('express');
const app = express();
const port = 3000;
const { getCommandment } = require('./getCommandment');
const { renderPage } = require('./renderPage');

function startServer() {
  app.get('/', async (req, res) => {
    const commandment = getCommandment();
    const page = await renderPage(commandment);
    res.send(page);
  });

  // API
  app.use('/api/get-commandment', (req, res) => res.send(getCommandment()));

  // Serve client
  app.use(express.static('src/client/public'));
  app.use('/*', (req, res) => res.redirect('/'));

  // Start express
  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
}

module.exports.startServer = startServer;
module.exports.defaultPort = port;
