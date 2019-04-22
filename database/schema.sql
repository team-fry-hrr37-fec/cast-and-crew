
CREATE TABLE actors (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255),
  title VARCHAR(255),
  movieId int,
  role VARCHAR(255),
  photo VARCHAR(255),
  bio VARCHAR(8000),
  filmography VARCHAR(8000)
);

