const express = require("express");
const path = require("path");
const router = express.Router();
const { Players } = require("./models/Handler");

router.get("/index/:id", async (req, res) => {
    // Static function which returns promise
    let game = await Players.getGame(req.params.id);
    let data = {
        game: game
    };
    res.render("index", data);
});

module.exports = router;