const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const auth = require("./routes/auth");
const users = require("./routes/users");
const stripe = require("./routes/stripe");

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));

async function createConnection() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/admin");
    console.log("Connected");
  } catch (e) {
    console.error(e);
  }
}

createConnection();

app.listen(4000, () => {
  console.log("Listing to PORT 4000");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.use("/api", auth);
app.use("/api/users", users);
app.use("/api/stripe", stripe);
