const divReveals = document.querySelectorAll(".reveal");
const viewHeight = window.innerHeight;

const openClass = function () {
  for (let divReveal of divReveals) {
    const divRevealTop = divReveal.getBoundingClientRect().top;
    const divRevealBottom = divReveal.getBoundingClientRect().bottom;
    if (divRevealBottom > 0 && divRevealTop < viewHeight) {
      divReveal.classList.add("reveal_active");
    } else {
      divReveal.classList.remove("reveal_active");
    }
  }
};
document.addEventListener("scroll", openClass);