const dotenv = require('dotenv')
if(process.env.NODE_ENV !== 'PRODUCTION'){
  dotenv.config({
    path:'./config/.env'
  })
}
const express = require("express");
const connectDatabase = require("./DB/database");
const app = express();

const PORT = process.env.PORT;

app.get("/ping", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(PORT, () => {
  connectDatabase();
  console.log(
   ` server is running in port: 8080, link: http://localhost:${PORT}`
  );
});