// See: https://github.com/prerender/prerender-node

const express = require('express');
const app = express();

app.use(require('prerender-node').set('prerenderToken', 'M8hL4nv2V3c3SDduOVkX'));

app.use(express.static('files'));
app.listen(8080);

