const Pool = require('pg').Pool

const pool = new Pool({
  user: 'rebeccasawyer',
  host: 'localhost',
  database: 'castandcrew',
  password: '',
  port: 5432,
})

const getActors = (callback) => {
  pool.query('SELECT * FROM actors ORDER BY id ASC', (err, results) => {
    if (err) {
      throw err;
    }
    callback(null, results);
  })
}

const getActorById = (id, callback) => {
  pool.query('SELECT * FROM actors WHERE id = $1', [id], (err, results) => {
    if (err) {
      throw err;
    }
    callback(null, results);
  })
}

const createActor = (name, title, movieId, role, photo, bio, filmography, callback) => {
  pool.query('INSERT INTO actors (name, title, movieId, role, photo, bio, filmography) VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, title, movieId, role, photo, bio, filmography], (err, results) => {
    if (err) {
      throw err;
    }
    callback(null, results);
  })
}

const updateActor = (name, title, id, callback) => {
  pool.query(
    'UPDATE actors SET name = $1, title = $2 WHERE id = $3', [name, title, id], (err, results) => {
      if (err) {
        throw err;
      }
      callback(null, `Actor modified with ID: ${id}`)
    }
  )
}

const deleteActor = (id, callback) => {
  pool.query('DELETE FROM actors WHERE id = $1', [id], (err, results) => {
    if (err) {
      throw err;
    }
    callback(null, `Actor deleted with ID: ${id}`)
  })
}

module.exports = {
  pool,
  getActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor
}