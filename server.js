const express = require("express");

const connection = require("./db");

const { User, Event, UserEvents } = require("./associations");

const userRouter = require("./userRoutes");
const eventRouter = require("./eventRoutes");
const userEventsRouter = require("./userEventsRoutes");

const { findAllUsers, findUser } = require("./functions");

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/event", eventRouter);
app.use("/userevents", userEventsRouter);


app.listen(80, async () => {
    await Event.sync({alter: true});
    await User.sync({alter: true});
    await UserEvents.sync({alter: true});
    console.log("app is listening");
});