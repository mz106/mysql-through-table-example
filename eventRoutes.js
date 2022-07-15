const router = require("express").Router();
const { Event } = require("./associations");

router.post("/", async (req, res) => {
    
    const event = await Event.create({
        eventname: req.body.eventname,
    });

    res.send(event);
});

router.get("/", async (req, res) => {
    const events = await Event.findAll();
    res.send(events);
});

module.exports = router;