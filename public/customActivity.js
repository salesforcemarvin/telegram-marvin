var connection = new Postmonger.Session();

//Startup Sequence
connection.trigger("ready");

connection.on("initActivity", initialize);
connection.on("clickedNext", onClickedNext);

function initialize(data) {
  document.getElementById("configuration").value = JSON.stringify(data,null,2);
}

//Save Sequence
function onClickedNext() {
  var configuration = JSON.parse(
    document.getElementById("configuration").value
  );
  connection.trigger("updateActivity", configuration);
}
