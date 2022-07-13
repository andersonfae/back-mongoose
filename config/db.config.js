const moongose = require("mongoose");

async function connect() {
  try {
    const dbConnect = await moongose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("DB connection error", err);
  }
}

module.exports = connect;
