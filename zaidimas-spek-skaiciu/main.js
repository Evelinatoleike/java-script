function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let luckyNumber = rand(1, 100);
console.log(luckyNumber);
let count = 0;
let answer = document.createElement("p");
let counting = document.createElement("p1");
let body = document.querySelector("body");
let forma = document.forms["guessNumber"];


function numCheck(rNum, gNum) {
    let result = "";
    if (luckyNumber == gNum) {
        result = "Very lucky guess!";
    } else if (luckyNumber > gNum) {
        result = "Too big!";
    } else if (luckyNumber < gNum) {
        result = "Too small!";
    }
    else { result = "Error" }
    return result;
}

forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let guesing = +forma["number"].value;
    answer.textContent = numCheck(luckyNumber, guesing);
    count++;
    counting.textContent = count + " Guesses are made.";
    body.appendChild(answer);
    body.appendChild(counting);
})