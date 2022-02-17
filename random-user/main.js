
function createCard() {

    let img = document.createElement("img");
    img.className = "img";
    img.src = "https://previews.123rf.com/images/gow27/gow271202/gow27120200033/12162995-rosa-wc-schild-f%C3%BCr-frauen.jpg";

    let nameSurname = document.createElement("p");
    nameSurname.textContent = "Evelina Toleike";

    let age = document.createElement("p");
    age.textContent = "29";

    let address = document.createElement("p");
    address.textContent = "Vilnius";

    let email = document.createElement("p");
    email.textContent = "ejanusauskaite@gmail.com";


    let newCard = document.createElement("div");
    newCard.className = "item";

    newCard.append(img, nameSurname, age, address, email);
    return newCard;
}

// function appendCard() {
//     let newimg = "https://previews.123rf.com/images/gow27/gow271202/gow27120200033/12162995-rosa-wc-schild-f%C3%BCr-frauen.jpg";
//     let nameSure = "Evelina Toleike";
//     let ageOld = "29";
//     let yourAddress = "Vilnius";
//     let emailTo = "ejanusauskaite@gmail.com";
// }

let parent = document.querySelector(".card");
let card = createCard();
parent.append(card);


async function getData() {

    const requestURL = 'https://randomuser.me/api/';
    const request = new Request(requestURL);

    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();

    // pasitikrinimui
    console.log(data);

    console.log(data.results[0].picture.larde);
    let { first, last } = data.results[0].name;
    console.log(first + " " + last);
    console.log("Age" + data.results[0].dob.age);
    console.log(data.results[0].location.city);
    console.log(data.results[0].picture.large);
}

function appendCard(card) {
    let div = document.getElementById("div");
    div.appendChild(card);
}

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    getData().then(data => {
        let { name, dob, location, email, picture } = data.results[0];
        name = `${name.title} ${name.first} ${name.last}`;
        dob = dob.age;
        location = `${location.city}, ${location.country}`;
        email = email;
        picture = picture.large;


        let card = createCard(name, dob, location, email, picture);
        appendCard(card);

        // appendCard(createCard(name, dob, location, email, picture));

    }).catch(error => {
        console.log(error);
    });
})