const router = require("express").Router();
const { User, Event, UserEvents } = require("./associations");

router.get("/", async (req, res) => {
    const userEvents =  await UserEvents.findAll();
    res.send(userEvents);
});

router.get("/:userid", async (req, res) => {
    const usersevents = await UserEvents.findAll(
        { where: 
            { UserId: req.params.userid } 
        });
    res.send(usersevents);
});

router.post("/", async (req, res) => {
    const user = await User.findOne({ where: { username: req.body.username } })
    const event = await Event.findOne({ where: { eventname: req.body.eventname } });
    const newUserEvent = await UserEvents.create({
        UserId: user.id,
        EventId: event.id
    });
    res.send(newUserEvent);
});

module.exports = router;