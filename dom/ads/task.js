const rotators = Array.from(document.querySelectorAll(".rotator__case"));
const rotatorMain = document.querySelector(".rotator");
let speed = 1000;
function changeWords() {
  setTimeout(() => {
    for (let rot of rotators) {
          if (rot.nextElementSibling === null) {
        rotatorMain.firstElementChild.classList.add("rotator__case_active");
        rotatorMain.firstElementChild.style.color =
        rotatorMain.firstElementChild.dataset.color;
        speed = rotatorMain.firstElementChild.dataset.speed;
        rot.classList.remove("rotator__case_active");
      } else if (rot.classList.contains("rotator__case_active")) {
       rot.nextElementSibling.classList.add("rotator__case_active");
        rot.nextElementSibling.style.color =
         rot.nextElementSibling.dataset.color;
        speed = rot.nextElementSibling.dataset.speed;
        rot.classList.remove("rotator__case_active");
        break;
      }
    }
  }, speed);
}
setInterval(changeWords, speed);