const express = require('express');
const cors = require ('cors');
const app = express();
const mongoose = require('mongoose');
const db = require('../database/queries.js')
const port = 2002;
const path = require("path");



app.use('/', express.static(path.join(__dirname, '../client')));

app.use(cors());
app.use(express.json());

app.get('/actors', (req, res) => {
  db.getActors((err, data) => {
  	if (err) {
  	   throw err;
  	}
  	console.log(data);
  	res.send(data);
  });
});

app.get('/actors/:id', (req, res) => {

  let id = parseInt(req.params.id);
  db.getActorById(id, (err, data) => {
  	if (err) {
  	   throw err;
  	}
  	console.log(data);
  	res.send(data);
  });
});

app.post('/actors', (req, res) => {

  let { name, title, movieId, role, photo, bio, filmography } = req.body;
  db.createActor(name, title, movieId, role, photo, bio, filmography, (err, data) => {
  	if (err) {
  	   throw err;
  	}
  	console.log(data);
  	res.send(data);
  });
});

app.put('/actors/:id', (req, res) => {

  let id = parseInt(req.params.id);
  let { name, title } = request.body;
 
  db.updateActor(name, title, id, (err, data) => {
  	if (err) {
  	   throw err;
  	}
  	console.log(data);
  	res.send(data);
  });
});

app.delete('/actors/:id', (req, res) => {

  let id = parseInt(req.params.id);
 
  db.deleteActor(id, (err, data) => {
  	if (err) {
  	   throw err;
  	}
  	console.log(data);
  	res.send(data);
  });
});

 

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});



