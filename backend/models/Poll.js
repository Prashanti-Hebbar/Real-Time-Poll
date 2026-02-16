const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      text: String,
      votes: {
        type: Number,
        default: 0,
      },
    },
  ],
  voters: [String], //To track who has voted
  ipAddresses: [String], //To track IP addresses for additional security

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Poll", pollSchema);
