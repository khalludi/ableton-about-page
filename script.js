var showingDropdown = false;

function myFunction() {
  console.log("Called myFunction()!");

  var x = document.getElementById("navDropdown");
  var logo = document.getElementsByClassName("logo")[0];
  var navMenu = document.getElementsByClassName('nav-menu')[0];
  var downArrow = document.getElementById("down-arrow");
  if (!showingDropdown) {
    x.className += " nav-show";
    logo.className += " logo-white";
    navMenu.className += " nav-menu-open";
    downArrow.className = "up-arrow";
    showingDropdown = true;
  } else {
    x.className = "nav-dropdown";
    logo.className = "logo";
    navMenu.className = "nav-link nav-menu";
    downArrow.className = "down-arrow";
    showingDropdown = false;
  }
}