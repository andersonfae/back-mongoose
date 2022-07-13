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

router.get("/all-tweet", async (req, res) => {
  try {
    const allTweet = await TweetModel.find();

    return res.status(200).json(allTweet);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// READ DETAIL

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const tweet = await TweetModel.findOne({ _id: id });

    return res.status(200).json(tweet);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

// EDIT

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editTweet = await TweetModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editTweet);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

module.exports = router;
