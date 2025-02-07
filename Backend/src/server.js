const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config();
}


const cors = require('cors')
const express = require("express");
const path=require("path")
const userRouter = require('./routes/user.route.js');
const connectDatabase = require("./DB/database");
const app = express();
app.use(express.json());
app.use(cors());




const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  connectDatabase();
  console.log(
    ` server is running in port: ${PORT}, link: http://localhost:${PORT}`
  );
});

app.get("/ping", (req, res) => {
  res.send("Welcome to backend");
});


app.use('/user',userRouter);
app.use('/uploads',express.static(path.join(__dirname,"../uploads")))
