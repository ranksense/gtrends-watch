/*
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('*', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Listening on ${port}`));

*/

const express = require('express');
const app = express();
const rendertron = require('rendertron-middleware');
const PORT = process.env.PORT || 8080;
const DIST_FOLDER = process.cwd() + '/public';

// Add googlebot to the list of bots we will use Rendertron for
const BOTS = rendertron.botUserAgents.concat('googlebot');
const BOT_UA_PATTERN = new RegExp(BOTS.join('|'), 'i');

app.set('view engine', 'html');

// Add Rendertron middleware to send bot requests to Rendertron
app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://render-tron.appspot.com/render', // this is a DEMO URL! Do not use this in production!
  userAgentPattern: BOT_UA_PATTERN
}));

// Static Assets
app.get('*.*', express.static('public'));

// Point all routes to index...
app.get('*', (req, res) => {
  res.set('Vary', 'User-Agent');
  res.sendFile(DIST_FOLDER + '/index.html');
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Node Express server listening on ${PORT}`);
});
