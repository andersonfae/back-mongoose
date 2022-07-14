const router = require("express").Router();

const CryptoModel = require("../models/Crypto.model");
const TweetModel = require("../models/Tweet.model");

// CREATE

router.post("/create-crypto/:tweetId", async (req, res) => {
  try {
    const { tweetId } = req.params;

    const newCrypto = await CryptoModel.create({ ...req.body, tweet: tweetId });

    const cryptoCurrency = await TweetModel.findOneAndUpdate(
      { _id: tweetId },
      { $push: { cryptos: newCrypto._id } },
      { new: true }
    );

    return res.status(201).json({ newCrypto, cryptoCurrency });
  } catch (error) {
    console.error(error);

    return res.status(500).json(error);
  }
});

// READ ALL

router.get("/all-crypto", async (req, res) => {
  try {
    const allCrypto = await CryptoModel.find();

    return res.status(200).json(allCrypto);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// READ DETAIL

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const crypto = await CryptoModel.findOne({ _id: id }).populate("tweet");

    return res.status(200).json(crypto);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

// EDIT

router.patch("/edit-crypto/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editCrypto = await CryptoModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editCrypto);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

// DELETE

router.delete("/delete-crypto/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCrypto = await CryptoModel.deleteOne({ _id: id });

    return res.status(200).json(deletedCrypto);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
