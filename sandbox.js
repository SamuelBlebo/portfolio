function toggleMenu() {
  var menu = document.querySelector(".open");
  var menuClose = document.querySelector(".hide");
  var menuBox = document.querySelector(".menu-container");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menuClose.style.display = "none";
    menuBox.style.display = "none";
  } else {
    menu.style.display = "none";
    menuClose.style.display = "block";
    menuBox.style.display = "flex";
  }
}
