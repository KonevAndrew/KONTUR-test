"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".header__hamburger");
  const menu = document.querySelector('.header__fix-menu');
  const body = document.querySelector('body');



  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("header__hamburger--active");
    menu.classList.toggle('active');
    body.classList.toggle('hidden');
  });

});

window.addEventListener("scroll", function () {
  const fixMenu = document.querySelector('.header__fix');

  if (window.scrollY < (window.innerHeight - 250)) {
    fixMenu.classList.remove("active");
  } else {
    fixMenu.classList.add("active");
  }
});

