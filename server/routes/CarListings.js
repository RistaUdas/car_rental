const express = require("express");
const router = express.Router();
const { CarListings } = require("../models");


router.get("/", async (req, res) => {
   
    res.json("hello");
})

router.post("/", async (req, res) =>{
    const carlisting = req.body;
    await CarListings.create(carlisting);
    res.json(carlisting);
})

module.exports = router;