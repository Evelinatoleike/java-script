let dataArray = [
    {
        imgSrc: "https://nuotraukos.mediakatalogas.lt/rsynced_images/cat-2123998_1280.jpg",
        text: "Žiema"

    },
    {
        imgSrc: "https://g3.dcdn.lt/images/pix/mergaite-pievoje-64879087.jpg",
        text: "Vasara"
    },
    {
        imgSrc: "https://g1.dcdn.lt/images/pix/obelis-zydi-74220312.jpg",
        text: "Pavasaris"
    },
    {
        imgSrc: "https://skaiciuokle.lt/xhr/image?q=https://skaiciuokle.lt/resources/i/calculators/liko-dienu-iki-rudens.png&w=700",
        text: "Ruduo"
    },
];
function changeHtml(data) {
    let text = document.getElementById("text");
    let img = document.getElementById("img");
    img.setAttribute("src", data.imgSrc);
    text.innerHTML = data.text;
}

function randomIndex(size) {
    let randInd = Math.floor(Math.random() * size);
    return randInd;
}

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
    let randInd = randomIndex(dataArray.length);
    changeHtml(dataArray[randInd]);
});