const express = require('express');

const app = express()


app.set('port', 9999);

app.get('/', (req, res) => {
  res.sendFile('sdk.html', {root: './'});
})

app.use(express.static('./'));

app.use(function(err, req, res, next) {
  console.error("Catch error:", JSON.stringify(err, null, 2));
  res.status(500).json(err);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
