const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/save", (req, res) => {
  // Handle save request
  res.sendStatus(200);
});
app.post("/publish", (req, res) => {
  // Handle publish request
  res.sendStatus(200);
});
app.post("/validate", (req, res) => {
  // Handle validate request
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
