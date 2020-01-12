/*
 * @author iobami
 */
const express = require('express');
// const path = require('path');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');

const app = express();

app.use(history({
  index: '/',
}));

app.use(serveStatic(`${__dirname}/dist`));
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`server started ${port}`);
