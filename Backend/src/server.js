const express = require("express");
const app = express();


app.get("/pong", (req, res) => {
  res.send("Welcome to backend");
});

app.listen('8080', () => {
  console.log(
    "server is running in port: 8080, link: http://localhost:8080"
  );
});