const mongoose = require('mongoose');
// const db = mongoose.connection;

mongoose.connect('mongodb://localhost/fandangit');

let actorSchema = mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  movieId: Number,
  role: String,
  photo: String,
  bio: String,
  filmography: [{title: String, cast: Array}],
});

let Actor = mongoose.model('actor', actorSchema);

let find = (callback => {
  console.log('inside FIND');
  Actor.find({ id: 1 }, ((err, found) => {
    if (err) {
      console.log(`find error=${err}`);
      callback(err);
    } else {
      console.log(`find func data=${found}`);
      callback(found);
    }
  }));
});
module.exports = { find };