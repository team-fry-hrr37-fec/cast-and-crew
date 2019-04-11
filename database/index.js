const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fandangit', { useNewUrlParser: true });

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

let getActors = (movieId, callback) => {
  Actor.find(movieId, ((err, results) => {
    if (err) {
      console.log(`find actors error=${err}`);
      callback(err);
    } else {
      callback(null, results);
    }
  }));
};

module.exports = { getActors };

