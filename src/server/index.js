const express = require('express');
const app = express();
const port = 3000;
const { renderPage } = require('./renderPage');

app.get('/', async (req, res) => {
  const page = await renderPage('suca');
  res.send(page);
});

// API
app.use('/api*', (req, res) => res.send('Api response'));

// Serve client
app.use(express.static('src/client/public'));
app.use('/*', (req, res) => res.redirect('/'));

// Start express
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
