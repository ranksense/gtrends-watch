// See: https://github.com/GoogleChrome/rendertron/tree/master/middleware

const express = require('express');
const rendertron = require('rendertron-middleware');

const app = express();

app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:3000/render',
}));

app.use(express.static('files'));
app.listen(8080);

