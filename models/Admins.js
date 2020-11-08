const mongoose = require("mongoose");

const schema = mongoose.Schema;

const AdminSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  email3: {
    type: String,
    required: true,
  },
  email2: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Admin = mongoose.model("admins", AdminSchema);
