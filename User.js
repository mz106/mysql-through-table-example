const { DataTypes } = require("sequelize");
const connection = require("./db");

const User = connection.define("User", {
    username: {
        type: DataTypes.STRING
    }
});

module.exports = User;