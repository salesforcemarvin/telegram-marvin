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

app.post("/execute", (req, res) => {
  // Endpoint to handle the execution of the custom activity
  try {
    const inArguments = req.body.inArguments[0];
    const contactKey = inArguments.contactKey;
    const emailAddress = inArguments.emailAddress;
    const firstName = inArguments.firstName;
    const lastName = inArguments.lastName;
    const customField = inArguments.customField;
    // Implement your custom logic here
    console.log(`Executing custom activity for contact: ${contactKey}`);
    console.log(
      `Email: ${emailAddress}, First Name: ${firstName}, Last Name: ${lastName}, Custom Field: ${customField}`
    );
    res.status(200).send({ status: "success" });
  } catch (error) {
    console.error("Error executing custom activity:", error);
    res
      .status(500)
      .send({
        error: "An error occurred while executing the custom activity.",
      });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const jwt = require("jsonwebtoken");
// // Middleware to verify JWT
// app.use((req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(403).send({ error: "No token provided." });
//   }
//   jwt.verify(token, "your-secret-key", (err, decoded) => {
//     if (err) {
//       return res.status(500).send({ error: "Failed to authenticate token." });
//     }
//     req.decoded = decoded;
//     next();
//   });
// });


