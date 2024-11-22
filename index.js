const express = require("express");
const axios = require("axios"); // trigger api call
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



  try {
    //const inArguments = req.execute.inArguments[0];
    //var inArguments = req["arguments"].execute.inArguments[0];
    //var inArguments = req.execute.inArguments["customField"];

    // const contactKey = inArguments.contactKey;
    //const emailAddress = inArguments.emailAddress;
    // const firstName = inArguments.firstName;
    // const lastName = inArguments.lastName;
    // const customField = inArguments.customField;
    // // Implement your custom logic here
    // console.log(`Executing custom activity for contact: ${contactKey}`);
    // console.log(
    //   `Email: ${emailAddress}, First Name: ${firstName}, Last Name: ${lastName}, Custom Field: ${customField}`
    // );
    console.log("marvin is here");

    try {
      // const response = await axios.post("https://api.example.com/endpoint", {
      //   data: req.body,
      // });

      // var message;
      // if (typeof req === "undefined") {
      //   message = "nyek undefined";
      // } else {
      //   message = "dddd"; //JSON.parse(req.execute);
      // }

      const response = axios.get(
        "https://api.telegram.org/bot7622096585:AAHe3Tdc4zsc9-9hKvY0C5briAUo4QSIUWs/sendMessage?chat_id=@vcbsalesforce&text=" +
          "333 " 
          //+ inArguments.customField
          
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
      error: "An error occurred while executing the custom activity. 333",
    });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
