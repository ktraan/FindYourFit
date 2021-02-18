const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
const staticFileMiddleware = express.static(
  path.join(__dirname + 'client/dist')
);

app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(5000, function () {
  console.log('Listening on 5000');
  console.log(__dirname + 'client/dist/index.html');
});
