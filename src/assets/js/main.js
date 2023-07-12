const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");

bar.addEventListener("click", () => menu.classList.add("nav__menu-visible"));

close.addEventListener("click", () => menu.classList.remove("nav__menu-visible"));
