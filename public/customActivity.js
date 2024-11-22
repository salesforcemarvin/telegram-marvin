define(["postmonger"], function (Postmonger) {
  "use strict";

  var connection = new Postmonger.Session();
  var payload = {};

  // var steps = [
  //   // initialize to the same value as what's set in config.json for consistency
  //   { label: "Step 1", key: "step1" }
  // ];
  // var currentStep = steps[0].key;

  //Startup Sequence
  $(window).ready(onRender);

  connection.on("initActivity", initialize);
  connection.on("clickedNext", onClickedNext);

  function onRender() {
    // JB will respond the first time 'ready' is called with 'initActivity'
    connection.trigger("ready");
  }

  function initialize(data) {

    // document.getElementById("configuration").value = JSON.stringify(
    //   data,
    //   null,
    //   2
    // );
    document.getElementById("configuration").value = data;

  }

  //Save Sequence
  function onClickedNext() {
    // var configuration = JSON.parse(
    //   document.getElementById("configuration").value
    // );
    var configuration = document.getElementById("configuration").value;
    
    //connection.trigger("updateActivity", configuration);
    save(configuration);
  }

  function save(tdata) {
    

      // 'payload' is initialized on 'initActivity' above.
      // Journey Builder sends an initial payload with defaults
      // set by this activity's config.json file.  Any property
      // may be overridden as desired.
      payload.name = "telegramText"; //text message to send to telegram

      payload["arguments"].execute.inArguments = [{ message: tdata }];
  
      payload["metaData"].isConfigured = true;

      connection.trigger("updateActivity", payload);

  }
});
