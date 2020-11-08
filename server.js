// ynxV19Hzca0VqE00
const express = require("express");
const mongoose = require("mongoose");

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const path = require("path");
mongoose.set("debug", true);

const users = require("./routes/api/users");
const clients = require("./routes/api/Clients");
const accounts = require("./routes/api/Accounts");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());
//passport config
require("./config/passport")(passport);
app.use("/api/users", users);
app.use("/api/client", clients);
app.use("/api/accounts",accounts);

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Working." });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
