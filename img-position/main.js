let btn1 = document.getElementById("1");

btn1.addEventListener("click", function () {
    let pav = document.querySelector("div1");
    pav.style.float = "left";
});

let btn2 = document.getElementById("2");

btn2.addEventListener("click", function () {
    let pav = document.querySelector("div1");
    pav.style.float = "right";
});

let btn3 = document.getElementById("3");

btn3.addEventListener("click", function () {
    let pav = document.querySelector("div1");
    pav.style.display = "none";
});

let btn4 = document.getElementById("4");

btn4.addEventListener("click", function () {
    let pav = document.querySelector("div1");
    pav.classList.toggle("pav");
});



let btn5 = document.getElementById("5");

btn5.addEventListener("click", function () {
    let div = document.querySelector("img");
    div.classList.toggle("text");

});