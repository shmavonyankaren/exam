import express from "express";
import cors from "cors";
import fs from "fs";
const app = express();

app.use(express.json());
app.use(cors());

const data = [];

app.get("/", (req, res) => {
  try {
    const filePath = "data.json";
    const rawData = fs.readFileSync(filePath);
    const objData = JSON.parse(rawData);
    res.send(objData);
  } catch {
    res.status(500).send("Something went wrong!!");
  }
});

app.post("/", (req, res) => {
  try {
    const newDate = req.body;
    const jsonData = JSON.stringify(newDate);
    const filePath = "data.json";
    fs.writeFile(filePath, jsonData, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Object has been stored in the file:", filePath);
      }
    });
    console.log(newDate);
    res.status(201).json(newDate);
  } catch {
    res.status(500).send("something went wrong!!");
  }
});
app.listen(process.env.PORT || 5001, () => {
  console.log("Server is working!!!");
});
