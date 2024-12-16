const express = require("express");
const app = express();
const PORT = process.env.PORT

app.get("/ping", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(PORT, () => {
  console.log(
   ` server is running in port: 8080, link: http://localhost:${PORT}`
  );
});