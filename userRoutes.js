const router = require("express").Router();

const { findUser, findAllUsers } = require("./functions");

const { User, Event, UserEvents } = require("./associations");

router.post("/", async (req, res) => {
    const user = await User.create({
        username: req.body.username
    });

    res.send(user);
});

router.get("/", async (req, res) => {
    const users = await User.findAll();

    res.send(users);
});

router.get("/:username", async (req, res) => {
    const user = await findUser(req.params.username);
    res.send(user);
});


module.exports = router;