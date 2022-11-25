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
  const header = document.querySelector('.header');

  if (window.scrollY < header.clientHeight) {
    fixMenu.classList.remove("active");
  } else {
    fixMenu.classList.add("active");
  }
});

