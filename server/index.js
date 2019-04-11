const express = require('express');
const cors = require ('cors');
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

app.use('/', express.static(__dirname + '/../client'));

app.use(cors());
app.use(express.json());

app.get('/actors', (req, res) => {
  // console.log(JSON.stringify(req.query)); // = {"movieId":"1"}
  let movieId = req.query;
  dbIndex.getActors(movieId, (err, results) => {
    if (err) {
      console.log(`actors GET error=${err}`);
    }
    // console.log(`actors GET response[0]=${JSON.stringify(results[0])}`);
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
