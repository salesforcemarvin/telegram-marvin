const express = require("express");
const axios = require("axios"); // trigger api call
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static("public"));

const config = require("./public/config.json");
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
app.post("/execute/", (req, res) => {
  // Endpoint to handle the execution of the custom activity

  //let channel = "@vcbsalesforce";
  let contact = "632717898";
  const token = "7622096585:AAHe3Tdc4zsc9-9hKvY0C5briAUo4QSIUWs";
  const endpoint = "https://api.telegram.org/bot";
  const url = `${endpoint}${token}/`;

  console.log(config);
  try {
    try {
      // const response = await axios.post("https://api.example.com/endpoint", {
      //   data: req.body,
      // });

      //merge the array of objects.
      const aArgs = config.arguments.execute.inArguments[0];
      // var oArgs = {};
      // for (var i = 0; i < aArgs.length; i++) {
      //   for (var key in aArgs[i]) {
      //     oArgs[key] = aArgs[i][key];
      //   }
      // }

      const chat_id = aArgs.chat_id;
      const text = aArgs.text;

      const response = axios.get(
        `${url}sendMessage?chat_id=${chat_id}&text=${text}`
      );

      res.send(response.data);
    } catch (error) {
      console.error("Error triggering API call:", error);
      res.status(500).send("Error triggering API call");
    }

    res.status(200).send({ status: "success" });
  } catch (error) {
    console.error("Error executing custom activity:", error);
    res.status(500).send({
      error: "An error occurred while executing the custom activity. 555",
    });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//for testing
// const data = {
//   execute: {
//     inArguments: [
//       {
//         contactKey: "LACUNA01",
//         emailAddress: "MMMM@gmail.com",
//       },
//     ]
//   },
// };

// const fs = require("fs");
// fs.readFile(".public/config.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading the file:", err);
//     return;
//   }
//   const config = JSON.parse(data);
//   console.log(config);
// });
