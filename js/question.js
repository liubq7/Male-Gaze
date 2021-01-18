$("#nextBtn").click(() => {
  var ipt = $("input").val();
  if (ipt) {
    localStorage.setItem("ipt", ipt);
    location.href = "./selfview.html";
  } else {
    $("#errorText").css({ display: "block" });
  }
});
