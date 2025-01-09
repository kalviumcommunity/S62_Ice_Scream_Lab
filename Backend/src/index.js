// if (process.env.NODE_ENV !== "PRODUCTION") {
require("dotenv").config();

const app = require("express")()

const connectDatabase = require("./DB/database.js");
const { connectDB, getDB } = require("./DB/db.js");

const port = process.env.PORT || 3000;
console.log(port);


app.get("/users", async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection("users").find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const db = getDB();
    const user = await db.collection("users").findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error", m:error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("users").insertOne({...req.body});
    res .status(201).json({ message: "User added successfully", userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error",m:error.message });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("users").updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("users") .deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  connectDatabase();
  connectDB();
  console.log(
    `Server is running in port: http://localhost:${port}`
  );
});
