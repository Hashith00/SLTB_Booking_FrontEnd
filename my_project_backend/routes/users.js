const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send("User is not found");
  res.send(user);
});

router.post("/calculatecost", (req, res) => {
  let price;
  let initailvalue;
  let finalvalue;

  if (req.body != null) {
    switch (req.body.startLocation) {
      case "Kandy":
        initailvalue = 1;
        break;
      case "Mavanalla":
        initailvalue = 2;
        break;
      case "Kagalla":
        initailvalue = 3;
        break;
      case "Warakapola":
        initailvalue = 4;
        break;
      case "Nittabuva":
        initailvalue = 5;
        break;
      case "Yakkala":
        initailvalue = 6;
        break;
      case "Kiribathgoda":
        initailvalue = 7;
        break;
      case "Boralla":
        initailvalue = 8;
        break;
      case "Narahenpita":
        initailvalue = 9;
        break;
    }

    switch (
      req.body.endLocation // Use req.body.endLocation instead of req.params.endLocation
    ) {
      case "Kandy":
        finalvalue = 1;
        break;
      case "Mavanalla":
        finalvalue = 2;
        break;
      case "Kagalla":
        finalvalue = 3;
        break;
      case "Warakapola":
        finalvalue = 4;
        break;
      case "Nittabuva":
        finalvalue = 5;
        break;
      case "Yakkala":
        finalvalue = 6;
        break;
      case "Kiribathgoda":
        finalvalue = 7;
        break;
      case "Boralla":
        finalvalue = 8;
        break;
      case "Narahenpita":
        finalvalue = 9;
        break;
    }

    price = Math.abs(initailvalue - finalvalue) * 100;
    res.send(price.toString());
  } else {
    res.status(400).send("Bad Request: Missing parameters");
  }
});

router.put("/addlocation/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      startLocation: req.body.startLocation,
      endLocation: req.body.endLocation,
    },
    { new: true }
  );
  if (!user) {
    res.status(404).send("Given id was not found");
    return;
  }

  res.send(user);
});

// Uses to record the data and time of the ticked is issued
// need to add new feilds to shema
router.put("/date/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      startingDate: req.body.startingDate,
      endingDate: req.body.endingDate,
    },
    { new: true }
  );

  if (!user) {
    res.status(404).send("Given id was not found");
    return;
  }

  res.send(user);
});

module.exports = router;
