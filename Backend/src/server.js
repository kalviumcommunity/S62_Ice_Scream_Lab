const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config();
}
const express = require("express");
const connectDatabase = require("./DB/database");
const app = express();
app.use(express.json());

const PORT = process.env.PORT;
console.log(PORT);
app.get("/ping", (req, res) => {
  res.send("Welcome to backend");
});


app.post("/user", (req, res) => {
  const userData = req.body;
  userData
    .save()
    .then(() => res.status(201).json({ message: "User added successfully!" }))
    .catch((error) => {
      res
        .status(500)
        .json({ message: "An error occurred", error: error.message });
    });
});

app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  User.findByIdAndUpdate(id, updatedData, { new: true })
    .then((updatedItem) => {
      if (!updatedItem) {
        return res.status(404).json({ message: "User not found" });
      }
      res
        .status(200)
        .json({ message: "User data updated successfully", updatedItem });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "An error occurred", error: err.message });
    });
});
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id)
    .then((deletedItem) => {
      if (!deletedItem) {
        return res.status(404).json({ message: "User not found" });
      }
      res
        .status(200)
        .json({ message: "User deleted successfully", deletedItem });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "An error occurred", error: err.message });
    });
});



app.listen(PORT, () => {
  connectDatabase();
  console.log(
    ` server is running in port: 8080, link: http://localhost:${PORT}`
  );
});

