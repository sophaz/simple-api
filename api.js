const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

var text = "Hello, World!"

app.get('/', (req, res) => res.send(text));

app.get('/about', (req, res) => {
  res.send({"about": "This is a very simple server. It has the ability to get and post some text."});
});

app.get('/text', (req, res) => {
  res.send({"text": text});
});

app.post('/text', (req, res) => {
  text = req.body.text;
  res.send({"text": text});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
