const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();

const generateFilmography = () => {
  let movies = [];
  for (let i = 1; i < Math.floor(Math.random() * 6) + 2; i++) {
    movies.push(Math.floor(Math.random() * Math.floor(1000)));
  }
  return movies;
}

const generateActors = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (let i = 0; i < 10000000; i++) {
    writer.write({
      id: i + 1,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      movieId: Math.floor(Math.random() * Math.floor(1000)),
      role: faker.name.jobTitle(),
      photo: faker.image.people(),
      bio: faker.lorem.paragraph(),
      filmography: generateFilmography()
    })
  }
  writer.end();
  console.log('done');
}

const generateAmountOfActors = () => {
  let actors = [];
  for (let i = 1; i < Math.floor(Math.random() * 6) + 3; i++) {
    actors.push(Math.floor(Math.random() * Math.floor(10000000)));
  }
  return actors;
}

const generateMovies = () => {
  writer.pipe(fs.createWriteStream('movies.csv'));
  for (let i = 0; i <= 1000; i++) {
    writer.write({
      id: i + 1,
      title: faker.random.word(),
      cast: generateAmountOfActors()
    })
  }
  writer.end();
  console.log('done');
}


generateActors();

generateMovies();