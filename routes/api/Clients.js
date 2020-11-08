const express = require("express");
const router = express.Router();


const Client = require("../../models/Users");

router.get("/all", (req, res) => {
  const errors = {};
  Client.find()
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(400).json(errors);
      }
      res.json(profiles);
    })
    .catch((err) => {
      res.status(404).json({ profiles: "There are no profiles" });
    });
});

router.post("/accept/:id", (req, res) => {
  const id = req.params.id;
  const query = {
    _id: id,
  };
  Client.findOneAndUpdate(query, { applicationStatus: "accepted" })
    .then((profile) => {
      res.status(200).json({ message: "Record succesfully updated." });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

router.post("/reject/:id", (req, res) => {
  const id = req.params.id;
  const query = {
    _id: id,
  };
  Client.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { applicationStatus: "rejected" } },
    { new: true },

    (err, doc) => {
      if (!err || doc) {
        console.log(doc);
        res.status(200).json({ message: "Record succesfully updated." });
      }
      if (err) {
        console.log(err);
        res.status(400).json({ error: err });
      }
    }
  );
});

module.exports = router;
