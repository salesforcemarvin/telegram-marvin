define(["postmonger"], function (Postmonger) {
  "use strict";

  var connection = new Postmonger.Session();
  var payload = {};

  //Startup Sequence
  $(window).ready(onRender);

  connection.on("initActivity", initialize);
  connection.on("clickedNext", onClickedNext);
  connection.on("gotoStep", onClickedNext);

  function onRender() {
    // JB will respond the first time 'ready' is called with 'initActivity'
    connection.trigger("ready");
  }

  function initialize(data) {

    // if (data) {
    //   payload = data;
    // }

    //Checking if inArguments Exist
      // var message;
      // var hasInArguments = Boolean(
      //   payload["arguments"] &&
      //     payload["arguments"].execute &&
      //     payload["arguments"].execute.inArguments &&
      //     payload["arguments"].execute.inArguments.length > 0
      // );

    // //if arguement is empty then {}
      // var inArguments = hasInArguments
      // ? payload["arguments"].execute.inArguments
      // : {};

    //Iterates through the key-value pairs of the inArgument object.
    //Checks if the current key is "message".
      //If the key matches, the value (val) is assigned to the message variable.
      // $.each(inArguments, function (index, inArgument) {
      //   $.each(inArgument, function (key, val) {
      //     if (key === "message") {
      //       message = val;
      //     }
      //   });
      // });

    document.getElementById("configuration").value = JSON.stringify(
      data,
      null,
      2
    );
  }

  //Save Sequence
  function onClickedNext() {
    var configuration = JSON.parse(
      document.getElementById("configuration").value
    );
    
    //var configuration = document.getElementById("configuration").value;

    save(configuration);
  }

  function save(tdata) {
    

      // 'payload' is initialized on 'initActivity' above.
      // Journey Builder sends an initial payload with defaults
      // set by this activity's config.json file.  Any property
      // may be overridden as desired.
      payload.name = tdata; //text message to send to telegram

      payload["arguments"].execute.inArguments = [{ message: tdata }];
  
      payload["metaData"].isConfigured = true;

      connection.trigger("updateActivity", payload);

  }
});
