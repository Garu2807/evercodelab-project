"use strict";
const config = require("./config");

function logger() {
  return function log(message) {
    console.log(`[${config.appName}] ${message}`);
  };
}
const log = logger()
log("Приложение запущено")
module.exports = logger;
