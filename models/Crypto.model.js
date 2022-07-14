const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const cryptoSchema = new Schema({
  tweet: { type: mongoose.Types.ObjectId, ref: "Tweet" },
  coin: { type: String },
  quantity: { type: Number },
});

const CryptoModel = model("Crypto", cryptoSchema);

module.exports = CryptoModel;
