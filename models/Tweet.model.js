const { Schema, model } = require("mongoose");

const tweetSchema = new Schema({
  name: { type: String, required: true, trim: true },
  tweet: { type: String, required: true },
  date: { type: Number, required: true },
});

const TweetModel = model("Tweet", tweetSchema);

module.exports = TweetModel;
