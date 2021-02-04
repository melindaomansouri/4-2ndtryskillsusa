function myFunction() {
  var x = document.getElementById("sideNav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}