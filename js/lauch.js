$("#start").click(() => {
  var mode = $("input:checked").val();
  localStorage.setItem("mode", mode);
  location.href = "./maleview.html";
});
