const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/save", (req, res) => {
  console.log('Saving custom activity configuration');
  // Handle save request
  res.sendStatus(200);
});
app.post("/publish", (req, res) => {
  console.log('Publishing custom activity');
  // Handle publish request
  res.sendStatus(200);
});
app.post("/validate", (req, res) => {
  console.log('Validating custom activity');
  // Handle validate request
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
