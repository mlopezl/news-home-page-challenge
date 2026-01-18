const menuIcon = document.getElementById("menu-icon");
const menuCloseIcon = document.getElementById("menu-close-icon");
const hideMenu = document.getElementById("hide-menu");
const body = document.getElementById("body");

menuIcon.addEventListener("click", (e) => {
  hideMenu.classList.add("show__menu");
  body.classList.add("overlay-activo");
});

menuCloseIcon.addEventListener("click", (e) => {
  hideMenu.classList.remove("show__menu");
  body.classList.remove("overlay-activo");
});

document.addEventListener("click", (e) => {
  if (
    !menuIcon.contains(e.target) &&
    !hideMenu.contains(e.target)
  ) {
    hideMenu.classList.remove("show__menu");
    body.classList.remove("overlay-activo");
  }
});

