window.onscroll = function () {
  var header = document.querySelector(".header");
  var headerClass = header.classList;
  var pageHeight = document.body.scrollHeight;
  var currentScrollPos = window.pageYOffset;
  if (
    currentScrollPos > 0 &&
    currentScrollPos < pageHeight - window.innerHeight
  ) {
    headerClass.add("scrolled");
  } else {
    headerClass.remove("scrolled");
  }
};

function toggleMenu() {
  var menu = document.querySelector(".open");
  var menuClose = document.querySelector(".hide");
  var menuBox = document.querySelector(".mobile_menu");
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

// document.querySelector(".year").innerHTML = new Date().getFullYear();
