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
// Smooth scroll to anchor.

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Links Active
const links = document.querySelectorAll(".desktop_menu a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((link) => {
      link.parentElement.classList.remove("active");
    });

    this.parentElement.classList.add("active");
  });
});

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var linkText = document.getElementById("read-more-link");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    linkText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    linkText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// document.querySelector(".year").innerHTML = new Date().getFullYear();
