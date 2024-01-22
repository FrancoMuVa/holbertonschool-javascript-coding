#!/usr/bin/node

const request = require('request');
const movie_id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/:${movie_id}`;

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
  }
  const json = JSON.parse(body);
  console.log(json);
});
