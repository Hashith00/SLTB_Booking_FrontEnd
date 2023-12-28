const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();
router.use(express.json());

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      password: hashedPassword,
    });
    try {
      const responce = await user.save();
      res.send({ massage: "User Regitered Successfully" });
    } catch (e) {
      if (e.code == 11000) {
        res.send({ massage: "Email is used" });
      }
      res.send({ massage: "Registertion failed due to server error" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ message: "User not found" });

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword)
    return res.status(400).send({ message: "Invalid password" });

  const token = jwt.sign({ userId: user.id }, "SECRET_KEY", {
    expiresIn: "1h",
  });
  res.send({ token });
});

module.exports = router;
