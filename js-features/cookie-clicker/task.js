let cookie = document.getElementById('cookie');

cookie.onclick = clickSize;

function clickSize() {
    let count = document.getElementById("clicker__counter");
    let img = document.getElementById("cookie");
    count.textContent = Number(count.textContent)  + 1;

    img.width = 240;
    img.height = 170;

    setTimeout(() => {
        img.width = 200;
        img.height = 130;
    }, 50);
}