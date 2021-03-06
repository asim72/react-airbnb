const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");
const Auth = require("../middleware/Auth");

router.get("/all", Auth, async (req, res) => {
  try {
    const hotels = await Hotel.find({});

    if (!hotels) {
      return res.status(401).json({ message: "No Hotel Found" });
    }

    res.status(200).json({ hotels });
  } catch (error) {
    console.error(error);
    res.status(500).send("server error");
  }
});

router.get("/hotel/:id", Auth, async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ _id: req.params.id });

    if (!hotel) {
      return res.status(401).json({ message: "No Hotel Found" });
    }

    res.status(200).send(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).send("server error");
  }
});

module.exports = router;
