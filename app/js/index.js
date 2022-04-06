const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

var tele = document.querySelector("#tel");

tele.addEventListener("keyup", function (e) {
  if (
    event.key != "Backspace" &&
    (tele.value.length === 3 || tele.value.length === 7)
  ) {
    tele.value += "-";
  }
});
