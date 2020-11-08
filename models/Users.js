const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UsersSchema = new schema({
  applicationStatus: {
    type: String,
  },
});

module.exports = Users1 = mongoose.model("Gigs", UsersSchema, "gigs");
