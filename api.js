const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

var me = {name:  "Sophie", title: "Engineer"};
var books = []

app.get('/', (req, res) => res.send('Hello World'));

app.get('/me', (req, res) => res.send(me));
app.post('/me', (req, res) => {
  me = req.body;
  res.send(me);
});

app.get('/books', (req, res) => {
  res.send({"books": books});
});
app.post('/books', (req, res) => {
  var book = req.body;
  books.push(book);
  res.send({"books": books});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
