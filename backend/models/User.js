const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    min: [4, "Too short , min 4 characters are required"],
    max: [32, "Too short , min 4 characters are required"],
  },
  email: {
    type: String,
    required: "true",
  },
  password: {
    type: String,
    min: [4, "Too short , min 4 characters are required"],
    max: [32, "Too short , min 4 characters are required"],
    required: true,
  },
  hotels: [
    {
      type: schema.Types.ObjectId,
      ref: "Hotel",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
