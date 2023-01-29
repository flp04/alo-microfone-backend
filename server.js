const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let equipes = [
    'corinthia', 'parmera'
]

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`)
});

app.get('/equipes', (req, res) => {
    res.send(equipes)
  });

app.post('/equipes/', (req, res) => {
    res.send(req)
});

// listen on the port
app.listen(port);