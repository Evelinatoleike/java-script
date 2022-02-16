let forms = document.getElementById("forma");
let sarasas = document.getElementById("sarasas");
let laukas = document.querySelector("input");

forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let tekstas = e.target.elements.tekstas.value;
    let sarasasEl = document.createElement("li");
    sarasasEl.textContent = tekstas;
    sarasas.appendChild(sarasasEl);
});
laukas.addEventListener("focus", function (e) {
    e.target.style.background = "blue";
    laukas.value = ""
})
laukas.addEventListener("focus", function (e) {
    e.target.style.background = "";
})