let upTxt = document.getElementsByClassName("up-text")[0];
let dwnTxt = document.getElementsByClassName("down-text")[0];
let backPic = document.querySelector("img");
let form = document.querySelector("form");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let vTxt = e.target.elements.virstxt.value;
    upTxt.textContent = vTxt;
    let aTxt = e.target.elements.aptxt.value;
    dwnTxt.textContent = aTxt;
    let urlTxt = e.target.elements.link.value;
    backPic.setAttribute("src", urlTxt);
})

