
let atsParag1 = document.getElementsByTagName("p")[0];
let form = document.querySelector("form");

function getKMI(num1, num2) {
    return num2 * 10000 / (num1 * num1);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let Ugis = +e.target.elements.Ugis.value;
    let Svoris = +e.target.elements.Svoris.value;
    atsParag1.textContent = getKMI(Ugis, Svoris).toFixed(2);
})