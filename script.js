function myFunction() {
  var x = document.getElementById("sideNav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('#navBar').addClass('colorSidebar');
    } else {
        $('#navBar').removeClass('colorSidebar');
    }
})