#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
  }

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    }
  });
});
