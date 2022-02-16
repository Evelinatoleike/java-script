
let season = document.getElementById("season");
let body = document.querySelector("body");

season.addEventListener("change", function () {
    let value = season.value;
    if (value === "01") {
        body.style.backgroundImage = 'url("./img/02.jpg")';
    } else if (value === "02") {
        body.style.backgroundImage = 'url("./img/01.jpg")';
    } else if (value === "03") {
        body.style.backgroundImage = 'url("./img/03.jpg")';
    } else if (value === "04") {
        body.style.backgroundImage = 'url("./img/04.jpg")';
    }
});