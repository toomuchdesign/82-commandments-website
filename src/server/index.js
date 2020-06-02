const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// API
app.use('/api*', (req, res) => res.send('Api response'));

// Serve client
app.use(express.static('src/client/public'));
app.use('/*', (req, res) => res.redirect('/'));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
);

// Start express server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
