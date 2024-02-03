import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const data = [];

app.post("/", (req, res) => {
  try {
    const newDate = req.body;
    data.push(newDate);
    console.log(newDate);
    res.status(201).json("reseved");
  } catch {
    res.status(500).send("something went wrong!!");
  }
});
app.listen(5000, () => {
  console.log("Server is working!!!");
});
