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
    min: [4, "Too short , min 4 characters are required"],
    max: [32, "Too short , min 4 characters are required"],
    unique: true,
    lowercase: true,
    required: "email is required",
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
  },
  password: {
    type: String,
    min: [4, "Too short , min 4 characters are required"],
    max: [32, "Too short , min 4 characters are required"],
    required: "password is required",
  },
  hotels: [
    {
      type: schema.Types.ObjectId,
      ref: "Hotel",
    },
  ],
});

const User = mongoose.model("User", userSchema);
