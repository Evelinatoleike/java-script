
let fotoGal = document.getElementsByClassName("img-list")[0];
let bigImg = document.getElementsByClassName("big-img")[0];
let p = document.querySelector("p");

fotoGal.addEventListener("click", function (e) {
    console.log(e.target.currentSrc);
    let src = e.target.currentSrc;
    console.log(e.target.alt);
    let alt = e.target.alt;
    bigImg = setAttribute("src", src);
    p.textContent = alt;
})