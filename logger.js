"use strict";
const config = require("./config");

function logger() {
  return function log(message) {
    console.log(`[${config.appName}] ${message}`);
  };
}
module.exports = logger;
