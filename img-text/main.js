//let dataArr = [
//  {
//      imgSrc: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg",
//       text: "you"
//   },
//   {
//      imgSrc: "https://cdn.pixabay.com/photo/2022/01/15/02/07/windows-6938478_960_720.jpg",
//      text: "day"
//  },
//  {
//       imgSrc: "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg",
//       text: "time"
//   }
//];

let btn = document.querySelector("button");

function changeHtml(data) {
    document.querySelector("img").setAttribute("src", data.imgSrc);
    let text = document.querySelector(".img-text");
    text.innerHTMT = data.text;
}

function randomIndex(size) {
    let randomInd = Math.floor(Math.random() * size);
    return randomInd;
}

btn.addEventListener("click", e => {
    let randInd = randomIndex(dataArr.length);
    changeHtml(dataArr[randInd]);
})



async function getData() {
    const requestURL = 'https://raw.githubusercontent.com/Evelinatoleike/java-script/main/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const JSON = await response.json();
    console.log(JSON);
    changeHtml(JSON[randomIndex(JSON.length)]);
}
getData();
btn.addEventListener("click", function (e) {
    confetti({
        particleCount: 300,
        spread: 180,
        startVelocity: 60
    });
    getData();
})