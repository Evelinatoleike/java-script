// let btn1 = document.getElementById("1");

// btn1.addEventListener("click", function () {
//     let img1 = document.querySelector("img");
//     img1.style.width = "700px"
// });

// let btn2 = document.getElementById("2");

// btn2.addEventListener("click", function () {
//     let img2 = document.querySelector("img");
//     img2.style.width = "300px";
// });

// let btn3 = document.getElementById("3");

// btn3.addEventListener("click", function () {
//     let img3 = document.querySelector("img");
//     img3.style.filter = "none";
// });

// let btn4 = document.getElementById("4");

// btn4.addEventListener("click", function () {
//     let img4 = document.querySelector("img");
//     img4.style.filter = "grayscale(100%)";
// });

// let newH = document.createEvent("h");
// newH.textContent = "Pavadinimas";
// let p = document.querySelector("p");
// let parent = document.querySelector("div");
// parent.insertBefore(newH, p);

//1

// let btn = document.getElementById("1");

// btn.addEventListener("click", function () {
//     let newH = document.createElement("h");
//     newH.textContent = "Pavadinimas";
//     let p = document.querySelector("p");
//     let parent = document.querySelector("div");
//     parent.insertBefore(newH, p);
// });

// let btn1 = document.getElementById("2");

// btn1.addEventListener("click", function () {
//     let pav = document.querySelector("h");
//     pav.style.display = "none";
// });

// //2

// let btn = document.getElementById("1");

// btn.addEventListener("click", function () {
//     let pav = document.querySelector("h");
//     pav.style.display = "none";
// });


// let btn1 = document.getElementById("2");

// btn1.addEventListener("click", function () {
//     let pav = document.querySelector("h");
//     pav.style.display = "block";
// });

//3

// let btn = document.getElementById("1");

// btn.addEventListener("click", function () {
//     let pav = document.querySelector("h");
//     pav.classList.toggle("pav");
// });

// swal("Here's the title!", "...and here's the text!");

// let btn1 = document.getElementById("1");

// btn1.addEventListener("click", function () {
//     let all = document.querySelector("div1");
//     all.style.display = "block";
// });

// let btn2 = document.getElementById("2");

// btn2.addEventListener("click", function () {
//     swal("Here's the title!", "...and here's the text!");
//     let all = document.querySelector("div1");
//     all.style.display = "none";
// });

// 2022.02.09

let btn1 = document.getElementById("1");

btn1.addEventListener("click", function () {
    let pav = document.querySelector("div1");
    pav.style.float = "";
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
    let pav1 = document.querySelector("div1");
    pav.classList.toggle("pav1");
});