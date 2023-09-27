const express = require("express");
const router = express.Router();
const { Bookings } = require("../models");



router.get("/", (req, res) => {
    res.json("hello world")
});

router.post("/", async (req, res) => {
    const booking = req.body;
    await Bookings.create(booking);
    res.json(booking);

});
 

module.exports = router;