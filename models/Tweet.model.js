const { Schema, model, Types } = require("mongoose");

const tweetSchema = new Schema({
  name: { type: String, required: true, trim: true },
  tweet: { type: String, required: true },
  date: { type: Date, default: Date.now() },

  cryptos: [{ type: Types.ObjectId, ref: "Crypto" }],
});

const TweetModel = model("Tweet", tweetSchema);

module.exports = TweetModel;
