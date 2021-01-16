var mode = localStorage.getItem('mode');
if (mode === "gaze") {
  $("#iframe2").attr("src", "./p5/gaze.html");
}

$("#nextBtn").click(() => {
  location.href = "./question.html";
})




// function onReady(callback) {
//   var intervalId = window.setInterval(function() {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 2000);
// }

// function setVisible(selector, visible) {
//   document.querySelector(selector).style.display = visible ? 'block' : 'none';
// }

// onReady(function() {
//   setVisible('.container-fluid', true);
//   setVisible('#loading', false);
// });

// onReady(function () {
//   setVisible(".container-fluid", true);
//   setVisible("#loading", false);
//   // introJs().start();
//   introJs().setOptions({
//     steps: [{
//       intro: "Experience with your gazes!"
//     }, {
//       element: document.getElementById('camera'),
//       intro: 'Make sure your face within the box and it\'s green!'
//     }]
//   }).start();
// });

// var iframe2 = document.getElementById('iframe2')
// iframe2.onload = function()
//     {
//         //display loader on page load
//         $('#loading').fadeOut();
//     }

// $(document).ready(function() {

//   $("#iframe2").load(function() {
//      $("#loading").hide();
//   });
// });
