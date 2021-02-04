function myFunction() {
  var x = document.getElementById("sideNav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.textDecoration = "none";
    x.style.fontSize = "32pt";
    x.style.justifyContent = "center";
  }
}

var nav = document.getElementById('navbar');
if(window.pageXOffset >= 10){
    nav.style.backgroundColor='white';
}
if(window.pageXOffset < 10){
    nav.style.backgroundColor='transparent';
    nav.style.backgroundColor='transparent';
}