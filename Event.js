const { DataTypes } = require("sequelize");
const connection = require("./db");

const Event = connection.define("Event", {
    eventname: {
        type: DataTypes.STRING
    }
});

module.exports = Event;