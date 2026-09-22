document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
  }

  var dropdowns = document.querySelectorAll(".has-dropdown");
  dropdowns.forEach(function (dd) {
    var button = dd.querySelector("button");
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = dd.classList.contains("open");
      dropdowns.forEach(function (other) { other.classList.remove("open"); });
      if (!isOpen) dd.classList.add("open");
    });
  });

  document.addEventListener("click", function () {
    dropdowns.forEach(function (dd) { dd.classList.remove("open"); });
  });

  // Close mobile menu after clicking a link
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (mainNav.classList.contains("open")) mainNav.classList.remove("open");
    });
  });
});
