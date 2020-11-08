const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UsersSchema = new schema({
  applicationStatus: {
    type: String,
  },
});

module.exports = Users2 = mongoose.model("Users", UsersSchema, "users");
