/*
  Student Name: James Barlow
  File Name: script.js
  Date: 11/12/2021
*/

function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display="block";
  }
  
}
