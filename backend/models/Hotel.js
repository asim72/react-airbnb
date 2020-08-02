const mongoose = require("mongoose");

const schema = mongoose.Schema;

const hotelSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  bedroom: {
    type: Number,
  },
  dailyRate: {
    type: Number,
  },
  shared: {
    type: Number,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
