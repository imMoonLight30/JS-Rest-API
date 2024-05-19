"use strict";

var fs = require('fs');

var FILE_NAME = './assets/pies.json';
var pieRepo = {
  get: function get(resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  }
};
module.exports = pieRepo;