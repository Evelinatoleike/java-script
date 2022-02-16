let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let div = document.querySelector(".klase");
    div.setAttribute("class", "klase kitaKlase");
    div.classList.add("kitaKlase", "darVienaKlase");
    div.classList.remove("kitaKlase");
    div.classList.toggle("klase");
})