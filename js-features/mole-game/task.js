for (let i = 1; i <= 9; i++) {
    let hole;
    hole = document.getElementById('hole' + i);
    hole.onclick = function() {
     let dead = document.getElementById('dead');
     let lost = document.getElementById('lost');

     if (hole.className == 'hole hole_has-mole') {
      dead.textContent = +(dead.textContent) + 1;
      if (dead.textContent == 10) {
       alert('Победа');
       dead.textContent = 0;
       lost.textContent = 0;
      }
     } else {
      lost.textContent = +(lost.textContent) + 1;
      if (lost.textContent == 5) {
       alert('Поражение');
       dead.textContent = 0;
       lost.textContent = 0;
      }
     }
    }
   }