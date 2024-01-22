#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/:id';

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
  }
  const json = JSON.parse(body);
  console.log(json);
});
