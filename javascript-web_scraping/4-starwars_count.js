#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
const characterID = 18;

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
  }
  const json = JSON.parse(body);
  const resultsArray = json.results;
  const charactersArray = resultsArray.characters.map(function (strUrl) {
    return strUrl.match(`/${characterID}/$`);
  });
  const numOfWedge = charactersArray.lenght;
  console.log(numOfWedge);
});
