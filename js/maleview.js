var mode = localStorage.getItem("mode");
if (mode === "gaze") {
  $("#iframe2").attr("src", "./p5/gaze.html");

  introJs()
    .setOptions({
      steps: [
        {
          title: "Experience with your gazes!",
          intro:
            "Camera permission is required. However, the video steam runs locally, we won't save any information.",
        },
        {
          element: document.getElementById("camera"),
          intro:
            "Make sure your face is within the box and it’s colored green.",
        },
        {
          element: document.getElementById("bubble"),
          intro:
            "Click the seven blue bubbles whist looking at them to train a mapping between your eyes and screen positions.",
        },
      ],
      tooltipClass: "customTooltip",
    })
    .start();
}

$("#nextBtn").click(() => {
  location.href = "./question.html";
});
