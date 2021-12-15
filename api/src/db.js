const Sequelize = require("sequelize");

function db() {
  return new Sequelize("postgres://postgres:password@localhost/henrybank", {
    logging: console.log, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed, set true
  });
}

module.exports = db;