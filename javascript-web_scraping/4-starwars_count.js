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

  const charactersArray = resultsArray.map(film => film.characters);

  const allCharacter = charactersArray.flat();
  const numOfWedge = allCharacter.filter(characterUrl => {
    return characterUrl.includes(`/${characterID}/`);
  });
  console.log(numOfWedge.length);
});
