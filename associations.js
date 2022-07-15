const { DataTypes } = require("sequelize");
const connection = require("./db");

const User = require("./User");
const Event = require("./Event");

const UserEvents = connection.define("UserEvents", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    EventId: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        }
    }
});

User.belongsToMany(Event, { through: 'UserEvents' });
Event.belongsToMany(User, { through: 'UserEvents' });

module.exports = {
    User,
    Event,
    UserEvents,
};