#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.error(err);
  }
  const allTasks = JSON.parse(body);
  const completedTasks = {};
  for (const task of allTasks) {
    if (task.completed) {
      if (!completedTasks[task.userId]) {
        completedTasks[task.userId] = 1;
      } else {
        completedTasks[task.userId] += 1;
      }
    }
  }
  console.log(completedTasks);
});
