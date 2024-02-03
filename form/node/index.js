import express from "express";
import cors from "cors";
import fs from "fs";
const app = express();

app.use(express.json());
app.use(cors());
const data = [];
app.post("/", (req, res) => {
  try {
    const newDate = req.body;
    data.push(newDate);
    console.log(newDate);
    console.log(data);
    res.status(201).json(newDate);
  } catch {
    res.status(500).send("something went wrong!!");
  }
});
app.listen(process.env.PORT || 5001, () => {
  console.log("Server is working!!!");
});
