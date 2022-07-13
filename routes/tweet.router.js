const router = require("express").Router();

const TweetModel = require("../models/Tweet.model");

// CREATE

router.post("/create-tweet", async (req, res) => {
  try {
    const newTweet = await TweetModel.create(req.body);

    return res.status(200).json(newTweet);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// READ ALL

// router.get("all-tweet", async (req, res) => {
//   try {
//     const allTweet = await TweetModel.find();

//     return res.status(200).json(allTweet);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
// });

module.exports = router;
