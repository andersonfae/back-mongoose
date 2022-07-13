const express = require("express");
require("dotenv").config();

const dbConnect = require("./config/db.config");
dbConnect();

const app = express();

app.use(express.json());

const tweetRouter = require("./routes/tweet.router");
app.use("/tweet", tweetRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at por ${process.env.PORT}`);
});
