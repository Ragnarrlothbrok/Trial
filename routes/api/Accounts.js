const express = require("express");
const router = express.Router();


const Account = require("../../models/Accounts");

router.get("/all", (req, res) => {
  const errors = {};
  Account.find()
    .then((users) => {
      if (!users) {
        errors.nouser = "There are no users";
        return res.status(400).json(errors);
      }
      res.json(users);
    })
    .catch((err) => {
      res.status(404).json({ users: "There are no users" });
    });
});



module.exports = router;
