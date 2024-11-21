define(["postmonger"], function (Postmonger) {
  "use strict";

  var connection = new Postmonger.Session();

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
    connection.trigger("updateActivity", configuration);

    connection.trigger("ready");
  }
});
