const { Sequelize } = require("sequelize");

//enter Clever Cloud connection string below or into an .env file
const connection = new Sequelize();

module.exports = connection;

