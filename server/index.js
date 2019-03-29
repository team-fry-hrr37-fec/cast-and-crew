const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbIndex = require('../database/index.js');
const port = 2002;

let database = 'fandangit';
mongoose.connect(`mongodb://localhost/${database}`, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`connected to ${database}!`);
});

app.use('/', express.static(__dirname + '/../client/dist')); // verify this path when front end is up

app.use(express.json());

app.get('/actors', ((req, res) => {
  console.log('inside GET');
  dbIndex.find(actors => {
    console.log(`GET response to '/'=${actors}`);
    res.send(actors);
  });
}));

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});


