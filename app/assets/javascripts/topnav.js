// Top navigation-bar script.
// Changes styling of top bar when page is scrolled

  function Scroll() {
    var top = document.getElementById('header');
    var ypos = window.pageYOffset;
    if(ypos > 500) {
      top.style.height = "70px";
      top.style.background = "#444";
    }
    else {
      top.style.height = "150px";
      top.style.background = "#ccc";
    }
  }

  window.addEventListener("scroll", Scroll)

