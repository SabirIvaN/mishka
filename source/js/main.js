var buttonMenu = document.querySelector("#main-nav__button");
var formMenu_1 = document.querySelector("#main-nav__list-1");
var formMenu_2 = document.querySelector("#main-nav__list-2");

buttonMenu.classList.add("main-nav__button--shower");
formMenu_1.classList.add("main-nav__list--hidden");
formMenu_2.classList.add("main-nav__list--hidden");

buttonMenu.addEventListener("click", function() {
  event.preventDefault();
  buttonMenu.classList.toggle("main-nav__button--active");
  formMenu_1.classList.toggle("main-nav__list--viewer");
  formMenu_2.classList.toggle("main-nav__list--viewer");
});

var purchase = document.querySelector(".catalog__purchase");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal-window");

purchase.addEventListener("click", function() {
  event.preventDefault();
  overlay.classList.add("overlay--show");
  modal.classList.add("modal-window--show");
});

overlay.addEventListener("click", function() {
  event.preventDefault();
  overlay.classList.remove("overlay--show");
  modal.classList.remove("modal-window--show");
});
