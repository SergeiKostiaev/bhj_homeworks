"Use strict";

let myTimer = setInterval(function() {
    let timer = document.getElementById("timer");
    timer.textContent -= 1;
    
    if(timer.textContent <= 0) {
        alert("Вы победили в конкурсе!");
    }
},1000);

