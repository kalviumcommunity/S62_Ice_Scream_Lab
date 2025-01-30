const path = require('path');
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: path.resolve(__dirname, '../.env')
  });
}

const mongoose = require("mongoose")
const connectDatabase = async () => {
  mongoose.connect(process.env.DB_URL)
    .then((data) => {
      console.log(
        `Database is connected Successfully: ${data.connection.host}`
      );
    })
    .catch((err) => console.log("Database connection Failed...", err));
};

module.exports = connectDatabase
