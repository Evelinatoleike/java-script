function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let count = 0;
let randNum = random(0, 100);
console.log(randNum);

function numCheck(rNum, ivestasSkaicius) {
    let ats = "";
    if (ivestasSkaicius == rNum) {
        ats = "Atspejai";
    } else if (ivestasSkaicius > rNum) {
        ats = "Skaicius yra mazesnis";
    } else if (ivestasSkaicius < rNum) {
        ats = "Skaicius yra didesnis";
    }
    return ats;
}

let form = document.querySelector("form");
let atsParag1 = document.getElementsByTagName("p")[0];
let atsParag2 = document.getElementsByTagName("p")[1];

form.addEventListener("submit", function (e) {
    count++;
    e.preventDefault();
    console.log(e.target.elements.number.value);
    let spejimas = e.target.elements.number.value;
    console.log(numCheck(randNum, spejimas));
    atsParag1.textContent = numCheck(randNum, spejimas);
    atsParag2.textContent = "Spejimu skaicius: " + count;
})