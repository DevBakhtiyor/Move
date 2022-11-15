console.log("hello world");
// Make mobile navigation work
document.addEventListener("DOMContentLoaded", function (e) {
  const menuIcon = document.querySelector("#menu-icon");
  const closeIcon = document.querySelector("#close-icon");
  const mobileNav = document.querySelector(".mobile-nav");

  menuIcon.addEventListener("click", function () {
    mobileNav.classList.add("mobile-nav-open");
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.classList.remove("mobile-nav-open");
  });

  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
});
