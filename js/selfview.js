var mode = localStorage.getItem("mode");
var ipt = localStorage.getItem("ipt");
var camera = document.querySelector("#camera");

$("#word").text(ipt);

if (mode === "gaze") {
  $("#look").attr("src", "./assets/selfview/look-camera.gif");
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      camera.srcObject = stream;
    })
    .catch(function (err) {
      console.log(err);
    });
}
